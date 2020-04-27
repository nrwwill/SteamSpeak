const __importDefault =
  (this && this.__importDefault) ||
  // eslint-disable-next-line func-names
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, '__esModule', { value: true });
const path = __importDefault(require('path'));
const utils = require('@docusaurus/utils');
const releaseUtils = require('./releaseUtils');

const DEFAULT_OPTIONS = {
  path: 'releases',
  routeBasePath: 'releases',
  include: ['*.md', '*.mdx'],
  releaseComponent: '@theme/ReleasePage',
  releaseDownloadComponent: '@theme/ReleaseDownloadPage',
  remarkPlugins: [],
  rehypePlugins: [],
  truncateMarker: /<!--\s*(truncate)\s*-->/
};
function pluginContentRelease(context, opts) {
  const options = { ...DEFAULT_OPTIONS, ...opts };
  const { siteDir, generatedFilesDir } = context;
  const contentPath = path.default.resolve(siteDir, options.path);
  const dataDir = path.default.join(generatedFilesDir, 'releases');
  let releases = [];
  return {
    name: 'releases',
    getPathsToWatch() {
      const { include = [] } = options;
      const releasesGlobPattern = include.map(
        (pattern) => `${contentPath}/${pattern}`
      );
      return [...releasesGlobPattern];
    },
    async loadContent() {
      //
      // Releases
      //
      releases = await releaseUtils.generateReleases(
        contentPath,
        context,
        options
      );
      // Colocate next and prev metadata.
      releases.forEach((release, index) => {
        const prevItem = index > 0 ? releases[index - 1] : null;
        if (prevItem) {
          release.metadata.prevItem = {
            title: prevItem.metadata.title,
            permalink: prevItem.metadata.permalink
          };
        }
        const nextItem =
          index < releases.length - 1 ? releases[index + 1] : null;
        if (nextItem) {
          release.metadata.nextItem = {
            title: nextItem.metadata.title,
            permalink: nextItem.metadata.permalink
          };
        }
      });
      //
      // Return
      //
      return {
        releases
      };
    },
    async contentLoaded({ content: releaseContents, actions }) {
      if (!releaseContents) {
        return;
      }
      //
      // Prepare
      //
      const { releaseComponent, releaseDownloadComponent } = options;
      const { addRoute, createData } = actions;
      const { releases } = releaseContents;
      //
      // Release pages
      //
      await Promise.all(
        releases.map(async (release) => {
          const { metadata } = release;
          await createData(
            // Note that this created data path must be in sync with
            // metadataPath provided to mdx-loader.
            `${utils.docuHash(metadata.source)}.json`,
            JSON.stringify(metadata, null, 2)
          );
          addRoute({
            path: metadata.permalink,
            component: releaseComponent,
            exact: true,
            modules: {
              content: metadata.source
            }
          });
          const downloadPath = utils.normalizeUrl([
            metadata.permalink,
            'download'
          ]);
          addRoute({
            path: downloadPath,
            component: releaseDownloadComponent,
            exact: true,
            modules: {
              content: metadata.source
            }
          });
        })
      );
    },
    configureWebpack(_config, isServer, { getBabelLoader, getCacheLoader }) {
      const { rehypePlugins, remarkPlugins, truncateMarker } = options;
      return {
        resolve: {
          alias: {
            '~release': dataDir
          }
        },
        module: {
          rules: [
            {
              test: /(\.mdx?)$/,
              include: [contentPath],
              use: [
                getCacheLoader(isServer),
                getBabelLoader(isServer),
                {
                  loader: '@docusaurus/mdx-loader',
                  options: {
                    remarkPlugins,
                    rehypePlugins,
                    // Note that metadataPath must be the same/in-sync as
                    // the path from createData for each MDX.
                    metadataPath: (mdxPath) => {
                      const aliasedSource = utils.aliasedSitePath(
                        mdxPath,
                        siteDir
                      );
                      return path.default.join(
                        dataDir,
                        `${utils.docuHash(aliasedSource)}.json`
                      );
                    }
                  }
                },
                {
                  loader: path.default.resolve(
                    __dirname,
                    './markdownLoader.js'
                  ),
                  options: {
                    siteDir,
                    contentPath,
                    truncateMarker,
                    releases
                  }
                }
              ].filter(Boolean)
            }
          ]
        }
      };
    },
    injectHtmlTags() {
      return {};
    }
  };
}
exports.default = pluginContentRelease;

import React from 'react';
import repoUrl from '@site/src/exports/repoUrl';

import classnames from 'classnames';

function CTA({ github, inline, size, style }) {
  const classes = classnames(
    'panel',
    'panel--button',
    `panel--${size}`,
    `panel--${style}`,
    { 'panel--button--inline': inline }
  );

  return (
    <div className="row row--squished">
      <div className="col">
        <a
          href="https://twitter.com/dalexhd"
          target="_blank"
          rel="noopener noreferrer"
          className={classes}
        >
          <div className="panel--icon">
            <i className="feather icon-twitter" title="Twitter" />
          </div>
          <div>
            <div className="panel--title">Follow @dalexhd</div>
            <div className="panel--description">Get real-time updates!</div>
          </div>
        </a>
      </div>
      {github !== false && (
        <div className="col">
          <a
            href={repoUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className={classes}
          >
            <div className="panel--icon">
              <i className="feather icon-github" />
            </div>
            <div>
              <div className="panel--title">Star dalexhd/SteamSpeak</div>
              <div className="panel--description">
                Star the repo to support us.
              </div>
            </div>
          </a>
        </div>
      )}
    </div>
  );
}

export default CTA;

# Changelog

## [v0.8.1](https://github.com/dalexhd/steamspeak/tree/v0.8.1) (2020-06-07)

[Full Changelog](https://github.com/dalexhd/steamspeak/compare/v0.8.0...v0.8.1)

:bug: Bug Fixes:

- fix\(bug\): delete regex steamspeak groups. [\#137](https://github.com/dalexhd/SteamSpeak/pull/137) ([dalexhd](https://github.com/dalexhd))

## [v0.8.0](https://github.com/dalexhd/steamspeak/tree/v0.8.0) (2020-06-04)

[Full Changelog](https://github.com/dalexhd/steamspeak/compare/v0.7.0...v0.8.0)

<div align="center">

![image](https://i.imgur.com/ytZnG2L.gif)

> Less bugs, multi game plugins, faster documentation. I almost forgot, SteamSpeak now supports CS:GO integration 👾
</div>
<details><summary>Upgrade guide</summary>
<p>

### Breaking changes:
#### Plugins
- Afk kick
	- Changed plugin interval from "seconds: 5" to "seconds: 10"
	- Changed kick interval from "seconds: 5" to "minutes: 30"
- Afk move
	 -	Changed plugin interval from "seconds: 5" to "seconds: 10"
	 -	Changed move interval from "seconds: 5" to "minutes: 20"
- Change channel
	- Now it's disabled by default
	- Replaced config data changes keys. From channel_name to channelName & channel_description to channelDescription
	- Changed plugin interval from "seconds: 3" to "seconds: 5"
- Multi function
	- Changed plugin interval from "seconds: 5" to "minutes: 5"
#### Database
- verified client (NOTE: You'll need to update your database manually)
	- Changed dbid type from number to string.
	- Changed groupId type from number to string.

### Notes:
#### Steam Modules
 - rich presence
	- Now SteamSpeak uses Regex to filter steamGroups. The used regex is: https://regex101.com/r/TexROh/1
	IMPORTANT: Now groups (only if the group's type is query and namemode is set to 2) that contains "*#[number] [rich presence]*" are considered SteamSpeak groups. This means that you should not create a group with the same pattern and same properties to prevent SteamSpeak deleting them. This is done to prevent group duplication bug.

</p>
</details>

:boom: Breaking Changes:

- chore\(deps\): bump ts3-nodejs-library from 2.4.4 to 3.0.4 [\#130](https://github.com/dalexhd/SteamSpeak/pull/130) ([dalexhd](https://github.com/dalexhd))
- feat\(breaking\): Disable all plugins by default. [\#124](https://github.com/dalexhd/SteamSpeak/pull/124) ([dalexhd](https://github.com/dalexhd))
- feat\(breaking\): Add uri to database config. [\#122](https://github.com/dalexhd/SteamSpeak/pull/122) ([dalexhd](https://github.com/dalexhd))
- feat\(breaking\): Add ts-node compilation environment. [\#116](https://github.com/dalexhd/SteamSpeak/pull/116) ([dalexhd](https://github.com/dalexhd))

:rocket: New Features:

- Add option to disable website. [\#120](https://github.com/dalexhd/SteamSpeak/issues/120)
- feat\(new game\): Add CS:GO game. [\#118](https://github.com/dalexhd/SteamSpeak/pull/118) ([dalexhd](https://github.com/dalexhd))
- feat: Add multiple game environment. [\#117](https://github.com/dalexhd/SteamSpeak/pull/117) ([dalexhd](https://github.com/dalexhd))

:bug: Bug Fixes:

- fix: Admin dashboard login. [\#123](https://github.com/dalexhd/SteamSpeak/pull/123) ([dalexhd](https://github.com/dalexhd))

:memo: Documentation:

- docs: Migrate to netlify. [\#131](https://github.com/dalexhd/SteamSpeak/pull/131) ([dalexhd](https://github.com/dalexhd))
- docs: Add stars to metadata. [\#115](https://github.com/dalexhd/SteamSpeak/pull/115) ([dalexhd](https://github.com/dalexhd))

:wrench: Dependencies:

- chore\(deps-dev\): bump @typescript-eslint/parser from 2.31.0 to 3.0.2 [\#129](https://github.com/dalexhd/SteamSpeak/pull/129) ([dependabot-preview[bot]](https://github.com/apps/dependabot-preview))
- chore\(deps\): bump echarts from 4.7.0 to 4.8.0 [\#128](https://github.com/dalexhd/SteamSpeak/pull/128) ([dependabot-preview[bot]](https://github.com/apps/dependabot-preview))
- chore\(deps-dev\): bump tailwindcss from 1.4.5 to 1.4.6 [\#127](https://github.com/dalexhd/SteamSpeak/pull/127) ([dependabot-preview[bot]](https://github.com/apps/dependabot-preview))
- chore\(deps-dev\): bump lerna from 3.20.2 to 3.22.0 [\#126](https://github.com/dalexhd/SteamSpeak/pull/126) ([dependabot-preview[bot]](https://github.com/apps/dependabot-preview))
- chore\(deps\): bump ioredis from 4.16.3 to 4.17.3 [\#125](https://github.com/dalexhd/SteamSpeak/pull/125) ([dependabot-preview[bot]](https://github.com/apps/dependabot-preview))
- chore\(deps\): bump activesupport from 6.0.2.1 to 6.0.3.1 in /scripts [\#119](https://github.com/dalexhd/SteamSpeak/pull/119) ([dependabot[bot]](https://github.com/apps/dependabot))

:star2: Chore:

- chore\(img compression\): Optimize images [\#133](https://github.com/dalexhd/SteamSpeak/pull/133) ([imgbot[bot]](https://github.com/apps/imgbot))
- chore: Add sponsorship button. [\#132](https://github.com/dalexhd/SteamSpeak/pull/132) ([dalexhd](https://github.com/dalexhd))
- chore: Remove unused docker file. [\#114](https://github.com/dalexhd/SteamSpeak/pull/114) ([dalexhd](https://github.com/dalexhd))
- chore\(ci\): Add new game scope to semantic. [\#113](https://github.com/dalexhd/SteamSpeak/pull/113) ([dalexhd](https://github.com/dalexhd))

## [v0.7.0](https://github.com/dalexhd/steamspeak/tree/v0.7.0) (2020-05-26)

[Full Changelog](https://github.com/dalexhd/steamspeak/compare/v0.6.0...v0.7.0)

![image](https://i.imgur.com/ktA2pst.gif)

> Quite similar to discord's rich presence, right?
> Discord will hate this... :grimacing:


:boom: Breaking Changes:

- feat\(breaking\): Add srv parametter to mongodb. [\#110](https://github.com/dalexhd/SteamSpeak/pull/110) ([dalexhd](https://github.com/dalexhd))

:rocket: New Features:

- feat: Add TS5 client steam banner status. [\#109](https://github.com/dalexhd/SteamSpeak/pull/109) ([dalexhd](https://github.com/dalexhd))

:bug: Bug Fixes:

- fix: Resolve tsbuildsum not found on first build. [\#108](https://github.com/dalexhd/SteamSpeak/pull/108) ([dalexhd](https://github.com/dalexhd))
- fix: Create groups only if connected. [\#105](https://github.com/dalexhd/SteamSpeak/pull/105) ([dalexhd](https://github.com/dalexhd))

:memo: Documentation:

- docs: Add official installation guides. [\#107](https://github.com/dalexhd/SteamSpeak/pull/107) ([dalexhd](https://github.com/dalexhd))
- docs: Add dark default theme. [\#103](https://github.com/dalexhd/SteamSpeak/pull/103) ([dalexhd](https://github.com/dalexhd))

:star2: Chore:

- chore: Check if config is present before build. [\#106](https://github.com/dalexhd/SteamSpeak/pull/106) ([dalexhd](https://github.com/dalexhd))

## [v0.6.0](https://github.com/dalexhd/steamspeak/tree/v0.6.0) (2020-05-14)

[Full Changelog](https://github.com/dalexhd/steamspeak/compare/v0.5.0...v0.6.0)

:boom: Breaking Changes:

- feat: Migrate server to TypeScript [\#57](https://github.com/dalexhd/SteamSpeak/pull/57) ([dalexhd](https://github.com/dalexhd))

:rotating_light: Security fixes:

- fix: Fix for 1 vulnerabilities [\#54](https://github.com/dalexhd/SteamSpeak/pull/54) ([snyk-bot](https://github.com/snyk-bot))

:memo: Documentation:

- docs: Add hotjar analytics. [\#99](https://github.com/dalexhd/SteamSpeak/pull/99) ([dalexhd](https://github.com/dalexhd))

:wrench: Dependencies:

- chore\(deps\): bump eventemitter2 from 6.3.1 to 6.4.0 [\#98](https://github.com/dalexhd/SteamSpeak/pull/98) ([dependabot-preview[bot]](https://github.com/apps/dependabot-preview))
- chore\(deps-dev\): bump tailwindcss from 1.2.0 to 1.4.5 [\#97](https://github.com/dalexhd/SteamSpeak/pull/97) ([dependabot-preview[bot]](https://github.com/apps/dependabot-preview))
- chore\(deps\): bump ioredis from 4.16.2 to 4.16.3 [\#96](https://github.com/dalexhd/SteamSpeak/pull/96) ([dependabot-preview[bot]](https://github.com/apps/dependabot-preview))
- chore\(deps\): bump chalk from 3.0.0 to 4.0.0 [\#95](https://github.com/dalexhd/SteamSpeak/pull/95) ([dependabot-preview[bot]](https://github.com/apps/dependabot-preview))
- chore\(deps-dev\): bump stylelint from 13.3.2 to 13.3.3 [\#94](https://github.com/dalexhd/SteamSpeak/pull/94) ([dependabot-preview[bot]](https://github.com/apps/dependabot-preview))
- chore\(deps-dev\): bump @vue/cli-plugin-router from 4.2.3 to 4.3.1 [\#93](https://github.com/dalexhd/SteamSpeak/pull/93) ([dependabot-preview[bot]](https://github.com/apps/dependabot-preview))
- chore\(deps\): bump swiper from 5.3.7 to 5.3.8 [\#92](https://github.com/dalexhd/SteamSpeak/pull/92) ([dependabot-preview[bot]](https://github.com/apps/dependabot-preview))
- chore\(deps-dev\): bump @vue/cli-plugin-pwa from 4.2.3 to 4.3.1 [\#91](https://github.com/dalexhd/SteamSpeak/pull/91) ([dependabot-preview[bot]](https://github.com/apps/dependabot-preview))
- chore\(deps-dev\): bump @vue/cli-plugin-eslint from 4.2.3 to 4.3.1 [\#90](https://github.com/dalexhd/SteamSpeak/pull/90) ([dependabot-preview[bot]](https://github.com/apps/dependabot-preview))
- chore\(deps-dev\): bump lint-staged from 10.1.5 to 10.2.2 [\#89](https://github.com/dalexhd/SteamSpeak/pull/89) ([dependabot-preview[bot]](https://github.com/apps/dependabot-preview))
- chore\(deps\): bump vue-property-decorator from 8.4.1 to 8.4.2 [\#88](https://github.com/dalexhd/SteamSpeak/pull/88) ([dependabot-preview[bot]](https://github.com/apps/dependabot-preview))
- chore\(deps-dev\): bump babel-jest from 25.3.0 to 26.0.1 [\#87](https://github.com/dalexhd/SteamSpeak/pull/87) ([dependabot-preview[bot]](https://github.com/apps/dependabot-preview))
- chore\(deps-dev\): bump @vue/cli-plugin-babel from 4.2.3 to 4.3.1 [\#86](https://github.com/dalexhd/SteamSpeak/pull/86) ([dependabot-preview[bot]](https://github.com/apps/dependabot-preview))
- chore\(deps\): bump steam-user from 4.14.0 to 4.15.2 [\#85](https://github.com/dalexhd/SteamSpeak/pull/85) ([dependabot-preview[bot]](https://github.com/apps/dependabot-preview))
- chore\(deps\): bump chokidar from 3.3.1 to 3.4.0 [\#84](https://github.com/dalexhd/SteamSpeak/pull/84) ([dependabot-preview[bot]](https://github.com/apps/dependabot-preview))
- chore\(deps\): bump xlsx from 0.15.6 to 0.16.0 [\#83](https://github.com/dalexhd/SteamSpeak/pull/83) ([dependabot-preview[bot]](https://github.com/apps/dependabot-preview))
- chore\(deps-dev\): bump @vue/cli-service from 4.2.3 to 4.3.1 [\#82](https://github.com/dalexhd/SteamSpeak/pull/82) ([dependabot-preview[bot]](https://github.com/apps/dependabot-preview))
- chore\(deps-dev\): bump stylelint-scss from 3.17.0 to 3.17.2 [\#81](https://github.com/dalexhd/SteamSpeak/pull/81) ([dependabot-preview[bot]](https://github.com/apps/dependabot-preview))
- chore\(deps\): bump mongoose from 5.9.9 to 5.9.12 [\#80](https://github.com/dalexhd/SteamSpeak/pull/80) ([dependabot-preview[bot]](https://github.com/apps/dependabot-preview))
- chore\(deps-dev\): bump purgecss from 2.1.2 to 2.2.1 [\#79](https://github.com/dalexhd/SteamSpeak/pull/79) ([dependabot-preview[bot]](https://github.com/apps/dependabot-preview))
- chore\(deps-dev\): bump @vue/cli-plugin-unit-jest from 4.2.3 to 4.3.1 [\#78](https://github.com/dalexhd/SteamSpeak/pull/78) ([dependabot-preview[bot]](https://github.com/apps/dependabot-preview))
- chore\(deps\): bump moment from 2.24.0 to 2.25.3 [\#77](https://github.com/dalexhd/SteamSpeak/pull/77) ([dependabot-preview[bot]](https://github.com/apps/dependabot-preview))
- chore\(deps-dev\): bump node-sass from 4.13.1 to 4.14.1 [\#76](https://github.com/dalexhd/SteamSpeak/pull/76) ([dependabot-preview[bot]](https://github.com/apps/dependabot-preview))
- chore\(deps\): bump vue-select from 3.10.1 to 3.10.3 [\#75](https://github.com/dalexhd/SteamSpeak/pull/75) ([dependabot-preview[bot]](https://github.com/apps/dependabot-preview))
- chore\(deps\): bump apexcharts from 3.18.1 to 3.19.0 [\#74](https://github.com/dalexhd/SteamSpeak/pull/74) ([dependabot-preview[bot]](https://github.com/apps/dependabot-preview))
- chore\(deps\): bump vue-awesome-swiper from 4.1.0 to 4.1.1 [\#73](https://github.com/dalexhd/SteamSpeak/pull/73) ([dependabot-preview[bot]](https://github.com/apps/dependabot-preview))
- chore\(deps-dev\): bump prettier from 2.0.4 to 2.0.5 [\#72](https://github.com/dalexhd/SteamSpeak/pull/72) ([dependabot-preview[bot]](https://github.com/apps/dependabot-preview))
- chore\(deps-dev\): bump concurrently from 5.1.0 to 5.2.0 [\#71](https://github.com/dalexhd/SteamSpeak/pull/71) ([dependabot-preview[bot]](https://github.com/apps/dependabot-preview))
- chore\(deps\): bump ag-grid-community from 23.0.2 to 23.1.0 [\#70](https://github.com/dalexhd/SteamSpeak/pull/70) ([dependabot-preview[bot]](https://github.com/apps/dependabot-preview))
- chore\(deps-dev\): bump @vue/test-utils from 1.0.0-beta.32 to 1.0.2 [\#69](https://github.com/dalexhd/SteamSpeak/pull/69) ([dependabot-preview[bot]](https://github.com/apps/dependabot-preview))
- chore\(deps\): bump vue-i18n from 8.17.2 to 8.17.4 [\#68](https://github.com/dalexhd/SteamSpeak/pull/68) ([dependabot-preview[bot]](https://github.com/apps/dependabot-preview))
- chore\(deps-dev\): bump @vue/cli-plugin-vuex from 4.2.3 to 4.3.1 [\#67](https://github.com/dalexhd/SteamSpeak/pull/67) ([dependabot-preview[bot]](https://github.com/apps/dependabot-preview))
- chore\(deps-dev\): bump jest from 25.3.0 to 26.0.1 [\#66](https://github.com/dalexhd/SteamSpeak/pull/66) ([dependabot-preview[bot]](https://github.com/apps/dependabot-preview))
- chore\(deps\): bump steam from 1.4.0 to 1.4.1 [\#65](https://github.com/dalexhd/SteamSpeak/pull/65) ([dependabot-preview[bot]](https://github.com/apps/dependabot-preview))
- chore\(deps\): bump firebase from 7.14.2 to 7.14.3 [\#64](https://github.com/dalexhd/SteamSpeak/pull/64) ([dependabot-preview[bot]](https://github.com/apps/dependabot-preview))
- chore\(deps\): bump ag-grid-vue from 23.0.2 to 23.1.0 [\#62](https://github.com/dalexhd/SteamSpeak/pull/62) ([dependabot-preview[bot]](https://github.com/apps/dependabot-preview))
- chore\(deps\): bump vee-validate from 2.2.15 to 3.3.0 [\#61](https://github.com/dalexhd/SteamSpeak/pull/61) ([dependabot-preview[bot]](https://github.com/apps/dependabot-preview))
- chore\(deps\): bump firebase from 7.12.0 to 7.14.2 [\#60](https://github.com/dalexhd/SteamSpeak/pull/60) ([dependabot-preview[bot]](https://github.com/apps/dependabot-preview))
- chore\(deps\): bump vuex from 3.1.3 to 3.3.0 [\#59](https://github.com/dalexhd/SteamSpeak/pull/59) ([dependabot-preview[bot]](https://github.com/apps/dependabot-preview))
- chore\(deps\): bump algoliasearch from 4.1.0 to 4.2.0 [\#58](https://github.com/dalexhd/SteamSpeak/pull/58) ([dependabot-preview[bot]](https://github.com/apps/dependabot-preview))

:star2: Chore:

- chore\(img compression\): Optimize images [\#63](https://github.com/dalexhd/SteamSpeak/pull/63) ([imgbot[bot]](https://github.com/apps/imgbot))

## [v0.5.0](https://github.com/dalexhd/steamspeak/tree/v0.5.0) (2020-04-27)

[Full Changelog](https://github.com/dalexhd/steamspeak/compare/v0.4.0...v0.5.0)

:rocket: New Features:

- feat: Add multi instance teamspeak bots. [\#51](https://github.com/dalexhd/SteamSpeak/pull/51) ([dalexhd](https://github.com/dalexhd))

:memo: Documentation:

- docs: Add new documentation theme [\#49](https://github.com/dalexhd/SteamSpeak/pull/49) ([dalexhd](https://github.com/dalexhd))

## [v0.4.0](https://github.com/dalexhd/steamspeak/tree/v0.4.0) (2020-04-20)

[Full Changelog](https://github.com/dalexhd/steamspeak/compare/v0.3.1...v0.4.0)

:rocket: New Features:

- Add multi function plugin. [\#47](https://github.com/dalexhd/SteamSpeak/pull/47) ([dalexhd](https://github.com/dalexhd))
- Add change channel plugin. [\#46](https://github.com/dalexhd/SteamSpeak/pull/46) ([dalexhd](https://github.com/dalexhd))
- Feature/add change channel plugin [\#43](https://github.com/dalexhd/SteamSpeak/pull/43) ([dalexhd](https://github.com/dalexhd))
- Add change channel plugin [\#41](https://github.com/dalexhd/SteamSpeak/pull/41) ([dalexhd](https://github.com/dalexhd))
- Add multi function plugin. [\#40](https://github.com/dalexhd/SteamSpeak/pull/40) ([dalexhd](https://github.com/dalexhd))

## [v0.3.1](https://github.com/dalexhd/steamspeak/tree/v0.3.1) (2020-04-19)

[Full Changelog](https://github.com/dalexhd/steamspeak/compare/v0.3.0...v0.3.1)

## [v0.3.0](https://github.com/dalexhd/steamspeak/tree/v0.3.0) (2020-04-18)

[Full Changelog](https://github.com/dalexhd/steamspeak/compare/v0.2.0...v0.3.0)

:rocket: New Features:

- Add steam rich presence [\#35](https://github.com/dalexhd/SteamSpeak/pull/35) ([dalexhd](https://github.com/dalexhd))

:non-potable_water: Closed Issues:

- Release summary v0.3.0 [\#36](https://github.com/dalexhd/SteamSpeak/issues/36)

## [v0.2.0](https://github.com/dalexhd/steamspeak/tree/v0.2.0) (2020-04-15)

[Full Changelog](https://github.com/dalexhd/steamspeak/compare/v0.1.1...v0.2.0)

:rocket: New Features:

- Add lerna environment [\#33](https://github.com/dalexhd/SteamSpeak/pull/33) ([dalexhd](https://github.com/dalexhd))

## [v0.1.1](https://github.com/dalexhd/steamspeak/tree/v0.1.1) (2020-04-06)

[Full Changelog](https://github.com/dalexhd/steamspeak/compare/v0.1.0...v0.1.1)

## [v0.1.0](https://github.com/dalexhd/steamspeak/tree/v0.1.0) (2020-04-05)

[Full Changelog](https://github.com/dalexhd/steamspeak/compare/v0.0.8...v0.1.0)

:rocket: New Features:

- Add frontend login. [\#29](https://github.com/dalexhd/SteamSpeak/pull/29) ([dalexhd](https://github.com/dalexhd))
- Feature/add frontend login. [\#28](https://github.com/dalexhd/SteamSpeak/pull/28) ([dalexhd](https://github.com/dalexhd))

## [v0.0.8](https://github.com/dalexhd/steamspeak/tree/v0.0.8) (2020-04-03)

[Full Changelog](https://github.com/dalexhd/steamspeak/compare/v0.0.7...v0.0.8)

:rocket: New Features:

- Add SteamSpeak features to documentation. [\#24](https://github.com/dalexhd/SteamSpeak/issues/24)

:memo: Documentation:

- Add new documentation system. [\#25](https://github.com/dalexhd/SteamSpeak/pull/25) ([dalexhd](https://github.com/dalexhd))

## [v0.0.7](https://github.com/dalexhd/steamspeak/tree/v0.0.7) (2020-03-27)

[Full Changelog](https://github.com/dalexhd/steamspeak/compare/v0.0.6...v0.0.7)

:rocket: New Features:

- Added ServerName TeamSpeak3 plugin. [\#20](https://github.com/dalexhd/SteamSpeak/pull/20) ([dalexhd](https://github.com/dalexhd))

:bug: Bug Fixes:

- Wrong version number on Web Panel. [\#21](https://github.com/dalexhd/SteamSpeak/issues/21)

## [v0.0.6](https://github.com/dalexhd/steamspeak/tree/v0.0.6) (2020-03-23)

[Full Changelog](https://github.com/dalexhd/steamspeak/compare/v0.0.5...v0.0.6)

:boom: Breaking Changes:

- Downgrade steam package version. [\#17](https://github.com/dalexhd/SteamSpeak/pull/17) ([dalexhd](https://github.com/dalexhd))

:rocket: New Features:

- Added Vue frontend. [\#14](https://github.com/dalexhd/SteamSpeak/pull/14) ([dalexhd](https://github.com/dalexhd))
- Added the first Plugin: AFKChecker [\#13](https://github.com/dalexhd/SteamSpeak/pull/13) ([dalexhd](https://github.com/dalexhd))

:bug: Bug Fixes:

- Installation problems. [\#16](https://github.com/dalexhd/SteamSpeak/issues/16)

## [v0.0.5](https://github.com/dalexhd/steamspeak/tree/v0.0.5) (2020-03-08)

[Full Changelog](https://github.com/dalexhd/steamspeak/compare/v0.0.4...v0.0.5)

:rocket: New Features:

- Add testing environment. [\#11](https://github.com/dalexhd/SteamSpeak/pull/11) ([dalexhd](https://github.com/dalexhd))

## [v0.0.4](https://github.com/dalexhd/steamspeak/tree/v0.0.4) (2020-03-08)

[Full Changelog](https://github.com/dalexhd/steamspeak/compare/v0.0.3...v0.0.4)

## [v0.0.3](https://github.com/dalexhd/steamspeak/tree/v0.0.3) (2020-03-07)

[Full Changelog](https://github.com/dalexhd/steamspeak/compare/v0.0.2...v0.0.3)

:rocket: New Features:

- Updated changelog. [\#9](https://github.com/dalexhd/SteamSpeak/pull/9) ([dalexhd](https://github.com/dalexhd))
- Add TeamSpeak docker environment. [\#8](https://github.com/dalexhd/SteamSpeak/pull/8) ([dalexhd](https://github.com/dalexhd))
- Better Changelog system [\#3](https://github.com/dalexhd/SteamSpeak/pull/3) ([dalexhd](https://github.com/dalexhd))

:memo: Documentation:

- Fix license image url. [\#6](https://github.com/dalexhd/SteamSpeak/pull/6) ([dalexhd](https://github.com/dalexhd))

## [v0.0.2](https://github.com/dalexhd/steamspeak/tree/v0.0.2) (2020-03-06)

[Full Changelog](https://github.com/dalexhd/steamspeak/compare/v0.0.1...v0.0.2)

## [v0.0.1](https://github.com/dalexhd/steamspeak/tree/v0.0.1) (2020-03-06)

[Full Changelog](https://github.com/dalexhd/steamspeak/compare/db8aa515651f180a5e53d932c5f816d256b51d3d...v0.0.1)



\* *This Changelog was automatically generated by [github_changelog_generator](https://github.com/github-changelog-generator/github-changelog-generator)*

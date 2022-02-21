import initStoryshots from '@storybook/addon-storyshots';
import { imageSnapshot } from '@storybook/addon-storyshots-puppeteer';
const path = require('path');

const storybookUrl = process.env.STORYBOOK_SOURCE_ENV === 'static'
  ? `file://${path.resolve(__dirname, '../storybook-build')}`
  : process.env.STORYBOOK_SOURCE_ENV === 'prod'
    ? 'https://ck-storybook.netlify.app'
    : `http://localhost:${process.env.STORYBOOK_PORT_ENV}`


initStoryshots({suite: 'Snapshots storyshots'});
initStoryshots({suite: 'Image storyshots', test: imageSnapshot({storybookUrl})});
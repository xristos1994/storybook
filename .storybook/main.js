module.exports = {
  stories: [
    '../src/**/*.stories.js',
    '../src/**/__stories__/*.js'
  ],
  addons: [
    'storybook-css-modules-preset',
    '@storybook/addon-storyshots-puppeteer',
    '@storybook/addon-storyshots'
  ],
  framework: '@storybook/react',
};
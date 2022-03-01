module.exports = {
  stories: [
    '../src/**/*.stories.@(js|mdx)',
    '../src/**/__stories__/*.@(js|mdx)'
  ],
  addons: [
    'storybook-css-modules-preset',
    '@storybook/addon-storyshots-puppeteer',
    '@storybook/addon-storyshots',
    // '@storybook/addon-storysource',
    '@storybook/addon-a11y',
    '@storybook/addon-docs',
    '@storybook/addon-actions',
    '@storybook/addon-controls',
    '@storybook/addon-viewport'
  ],
  framework: '@storybook/react',
};
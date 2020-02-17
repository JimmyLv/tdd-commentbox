module.exports = {
  testMatch: ['**/?(*.)(test).(j|t)s?(x)'],
  moduleNameMapper: {
    '\\.(css|scss|less|png|jpg|svg)$': 'identity-obj-proxy',
  },
  transform: {
    '^.+\\.stories\\.jsx?$': '@storybook/addon-storyshots/injectFileName',
    '^.+\\.jsx?$': 'babel-jest',
  },
}

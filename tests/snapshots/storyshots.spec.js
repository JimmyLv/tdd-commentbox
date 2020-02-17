import initStoryshots from '@storybook/addon-storyshots'
import { imageSnapshot } from '@storybook/addon-storyshots-puppeteer'

const getScreenshotOptions = ({ context, url }) => {
  return {
    fullPage: false, // Do not take the full page screenshot. Default is 'true' in Storyshots.
  }
}

const beforeScreenshot = (page, { context: { kind, story }, url }) => {
  page.setViewport({ width: 1440, height: 960 })
}

initStoryshots({
  suite: 'Image storyshots',
  test: imageSnapshot({
    storybookUrl: 'http://localhost:6006',
    getScreenshotOptions,
    beforeScreenshot,
  }),
})

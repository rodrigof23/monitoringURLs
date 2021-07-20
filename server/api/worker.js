const { Builder, Capabilities } = require('selenium-webdriver');

const capabilities = Capabilities.firefox();

const moment = require('moment');

const { db } = require('./database');

const screenshot = async (url) => {
  let driver;
  try {
    driver = await new Builder()
      .usingServer('http://172.17.0.2:4444')
      .withCapabilities(capabilities)
      .build();
  } catch (e) {
    driver = await new Builder().forBrowser('firefox').build();
  } finally {
    try {
      await driver.get(url);
      const encodedString = await driver.takeScreenshot();

      const image = Buffer.from(encodedString, 'base64').toString('base64');
      const date = moment().format('YYYY-MM-DD[_]HH:mm:ss');

      db.get(`urls:${url}`, (error, value) => {
        if (error != null) throw error;
        value.push({ date, image });

        db.set(`urls:${url}`, value);
      });
    } finally {
      if (driver) driver.quit();
    }
  }
};

const worker = (url) => {
  screenshot(url);

  setTimeout(() => {
    worker(url);
  }, 100000);
};

module.exports = worker;

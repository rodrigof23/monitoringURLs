const ueberDB = require('ueberDB');

/* eslint-disable new-cap */
const db = new ueberDB.database('sqlite', { filename: './sqlite.db' });

const init = (worker) => {
  db.init((err) => {
    if (err) {
      console.error(err);
      process.exit(1);
    }

    db.findKeys('urls:*', null, async (error, value) => {
      if (error != null) throw error;

      value.map((v) => (
        setTimeout(() => {
          worker(v.replace('urls:', ''));
        }, 100000)
      ));
    });
  });
};

module.exports = { db, init };

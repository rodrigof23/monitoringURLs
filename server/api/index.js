const express = require('express');

const router = express.Router();
router.use(express.json());
router.use(express.urlencoded({ extended: true }));

const worker = require('./worker');

const { db, init } = require('./database');

init(worker);

router.post('/links', (req, res) => {
  try {
    const { url } = req.body;

    db.findKeys('urls:*', null, async (error, value) => {
      if (error != null) throw error;

      if (value.map((v) => v.replace('urls:', '')).find((v) => v === url)) {
        res.status(400).send('A URL informada já está sendo monitorada.');
      } else {
        setTimeout(() => {
          worker(url);
        }, 100000);

        db.set(`urls:${url}`, [], (err) => {
          if (err != null) throw err;

          res.status(200).json({ message: 'URL monitorada com sucesso.' });
        });
      }
    });
  } catch (err) {
    res.status(500).send(err.message);
  }
});

router.get('/links', (req, res) => {
  try {
    setTimeout(() => {
      db.findKeys('urls:*', null, async (error, value) => {
        if (error != null) throw error;

        res.status(200).json(value.map((v) => v.replace('urls:', '')));
      });
    }, 300);
  } catch (err) {
    res.status(500).send(err.message);
  }
});

router.get('/screenshots', (req, res) => {
  try {
    const array = [];

    db.findKeys('urls:*', null, async (error, value) => {
      if (error != null) throw error;

      Object.values(value).forEach((val) => {
        array.push(new Promise((resolve, reject) => {
          db.getSub(val, [], (e, v) => {
            if (e != null) reject(e);

            resolve({ url: val.replace('urls:', ''), screenshots: v });
          });
        }));
      });

      await Promise.all(array).then((a) => {
        res.status(200).json(a);
      });
    });
  } catch (err) {
    res.status(500).send(err.message);
  }
});

module.exports = router;

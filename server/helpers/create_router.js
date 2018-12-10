const express = require('express');
const ObjectID = require('mongodb').ObjectID;
const getIndex = require('./index_identifier.js');
const urlToString = require('./string_modifier.js');

const createRouter = function (collection) {

  const router = express.Router();

  router.get('/lowest?:category', (req, res) => {
    const categoryIndex = getIndex(req.params.category);
    const categoryName = urlToString(req.params.category);
    collection
    // .aggregate([
    //     { "$match": { "$categories.name": `${categoryName}` }},
    //     { "$addFields": {
    //         "order": {
    //             "$filter": {
    //               "input": "$categories",
    //               "as": "p",
    //               "cond": { "$eq": [ "$$p.name", `${categoryName}` ] }
    //             }
    //         }
    //     }},
    //     { "$sort": { "order": 1 } }
    // ])



    .aggregate(
      [
        { $unwind: '$categories' },
        { $sort: {[`$categories.score_out_of_10`]: 1}}, //[${categoryIndex}]
        { $limit: 10 }
      ]
    )



    .toArray()
    .then((docs) => res.json(doc))
    .catch((err) => {
      console.error(err);
      res.status(500);
      res.json({ status: 500, error: err });
    });
  })

  router.get('/:id', (req, res) => {
    const id = req.params.id;
    collection
    .findOne({ _id: ObjectID(id) })
    .then((doc) => res.json(doc))
    .catch((err) => {
      console.error(err);
      res.status(500);
      res.json({ status: 500, error: err });
    });
  });

  return router;

};

module.exports = createRouter;

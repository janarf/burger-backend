const router = require('express').Router();
const models = require('../models');
const Products = models.Products;

router.get("/", (req, res) => {
  Products.findAll().then(product => res.send(product))
});

router.get("/:id", (req, res) => {
  Products.findByPk(req.params.id).then(product => {
    product ? res.send(product) : res.sendStatus(404)
  })
});

router.post('/', (req, res) => Products.create(req.body)
  .then(product => res.status(201).send(product))
);

router.put('/:id', (req, res) => {
  Products.update({ ...req.body }, { where: { product_id: req.params.id } })
    .then(() => {
      Products
        .findByPk(req.params.id)
        .then(product => res.send(product))
    });
});

router.delete('/:id', (req, res) => {
  Products.destroy({ where: { product_id: req.params.id } })
    .then(() => res.sendStatus(200));
});

module.exports = router;
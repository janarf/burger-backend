const router = require('express').Router();
const models = require('../models');
const ProductOptions = models.ProductOptions;
const Options = models.Options

router.get("/", (req, res) => {
  ProductOptions.findAll({ include: Options }).then(productOptions => res.send(productOptions))
});

router.get("/:id", (req, res) => {
  ProductOptions.findByPk(req.params.id, { include: Options }).then(ProductOptions => {
    ProductOptions ? res.send(productOptions) : res.sendStatus(404)
  })
});

router.post('/', (req, res) => ProductOptions.create(req.body)
  .then(productOption => res.status(201).send(productOption))
);

router.put('/:id', (req, res) => {
  ProductOptions.update({ ...req.body }, { where: { productOption_id: req.params.id } })
    .then(() => {
      ProductOptions
        .findByPk(req.params.id)
        .then(productOption => res.send(productOption.dataValues))
    });
});

router.delete('/:id', (req, res) => {
  ProductOptions.destroy({ where: { productOption_id: req.params.id } })
    .then(() => res.sendStatus(200));
});

module.exports = router;
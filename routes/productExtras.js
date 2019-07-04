const router = require('express').Router();
const models = require('../models');
const ProductExtras = models.ProductExtras;
const Extras = models.Extras

router.get("/", (req, res) => {
  ProductExtras.findAll({ include: Extras }).then(productExtras => res.send(productExtras))
});

router.get("/:id", (req, res) => {
  ProductExtras.findByPk(req.params.id, { include: Extras }).then(productExtras => {
    productExtras ? res.send(productExtras) : res.sendStatus(404)
  })
});

router.post('/', (req, res) => ProductExtras.create(req.body)
  .then(productExtras => res.status(201).send(productExtras))
);

router.put('/:id', (req, res) => {
  ProductExtras.update({ ...req.body }, { where: { productExtra_id: req.params.id } })
    .then(() => {
      ProductExtras
        .findByPk(req.params.id)
        .then(productExtras => res.send(productExtras.dataValues))
    });
});

router.delete('/:id', (req, res) => {
  ProductExtras.destroy({ where: { productExtra_id: req.params.id } })
    .then(() => res.sendStatus(200));
});

module.exports = router;
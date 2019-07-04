const router = require('express').Router();
const models = require('../models');
const OrderProducts = models.OrderProducts;
const Orders = models.Orders;
const Products = models.Products;
const ProductExtras = models.ProductExtras
const Extras = models.Extras
const ProductOptions = models.ProductOptions
const Options = models.Options

router.get("/", (req, res) => {
  OrderProducts.findAll({
    include: [
      Products,
      {
        model: ProductExtras,
        include: Extras
      },
      {
        model: ProductOptions,
        include: Options
      }
    ]
  })
    .then(orderProducts => res.send(orderProducts))
});

router.get("/:id", (req, res) => {
  OrderProducts.findByPk(req.params.id, { include: [Orders, Products] }).then(orderProduct => {
    orderProduct ? res.send(orderProduct) : res.sendStatus(404)
  })
});

router.post('/', (req, res) => OrderProducts.create(req.body)
  .then(orderProduct => res.status(201).send(orderProduct))
);

router.put('/:id', (req, res) => {
  OrderProducts.update({ ...req.body }, { where: { orderProduct_id: req.params.id } })
    .then(() => {
      OrderProducts
        .findByPk(req.params.id)
        .then(orderProduct => res.send(orderProduct.dataValues))
    });
});

router.delete('/:id', (req, res) => {
  OrderProducts.destroy({ where: { orderProduct_id: req.params.id } })
    .then(() => res.sendStatus(200));
});

module.exports = router;
const router = require('express').Router();
const models = require('../models');
const Orders = models.Orders;
const Users = models.Users;
const Clients = models.Clients;
const OrderProducts = models.OrderProducts;
const Products = models.Products;
const ProductExtras = models.ProductExtras
const Extras = models.Extras
const ProductOptions = models.ProductOptions
const Options = models.Options


router.get("/", (req, res) => {
  Orders.findAll({
    include: [
      Users, Clients,
      {
        model: OrderProducts,
        include: [Products,
          {
            model: ProductExtras,
            include: Extras
          },
          {
            model: ProductOptions,
            include: Options
          }]
      }
    ]
  })
    .then(orders => res.send(orders))
});

router.get("/:id", (req, res) => {
  Orders.findByPk(req.params.id, {
    include: [
      Users, Clients,
      {
        model: OrderProducts,
        include: [Products,
          {
            model: ProductExtras,
            include: Extras
          },
          {
            model: ProductOptions,
            include: Options
          }]
      }
    ]
  })
    .then(order => {
      order ? res.send(order) : res.sendStatus(404)
    })
});

router.post('/', (req, res) => Orders.create(req.body)
  .then(order => res.status(201).send(order))
);

router.put('/:id', (req, res) => {
  Orders.update({ ...req.body }, { where: { order_id: req.params.id } })
    .then(() => {
      Orders
        .findByPk(req.params.id)
        .then(order => res.send(order.dataValues))
    });
});

router.delete('/:id', (req, res) => {
  Orders.destroy({ where: { order_id: req.params.id } })
    .then(() => res.sendStatus(200));
});

module.exports = router;
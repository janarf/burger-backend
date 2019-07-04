const router = require('express').Router();
const models = require('../models');
const Clients = models.Clients;

router.get("/", (req, res) => {
  Clients.findAll().then(clients => res.send(clients))
});

router.get("/:id", (req, res) => {
  Clients.findByPk(req.params.id).then(client => {
    client ? res.send(client) : res.sendStatus(404)
  })
});

router.post('/', (req, res) => Clients.create(req.body)
  .then(client => res.status(201).send(client))
);

router.put('/:id', (req, res) => {
  Clients.update({ ...req.body }, { where: { client_id: req.params.id } })
    .then(() => {
      Clients
        .findByPk(req.params.id)
        .then(client => res.send(client.dataValues))
    });
});

router.delete('/:id', (req, res) => {
  Clients.destroy({ where: { client_id: req.params.id } })
    .then(() => res.sendStatus(200));
});

module.exports = router;
const router = require('express').Router();
const models = require('../models');
const Extras = models.Extras;

router.get("/", (req, res) => {
  Extras.findAll().then(extra => res.send(extra))
});

router.get("/:id", (req, res) => {
  Extras.findByPk(req.params.id).then(extra => {
    extra ? res.send(extra) : res.sendStatus(404)
  })
});

router.post('/', (req, res) => Extras.create(req.body)
  .then(extra => res.status(201).send(extra))
);

router.put('/:id', (req, res) => {
  Extras.update({ ...req.body }, { where: { extra_id: req.params.id } })
    .then(() => {
      Extras
        .findByPk(req.params.id)
        .then(extra => res.send(extra.dataValues))
    });
});

router.delete('/:id', (req, res) => {
  Extras.destroy({ where: { extra_id: req.params.id } })
    .then(() => res.sendStatus(200));
});

module.exports = router;
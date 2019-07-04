const router = require('express').Router();
const models = require('../models');
const Options = models.Options;

router.get("/", (req, res) => {
  Options.findAll().then(option => res.send(option))
});

// router.get("/:id", (req, res) => {
//   Users.findByPk(req.params.id).then(user => {
//     user ? res.send(user) : res.sendStatus(404)
//   })
// });

// router.post('/', (req, res) => Users.create(req.body)
//   .then(user => res.status(201).send(user))
// );

// router.put('/:id', (req, res) => {
//   Users.update({ ...req.body }, { where: { user_id: req.params.id } })
//     .then(() => {
//       Users
//         .findByPk(req.params.id)
//         .then(user => res.send(user.dataValues))
//     });
// });

// router.delete('/:id', (req, res) => {
//   Users.destroy({ where: { user_id: req.params.id } })
//     .then(() => res.sendStatus(200));
// });

module.exports = router;
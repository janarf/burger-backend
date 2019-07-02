const router = require('express').Router();
const models = require('../models');
const Users = models.Users;

router.get("/", (req, res) => {
  Users.findAll().then(users => res.send(users))
});

router.get("/:id", (req, res) => {
  Users.findByPk(req.params.id).then(user => {
    user ? res.send(user) : res.sendStatus(404)
  })
})

module.exports = router;
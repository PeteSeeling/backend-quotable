const { Router } = require('express');
const ProfileService = require('../services/ProfileService');

module.exports = Router()
  .post('/', async (req, res, next) => {
    console.log(req.body);
    // TODO: Implement me!
    const profile = await ProfileService.create(req.body);
    res.send(profile);
    next();

  });

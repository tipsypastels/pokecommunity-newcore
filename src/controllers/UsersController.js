import User from '../models/User.js';

export default {
  async show(req, res, connection) {
    const users = connection.getRepository(User);
    res.json(await users.find());
  }
};
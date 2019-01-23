import User from '../models/User';

export default {
  async show(req, res, connection) {
    const users = connection.getRepository(User);
    let user = await users.findOne(req.params.userid);

    if (user) {
      res.json(user);
    } else {
      res.status(404).send("Not found.");
    }
  }
};
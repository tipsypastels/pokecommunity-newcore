import { getConnection } from 'typeorm';
import User from '../models/User.js';

const connection = getConnection();

export default {
  async show(req, res) {
    const users = connection.getRepository(User);
    console.log(users.find());
  }
};
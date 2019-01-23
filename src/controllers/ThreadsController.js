import Thread from '../models/Thread';

export default {
  async show(req, res, connection) {
    const threads = connection.getRepository(Thread);
    let thread = await threads.findOne(req.params.threadid);

    if (thread) {
      res.json(thread);
    } else {
      res.status(404).send("Not found.");
    }
  }
}
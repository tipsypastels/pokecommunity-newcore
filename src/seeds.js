import ormConnect from './connection.js';
import User from './models/User.js';

/* RUN THIS FILE WITH `yarn seed` to insert test data
   into the database.
*/

(async function() {
  const connection = await ormConnect();

  let user = new User();
  user.username = 'EggsOnToast';
  user.usergroupid = 0;
  user.membergroupids = '';
  user.displaygroupid = 0;
  user.styleid = 0;
  user.customtitle = 'meme';
  user.joindate = (new Date());
  user.posts = 0;
  user.threadedmode = 0;
  user.autosubscribe = -1;

  await connection.manager.save(user);
})();
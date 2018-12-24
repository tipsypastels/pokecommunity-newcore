import UsersController from './controllers/UsersController';

class PCRouteBuilder {
  /*
   * API ENDPOINTS
   * Use this.get/post depending on the request types.
   * It takes a path and a controller action.
   * Controllers must be imported at the top.
   * Use colon for params (ex. :userid).
   * Slashes at the beginning are mandatory.
   */

  buildRoutes() {
    this.get('/users/:userid', UsersController.show);
  }

  /*
   * YOU ARE NOW ENTERING METAPROGRAMMING LAND
   * FOLLOW! BUT ONLY IF YE BE THOSE OF VALOUR
   * FOR THE ENTRANCE TO THIS CAVE IS GUARDED
   * BY A CREATURE SO FOUL, SO CRUEL, THAT NO
   * ONE YET HAS FOUGHT WITH IT AND LIVED!
   * 
   * BONES OF FULL FIFTY SOLDIERS LIE STREWN
   * ABOUT ITS LAIR. SO, BRAVE KNIGHTS, IF
   * YOU DO DOUBT YOUR COURAGE OR YOUR
   * STRENGTH, COME NO FURTHER, FOR DEATH
   * AWAITS YOU ALL WITH BIG NASTY POINTY
   * TEETH!
   * 
   * Jake: What an eccentric performance.
   */

   static requestTypes = [
     'get',
     'post',
     'put',
     'delete',
   ];

   constructor(router, connection) {
     this.router     = router;
     this.connection = connection;

     this.createTypeMethods();
   }

   /*
    *             (\_/)
    *            =(^.^)= 
    *            (")_(")
    * Rabbit of Unnecessary Metaprogramming
    * 
    * Jake: What, behind the rabbit?
    * Dakota: It IS the rabbit!
    */

   createTypeMethods() {
     let { requestTypes } = this.constructor;

     requestTypes.forEach(type => {
       this[type] = (path, action) => {
         this._internal(type, path, action);
       }
     });
   }

   _internal(type, path, action) {
      this.router[type](path, (req, res) => {
        action(req, res, this.connection);
      });
   }
}

export default PCRouteBuilder;

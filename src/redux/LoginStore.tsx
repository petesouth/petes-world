import Utils from "../services/utils"

/*

Existing login states
Not adim (null) (Assumed general user)
'admin'  (Assumed super user/admin power over whole app)
'global_buyer_author' (Allows author access in global_buyers)

Note to users... Please don't access the user directly... 
Im keeping it here so I can make global changes to login stuff
without having to chase down code dong the same thing in many places.

that way I can more easily.. Control how the login works without effecting so many files.

*/

export interface User {
  email: string|null;
  password: string|null;
}

export interface LoginUser {
  user: User|null;
  token: string|null;
}

export class LoginStore {

  loginUser: LoginUser;

  constructor() {

    this.loginUser = { user: null, token: null};
    let storedVersion = localStorage.getItem("loginUser");

    if( storedVersion !== null && storedVersion !== undefined ) {
      this.loginUser = { ...(JSON.parse(storedVersion))};
    }
  }

  getLoginUser() {
    return (this.loginUser.user);
  }

  isLoggedIn () {
    if (this.loginUser.token) {
      return true;
    } else {
      return false;
    }
  }


  getEmail () {

    if (this.loginUser.user) {
      return this.loginUser.user.email;
    }
    return null;
  }


  
  doLogin(loginForm: User, succeeded: (loginUser:LoginUser)=>void, failed:(error:string)=>void) {
    if(!loginForm.email || !loginForm.password ) {
       if(failed) {
         failed("User name and password must not be empty!");
       }
    } else {
      this.loginUser.user = {...loginForm};
      this.loginUser.token = Utils.giveMeGuid();
      localStorage.setItem("loginUser",  JSON.stringify(this.loginUser));
      if(succeeded) {
        succeeded(this.loginUser);
      }
    }
    
  }

  doLogout () {
    this.loginUser = { user: null, token: null };
    localStorage.removeItem('loginUser');
  }

}

const loginStore = new LoginStore();

export default loginStore;

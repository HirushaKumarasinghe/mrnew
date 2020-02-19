// crypto
import CryptoJs from "crypto-js";

class Admin_Controller {
  constructor() {
    this.uNamelist = ["admin", "Rahal", "Hirusha", "Padula"];
    this.passlist = [
      "8c6976e5b5410415bde908bd4dee15dfb167a9c873fc4bb8a81f6f2ab448a918",
      "240be518fabd2724ddb6f04eeb1da5967448d7e831c08c8fa822809f74c720a9",
      "240be518fabd2724ddb6f04eeb1da5967448d7e831c08c8fa822809f74c720a9",
      "240be518fabd2724ddb6f04eeb1da5967448d7e831c08c8fa822809f74c720a9"
    ];
  }

  logIn(uName, pass) {
    const userIndex = this.uNamelist.indexOf(uName);

    console.log(userIndex);
    

    if (userIndex !== -1) {
      const hashPass = CryptoJs.SHA256(pass).toString();
      console.log(hashPass);
      
      if (hashPass === this.passlist[userIndex]) {
        return true;
      } else {
        return false;
      }
    } else {
      return false;
    }
  }
}

const obj = new Admin_Controller();

export default obj;
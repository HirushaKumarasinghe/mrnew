import Axios from "axios";
import Config from "../../config/Config.js";

class News_Controller {
  constructor() {
    this.apis = {
      addNews: "/news/add"
    };
  }

  async addNews(data) {
    await Axios.post(`${Config.host}${Config.port}${this.apis.addNews}`, data)
      .then(Response => {
        console.log(Response);
      })
      .catch(err => {
        console.error(err);
      });
  }
}

var obj = new News_Controller();
export default obj;

class Config {
  constructor() {
    this.host = "http://192.168.0.105";
    this.port = ":5000";
  }

  getDepName(name) {
    var _name = name
      .replace("buddhist", "Department of Buddhist")
      .replace("city", "Department of City")
      .replace("finance", "Department of Finance");

      return _name
  }
}

var _obj = new Config();

export default _obj;

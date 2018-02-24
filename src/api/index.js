import axios from "axios";
const SERVER_IP = "https://swapi.co/api/";

var api = axios.create({
  baseURL: SERVER_IP
});

module.exports = {
  search: function(kw) {
    return api.get(`people/?search=${kw}`).then(response => response);
  }
};

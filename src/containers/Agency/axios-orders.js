import axios from "axios";

const instance = axios.create({
  baseURL: "https://sysolympiad-default-rtdb.firebaseio.com/"
});

export default instance;


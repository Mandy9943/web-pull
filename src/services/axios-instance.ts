import axios from "axios";

const instance = axios.create({
    baseURL: "https://next-pull-app-default-rtdb.firebaseio.com/"
})

export default instance
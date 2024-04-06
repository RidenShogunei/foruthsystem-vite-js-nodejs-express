import { post } from "../http/request";

const loginapi = (params) => {
    return post("/login", params);
};

const registerapi=(params)=>{
    return post("/register",params);
}
export default {loginapi,registerapi};
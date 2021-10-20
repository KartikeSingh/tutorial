const { default: axios } = require("axios");

const url = "http://localhost:3000";

(async () => {
    try {
        const res = await axios.delete(`${url}/user/1`,  {
            headers: {
                Authorization: "shisui_can_not_code"
            }
        });

        console.log(res.data);

    } catch (e) {
        console.log(e.response.data);
    }
})()

/**
 * get request
 * auth
 * patch
 * delete
 * post
 */
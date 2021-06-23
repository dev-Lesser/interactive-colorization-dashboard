import axios from "axios";
const BASE_URL = `https://localhost:8000/api/v1/`

export const save_ip = async () => {
    const res = await axios.get("https://www.cloudflare.com/cdn-cgi/trace");
    const ip = res.data.split("\n")[2].split("=")[1];
    window.sessionStorage.setItem("ip", ip);
  };

export const get_default_predict = async (form) => {
    const url = BASE_URL + 'colorize'
    const res = await axios.post(url, form);
    if (res.status==200){
        return [true, res.data]

    }
    return [false, null]
}

export const get_default_predict = async (form) => {
    const url = BASE_URL + 'colorize/point'
    const res = await axios.post(url, form);
    if (res.status==200){
        return [true, res.data]

    }
    return [false, null]
}

export const image_clear = async () => {
    const url = BASE_URL + 'clear'
    const res = await axios.get(url);
    if (res.status==200){
        return [true, res.data]

    }
    return [false, null]
}

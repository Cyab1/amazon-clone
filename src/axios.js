import axios from "axios";

const instance = axios.create({
    baseURL : 'https://localhost:5001/amazon-clone/us-central1/api' // The API (cloud function URL)
});
// copy the functions[us-centrall-api] - https function initialised {link} in terminal copy it from function initialization in '...'

export default instance
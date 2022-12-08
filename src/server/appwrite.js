import { Client } from "appwrite";

const client = new Client()
    .setEndpoint('https://ecoleapi.graysky.co.kr:4412/v1') // Your API Endpoint
    .setProject('637c5b540206eccf9b5d');               // Your project ID

export default client
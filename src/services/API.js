import axios from 'axios';

const apiURL = 'http://localhost:8080/'

export default class API {

    static async genKey(algorithm) {
        return await axios.get(apiURL + 'genkey/' + algorithm.toLowerCase())
            .then(res => res.data)
            .catch(e => console.log(e));
    }

    static async genCWT({ kid, privateKey }, algorithm) {
        return await axios.get(apiURL + 'cwt/generate/' + algorithm.toLowerCase())
            .then(res => res.data)
            .catch(e => console.log(e));
    }

    static async verifyCWT({ cwt, publicKey }, algorithm) {
        return await axios.post(apiURL + 'cwt/verify/' + algorithm.toLowerCase(), { signature: cwt, onekey: publicKey })
            .then(res => res.data)
            .catch(e => console.log(e));
    }

    static async genJWT({ kid, privateKey }, algorithm) {
        return await axios.post(apiURL + 'jwt/generate/' + algorithm.toLowerCase(), { kid, privateKey })
            .then(res => res.data)
            .catch(e => console.log(e));
    }

    static async verifyJWT({ jwt, publicKey }, algorithm) {
        return await axios.post(apiURL + 'jwt/verify/' + algorithm.toLowerCase(), { jwt, publicKey })
            .then(res => res.data)
            .catch(e => console.log(e));
    }

    static async encrypt({ plainText, privateKey, publicKey }, algorithm) {
        return await axios.post(apiURL + 'encrypt/' + algorithm.toLowerCase(), { plainText, privateKey, publicKey })
            .then(res => res.data)
            .catch(e => console.log(e));
    }

    static async decrypt({ cipherText, privateKey, publicKey, nonce, secretKey }, algorithm) {
        return await axios.post(apiURL + 'decrypt/' + algorithm.toLowerCase(), { cipherText, privateKey, publicKey, nonce, secretKey })
            .then(res => res.data)
            .catch(e => console.log(e));
    }

    static async sign({ text, privateKey }, algorithm) {
        return await axios.post(apiURL + 'sign/' + algorithm.toLowerCase(), { text, privateKey })
            .then(res => res.data)
            .catch(e => console.log(e));
    }

    static async verify({ signature, publicKey }, algorithm) {
        return await axios.post(apiURL + 'verify/' + algorithm.toLowerCase(), { signature, publicKey })
            .then(res => res.data)
            .catch(e => console.log(e));
    }
}
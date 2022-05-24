import axios from 'axios';

const apiURL = 'http://localhost:8080/'

export default class API {

    static async genKey(algorithm) {
        return await axios.get(apiURL + 'genkey/' + algorithm.toLowerCase())
            .then(res => res.data)
            .catch(e => console.log(e));
    }

    static async genCWT({ kid, privateKey }, algorithm) {
        return await axios.post(apiURL + 'cwt/generate/' + algorithm.toLowerCase(), { kid })
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

    static async sign({ plainText, privateKey }, algorithm) {
        console.log('hey');
        console.log(plainText);
        return await axios.post(apiURL + 'sign/' + algorithm.toLowerCase(), { plainText, privateKey })
            .then(res => res.data)
            .catch(e => console.log(e));
    }

    static async verify({ signature, publicKey, plainText }, algorithm) {
        return await axios.post(apiURL + 'verify/' + algorithm.toLowerCase(), { signature, publicKey, plainText })
            .then(res => res.data)
            .catch(e => console.log(e));
    }
}

var testData = {
    shortText: "69",
    normalText: "Pruebas9",
    longText: "Prueb@s con un texto largo y complicado :)",
    secretKey: "secret key"
};

function testEncryption(text, key, _encrypt, _decrypt) {
    let encrypted = _encrypt(text, key);
    let decrypted = _decrypt(encrypted.toString(), key);

    return text === decrypted.toString(CryptoJS.enc.Utf8);
}

function testCrypto(label, _encrypt, _decrypt) {
    if (!testEncryption(
        testData.shortText, testData.secretKey,
        _encrypt, _decrypt
    )) {
        throw new Error(`${label} encryption failed on a short text`);
    }

    if (!testEncryption(
        testData.normalText, testData.secretKey,
        _encrypt, _decrypt
    )) {
        throw new Error(`${label} encryption failed on a normal text`);
    }

    if (!testEncryption(
        testData.longText, testData.secretKey,
        _encrypt, _decrypt
    )) {
        throw new Error(`${label} encryption failed on a long text`);
    }
}

function test() {
    testCrypto("AES", CryptoJS.AES.encrypt, CryptoJS.AES.decrypt);

    testCrypto("Rabbit", CryptoJS.Rabbit.encrypt, CryptoJS.Rabbit.decrypt);

    testCrypto("TripleDES", CryptoJS.TripleDES.encrypt, CryptoJS.TripleDES.decrypt);

    console.log("All test passed");
}
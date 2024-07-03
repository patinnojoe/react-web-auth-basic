import CryptoJS from 'crypto-js';

const secretKey = import.meta.env.VITE_REACT_SECERET_KEY;

if (!secretKey) {
  throw new Error('Secret key is not defined.');
}

function validateKey(key) {
  if (key !== secretKey) {
    throw new Error('Invalid secret key. Ensure the correct key is used.');
  }
}

export function setEncryptedCookie(name, value, options = {}) {
  validateKey(secretKey);

  const dataStringify = JSON.stringify(value);
  const encryptedData = CryptoJS.AES.encrypt(dataStringify, secretKey).toString();
  document.cookie = `${name}=${encodeURIComponent(encryptedData)}; path=/; ${options}`;
}

export function getDecryptedCookie(name) {
  validateKey(secretKey);

  let cookieArray = document.cookie.split('; ');
  for (let cookie of cookieArray) {
    let [cookieName, cookieValue] = cookie.split('=');
    if (cookieName === name) {
      let decoded = decodeURIComponent(cookieValue);
      try {
        // Decrypt the cookie value
        const bytes = CryptoJS.AES.decrypt(decoded, secretKey);
        const decryptedData = bytes.toString(CryptoJS.enc.Utf8);
        return JSON.parse(decryptedData);
      } catch (error) {
        console.error('Error decrypting cookie:', error);
        return null;
      }
    }
  }
  return null;
}

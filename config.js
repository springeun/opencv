const admin = require("firebase-admin");

const serviceAccount = require("./projectpart3-d5686-firebase-adminsdk-ayfl4-c17f674436.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

const { initializeApp } = require("firebase/app");
const { getAuth }  = require("firebase/auth");

const firebaseConfig = {
--
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

module.exports = auth;

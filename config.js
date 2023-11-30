const admin = require("firebase-admin");

const serviceAccount = require("./projectpart3-d5686-firebase-adminsdk-ayfl4-c17f674436.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

const { initializeApp } = require("firebase/app");
const { getAuth }  = require("firebase/auth");

const firebaseConfig = {
  apiKey: "AIzaSyCizOMIIUVXSBDwNlWXqPinvSJS8u9rMX8",
  authDomain: "projectpart3-d5686.firebaseapp.com",
  databaseURL: "https://projectpart3-d5686-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "projectpart3-d5686",
  storageBucket: "projectpart3-d5686.appspot.com",
  messagingSenderId: "28092958362",
  appId: "1:28092958362:web:af02d07d2a9c55d2800123",
  measurementId: "G-GYQ26RWJN6"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

module.exports = auth;
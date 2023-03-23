const router = require("express").Router();

const firebase = require("firebase");
// Required for side-effects
require("firebase/firestore");
const firebaseConfig = {
  apiKey: "AIzaSyA8voppeDXQv7B9W_FVEa87j2LP_EXNR8Y",
  authDomain: "vertical-veld-367711.firebaseapp.com",
  databaseURL: "https://vertical-veld-367711-default-rtdb.firebaseio.com",
  projectId: "vertical-veld-367711",
  storageBucket: "vertical-veld-367711.appspot.com",
  messagingSenderId: "844799694487",
  appId: "1:844799694487:web:a5ec560c7d8fc21580fbd2",
  measurementId: "G-TEG2X0HG8Q",
};

firebase.initializeApp(firebaseConfig);

router.post("/", (req, res) => {
  const formData = req.body;
  const db = firebase.firestore();
  db.collection("users")
    .add(formData)
    .then((docRef) => {
      console.log("Document written with ID: ", docRef.id);
      res.redirect("/");
    })
    .catch((error) => {
      console.error("Error adding document: ", error);
    });
  console.log(formData);
});

module.exports = router;

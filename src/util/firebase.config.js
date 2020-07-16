import firebase from "firebase";

const config = {
  apiKey: "AIzaSyCRA-fNYF6rI8YyVJU5yQj7QXlNecZiiQg",
  authDomain: "tech-novation.firebaseapp.com",
  databaseURL: "https://tech-novation.firebaseio.com",
  projectId: "tech-novation",
  storageBucket: "tech-novation.appspot.com",
  messagingSenderId: "323281047271",
  appId: "1:323281047271:web:56cbaea62ab3eb9e875c42",
  measurementId: "G-6YGL2B90YP",
};

firebase.initializeApp(config);

// export const uiConfig = {
//   signInFlow: "popup",
//   signInSuccessUrl: "/",
//   signInOptions: [
//     firebase.auth.GoogleAuthProvider.PROVIDER_ID,
//     firebase.auth.FacebookAuthProvider.PROVIDER_ID,
//   ],
// };

const googleProvider = new firebase.auth.GoogleAuthProvider();

const facebookProvider = new firebase.auth.FacebookAuthProvider();

export const signin = (email, password) => {
  firebase
    .auth()
    .signInWithEmailAndPassword(email, password)
    .then((res) => {
      console.log("Logged In", res.user);
      return res.user;
    })
    .catch((error) => {
      var errorCode = error.code;
      var errorMessage = error.message;
      console.log(errorCode, errorMessage);
    });
};

export const signup = (email, password) => {
  firebase
    .auth()
    .createUserWithEmailAndPassword(email, password)
    .then(() => {
      console.log("User Created");
      return signin(email, password);
    })
    .then((user) => {
      console.log(user);
      return user;
    })
    .catch((error) => {
      var errorCode = error.code;
      var errorMessage = error.message;
      console.log(errorCode, errorMessage);
    });
};

export const signinWithGoogle = () => {
  firebase
    .auth()
    .signInWithPopup(googleProvider)
    .then((res) => {
      console.log("Logged In");
      return res.user;
    })
    .catch((error) => {
      var errorCode = error.code;
      var errorMessage = error.message;
      console.log(errorCode, errorMessage);
    });
};

export const signinWithFacebook = () => {
  firebase
    .auth()
    .signInWithPopup(facebookProvider)
    .then((res) => {
      console.log("Logged In");
      return res.user;
    })
    .catch((error) => {
      var errorCode = error.code;
      var errorMessage = error.message;
      console.log(errorCode, errorMessage);
    });
};

export const logout = () => firebase.auth().signOut();

export const database = firebase.database();

export default firebase;

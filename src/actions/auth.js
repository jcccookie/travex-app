import { firebase, googleAuthProvider } from '../firebase/firebase';

//For login
//Store uid
export const login = (uid) => ({
   type: 'LOGIN',
   uid
});

export const startLogin = () => {
   return () => {
      return firebase.auth().signInWithPopup(googleAuthProvider);
   };
};

export const startGuest = () => {
   return () => {
      return firebase.auth().signInAnonymously();
   };
};

//For logout
export const logout = () => ({
   type: 'LOGOUT'
});

export const startLogout = () => {
   return () => {
      return firebase.auth().signOut();
   };
};
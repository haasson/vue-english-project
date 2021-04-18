import firebase from "firebase";

export default {
   async loginWithGoogle() {
      const provider = new firebase.auth.GoogleAuthProvider()
      const {user} = await firebase.auth().signInWithPopup(provider)
      return user
   },

   async logout() {
      await firebase.auth().signOut()
   },


   setCurrentUser() {
      let currentUser = firebase.auth().currentUser
      if (currentUser) {
         const {uid, displayName, email, photoURL} = currentUser
         return {uid, displayName, email, photoURL}
      }
      return null
   }
}
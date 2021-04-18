import authAPI from '@/api/auth'
export default {
   state: {
      user: null
   },

   mutations: {
      setUserInfo(state, userInfo) {
         state.user = userInfo
      }
   },

   actions: {
      async loginWithGoogle({commit}) {
         try {
            const {uid, displayName, email, photoURL} = await authAPI.loginWithGoogle()
            commit("setUserInfo", {uid, displayName, email, photoURL})
         } catch(error) {
            throw new Error(error)
         }
      },

      setCurrentUser({commit}) {
         const currentUser = authAPI.setCurrentUser()
         currentUser && commit("setUserInfo", currentUser)
      },

      async logout({commit}) {
         await authAPI.logout()
         commit("setUserInfo", null)
      }
   },

   getters: {
      isUser: s => s.user !== null,
      userInfo: s => s.user || {}
   }
}
import appConfig from '@/config/appConfig'
import firebase from 'firebase/app'
import 'firebase/auth' // optional
import 'firebase/database' // optional

export default firebase.initializeApp(appConfig.firebaseConfig)
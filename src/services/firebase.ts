import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
import { getDatabase } from 'firebase/database'

const firebaseConfig = {
  apiKey: process.env.NEXT_API_API_KEY,
  authDomain: process.env.NEXT_API_AUTH_DOMAIN,
  databaseURL: process.env.NEXT_API_DATABASE_URL,
  projectId: process.env.NEXT_API_PROJECT_ID,
  storageBucket: process.env.NEXT_API_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_API_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_API_APP_ID
}

const firebase = initializeApp(firebaseConfig)
const auth = getAuth(firebase)
const database = getDatabase(firebase)

export { auth, database, firebase }

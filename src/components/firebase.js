import firebase from "firebase/app"
import "firebase/analytics"

// Firebase web config
const config = {
  apiKey: "AIzaSyAcgfj3d3L53dP1h1SBacAm8sYZdyOFkww",
  authDomain: "kalco-d7c54.firebaseapp.com",
  databaseURL: "https://kalco-d7c54.firebaseio.com",
  projectId: "kalco-d7c54",
  storageBucket: "kalco-d7c54.appspot.com",
  messagingSenderId: "413532302508",
  appId: "1:413532302508:web:e658f5745cad5c80a24309",
  measurementId: "G-GC7F02H4XP",
}

let instance = null

export default function getFirebase() {
  if (typeof window !== "undefined") {
    if (instance) return instance
      instance = firebase.initializeApp(config)
      console.log(instance)
    return instance
  }

  return null
}

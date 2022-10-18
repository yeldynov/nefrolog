// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getFirestore } from '@firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyCpuH6KmWzTz6wl3wZ9RzM4J0xIOpmqDdI',
  authDomain: 'carpenko-19229.firebaseapp.com',
  projectId: 'carpenko-19229',
  storageBucket: 'carpenko-19229.appspot.com',
  messagingSenderId: '151419496156',
  appId: '1:151419496156:web:f239bcf9489b77b04af619',
  measurementId: 'G-CWQHFR9FVW',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore();

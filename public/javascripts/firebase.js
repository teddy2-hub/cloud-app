import { initializeApp } from 'https://www.gstatic.com/firebasejs/12.5.0/firebase-app.js';

//파이어베이스 API를 활용하여 웹 서비스를 제공받기 위한 초기화 작업

const firebaseConfig = {
    apiKey: "AIzaSyDLPeVd5SdLoeinjqa9Xvwzc9s9_a9JdQg",
    authDomain: "teddycloud251110.firebaseapp.com",
    projectId: "teddycloud251110",
    storageBucket: "teddycloud251110.firebasestorage.app",
    messagingSenderId: "462201550430",
    appId: "1:462201550430:web:12c7c248a2e1d4f6d5a6cf",
    measurementId: "G-C62N2J1W9Z"
  };

// Initialize Firebase
//변수(app) 앞에 export를 붙여서 외부(html, js)에서 사용 가능하도록 구현***
export const app = initializeApp(firebaseConfig);
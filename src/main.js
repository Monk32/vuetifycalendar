import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import VueTextareaAutosize from 'vue-textarea-autosize';
import firebase from 'firebase/app';
import 'firebase/firestore';

Vue.use(VueTextareaAutosize);

Vue.config.productionTip = false

firebase.initializeApp({
  apiKey: "AIzaSyDeXNLadSD-NyXhDuUJnhGbNg2NEllMLHM",
  authDomain: "calendar-app-c18c3.firebaseapp.com",
  databaseURL: "https://calendar-app-c18c3.firebaseio.com",
  projectId: "calendar-app-c18c3",
  storageBucket: "calendar-app-c18c3.appspot.com",
  messagingSenderId: "512240523309",
  appId: "1:512240523309:web:f31fe56a73790b2dc540a4"
});

export const db = firebase.firestore();

new Vue({
  vuetify,
  render: h => h(App)
}).$mount('#app')

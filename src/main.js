import Vue from "vue";
import App from "./App.vue";
import router from "./router";
// Firebase のライブラリをインポート
import firebase from "firebase";

Vue.config.productionTip = false;

// 先ほどの図の枠内に記載されていた設定情報を記述する
const firebaseConfig = {
  apiKey: "AIzaSyD23via9fDHUoYIFP7H6pdfvJYs6yBVBW0",
  authDomain: "pitmark-40f84.firebaseapp.com",
  databaseURL: "https://pitmark-40f84.firebaseio.com",
  projectId: "pitmark-40f84",
  storageBucket: "pitmark-40f84.appspot.com",
  messagingSenderId: "34759352939",
  appId: "1:34759352939:web:8697fd4d119617e9a7472e",
};
// 設定情報で Firebase ライブラリを初期化
firebase.initializeApp(firebaseConfig);

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
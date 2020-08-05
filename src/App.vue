<template>
  <div id="app">
    <!-- ナビゲーションバーコンポーネントの使用。sign-out-clicked イベントに signOut メソッドを指定 -->
    <pm-nav-bar :user="user" @sign-out-clicked="signOut"></pm-nav-bar>
    <main>
      <router-view />
    </main>
  </div>
</template>

<script>
import pmNavBar from "@/components/NavBar";
import firebase from "firebase";

export default {
  name: "app",
  components: { pmNavBar },
  data() {
    return {
      user: null
    };
  },
  created() {
    firebase.auth().onAuthStateChanged(user => {
      this.user = user;
    });
  },
  methods: {
    // サインアウト関数を追加
    async signOut() {
      await firebase.auth().signOut();
      // サインアウト後にトップページに遷移する
      this.$router.push({ name: "home" });
    }
  },
};
</script>
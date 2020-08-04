<template>
  <div>
    <section class="hero is-primary">
      <div class="hero-body">
        <div class="container">
          <h1 class="title">サインイン</h1>
        </div>
      </div>
    </section>
    <section class="section">
      <form class="container">
        <div class="field">
          <p class="control has-icons-left">
            <input
              class="input"
              type="email"
              placeholder="メールアドレス"
              v-model="email"
            />
            <span class="icon is-small is-left">
              <i class="fas fa-envelope"></i>
            </span>
          </p>
        </div>
        <div class="field">
          <p class="control has-icons-left">
            <input
              class="input"
              type="password"
              placeholder="パスワード"
              v-model="password"
            />
            <span class="icon is-small is-left">
              <i class="fas fa-lock"></i>
            </span>
          </p>
        </div>
        <div class="field is-grouped">
          <div class="control">
            <button class="button is-primary" @click.prevent="signIn">
                サインイン
            </button>
          </div>
        </div>
      </form>
    </section>
  </div>
</template>

<script>
import firebase from "firebase";

export default {
  name: "sign_in",
  data() {
    return {
      email: null,
      password: null
    };
  },
  // methods プロパティを追加
  methods: {
    // サインイン処理を追加
    signIn() {
      firebase
        .auth()
        .signInWithEmailAndPassword(this.email, this.password)
        .then(() => {
          // サインイン成功後にトップページに遷移する
          this.$router.push({ name: "home" });
        })
        .catch(error => {
          alert(error.message);
        });
    }
  }
};
</script>
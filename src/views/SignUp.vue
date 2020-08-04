<template>
  <div>
    <section class="hero is-primary">
      <div class="hero-body">
        <div class="container">
          <h1 class="title">サインアップ</h1>
        </div>
      </div>
    </section>
    <section class="section">
      <form class="container">
        <div class="field">
          <p class="control has-icons-left">
            <input class="input" type="email" placeholder="メールアドレス" />
            <span class="icon is-small is-left">
              <i class="fas fa-envelope"></i>
            </span>
          </p>
        </div>
        <div class="field">
          <p class="control has-icons-left">
            <input class="input" type="password" placeholder="パスワード" />
            <span class="icon is-small is-left">
              <i class="fas fa-lock"></i>
            </span>
          </p>
        </div>
        <div class="field">
          <p class="control">
            <button class="button is-primary">サインアップ</button>
          </p>
        </div>
      </form>
    </section>
  </div>
</template>
<script>
import firebase from "firebase";

export default {
  name: "sign_up",
  data() {
    return {
      email: null,
      password: null
    };
  },
  methods: {
    signUp() {
      firebase
        // 認証用オブジェクトの取得
        .auth()
        // ユーザーの新規作成処理
        .createUserWithEmailAndPassword(this.email, this.password)
        .then(() => {
          // 成功したらトップページへ遷移
          this.$router.push({ name: "home" });
        })
        .catch(error => {
          // エラーがあれば表示する
          alert(error.message);
        });
    }
  }
};
// viewはnameをつけないといけない
</script>
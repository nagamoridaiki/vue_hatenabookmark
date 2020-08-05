<template>
  <div>
    <pm-page-title title="サインイン"></pm-page-title>
    <section class="section">
      <form class="container">
        <!-- メールアドレスの入力欄としてテキストフィールドコンポーネントを使用 -->
        <pm-text-field
          type="email"
          placeholder="メールアドレス"
          icon="envelope"
          v-model="email"
        ></pm-text-field>
        <!-- パスワードの入力欄としてテキストフィールドコンポーネントを使用 -->
        <pm-text-field
          type="password"
          placeholder="パスワード"
          icon="lock"
          v-model="password"
        ></pm-text-field>
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
import pmPageTitle from "@/components/PageTitle";
// テキストフィールドコンポーネントをインポート
import pmTextField from "@/components/TextField";

export default {
  name: "sign_in",
  components: { pmPageTitle, pmTextField },
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
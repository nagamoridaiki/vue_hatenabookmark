<template>
  <div class="field">
    <!-- ラベルの文字列が指定されたときだけ表示します -->
    <label class="label" v-if="label">{{ label }}</label>
    <!-- icon が指定されたときだけ必要なクラスを設定します -->
    <p class="control" :class="{ 'has-icons-left': icon }">
      <input
        class="input"
        :class="{ 'is-danger': error }"
        :type="type"
        :placeholder="placeholder"
        :value="value"
        @change="onChanged"
        @input="input"
      />
      <!-- アイコンが指定されたときだけ表示します -->
      <pm-icon v-if="icon" class="is-small is-left" :name="icon"></pm-icon>
    </p>
    <p class="help is-danger" v-if="error">{{ error }}</p>
  </div>
</template>

<script>
  import pmIcon from "./Icon";

  export default {
    name: "pm-text-field",
    components: { pmIcon },
    props: {
      type: {
        type: String,
        label: String,
        default: "text",
        validator(val) {
          return ["text", "email", "password", "search", "url"].includes(val);
        }
      },
      placeholder: String,
      value: String,
      icon: String,
      error: String,
    },
    methods: {
      input(e) {
        if (e.target.value !== this.value) {
          this.$emit("input", e.target.value);
        }
      },
      onChanged(e) {
        // change イベントを発火し、パラメータとして入力値を送信する
        this.$emit("change", e.target.value);
      },
    }
  };
</script>
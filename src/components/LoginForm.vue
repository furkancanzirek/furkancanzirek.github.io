<template>
  <div class="formWrapper">
    <svg class="header" viewBox="0 0 690 98.9">
      <path
        d="M615.11 19.15h24.69l.08 75.59c0 .97.79 1.77 1.77 1.77l14.14-.01c.98 0 1.77-.79 1.77-1.77l-.08-75.58h30.96c.91 0 1.43-1.06.85-1.77l-10.6-13.26a4.68 4.68 0 00-3.65-1.76h-59.93c-.98 0-1.77.79-1.77 1.77v13.26c0 .96.79 1.76 1.77 1.76M19.25 94.75L91.67 4.13c.57-.71.06-1.77-.85-1.77H72.71c-1.42 0-2.77.65-3.65 1.76L17.68 68.4V4.12c0-.98-.79-1.77-1.77-1.77H1.77C.79 2.35 0 3.14 0 4.12v90.62c0 .98.79 1.77 1.77 1.77H15.6c1.42 0 2.76-.65 3.65-1.76m51.06 0l24.91-31.17 24.91 31.17a4.685 4.685 0 003.66 1.76h13.83c.98 0 1.77-.79 1.77-1.77V4.12c0-.97-.79-1.77-1.77-1.77h-11.6c-2.84 0-5.53 1.29-7.31 3.51L47.69 94.73c-.57.71-.06 1.77.85 1.77h18.11c1.43.01 2.77-.64 3.66-1.75m51.39-66.21v41.75l-16.68-20.87 16.68-20.88zm404.37 66.19L453.65 4.11A4.68 4.68 0 00450 2.35h-13.84c-.98 0-1.77.79-1.77 1.77v90.62c0 .98.79 1.77 1.77 1.77h13.83c1.42 0 2.77-.65 3.65-1.76l24.91-31.17 24.91 31.17a4.68 4.68 0 003.65 1.76h18.11c.91 0 1.42-1.06.85-1.78m-57.33-45.31L452.05 70.3V28.54l16.69 20.88zM269.45 0c-27.3 0-49.43 22.13-49.43 49.43s22.13 49.43 49.43 49.43 49.43-22.13 49.43-49.43C318.89 22.13 296.75 0 269.45 0m0 82.06c-17.54 0-31.75-14.61-31.75-32.63 0-18.02 14.21-32.64 31.75-32.64S301.2 31.4 301.2 49.43c.01 18.02-14.21 32.63-31.75 32.63M583.38 4.12V68.4L532 4.11a4.68 4.68 0 00-3.65-1.76H514.5c-.97 0-1.77.79-1.77 1.77v43.67c0 1.06.36 2.09 1.03 2.92l14.71 18.41c.65.81 1.95.35 1.95-.68v-38l51.39 64.31a4.68 4.68 0 003.65 1.76h13.83c.98 0 1.77-.79 1.77-1.77V4.12c0-.97-.79-1.77-1.77-1.77h-14.14c-.98 0-1.77.8-1.77 1.77M410.62 23.76V4.12c0-.98-.79-1.77-1.77-1.77h-72.37c-.98 0-1.77.79-1.77 1.77v90.62c0 .98.79 1.77 1.77 1.77h14.14c.98 0 1.77-.79 1.77-1.77V19.16h40.55l-27.37 34.26c-.51.64-.51 1.56 0 2.21l31.27 39.13a4.68 4.68 0 003.65 1.76h18.11c.91 0 1.42-1.06.85-1.77l-32.14-40.21 22.28-27.84c.66-.85 1.03-1.88 1.03-2.94M162.39 96.51h41.96c1.42 0 2.77-.65 3.65-1.76l10.6-13.27c.57-.71.06-1.77-.85-1.77H178.3V4.12c0-.98-.79-1.77-1.77-1.77h-14.14c-.98 0-1.77.79-1.77 1.77v90.62c0 .97.8 1.77 1.77 1.77"
      ></path>
    </svg>
    <a-form
      :model="formState"
      name="basic"
      :label-col="{ span: 8 }"
      :wrapper-col="{ span: 16 }"
      autocomplete="off"
      @finish="onFinish"
      @finishFailed="onFinishFailed"
      class="form"
    >
      <a-form-item
        label=""
        name="username"
        class="form-item"
        :rules="[
          { required: true, message: 'Lütfen Kullanıcı Adınızı Giriniz!' },
        ]"
      >
        <a-input
          class="form-item"
          placeholder="Kullanıcı Adı"
          v-model:value="formState.username"
        />
      </a-form-item>

      <a-form-item
        label=""
        name="password"
        class="form-item"
        :rules="[{ required: true, message: 'Lütfen Şifrenizi Giriniz!' }]"
      >
        <a-input-password
          placeholder="Şifre"
          v-model:value="formState.password"
        />
      </a-form-item>

      <a-form-item
        class="form-item"
        name="remember"
        :wrapper-col="{ offset: 8, span: 16 }"
      >
        <a-checkbox class="checkbox" v-model:checked="formState.remember"
          >Oturumu Açık Tut</a-checkbox
        >
      </a-form-item>

      <a-form-item :wrapper-col="{ offset: 8, span: 16 }">
        <a-button class="button-primary" type="primary" html-type="submit"
          >Giriş Yap</a-button
        >
        <a-button class="button-primary" type="primary" html-type="submit"
          >Kayıt Ol</a-button
        >
      </a-form-item>
    </a-form>
  </div>
</template>
<script >
import { defineComponent, reactive } from "vue";
import { useAuthStore } from "../store/auth";
import router from "../router/index";
const dataBaseUserName = "admin";
const dataBasePassword = "123";
export default defineComponent({
  setup() {
    const main = useAuthStore();
    console.log(main.$state.isLogged);
    const formState = reactive({
      username: "",
      password: "",
      remember: true,
    });
    const onFinish = (values) => {
      console.log("Success:", values);
      if (
        dataBaseUserName === values.username &&
        dataBasePassword === values.password
      ) {
        console.log("giriş yapıldı");
        main.login();
        router.push("/");
        console.log(main.$state.isLogged);
      } else {
        console.log("Hatalı");
      }
    };

    const onFinishFailed = (errorInfo) => {
      console.log("Failed:", errorInfo);
    };
    return {
      formState,
      onFinish,
      onFinishFailed,
    };
  },
});
</script>

<style >

.formWrapper {
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  background: #fa4454;
  padding: 50px !important;
  width: 500px;
  height: 600px;
  border-radius: 12px;
  z-index: 5;
}
.header {
  fill: #fff;
  margin-bottom: 50px;
}
.form {
  display: flex;
  justify-content: flex !important;
  align-items: center;
  flex-direction: column;
}

.form-item * {
  color: black !important;
  font-size: 1em;
  text-align: left !important;
}
input#basic_username::placeholder,
input#basic_password::placeholder {
  color: black;
}

.form-item label {
  color: black !important;
  font-weight: 500;
  font-size: 1em !important;
  text-align: left !important;
}
.ant-form-item.form-item:nth-child(3) {
  align-self: flex-start;
  transform: translateY(-10px);
}
.ant-input-affix-wrapper,
.ant-form-item-control input {
  width: 300px !important;
}

.ant-form-item-required {
  cursor: text;
}
.form-item .checkbox span {
  color: #fff !important;
  font-size: 1.2em;
}
.ant-checkbox-checked .ant-checkbox-inner {
  background: black !important;
  outline: none !important;
  width: 20px;
  height: 20px;
}
.ant-form-item-control-input .checkbox{
transform: translateX(25px);
}

.ant-input.form-item:focus,
.ant-input[type="password"]:focus {
  font-size: 1.1em;
  font-weight: 500;
  border-color: transparent;
}
.ant-input.form-item:hover {
  border-color: transparent;
}

.ant-checkbox-wrapper {
  display: flex !important;
  align-items: center;
  align-self: flex-start !important;
}
.ant-checkbox-wrapper span:nth-child(2) {
  margin-bottom: 4px !important;
  font-weight: 500 !important;
  border-color: transparent !important;
}

.ant-checkbox {
  width: 20px;
  height: 20px;
  background: transparent !important;
  outline: none !important;
}
.ant-checkbox:hover {
  border-color: none !important;
}
.ant-form-item-control {
  max-width: 100% !important;
}
.ant-form-item-control input {
  height: 50px !important;
}
/* .ant-form-item-control input:not(:placeholder-shown) {
  display: none;
} */
.ant-form-item-control button {
  height: 50px !important;
  width: 170px !important;
  font-weight: 600;
  font-size: 1.2em;
  letter-spacing: 0.6px;
  background-color: black;
  border-color: #fa4454;
}

.ant-form-item-control button:hover {
  background: white;
  color: #fa4454;
  border-color: #fa4454;
}
button.ant-btn.ant-btn-primary.button-primary:focus {
  background: black;
  color: #fff;
  border-color: transparent;
}
.ant-form-item-control button:nth-child(2){
  height: 50px !important;
  width: 170px !important;
  font-weight: 600;
  font-size: 1.2em;
  letter-spacing: 0.6px;
  background-color: white;
  color: black;
  border-color: #fa4454;
  margin-left: 5px;
}

.ant-form-item-control button:nth-child(2):hover {
  background: black;
  color: white;
  border-color: #fa4454;
}
button.ant-btn.ant-btn-primary.button-primary:nth-child(2):focus {
  background: white;
  color: black;
  border-color: transparent;
}
.ant-checkbox-checked::after {
  content: "" !important;
  border-color: transparent !important;
}
.ant-checkbox-checked:hover {
  border-color: transparent !important;
}

.ant-checkbox-inner {
  width: 20px !important;
  height: 20px !important;
}

.ant-form-item-label
  > label.ant-form-item-required:not(.ant-form-item-required-mark-optional)::before,
.ant-form-item-label
  > label.ant-form-item-required:not(.ant-form-item-required-mark-optional)::after {
  content: "" !important;
}
.form-item .ant-form-item-explain-error {
  padding: 2px;
  font-weight: 500;
  margin-top: 5px;
  margin-bottom: 5px;
}
.ant-btn-primary {
  width: 150px !important;
}
.ant-form-item-control {
  margin: 0 !important;
}
</style>
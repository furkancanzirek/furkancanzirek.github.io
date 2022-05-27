import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import 'ant-design-vue/dist/antd.css';
import {Button,Form,Input,Checkbox,Menu, Row,Col,Layout} from 'ant-design-vue'
import { createPinia } from 'pinia';
const app=createApp(App)
app.config.productionTip=false
app.use(Form)
app.use(Button)
app.use(Input)
app.use(Checkbox)
app.use(Menu)
app.use(Row)
app.use(Col)
app.use(Layout)
app.use(createPinia())
app.use(router).mount('#app')




import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import LogIn from "./components/LogIn.vue";
import Header from "./components/Header.vue";
import Footer from "./components/Footer.vue";
import Particles from "vue3-particles";

const app = createApp(App);
app.use(router);

app.component("LogIn", LogIn);

app.component("Header", Header);

app.component("Footer", Footer);


app.use(Particles);

app.mount("#app");


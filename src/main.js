import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import axios from "axios";
import VueSweetalert2 from "vue-sweetalert2";
import "sweetalert2/dist/sweetalert2.min.css";
const app = createApp(App);
app.use(VueSweetalert2);
app.use(router);
app.config.globalProperties.$toastMessage = function toastMessage(
  type,
  text,
  duration,
  position
) {
  this.$swal({
    toast: true,
    position: position,
    showConfirmButton: false,
    timer: duration,
    icon: type,
    text: text,
  });
};
//// PETICIONES POST WEBSERVICES RH
app.config.globalProperties.$peticionesApi = async function (url, vars) {
  try {
    const resData = await axios.get(url, { vars }, { dataType: "jsonp" });
    return resData.data;
  } catch (error) {
    let mensaje = "",
      type = "";
    switch (error.response.status) {
      case 500:
        mensaje = `Error en la petición al servidor, enviar esta pantalla de error al area de IT. Url: ${url}`;
        type = "error";
        break;
      case 403:
        mensaje = `Sesión finalizada, por favor inicie sesión nuevamente. :)`;
        type = "warning";
        break;
      default:
        mensaje = `Error en la petición al servidor, enviar esta pantalla de error al area de IT. Url: ${url} <br> Estatus: ${error.response.status}`;
        type = "error";
    }
    this.$toastMessage(type, `Error: ${mensaje}`, 4000, "center");
    return null;
  }
};
app.mount("#app");

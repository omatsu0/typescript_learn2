import { Message } from "./message";

const app = document.getElementById("app");
if (app) {
  const msg = new Message("クラスから表示！");
  app.appendChild(msg.render());
}

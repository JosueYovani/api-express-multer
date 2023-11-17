import { API } from "./config/index.js";
import server from "./src/server.js";

server.listen(API.PORT, () => {
  console.log("Servidor iniciado en el puerto: " + API.PORT);
});

import { API, DB } from "./config/index.js";
import conn from "./src/lib/mySQL.js";
import server from "./src/server.js";

conn.connect((err) => {
  if (err) {
    console.log(`Connection failed: ${err.message}`);
    process.exit(1);
  } else {
    console.log(`Connection established: ${DB.NAME}`);
    server.listen(API.PORT, () => {
      console.log(`Server running on port: ${API.PORT}`);
    });

    process.on("SIGINT", () => {
      conn.end();
      process.exit();
    });
  }
});

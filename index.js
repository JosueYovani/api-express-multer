import { API, DB } from "./config/index.js";
import pool from "./src/lib/mySQL.js";
import server from "./src/server.js";

pool.getConnection((err, connection) => {
  if (err) {
    console.log(`Connection failed: ${err.message}`);
    process.exit(1);
  } else {
    console.log(`Connection established: ${DB.NAME}`);
    server.listen(API.PORT, () => {
      console.log(`Server running on port: ${API.PORT}`);
    });

    process.on("SIGINT", () => {
      connection.release();
      process.exit();
    });
  }
});

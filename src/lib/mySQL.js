import mySQL from "mysql";
import { DB } from "../../config";

const conn = mySQL.createConnection({
  host: DB.HOST,
  user: DB.USER,
  password: DB.PASSWORD,
  database: DB.NAME,
});

export default conn;

import mysql from "mysql";
import { DB } from "../../config";
import util from "util";

const pool = mysql.createPool({
  connectionLimit: 10,
  host: DB.HOST,
  user: DB.USER,
  password: DB.PASSWORD,
  database: DB.NAME,
});

pool.query = util.promisify(pool.query);

export default pool;

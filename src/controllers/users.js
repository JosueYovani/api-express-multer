import pool from "../lib/mySQL.js";

export const createNewUser = (req, res) => {
  const { name, email } = req.body;

  if (!name || !email) {
    return res
      .status(400)
      .json({ ok: false, msg: "Name and email are required" });
  }

  const query = "INSERT INTO users (name, email) VALUES (?, ?)";
  pool
    .query(query, [name, email])
    .then((result) => {
      console.log(result);

      return res.status(201).json({
        ok: true,
        msg: "User created successfully",
        userId: result.insertId,
      });
    })
    .catch((error) => {
      console.error("Error creating user:", error);
      return res
        .status(error.status || 500)
        .json({ ok: false, msg: error.message || "Unknown error" });
    });
};

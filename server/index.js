const express = require("express")
const app = express()
const mysql = require("mysql2")
const PORT = 3001
const cors = require("cors");
const {encrypt, decrypt} = require('./EncryptionHandler')

app.use(cors())
app.use(express.json())

const db = mysql.createConnection({
    user: "root",
    host: "localhost",
    password: "",
    database: "passwordmanager",
    port: 3306
})

db.connect((err) => {
    if (err) {
        console.error("Error connecting to the database: ", err);
    } else {
        console.log("Connected to the database");
    }
});

app.post("/addpassword", (req, res) => {
    const { password, title } = req.body;
    const hashedPassword = encrypt(password);

    db.query(
      "INSERT INTO passwords (password, title, iv) VALUES (?,?,?)",
      [hashedPassword.password, title, hashedPassword.iv],
      (err, result) => {
        if (err) {
          console.log(err);
        } else {
          res.send("Success");
        }
      }
    );
});

app.get('/showpasswords', (req, res) => {
  db.query('SELECT * FROM passwords', (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  })
})

app.delete("/deletepassword/:id", (req, res) => {
  const { id } = req.params;
  db.query("DELETE FROM passwords WHERE id = ?", [id], (err, result) => {
    if (err) {
      console.log(err)
    } else {
      res.send("Password deleted");
    }
  })
})

app.post('/decryptpassword', (req, res) => {
  res.send(decrypt(req.body));
})

app.listen(PORT, () => {
    console.log("Server is running...");
});
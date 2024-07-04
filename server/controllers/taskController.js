const db = require("../db");

exports.getAllTasks = (req, res) => {
  db.query("SELECT * FROM task", (err, results) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.json(results);
  });
};

exports.createTask = (req, res) => {
  const { title, description } = req.body;
  db.query(
    "INSERT INTO task (title, description) VALUES (?, ?)",
    [title, description],
    (err, results) => {
      if (err) {
        return res.status(500).json({ error: err.message });
      }
      res.status(201).json({ id: results.insertId, title, description });
    }
  );
};
exports.updateTask = (req, res) => {
  const { id } = req.params;
  const { title, description } = req.body;
  db.query(
    "UPDATE task SET title = ?, description = ? WHERE id = ?",
    [title, description, id],
    (err, results) => {
      if (err) {
        return res.status(500).json({ error: err.message });
      }
      res.json({ id, title, description });
    }
  );
};
exports.deleteTask = (req, res) => {
  const { id } = req.params;
  db.query("DELETE FROM task WHERE id = ?", [id], (err, results) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.status(204).send();
  });
};

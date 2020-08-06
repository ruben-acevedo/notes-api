const router = require("express").Router();
const controller = require("../controller/controller");

router.post("/create", async (req, res) => {
  const result = await controller.createNote(req.body);
  if (result.status !== 200) {
    res.status(result.status);
    res.send({ error: result.error });
  } else res.send(result.note);
});

router.get("/list/all", async (req, res) => {
  const result = await controller.listNotes(req.query.sort, req.query.desc);
  if (result.status !== 200) {
    res.status(result.status);
    res.send({ error: result.error });
  } else res.send(result.note);
});

router.get("/id/:id", async (req, res) => {
  const result = await controller.getId(req.params.id);
  if (result.status !== 200) {
    res.status(result.status);
    res.send({ error: result.error });
  } else res.send(result.note);
});

router.get("/category/:category", async (req, res) => {
  const result = await controller.getCategory(
    req.params.category,
    req.query.sort,
    req.query.desc
  );
  if (result.status !== 200) {
    res.status(result.status);
    res.send({ error: result.error });
  } else res.send(result.note);
});

router.get("/title/:title", async (req, res) => {
  const result = await controller.getTitle(
    req.params.title,
    req.query.sort,
    req.query.desc
  );
  if (result.status !== 200) {
    res.status(result.status);
    res.send({ error: result.error });
  } else res.send(result.note);
});

router.delete("/id/:id", async (req, res) => {
  const result = await controller.deleteId(req.params.id);
  if (result.status !== 200) {
    res.status(result.status);
    res.send({ error: result.error });
  } else res.sendStatus(result.status);
});

router.delete("/category/:category", async (req, res) => {
  const result = await controller.deleteCategory(req.params.category);
  if (result.status !== 200) {
    res.status(result.status);
    res.send({ error: result.error });
  } else res.sendStatus(result.status);
});

router.get("/list/category", async (req, res) => {
  const result = await controller.listCategory(req.query.desc);
  if (result.status !== 200) {
    res.status(result.status);
    res.send({ error: result.error });
  } else res.send(result.note);
});

router.put("/id/:id", async (req, res) => {
  const result = await controller.updateNote(req.params.id, req.body);
  if (result.status !== 200) {
    res.status(result.status);
    res.send({ error: result.error });
  } else res.send(result.note);
});

module.exports = router;

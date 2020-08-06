const helper = require("../helper/helper");
const service = require("../service/service");

const createNote = async (note) => {
  const validatedNote = await helper.validNote(note);
  if (validatedNote.status !== 200) return validatedNote;

  const noteObj = await helper.createObj(note);

  const result = await service.createNote(noteObj);
  return result;
};

const updateNote = async (id, note) => {
  const validatedNote = await helper.validNote(note);
  if (validatedNote.status !== 200) return validatedNote;

  const noteObj = await helper.updateObj(note);

  const result = await service.updateNote(id, noteObj);
  return result;
};

const listNotes = async (sort, desc) => {
  const result = await service.listNotes(sort, desc);
  return result;
};

const listCategory = async (desc) => {
  const result = await service.listCategory(desc);
  return result;
};

const getId = async (id) => {
  const result = await service.getId(id);
  return result;
};

const getCategory = async (category, sort, desc) => {
  const result = await service.getCategory(category, sort, desc);
  return result;
};

const getTitle = async (title, sort, desc) => {
  const result = await service.getTitle(title, sort, desc);
  return result;
};

const deleteId = async (id) => {
  const result = await service.deleteId(id);
  return result;
};

const deleteCategory = async (category) => {
  const result = await service.deleteCategory(category);
  return result;
};

module.exports = {
  createNote,
  listNotes,
  listCategory,
  getId,
  getCategory,
  getTitle,
  deleteId,
  deleteCategory,
  updateNote,
};

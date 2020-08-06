const Joi = require("joi");

const schema = Joi.object({
  title: Joi.string().min(3).max(30).required(),
  category: Joi.string().min(3).max(30).required(),
  content: Joi.string().min(1).required(),
});

const validNote = (note) => {
  const validation = schema.validate(note);

  if (!validation.error) {
    return {
      status: 200,
      note,
    };
  } else return { status: 500, error: validation.error.details[0].message };
};

const createObj = (note) => {
  note.createdAt = new Date().getTime();
  note.updatedAt = null;

  return note;
};

const updateObj = (note) => {
  note.updatedAt = new Date().getTime();
  return note;
};

module.exports = {
  validNote,
  createObj,
  updateObj,
};

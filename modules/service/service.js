const connection = require("../../config/connection");
const ObjectID = require("mongodb").ObjectID;

const createNote = async (noteBody) => {
  const client = await connection();
  await client.connect();

  try {
    const note = await client
      .db("notes-api")
      .collection("notes")
      .insertOne(noteBody);
    return {
      status: 200,
      note: note.ops,
    };
  } catch (err) {
    throw err;
  } finally {
    client.close();
  }
};

const listNotes = async (sort, desc) => {
  const client = await connection();
  await client.connect();

  try {
    let order = {};
    if (desc === "true") order[sort] = -1;
    else if (desc === "false") order[sort] = 1;

    const note = await client
      .db("notes-api")
      .collection("notes")
      .find()
      .sort(order)
      .toArray();
    return {
      status: 200,
      note,
    };
  } catch (err) {
    throw err;
  } finally {
    client.close();
  }
};

const getId = async (id) => {
  const client = await connection();
  await client.connect();

  try {
    const note = await client
      .db("notes-api")
      .collection("notes")
      .findOne({
        _id: ObjectID(id),
      });
    return {
      status: 200,
      note: note,
    };
  } catch (err) {
    throw err;
  } finally {
    client.close();
  }
};

const getCategory = async (category, sort, desc) => {
  const client = await connection();
  await client.connect();

  try {
    let order = {};
    if (desc === "true") order[sort] = -1;
    else if (desc === "false") order[sort] = 1;

    const note = await client
      .db("notes-api")
      .collection("notes")
      .find({
        category: category,
      })
      .sort(order)
      .toArray();
    return {
      status: 200,
      note: note,
    };
  } catch (err) {
    throw err;
  } finally {
    client.close();
  }
};

const listCategory = async (desc) => {
  const client = await connection();
  await client.connect();

  try {
    let order = {};
    if (desc === "true") order["category"] = -1;
    else if (desc === "false") order["category"] = 1;

    const note = await client
      .db("notes-api")
      .collection("notes")
      .distinct("category");
    return {
      status: 200,
      note: note,
    };
  } catch (err) {
    throw err;
  } finally {
    client.close();
  }
};

const getTitle = async (title, sort, desc) => {
  const client = await connection();
  await client.connect();

  try {
    let order = {};
    if (desc === "true") order[sort] = -1;
    else if (desc === "false") order[sort] = 1;

    const note = await client
      .db("notes-api")
      .collection("notes")
      .find({
        title: title,
      })
      .sort(order)
      .toArray();
    return {
      status: 200,
      note: note,
    };
  } catch (err) {
    throw err;
  } finally {
    client.close();
  }
};

const deleteId = async (id) => {
  const client = await connection();
  await client.connect();

  try {
    await client
      .db("notes-api")
      .collection("notes")
      .remove({
        _id: ObjectID(id),
      });
    return {
      status: 200,
    };
  } catch (err) {
    throw err;
  } finally {
    client.close();
  }
};

const deleteCategory = async (category) => {
  const client = await connection();
  await client.connect();

  try {
    await client.db("notes-api").collection("notes").remove({
      category: category,
    });
    return {
      status: 200,
    };
  } catch (err) {
    throw err;
  } finally {
    client.close();
  }
};

const updateNote = async (id, noteObj) => {
  const client = await connection();
  await client.connect();

  try {
    await client
      .db("notes-api")
      .collection("notes")
      .updateOne(
        {
          _id: ObjectID(id),
        },
        {
          $set: noteObj,
        }
      );

    const note = await client
      .db("notes-api")
      .collection("notes")
      .findOne({
        _id: ObjectID(id),
      });

    return {
      status: 200,
      note: note,
    };
  } catch (err) {
    throw err;
  } finally {
    client.close();
  }
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

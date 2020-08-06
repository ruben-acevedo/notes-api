const MongoClient = require("mongodb").MongoClient;

const uri =
  "mongodb+srv://root:root@rubencluster-eroht.gcp.mongodb.net/<dbname>?retryWrites=true&w=majority";

const connection = async () => {
  const client = new MongoClient(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  return client;
};

module.exports = connection;

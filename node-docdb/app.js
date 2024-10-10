const {MongoClient} = require('mongodb');
const dotenv = require('dotenv');
dotenv.config();

const uri = process.env.URI;
const client = new MongoClient(uri, {
  tls: true,             // Enable TLS (SSL)
  tlsCAFile: './global-bundle.pem', // Path to the PEM file
  useNewUrlParser: true,
  useUnifiedTopology: true
});
async function connectDB(){
  try {
    await client.connect();
    console.log("DB connected");
    db = client.db("test-db");
    col = db.collection('users');
    //     //Insert a single document
    let res = await col.insertOne({name: "Thao"});
    console.log('1 ', res);
    res = await col.findOne({name: "Thao"});
    console.log('2 ', res);
  } catch (error) {
    console.log("Cannot connect to DB");
  }
}

connectDB();           
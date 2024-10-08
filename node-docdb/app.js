const {MongoClient} = require('mongodb');
const dotenv = require('dotenv');
dotenv.config();

const uri = process.env.URI;
const client = new MongoClient(uri);
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
//Create a MongoDB client, open a connection to DocDB; as a replica set,
//  and specify the read preference as secondary preferred

// var client = MongoClient.connect(
// 'mongodb://thaovu:thaovu123@docdb-2024-06-18-11-39-12.cluster-c1q0oc0au59i.us-east-1.docdb.amazonaws.com:27017/?tls=true&tlsCAFile=global-bundle.pem&replicaSet=rs0&readPreference=secondaryPreferred&retryWrites=false',
// {
//   tlsCAFile: `global-bundle.pem` //Specify the DocDB; cert
// },
// function(err, client) {
//     if(err)
//         throw err;

//     //Specify the database to be used
//     db = client.db('sample-database');

//     //Specify the collection to be used
//     col = db.collection('sample-collection');

//     //Insert a single document
//     col.insertOne({'hello':'Amazon DocumentDB'}, function(err, result){
//       //Find the document that was previously written
//       col.findOne({'hello':'DocDB;'}, function(err, result){
//         //Print the result to the screen
//         console.log(result);

//         //Close the connection
//         client.close()
//       });
//    });
// });
                    
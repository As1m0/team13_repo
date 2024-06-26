var MongoClient = require("mongodb").MongoClient;
var url = "mongodb+srv://Cluster77158:diamondd@cluster0.6wnr8cy.mongodb.net/";

async function MagyarDobogosok() {
    try {
        const client = await MongoClient.connect(url);
        const db = client.db("T13");
        const collection = db.collection("Helsinki");

        const adatok = await collection.find(
            { helyezes: { $lt: 4 }},
            { projection: { _id: 0, Versenyszam: 1 } }).toArray();
        console.log("Magyar dobogósok:", adatok);
        client.close();

    }
    catch (error) {
        console.error("Hiba az adatok keresése során:", error);
    }

}

MagyarDobogosok();
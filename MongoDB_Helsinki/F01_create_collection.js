var MongoClient = require("mongodb").MongoClient;
var url = "mongodb+srv://Cluster77158:diamondd@cluster0.6wnr8cy.mongodb.net/";

async function createCollection() {
    try {
        const client = await MongoClient.connect(url);
        const db = client.db("T13");
        await db.createCollection("Helsinki");
        console.log("Helsinki kollekció létrehozva.");
        client.close();
    }
    catch (error) {
        console.log("Hiba a kollekció létrehozása során:", error);
    }
}

createCollection();
var MongoClient = require("mongodb").MongoClient;
var url = "mongodb+srv://Cluster77158:diamondd@cluster0.6wnr8cy.mongodb.net/";

async function BiggestTeam() {
    try {
        const client = await MongoClient.connect(url);
        const db = client.db("T13");
        const collection = db.collection("Helsinki");

        const biggestTeam = await collection.find().sort({CsapatMeret: -1}).limit(1).toArray();
        console.log("Legnagyobb csapat", biggestTeam);
        client.close();

    }
    catch (error) {
        console.error("Hiba az adatok keresése során:", error);
    }

}

BiggestTeam();
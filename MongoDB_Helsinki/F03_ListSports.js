var MongoClient = require("mongodb").MongoClient;
var url = "mongodb+srv://Cluster77158:diamondd@cluster0.6wnr8cy.mongodb.net/";

async function Listsports(){
    try{
        const client = await MongoClient.connect(url);
        const db = client.db("T13");
        const collection = db.collection("Helsinki");

        const adatok = await collection.find({SportAg: {$in: ["torna", "uszas"]}}, {projection: {_id: 0, SportAg: 1, Versenyszam: 1}}).toArray();
        console.log("Talált sportagak:", adatok);
        client.close();
       
    }
    catch (error)
    {
        console.error("Hiba az adatok keresése során:", error);
    }

}

Listsports();
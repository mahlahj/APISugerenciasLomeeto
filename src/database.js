import { MongoClient } from "mongodb";

async function connect() {
    async function listDatabases(client){
        const databasesList = await client.db().admin().listDatabases();
     
        console.log("Databases:");
        databasesList.databases.forEach(db => console.log(` - ${db.name}`));
    };
    const uri = "mongodb+srv://GuillermoKellyS:GuillermoKelly1982@cluster0.jzglh.mongodb.net/LomeetoSugerencias?retryWrites=true&w=majority";
    const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
    try {
        // Connect to the MongoDB cluster
        await client.connect();
 
        // Make the appropriate DB calls
        await listDatabases(client);
 
    } catch (e) {
        console.error(e);
    } finally {
        await client.close();
    }
}

export default connect;
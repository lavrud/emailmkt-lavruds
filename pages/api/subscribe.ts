import { NowRequest, NowResponse } from '@vercel/node'
import { MongoClient, Db } from 'mongodb'
import url from 'url';

let cacheDb: Db = null;

async function connnectToDatabase (uri: string) {

    if (cacheDb) {
        return cacheDb;
    }

    const client = await MongoClient.connect(uri, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    });

    const dbname = url.parse(uri).pathname.substr(1);

    const db = client.db(dbname);

    cacheDb = db  ;

    return db;
}

export default async (request:NowRequest, Response:NowResponse) => {
    const { email } = request.body;

    const db = await connnectToDatabase(process.env.MONGODB_URI);

    const collection = db.collection('subscribers');

    await collection.insertOne({
        email,
        subscribersAt: new Date(),
    })

    return Response.status(201).json({ ok: email });
}
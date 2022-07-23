import { MongoClient } from 'mongodb';

//    /api/new-meetup
// POST    /api/new-meetup

async function handler(req, res) {
    if (req.method === 'POST') {
        const data = req.body;
        // const { title, image, address, description } = data;

        // const client = await MongoClient.connect('mongodb+srv://ahmed2200716:01117494780@cluster0.xh3vy.mongodb.net/meetups?retryWrites=true&w=majority');
        const client = await MongoClient.connect('mongodb+srv://ahmed2200716:01117494780@cluster0.iluostq.mongodb.net/meetups?retryWrites=true&w=majority');

        const db = client.db();

        const meetupsCollection = db.collection('meetups');

        const result = await meetupsCollection.insertOne(data);

        console.log(result);

        client.close();

        res.status(201).json({ message: 'Meetup inserted!' });
    }
};

export default handler;
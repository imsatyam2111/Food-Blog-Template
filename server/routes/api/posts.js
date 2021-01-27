const express = require("express");
const mongodb = require("mongodb");

const router = express.Router();

// Request from Mongodb
async function loadPostsCollection() {
    const client = await mongodb.MongoClient.connect('mongodb+srv://satyam:satyam@cluster0.igguf.mongodb.net/vue-express?retryWrites=true&w=majority', {
        useNewUrlParser: true,
        useUnifiedTopology: true
    });
    return client.db('vue-express').collection('posts');
}

// Get Posts
router.get('/', async(req, res) => {
    try {
        const posts = await loadPostsCollection();
        res.send(await posts.find({}).toArray());
    } catch (err) {
        console.log(err);
    }    
});
// Add Posts
router.post('/', async (req, res) => {
    try {
        const posts = await loadPostsCollection();
        await posts.insertOne({
            title: req.body.title,
            category: req.body.category,
            description: req.body.description,  
            content: req.body.content,
            isLiked: req.body.isLiked,
            likes: req.body.likes,
            views: req.body.views,
            createdAt: new Date()
        });
        res.status(201).send();
    } catch (err) {
        console.log(err)
    }
});
// Delete Posts
router.delete('/:id', async (req, res) => {
    try {
        const posts = loadPostsCollection();
        await (await posts).deleteOne({_id: new mongodb.ObjectID(req.params.id)});
        res.status(200).send();
    } catch (err) {
        console.log(err);
    }
});

module.exports = router;
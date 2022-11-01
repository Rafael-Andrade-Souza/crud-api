const express = require('express');
const router = express.Router();
const Post = require('../data/Post');


// RETURN ALL
router.get('/', async (req,res) => {
    try{
        const posts = await Post.find();
        res.json(posts);
    }catch(err){
        res.json({message:err})
    }
});

// POST ONE
router.post('/', async (req,res) => {
    const post = new Post({
        name: req.body.name,
        storeName: req.body.storeName
    });
    try{
    const postSaved = await post.save()
    res.json(postSaved);
    }catch(err){
        res.json({message: err})
    }
            
});

//GET POST ID
router.get('/:id', async (req,res) => {
    try{
    const post = await Post.findById(req.params.id);
    res.json(post);
}catch(err){
    res.json({message: err});
}


});

//DELETE POST
router.delete('/:id', async (req,res) => {
    try{
    const deleted = await Post.remove({_id: req.params.id });
    res.json(deleted);
    }catch(err){
        res.json({message: err});
    }
});

//UPDATE ONE
router.patch('/:id', async (req,res) => {
    try{
        const postUpdate = await Post.updateOne({_id: req.params.id }, { $set: { name: req.body.name} }
        );
        res.json(postUpdate);
    }catch (err){
        res.json({message: err});
    }
})

module.exports = router;
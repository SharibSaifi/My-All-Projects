const mongoose=require('mongoose');

const PostSchema = new mongoose.Schema({
    name : {type: String, required: true},
    text : {type: String, required: true},
    image : {type: String, required: true}
},{timestams:true}); 

const Post = mongoose.model("post", PostSchema);
module.exports = Post;
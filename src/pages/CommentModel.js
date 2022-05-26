//credit to: https://medium.com/@bryantheastronaut/ok-here-we-go-b9f683c5a00c
import mongoose from 'mongoose';
const Schema = mongoose.Schema;

// create new instance of the mongoose.schema. the schema takes an
// object that shows the shape of your database entries.
const CommentsSchema = new Schema({
  name: String,
  comment: String,
}, { timestamp: true });

// export our module to use in server.js
export default mongoose.model('Comment', CommentsSchema);
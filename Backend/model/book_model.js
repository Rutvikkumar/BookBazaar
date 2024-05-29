import mongoose from 'mongoose';


// Define the schema for your product
const bookschema = mongoose.Schema({
  name:String,
  price:Number,
  category:String,
  image:String,
  title:String
});

// Create a model using the schema
const Book = mongoose.model('Book',bookschema);

export default Book;

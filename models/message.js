// Create a schema for our data
var MessageSchema = new Schema({
  message: String,
  date: Date
});
// Use the schema to register a model with MongoDb
mongoose.model('Message', MessageSchema); 
var Message = mongoose.model('Message');
const mongoose = require('mongoose');
const mongoURI = "mongodb+srv://shilatbedani:Sh12345678@exchangerates.77onwp0.mongodb.net/?retryWrites=true&w=majority&appName=ExchangeRates";

const ConnectionMongo=()=>{
  mongoose.connect(mongoURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.log(err));

  const dbConnection = mongoose.connection;
  dbConnection.once("open", (_) => {
    console.log(`Database connected: ${mongoURI}`);

  });
 
  dbConnection.on("error", (err) => {
    console.error(`connection error: ${err}`);
  });
  
  return;
}
module.exports = ConnectionMongo;
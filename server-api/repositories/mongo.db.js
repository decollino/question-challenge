import mongoose from "mongoose";

async function connect() {
  const uri =
    "mongodb+srv://pipecodes:zVhsYQ6tl3QWFyWP@cluster0.cz51c.mongodb.net/?retryWrites=true&w=majority";
  return await mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
}

export { connect };

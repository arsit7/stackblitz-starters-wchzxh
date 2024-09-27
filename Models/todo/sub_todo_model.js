import mongoose from mongoose

const  subTodoshcema  =  new mongoose.schema({},{timestamps:true})

export const  subTodo  =  mongoose.model("subTodo",subTodoshcema);
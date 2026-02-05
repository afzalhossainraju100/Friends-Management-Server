const express = require("express");
const cors = require("cors");
const app = express();
const port = process.env.PORT || 3000;
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hy Here Friend Management Service");
});

const Friends=[
  {id:1,name:"JAVA",email:"john.doe@example.com"},
  {id:2,name:"JAVA SCRIPT",email:"jane.smith@example.com"},
  {id:3,name:"Python",email:"alice.johnson@example.com"},
  {id:4,name:"Flutter Dart",email:"bob.brown@example.com"}
]

app.get("/friends",(req,res)=>{
  res.json(Friends);
})

app.post('/friends',(req,res)=>{
  const newFriend = req.body;
  console.log(newFriend);
  newFriend.id = Friends.length +1;
  Friends.push(newFriend);
  res.send(newFriend);

  res.json({message:"Friend added successfully"})
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

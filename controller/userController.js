let users = [
    { id: 1, name: "Areeba" },
    { id: 2, name: "Fatima" }
];
const getAllUsers = (req,res,next)=>{

    res.send("Fetch all users");
}
const addUser = (req,res,next)=>{
    res.send("Add a new user");

}
const getUserById=(req,res,next)=>{

    res.send("Fetch a user by its id");
}

module.exports = { getAllUsers,addUser,getUserById};
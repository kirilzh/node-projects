const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');

var id = 'asd5b4678337712f40fe54d13c2';

if (!ObjectID.isValid(id)){
  console.log('Id not valid');
}
// Todo.find({
//   _id: id
// }).then((todos) => {
//   console.log('Todos', todos);
// });
//
// Todo.findOne({
//   _id: id
// }).then((todos) => {
//   console.log('Todo', todos);
// });

Todo.findById(id).then((todos) => {
  if (!todos) {
    return console.log('Id not found');
  }
  console.log('Todo by id', todos);
}).catch((e) => console.log(e));

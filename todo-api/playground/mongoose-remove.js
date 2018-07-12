const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');

// Todo.remove({}).then((result) => {
//   console.log(result);
// });

Todo.findByIdAndRemove('5b47941f23734a7226f134b6').then((todo) => {
  console.log(todo);
})

Todo.findOneAndRemove({_id: '5b47941f23734a7226f134b6'}).then((todo) => {
  console.log(todo);
});

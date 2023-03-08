// // const { Schema, model } = require('mongoose');
// // const bcrypt = require('bcrypt');

// // const userSchema = new Schema({
// //   username: {
// //     type: String,
// //     required: true,
// //     unique: true,
// //     trim: true,
// //   },
// //   email: {
// //     type: String,
// //     required: true,
// //     unique: true,
// //     match: [/.+@.+\..+/, 'Must match an email address!'],
// //   },
// //   password: {
// //     type: String,
// //     required: true,
// //     minlength: 5,
// //   },
// //   thoughts: [
// //     {
// //       type: Schema.Types.ObjectId,
// //       ref: 'Thought',
// //     },
// //   ],
// // });

// // userSchema.pre('save', async function (next) {
// //   if (this.isNew || this.isModified('password')) {
// //     const saltRounds = 10;
// //     this.password = await bcrypt.hash(this.password, saltRounds);
// //   }

// //   next();
// // });

// // userSchema.methods.isCorrectPassword = async function (password) {
// //   return bcrypt.compare(password, this.password);
// // };

// // const User = model('User', userSchema);

// // module.exports = User;

// const mongoose = require('mongoose');
// const bcrypt = require('bcryptjs');

// const userSchema = new mongoose.Schema({
//   name: { type: String, required: true },
//   email: { type: String, required: true, unique: true },
//   password: { type: String, required: true },
// });

// // Hash the password before saving the user
// userSchema.pre('save', async function (next) {
//   const user = this;
//   if (!user.isModified('password')) {
//     return next();
//   }
//   try {
//     const salt = await bcrypt.genSalt(10);
//     user.password = await bcrypt.hash(user.password, salt);
//     next();
//   } catch (error) {
//     return next(error);
//   }
// });

// // Compare the provided password with the hashed password
// userSchema.methods.comparePassword = async function (password) {
//   return bcrypt.compare(password, this.password);
// };

// //const User = mongoose.model('User', userSchema);

// module.exports = {};

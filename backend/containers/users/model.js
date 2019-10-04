const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref : 'User', index: true },
    hash: { type: String, required: true },
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    email: { type: String, trim: true },
    createdDate: { type: Date, default: Date.now }
});

userSchema.set('toJSON', { virtuals: true });
module.exports = mongoose.model('User', userSchema);
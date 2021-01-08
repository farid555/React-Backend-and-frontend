const mongoose = require('mongoose')



const userSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    gmail: {
        type: String,
        required: true,

    },
    passwordHash: {
        type: String,
        required: true,

    },
    phone: {
        type: String,
        required: true,
    },
    isAdmin: {
        type: Boolean,
        default: ''


    },
    cstreet: {
        type: String,
        default: ''

    },
    apartment: {
        type: String,
        default: '',
    },
    zip: {
        type: String,

    },
    city: {
        type: String,
        default: '',

    },
    country: {
        type: String,
        default: '',
    }
})
userSchema.virtual('id').get(function () {  //remove the _id to id
    return this._id.toHexString()
})
userSchema.set('toJSON', {
    virtuals: true,
})



exports.User = mongoose.model('User', userSchema)
exports.userSchema = userSchema;
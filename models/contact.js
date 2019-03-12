const mongoose = require('mongoose');


const contactSchema = new mongoose.Schema({
	name: {
		type: String,
		trim: true,
		required: true
	},
	contactNumber: {
		type: Number,
		trim: true,
		unique: true,
		require: true
	}
})


const Contact = mongoose.model("Contact", contactSchema)

module.exports = {
	Contact
}
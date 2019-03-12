const mongoose = require('mongoose');


const smsSchema = new mongoose.Schema({
	message: {
		type: String,
		trim: true,
		required: true
	},
	sender: {
		type: mongoose.Schema.Types.ObjectId,
		ref: 'contact'
	},
	receiver: {
		type: mongoose.Schema.Types.ObjectId,
		ref: 'contact'
	}
})


const Sms = mongoose.model("Sms", smsSchema)

module.exports = {
	Sms
}
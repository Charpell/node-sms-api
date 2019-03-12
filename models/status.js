const mongoose = require('mongoose');


const statusSchema = new mongoose.Schema({
	status: {
		type: String,
		trim: true
	},
	contact: {
		type: mongoose.Schema.Types.ObjectId,
		ref: 'contact'
	},
	message: {
		type: String,
		trim: true
	}
})


const Status = mongoose.model("Status", statusSchema)

module.exports = {
	Status
}
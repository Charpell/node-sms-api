const { Contact } = require("../models/contact.js")
const { Sms } = require("../models/sms.js")
const { Status } = require("../models/status.js")


exports.createContact = async (req, res) => {
	const { name, contactNumber } = req.body;

	let newContact = await Contact.findOne({ contactNumber })

	if (newContact) return res.status(409).json({ message: "Contact already exist" })

	try {
		newContact = new Contact({
			name,
			contactNumber
		});

		const result = await newContact.save();

		return res.status(201).json(newContact)
	} catch (error) {
		return res.status(500).json({ error: error.message })
	}
}



exports.deleteContact = async (req, res) => {
	try {
		const { contactId } = req.params;
		await Contact.findOneAndDelete(contactId)
		await Sms.deleteMany({ sender: contactId })
		await Sms.deleteMany({ receiver: contactId })
		await Status.deleteMany({ contact: contactId })
		return res.status(200).send({ message: 'Contact deleted'})
	} catch (error) {
		return res.status(500).json({ error: 'Cannot find or delete this Contact'})
	}
}
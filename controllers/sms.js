const { Contact } = require("../models/contact");
const { Sms } = require("../models/sms")
const { Status } = require("../models/status")


exports.createSms = async (req, res) => {
	const { message, sender, receiver } = req.body

	try {
		const newSms = new Sms({
			message,
			sender,
			receiver
		})

		const senderObject = await Contact.findById(sender)

		if (!senderObject) {
			return res.status(400).json({ message: "Contact not found"})
		}

		newSms.sender = sender

		const receiverObject = await Contact.findById(receiver)

		if (!receiverObject) {
			return res.status(400).json({ message: "Contact not found"})
		}

		newSms.receiver = receiver

		await newSms.save();

		const receivedStatus = new Status({
			message,
			contact: receiver,
			status: "Received"
		})

		await receivedStatus.save()

		const sentStatus = new Status({
			message,
			contact: sender,
			status: "Sent"
		})

		await sentStatus.save()

		return res.status(201).json(newSms)

	} catch (error) {
		return res.status(500).json({ error: error.message })
	}

}


exports.getSentSms = async (req, res) => {
	try {
		const { contactId } = req.params;

		const sentMessage = await Status.find({
			contact: contactId,
			status: 'Sent'
		})

		return res.status(200).json(sentMessage)
	} catch (error) {
		return res.status(500).json({ error: error.message })
	}
}



exports.getRecievedSms = async (req, res) => {
	try {
		const { contactId } = req.params;

		const receivedMessage = await Status.find({
			contact: contactId,
			status: 'Received'
		})

		return res.status(200).json(receivedMessage)
	} catch (error) {
		return res.status(500).json({ error: error.message })
	}
}
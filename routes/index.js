const { createContact, deleteContact } = require('../controllers/contact.js');
const { createSms, getSentSms, getRecievedSms } = require("../controllers/sms.js")


const routes = app => {
	app.post("/v1/contact", createContact);
	app.delete("/v1/contact/:contactId", deleteContact);
	app.post("/v1/sms", createSms);
	app.get("/v1/sms/sent/:contactId", getSentSms);
	app.get("/v1/sms/received/:contactId", getRecievedSms);
}

module.exports = routes
const mongoose = require("mongoose");

module.exports = function() {
	mongoose
		.connect(process.env.DATABASE_URL, { useNewUrlParser: true, useCreateIndex: true })
		.then(() => {
			console.log("Successfully connected to the database");
		})
		.catch(error => {
			console.log("Could not connect to the database. Exiting now...")
			console.log(error)
			process.exit()
		})
}
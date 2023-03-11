const isDevelopmentMode = process.env.MODE === "DEV";

const clientURL = isDevelopmentMode
	? "http://localhost:3000"
	: ["https://scoutx.onrender.com/", "https://scoutx.onrender.com/"];

module.exports = { clientURL };

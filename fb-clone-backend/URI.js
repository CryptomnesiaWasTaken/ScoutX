const isDevelopmentMode = process.env.MODE === "DEV";

const clientURL = isDevelopmentMode
	? "http://localhost:3000"
	: ["https://adra-amie.netlify.app", "https://adra-amie.netlify.app"];

module.exports = { clientURL };

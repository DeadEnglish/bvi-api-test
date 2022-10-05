import * as dotenv from "dotenv";

// get .env file contents
dotenv.config();

module.exports = {
	transform: {
		"^.+\\.tsx?$": "ts-jest",
	},
	testRegex: "(/tests/.*|(\\.|/)(spec))\\.(jsx?|tsx?)$",
	testPathIgnorePatterns: ["/lib/", "/node_modules/"],
	moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"],
	collectCoverage: false,
	testTimeout: 30000,
};

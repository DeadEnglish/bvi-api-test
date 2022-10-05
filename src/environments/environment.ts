import { Environment } from "../types/env.types";

const env: Environment = {
	apiKey: process.env.API_KEY || "wrong-key",
	apiKeyLimitExceeded:
		process.env.API_KEY_LIMIT_EXCEEDED || "wrong-limit-exceeded-key",
	apiBaseUrl: process.env.API_URL || "wrong-api-base",
};

export default env;

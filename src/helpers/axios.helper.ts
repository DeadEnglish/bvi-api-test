import axios from "axios";
import environment from "../environments/environment";

/** Create an instance of axios */
export const httpClient = axios.create({
	baseURL: environment.apiBaseUrl,
	timeout: 10000,
});

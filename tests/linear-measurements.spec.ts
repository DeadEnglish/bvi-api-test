import { AxiosError, AxiosResponse } from "axios";
import { postLinearMeasurements } from "../src/endpoints/endpoints";
import environment from "../src/environments/environment";
import { httpClient } from "../src/helpers/axios.helper";
import { createUserFormData } from "../src/helpers/user-data.helper";
import {
	ApiError,
	ApiResponse,
	LinearMeasurements,
} from "../src/types/endpoint.types";

const apiKey = environment.apiKey;

describe("/BVIServices/LinearMeasurements", () => {
	it("should be using the correct method and url for the request", async () => {
		const axiosPostSpy = jest.spyOn(httpClient, "post");

		const data = createUserFormData();
		await postLinearMeasurements({
			apiKey,
			data,
		});

		expect(axiosPostSpy).toHaveBeenCalledWith(
			"BVIServices/LinearMeasurements",
			data,
			{
				headers: {
					"X-API-KEY": apiKey,
					"Content-Type": "multipart/form-data",
				},
			}
		);
	});

	it("returns a 200 and correct response", async () => {
		const request = (await postLinearMeasurements({
			apiKey: environment.apiKey,
			data: createUserFormData(),
		})) as AxiosResponse<ApiResponse<LinearMeasurements>>;

		expect(request.status).toEqual(200);
		expect(request.data.results.HIPS_CIRCUMFERENCE).toBeTruthy();
		expect(request.data.results.WAIST_CIRCUMFERENCE).toBeTruthy();
		expect(request.data.results.ScanID).toBeTruthy();
	});

	it("returns a 404 if missing API key", async () => {
		const request = (await postLinearMeasurements({
			data: createUserFormData(),
		})) as AxiosError<ApiError>;

		expect(request.response?.status).toEqual(404);
		expect(request.response?.data.Error).toBeTruthy();
	});

	it("returns a 401 if incorrect API key", async () => {
		const request = (await postLinearMeasurements({
			apiKey: "wrong key",
			data: createUserFormData(),
		})) as AxiosError<ApiError>;
		expect(request.response?.status).toEqual(401);
		expect(request.response?.data.Error).toBeTruthy();
	});

	it("returns a 403 when daily limit is reached", async () => {
		const request = (await postLinearMeasurements({
			apiKey: environment.apiKeyLimitExceeded,
			data: createUserFormData(),
		})) as AxiosError<ApiError>;

		expect(request.response?.status).toEqual(403);
		expect(request.response?.data.Error).toBeTruthy();
	});
});

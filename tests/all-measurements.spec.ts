import { AxiosError, AxiosResponse } from "axios";
import { postAllMeasurements } from "../src/endpoints/endpoints";
import environment from "../src/environments/environment";
import { httpClient } from "../src/helpers/axios.helper";
import { createUserFormData } from "../src/helpers/user-data.helper";
import {
	AllMeasurements,
	ApiError,
	ApiResponse,
} from "../src/types/endpoint.types";

const apiKey = environment.apiKey;

describe("/BVIServices/AllMeasurements", () => {
	it("should be using the correct method and url for the request", async () => {
		const axiosPostSpy = jest.spyOn(httpClient, "post");

		const data = createUserFormData();
		await postAllMeasurements({
			apiKey,
			data,
		});

		expect(axiosPostSpy).toHaveBeenCalledWith(
			"BVIServices/AllMeasurements",
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
		const request = (await postAllMeasurements({
			apiKey: environment.apiKey,
			data: createUserFormData(),
		})) as AxiosResponse<ApiResponse<AllMeasurements>>;

		expect(request.status).toEqual(200);
		//  Body comp
		expect(request.data.results.TOTAL_BODY_FAT).toBeTruthy();
		expect(request.data.results.VISCERAL_FAT).toBeTruthy();
		// Linear measurements
		expect(request.data.results.HIPS_CIRCUMFERENCE).toBeTruthy();
		expect(request.data.results.WAIST_CIRCUMFERENCE).toBeTruthy();
		// Ratios
		expect(request.data.results.WAIST_TO_HEIGHT_RATIO).toBeTruthy();
		expect(request.data.results.WAIST_TO_HIP_RATIO).toBeTruthy();
		// Health indicator
		expect(request.data.results.BVI_NUMBER).toBeTruthy();
		expect(request.data.results.BVI_RISK_INDICATOR).toBeTruthy();
		// Scan ID
		expect(request.data.results.ScanID).toBeTruthy();
	});

	it("returns a 404 if missing API key", async () => {
		const request = (await postAllMeasurements({
			data: createUserFormData(),
		})) as AxiosError<ApiError>;

		expect(request.response?.status).toEqual(404);
		expect(request.response?.data.Error).toBeTruthy();
	});

	it("returns a 401 if incorrect API key", async () => {
		const request = (await postAllMeasurements({
			apiKey: "wrong key",
			data: createUserFormData(),
		})) as AxiosError<ApiError>;

		expect(request.response?.status).toEqual(401);
		expect(request.response?.data.Error).toBeTruthy();
	});

	it("returns a 403 when daily limit is reached", async () => {
		const request = (await postAllMeasurements({
			apiKey: environment.apiKeyLimitExceeded,
			data: createUserFormData(),
		})) as AxiosError<ApiError>;

		expect(request.response?.status).toEqual(403);
		expect(request.response?.data.Error).toBeTruthy();
	});
});

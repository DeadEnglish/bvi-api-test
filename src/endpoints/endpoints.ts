import { AxiosError, AxiosResponse } from "axios";
import FormData from "form-data";
import { httpClient } from "../helpers/axios.helper";
import {
	AllMeasurements,
	ApiError,
	ApiResponse,
	BodyComposition,
	BviHealthIndicator,
	LinearMeasurements,
	Ratios,
} from "../types/endpoint.types";

/**
 *
 * Function to post form data to body composition endpoint
 * @param {{
 * 	apiKey?: string;
 * 	data: FormData;
 * }}
 * @return AxiosResponse<ApiResponse<BodyComposition>> | AxiosError>
 */
export const postBodyComposition = async ({
	apiKey,
	data,
}: {
	apiKey?: string;
	data: FormData;
}): Promise<
	AxiosResponse<ApiResponse<BodyComposition>> | AxiosError<ApiError>
> => {
	try {
		const response = await httpClient.post<ApiResponse<BodyComposition>>(
			"BVIServices/BodyComposition",
			data,
			{
				headers: {
					"X-API-KEY": apiKey || "",
					"Content-Type": "multipart/form-data",
				},
			}
		);

		return response;
	} catch (error) {
		const err = error as AxiosError<ApiError>;

		return err;
	}
};

/**
 *
 * Function to post form data to linear measurement endpoint
 * @param {{
 * 	apiKey?: string;
 * 	data: FormData;
 * }}
 * @return AxiosResponse<ApiResponse<LinearMeasurements>> | AxiosError>
 */
export const postLinearMeasurements = async ({
	apiKey,
	data,
}: {
	apiKey?: string;
	data: FormData;
}): Promise<
	AxiosResponse<ApiResponse<LinearMeasurements>> | AxiosError<ApiError>
> => {
	try {
		const response = await httpClient.post<ApiResponse<LinearMeasurements>>(
			"BVIServices/LinearMeasurements",
			data,
			{
				headers: {
					"X-API-KEY": apiKey || "",
					"Content-Type": "multipart/form-data",
				},
			}
		);

		return response;
	} catch (error) {
		const err = error as AxiosError<ApiError>;

		return err;
	}
};

/**
 *
 * Function to post form data to ratios endpoint
 * @param {{
 * 	apiKey?: string;
 * 	data: FormData;
 * }}
 * @return AxiosResponse<ApiResponse<Ratios>> | AxiosError>
 */
export const postRatios = async ({
	apiKey,
	data,
}: {
	apiKey?: string;
	data: FormData;
}): Promise<AxiosResponse<ApiResponse<Ratios>> | AxiosError<ApiError>> => {
	try {
		const response = await httpClient.post<ApiResponse<Ratios>>(
			"BVIServices/Ratios",
			data,
			{
				headers: {
					"X-API-KEY": apiKey || "",
					"Content-Type": "multipart/form-data",
				},
			}
		);

		return response;
	} catch (error) {
		const err = error as AxiosError<ApiError>;

		return err;
	}
};

/**
 *
 * Function to post form data to BVI Health Indicator endpoint
 * @param {{
 * 	apiKey?: string;
 * 	data: FormData;
 * }}
 * @return AxiosResponse<ApiResponse<BviHealthIndicator>> | AxiosError>
 */
export const postBviHealthIndicator = async ({
	apiKey,
	data,
}: {
	apiKey?: string;
	data: FormData;
}): Promise<
	AxiosResponse<ApiResponse<BviHealthIndicator>> | AxiosError<ApiError>
> => {
	try {
		const response = await httpClient.post<ApiResponse<BviHealthIndicator>>(
			"BVIServices/BVIHealthIndicator",
			data,
			{
				headers: {
					"X-API-KEY": apiKey || "",
					"Content-Type": "multipart/form-data",
				},
			}
		);

		return response;
	} catch (error) {
		const err = error as AxiosError<ApiError>;

		return err;
	}
};

/**
 *
 * Function to post form data to all measurements endpoint
 * @param {{
 * 	apiKey?: string;
 * 	data: FormData;
 * }}
 * @return AxiosResponse<ApiResponse<AllMeasurements>> | AxiosError>
 */
export const postAllMeasurements = async ({
	apiKey,
	data,
}: {
	apiKey?: string;
	data: FormData;
}): Promise<
	AxiosResponse<ApiResponse<AllMeasurements>> | AxiosError<ApiError>
> => {
	try {
		const response = await httpClient.post<ApiResponse<AllMeasurements>>(
			"BVIServices/AllMeasurements",
			data,
			{
				headers: {
					"X-API-KEY": apiKey || "",
					"Content-Type": "multipart/form-data",
				},
			}
		);

		return response;
	} catch (error) {
		const err = error as AxiosError<ApiError>;

		return err;
	}
};

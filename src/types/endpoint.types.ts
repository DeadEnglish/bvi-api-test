export type ActivityLevel = "SEDENTARY" | "ACTIVE" | "FIT" | "VERY_FIT";

export type Gender = "MALE" | "FEMALE" | "PREFER_NOT_TO_SAY";

export interface UserData {
	age: string;
	weightInKgs: string;
	heightInCms: string;
	gender: Gender;
	activityLevel: ActivityLevel;
}

export interface EndpointData extends UserData {
	imageFront: string;
	imageSide: string;
	testMode: boolean;
}

export interface BodyComposition {
	TOTAL_BODY_FAT: string;
	VISCERAL_FAT: string;
	ScanID: string;
}

export interface LinearMeasurements {
	WAIST_CIRCUMFERENCE: string;
	HIPS_CIRCUMFERENCE: string;
	ScanID: string;
}

export interface Ratios {
	WAIST_TO_HIP_RATIO: string;
	WAIST_TO_HEIGHT_RATIO: string;
	ScanID: string;
}

export interface BviHealthIndicator {
	BVI_RISK_INDICATOR: string;
	BVI_NUMBER: string;
	ScanID: string;
}

export interface AllMeasurements
	extends BodyComposition,
		LinearMeasurements,
		Ratios,
		BviHealthIndicator {}

export interface ApiResponse<T> {
	results: T;
}

export interface ApiError {
	Error: string;
}

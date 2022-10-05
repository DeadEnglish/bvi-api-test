import FormData from "form-data";
import { createReadStream } from "fs";
import { userImageData } from "../../mocks/data.mock";

// max number of images by user data
const numOfImages: number = userImageData.length;

/**
 * function to check if a user exists
 * @param userNum number
 * @returns void or throws an error
 */
const checkIfUserExists = (userNum: number): void => {
	if (userNum <= numOfImages - 1) {
		return;
	}

	throw Error(
		`User does not exist in data array, please use a number between 0 and ${
			numOfImages - 1
		}`
	);
};

/**
 * Function to create form data form a user object
 * @param userNumber number of user in array
 * @returns FormData for form submission
 */
export const createUserFormData = (userNumber: number = 0): FormData => {
	checkIfUserExists(userNumber);

	const userData = userImageData[userNumber];

	const formData = new FormData();

	formData.append("Age", userData.age);
	formData.append("WeightInKgs", userData.weightInKgs);
	formData.append("HeightInCms", userData.heightInCms);
	formData.append("Gender", userData.gender);
	formData.append("ActivityLevel", userData.activityLevel);
	formData.append(
		"ImageFront",
		createReadStream(`./src/images/${userNumber}.jpg`)
	);
	formData.append(
		"ImageSide",
		createReadStream(`./src/images/${userNumber}_side.jpg`)
	);

	return formData;
};

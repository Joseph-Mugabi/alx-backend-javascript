import signUpcreatedUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default async function handleProfileSignup(firstName, lastName, fileName) {
  const response = []; // Declare and initialize an empty array
  try {
    const createUser = await signUpcreatedUser(firstName, lastName);
    response.push({ status: 'fulfilled', value: createUser });
    await uploadPhoto(fileName);
  } catch (error) {
    response.push({
      status: 'rejected',
      value: `Error: ${fileName} cannot be processed`,
    });
  }
  return response;
}

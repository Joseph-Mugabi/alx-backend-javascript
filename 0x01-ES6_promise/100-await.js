import { uploadPhoto, createUser } from './utils';

const asyncUploadUser = async () => {
  try {
    const photo = await uploadPhoto();
    const user = await createUser();

    return { photo, user };
  } catch (err) {
    return { photo: null, user: null };
  }
};
export default asyncUploadUser;

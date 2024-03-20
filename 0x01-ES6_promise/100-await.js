import { uploadPhoto, createUser } from './utils';

export default async function asyncUploadUser() {
  let res = {};

  try {
    const photo = await uploadPhoto();
    const user = await createUser();
    result = { photo, user };
  } catch (err) {
    result = { photo: null, user: null };
  }
  return result;
}

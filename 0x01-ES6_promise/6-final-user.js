import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default async function handleProfileSignup(firstName, lastName, fileName) {
  const [userResult, photoResult] = await Promise.allSettled([
    signUpUser(firstName, lastName),
    uploadPhoto(fileName),
  ]);

  return [
    { status: userResult.status, value: userResult.status === 'fulfilled' ? userResult.value : String(userResult.reason) },
    { status: photoResult.status, value: photoResult.status === 'fulfilled' ? photoResult.value : String(photoResult.reason) },
  ];
}

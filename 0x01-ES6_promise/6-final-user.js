import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default function handleProfileSignup(firstName, lastName, fileName) {
  return Promise.all([signUpUser(firstName, lastName), uploadPhoto(fileName)])
    .then(([userResult, photoResult]) => [
      {
        status: userResult instanceof Error ? 'rejected' : 'fufilled',
        value: userResult instanceof Error ? userResult.message : userResult,
      },
      {
        status: photoResult instanceof Error ? 'rejected' : 'fufilled',
        value: photoResult instanceof Error ? photoResult.message : photoResult,
      },
    ]);
}

function getResponseFromAPI() {
  return new Promise((resolve, reject) => {
    const x = 5;
    if (x === 5) {
      resolve('success');
    } else {
      reject(new Error('error'));
    }
  });
}

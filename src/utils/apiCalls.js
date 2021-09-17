export const fetchPhotos = async () => {
  const key = process.env.REACT_APP_API_KEY;
  const count = 10;
  let response = await fetch(
    `https://api.nasa.gov/planetary/apod?api_key=${key}&count=${count}`
  );
  return await checkForErrors(response);
};

const checkForErrors = response => {
  if (response.status === 200) {
    return response.json();
  } else if (response.status === 404) {
    throw new Error('404: having trouble locating photos now');
  } else if (response.status === 500) {
    throw new Error('Oops our servers are down, please try again later');
  } else {
    throw new Error('Something went wrong');
  }
};

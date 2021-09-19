export const fetchPhotos = async () => {
  const key = process.env.REACT_APP_API_KEY;

  const count = 15;
  let uri = `https://api.nasa.gov/planetary/apod?api_key=${key}&count=${count}`;
  let response = await fetch(uri);
  let data = await checkForErrors(response);
  return await cleanData(data);
};

const checkForErrors = response => {
  if (response.status === 200) {
    return response.json();
  } else if (response.status === 404) {
    throw new Error("Oops, we're having trouble loading photos now");
  } else if (response.status === 500) {
    throw new Error('Sorry, our servers are down, please try again later');
  } else {
    throw new Error('Launch failed, try again later');
  }
};

const cleanData = data => {
  return data.filter(image => image['media_type'] === 'image');
};

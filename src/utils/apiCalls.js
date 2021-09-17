export const fetchPhotos = async () => {
  const key = 'gigSfTdEOxoNlNM4hAcPkPVktuLntJtasBsRGslV';
  const count = 10;
  let response = await fetch(
    `https://api.nasa.gov/planetary/apod?api_key=${key}&count=${count}`
  );
  let data = await checkForErrors(response);
};

const checkForErrors = response => {
  console.log(response);
};

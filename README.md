# Spacestagram

## Deployed [site](https://spacestagram2021.netlify.app/)

[![Netlify Status](https://api.netlify.com/api/v1/badges/e05425d5-034a-46e7-8362-9e6a9703c714/deploy-status)](https://app.netlify.com/sites/spacestagram2021/deploys)

## Overview

Spacestagram is a webpage that pulls images from NASA's Astronomy Picture of the Day API and displays them ~a la instagram for users to like and unlike their favorite photos.

![desktop view](https://user-images.githubusercontent.com/79113236/133945785-ceb7f906-995c-4792-a7b5-47c73e21f110.gif)

## Development

When I was first given this challenge, I began by crafting user stories, issues, and a [project board](https://github.com/clairefields15/spacestagram/projects/1) for each requirement. Design inspiration came (naturally) from instagram for the UI. The one column layout, even on desktop, allows for maximum image size and a "...more" button after 120 characters of each caption ensures that the focus is primarily on the photos. The like and unlike actions are both animated. The application is responsive across all screen sizes and uses semantic HTML and best-practices for accessibility throughout, including aria-accessible labels for the heart icon buttons.

![mobile view](https://user-images.githubusercontent.com/79113236/133945797-850548ba-6482-465c-a43f-1c8c44ed90e4.gif)

Careful consideration was given to error handling and loading states in the UI so that our space travellers are (hopefully) never frustrated by their experience on spacestagram.

Lastly, the application is deployed on Netlify and the free API key is stored as an environment variable on Netlify for extra security.

## Technologies Used

-React
-React Router
-Deployed on Netlify

## Contributors

Claire Fields [Github](https://github.com/clairefields15/) and [LinkedIn](https://www.linkedin.com/in/clairefields15/)

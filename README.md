# Cypress-WeightTracker

This is the automated test environment I've setup for WeightTracker.

To install & run cypress, please follow these steps:

- Create a new folder (either with file explorer or ```mkdir <folder-name>```

- CD (Change directory) into the newly created folder and run ```git init```, then ```git remote add origin https://github.com/lexwuestenenk/Cypress-WeightTracker.git```
- Pull the repository using ```git pull origin master```
- After the repository has been cloned, run ```npm install cypress --save-dev``` to install cypress
- If needed, change the path in cypress.config.js from ```WeightTracker-Cypress``` to the name of your directory 
- Then, run ```npm run start-cypress:test``` or ```yarn run start-cypress:test```

- You will now have a working cypress installation!
- To run tests, the user will also need to have the WeightTracker project installed & running. To see more information, visit this [repo](https://github.com/lexwuestenenk/WeightTracker)

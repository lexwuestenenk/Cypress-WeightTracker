# Cypress-WeightTracker
Testing environment for WeightTracker

This is the automated test environment I've setup for WeightTracker.

To install & run cypress, please follow these steps:

Create a new folder (either with file explorer or ```mkdir <folder-name>```

CD into the newly created folder and run ```git init```, then ```git remote add origin <git-url>```

After the repository has been cloned, run the following command to install cypress:
```
npm install cypress --save-dev
```
! - The config.js file is not in this git, but is needed for testing purposes. The file is not commited as it contains users & passwords - !
Then, run ```npm run start-cypress:test``` or ```yarn run start-cypress:test``` (Only works with config.js file available)

You will now have a working cypress installation!

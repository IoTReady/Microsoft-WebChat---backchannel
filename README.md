# Microsoft-WebChat---backchannel

![alt text](https://raw.githubusercontent.com/vipinsaini1989/Microsoft-WebChat---backchannel/master/screenshot.gif "Screen shot of frontend and backend interaction")

## WebChat (index.html)
* This sample code is to show how to connect webchat to the backend code (node js) using backchannel;
* Two CDN are used for bot Framwork
    ```one in the header as link tag for styling the bot.```
    ```another in body as script tag for functioning.```

* In order to start the chat with bot we need only secret and that has to placed inside the botConnection object.
* finding secret is provide on the microsoft website
https://docs.microsoft.com/en-us/azure/bot-service/rest-api/bot-framework-rest-direct-line-3-0-authentication

* For testing purpose running bot using secret is great but for production purpose we cannot do this, we have to generate token with this secret;
* Process of generating token is show in the above website and here also we are using one of those ways.
* In this code, a POST request is sent using fetch. and response is captured.
* But this POST request is  Asynchronous in nature.

## Backend(node JS)
* To check the sample code either we should have our own backend code(this sample is using Node JS) or we can clone the repository.
* Run npm install command in the cloned folder.
* If we are having our backend code then we should simply copied the code of app.js file. And start our server.
* Those who cloned the repository, add our appId and appPassword and in the terminal of same folder, write 'node app.js'.
* If we want to test this code then use ngrok, which is provided in the sample.
* ngrok will tunnel all the endpoint to our code, for details see https://ngrok.com/

* We have to paste the generated url : Go to https://portal.azure.com
    ```Dashboard > Web app bot > settings > messaging endpoint```
*            (eg:  https://4e2da73b.ngrok.io/api/messages)

* Now, we can play with the webchat bot.


###    botConnection.activity$
* This having all the details of incoming and outgoing message such address,conversation id etc.
* This helps in creating conversation between frontend(webchat window) and backend(node JS);
* For sending somthing from webchat to backend code, we always have to trigger an event so our *type = 'event'* always.

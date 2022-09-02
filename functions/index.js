const functions = require("firebase-functions");

const admin = require('firebase-admin');
admin.initializeApp();

const db = admin.firestore();

var SibApiV3Sdk = require('sib-api-v3-sdk');
const { resolveSoa } = require("dns");

const API_KEY = "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";

const cors = require('cors')({origin: "https://plusaspect.com"});

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//

const validateEmail = (email) => {
  return String(email)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
};

exports.sendData = functions.https.onRequest((req, res) => {
  cors(req, res, () => {
    // res.set("Access-Control-Allow-Origin", "http://localhost:3000");
    res.set("Access-Control-Allow-Origin", "https://plusaspect.com");
    if(validateEmail(req.body.email) !== null && req.body.phone !== "" && req.body.phone.length > 3 && req.body.country !== "0"){
      functions.logger.info("Writing data to database", {structuredData: true});
      console.log(req.body);
      let data = req.body;
      let email = data.email;
      db.collection("emails").doc(email).set(data);
      res.status(200).send("valid");
      let defaultClient = SibApiV3Sdk.ApiClient.instance;
    
      let apiKey = defaultClient.authentications['api-key'];
      apiKey.apiKey = API_KEY;
      
      let apiInstance = new SibApiV3Sdk.TransactionalEmailsApi();
      
      let sendSmtpEmail = new SibApiV3Sdk.SendSmtpEmail();
      
      sendSmtpEmail.subject = "My {{params.subject}}";
      sendSmtpEmail.templateId = 5;
      sendSmtpEmail.sender = {"name":"Plus Aspect","email":"contact@plusaspect.com"};
      sendSmtpEmail.to = [{"email":email}];
      sendSmtpEmail.replyTo = {"email":"contact@plusaspect.com","name":"Plus Aspect"};
      sendSmtpEmail.headers = {"Some-Custom-Name":"unique-id-1234"};
      sendSmtpEmail.params = {"parameter":"My param value","subject":"New Subject"};
    
      apiInstance.sendTransacEmail(sendSmtpEmail).then(function(data) {
        console.log('API called successfully. Returned data: ' + JSON.stringify(data));
      }, function(error) {
        console.error(error);
      });
    }else{
      res.status(400).send("FAIL");
    }
  });
});
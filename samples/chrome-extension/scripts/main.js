// Setting log level to 3 (= Info) to show detailed feature flag evaluation
var logger = configcat.createConsoleLogger(3);
  
var configCatClient = configcat.createClientWithAutoPoll('PKDVCLf-Hq-h-kCzMp-L7Q/HhOWfwVtZ0mb30i9wi17GQ', {
  pollIntervalSeconds: 2,
  logger: logger
});
// You can instantiate the client with different polling modes. See the Docs: https://configcat.com/docs/sdk-reference/js/#polling-modes

configCatClient.getValue("isAwesomeFeatureEnabled", false, function (value) {
  console.log("isAwesomeFeatureEnabled: " + value);
});

var userObject = {
  identifier: "#SOME-USER-ID#",
  email: "configcat@example.com"
};
// Read more about the User Object: https://configcat.com/docs/sdk-reference/js/#user-object
configCatClient.getValue("isPOCFeatureEnabled", false, function (value) {
    console.log("isPOCFeatureEnabled: " + value);
  },
  userObject
);
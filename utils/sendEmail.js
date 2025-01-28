const brevo = require('@getbrevo/brevo');

const sendEmail = async (options) => {
  let apiInstance = new brevo.TransactionalEmailsApi();

  let apiKey = apiInstance.authentications['apiKey'];
  apiKey.apiKey = process.env.BREVO_API_KEY;
  
  let sendSmtpEmail = new brevo.SendSmtpEmail();
  sendSmtpEmail.subject = "My " + options.subject;
  sendSmtpEmail.htmlContent = "<html><body><h1>" + options.text + "</h1></body></html>";
  sendSmtpEmail.sender = { "name": "Instagram clone", "email": "EMAIL_ID" };
  sendSmtpEmail.to = [
    { "email": options.to, "name": options.subject }
  ];
  sendSmtpEmail.params = { "subject": options.subject };


  apiInstance.sendTransacEmail(sendSmtpEmail).then(function (data) {
    console.log('API called successfully. Returned data: ' + JSON.stringify(data));
  }, function (error) {
    console.error(error);
  });
};
module.exports = sendEmail;
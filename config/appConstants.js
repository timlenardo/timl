
let mailgun_api_key = process.env.MAILGUN_API_KEY;
let domain = 'm.plugco.in';
let mailgun = require('mailgun-js')({apiKey: mailgun_api_key, domain: domain});

module.exports.sendEmail = (toEmail, subject, message, mailgunAttachment) => {
    let emailData = {
        from: "Tim L <tim@jetfuel.it>",
        to: toEmail,
        subject: subject,
        text: message,
        attachment: mailgunAttachment
    };

    mailgun.messages().send(emailData, function (error, body) {
        if(!error) {
            console.log("SENT EMAIL: " + body);
        } else {
            console.log("ERROR SENDING EMAIL: " + error);
        }
    });
}

Object.freeze(module.exports);
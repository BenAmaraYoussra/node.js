
const nodemailer = require('nodemailer');

let transporter = nodemailer.createTransport({
    service: 'gmail', 
    auth: {
        user: 'bayouss@gmail.com', 
        pass: 'UniquementGomycode2024@' 
    }
});


let mailOptions = {
    from: 'bayouss@gmail.com', 
    to: 'justbeyourself@gmail.com', 
    subject: 'sois toi meme et accepte toi tel que tu es ce qui compte et toi', 
    text: 'Ceci est un test d\'envoi d\'e-mail avec nodemailer.' 
};

transporter.sendMail(mailOptions, function(error, info){
    if (error) {
        console.error("Erreur lors de l'envoi de l'e-mail :", error);
    } else {
        console.log("E-mail envoyé avec succès :", info.response);
    }
});

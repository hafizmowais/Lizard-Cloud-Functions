import nodemailer from 'nodemailer';

export const sendEmail = (data) => {
    const {subject, html, to, from, smtpConfig  } = data
    const mailOptions = {
        subject: subject,
        html: html,
        from: from,
        to: to
    };
    const mailTransport = nodemailer.createTransport(smtpConfig);
    return mailTransport.sendMail(mailOptions)
    .then( () => {
        console.log('New invite email sent to ', to);
        return true;
    })
    .catch( (err) =>{
        console.log("Send Email err",err)
        return err;
    })
}
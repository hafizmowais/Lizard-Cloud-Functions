# Lizard Cloud Functions
[![Lizard Global](https://drive.google.com/uc?id=1VBhQROdv6FdNQvAdUh41p4aHtl4ih7U8)](https://lizard.global/about-us)

Server side helper functions

## Example?

### Send email using sendgrid

```
import {sendEmail} from 'lizard-cloud-functions'  //import sendEmail function

---
**NOTE**

Please define smtp config in one file and use it as import. So for any reason if needed to be changed then it has to be changed at one place and good to go
---

const data = {
  smtpConfig: {
    host: 'smtp.sendgrid.net',
    port: 587,
    secure: false, // true for 465, false for other ports
    auth: {
      user: 'apikey',
      pass: //your sendgrid API key
    }
  },
  subject: 'Test email',
  html: '<h1>HTML for Text email</h1>',
  to: //email address whom you want to send email
  from: //from which email address you want to send email
}
sendEmail(data)
.then((data) => {
  res.status(200).send(data);
})
.catch( (err) =>{
  res.status(400).send(err);
})

```
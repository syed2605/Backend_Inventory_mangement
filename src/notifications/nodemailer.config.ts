import nodemailer from 'nodemailer'; 

 

const mailtrapConfig = { 
    host: "sandbox.smtp.mailtrap.io",
    port: 2525,
    auth: {
      user: "282f09213b1725",
      pass: "463c6725392129"
    }
}; 

 

const transporter = nodemailer.createTransport(mailtrapConfig); 

 

export default transporter; 
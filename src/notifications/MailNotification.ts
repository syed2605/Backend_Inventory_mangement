import { SentMessageInfo } from 'nodemailer';
import { EmailOptions } from '../interfaces/common.interfaces';
import transporter from '../notifications/nodemailer.config';

async function sendEmail(options: EmailOptions): Promise<SentMessageInfo> { 

  try {		 

    const info = await transporter.sendMail({ 

      from: process.env.MAIL_FROM_ADDRESS, 

      to: options.to, 

      subject: options.subject, 

      html: options.html, 

      text: options.text, 

    }); 

    console.log('Message sent:', info.messageId); 

    return info; 

  } catch (error) { 

    console.error('Error sending email:', error); 

    throw error;  

  } 

} 

 

export { sendEmail };

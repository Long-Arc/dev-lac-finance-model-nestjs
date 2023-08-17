import { Injectable } from '@nestjs/common';
import * as sgMail from '@sendgrid/mail';
import { config } from 'process';

require('dotenv').config();
const apikey= process.env.API_KEY;

@Injectable()
export class EmailService {
  constructor() {
    sgMail.setApiKey(apikey)
      //'');
  }

  async sendEmail(to: string, subject: string, text: string, html: string): Promise<void> {
    const message = {
      to,
      from: 'financedev@longarc.com',
      subject,
      text,
      html,
    };

    try {
      await sgMail.send(message);
    } catch (error) {
      console.error('Error sending email:', error);
      throw new Error('Email sending failed');
    }
  }
}

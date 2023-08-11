import { Injectable } from '@nestjs/common';
import * as sgMail from '@sendgrid/mail';

@Injectable()
export class EmailService {
  constructor() {
    sgMail.setApiKey('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');
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

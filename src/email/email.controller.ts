import { Controller, Post, Body } from '@nestjs/common';
import { EmailService } from './email.service';

@Controller('email')
export class EmailController {
  constructor(private readonly emailService: EmailService) {}

  @Post('send')
  async sendEmail(@Body() data: any): Promise<string> {
    const { to, subject, text, html } = data;

    await this.emailService.sendEmail(to, subject, text, html);
    
    return 'Email sent successfully';
  }
}

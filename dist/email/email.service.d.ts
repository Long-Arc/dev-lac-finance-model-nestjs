export declare class EmailService {
    constructor();
    sendEmail(to: string, subject: string, text: string, html: string): Promise<void>;
}

import { NextResponse } from 'next/server';
import { Resend } from 'resend';

// Initialize Resend with API key from environment variables
// Ensure you add RESEND_API_KEY to your .env.local file
const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
    try {
        const body = await request.json();
        const { email, message } = body;

        if (!email || !message) {
            return NextResponse.json(
                { error: 'Email and message are required' },
                { status: 400 }
            );
        }

        // Send the email
        // IMPORTANT: 'from' must be a verified domain or the default Resend testing email
        // 'to' should be your admin email
        const data = await resend.emails.send({
            from: 'onboarding@resend.dev', // Use this for testing if you don't have a domain yet
            to: process.env.ADMIN_EMAIL || 'delivered@resend.dev', // Default/fallback for safety
            subject: `New Contact Form Submission from ${email}`,
            text: `You have received a new message from the contact form:\n\nFrom: ${email}\n\nMessage:\n${message}`,
            // html: `<p>You have received a new message from the contact form:</p><p><strong>From:</strong> ${email}</p><p><strong>Message:</strong><br/>${message.replace(/\n/g, '<br/>')}</p>`,
        });

        return NextResponse.json(data);
    } catch (error) {
        console.error('Error sending email:', error);
        return NextResponse.json(
            { error: 'Failed to send email' },
            { status: 500 }
        );
    }
}

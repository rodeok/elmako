try {
    const { Resend } = require('resend');
    console.log('Resend module loaded successfully');
    console.log('Resend class:', Resend);
} catch (error) {
    console.error('Error loading resend:', error);
}

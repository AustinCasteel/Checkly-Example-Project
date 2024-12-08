const { EmailAlertChannel } = require('checkly/constructs');

const sendDefaults = {
    sendFailure: true,
    sendRecovery: true,
    sendDegraded: false,
    sslExpiry: true,
    sslExpiryThreshold: 30,
};

const emailChannel = new EmailAlertChannel('email-channel', {
    address: 'test@example.com',
    ...sendDefaults,
});

module.exports = {
    emailChannel
};
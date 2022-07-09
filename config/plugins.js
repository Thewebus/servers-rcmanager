module.exports = ({ env }) => ({
    // ...
    email: {
        config: {
            provider: 'sendgrid',
            providerOptions: {
                apiKey: env('SENDGRID_API_KEY'),
            },
            settings: {
                defaultFrom: 'support@rarecamion.com',
                defaultReplyTo: 'support@rarecamion.com',
		testAddress: 'developers.rarecamion.com',
            },
        },
    },
    // ...
});

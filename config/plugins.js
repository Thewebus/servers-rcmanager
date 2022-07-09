module.exports = ({ env }) => ({
    email: {
        config: {
            provider: 'sendgrid',
            providerOptions: {
                apiKey: "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",
            },
            settings: {
                defaultFrom: 'support@rarecamion.com',
                defaultReplyTo: 'support@rarecamion.com',
		testAddress: 'developers.rarecamion.com',
            },
        },
    },
});

module.exports = ({ env }) => ({
    email: {
        config: {
            provider: 'sendgrid',
            providerOptions: {
                apiKey: "SG.zXfrtd__TIuLtb2qq_aHeg.X2QXNRCqO7440g_EmqlfSuDj0cAy",
            },
            settings: {
                defaultFrom: 'support@rarecamion.com',
                defaultReplyTo: 'support@rarecamion.com',
		testAddress: 'developers.rarecamion.com',
            },
        },
    },
});

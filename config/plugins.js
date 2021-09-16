module.exports = ({ env }) => ({
  email: {
    provider: "sendgrid",
    providerOptions: {
      //   apiKey: env("SENDGRID_API_KEY"),
      apiKey:
        "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",
    },
    settings: {
      defaultFrom: "no-reply@creativebooks.pk",
      defaultReplyTo: "no-reply@creativebooks.pk",
      testAddress: "m.subhanabbas@gmail.com",
    },
  },
});

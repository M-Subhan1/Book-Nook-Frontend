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
    upload: {
      provider: "cloudinary",
      providerOptions: {
        cloud_name: env("CLOUDINARY_NAME"),
        api_key: env("CLOUDINARY_API_KEY"),
        api_secret: env("CLOUDINARY_API_SECRET"),
        // cloud_name: "creative-books",
        // api_key: "681486596272868",
        // api_secret: "eLp8AmswsNlauXsEj9Gq1LWr0Fs",
      },
    },
  },
});

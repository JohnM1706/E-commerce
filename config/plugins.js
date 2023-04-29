module.exports = ({ env }) => ({
  upload: {
    config: {
      provider: "aws-s3",
      providerOptions: {
        accessKeyId: "AKIA5IRSBWYSBQBC3MY3",
        secretAccessKey: "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",
        region: "eu-west-1",
        params: {
          Bucket: "ecommerce-stripe",
        },
      },
    },
  },
});

module.exports = ({ env }) => ({
  url: env("https://test-strapi-deploy-heroku.herokuapp.com/"),
  proxy: true,
  app: {
    keys: env.array("APP_KEYS", ["kSQAai/wyArPK9EahB8O2w==", "+f1BxVLlEAKuVdnnrHrtnw=="]),
  },
});

const config = {
  env: process.env.NODE_ENV || 'development',
  port: process.env.PORT || 3000,
  jwtSecret: process.env.JWT_SECRET || "YOUR_secret_key",
  mongoUri: process.env.MONGODB_URI ||
    process.env.MONGO_HOST ||
    'mongodb://' + (process.env.IP || 'localhost') + ':' +
    (process.env.MONGO_PORT || '27017') +
    '/mernproject',
  stripe_connect_test_client_id: 'acct_1Es6xnDgqAdfaxHU',
  stripe_test_secret_key: 'sk_test_zmpM76nZwALnOCiNzSObA6JX00ukNmRxhZ',
  stripe_test_api_key: 'pk_test_IOmG3RJ9ExXq5iKwArPuo48L00DlHwpB5B'
}

export default config

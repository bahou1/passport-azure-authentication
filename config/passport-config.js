// passport-config.js

const passport = require('passport');
const OIDCStrategy = require('passport-azure-ad').OIDCStrategy;

passport.use(new OIDCStrategy({
  identityMetadata: 'https://login.microsoftonline.com/f8cdef31-a31e-4b4a-93e4-5f571e91255a/v2.0/.well-known/openid-configuration',
  clientID: '77737ce4-500a-4b56-8782-7e67cdcca702',
  responseType: 'code id_token',
  responseMode: 'form_post',
  redirectUrl: 'http://localhost:3000/users/login/azure/callback',
  allowHttpForRedirectUrl: true,
  clientSecret: 'ee5d1396-8afe-428d-983f-39402b34a1b4',
  validateIssuer: false,
  passReqToCallback: true,
}, (req, iss, sub, profile, accessToken, refreshToken, done) => {
  // Verify and store user profile information
  return done(null, profile);
}));

passport.serializeUser((user, done) => {
  // Serialize user information
  done(null, user);
});

passport.deserializeUser((obj, done) => {
  // Deserialize user information
  done(null, obj);
});

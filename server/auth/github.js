import passport from 'passport';
var GitHubStrategy = require('passport-github2').Strategy;

export default passport.use(
  new GitHubStrategy({
    clientID: process.env.GITHUB_CLIENT_ID,
    clientSecret: process.env.GITHUB_CLIENT_SECRET,
    callbackURL: 'http://localhost:3000/auth/gh/redirect',
  },
    (accessToken, refreshToken, profile, done) => {
      User.findOrCreate({ githubId: profile.id }, function(err, user) {
        return done(err, user);
      })
    })
);

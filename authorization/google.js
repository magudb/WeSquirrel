var config = require("../config");

module.exports = function (app, router) {
  var passport = require('passport');
  var GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;
  passport.serializeUser(function (user, done) {
    done(null, user);
  });

  passport.deserializeUser(function (obj, done) {
    done(null, obj);
  });

  passport.use(new GoogleStrategy({
    clientID: "515030120058-9lbh18ch0rdg63v9mjevs92sjcn7f6vq.apps.googleusercontent.com",
    clientSecret: "2xGylbA3odmNCfBKVrokGlwV",
    callbackURL: "http://127.0.0.1:3000/auth/google/callback",
    passReqToCallback: true
  },
    function (request, accessToken, refreshToken, profile, done) {
      profile.identifier = profile.id;
      console.log(profile);
      return done(null, profile);
    }
    ));

  var session = require('express-session');
  app.use(session({
    resave: true,
    saveUninitialized: true,
    secret: config.secret
  }));

  app.use(passport.initialize());
  app.use(passport.session());

  router.get('/google',
    passport.authenticate('google', { scope: 'https://www.googleapis.com/auth/userinfo.profile' }));

  router.get('/google/callback',
    passport.authenticate('google', { failureRedirect: '/401' }),
    function (req, res) {
      // Successful authentication, redirect home.
      res.redirect('/');
    });
    return router;
}
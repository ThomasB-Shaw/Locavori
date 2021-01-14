
const express = require('express');
require('dotenv').config();

const app = express();
const bodyParser = require('body-parser');
const sessionMiddleware = require('./modules/session-middleware');

const passport = require('./strategies/user.strategy');

// Route includes
const userRouter = require('./routes/user.router');
const makerRouter = require('./routes/maker.router');
const favoritesRouter = require('./routes/favorites.router');
const adminDenyRouter = require('./routes/adminDeny.router');
const adminApproveRouter = require('./routes/adminApprove.router');
const specificFavoritesRouter = require ('./routes/specific.favorite.router');
// Body parser middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Passport Session Configuration //
app.use(sessionMiddleware);

// start up passport sessions
app.use(passport.initialize());
app.use(passport.session());

/* Routes */
app.use('/api/user', userRouter);
app.use('/api/maker', makerRouter);
app.use('/api/makerCard',makerRouter)
app.use('/api/favorites', favoritesRouter)
app.use('/api/adminDeny',adminDenyRouter)
app.use('/api/adminApprove',adminApproveRouter)
app.use('/api/specificFavorites', specificFavoritesRouter)



// Serve static files
app.use(express.static('build'));

// App Set //
const PORT = process.env.PORT || 5000;

/** Listen * */
app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`);
});

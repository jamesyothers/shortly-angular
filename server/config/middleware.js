var morgan      = require('morgan'), // used for logging incoming request
    bodyParser  = require('body-parser'),
    helpers     = require('./helpers.js'); // our custom middleware


module.exports = function (app, express) {
  // Express 4 allows us to use multiple routers with their own configurations
  var userRouter = express.Router();
  var linkRouter = express.Router();

  // attaching middleware to server, each request coming through goes through these middlewares
  app.use(morgan('dev'));
  // attach form data to request.body
  app.use(bodyParser.urlencoded({extended: true}));
  console.log("Before bodyParser.json");
  app.use(bodyParser.json());
  console.log("Parser ", bodyParser.json());
  console.log("After bodyParser.json");
  app.use(express.static(__dirname + '/../../client'));


  app.use('/api/users', userRouter); // user user router for all user request

  // authentication middleware used to decode token and made available on the request
  //app.use('/api/links', helpers.decode);
  app.use('/api/links', linkRouter); // user link router for link request
  app.use(helpers.errorLogger);
  app.use(helpers.errorHandler);

  // inject our routers into their perspective route files
  require('../users/userRoutes.js')(userRouter);
  console.log("Link Router ", linkRouter);
  require('../links/linkRoutes.js')(linkRouter);
};

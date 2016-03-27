var _ = require('lodash');

var localEnvVars = {
  TITLE:      'tictactoe2',
  SAFE_TITLE: 'tictactoe2'
};

// Merge all environmental variables into one object.
module.exports = _.extend(process.env, localEnvVars);

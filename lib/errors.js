'use strict';

var spec = {
  name: 'P2P',
  message: 'Internal Error on bitcore-p2p-mue Module {0}'
};

module.exports = require('bitcore-lib-mue').errors.extend(spec);

Bitcore P2P-MUE
=======

[![NPM](https://nodei.co/npm/bitcore-p2p-mue.png?mini=true)](https://www.npmjs.org/package/bitcore-p2p-mue)
[![Build Status](https://travis-ci.org/muecoin/bitcore-p2p-mue.svg?branch=master)](https://travis-ci.org/muecoin/bitcore-p2p-mue)
[![Coverage Status](https://coveralls.io/repos/github/muecoin/bitcore-p2p-mue/badge.svg?branch=master)](https://coveralls.io/github/muecoin/bitcore-p2p-mue?branch=master)
`bitcore-p2p-mue` adds MUE protocol support for Bitcore-MUE.

See [the main bitcore-mue repo](https://github.com/muecoin/bitcore-mue) for more information.

## Getting Started

```sh
npm install bitcore-p2p-mue
```
In order to connect to the MUE network, you'll need to know the IP address of at least one node of the network, or use [Pool](/docs/pool.md) to discover peers using a DNS seed.

```javascript
var Peer = require('bitcore-p2p-mue').Peer;

var peer = new Peer({host: '127.0.0.1'});

peer.on('ready', function() {
  // peer info
  console.log(peer.version, peer.subversion, peer.bestHeight);
});
peer.on('disconnect', function() {
  console.log('connection closed');
});
peer.connect();
```

Then, you can get information from other peers by using:

```javascript
// handle events
peer.on('inv', function(message) {
  // message.inventory[]
});
peer.on('tx', function(message) {
  // message.transaction
});
```

Take a look at the [bitcore guide](http://bitcore.io/guide/peer.html) on the usage of the `Peer` class.

## Contributing

See [CONTRIBUTING.md](https://github.com/dashpay/bitcore-dash/blob/master/CONTRIBUTING.md) on the main bitcore-dash repo for information about how to contribute.

## License

Code released under [the MIT license](https://github.com/bitpay/bitcore/blob/master/LICENSE).

Copyright 2013-2015 BitPay, Inc. Bitcore is a trademark maintained by BitPay, Inc.

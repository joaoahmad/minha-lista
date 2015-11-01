// var Backbone = require('backbone');
// var Dispatcher = require('../dispatchers/Dispatcher');
//
// var MapItem = Backbone.Model.extend({});
//
// var MapCollection = Backbone.Collection.extend({
//   model: MapItem,
//   url: '/api/markers',
//
//   // we register a callback with the Dispatcher on init.
//   initialize: function() {
//     this.dispatchToken = Dispatcher.register(this.dispatchCallback);
//       console.log(this);
//   },
//   dispatchCallback(payload){
//     console.log(this);
//     switch (payload.actionType) {
//       // remove the Model instance from the Store.
//       case 'MAP_DELETE':
//         this.remove(payload.map);
//         break;
//       case 'MAP_ADD':
//         this.add(payload.map);
//         break;
//       case 'MAP_UPDATE':
//         // do stuff...
//         this.add(payload.map, {'merge': true});
//         break;
//       // ... etc
//     }
//   }.bind(this)
// });
//
// // the Store is an instantiated Collection. aka a singleton.
// // (if we were to only ever have one item,
// //  it would be an instantiated Model instead).
// var MapStore = new MapCollection();
//
// module.exports = MapStore;

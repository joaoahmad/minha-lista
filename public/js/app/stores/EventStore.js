var Backbone = require('backbone');
var Dispatcher = require('../dispatchers/Dispatcher');

var EventItem = Backbone.Model.extend({
    idAttribute: '_id',
    defaults: {
        name: null,
        location: null,
    }
});

var EventCollection = Backbone.Collection.extend({
    model: EventItem,
    url: '/api/events',

    // we register a callback with the Dispatcher on init.
    initialize: function() {
        this.dispatchToken = Dispatcher.register(this.dispatchCallback.bind(this));
        this.fetch();
    },
    dispatchCallback: function(payload){
        switch (payload.actionType) {
            // do stuff...
            case 'EVENT_CREATE':
            this.create(payload.event, { wait: true });
            break;
            case 'EVENT_UPDATE':
            this.add(payload.event, {'merge': true});
            break;
            // remove the Model instance from the Store.
            case 'EVENT_DELETE':
            payload.event.destroy();
            break;
            // ... etc
        }
    }
});

// the Store is an instantiated Collection. aka a singleton.
// (if we were to only ever have one item,
//  it would be an instantiated Model instead).
var EventStore = new EventCollection();

module.exports = EventStore;

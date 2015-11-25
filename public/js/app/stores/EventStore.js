var Backbone = require('backbone');
var Dispatcher = require('../dispatchers/Dispatcher');

var EventItem = Backbone.Model.extend({
    idAttribute: '_id',
    urlRoot: '/api/event',
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
    },
    pushModel: function(options){
        let self = this;
        let model = new this.model(options);
        model.fetch({ success(){
            self.push(model, {'merge': true});
            console.log(self.toJSON());
        }});
    },
    dispatchCallback: function(payload){
        switch (payload.actionType) {
            // do stuff...
            case 'GET_EVENTS':
            this.fetch();
            break;
            case 'GET_EVENT':
            this.pushModel({_id: payload.eventId});
            break;
            case 'CREATE_EVENT':
            this.create(payload.event, { wait: true });
            break;
            case 'UPDATE_EVENT':
            this.add(payload.event, {'merge': true});
            break;
            // remove the Model instance from the Store.
            case 'DELETE_EVENT':
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

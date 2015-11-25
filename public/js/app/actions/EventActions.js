var Dispatcher = require('../dispatchers/Dispatcher');

var EventActions = {
    get(eventId) {
        Dispatcher.dispatch({
            actionType: 'GET_EVENT',
            eventId: eventId
        });
    },
    getAll() {
        Dispatcher.dispatch({
            actionType: 'GET_EVENTS'
        });
    },
    create(eventItem) {
        console.log(eventItem);
        Dispatcher.dispatch({
            actionType: 'CREATE_EVENT',
            event: eventItem
        });
    },
    delete(eventItem) {
        Dispatcher.dispatch({
            actionType: 'DELETE_EVENT',
            event: eventItem
        });
    },
}

module.exports = EventActions

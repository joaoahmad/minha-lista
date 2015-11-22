var Dispatcher = require('../dispatchers/Dispatcher');

var EventActions = {
  create(eventItem) {
    console.log(eventItem);
    Dispatcher.dispatch({
      actionType: 'EVENT_CREATE',
      event: eventItem
    });
  },
  delete(eventItem) {
    Dispatcher.dispatch({
      actionType: 'EVENT_DELETE',
      event: eventItem
    });
  },
}

module.exports = EventActions

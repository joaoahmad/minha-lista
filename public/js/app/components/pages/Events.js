import React from 'react';
import ReactMixin from 'react-mixin';
import { Route, RouteHandler, Link } from 'react-router';
import FluxBoneMixin from '../helpers/FluxBoneMixin';
import EventActions from '../../actions/EventActions';
import EventStore from '../../stores/EventStore';
import PageWithNavbar from '../PageWithNavbar';
import Container from '../Container';
import Section from '../Section';
import Input from '../Input';
import Textarea from '../Input';

class EventsListItem extends React.Component {
    render() {
        var event = this.props.model.toJSON();
        return (
            <tr key={this.props.key}>
                <td>{event._id}</td>
                <td>{event.name}</td>
                <td>{event.location}</td>
                <td>
                    <Link to={`/event/${event._id}`} >Edit</Link>
                  <a href="#" onClick={this.handleDelete.bind(this)}>Delete</a>
                </td>
            </tr>
        )
    }
    handleDelete(e){
        EventActions.delete(this.props.model);
    }
}


class EventsList extends React.Component {
  constructor() {
    super();
  }

  componentDidMount(){
      EventActions.getAll();
  }

  render() {
      var items = this.props.eventStore.map(function(eventItem, i){
          return (
              <EventsListItem model={eventItem} key={i}  />
          )
      });
    return (
        <table className="u-full-width">
            <thead>
                <tr>
                    <th>id</th>
                    <th>Name</th>
                    <th>Date</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                {items}
            </tbody>
        </table>
    );
  }
}

class Events extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <PageWithNavbar>
        <Container>
          <Section>
            <div className="section-title">
              <span className="title">Todos os eventos</span>
              <Link to="/event/new" className="u-pull-right" >Novo</Link>
            </div>
            <EventsList eventStore={EventStore} />
          </Section>

        </Container>
      </PageWithNavbar>
    );
  }
}

ReactMixin(EventsList.prototype, FluxBoneMixin('eventStore'));

module.exports = Events;

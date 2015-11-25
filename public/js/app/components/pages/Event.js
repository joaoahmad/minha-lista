import React from 'react';
import ReactMixin from 'react-mixin';
import { Route, RouteHandler, Link, History, Lifecycle } from 'react-router';
import FluxBoneMixin from '../helpers/FluxBoneMixin';
import EventActions from '../../actions/EventActions';
import EventStore from '../../stores/EventStore';
import Form from '../Form';
import PageWithNavbar from '../PageWithNavbar';
import Container from '../Container';
import Section from '../Section';
import Input from '../Input';
import Textarea from '../Input';

class EventForm extends React.Component {
    constructor() {
        super();
        this.state = { event: {} };
    }

    componentDidMount() {
        this.props.model.on('change', function(){
            this.forceUpdate();
        }.bind(this), this);
    }

    render() {
        //var event = this.props.model.toJSON();
        return(
            <form role="form">
                <fieldset>
                    <Input name="name" type="text" label="Nome do evento" value={this.state.event.name} onChange={this.handleChange} errorMsg="Nome incorreto" />
                    <Input name="location" type="text" label="Local" value={this.state.event.email} onChange={this.handleChange} errorMsg="Email incorreto" />
                </fieldset>

            </form>
        )
    }
    handleSave(){
        //EventActions.create(this.state.form);
        //this.props.history.pushState(null, '/')
    }
}

class Event extends React.Component {
    constructor() {
        super();
        this.handleChange = this.handleChange.bind(this);
        this.state = { event : {} };
        this.model = new EventStore.model();
    }

    componentDidMount() {
        EventActions.get(this.props.params.id);
    }

    getState() {
        var id = this.props.params.id;
        // console.log(id);
        // console.log(EventStore);
        // return { event: EventStore.get(id) };
        //EventActions.get(id);
    }

    _onChange() {
        this.setState(this.getState());
    }

    render() {
        console.log(EventStore);
        return (
            <PageWithNavbar>
                <Container>
                    <Section>
                        <div className="section-title">
                            <span className="title">Editar evento</span>
                            <Link to="/events" className="u-pull-right" >Voltar</Link>
                        </div>
                        <EventForm model={this.model} />
                    </Section>
                </Container>
            </PageWithNavbar>
        );
    }

    handleChange(event){
        var state = this.state;
        state.event[event.target.name] = event.target.value;
        this.setState(state);
    }

    handleSave(){
        EventActions.create(this.state.event);
        this.props.history.pushState(null, '/')
    }
}


//ReactMixin(EventForm.prototype, FluxBoneMixin('model'));

module.exports = Event;

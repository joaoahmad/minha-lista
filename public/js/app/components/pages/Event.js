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

class Event extends React.Component {
    constructor() {
        super();
        this.handleChange = this.handleChange.bind(this);
        this.state = { event : {} };
        this.eventStore = EventStore;
    }

    componentDidMount() {
        EventActions.get(this.props.params.id);
        var model = this.eventStore.get(this.props.params.id);
        if(typeof model !== 'undefined' ){
            console.log('tem');
            this.setState({ event: model.toJSON() });
        }else{
            this.eventStore.on("add change", function(){
                model = this.eventStore.get(this.props.params.id);
                this.setState({ event: model.toJSON() });
                this.forceUpdate();
            }.bind(this), this);
        }
    }

    componentWillUnmount() {
        this.eventStore.off(null, null, this);
    }

    render() {
        console.log(this.state.event);
        return (
            <PageWithNavbar>
                <Container>
                    <Section>
                        <div className="section-title">
                            <span className="title">Editar evento</span>
                            <Link to="/events" className="u-pull-right" >Voltar</Link>
                        </div>
                        <form role="form">
                            <fieldset>
                                <Input name="name" type="text" label="Nome do evento" value={this.state.event.name} onChange={this.handleChange} errorMsg="Nome incorreto" />
                                <Input name="location" type="text" label="Local" value={this.state.event.location} onChange={this.handleChange} errorMsg="Email incorreto" />
                            </fieldset>
                        </form>
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

module.exports = Event;

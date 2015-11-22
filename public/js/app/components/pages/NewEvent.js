import React from 'react';
import ReactMixin from 'react-mixin';
import { Route, RouteHandler, Link, History, Lifecycle } from 'react-router';
import EventActions from '../../actions/EventActions';
import Form from '../Form';
import PageWithNavbar from '../PageWithNavbar';
import Container from '../Container';
import Section from '../Section';
import Input from '../Input';
import Textarea from '../Input';

class NewEvent extends React.Component {
    constructor() {
        super();
        this.handleChange = this.handleChange.bind(this);
        this.state = { form: {} };
    }

    render() {
        return (
            <PageWithNavbar>
                <Container>
                    <Section>
                        <div className="section-title">
                            <span className="title">Novo evento</span>
                            <Link to="/events" className="u-pull-right" >Voltar</Link>
                        </div>
                        <form role="form">
                            <fieldset>
                                <Input name="name" type="text" label="Nome do evento" value={this.state.form.name} onChange={this.handleChange} errorMsg="Nome incorreto" />
                                <Input name="location" type="text" label="Local" value={this.state.form.email} onChange={this.handleChange} errorMsg="Email incorreto" />
                            </fieldset>
                            <button type="button" onClick={this.handleSave.bind(this)}>Save</button>
                        </form>
                    </Section>
                </Container>
            </PageWithNavbar>
        );
    }

    handleChange(event){
        var state = this.state;
        state.form[event.target.name] = event.target.value;
        this.setState(state);
    }

    handleSave(){
        EventActions.create(this.state.form);
        this.props.history.pushState(null, '/')
    }
}
module.exports = NewEvent;

import React from 'react';
import { Route, RouteHandler, Link } from 'react-router';
import PageWithNavbar from '../PageWithNavbar';
import Container from '../Container';
import Section from '../Section';
import Input from '../Input';
import Textarea from '../Input';
// import Party from '../Party';
// import PartyStore from '../../stores/PartyStore';

class Home extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <PageWithNavbar>
        <Container>
          <Section>
            <div className="section-title">
              <span className="title">Typography</span>
            </div>
            <h1>H1 Heading</h1>
            <h2>H2 Heading</h2>
            <h3>H3 Heading</h3>
            <h4>H4 Heading</h4>
            <h5>H5 Heading</h5>
          </Section>

          <Section>
            <div className="section-title">
              <span className="title">Buttons</span>
            </div>
            <button className="button" style={{marginRight:10}}>Button default</button>
            <button className="button button-blue" style={{marginRight:10}}>Button blue</button>
            <button className="button button-green" style={{marginRight:10}}>Button green</button>
          </Section>

          <Section>
            <div className="section-title">
              <span className="title">Inputs</span>
            </div>
            <Input name="name" type="text" label="Nome" errorMsg="Nome incorreto" />
            <Input name="email" type="email" label="Email" errorMsg="Email incorreto" />
            <Input name="password" type="password" label="Senha" errorMsg="Senha incorreta" />
            <Input name="message" type="textarea" label="Mensagem" errorMsg="..." />
          </Section>
          
          <Section>
            <div className="section-title">
              <span className="title">Typography</span>
            </div>
            <h1>H1 Heading</h1>
            <h2>H2 Heading</h2>
            <h3>H3 Heading</h3>
            <h4>H4 Heading</h4>
            <h5>H5 Heading</h5>
          </Section>

          <Section>
            <div className="section-title">
              <span className="title">Buttons</span>
            </div>
            <button className="button" style={{marginRight:10}}>Button default</button>
            <button className="button button-blue" style={{marginRight:10}}>Button blue</button>
            <button className="button button-green" style={{marginRight:10}}>Button green</button>
          </Section>

          <Section>
            <div className="section-title">
              <span className="title">Inputs</span>
            </div>
            <Input name="name" type="text" label="Nome" errorMsg="Nome incorreto" />
            <Input name="email" type="email" label="Email" errorMsg="Email incorreto" />
            <Input name="password" type="password" label="Senha" errorMsg="Senha incorreta" />
            <Input name="message" type="textarea" label="Mensagem" errorMsg="..." />
          </Section>

        </Container>
      </PageWithNavbar>
    );
  }
}
module.exports = Home;

import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import {connect} from 'react-redux';
import { Card, Container, Segment, Input, Form, Button, Checkbox, Header, Divider, Radio } from 'semantic-ui-react'


class MainWithComparer extends Component {

  render() {
    return (
      <Container>
        <Header as='h1'>Existing Customer Review</Header>
        <Divider />
        <Card.Group itemsPerRow='2'>
          <Card>
            <Card.Content>
              <Card.Header>
                New Customer Information
              </Card.Header>
            </Card.Content>
            <Card.Content>
              <Form equal>
                <Form.Field>
                  <label>First Name</label>
                  <input placeholder='First Name' />
                </Form.Field>
                <Form.Field>
                  <label>Last Name</label>
                  <input placeholder='Last Name' />
                </Form.Field>
              </Form>
            </Card.Content>
          </Card>
          <Card>
            <Card.Content>
              <Card.Header>
                Existing Customer Information
              </Card.Header>
            </Card.Content>
            <Card.Content>
              <Form equal>
                <Form.Field>
                  <label>First Name</label>
                  <input placeholder='First Name' />
                </Form.Field>
                <Form.Field>
                  <label>Last Name</label>
                  <input placeholder='Last Name' />
                </Form.Field>
              </Form>
            </Card.Content>
          </Card>
        </Card.Group>
      </Container>
    )
  }
}

export default MainWithComparer;
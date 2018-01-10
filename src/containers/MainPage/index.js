import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import {connect} from 'react-redux';
import { Card, Segment, Input, Form, Button, Checkbox, Header, Divider, Radio } from 'semantic-ui-react'


let cardStyle = {
  height: '300px'
};

let pageStyle = {
  background: '#eee'
};


class MainPage extends Component {

  handleSearchClick = (value) => console.log('searched');

  render() {
    return (

      <div className="ui grid container" style={pageStyle}>
        <div className="computer only row">
          <div className="column">
            <div>
              <Header as='h2' attached='top'>
                Classification
              </Header>
              <Segment fluid attached>
                <Form>
                  <Form.Group widths='equal'>
                    <Form.Checkbox label='Class A' />
                    <Form.Checkbox label='Class B' />
                    <Form.Checkbox label='Class C' />
                    <Form.Checkbox label='Class M' />
                  </Form.Group>
                </Form>
              </Segment>
            </div>
            <Divider />
            <div>
              <Header as='h2' attached='top'>
                Basic Info
              </Header>
              <Segment fluid attached>
                <Form>
                  <Form.Group inline width={16}>
                    <Form.Field equal>
                      <Form.Input label='First name' placeholder='First name' />
                    </Form.Field>
                  </Form.Group>
                  <Form.Group inline>
                    <Form.Input label='Last name' placeholder='Last name' />
                  </Form.Group>
                  <Form.Group inline>
                    <Form.Field>
                      <label>Date of Birth</label>
                      <Input placeholder='Month' />
                    </Form.Field>
                    <Form.Field>
                      <Input placeholder='Day' />
                    </Form.Field>
                    <Form.Field>
                      <Input placeholder='Year' />
                    </Form.Field>
                  </Form.Group>
                  <Form.Group inline>
                    <Form.Field>
                      <label>Hair Color</label>
                      <Input placeholder='Hair Color' />
                    </Form.Field>
                    <Form.Field>
                      <label>Eye Color</label>
                      <Input placeholder='Eye Color' />
                    </Form.Field>
                  </Form.Group>
                  <Form.Group inline>
                    <Form.Field>
                      <label>Height</label>
                      <Input placeholder='feet' />
                    </Form.Field>
                    <Form.Field>
                      <Input placeholder='inches' />
                    </Form.Field>
                  </Form.Group>
                  <Form.Group inline>
                    <Form.Field>
                      <label>Weight</label>
                      <Input placeholder='weight' />
                    </Form.Field>
                  </Form.Group>
                  <Form.Group inline>
                    <Form.Field>
                      <label>Social Security Number</label>
                      <Input placeholder='(###)' />
                    </Form.Field>
                    <Form.Field>
                      <Input placeholder='(##)' />
                    </Form.Field>
                    <Form.Field>
                      <Input placeholder='(####)' />
                    </Form.Field>
                  </Form.Group>
                </Form>
              </Segment>
            </div>
            <Divider />
            <div>
              <Header as='h2' attached='top'>
                Address Info
              </Header>
              <Segment fluid attached>
                <Form>
                  <Form.Group widths='equal'>
                    <Form.Input label='Street Address' placeholder='Street Address' />
                  </Form.Group>
                  <Form.Group widths='equal'>
                    <Form.Input label='Apt/Suite' placeholder='Apt/Suite' />
                  </Form.Group>
                  <Form.Group widths='equal'>
                    <Form.Input label='City' placeholder='City' />
                    <Form.Input label='State' placeholder='State' maxLength='2'/>
                    <Form.Input label='Zip' placeholder='Zip' maxLength='5'/>
                  </Form.Group>
                </Form>
              </Segment>
            </div>
            <Divider />
            <div>
              <Header as='h2' attached='top'>
                History
              </Header>
              <Segment fluid attached>
                <Form>
                  <Form.Group widths='equal'>
                    <Form.Input label='Street Address' placeholder='Street Address' />
                  </Form.Group>
                  <Form.Group widths='equal'>
                    <Form.Input label='Apt/Suite' placeholder='Apt/Suite' />
                  </Form.Group>
                  <Form.Group widths='equal'>
                    <Form.Input label='City' placeholder='City' />
                    <Form.Input label='State' placeholder='State' maxLength='2'/>
                    <Form.Input label='Zip' placeholder='Zip' maxLength='5'/>
                  </Form.Group>
                </Form>
              </Segment>
            </div>
          </div>
        </div>
      </div>
    )
  }
}


// function mapStateToProps(state) {
//   return {
//     users: state.users,
//   }
// }
//
// function matchDispatchtoProps(dispatch) {
//   return bindActionCreators({
//     logStuff: logStuff
//   }, dispatch);
// }

//export default connect(mapStateToProps, matchDispatchtoProps)(MainPage);
export default MainPage;
import React, { Component } from 'react';
import faker from 'faker';
import _ from 'lodash';
import { Accordion, Label, Message } from 'semantic-ui-react';

class AccordionShorthand extends Component {
  state = {
    panels: [{key: '1'}]
  }
  componentDidMount() {
    const { actions } = this.props;
    let temp = [];

    if(actions) {
      actions.forEach((action, index) => {
        temp.push({
          key: `panel-${index}`,
          title: {
            content: <Label color='blue' content={action.label} />,
          },
          content: {
            content: (
              <Message
                // info
                // header={faker.lorem.sentence()}
                content={action.content}
              />
            ),
          }
        });
      });
      this.setState({ panels: temp });
    }
  }
  
  render() {
    const { panels } = this.state;
    return <Accordion panels={panels} />
  }
}

export default AccordionShorthand;
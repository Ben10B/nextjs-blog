import React from 'react';
import faker from 'faker';
import _ from 'lodash';
import Link from 'next/link';
import { Button, Card, Icon } from 'semantic-ui-react';
import { ROUTES } from '../utils/constants';
import AccordionShorthand from '../components/accordion';

const API_HOME = ({}) => {
  return (
    <div className="notes-container">
      <div className="column wrapper">
        {ROUTES.map((directory, index) => (
          <div key={index} className="grid directory-container">
            {directory.map(route => (
              <div key={route.name}>
                <Card>
                  <Card.Content>
                    <Card.Header>
                      <Link href={route.url}>
                        <a>{route.name}</a>
                      </Link>
                    </Card.Header>
                    <Card.Meta>
                      {route.url}
                    </Card.Meta>
                    <Card.Description>
                      {route.description}
                    </Card.Description>
                  </Card.Content>
                  <Card.Content extra>
                    <Icon name="rss" />
                    {route.method}
                  </Card.Content>
                  <Card.Content>
                    <AccordionShorthand actions={route.actions}/>
                  </Card.Content>
                </Card>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  )
}

export default API_HOME;
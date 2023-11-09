import React from 'react'
import { Collapsible, CollapsibleItem, Container, Icon, Section } from 'react-materialize'
export default function About() {
  return (
    <Container>
      <Section>
        <Collapsible accordion>
          <CollapsibleItem
            expanded
            header="FILMS"
            icon={<Icon>group</Icon>}
            node="div"
          >
            Here you can see the films card.
          </CollapsibleItem>
          <CollapsibleItem
            expanded={false}
            header="Nations"
            icon={<Icon>place</Icon>}
            node="div"
          >
            USA,Korea,...
          </CollapsibleItem>
          
        </Collapsible>
      </Section>
    </Container>
  )
}

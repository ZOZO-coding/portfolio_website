import React from 'react';
import { DiFirebase, DiReact, DiCodepen} from 'react-icons/di';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () =>  (
  <Section id="tech">
    <SectionDivider />
    <br />
    <SectionTitle>Technologies</SectionTitle>
    <SectionText>
      I've worked with a range of technologies in the web development world, from back-end to design, I never stop learning new technologies.
    </SectionText>
    <List>
      <ListItem>
        <DiReact size="3rem" />
        <ListContainer>
          <ListTitle>Front-End</ListTitle>
          <ListParagraph>
            Experience with <br />
            TypeScript, React.js, MUI v5, Bootstrap
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiFirebase size="3rem" />
        <ListContainer>
          <ListTitle>Back-End</ListTitle>
          <ListParagraph>
            Experience with <br />
            Node.js, Java Spring Boot and Databases
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiCodepen size="3rem" />
        <ListContainer>
          <ListTitle>Other</ListTitle>
          <ListParagraph>
            Experience with <br />
            Python, Cloud Technologies
          </ListParagraph>
        </ListContainer>
      </ListItem>
    </List>
  </Section>
);

export default Technologies;

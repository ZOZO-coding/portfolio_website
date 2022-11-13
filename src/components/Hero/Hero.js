import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = () => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Welcom To <br />
        Yu Zuo's Portfolio
      </SectionTitle>
      <SectionText>
        This is my portfolio website to demonstrate my ability to develop front-end and full-stack websites, I am constantly evolving (learning more technologies & frameworks) so make sure to check back!
      </SectionText>
      <Button onClick={() => window.location = 'https://www.linkedin.com/in/yu-zuo-294aa969/'}>My LinkedIn</Button>
    </LeftSection>
  </Section>
);

export default Hero;
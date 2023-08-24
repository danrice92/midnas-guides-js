import Accordion from 'react-bootstrap/Accordion';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';

import theLegendOfZeldaLogo from 'images/the-legend-of-zelda-logo.png';

export default function TheLegendOfZelda() {
  return (
    <Container fluid>
      <Image
        fluid
        alt="The Legend of Zelda logo"
        src={theLegendOfZeldaLogo}
        className="logo"
      />
      <Accordion defaultActiveKey="0">
        <Accordion.Item eventKey="0">
          <Accordion.Header>Introduction</Accordion.Header>
          <Accordion.Body>
            Welcome to the Midna's Guide to <i>The Legend of Zelda</i>. Open a
            section to get started.
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </Container>
  );
}

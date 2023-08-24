import Accordion from 'react-bootstrap/Accordion';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import ListGroup from 'react-bootstrap/ListGroup';
import Table from 'react-bootstrap/Table';

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
        <Accordion.Item eventKey="1">
          <Accordion.Header>How to Play</Accordion.Header>
          <Accordion.Body>
            <Table striped bordered hover>
              <thead>
                <tr>
                  <th>Year</th>
                  <th>Platform</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>2021</td>
                  <td>
                    <a href="https://www.nintendo.com/store/products/game-watch-the-legend-of-zelda/">
                      Game & Watch: The Legend of Zelda
                    </a>
                  </td>
                </tr>
                <tr>
                  <td>2018</td>
                  <td>
                    <a href="https://www.nintendo.com/store/products/nintendo-entertainment-system-nintendo-switch-online-switch/">
                      Nintendo Entertainment System emulator (part of Nintendo
                      Switch Online)
                    </a>
                    . Modified versions are included that allow players to start
                    with extra hearts and equipment.
                  </td>
                </tr>
                <tr>
                  <td>2016</td>
                  <td>NES Classic</td>
                </tr>
                <tr>
                  <td>2013</td>
                  <td>Wii U eShop</td>
                </tr>
                <tr>
                  <td>2011</td>
                  <td>3DS eShop</td>
                </tr>
                <tr>
                  <td>2006</td>
                  <td>Wii Virtual Console</td>
                </tr>
                <tr>
                  <td>2004</td>
                  <td>Game Boy Advance (part of the Classic NES Series)</td>
                </tr>
                <tr>
                  <td>2001</td>
                  <td>Included in Animal Crossing</td>
                </tr>
                <tr>
                  <td>1987</td>
                  <td>Nintendo Entertainment System</td>
                </tr>
              </tbody>
            </Table>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </Container>
  );
}

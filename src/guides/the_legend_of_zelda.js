import Accordion from 'react-bootstrap/Accordion';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
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
      <p>
        Welcome to the Midna's Guide to <i>The Legend of Zelda</i>. Open a
        section to get started.
      </p>
      <Accordion defaultActiveKey="0">
        <Accordion.Item eventKey="0">
          <Accordion.Header>About the Game</Accordion.Header>
          <Accordion.Body>
            <h1>Release</h1>
            <p>
              <i>The Legend of Zelda</i> is the first game in the <i>Zelda</i>{' '}
              franchise. It was released in 1986 in Japan, and 1987 in the US
              and PAL territories.
            </p>
            <p>
              Given its age, <i>The Legend of Zelda</i> might seem exceptionally
              difficult for modern gamers. Very little story or direction is
              provided for what to do or how to do it, and the game can be quite
              punishing at times. That's why Midna's Guides is here to help!
            </p>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
          <Accordion.Header>First Time Playing?</Accordion.Header>
          <Accordion.Body>
            <h1>It's dangerous to go alone...</h1>
            <p>
              You should not be shy about looking up a guide to{' '}
              <i>The Legend of Zelda</i>, especially if it's your first time
              playing. Aside from its difficulty, <i>Zelda</i> was released in
              the 1980s, when gaming was very different from how it is today.
            </p>
            <p>
              For one, physical media packaged along with games at the time was
              not just for collectors; it was essential information.{' '}
              <i>The Legend of Zelda</i> included a map and an instruction
              booklet that went into more detail about the story, characters,
              and enemies players would encounter.
            </p>
            <p>
              For another, Nintendo knew how hard it was to discover all of the
              game's secrets, and encouraged players to talk in-person about
              their discoveries from the start. When they launched a monthly
              magazine, <i>Nintendo Power</i>, they{' '}
              <a href="https://archive.org/details/NintendoPower1988-2004/Nintendo%20Power%20Issue%20001%20%28July-August%201988%29/page/n3/mode/2up">
                included tips about Zelda in the very first issue.
              </a>
            </p>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="2">
          <Accordion.Header>Where to Buy</Accordion.Header>
          <Accordion.Body>
            <p>
              <i>The Legend of Zelda</i> is currently available to play on the
              Nintendo Switch through the{' '}
              <a href="https://www.nintendo.com/store/products/nintendo-entertainment-system-nintendo-switch-online-switch/">
                Nintendo Entertainment System app
              </a>
              . Access to the app is included in the base tier of Nintendo's
              subscription service,{' '}
              <a href="https://www.nintendo.com/switch/online/nintendo-switch-online/">
                Nintendo Switch Online
              </a>
              .
            </p>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="3">
          <Accordion.Header>Release History</Accordion.Header>
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

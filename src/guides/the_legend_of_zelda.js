import Accordion from 'react-bootstrap/Accordion';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';
import Table from 'react-bootstrap/Table';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';

import theLegendOfZeldaLogo from 'images/the-legend-of-zelda-logo.png';
import { firstQuestWalkthrough } from 'walkthrough_content/the_legend_of_zelda';
import WalkthroughSection from 'widgets/walkthrough_section';

export default function TheLegendOfZelda() {
  return (
    <Container fluid>
      <Row>
        <Col className="d-flex justify-content-center">
          <Image
            fluid
            alt="The Legend of Zelda logo"
            src={theLegendOfZeldaLogo}
          />
        </Col>
      </Row>
      <p>
        Welcome to the Midna's Guide to <i>The Legend of Zelda</i>.
      </p>
      <Tabs defaultActiveKey="walkthrough" className="mb-3" fill>
        <Tab eventKey="walkthrough" title="Walkthrough">
          <h1>First Quest</h1>
          <Accordion>
            {firstQuestWalkthrough.map((section) => (
              <WalkthroughSection key={section.part} section={section} />
            ))}
          </Accordion>
        </Tab>
        <Tab eventKey="controls" title="Controls">
          <p>
            Controls are listed for the Nintendo Switch Online version of the
            game.
          </p>
          <Table striped bordered hover>
            <thead>
              <tr>
                <td>Button</td>
                <td>Function</td>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Left Control Stick or Directional Pad / Buttons</td>
                <td>
                  <ul>
                    <li>
                      <strong>Startup Menu:</strong> Move the cursor when
                      selecting text for your character's name.
                    </li>
                    <li>
                      <strong>Inventory Menu:</strong> Move the cursor to select
                      a different item.
                    </li>
                    <li>
                      <strong>Game:</strong> Move Link.
                    </li>
                  </ul>
                </td>
              </tr>
              <tr>
                <td>+</td>
                <td>
                  <ul>
                    <li>
                      <strong>Startup Menu:</strong> Start the game and select
                      options.
                    </li>
                    <li>
                      <strong>Game:</strong> Pause or un-pause the game,
                      bringing up the inventory menu.
                    </li>
                  </ul>
                </td>
              </tr>
              <tr>
                <td>-</td>
                <td>
                  <ul>
                    <li>
                      <strong>Startup Menu:</strong> Moves the cursor down one,
                      cycling back to the top once the bottom is reached.
                    </li>
                    <li>
                      <strong>Game:</strong> Pause or un-pause the game,
                      freezing the screen.
                    </li>
                  </ul>
                </td>
              </tr>
              <tr>
                <td>A</td>
                <td>
                  <ul>
                    <li>
                      <strong>Startup Menu:</strong> Select text for your
                      character's name.
                    </li>
                    <li>
                      <strong>Game:</strong> Swing the sword. Once the sword is
                      equipped, it cannot be removed.
                    </li>
                  </ul>
                </td>
              </tr>
              <tr>
                <td>B or X</td>
                <td>
                  <ul>
                    <li>
                      <strong>Startup Menu:</strong> Move the cursor to the
                      right when naming a character, cycling back to the start
                      of the line when the far right is reached. Both buttons
                      are equivalent to the NES's B button.
                    </li>
                    <li>
                      <strong>Game:</strong> Use the item equipped in the
                      inventory menu.
                    </li>
                  </ul>
                </td>
              </tr>
              <tr>
                <td>ZL + ZR</td>
                <td>
                  Tap them at the same time to suspend the game. Hold them down
                  together to rewind the game.
                </td>
              </tr>
            </tbody>
          </Table>
        </Tab>
        <Tab eventKey="about" title="About">
          <h1>Release</h1>
          <p>
            <i>The Legend of Zelda</i> is the first game in the <i>Zelda</i>{' '}
            franchise. It was released in 1986 in Japan, and 1987
            internationally.
          </p>
          <h1>It's dangerous to go alone... Here are a few things to know!</h1>
          <ul>
            <li className="mt-3">
              The original release came with a detailed instruction booklet and
              a map in the box that contained lots of valuable information for
              players. Don't be shy about looking things up!
            </li>
            <li className="mt-3">
              Link can only move up, down, left, and right. He cannot move at an
              angle. Get comfortable with this limitation early.
            </li>
            <li className="mt-3">
              Games from the 1980s were difficult on purpose. The technical
              limitations meant that very little data could be stored on one
              game cartridge. Expect a challenge ahead!
            </li>
          </ul>
          <h1>Where to Buy</h1>
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
          <h1>Release History</h1>
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
                    Nintendo Entertainment System app
                  </a>{' '}
                  (part of{' '}
                  <a href="https://www.nintendo.com/switch/online/nintendo-switch-online/">
                    Nintendo Switch Online)
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
                <td>2004</td>
                <td>
                  GameCube (part of{' '}
                  <i>The Legend of Zelda: Collector's Edition</i>, a compilation
                  of classic games in the series)
                </td>
              </tr>
              <tr>
                <td>2001</td>
                <td>Included in Animal Crossing for GameCube</td>
              </tr>
              <tr>
                <td>1987</td>
                <td>Nintendo Entertainment System</td>
              </tr>
            </tbody>
          </Table>
        </Tab>
      </Tabs>
    </Container>
  );
}

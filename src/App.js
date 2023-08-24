import 'App.scss';
import midnasHelmet from 'images/midnas-helmet.png';

import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Navbar from 'react-bootstrap/Navbar';

import TheLegendOfZelda from 'guides/the_legend_of_zelda';

function App() {
  return (
    <Container fluid>
      <Navbar className="bg-body-tertiary mb-3">
        <Container>
          <Navbar.Brand href="/">
            <Image
              alt="Midna's Guides logo"
              src={midnasHelmet}
              width="30"
              height="30"
              className="logo"
            />
            Midna's Guides
          </Navbar.Brand>
        </Container>
      </Navbar>
      <TheLegendOfZelda />
    </Container>
  );
}

export default App;

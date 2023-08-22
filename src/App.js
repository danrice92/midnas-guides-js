import 'App.scss';
import midnasHelmet from 'midnas-helmet.png';

import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

function App() {
  return (
    <Container fluid>
      <Navbar className="bg-body-tertiary">
        <Container>
          <Navbar.Brand href="/">
            <img
              alt=""
              src={midnasHelmet}
              width="30"
              height="30"
              className="logo"
            />
            Midna's Guides
          </Navbar.Brand>
        </Container>
      </Navbar>
    </Container>
  );
}

export default App;

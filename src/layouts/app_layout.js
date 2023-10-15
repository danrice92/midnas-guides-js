import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Navbar from 'react-bootstrap/Navbar';

import midnasHelmet from 'images/midnas-helmet.png';

export default function AppLayout({ children }) {
  return (
    <div className="app">
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
      {children}
    </div>
  );
}

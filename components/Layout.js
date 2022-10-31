import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row';
import Header from './Header';
import Footer from './Footer';

const Layout = (props) => (
    <Container fluid>
        <Row>
            <Header />
        </Row>
        <Row className="py-5">
            <main>{props.children}</main>
        </Row>
        <Row>
            <Footer />
        </Row>
    </Container>
);

export default Layout;

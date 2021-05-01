import { HashRouter as Router, Route, Switch, Link } from 'react-router-dom';
import { Navbar, Nav, Container } from 'react-bootstrap';
import About from './About';
import Portfolio from './Portfolio';
import Contact from './Contact';

function Header() {
    return (
        <Container fluid>
            <Router>
                <Navbar collapseOnSelect expand="lg" bg="light" variant="dark" fluid>
                    <Navbar.Brand> <Link to="/">Ian Von Fange</Link></Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link> <Link to="/">About Me</Link></Nav.Link>
                        <Nav.Link> <Link to="/portfolio">Portfolio</Link></Nav.Link>
                        <Nav.Link> <Link to="/contact">Contact</Link></Nav.Link>
                    </Nav>
                    </Navbar.Collapse>
                </Navbar>
                <Switch>
                <Route exact path="/"><About /></Route>
                <Route path="/portfolio"><Portfolio /></Route>
                <Route path="/contact"><Contact /></Route>
                </Switch>
            </Router>
        </Container>
    )
};

export default Header;

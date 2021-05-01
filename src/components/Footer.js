import { React, Component } from 'react';
import Container from 'react-bootstrap/Container';

class Footer extends Component {
    render() {
        return (
            <Container className="text-center bg-light text-black">
                <span className="text-muted">&copy; Ian Von Fange 2021 | Powered by React-Bootstrap (v4.6)</span>
            </Container>
        );
    };
};

export default Footer;
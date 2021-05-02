import headshot from '../IMG_1130.jpeg';
import { Container, Row, Col } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import Jumbotron from 'react-bootstrap/Jumbotron';


function About() {
    return (
    <>
        <Container>
            <Row>
                <Col>
                    <Card className="bg-dark text-white">
                        <Card.Title>About Me</Card.Title>
                        <Card.Body className="row">
                            <Col>
                                <img src={headshot} id="headshot" className="rounded float-left px-2" alt="Headshot1" width='45%' />
                                <Card.Text>
                                    My name is Ian E. W. Von Fange. I'm a former barista and forever coffee nerd who
                                    loves to figure stuff out! I'm a third generation Kansas Citian, but I studied theatre and
                                    creative writing at the University of Rochester in Rochester, NY, earning my Bachelor of Arts in English in 2017.
                                </Card.Text>
                                <Card.Text>My education in literature, creative writing, and theatre performance has taught me strong analytical, synthetic, and creative skills, which
                                I apply to every application I develop. As an experienced barista and trainer in the coffee industry,
                                I’ve also developed strong team-building and communication skills, particularly for giving constructive
                                feedback. Learning the MERN stack - MongoDB, Express.js, React.js, and Node.js - has intensified my love
                                for language, as I’ve worked to understand the rich, complex syntax of JavaScript and its infinite uses.
                                </Card.Text>
                            </Col>
                        </Card.Body>
                        <Card.Body className="row">
                            <Col>
                                <Card.Text>I’m interested in software that improves communication, enriches natural language, and utilizes dynamic UIs,
                                and I am looking to break into the software development industry as a Junior Developer or QA Engineer.
                                </Card.Text>
                            </Col>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            <Row>
                <Jumbotron>
                    <Container>
                        <h3>Front-end Technical Skills</h3>
                        <p>HTML5, CSS3, JavaScript, jQuery (v3.4+), Handlebars.js, Express-Handlebars npm, Bootstrap CSS (v4.0+), Materialize CSS (v1.0), React.js</p>
                        <h3>Back-end Technical Skills</h3>
                        <p>Node.js, Express.js, MySQL, Sequelize npm, MongoDB, Mongoose npm, Jest.js</p>
                    </Container>
                </Jumbotron>
            </Row>
        </Container>
    </>
    );
};

export default About;
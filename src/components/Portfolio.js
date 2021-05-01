import { Container, Row, Col } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Media from 'react-bootstrap/Media'
import { projects } from '../utils/projects';

function Portfolio() {
    return (
        <Container fluid>
            <Jumbotron fluid>
                <Container>
                    <h1 className="display-4">Portfolio</h1>
                    <p className="lead">A selection of my ongoing development projects.</p>
                    <p className="lead">Visit my full GitHub profile <a href="https://github.com/eliaswolfgang"
                        target="_blank" rel="noreferrer">here.</a></p>
                    <p class="lead">View my <a
                        href="https://docs.google.com/document/d/1JOCRGQITE9N4LsHuiA14MfYbMVawxcAnWeXtKnUNF34/edit?usp=sharing"
                        target="_blank" rel="noreferrer">resumé.</a></p>
                </Container>
            </Jumbotron>
            <Row>
                {projects.map((project, key) => {
                    return (
                        <Col lg={6} key={key}>
                            <Card>
                                <Card.Body>
                                    <Card.Title>{project.name}</Card.Title>
                                    <Card.Subtitle>{project.description}</Card.Subtitle>
                                    <Media><embed src={project.website} /></Media>
                                        <Card.Link>
                                        <a href={project.website} target="_blank" rel="noreferrer">Visit this website</a>
                                        </Card.Link>
                                        <Card.Link>
                                        <a href={project.gitHub} target="_blank" rel="noreferrer">View the GitHub repository</a>
                                        </Card.Link>    
                                </Card.Body>
                            </Card>
                        </Col>    
                    );
                })}
            </Row>
        </Container>
    );
};

export default Portfolio;
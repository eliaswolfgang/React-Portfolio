import { Container, Row, Col } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import { React, useEffect } from 'react';
import contactForm from '../utils/contactForm';

function Contact() {
    useEffect(() => {
        const script = document.createElement('script');
      
        script.src = {contactForm};
        script.async = true;
      
        return () => {
            document.body.appendChild(script);
        }
      }, []);

    return(
        <Container>
            <Row>
            <Col lg={8}>
                <Card className="bg-dark text-white">
                    <form className="gform" method="POST" data-email="wolfgangvonfange@gmail.com"
                        action="https://script.google.com/macros/s/AKfycbyIJ2AtKpSLjwWWuJbgp4eKRbueHqQW-AsCUHioRNIaAy3Eh88G/exec">
                        <div className="thankyou_message">
                            <h2><em>Thanks</em> for contacting me! I'll be in touch soon!
                            </h2>
                        </div>
                        <div className="form-group">
                            <label for="formGroupName">Name</label>
                            <input type="text" className="form-control" id="formGroupName" placeholder="John Smith"
                                name="name" />
                        </div>
                        <div className="form-group">
                            <label for="formGroupEmail">Email</label>
                            <input type="text" className="form-control" id="formGroupEmail"
                                placeholder="example@example.com" name="email" />
                        </div>
                        <div className="form-group">
                            <label for="formGroupMessage">Message</label>
                            <textarea className="form-control" id="formGroupMessage" rows="8" name="message"></textarea>
                        </div>
                        <button className="btn btn-info btn-lg" type="submit">Submit</button>
                    </form>
                </Card>
            </Col>
            <Col lg={4}>
                <Card className="bg-dark">
                    <div className="card-header text-white">
                        Connect on GitHub, LinkedIn, and Twitter
                    </div>
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item"><i className="fab fa-github-square" aria-hidden="true"></i><a href="https://github.com/eliaswolfgang" target="_blank" rel="noreferrer">  /eliaswolfgang</a></li>
                        <li className="list-group-item"><i className="fab fa-linkedin" aria-hidden="true"></i><a href="https://www.linkedin.com/in/ian-von-fange/" target="_blank" rel="noreferrer">  ian-von-fange</a></li>
                        <li className="list-group-item"><i className="fab fa-twitter-square" aria-hidden="true"></i><a href="https://twitter.com/elias_wolfgang" target="_blank" rel="noreferrer">  @elias_wolfgang</a></li>
                    </ul>
                </Card>
                <Row>
                    <h4>Or email me at <a href="mailto:ianewvf@gmail.com">ianewvf@gmail.com</a></h4>
                </Row>
            </Col>
            </Row>
        </Container>
    )
};

export default Contact;
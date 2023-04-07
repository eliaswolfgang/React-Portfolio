import { Container, Row, Col } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import { React, useState } from 'react';
import emailjs from 'emailjs-com';

function Contact() {
  const SERVICE_ID = 'service_vqq93rm';
  const TEMPLATE_ID = 'template_3arbluf';
  const USER_ID = 'qY6s63LrAde4R9Np3';
  const [emailSent, setEmailSent] = useState(false);
  const handleOnSubmit = (e) => {
    e.preventDefault();
    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, e.target, USER_ID);
    setEmailSent(true);
    e.target.reset();
  };
  return (
    <Container>
      <Row>
        <Col lg={8}>
          <Card className='bg-dark text-white'>
            <form onSubmit={handleOnSubmit}>
              {emailSent && (
                <div>
                  <h2>
                    <em>Thanks</em> for contacting me! I'll be in touch soon!
                  </h2>
                </div>
              )}
              {!emailSent && (
                <>
                  <div className='form-group'>
                    <label for='formGroupName'>Name</label>
                    <input
                      type='text'
                      className='form-control'
                      id='formGroupName'
                      placeholder='John Smith'
                      name='from_name'
                    />
                  </div>
                  <div className='form-group'>
                    <label for='formGroupEmail'>Email</label>
                    <input
                      type='text'
                      className='form-control'
                      id='formGroupEmail'
                      placeholder='example@example.com'
                      name='reply_to'
                    />
                  </div>
                  <div className='form-group'>
                    <label for='formGroupMessage'>Message</label>
                    <textarea
                      className='form-control'
                      id='formGroupMessage'
                      rows='8'
                      name='message'
                    ></textarea>
                  </div>
                  <button className='btn btn-info btn-lg' type='submit'>
                    Submit
                  </button>
                </>
              )}
            </form>
          </Card>
        </Col>
        <Col lg={4}>
          <Card className='bg-dark'>
            <div className='card-header text-white'>
              Connect on GitHub, LinkedIn, and Twitter
            </div>
            <ul className='list-group list-group-flush'>
              <li className='list-group-item'>
                <i className='fab fa-github-square' aria-hidden='true'></i>
                <a
                  href='https://github.com/eliaswolfgang'
                  target='_blank'
                  rel='noreferrer'
                >
                  {' '}
                  /eliaswolfgang
                </a>
              </li>
              <li className='list-group-item'>
                <i className='fab fa-linkedin' aria-hidden='true'></i>
                <a
                  href='https://www.linkedin.com/in/ian-von-fange/'
                  target='_blank'
                  rel='noreferrer'
                >
                  {' '}
                  ian-von-fange
                </a>
              </li>
              <li className='list-group-item'>
                <i className='fab fa-twitter-square' aria-hidden='true'></i>
                <a
                  href='https://twitter.com/elias_wolfgang'
                  target='_blank'
                  rel='noreferrer'
                >
                  {' '}
                  @elias_wolfgang
                </a>
              </li>
            </ul>
          </Card>
          <Row>
            <h4>
              Or email me at{' '}
              <a href='mailto:ianewvf@gmail.com'>ianewvf@gmail.com</a>
            </h4>
          </Row>
        </Col>
      </Row>
    </Container>
  );
}

export default Contact;

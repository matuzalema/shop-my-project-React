// import React, { Component } from 'react';
// import { Collapse, Button, CardBody, Card } from 'reactstrap';
import "./FAQ.scss";



import React from 'react';
import { Accordion, Card, Button } from 'react-bootstrap';

const Example = () => (
  <div class="faq">
    <h1 className="faq-header"> FAQ</h1>
    <Accordion defaultActiveKey="0">
      <Card>
        <Card.Header >
          <Accordion.Toggle class="button-faq" as={Button} variant="link" eventKey="0">
            Commodi quod ipsa fugit corrupti architecto?
      </Accordion.Toggle>
        </Card.Header>
        <Accordion.Collapse eventKey="0">
          <Card.Body>Saepe delectus excepturi tenetur nisi dolorem ipsa perspiciatis earum
       corrupti? Iure aliquid obcaecati ipsum dolorum provident totam numquam
       excepturi tenetur tempore corrupti! Commodi quod ipsa fugit corrupti
       architecto ad. Quibusdam repudiandae non placeat dolorem velit, est
      enim doloribus atque molestiae.</Card.Body>
        </Accordion.Collapse>
      </Card>
      <Card>
        <Card.Header>
          <Accordion.Toggle as={Button} variant="link" eventKey="1">
            Libero placeat est eligendi corrupti dicta vero?
      </Accordion.Toggle>
        </Card.Header>
        <Accordion.Collapse eventKey="1">
          <Card.Body>Iure aliquid obcaecati ipsum dolorum provident totam numquam excepturi
          tenetur tempore corrupti! Commodi quod ipsa fugit corrupti architecto
          ad. Quibusdam repudiandae non placeat dolorem velit, est enim
          doloribus atque molestiae</Card.Body>
        </Accordion.Collapse>
      </Card>
      <Card>
        <Card.Header>
          <Accordion.Toggle as={Button} variant="link" eventKey="2">
            Optio officia quisquam voluptatum culpa repellat, eum numquam?
      </Accordion.Toggle>
        </Card.Header>
        <Accordion.Collapse eventKey="2">
          <Card.Body>Cumque eos sunt temporibus optio quasi fuga officia velit dicta dolore
          ratione, sapiente iste et odio ab reiciendis, atque aspernatur earum
          numquam. Error ipsum assumenda perspiciatis quia soluta officia!
          Similique, quam quos illum fuga Saepe delectus excepturi tenetur nisi
          dolorem ipsa perspiciatis earum corrupti? Iure aliquid obcaecati ipsum
          dolorum provident totam numquam excepturi tenetur tempore corrupti!
          Commodi quod ipsa fugit corrupti architecto ad. Quibusdam repudiandae
          non placeat dolorem velit, est enim doloribus atque molestiae.</Card.Body>
        </Accordion.Collapse>
      </Card>
      <Card>
        <Card.Header>
          <Accordion.Toggle as={Button} variant="link" eventKey="3">
            Squam volupta culpa repellat am quam?
      </Accordion.Toggle>
        </Card.Header>
        <Accordion.Collapse eventKey="3">
          <Card.Body>Aliquid obcaecati ipsum dolorum provident totam numquam excepturi
          tenetur tempore corrupti! Commodi quod ipsa fugit corrupti architecto
          ad. Quibusdam repudiandae non placeat dolorem velit, est enim
          doloribus atque molestiae.</Card.Body>
        </Accordion.Collapse>
      </Card>
      <Card>
        <Card.Header>
          <Accordion.Toggle as={Button} variant="link" eventKey="4">
           Voluptat culpa repellat, eum numquam?
      </Accordion.Toggle>
        </Card.Header>
        <Accordion.Collapse eventKey="4">
          <Card.Body>Fuga Saepe delectus excepturi tenetur nisi dolorem ipsa perspiciatis
          earum corrupti? Iure aliquid obcaecati ipsum dolorum provident totam
          numquam excepturi tenetur tempore corrupti! Commodi quod ipsa fugit
          corrupti architecto ad. Quibusdam repudiandae non placeat dolorem
          velit, est enim doloribus atque molestiae.</Card.Body>
        </Accordion.Collapse>
      </Card>
    </Accordion>

  </div>
);

export default Example;


//         <h2></h2>
//         <p>
          
//         </p>
//         <h2></h2>
//         <p>
          
//         </p>
//       </div>
//     );
//   }
// }

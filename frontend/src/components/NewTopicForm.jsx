import React from 'react';
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

const NewTopicForm = () => {
  return (
    <div>

      <Form>
  <Form.Group className="mb-2" controlId="formBasicEmail">
    <Form.Label>Not present in above list? Add here.</Form.Label>
    <Form.Control placeholder="Topic name" />
    
  </Form.Group>
  <Button variant="primary" type="submit" formMethod='post' formAction='./saveTopic'>
      {/* Upar me form action me route daldo jah topic jaega  ()
       */}
    Submit
  </Button>
</Form>

    </div>
    );
}

export default NewTopicForm;

import React from 'react';
import Form from './components/Form/Form';
// import sampleSchema from './sample/sampleSchema.js';

function App() {
  return (
    <Form
      schema={{
  "title": "A registration form",
  "description": "This is the same as the simple form, but it is rendered as a bootstrap grid. Try shrinking the browser window to see it in action.",
  "type": "object",
  "required": [
    "firstName",
    "lastName"
  ],
  "properties": {
    "firstName": {
      "type": "string",
      "title": "First name"
    },
    "lastName": {
      "type": "string",
      "title": "Last name"
    },
    "age": {
      "type": "integer",
      "title": "Age"
    },
    "bio": {
      "type": "string",
      "title": "Bio"
    },
    "password": {
      "type": "string",
      "title": "Password",
      "minLength": 3
    },
    "telephone": {
      "type": "string",
      "title": "Telephone",
      "minLength": 10
    }
  }
}}
      uiSchema={{}}
    />
  );
}

export default App;

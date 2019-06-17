import React from 'react';
import Form from 'react-bootstrap/Form';

export default function TextInput({id, initialValue, label, description, onUpdate}) {
	return(
    <Form.Group>
      {label !== undefined &&
        <Form.Label>{label}</Form.Label>}
      <Form.Control
        id={id}
        name={id}
        defaultValue={initialValue}
        onChange={onUpdate !== undefined ? 
          (event) => onUpdate(event.target.name, event.target.value) : undefined}
      />
      {description !== undefined &&
        <Form.Text>{description}</Form.Text>}
    </Form.Group>
	);
}

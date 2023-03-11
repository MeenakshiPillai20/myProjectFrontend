import React from 'react';
import Alert from 'react-bootstrap/Alert';

export default function AlertMsg({data}) {
  return (
    <Alert variant="success" onClose={() => data(false)} dismissible>
        <Alert.Heading>Hurray!!! You have successfully registered. </Alert.Heading>
      </Alert>
  )
}


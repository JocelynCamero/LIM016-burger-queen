import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function IconoNav(props) {
  const { nombre } = props;
  return (
    <div>
      <FontAwesomeIcon icon={nombre} size="2x" color="#EA7C69" />
    </div>
  );
}

import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function IconoNav(props) {
  const handleClick = (e) => {
    console.log(e.target.value);
  };
  const { nombre, value, onClick } = props;
  return (
    <div>
      <FontAwesomeIcon icon={nombre} size="2x" color="#EA7C69" value={value} onClick={handleClick} />
    </div>
  );
}

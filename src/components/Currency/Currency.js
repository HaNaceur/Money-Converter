import React from 'react';
import PropTypes from 'prop-types';
import './styles.scss';

function Currency({
  name,

  // le onClick est passé dans le rest
  ...rest // {onClick: () => {...}}
}) {
  return (
    <li
      className="currency"

      // on injecte le rest dans le <li>
      // du coup le onClick se retrouve injecté dans le <li>
      {...rest}
      // c'est comme si on avait: `onClick={rest.onClick}`
    >
      {name}
    </li>
  );
}

Currency.propTypes = {
  name: PropTypes.string.isRequired,
};

export default Currency;

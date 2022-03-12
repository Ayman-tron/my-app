import React from 'react'

function ItemDescription({name, description}) {
  return (
    <div>
      <p>{name}</p>
      <p>
          <i>{description}</i>
      </p>
      {}
    </div>
  );
}

export default ItemDescription;


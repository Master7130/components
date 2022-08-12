import React, { useState } from 'react';

interface Props {
  items: {
    key: string;
    item: string;
  }[];
}

export default function Accordion({ items }: Props) {
  const [currentId, setCurrentId] = useState(0);

  return (
    <div>
      {items.map((item, key) => {
        return (
          <div>
            <button
              onClick={() => {
                setCurrentId(key);
                console.log(key);
              }}
            >
              {item.key}
            </button>
            {currentId === key ? <p>test</p> : null}
          </div>
        );
      })}
    </div>
  );
}

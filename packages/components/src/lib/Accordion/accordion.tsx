import React, { useState, useRef } from 'react';

interface Props {
  items: {
    key: string;
    item: string;
  }[];
}

export default function Accordion({ items }: Props) {
  const [active, setActive] = useState(false);
  const [height, setHeight] = useState('0px');
  const [rotate, setRotate] = useState('transform duration-700 ease');

  const contentSpace = useRef(null);

  function toggleAccordion() {
    setActive((prevState) => !prevState);
    // @ts-ignore
    setHeight(active ? '0px' : `${contentSpace.current.scrollHeight}px`);
    setRotate(
      active
        ? 'transform duration-700 ease'
        : 'transform duration-700 ease rotate-180'
    );
  }

  return (
    <>
      {items.map((item, key) => {
        return (
          <div className="flex flex-col">
            <button
              className=" flex items-center justify-between"
              onClick={toggleAccordion}
            >
              <p className="inline-block text-footnote light">{item.key}</p>
            </button>
            <div
              ref={contentSpace}
              style={{ maxHeight: `${height}` }}
              className="overflow-auto transition-max-height duration-700 ease-in-out"
            >
              <div className="">{item.item}</div>
            </div>
          </div>
        );
      })}
    </>
  );
}

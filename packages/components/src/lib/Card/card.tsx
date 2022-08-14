import React from 'react';

interface Props {
  title: string;
  description: string;
  imgUrl: string | undefined;
  imgAlt: string | undefined;
  width: string | undefined;
}

export default function Card({ title, imgUrl, imgAlt, description }: Props) {
  return (
    <div className="w-52 shadow-lg rounded-md">
      <div className="object-contain">
        {imgUrl && imgAlt && (
          <img src={imgUrl} alt={imgAlt} className="rounded-t-md" />
        )}
      </div>
      <div className="text-xl">{title}</div>
      <div className="text-base">{description}</div>
    </div>
  );
}

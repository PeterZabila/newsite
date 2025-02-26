import React from 'react';
type ComponentProps = {
  imageSrc: string,
  title: string,
  description: string
}

const Card: React.FC<ComponentProps> = ({ imageSrc = "source", title = "image title", description = "description" }) => {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white transform transition-transform duration-300 hover:scale-105">
      <img className="w-full" src="https://vogueadria.com/wp-content/uploads/2025/01/winter-issue2.png.webp" alt={title} />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{title}</div>
        <p className="text-gray-700 text-base">
          {description}
        </p>
      </div>
    </div>
  );
}

export default Card;
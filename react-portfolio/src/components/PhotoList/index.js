import React, { useState } from 'react';
import Modal from '../Modal';



const PhotoList = ({ category }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentPhoto, setCurrentPhoto] = useState();

  const [photos] = useState([
    {
        name: 'Password Gen',
        category: 'Challenge',
        description: 'This Challenge i had to create a password generator',
      },
      {
        name: 'QuizTime',
        category: 'Challenge',
        description: 'This challenge we had to create a quit out of JavaScript',
      },
      {
        name: 'ReadMe',
        category: 'Challenge',
        description: 'This was our first challenge for Node.js. We had to create a readme generator',
      },
      {
        name: 'WeatherApi',
        category: 'Challenge',
        description: 'This Challenge we had to create a weather app.',
      },
      {
        name: 'Weekly Schedule',
        category: 'Challenge',
        description: 'The weekly Schedule we had to display out daily task on the Schedule.',
      }
    ]);

    const currentPhotos = photos.filter((photo) => photo.category === category);

  const toggleModal = (image, i) => {
    setCurrentPhoto({ ...image, index: i });
    setIsModalOpen(!isModalOpen);
  };

  return (
    <div>
      {isModalOpen && <Modal onClose={toggleModal} currentPhoto={currentPhoto} />}
      <div className="flex-row">
        {currentPhotos.map((image, i) => (
          <img
            src={require(`../../assets/PortfolioImg/Challenge${category}/${i}.jpg`)}
            alt={image.name}
            className="img-thumbnail mx-1"
            onClick={() => toggleModal(image, i)}
            key={image.name}
          />
        ))}
      </div>
    </div>
  );
};

export default PhotoList;
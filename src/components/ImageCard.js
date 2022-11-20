import React from "react";
import EditImageCard from "./EditImage";

const ImageCard = ({ city , searchText}) => {
  const [modalIsOpen, setIsOpen] = React.useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg mx-auto">
      <img src={city.photo} alt="" className="w-full" />
      <div className="px-6 py-4">
        <div className="font-bold text-purple-500 text-xl mb-2">
          City: {city.name}
        </div>
      </div>
      <div className="px-6 py-4">
        <button
          className="flex-shrink-0 bg-teal-500 hover:bg-teal-700 border-teal-500 hover:border-teal-700 text-sm border-4 text-white py-1 px-2 rounded"
          type="submit" onClick={openModal}
        >
          Edit
        </button>
      </div>
      <EditImageCard city={city} modalIsOpen={modalIsOpen} closeModal={closeModal} searchText={searchText}/>
    </div>
  );
};

export default ImageCard;

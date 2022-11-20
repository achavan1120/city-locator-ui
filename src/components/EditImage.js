import Modal from 'react-modal';
import { APP_URL } from "../constant/contant";
import React, { useState } from "react";
const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
    },
};
const EditImageCard = ({ city, modalIsOpen, closeModal, searchText }) => {
    const [name, setName] = useState(city.name);
    const [image, setImage] = useState(city.photo);
    const [message, setMessage] = useState("");

   const save = (e) => {
        e.preventDefault();

        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ id:city.id, name , photo:image})
        };

        fetch(`${APP_URL}/city`, requestOptions)
            .then(async response => {
                const isJson = response.headers.get('content-type')?.includes('application/json');
                const data = isJson && await response.json();
    
                // check for error response
                if (!response.ok) {
                    // get error message from body or default to response status
                    const error = (data && data.message) || response.status;
                    return Promise.reject(error);
                }
                searchText(" ");
                closeModal()
            })
            .catch(error => {
                setMessage(error)
                console.error('There was an error!', error);
            });
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
                <Modal
                    isOpen={modalIsOpen}
                    onRequestClose={closeModal}
                    style={customStyles}
                >
                    <h2>Edit City</h2>
                    <div class="w-full max-w-xs">
                        {/* <form class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"> */}
                        <div class="mb-4">
                            <label class="block text-gray-700 text-sm font-bold mb-2" for="name">
                                Name
                            </label>
                            <input value={name} onChange={(e) => setName(e.target.value)}  class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="name" type="text" placeholder="Name" />
                        </div>
                        <div class="mb-6">
                            <label class="block text-gray-700 text-sm font-bold mb-2" for="image">
                                Image Uri
                            </label>
                            <input value={image} onChange={(e) => setImage(e.target.value)} class="shadow appearance-none border  rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="image" type="text" placeholder="Image Uri" />
                        </div>
                        <div class="flex items-center justify-between">
                            <button onClick={save} class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
                                Save
                            </button>
                            <button onClick={closeModal} class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
                                Close
                            </button>
                        </div>

                    </div>
                </Modal>

            </div>
        </div>
    );
};

export default EditImageCard;

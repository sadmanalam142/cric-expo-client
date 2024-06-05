/* eslint-disable react/prop-types */
import toast from 'react-hot-toast';
import { Link } from 'react-router-dom';
import './../../components/home/products.css';
import { useState } from 'react';
import ConfirmDeleteModal from '../ConfirmDeleteModal';

const SingleProductCardDashboard = ({ product, onDelete }) => {
  const token = localStorage.getItem('token');
  const { _id, title, brand, price, description, image_url } = product;
  const [showModal, setShowModal] = useState(false);

  const handleDelete = async () => {
    await fetch(`https://cric-expo-server1.onrender.com/products/${_id}`, {
      method: 'DELETE',
      headers: {
        'Content-type': 'application/json',
        authorization: `Bearer ${token}`,
      },
    })
      .then((res) => res.json())
      .then(() => {
        toast.success('Product Deleted');
        onDelete(_id);
      });
  };

  const handleCloseModal = () => setShowModal(false);
  const handleShowModal = () => setShowModal(true);
  const handleConfirmDelete = () => {
    handleDelete();
    handleCloseModal();
  };

  return (
    <div className="card w-96 bg-base-100 shadow-xl all_product_section">
      <figure>
        <img src={image_url} alt={title} />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <h3 className="text-xl font-semibold">{brand}</h3>
        <h3 className="text-xl font-semibold">{price} $</h3>
        <p>{description}</p>
        <div className="card-actions justify-end all_product_buttons">
          <button className="btn bg-lime-500 text-black">
            <Link to={`/products/${_id}`}>See details</Link>
          </button>
          <button className="btn bg-yellow-500 text-black">
            <Link to={`edit/${_id}`}>Edit</Link>
          </button>
          <button
            onClick={handleShowModal}
            className="btn bg-red-500 text-black"
          >
            Delete
          </button>
        </div>
      </div>

      <ConfirmDeleteModal
        show={showModal}
        handleClose={handleCloseModal}
        handleConfirm={handleConfirmDelete}
      />
    </div>
  );
};

export default SingleProductCardDashboard;
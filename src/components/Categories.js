import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getStatus } from '../redux/categories/categoriesSlice';
import './Styles/Category.css';

function Category() {
  const dispatch = useDispatch();

  const handleCheckStatus = () => {
    dispatch(getStatus());
  };

  const status = useSelector((state) => state.categories.status);

  return (
    <div className="Cat-container">
      <h1>{status}</h1>
      <button className="status-button" type="button" onClick={handleCheckStatus}>
        Check Status
      </button>
    </div>
  );
}

export default Category;

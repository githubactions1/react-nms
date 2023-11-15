import React, { useState, useEffect } from 'react';
// import { css } from '@emotion/react';
import { BarLoader } from 'react-spinners';

const LoadingSpinner = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulating an asynchronous operation (e.g., fetching data)
    const fetchData = async () => {
      // Simulate a delay
      setTimeout(() => {
        setLoading(false);
      }, 2000);
    };

    fetchData();
  }, []); // Empty dependency array ensures the effect runs once when the component mounts

 

  return (
    <BarLoader color={'#36D7B7'} loading={loading} className="override" size={150} />
  );
};

export default LoadingSpinner;

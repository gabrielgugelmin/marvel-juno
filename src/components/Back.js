import React from 'react';
import { withRouter } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';
import { Back as BackButton } from './styles';

// import { Container } from './styles';

const Back = () => {
  return (
    <BackButton to="/">
      <FaArrowLeft />
    </BackButton>
  );
};

export default withRouter(Back);

import { useState } from 'react';

const ErrorButton = () => {
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => setIsClicked(true);

  if (isClicked) {
    throw new Error('This is error');
  }
  return (
    <button className="errBtn" onClick={handleClick}>
      Error button
    </button>
  );
};

export default ErrorButton;

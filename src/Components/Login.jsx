import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [isOpen, setIsOpen] = useState(true);
  const [mobileNumber, setMobileNumber] = useState('');
  const navigate = useNavigate();

  const handleClose = () => {
    setIsOpen(false);
    navigate('/');
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-800">
      {isOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-transparent bg-opacity-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-96">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-lg font-semibold">Get started with Testbook!</h2>
              <button onClick={handleClose} className="text-gray-500">✖</button>
            </div>
            <p className="text-sm text-gray-600 mb-4">Continue with your mobile number</p>
            <input 
              type="text" 
              placeholder="Please enter your mobile number" 
              className="w-full p-2 border rounded-md mb-4" 
              value={mobileNumber} 
              onChange={(e) => setMobileNumber(e.target.value)}
            />
            <button className="w-full bg-green-500 text-white py-2 rounded-md">Continue</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Login;

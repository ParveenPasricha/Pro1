import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [isOpen, setIsOpen] = useState(true);
  const [mobileNumber, setMobileNumber] = useState("");
  const [error, setError] = useState("");
  const [isOtpStage, setIsOtpStage] = useState(false);
  const [otp, setOtp] = useState("");
  const [otpError, setOtpError] = useState("");
  const navigate = useNavigate('')


  const handleClose = () => {
    setIsOpen(false);
    navigate('/')
  };

  const handleLogin = () => {
    if (!mobileNumber) {
      setError("Please enter your mobile number.");
      return;
    } else if (!/^\d{10}$/.test(mobileNumber)) {
      setError("Please enter a valid 10-digit number.");
      return;
    } else {
      setError(""); // Clear error if input is valid
      setIsOtpStage(true);
    }
  };

  const handleOtpSubmit = () => {
    if (otp.length !== 4) {
      setOtpError("Please enter a valid 4-digit OTP.");
      return;
    }
    alert("OTP Verified Successfully!");
    navigate('/onlinetest')
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-800">
      {isOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-transparent bg-opacity-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-96">
            {/* OTP Stage UI */}
            {isOtpStage ? (
              <>
                <div className="flex justify-between items-center mb-4">
                  <h2 className="text-lg font-semibold">Welcome!</h2>
                  <button
                    onClick={handleClose}
                    className="text-gray-500 hover:text-red-600"
                  >
                    ✖
                  </button>
                </div>
                <p className="text-gray-600 text-sm mb-2">
                  OTP will be sent to your number below
                </p>
                <div className="flex justify-between items-center border p-2 rounded-md mb-2">
                  <span>📱 {mobileNumber}</span>
                  <button
                    onClick={() => setIsOtpStage(false)}
                    className="text-blue-500 hover:text-blue-700 text-sm"
                  >
                    ✏ Edit
                  </button>
                </div>
                <input
                  type="text"
                  placeholder="Enter OTP"
                  className="w-full p-2 border rounded-md mb-2"
                  value={otp}
                  onChange={(e) => setOtp(e.target.value)}
                  maxLength={4}
                  inputMode="numeric"
                />
                {otpError && <p className="text-red-500 text-sm">{otpError}</p>}
                <p className="text-blue-500 text-sm cursor-pointer mt-2">
                  Resend OTP | Get OTP on call
                </p>
                <button
                  onClick={handleOtpSubmit}
                  className="w-full bg-green-500 text-white py-2 rounded-md hover:bg-green-700 mt-4"
                >
                  LOGIN
                </button>
              </>
            ) : (
              // Mobile Number Input UI
              <>
                <div className="flex justify-between items-center mb-4">
                  <h2 className="text-lg font-semibold">Get started with Testbook!</h2>
                  <button
                    onClick={handleClose}
                    className="text-gray-500 hover:text-red-600"
                  >
                    ✖
                  </button>
                </div>
                <p className="text-sm text-gray-600 mb-4">
                  Continue with your mobile number
                </p>
                <input
                  type="text"
                  placeholder="Enter your mobile number"
                  className="w-full p-2 border rounded-md mb-2"
                  value={mobileNumber}
                  onChange={(e) => setMobileNumber(e.target.value)}
                  pattern="[0-9]*"
                  inputMode="numeric"
                />
                {error && <p className="text-red-500 text-sm mb-2">{error}</p>}
                <button
                  onClick={handleLogin}
                  className="w-full bg-green-500 text-white py-2 rounded-md hover:bg-green-700"
                >
                  Continue
                </button>
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Login;

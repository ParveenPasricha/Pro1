import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { login } from "./Redux/authSlice";
import axios from "axios";

const Login = () => {
  const [isOpen, setIsOpen] = useState(true);
  const [mobileNumber, setMobileNumber] = useState("");
  const [username, setUsername] = useState(""); // Username field
  const [error, setError] = useState("");
  const [isOtpStage, setIsOtpStage] = useState(false);
  const [otp, setOtp] = useState("");
  const [genOTP, setGenOTP] = useState(null);  
  const [otpError, setOtpError] = useState("");
  const [isNewUser, setIsNewUser] = useState(false); // Track if user needs to signup
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleClose = () => {
    setIsOpen(false);
    navigate('/');
  };

  const generateOTP = () => {
    return Math.floor(1000 + Math.random() * 9000);
  };

  const handleLogin = async () => {
    if (!mobileNumber) {
      setError("Please enter your mobile number.");
      return;
    } else if (!/^\d{10}$/.test(mobileNumber)) {
      setError("Please enter a valid 10-digit number.");
      return;
    }

    setError("");
    try {
      // 🔍 Check if user exists in DB
      const response = await axios.post("http://localhost:5000/api/login", { mobile: mobileNumber });

      if (response.data.user) {
        // ✅ User exists → Proceed with OTP
        setIsNewUser(false);
        const newOTP = generateOTP();
        setGenOTP(newOTP);
        console.log("Generated OTP:", newOTP);
        setIsOtpStage(true);
      } else {
        // ❌ User not found → Show signup fields
        setIsNewUser(true);
      }
    } catch (error) {
      console.log("Error checking user:", error);
      setIsNewUser(true); // Assume new user if error
    }
  };

  const handleSignup = async () => {
    if (!username) {
      setError("Please enter a username.");
      return;
    }

    try {
      // 📌 Register new user
      await axios.post("http://localhost:5000/api/signup", { user:username, mobile: mobileNumber });

      // ✅ Proceed with OTP
      setIsNewUser(false);
      const newOTP = generateOTP();
      setGenOTP(newOTP);
      console.log("Generated OTP:", newOTP);
      setIsOtpStage(true);
    } catch (error) {
      console.log("Error in signup:", error);
      setError("Signup failed. Please try again.");
    }
  };

  const handleOtpSubmit = async () => {
    if (otp.length !== 4) {
      setOtpError("Please enter a valid 4-digit OTP.");
      return;
    }

    if (parseInt(otp) === genOTP) {
      alert("OTP Verified Successfully!");
      console.log("OTP Verified Successfully!");

      navigate('/testseries');

      try {
        const response = await axios.post("http://localhost:5000/api/login", { mobile: mobileNumber });
        
        if (response.data.user) {
          dispatch(login(response.data.user));
        } else {
          setError("Login Failed! Please try again.");
        }
      } catch (error) {
        console.log("Error in API request:", error);
      }
    } else {
      setOtpError("Incorrect OTP, please try again!");
      console.log("Incorrect OTP, try again!");
    }
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
                  <button onClick={handleClose} className="text-gray-500 hover:text-red-600">
                    ✖
                  </button>
                </div>
                <p className="text-gray-600 text-sm mb-2">
                  OTP has been sent to your mobile number below
                </p>
                <div className="flex justify-between items-center border p-2 rounded-md mb-2">
                  <span>📱 {mobileNumber}</span>
                  <button onClick={() => setIsOtpStage(false)} className="text-blue-500 hover:text-blue-700 text-sm">
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
                <button onClick={handleOtpSubmit} className="w-full bg-green-500 text-white py-2 rounded-md hover:bg-green-700 mt-4">
                  LOGIN
                </button>
              </>
            ) : isNewUser ? (
              // Signup UI
              <>
                <div className="flex justify-between items-center mb-4">
                  <h2 className="text-lg font-semibold">Sign Up</h2>
                  <button onClick={handleClose} className="text-gray-500 hover:text-red-600">
                    ✖
                  </button>
                </div>
                <p className="text-sm text-gray-600 mb-4">
                  Enter your details to create an account.
                </p>
                <input
                  type="text"
                  placeholder="Enter username"
                  className="w-full p-2 border rounded-md mb-2"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
                <input
                  type="text"
                  placeholder="Enter your mobile number"
                  className="w-full p-2 border rounded-md mb-2"
                  value={mobileNumber}
                  disabled
                />
                {error && <p className="text-red-500 text-sm mb-2">{error}</p>}
                <button onClick={handleSignup} className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-700">
                  Sign Up
                </button>
              </>
            ) : (
              // Mobile Number Input UI
              <>
                <div className="flex justify-between items-center mb-4">
                  <h2 className="text-lg font-semibold">Get started with Testbook!</h2>
                  <button onClick={handleClose} className="text-gray-500 hover:text-red-600">
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
                <button onClick={handleLogin} className="w-full bg-green-500 text-white py-2 rounded-md hover:bg-green-700">
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

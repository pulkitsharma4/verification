"use client"

import React, { useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/navigation';

const MyFormComponent = () => {
  
  //setting the states for the input values of the form below
  const [FirstName, setFirstName] = useState('');
  const [LastName, setLastName] = useState('');
  const [Email, setEmail] = useState('');
  const [Phone, setPhone] = useState('');
  const [AddressLine1, setAddressLine1] = useState('');
  const [AddressLine2, setAddressLine2] = useState('');
  const [City, setCity] = useState('');
  const [Pincode, setPincode] = useState('');

  const router = useRouter();

  //form handeling after submit button is clicked
  const onsubmit = async (e) => {
    e.preventDefault();

    const formData = {
      FirstName,
      LastName,
      Phone,
      Email,
      AddressLine1,
      AddressLine2,
      City,
      Pincode,
    };
    
    //for debugging purpose
    // console.log("Form Data Being Submitted:", formData);

    try {
      const response = await axios.post('/api/users/userData', formData);
      // console.log("Form data submitted successfully:", response.data);    //for debugging
      // console.log(formData.Email)     //for debugging
      router.push(`/verifyEmail?email=${formData.Email}`);   //route to verification page with email 

    } catch (error) {
      console.error("Error in submitting data:", error);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <form
        onSubmit={onsubmit}
        className="bg-white shadow-md rounded-lg px-8 pt-6 pb-8 mb-4 w-full max-w-md"
      >
        <h2 className="text-2xl font-bold text-gray-700 text-center mb-6">
          Submit Your Details
        </h2>

        <div className="mb-4">
          <input
            type="text"
            placeholder="First Name"
            value={FirstName}
            onChange={(e) => setFirstName(e.target.value)}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>

        <div className="mb-4">
          <input
            type="text"
            placeholder="Last Name"
            value={LastName}
            onChange={(e) => setLastName(e.target.value)}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>

        <div className="mb-4">
          <input
            type="email"
            placeholder="Email"
            value={Email}
            onChange={(e) => setEmail(e.target.value)}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>

        <div className="mb-4">
          <input
            type="text"
            placeholder="Phone"
            value={Phone}
            onChange={(e) => setPhone(e.target.value)}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>

        <div className="mb-4">
          <input
            type="text"
            placeholder="Address Line 1"
            value={AddressLine1}
            onChange={(e) => setAddressLine1(e.target.value)}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>

        <div className="mb-4">
          <input
            type="text"
            placeholder="Address Line 2"
            value={AddressLine2}
            onChange={(e) => setAddressLine2(e.target.value)}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>

        <div className="mb-4">
          <input
            type="text"
            placeholder="City"
            value={City}
            onChange={(e) => setCity(e.target.value)}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>

        <div className="mb-4">
          <input
            type="text"
            placeholder="Pincode"
            value={Pincode}
            onChange={(e) => setPincode(e.target.value)}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>

        <div className="flex items-center justify-center">
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default MyFormComponent;

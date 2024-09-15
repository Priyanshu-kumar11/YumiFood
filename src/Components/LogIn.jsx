// import React, { useState } from 'react'
// import { Link } from 'react-router-dom';
// import { useAuth0 } from "@auth0/auth0-react";

// const LogIn = () => {
//   const [formData, setFormData] = useState({
//     fullName: '',
//     email: '',
//     mobile: '',
//     password: '',
//   });

//   const handleChange = (e) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value,
//     });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     const { fullName, email, mobile, password } = formData;

//     // Check if any field is empty
//     if (!fullName || !email || !mobile || !password) {
//       alert('Please fill out all fields');
//     } else {
//       // Proceed with form submission or other logic
//       alert('Form submitted successfully');
//     }
//   };

//   const { loginWithRedirect,user } = useAuth0();
//   console.log(user)

//   return (
//     <div className="flex justify-center items-center h-screen">
//       <div className="lg:w-2/6 md:w-1/2 bg-gray-100 rounded-lg p-8 flex flex-col w-full">
//         <h2 className="text-gray-900 text-lg font-medium title-font mb-5">Log In</h2>
//         <form onSubmit={handleSubmit}>
//           <div className="relative mb-4">
//             <label htmlFor="full-name" className="leading-7 text-sm text-gray-600">
//               Full Name
//             </label>
//             <input
//               type="text"
//               id="full-name"
//               name="fullName"
//               value={formData.fullName}
//               onChange={handleChange}
//               className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
//             />
//           </div>
//           <div className="relative mb-4">
//             <label htmlFor="email" className="leading-7 text-sm text-gray-600">
//               Email
//             </label>
//             <input
//               type="email"
//               name="email"
//               id="email"
//               value={formData.email}
//               onChange={handleChange}
//               className="w-full rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
//             />
//           </div>
//           <div className="relative mb-4">
//             <label htmlFor="mobile" className="leading-7 text-sm text-gray-600">
//               Mobile
//             </label>
//             <input
//               type="text"
//               name="mobile"
//               value={formData.mobile}
//               onChange={handleChange}
//               className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
//             />
//           </div>
//           <div className="relative mb-4">
//             <label htmlFor="password" className="leading-7 text-sm text-gray-600">
//               Password
//             </label>
//             <input
//               type="password"
//               name="password"
//               value={formData.password}
//               onChange={handleChange}
//               className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
//             />
//           </div>
//           <button
//             type="submit"
//             className="text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg"
//             onClick={() => loginWithRedirect()}
//           >
//             Log In
//           </button>
//         </form>
//         <p className="mt-4 text-center text-sm">
//           Don't have an account? <Link to="/signin" className="text-indigo-500 hover:underline">Click here</Link>
//         </p>
//       </div>
//     </div>
//   )
// }

// export default LogIn
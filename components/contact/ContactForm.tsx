"use client";
import React, { useState } from "react";

// Array of countries for the dropdown
const countries = [
 "United States",
 "Canada",
 "United Kingdom",
 "Germany",
 "France",
 "Australia",
 "Japan",
 "India",
 "Brazil",
 "South Africa",
];

const ContactForm = () => {
 // State to hold all form data
 const [formData, setFormData] = useState({
  firstName: "",
  lastName: "",
  company: "",
  jobTitle: "",
  email: "",
  country: "",
  reach: "careers",
  details: "",
 });

 // State to hold validation errors
 const [errors, setErrors] = useState<{ [key: string]: string }>({});

 // Generic change handler for all inputs, textareas, and selects
 const handleChange = (
  e: React.ChangeEvent<
   HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
  >
 ) => {
  const { name, value } = e.target;
  setFormData((prev) => ({
   ...prev,
   [name]: value,
  }));

  // Clear the error for this field when the user starts typing
  if (errors[name]) {
   setErrors((prev) => ({
    ...prev,
    [name]: "",
   }));
  }
 };

 // Validation logic
 const validateForm = () => {
  const newErrors: { [key: string]: string } = {};

  if (!formData.firstName)
   newErrors.firstName = "Please complete this required field.";
  if (!formData.lastName)
   newErrors.lastName = "Please complete this required field.";
  if (!formData.email) newErrors.email = "Please complete this required field.";
  if (!formData.country)
   newErrors.country = "Please complete this required field.";
  if (!formData.details)
   newErrors.details = "Please complete this required field.";

  // Basic email format check (optional but good)
  if (formData.email && !/\S+@\S+\.\S+/.test(formData.email)) {
   newErrors.email = "Please enter a valid email address.";
  }

  return newErrors;
 };

 // Handle form submission
 const handleSubmit = (e: React.FormEvent) => {
  e.preventDefault();
  const formErrors = validateForm();
  if (Object.keys(formErrors).length > 0) {
   setErrors(formErrors);
  } else {
   // Successful submission
   console.log("Form Submitted:", formData);
   setErrors({});
   // Here you would typically send the data to your backend
  }
 };

 // Helper function to get input border color
 const getBorderClass = (fieldName: string) => {
  return errors[fieldName]
   ? "border-red-500"
   : "border-gray-700 focus:ring-white/50";
 };

 return (
  <div className="bg-black min-h-screen  w-full p-4 sm:p-8 flex items-center md:justify-start justify-center font-sans">
   {/* This is the main component card */}
   <div className="bg-[#1C1C1C] text-white p-16 sm:p-16 rounded-xl max-w-[592px] container ">
    {/* Header Section */}
    <h2 className="text-3xl font-light mb-4">Get in touch with Scale</h2>
    <p className="text-white mb-8">
     Have an inquiry for us? Please select a team you would like to reach and
     provide our information below.
     <br />
     <br />
     If you would like to get in touch with our sales team, please visit{" "}
     <a href="#" className="text-white underline">
      scale.com/demo
     </a>
     .
    </p>

    {/* Form Section */}
    <form onSubmit={handleSubmit} noValidate>
     {/* Form Row 1: First Name & Last Name */}
     <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-5 mb-5">
      <div>
       <input
        type="text"
        id="firstName"
        name="firstName"
        value={formData.firstName}
        onChange={handleChange}
        placeholder="First name*"
        className={`w-full bg-[#2A2A2A] border rounded-md px-4 py-3 placeholder-gray-500 focus:outline-none focus:ring-2 ${getBorderClass(
         "firstName"
        )}`}
       />
       {errors.firstName && (
        <p className="text-red-500 text-sm mt-1">{errors.firstName}</p>
       )}
      </div>
      <div>
       <input
        type="text"
        id="lastName"
        name="lastName"
        value={formData.lastName}
        onChange={handleChange}
        placeholder="Last name*"
        className={`w-full bg-[#2A2A2A] border rounded-md px-4 py-3 placeholder-gray-500 focus:outline-none focus:ring-2 ${getBorderClass(
         "lastName"
        )}`}
       />
       {errors.lastName && (
        <p className="text-red-500 text-sm mt-1">{errors.lastName}</p>
       )}
      </div>
     </div>

     {/* Form Row 2: Company & Job Title */}
     <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-5 mb-5">
      <div>
       <input
        type="text"
        id="company"
        name="company"
        value={formData.company}
        onChange={handleChange}
        placeholder="Company name"
        className="w-full bg-[#2A2A2A] border border-gray-700 rounded-md px-4 py-3 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white/50"
       />
      </div>
      <div>
       <input
        type="text"
        id="jobTitle"
        name="jobTitle"
        value={formData.jobTitle}
        onChange={handleChange}
        placeholder="Job title"
        className="w-full bg-[#2A2A2A] border border-gray-700 rounded-md px-4 py-3 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white/50"
       />
      </div>
     </div>

     {/* Form Row 3: Work Email */}
     <div className="mb-5">
      <input
       type="email"
       id="email"
       name="email"
       value={formData.email}
       onChange={handleChange}
       placeholder="Work email*"
       className={`w-full bg-[#2A2A2A] border rounded-md px-4 py-3 placeholder-gray-500 focus:outline-none focus:ring-2 ${getBorderClass(
        "email"
       )}`}
      />
      {errors.email && (
       <p className="text-red-500 text-sm mt-1">{errors.email}</p>
      )}
     </div>

     {/* Form Row 4: Country */}
     <div className="mb-6">
      <select
       id="country"
       name="country"
       value={formData.country}
       onChange={handleChange}
       className={`w-full bg-[#2A2A2A] appearance-none border rounded-md px-4 py-3 focus:outline-none focus:ring-2 ${getBorderClass(
        "country"
       )} ${formData.country === "" ? "text-gray-500" : "text-white"}`}>
       <option value="" disabled>
        Country*
       </option>
       {countries.map((countryName) => (
        <option key={countryName} value={countryName} className="text-white">
         {countryName}
        </option>
       ))}
      </select>
      {errors.country && (
       <p className="text-red-500 text-sm mt-1">{errors.country}</p>
      )}
     </div>

     {/* Form Row 5: Radio Button Group */}
     <div className="mb-6">
      <label className="block text-gray-300 mb-3">
       Who are you trying to reach?*
      </label>
      <div className="space-y-3">
       {["Careers", "Partnerships", "Press", "Support", "Other"].map(
        (option) => (
         <div key={option} className="flex items-center">
          <input
           type="radio"
           id={option.toLowerCase()}
           name="reach"
           value={option}
           checked={formData.reach === option}
           onChange={handleChange}
           className="accent-white h-4 w-4 bg-transparent border-gray-600"
          />
          <label htmlFor={option.toLowerCase()} className="ml-3 text-gray-300">
           {option}
          </label>
         </div>
        )
       )}
      </div>
     </div>

     {/* Form Row 6: Message Textarea */}
     <div className="mb-6">
      <textarea
       id="details"
       name="details"
       value={formData.details}
       onChange={handleChange}
       placeholder="Please provide details on your project.*"
       rows={5}
       className={`w-full bg-[#2A2A2A] border rounded-md px-4 py-3 placeholder-gray-500 focus:outline-none focus:ring-2 ${getBorderClass(
        "details"
       )}`}></textarea>
      {errors.details && (
       <p className="text-red-500 text-sm mt-1">{errors.details}</p>
      )}
     </div>

     {/* Footer & Submit Button */}
     <div>
      <p className="text-gray-400 text-sm mb-6">
       By submitting this form, your information will be processed in accordance
       with our{" "}
       <a href="#" className="text-white">
        <strong>Privacy Policy</strong>
       </a>
       .
      </p>
      <button
       type="submit"
       className="bg-white cursor-pointer text-black font-medium px-5 py-2 rounded-md hover:bg-gray-200 transition-colors duration-200">
       Submit →
      </button>
     </div>
    </form>
   </div>
  </div>
 );
};

export default ContactForm;

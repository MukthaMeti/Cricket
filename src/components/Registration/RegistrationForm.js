import React, { useState } from 'react';

const RegistrationForm = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    age: '',
    email: '',
    contactNumber: '',
    role: '',
    teamName: '',
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const validate = () => {
    let formErrors = {};
    if (!formData.fullName) formErrors.fullName = "Full name is required";
    if (!formData.age) formErrors.age = "Age is required";
    else if (isNaN(formData.age) || formData.age <= 0) formErrors.age = "Please enter a valid age";
    
    if (!formData.email) {
      formErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      formErrors.email = "Email is invalid";
    }
    
    if (!formData.contactNumber) {
      formErrors.contactNumber = "Contact number is required";
    } else if (!/^\d{10}$/.test(formData.contactNumber)) {
      formErrors.contactNumber = "Please enter a valid 10-digit contact number";
    }
    
    if (!formData.role) formErrors.role = "Please select your role in the organization";
    
    if (!formData.teamName && formData.role === 'Player') {
      formErrors.teamName = "Team name is required for players";
    }

    setErrors(formErrors);
    return Object.keys(formErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      alert("Registration successful!");
      // Add your form submission logic here (e.g., send data to server)
    }
  };

  return (
    <div className="registration-form">
      <h2>Registration</h2>
      <form onSubmit={handleSubmit}>
        {/* Full Name field */}
        <div>
          <label htmlFor="fullName">Full Name:</label>
          <input
            type="text"
            id="fullName"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
          />
          {errors.fullName && <p className="error">{errors.fullName}</p>}
        </div>

        {/* Age field */}
        <div>
          <label htmlFor="age">Age:</label>
          <input
            type="number"
            id="age"
            name="age"
            value={formData.age}
            onChange={handleChange}
          />
          {errors.age && <p className="error">{errors.age}</p>}
        </div>

        {/* Email field */}
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
          {errors.email && <p className="error">{errors.email}</p>}
        </div>

        {/* Contact Number field */}
        <div>
          <label htmlFor="contactNumber">Contact Number:</label>
          <input
            type="tel"
            id="contactNumber"
            name="contactNumber"
            value={formData.contactNumber}
            onChange={handleChange}
          />
          {errors.contactNumber && <p className="error">{errors.contactNumber}</p>}
        </div>

        {/* Role selection */}
        <div>
          <label htmlFor="role">Role:</label>
          <select id="role" name="role" value={formData.role} onChange={handleChange}>
            <option value="">Select your role</option>
            <option value="Player">Player</option>
            <option value="Coach">Coach</option>
            <option value="Umpire">Umpire</option>
            <option value="Organizer">Organizer</option>
            <option value="Fan">Fan</option>
          </select>
          {errors.role && <p className="error">{errors.role}</p>}
        </div>

        {/* Team Name field (for Players) */}
        {formData.role === 'Player' && (
          <div>
            <label htmlFor="teamName">Team Name:</label>
            <input
              type="text"
              id="teamName"
              name="teamName"
              value={formData.teamName}
              onChange={handleChange}
            />
            {errors.teamName && <p className="error">{errors.teamName}</p>}
          </div>
        )}

        {/* Submit button */}
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default RegistrationForm;
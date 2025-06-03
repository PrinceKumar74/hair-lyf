import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { registerUser } from '../../../store/slice/authSlice';
import { Navigation } from 'lucide-react';

const Register = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    phone: ''
  });
  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isLoading, error } = useSelector((state) => state.auth);

  const validateField = (name, value) => {
    switch (name) {
      case 'name':
        if (!value.trim()) {
          return 'Name is required';
        } else if (value.trim().length < 2) {
          return 'Name must be at least 2 characters long';
        } else if (value.trim().length > 50) {
          return 'Name must be less than 50 characters';
        } else if (!/^[a-zA-Z\s]*$/.test(value)) {
          return 'Name can only contain letters and spaces';
        }
        break;

      case 'email':
        if (!value) {
          return 'Email is required';
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
          return 'Please enter a valid email address';
        } else if (value.length > 100) {
          return 'Email must be less than 100 characters';
        }
        break;

      case 'password':
        if (!value) {
          return 'Password is required';
        } else if (value.length < 6) {
          return 'Password must be at least 6 characters long';
        } else if (value.length > 50) {
          return 'Password must be less than 50 characters';
        } else if (!/(?=.*[a-z])/.test(value)) {
          return 'Password must contain at least one lowercase letter';
        } else if (!/(?=.*[A-Z])/.test(value)) {
          return 'Password must contain at least one uppercase letter';
        } else if (!/(?=.*\d)/.test(value)) {
          return 'Password must contain at least one number';
        } else if (!/(?=.*[@$!%*?&])/.test(value)) {
          return 'Password must contain at least one special character (@$!%*?&)';
        }
        break;

      case 'phone':
        if (!value) {
          return 'Phone number is required';
        } else if (!/^\d{10}$/.test(value.replace(/\D/g, ''))) {
          return 'Please enter a valid 10-digit phone number';
        }
        break;

      default:
        return '';
    }
    return '';
  };

  const validateForm = () => {
    const newErrors = {};
    Object.keys(formData).forEach(key => {
      const error = validateField(key, formData[key]);
      if (error) {
        newErrors[key] = error;
      }
    });
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    // Validate field on change if it's been touched
    if (touched[name]) {
      const error = validateField(name, value);
      setErrors(prev => ({
        ...prev,
        [name]: error
      }));
    }
  };

  const handleBlur = (e) => {
    const { name, value } = e.target;
    setTouched(prev => ({
      ...prev,
      [name]: true
    }));
    const error = validateField(name, value);
    setErrors(prev => ({
      ...prev,
      [name]: error
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch(registerUser(formData))
      .unwrap()
      .then(() => {
        navigate('/verify-with-otp', { state: { phone: formData.phone } });
      })
      .catch((err) => {
        console.error('Registration failed:', err);
      });
    
    // Mark all fields as touched
    const allTouched = Object.keys(formData).reduce((acc, key) => ({
      ...acc,
      [key]: true
    }), {});
    setTouched(allTouched);

    if (!validateForm()) {
      return;
    }

    try {
      const response = await fetch('https://hairlyf-backend-api.onrender.com/api/auth/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || 'Registration failed');
      }

      // If registration is successful, navigate to OTP verification
      navigate('/verify-with-otp', { 
        state: { 
          email: formData.email,
          phone: formData.phone 
        } 
      });
    } catch (err) {
      setErrors(prev => ({
        ...prev,
        submit: err.message || 'Registration failed. Please try again.'
      }));
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-[90vh]">
      <div className="w-full max-w-md px-6 py-8">
        <h1 className="text-3xl font-bold text-center mb-2">Register</h1>
        <p className="text-gray-500 text-center mb-8">
          Create your account to get started. It only takes a minute!
        </p>
        {(error || errors.submit) && (
          <div className="mb-6 p-3 bg-red-100 text-red-700 rounded text-sm">
            {error?.message || errors.submit || 'Registration failed'}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="name">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              onBlur={handleBlur}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
              required
            />
            {touched.name && errors.name && (
              <p className="mt-1 text-sm text-red-600">{errors.name}</p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="email">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              onBlur={handleBlur}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
              required
            />
            {touched.email && errors.email && (
              <p className="mt-1 text-sm text-red-600">{errors.email}</p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="password">
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              onBlur={handleBlur}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
              required
            />
            {touched.password && errors.password && (
              <p className="mt-1 text-sm text-red-600">{errors.password}</p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="phone">
              Phone Number
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              onBlur={handleBlur}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
              required
            />
            {touched.phone && errors.phone && (
              <p className="mt-1 text-sm text-red-600">{errors.phone}</p>
            )}
          </div>

          <button
            type="submit"
            className="w-full bg-[#D0764F] text-white py-3 px-4 rounded-lg hover:bg-orange-700 transition-colors font-medium"
            disabled={isLoading}
          >
            {isLoading ? 'Registering...' : 'Register'}
          </button>
        </form>

        <div className="mt-6 text-center">
          <p className="text-sm text-gray-600">
            Already have an account?{' '}
            <a href="/login" className="text-[#D0764F] font-medium hover:underline">
              Login
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
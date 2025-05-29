import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useLocation } from 'react-router-dom';
import { loginUser } from '../../../store/slice/authSlice';
import { Eye, EyeOff, Mail, Lock, AlertCircle } from 'lucide-react';

const InputIcon = ({ icon: Icon }) => (
  <div className="absolute left-0 top-2.5 pl-3.5 pointer-events-none">
    <Icon className="h-[18px] w-[18px] text-gray-400" strokeWidth={1.8} />
  </div>
);

const ErrorMessage = ({ message }) => (
  <p className="mt-1.5 text-sm text-red-600 flex items-center gap-1.5">
    <AlertCircle className="h-4 w-4 shrink-0" />
    <span>{message}</span>
  </p>
);

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});
  const [showPassword, setShowPassword] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const { isLoading, error } = useSelector((state) => state.auth);

  const from = location.state?.from || '/';

  const validateField = (name, value) => {
    switch (name) {
      case 'email':
        if (!value) {
          return 'Email is required';
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
          return 'Please enter a valid email address';
        }
        break;

      case 'password':
        if (!value) {
          return 'Password is required';
        } else if (value.length < 6) {
          return 'Password must be at least 6 characters long';
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
    
    const allTouched = Object.keys(formData).reduce((acc, key) => ({
      ...acc,
      [key]: true
    }), {});
    setTouched(allTouched);

    if (!validateForm()) {
      return;
    }

    try {
      await dispatch(loginUser(formData)).unwrap();
      navigate(from, { replace: true });
    } catch (err) {
      setErrors(prev => ({
        ...prev,
        submit: err.message || 'Login failed. Please check your credentials.'
      }));
    }
  };

  const handleForgotPassword = () => {
    navigate('/forgot-password', { state: { email: formData.email } });
  };

  return (
    <div className="w-full max-w-[480px]">
      <div className="bg-white rounded-2xl shadow-[0_4px_20px_rgba(0,0,0,0.08)] overflow-hidden">
        {/* Header Section */}
        <div className="px-8 sm:px-10 pt-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 text-center">
            Welcome Back
          </h2>
          <p className="mt-2 text-center text-sm text-gray-600">
            Sign in to your account to continue
          </p>
        </div>

        {/* Error Message */}
        {(error || errors.submit) && (
          <div className="mx-8 sm:mx-10 mt-6">
            <div className="p-4 bg-red-50 rounded-xl flex items-start gap-3">
              <AlertCircle className="h-5 w-5 text-red-500 mt-0.5 shrink-0" />
              <p className="text-sm text-red-700 leading-tight">
                {error?.message || errors.submit || 'Invalid credentials'}
              </p>
            </div>
          </div>
        )}

        {/* Login Form */}
        <div className="px-8 sm:px-10 py-8">
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Email Field */}
            <div className="space-y-1.5">
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Email Address
              </label>
              <div className="relative">
                <InputIcon icon={Mail} />
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  value={formData.email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={`block w-full pl-10 pr-4 py-3 text-gray-900 text-sm rounded-lg border ${
                    touched.email && errors.email 
                      ? 'border-red-300 ring-red-100' 
                      : 'border-gray-300 hover:border-gray-400'
                  } placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 transition-all duration-200`}
                  placeholder="Enter your email"
                />
                {touched.email && errors.email && (
                  <ErrorMessage message={errors.email} />
                )}
              </div>
            </div>

            {/* Password Field */}
            <div className="space-y-1.5">
              <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                Password
              </label>
              <div className="relative">
                <InputIcon icon={Lock} />
                <input
                  id="password"
                  name="password"
                  type={showPassword ? "text" : "password"}
                  autoComplete="current-password"
                  value={formData.password}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={`block w-full pl-10 pr-10 py-3 text-gray-900 text-sm rounded-lg border ${
                    touched.password && errors.password 
                      ? 'border-red-300 ring-red-100' 
                      : 'border-gray-300 hover:border-gray-400'
                  } placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 transition-all duration-200`}
                  placeholder="Enter your password"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-0 top-2.5 pr-3 text-gray-400 hover:text-gray-600 transition-colors"
                >
                  {showPassword ? (
                    <EyeOff className="h-[18px] w-[18px]" strokeWidth={1.8} />
                  ) : (
                    <Eye className="h-[18px] w-[18px]" strokeWidth={1.8} />
                  )}
                </button>
                {touched.password && errors.password && (
                  <ErrorMessage message={errors.password} />
                )}
              </div>
            </div>

            {/* Remember Me & Forgot Password */}
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input
                  id="remember-me"
                  name="remember-me"
                  type="checkbox"
                  className="h-4 w-4 text-orange-500 focus:ring-orange-500/20 border-gray-300 rounded cursor-pointer transition-all duration-200"
                />
                <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-700 select-none cursor-pointer">
                  Remember me
                </label>
              </div>

              <button
                type="button"
                onClick={handleForgotPassword}
                className="text-sm font-medium text-orange-600 hover:text-orange-700 focus:outline-none focus:underline transition-colors"
              >
                Forgot password?
              </button>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isLoading}
              className="w-full flex justify-center items-center px-4 py-2.5 text-sm font-semibold text-white bg-orange-600 hover:bg-orange-700 rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-orange-600"
            >
              {isLoading ? (
                <div className="flex items-center">
                  <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  <span>Signing in...</span>
                </div>
              ) : (
                'Sign in'
              )}
            </button>
          </form>

          {/* Divider */}
          <div className="relative mt-8">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-200"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-2 bg-white text-gray-500">
                Don't have an account?
              </span>
            </div>
          </div>

          {/* Register Button */}
          <button
            onClick={() => navigate('/register')}
            className="mt-6 w-full px-4 py-2.5 text-sm font-semibold text-orange-600 bg-white border-2 border-orange-200 rounded-lg hover:bg-orange-50 hover:border-orange-300 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500"
          >
            Create new account
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;

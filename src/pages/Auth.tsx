import { useState } from 'react';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { Cpu, Eye, EyeOff, Lock, Mail, User } from 'lucide-react';
import Button from '../components/ui/Button';

type SignInData = {
  email: string;
  password: string;
  rememberMe?: boolean;
};

type SignUpData = {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
  terms: boolean;
};

const Auth = () => {
  const [isSignIn, setIsSignIn] = useState(true);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  
  const { register: registerSignIn, handleSubmit: handleSubmitSignIn, formState: { errors: errorsSignIn }, reset: resetSignIn } = useForm<SignInData>();
  const { register: registerSignUp, handleSubmit: handleSubmitSignUp, formState: { errors: errorsSignUp }, watch: watchSignUp, reset: resetSignUp } = useForm<SignUpData>();
  
  const onSignIn = async (data: SignInData) => {
    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    console.log('Sign in submitted:', data);
    setIsSubmitting(false);
    resetSignIn();
  };
  
  const onSignUp = async (data: SignUpData) => {
    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    console.log('Sign up submitted:', data);
    setIsSubmitting(false);
    resetSignUp();
  };
  
  const toggleAuthMode = () => {
    setIsSignIn(!isSignIn);
    resetSignIn();
    resetSignUp();
  };

  return (
    <div className="min-h-screen pt-20 flex items-center justify-center bg-gradient-to-b from-gray-900 to-gray-950">
      <div className="container-custom">
        <div className="max-w-md mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-gray-800/50 backdrop-blur-sm p-8 rounded-xl shadow-xl"
          >
            <div className="text-center mb-8">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-indigo-900/30 text-indigo-400 mb-4">
                <Cpu className="h-8 w-8" />
              </div>
              <h1 className="text-2xl md:text-3xl font-bold">
                {isSignIn ? 'Welcome Back' : 'Create an Account'}
              </h1>
              <p className="text-gray-400 mt-2">
                {isSignIn 
                  ? 'Sign in to access your Cloud Myanmar account' 
                  : 'Join Cloud Myanmar and experience the future of AI'}
              </p>
            </div>
            
            {isSignIn ? (
              <form onSubmit={handleSubmitSignIn(onSignIn)} className="space-y-6">
                <div>
                  <label htmlFor="signin-email" className="block text-sm font-medium text-gray-300 mb-1">
                    Email Address
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <Mail className="h-5 w-5 text-gray-500" />
                    </div>
                    <input
                      id="signin-email"
                      type="email"
                      {...registerSignIn('email', { 
                        required: 'Email is required',
                        pattern: {
                          value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                          message: 'Invalid email address',
                        }
                      })}
                      className={`w-full pl-10 pr-4 py-2 bg-gray-700/50 border ${errorsSignIn.email ? 'border-red-500' : 'border-gray-600'} rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500`}
                      placeholder="your.email@example.com"
                    />
                  </div>
                  {errorsSignIn.email && (
                    <p className="mt-1 text-sm text-red-500">{errorsSignIn.email.message}</p>
                  )}
                </div>
                
                <div>
                  <label htmlFor="signin-password" className="block text-sm font-medium text-gray-300 mb-1">
                    Password
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <Lock className="h-5 w-5 text-gray-500" />
                    </div>
                    <input
                      id="signin-password"
                      type={showPassword ? "text" : "password"}
                      {...registerSignIn('password', { 
                        required: 'Password is required',
                        minLength: {
                          value: 6,
                          message: 'Password must be at least 6 characters',
                        }
                      })}
                      className={`w-full pl-10 pr-10 py-2 bg-gray-700/50 border ${errorsSignIn.password ? 'border-red-500' : 'border-gray-600'} rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500`}
                      placeholder="••••••••"
                    />
                    <button
                      type="button"
                      className="absolute inset-y-0 right-0 pr-3 flex items-center"
                      onClick={() => setShowPassword(!showPassword)}
                    >
                      {showPassword ? (
                        <EyeOff className="h-5 w-5 text-gray-500" />
                      ) : (
                        <Eye className="h-5 w-5 text-gray-500" />
                      )}
                    </button>
                  </div>
                  {errorsSignIn.password && (
                    <p className="mt-1 text-sm text-red-500">{errorsSignIn.password.message}</p>
                  )}
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <input
                      id="remember-me"
                      type="checkbox"
                      {...registerSignIn('rememberMe')}
                      className="h-4 w-4 bg-gray-700 border-gray-600 rounded text-indigo-600 focus:ring-indigo-500"
                    />
                    <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-300">
                      Remember me
                    </label>
                  </div>
                  
                  <a href="#" className="text-sm text-indigo-400 hover:text-indigo-300">
                    Forgot password?
                  </a>
                </div>
                
                <Button
                  type="submit"
                  variant="primary"
                  isLoading={isSubmitting}
                  className="w-full"
                >
                  Sign In
                </Button>
                
                <div className="text-center mt-4">
                  <p className="text-sm text-gray-400">
                    Don't have an account?{' '}
                    <button
                      type="button"
                      onClick={toggleAuthMode}
                      className="text-indigo-400 hover:text-indigo-300 font-medium"
                    >
                      Sign up
                    </button>
                  </p>
                </div>
              </form>
            ) : (
              <form onSubmit={handleSubmitSignUp(onSignUp)} className="space-y-6">
                <div>
                  <label htmlFor="signup-name" className="block text-sm font-medium text-gray-300 mb-1">
                    Full Name
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <User className="h-5 w-5 text-gray-500" />
                    </div>
                    <input
                      id="signup-name"
                      type="text"
                      {...registerSignUp('name', { required: 'Name is required' })}
                      className={`w-full pl-10 pr-4 py-2 bg-gray-700/50 border ${errorsSignUp.name ? 'border-red-500' : 'border-gray-600'} rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500`}
                      placeholder="John Doe"
                    />
                  </div>
                  {errorsSignUp.name && (
                    <p className="mt-1 text-sm text-red-500">{errorsSignUp.name.message}</p>
                  )}
                </div>
                
                <div>
                  <label htmlFor="signup-email" className="block text-sm font-medium text-gray-300 mb-1">
                    Email Address
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <Mail className="h-5 w-5 text-gray-500" />
                    </div>
                    <input
                      id="signup-email"
                      type="email"
                      {...registerSignUp('email', { 
                        required: 'Email is required',
                        pattern: {
                          value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                          message: 'Invalid email address',
                        }
                      })}
                      className={`w-full pl-10 pr-4 py-2 bg-gray-700/50 border ${errorsSignUp.email ? 'border-red-500' : 'border-gray-600'} rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500`}
                      placeholder="your.email@example.com"
                    />
                  </div>
                  {errorsSignUp.email && (
                    <p className="mt-1 text-sm text-red-500">{errorsSignUp.email.message}</p>
                  )}
                </div>
                
                <div>
                  <label htmlFor="signup-password" className="block text-sm font-medium text-gray-300 mb-1">
                    Password
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <Lock className="h-5 w-5 text-gray-500" />
                    </div>
                    <input
                      id="signup-password"
                      type={showPassword ? "text" : "password"}
                      {...registerSignUp('password', { 
                        required: 'Password is required',
                        minLength: {
                          value: 8,
                          message: 'Password must be at least 8 characters',
                        }
                      })}
                      className={`w-full pl-10 pr-10 py-2 bg-gray-700/50 border ${errorsSignUp.password ? 'border-red-500' : 'border-gray-600'} rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500`}
                      placeholder="••••••••"
                    />
                    <button
                      type="button"
                      className="absolute inset-y-0 right-0 pr-3 flex items-center"
                      onClick={() => setShowPassword(!showPassword)}
                    >
                      {showPassword ? (
                        <EyeOff className="h-5 w-5 text-gray-500" />
                      ) : (
                        <Eye className="h-5 w-5 text-gray-500" />
                      )}
                    </button>
                  </div>
                  {errorsSignUp.password && (
                    <p className="mt-1 text-sm text-red-500">{errorsSignUp.password.message}</p>
                  )}
                </div>
                
                <div>
                  <label htmlFor="signup-confirm-password" className="block text-sm font-medium text-gray-300 mb-1">
                    Confirm Password
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <Lock className="h-5 w-5 text-gray-500" />
                    </div>
                    <input
                      id="signup-confirm-password"
                      type={showPassword ? "text" : "password"}
                      {...registerSignUp('confirmPassword', { 
                        required: 'Please confirm your password',
                        validate: value => value === watchSignUp('password') || 'Passwords do not match',
                      })}
                      className={`w-full pl-10 pr-4 py-2 bg-gray-700/50 border ${errorsSignUp.confirmPassword ? 'border-red-500' : 'border-gray-600'} rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500`}
                      placeholder="••••••••"
                    />
                  </div>
                  {errorsSignUp.confirmPassword && (
                    <p className="mt-1 text-sm text-red-500">{errorsSignUp.confirmPassword.message}</p>
                  )}
                </div>
                
                <div>
                  <div className="flex items-start">
                    <div className="flex items-center h-5">
                      <input
                        id="terms"
                        type="checkbox"
                        {...registerSignUp('terms', { required: 'You must agree to the terms and conditions' })}
                        className="h-4 w-4 bg-gray-700 border-gray-600 rounded text-indigo-600 focus:ring-indigo-500"
                      />
                    </div>
                    <div className="ml-3">
                      <label htmlFor="terms" className="text-sm text-gray-300">
                        I agree to the <a href="#" className="text-indigo-400 hover:text-indigo-300">Terms of Service</a> and <a href="#" className="text-indigo-400 hover:text-indigo-300">Privacy Policy</a>
                      </label>
                      {errorsSignUp.terms && (
                        <p className="mt-1 text-sm text-red-500">{errorsSignUp.terms.message}</p>
                      )}
                    </div>
                  </div>
                </div>
                
                <Button
                  type="submit"
                  variant="primary"
                  isLoading={isSubmitting}
                  className="w-full"
                >
                  Create Account
                </Button>
                
                <div className="text-center mt-4">
                  <p className="text-sm text-gray-400">
                    Already have an account?{' '}
                    <button
                      type="button"
                      onClick={toggleAuthMode}
                      className="text-indigo-400 hover:text-indigo-300 font-medium"
                    >
                      Sign in
                    </button>
                  </p>
                </div>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Auth;
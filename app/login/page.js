"use client";
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGoogle, faFacebook } from '@fortawesome/free-brands-svg-icons';


function LoginPage() {
  return (
    <div className="loginBg min-h-screen flex items-center justify-center ">
      <div className="w-full max-w-md p-8 bg-black/30 backdrop-blur-md shadow-lg rounded-lg">
        <h2 className="text-3xl font-bold text-white mb-8 text-center">Login</h2>
        <form className="space-y-6">

          {/* Email Input */}
          <div>
            <input
              type="email"
              placeholder="Email"
              className="w-full p-3 rounded  text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
          </div>

          {/* Password Input */}
          <div>
            <input
              type="password"
              placeholder="Password"
              className="w-full p-3 rounded  text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
          </div>

          {/* Forgot Password */}
          <Link href="/forgot-password" className="text-sm text-gray-400 hover:text-white block text-center">
            Forgot your password?
          </Link>

          {/* Sign In Button */}
          <button className="w-full bg-purple-600 text-white p-3 rounded hover:bg-purple-700 transition">
            Sign in
          </button>

          {/* Sign Up Link */}
          <p className="text-sm text-gray-400 text-center">
            Don't have an account?{' '}
            <Link href="/signUp" className="text-purple-500 hover:text-purple-700">
              Sign up
            </Link>
          </p>

          {/* Divider */}
          <div className="text-center  text-gray-400 my-4">Or</div>

          <div className="justify-center flex space-x-4">
      {/* Sign in with Google */}
      <button className="bg-indigo-600 text-white p-3 rounded hover:bg-indigo-700 transition flex items-center justify-center space-x-2">
        <FontAwesomeIcon icon={faGoogle} className="w-6 h-6" />
        <span>Google</span>
      </button>

      {/* Sign up with Facebook */}
      <button className="bg-blue-600 text-white p-3 rounded hover:bg-blue-700 transition flex items-center justify-center space-x-2">
        <FontAwesomeIcon icon={faFacebook} className="w-6 h-6" />
        <span>Facebook</span>
      </button>
    </div>

        </form>
      </div>
    </div>
  );
}

export default LoginPage;

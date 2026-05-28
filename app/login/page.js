"use client";

import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa";
import Link from "next/link";

export default function SocialAuth({ mode = "signin" }) {
  const actionText = mode === "signup" ? "Sign up" : "Sign in";
  
  return (
    <div className="w-full max-w-md mx-auto px-6 py-8">
      <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
        <div className="text-center mb-8">
          <h1 className="text-2xl font-bold text-gray-900 mb-2">
            {mode === "signup" ? "Create Account" : "Welcome Back"}
          </h1>
          <p className="text-gray-500 text-sm">
            {mode === "signup" 
              ? "Join Coco Delight Global Ventures" 
              : "Sign in to your Coco Delight account"}
          </p>
        </div>

        {/* Google Sign In */}
        <button
          onClick={() => console.log("Google auth")}
          className="w-full flex items-center justify-center gap-3 bg-white border border-gray-300 rounded-xl px-4 py-3.5 text-gray-700 font-medium hover:bg-gray-50 hover:border-gray-400 transition-all duration-200 mb-3 cursor-pointer"
        >
          <FcGoogle className="text-xl" />
          <span>{actionText} with Google</span>
        </button>

        {/* Facebook Sign In */}
        <button
          onClick={() => console.log("Facebook auth")}
          className="w-full flex items-center justify-center gap-3 bg-[#1877F2] rounded-xl px-4 py-3.5 text-white font-medium hover:bg-[#166fe5] transition-all duration-200 mb-6 cursor-pointer"
        >
          <FaFacebook className="text-xl" />
          <span>{actionText} with Facebook</span>
        </button>

        {/* Divider */}
        <div className="relative mb-6">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-gray-200"></div>
          </div>
          <div className="relative flex justify-center text-sm">
            <span className="bg-white px-4 text-gray-400">or</span>
          </div>
        </div>

        {/* Email Auth Link */}
        <Link
          href={mode === "signup" ? "/signup" : "/signin"}
          className="block w-full text-center py-3.5 rounded-xl border-2  border-gray-300 text-amber-600 font-semibold hover:bg-amber-50 hover:border-amber-600 transition-all duration-200"
        >
          {mode === "signup" ? "Or Sign up with Email" : "Or Sign in with Email"}
        </Link>

        {/* Toggle Sign In/Sign Up */}
        <p className="text-center mt-6 text-sm text-gray-500">
          {mode === "signup" ? (
            <>
              Already have an account?{" "}
              <Link href="/" className="text-amber-600 font-semibold hover:text-amber-700">
                Sign in
              </Link>
            </>
          ) : (
            <>
              Don&apos;t have an account?{" "}
              <Link href="/?mode=signup" className="text-amber-600 font-semibold hover:text-amber-700">
                Sign up
              </Link>
            </>
          )}
        </p>
      </div>
    </div>
  );
}
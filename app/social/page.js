

import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa";
import Link from "next/link";
import { signIn } from "@/auth";

export default function SocialAuth({ mode = "signin" }) {
  const actionText = mode === "signup" ? "Sign up" : "Sign in";

  return (
    <div className="w-full max-w-md mx-auto px-6 py-8">
      <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">

        {/* Header */}
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

        {/* Google */}
        <form
          action={ async () => {
            "use server";
            await signIn("google");
          }}
        >
          <button
            className="w-full flex items-center justify-center gap-3 border rounded-xl py-3.5 mb-3 cursor-pointer"
          >
            <FcGoogle className="text-xl" />
            <span>{actionText} with Google</span>
          </button>
        </form>
        

        {/* Facebook */}
        <button className="w-full flex items-center justify-center gap-3 bg-[#1877F2] text-white rounded-xl py-3.5 mb-6 cursor-pointer">
          <FaFacebook className="text-xl" />
          <span>{actionText} with Facebook</span>
        </button>

        {/* Divider */}
        <div className="text-center text-sm text-gray-400 mb-6">
          or
        </div>

        {/* Email Link */}
        <Link
          href="/emailPage"
          className="block w-full text-center py-3.5 rounded-xl border-2 border-gray-300 text-amber-600 font-semibold hover:bg-amber-50"
        >
          {mode === "signup"
            ? "Or Sign up with Email"
            : "Or Sign in with Email"}
        </Link>

        {/* Toggle */}
        <p className="text-center mt-6 text-sm text-gray-500">
          {mode === "signup" ? (
            <>
              Already have an account?{" "}
              <Link href="/social" className="text-amber-600 font-semibold">
                Sign in
              </Link>
            </>
          ) : (
            <>
              Don&apos;t have an account?{" "}
              <Link href="/emailPage" className="text-amber-600 font-semibold">
                Sign up
              </Link>
            </>
          )}
        </p>
      </div>
    </div>
  );
}
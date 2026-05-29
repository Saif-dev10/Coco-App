export const dynamic = "force-dynamic";

"use client";

import { useState } from "react";
import { useSearchParams } from "next/navigation";
import { TextField, IconButton, InputAdornment } from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import Link from "next/link";

export default function EmailAuthForm() {
  const searchParams = useSearchParams();
  const mode = searchParams.get("mode") || "signin";

  const isSignUp = mode === "signup";

  const [showPassword, setShowPassword] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }));
    }
  };

  const validate = () => {
    const newErrors = {};

    if (isSignUp && !formData.name.trim()) {
      newErrors.name = "Name is required";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Enter a valid email";
    }

    if (!formData.password) {
      newErrors.password = "Password is required";
    } else if (formData.password.length < 6) {
      newErrors.password = "Minimum 6 characters";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validate()) {
      console.log("AUTH DATA:", formData);
    }
  };

  return (
    <div className="w-full max-w-md mx-auto px-6 py-8">
      <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">

        {/* HEADER */}
        <div className="text-center mb-8">
          <h1 className="text-2xl font-bold text-gray-900">
            {isSignUp ? "Create Account" : "Welcome Back"}
          </h1>
          <p className="text-gray-500 text-sm mt-2">
            {isSignUp
              ? "Sign up with email"
              : "Sign in with email"}
          </p>
        </div>

        {/* FORM */}
        <form onSubmit={handleSubmit} className="space-y-4">

          {isSignUp && (
            <TextField
              fullWidth
              label="Full Name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              error={!!errors.name}
              helperText={errors.name}
            />
          )}

          <TextField
            fullWidth
            label="Email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            error={!!errors.email}
            helperText={errors.email}
          />

          <TextField
            fullWidth
            label="Password"
            name="password"
            type={showPassword ? "text" : "password"}
            value={formData.password}
            onChange={handleChange}
            error={!!errors.password}
            helperText={errors.password}
            slotProps={{
              input: {
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      onClick={() => setShowPassword(!showPassword)}
                    >
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                ),
              },
            }}
          />

          <button
            type="submit"
            className="w-full bg-amber-500 text-white py-3 rounded-xl font-semibold cursor-pointer hover:bg-amber-400 transition-all duration-200"
          >
            {isSignUp ? "Create Account" : "Sign In"}
          </button>
        </form>

        {/* BACK TO SOCIAL */}
        <div className="mt-6">
          <Link
            href="/social"
            className="block text-center border py-3 rounded-xl text-gray-700 hover:bg-gray-100 transition-all duration-200"
          >
            {isSignUp ? "Back to Social Sign Up" : "Back to Social Sign In"}
          </Link>
        </div>

        {/* TOGGLE */}
        <p className="text-center mt-6 text-sm text-gray-500">
          {isSignUp ? (
            <>
              Already have an account?{" "}
              <Link href="/emailPage?mode=signin" className="text-amber-600 font-semibold">
                Sign in
              </Link>
            </>
          ) : (
            <>
              Don&apos;t have an account?{" "}
              <Link href="/emailPage?mode=signup" className="text-amber-600 font-semibold">
                Sign up
              </Link>
            </>
          )}
        </p>

      </div>
    </div>
  );
}
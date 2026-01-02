'use client'
import { InputField } from '@/app/components/input-field';
import React from 'react';

export const ForgotPasswordForm: React.FC = () => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    alert('Forgot password form submitted');
    e.preventDefault();
  }

  return (
    <form onSubmit={handleSubmit} className="flex w-full max-w-md rounded flex-col space-y-4 bg-[#141414]/90 px-4 py-8 shadow-lg">
      <div className="flex flex-col items-center space-y-4">
        <h1 className="text-3xl font-bold">
          Forgot Password
        </h1>
        <p className="text-sm text-gray-500">
          Enter your email to reset your password.
        </p>
      </div>

      <InputField
        id="email"
        label="Email"
        placeholder="Enter your email"
        type="email"
      />

      <div className="flex flex-col-reverse space-y-2 pt-2 sm:flex-row sm:space-x-2 sm:space-y-0">
        <button
          type="submit"
          className="flex w-full items-center justify-center rounded-lg bg-red-500 hover:bg-red-600 px-4 py-2 text-sm font-semibold text-white sm:w-auto sm:px-8"
        >
          Reset Password
        </button>
      </div>
    </form>
  )
}

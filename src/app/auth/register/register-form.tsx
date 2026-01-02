'use client';

import { AuthForm } from '@/app/components/auth-form';

export default function RegisterForm() {
  const handleSubmit = (e: React.FormEvent) => {
    alert('Submit registration form');
    e.preventDefault();
  }

  return (
    <AuthForm
      formType="register"
      onSubmit={handleSubmit}
    />
  )
}

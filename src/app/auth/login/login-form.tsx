'use client';

import { AuthForm } from '@/app/components/auth-form';

export default function LoginForm() {
  const handleSubmit = (e: React.FormEvent) => {
    alert('login form submitted');
    e.preventDefault();
  }

  return (
    <AuthForm
      formType="login"
      onSubmit={handleSubmit}
    />
  )
}

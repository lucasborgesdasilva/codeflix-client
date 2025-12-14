/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';

import { useEffect } from "react";

export default function Error({ error, reset }: any) {
  useEffect(() => {
    console.log('Error component mounted');
  }, [error]);

  return (
    <div className="text-red-500">
      <h1 className="text-2xl font-bold">Users Error Page</h1>

      <div className="border border-dashed border-red-500 p-4">
        <p>Something went wrong on Users page</p>
      </div>
    </div>
  )
}

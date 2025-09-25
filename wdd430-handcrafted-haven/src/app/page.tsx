
"use client";

import { useRouter } from "next/navigation";

export default function HomePage() {
  const router = useRouter();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-4xl font-bold text-blue-700 mb-4">
        Welcome to the Home Page
      </h1>
      <p className="text-lg text-gray-600 mb-8">
        Handcrafted Haven – Your place for unique creations!
      </p>
      <div className="w-full max-w-xs bg-white p-6 rounded shadow flex flex-col gap-4">
        <button
          className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
          onClick={() => router.push("/login")}
        >
          Login with Email
        </button>
      </div>
    </div>
  );
}

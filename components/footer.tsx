import React from "react";

export default function Footer() {
  return (
    <footer className="mb-10 px-4 text-center text-gray-500">
      <small className="mb-2 block text-xs">
        &copy; {new Date().getFullYear()} Onkar More. All rights reserved.
      </small>
      <p className="text-xs">
        <span className="font-semibold">Built with:</span> Next.js, TypeScript,
        Tailwind CSS, Framer Motion, React Email, and Vercel.
      </p>
    </footer>
  );
}

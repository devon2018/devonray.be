"use client";
import { useEffect } from "react";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.log([error]);
  }, [error]);

  return (
    <html lang="en">
      <body>
        <div className="flex items-center justify-center min-h-[600px] w-screen flex-col text-center">
          <h2 className="text-3xl mb-10 font-medium">
            Oops, something unexpected went wrong!
          </h2>
          <p>
            There seems to have been an issue loading that page. The link you
            followed may have changed.
          </p>
          <button onClick={() => reset()} className="mt-6 font-semibold">
            Retry
          </button>
        </div>
      </body>
    </html>
  );
}

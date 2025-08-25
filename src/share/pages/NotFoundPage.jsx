// src/shared/pages/NotFoundPage.jsx
import { Link } from "react-router-dom";
import { motion, useReducedMotion } from "framer-motion";

export default function NotFoundPage() {
  const reduceMotion = useReducedMotion();

  return (
    <main
      aria-labelledby="nf-title"
      className="relative flex min-h-[100vh] items-center justify-center px-4 py-14
                 bg-gradient-to-b from-gray-50 to-white dark:from-neutral-900 dark:to-neutral-950"
    >
      {/* decor gradient blob */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 [mask-image:radial-gradient(40rem_20rem_at_50%_20%,black,transparent)]"
      >
        <div
          className="absolute left-1/2 top-10 -translate-x-1/2 h-64 w-[42rem] rounded-full blur-3xl
                        bg-gradient-to-tr from-indigo-200 via-purple-200 to-pink-200
                        dark:from-indigo-500/20 dark:via-fuchsia-500/20 dark:to-pink-500/20"
        />
      </div>

      <section className="mx-auto w-full max-w-xl text-center">
        <motion.h1
          id="nf-title"
          initial={{ opacity: 0, y: 12, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="text-6xl font-extrabold tracking-tight text-gray-900 dark:text-gray-100 sm:text-7xl"
        >
          404
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.5 }}
          className="mx-auto mt-4 max-w-md text-base text-gray-600 dark:text-gray-400 sm:text-lg"
        >
          Oops! The page you’re looking for doesn’t exist.
        </motion.p>

        {/* subtle floating illustration */}
        <motion.svg
          aria-hidden
          viewBox="0 0 200 60"
          className="mx-auto mt-8 h-16 w-auto text-gray-300 dark:text-neutral-700"
          initial={false}
          animate={reduceMotion ? {} : { y: [0, -6, 0], rotate: [0, -1.5, 0] }}
          transition={
            reduceMotion
              ? {}
              : { duration: 4, repeat: Infinity, ease: "easeInOut" }
          }
        >
          <g fill="currentColor">
            <circle cx="30" cy="30" r="6" />
            <rect x="55" y="24" width="30" height="12" rx="6" />
            <circle cx="110" cy="30" r="6" />
            <rect x="135" y="24" width="30" height="12" rx="6" />
          </g>
        </motion.svg>

        <div className="mt-10 flex items-center justify-center gap-3">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-2xl px-4 py-2.5 text-sm font-medium
                       shadow-sm ring-1 ring-black/5
                       bg-black text-white hover:bg-gray-800 active:bg-gray-900
                       focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-black
                       dark:bg-white dark:text-black dark:hover:bg-gray-200 dark:focus-visible:ring-white"
          >
            Back to Home
          </Link>

          <button
            type="button"
            onClick={() =>
              window.history.length > 1
                ? window.history.back()
                : (window.location.href = "/")
            }
            className="inline-flex items-center justify-center rounded-2xl px-4 py-2.5 text-sm font-medium
                       text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white
                       ring-1 ring-gray-200 hover:ring-gray-300 dark:ring-neutral-800 dark:hover:ring-neutral-700"
          >
            Go Back
          </button>
        </div>

        {/* helper links */}
        <div className="mt-6 text-xs text-gray-500 dark:text-gray-500">
          <span>Need help? </span>
          <Link
            to="/contact"
            className="underline underline-offset-4 hover:no-underline"
          >
            Contact support
          </Link>
        </div>
      </section>
    </main>
  );
}

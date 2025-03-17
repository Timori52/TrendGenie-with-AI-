"use client"

import { motion } from "framer-motion"
import { ThemeToggle } from "./theme-toggle"
import Link from "next/link"

export function Header() {
  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed top-4 left-4 right-4 z-50"
    >
      <div className="mx-auto max-w-5xl">
        <div className="backdrop-blur-md bg-white/30 dark:bg-gray-900/30 rounded-2xl shadow-lg border border-white/20 dark:border-gray-800/20">
          <div className="flex items-center justify-between px-6 py-4">
            {/* Logo and Brand */}
            <div className="flex flex-col items-center">
              <Link href="/" className="flex items-center">
                <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-blue-600 dark:from-purple-400 dark:to-blue-400">
                  TrendGenie AI
                </span>
              </Link>
              <p className="ml-4 text-sm text-gray-600 dark:text-gray-300 hidden md:block">
              <svg width="400.4000244140625" height="262.60483567199367" viewBox="0 0 414.72506156229906 272" class="looka-1j8o68f"><defs id="SvgjsDefs4986"><linearGradient id="SvgjsLinearGradient4997"><stop id="SvgjsStop4998" stop-color="#2d388a" offset="0"></stop><stop id="SvgjsStop4999" stop-color="#00aeef" offset="1"></stop></linearGradient></defs><g id="SvgjsG4987" featurekey="rootContainer" transform="matrix(1,0,0,1,0,0)" fill="#fb9c2a"><path xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" d="M5,65 L207.5,0 L410, 65 L207.5, 10 z M5,192 L207.5,272 L410,187 L207.5, 262 z"></path></g><g id="SvgjsG4988" featurekey="sloganFeature-0" transform="matrix(1.156508912442853,0,0,1.156508912442853,66.70471042614916,156.34391278637952)" fill="#137dc5"><path d="M6.38 11.9 c1.52 0.72 3.5 1.86 3.5 3.92 c0 0.6 -0.1 1.76 -0.76 2.74 c-0.74 1.1 -1.9 1.64 -3.5 1.64 c-1.7 0 -3.68 -0.82 -4.3 -2.68 c-0.02 -0.06 0 -0.12 0.06 -0.16 l1.84 -1.58 c0.08 -0.06 0.2 -0.06 0.26 0.04 c0.04 0.1 0.12 0.26 0.22 0.46 c0.3 0.62 1.02 1.24 1.82 1.24 c0.62 0 1.46 -0.34 1.46 -1.3 c0 -0.92 -1.26 -1.44 -2.04 -1.74 c-0.9 -0.36 -1.82 -0.82 -2.6 -1.5 c-0.82 -0.76 -1.22 -1.6 -1.22 -2.6 c0 -2.5 2.3 -3.76 4.48 -3.76 c1.72 0 3 0.9 3.84 2.68 c0.04 0.08 0 0.18 -0.06 0.22 l-1.78 1.24 c-0.08 0.04 -0.12 0.04 -0.2 -0.06 c-0.68 -0.98 -1.28 -1.44 -2.08 -1.44 c-0.42 0 -1.4 0.16 -1.4 0.9 c0 0.9 1.66 1.36 2.46 1.74 z M2.74 17.42 c0.5 1 1.88 1.58 3 1.58 c1.46 0 2.64 -1 2.8 -2.52 c0.2 -1.86 -1.26 -2.66 -2.7 -3.38 l-0.64 -0.28 c-1.48 -0.66 -2.56 -1.16 -2.56 -2.54 c0 -1.52 1.4 -2.22 2.78 -2.22 c1.26 0 1.92 0.74 2.26 1.2 c0.12 0.16 0.32 0.02 0.2 -0.14 c-0.34 -0.42 -1.06 -1.3 -2.46 -1.3 c-1.58 0 -3.02 0.78 -3.02 2.46 c0 1.5 1.2 2.08 2.72 2.78 l0.62 0.3 c1.98 0.94 2.7 1.82 2.54 3.1 c-0.3 2.04 -1.86 2.3 -2.54 2.3 c-1.5 0 -2.5 -0.9 -2.8 -1.46 c-0.1 -0.1 -0.24 0 -0.2 0.12 z M15.681999999999999 6.800000000000001 c2.22 0 3.56 1.26 3.56 3.6 l0 2.52 c0 2.14 -1.32 3.58 -3.56 3.58 l-1.68 0 l0 3.32 c0 0.1 -0.08 0.18 -0.18 0.18 l-2.3 0 c-0.08 0 -0.14 -0.08 -0.14 -0.18 l0 -12.84 c0 -0.1 0.06 -0.18 0.14 -0.18 l4.16 0 z M16.622 12.32 l0 -1.32 c0 -1.38 -0.64 -1.52 -2.04 -1.52 l-0.58 0 l0 4.4 l0.58 0 c1.1 0 2.04 -0.2 2.04 -1.56 z M18.041999999999998 12.780000000000001 l0 -2.5 c0 -2.2 -1.7 -2.38 -2.62 -2.38 l-2.7 0 c-0.04 0 -0.12 0.06 -0.12 0.12 l0 10.76 c0 0.14 0.24 0.14 0.24 0 l0 -3.4 l2.4 0 c1.76 0 2.8 -0.62 2.8 -2.6 z M12.841999999999999 8.16 l2.58 0 c2.22 0 2.36 1.46 2.36 2.12 l0 2.5 c0 2.04 -1.28 2.32 -2.54 2.32 l-2.4 0 l0 -6.94 z M23.063999999999997 6.92 c0.02 -0.06 0.06 -0.12 0.14 -0.12 l2.48 0 c0.08 0 0.12 0.06 0.14 0.12 l3.46 12.86 c0.02 0.12 -0.06 0.22 -0.18 0.22 l-2.28 0 c-0.06 0 -0.12 -0.04 -0.14 -0.12 l-0.78 -2.8 l-2.92 0 l-0.76 2.8 c-0.02 0.08 -0.06 0.12 -0.14 0.12 l-2.3 0 c-0.12 0 -0.2 -0.1 -0.18 -0.22 z M23.624 14.6 l1.66 0 l-0.86 -3.02 z M26.703999999999997 15.780000000000001 l0.92 3 c0.04 0.12 0.26 0.1 0.2 -0.06 l-3.2 -10.64 c-0.06 -0.26 -0.4 -0.28 -0.46 0 l-3.1 10.64 c-0.06 0.14 0.16 0.2 0.22 0.08 l0.88 -3.02 l4.54 0 z M22.223999999999997 15.52 l2.18 -7.36 l2.22 7.36 l-4.4 0 z M38.086 14.780000000000001 c-0.28 0.58 -0.68 1.02 -1.24 1.28 l1.68 3.7 c0.06 0.12 -0.02 0.24 -0.14 0.24 l-2.46 0 c-0.08 0 -0.12 -0.04 -0.14 -0.1 l-1.56 -3.4 l-1.02 0 l0 3.32 c0 0.1 -0.08 0.18 -0.18 0.18 l-2.3 0 c-0.08 0 -0.14 -0.08 -0.14 -0.18 l0 -12.84 c0 -0.1 0.06 -0.18 0.14 -0.18 l4.16 0 c2.22 0 3.56 1.26 3.56 3.6 l0 2.52 c0 0.7 -0.12 1.36 -0.36 1.86 z M35.82599999999999 12.3 l0 -1.3 c0 -1.4 -0.52 -1.54 -2.04 -1.54 l-0.58 0 l0 4.42 l0.58 0 c1.26 0 2 -0.02 2.04 -1.58 z M32.04599999999999 18.78 l0 -3.42 l2.88 0 l1.68 3.46 c0.04 0.1 0.28 0.06 0.22 -0.12 l-1.68 -3.4 c1.56 -0.22 2.1 -1.04 2.1 -2.52 l0 -2.5 c0 -2.2 -2 -2.38 -2.62 -2.38 l-2.7 0 c-0.04 0 -0.12 0.06 -0.12 0.12 l0 10.76 c0 0.14 0.24 0.14 0.24 0 z M37.006 10.28 l0 2.5 c0 2.04 -1.3 2.32 -2.56 2.32 l-2.4 0 l0 -6.94 l2.58 0 c2.16 0 2.38 1.46 2.38 2.12 z M48.888 6.800000000000001 c0.14 0 0.22 0.16 0.14 0.28 l-3.14 4.34 l3.32 8.36 c0.04 0.1 -0.02 0.22 -0.16 0.22 l-2.7 0 c-0.06 0 -0.12 -0.04 -0.14 -0.12 l-2.08 -5.98 l-1.02 1.4 l0 4.52 c0 0.1 -0.08 0.18 -0.18 0.18 l-2.28 0 c-0.1 0 -0.16 -0.08 -0.16 -0.18 l0 -12.84 c0 -0.1 0.06 -0.18 0.16 -0.18 l2.28 0 c0.1 0 0.18 0.08 0.18 0.18 l0 4.14 l3.14 -4.24 c0.06 -0.08 0.08 -0.08 0.16 -0.08 l2.48 0 z M41.687999999999995 8 l0 10.78 c0 0.14 0.22 0.14 0.22 0 l0 -3.88 l2.5 -3.32 l2.8 7.24 c0.04 0.1 0.28 0.04 0.22 -0.12 l-2.84 -7.38 l2.6 -3.46 c0.1 -0.1 -0.08 -0.28 -0.2 -0.16 l-5.08 6.8 l0 -6.5 c0 -0.14 -0.22 -0.14 -0.22 0 z M58.651999999999994 9.3 l-2.84 0 c-0.1 0 -0.18 -0.08 -0.18 -0.18 l0 -2.14 c0 -0.1 0.08 -0.18 0.18 -0.18 l8.34 0 c0.1 0 0.18 0.08 0.18 0.18 l0 2.14 c0 0.1 -0.08 0.18 -0.18 0.18 l-2.84 0 l0 10.52 c0 0.1 -0.08 0.18 -0.18 0.18 l-2.3 0 c-0.1 0 -0.18 -0.08 -0.18 -0.18 l0 -10.52 z M62.931999999999995 7.9 l-6.04 0 c-0.14 0 -0.14 0.26 0 0.26 l2.96 0 l0 10.6 c0 0.14 0.26 0.14 0.26 0 l0 -10.6 l2.82 0 c0.2 0 0.18 -0.26 0 -0.26 z M73.134 14.780000000000001 c-0.28 0.58 -0.68 1.02 -1.24 1.28 l1.68 3.7 c0.06 0.12 -0.02 0.24 -0.14 0.24 l-2.46 0 c-0.08 0 -0.12 -0.04 -0.14 -0.1 l-1.56 -3.4 l-1.02 0 l0 3.32 c0 0.1 -0.08 0.18 -0.18 0.18 l-2.3 0 c-0.08 0 -0.14 -0.08 -0.14 -0.18 l0 -12.84 c0 -0.1 0.06 -0.18 0.14 -0.18 l4.16 0 c2.22 0 3.56 1.26 3.56 3.6 l0 2.52 c0 0.7 -0.12 1.36 -0.36 1.86 z M70.874 12.3 l0 -1.3 c0 -1.4 -0.52 -1.54 -2.04 -1.54 l-0.58 0 l0 4.42 l0.58 0 c1.26 0 2 -0.02 2.04 -1.58 z M67.094 18.78 l0 -3.42 l2.88 0 l1.68 3.46 c0.04 0.1 0.28 0.06 0.22 -0.12 l-1.68 -3.4 c1.56 -0.22 2.1 -1.04 2.1 -2.52 l0 -2.5 c0 -2.2 -2 -2.38 -2.62 -2.38 l-2.7 0 c-0.04 0 -0.12 0.06 -0.12 0.12 l0 10.76 c0 0.14 0.24 0.14 0.24 0 z M72.054 10.28 l0 2.5 c0 2.04 -1.3 2.32 -2.56 2.32 l-2.4 0 l0 -6.94 l2.58 0 c2.16 0 2.38 1.46 2.38 2.12 z M75.69600000000001 20 c-0.1 0 -0.16 -0.08 -0.16 -0.18 l0 -12.84 c0 -0.1 0.06 -0.18 0.16 -0.18 l6.8 0 c0.1 0 0.18 0.08 0.18 0.18 l0 2.14 c0 0.1 -0.08 0.18 -0.18 0.18 l-4.32 0 l0 2.72 l3.36 0 c0.1 0 0.16 0.08 0.16 0.18 l0 2.18 c0 0.1 -0.06 0.18 -0.16 0.18 l-3.36 0 l0 2.94 l4.32 0 c0.1 0 0.18 0.08 0.18 0.18 l0 2.14 c0 0.1 -0.08 0.18 -0.18 0.18 l-6.8 0 z M76.69600000000001 8.06 l0 10.64 c0 0.12 0.08 0.16 0.16 0.16 l4.6 0 c0.18 0 0.14 -0.24 0 -0.24 l-4.5 0 l0 -5.22 l3.68 0 c0.12 0 0.12 -0.28 0 -0.28 l-3.68 0 l0 -4.96 l4.5 0 c0.14 0 0.18 -0.26 0 -0.26 l-4.6 0 c-0.08 0 -0.16 0.06 -0.16 0.16 z M90.018 6.98 c0 -0.1 0.08 -0.18 0.18 -0.18 l2.3 0 c0.1 0 0.18 0.08 0.18 0.18 l0 12.84 c0 0.1 -0.08 0.18 -0.18 0.18 l-2.22 0 c-0.08 0 -0.16 -0.04 -0.18 -0.1 l-2.92 -6.58 l0 6.5 c0 0.1 -0.08 0.18 -0.18 0.18 l-2.28 0 c-0.1 0 -0.16 -0.08 -0.16 -0.18 l0 -12.84 c0 -0.1 0.06 -0.18 0.16 -0.18 l2.36 0 c0.08 0 0.12 0.06 0.14 0.1 l2.8 6.46 l0 -6.38 z M91.458 18.8 l0 -10.8 c0 -0.14 -0.26 -0.18 -0.26 0 l0 10.28 l-5.22 -10.32 c-0.06 -0.08 -0.22 -0.08 -0.22 0.04 l0 10.78 c0 0.18 0.24 0.18 0.24 0 l0 -10.26 l5.2 10.3 c0.08 0.14 0.26 0.1 0.26 -0.02 z M100.10000000000001 6.800000000000001 c1.36 0 2.38 0.38 3.06 1.12 c0.6 0.66 0.9 1.64 0.9 2.84 l0 5.3 c0 2.42 -1.4 3.94 -3.96 3.94 l-5 0 c-0.1 0 -0.16 -0.08 -0.16 -0.18 l0 -12.84 c0 -0.1 0.06 -0.18 0.16 -0.18 l5 0 z M101.44 15.46 l0 -4.1 c0 -1.26 -0.66 -2.06 -2.06 -2.06 l-1.8 0 l0 8.2 l1.8 0 c1.2 0 2.06 -0.78 2.06 -2.04 z M96.16 8.02 l0 10.76 c0 0.08 0.08 0.1 0.12 0.1 l3.26 0 c2.3 0 3.34 -1.38 3.34 -2.66 l0 -5.12 c0 -2.12 -1.12 -3.2 -3.4 -3.2 l-3.2 0 c-0.04 0 -0.12 0.02 -0.12 0.12 z M102.64 11.1 l0 5.12 c0 1.6 -1.6 2.44 -3.1 2.44 l-3.14 0 l0 -10.5 l3.08 0 c2.1 0 3.16 0.94 3.16 2.94 z M110.562 11.9 c1.52 0.72 3.5 1.86 3.5 3.92 c0 0.6 -0.1 1.76 -0.76 2.74 c-0.74 1.1 -1.9 1.64 -3.5 1.64 c-1.7 0 -3.68 -0.82 -4.3 -2.68 c-0.02 -0.06 0 -0.12 0.06 -0.16 l1.84 -1.58 c0.08 -0.06 0.2 -0.06 0.26 0.04 c0.04 0.1 0.12 0.26 0.22 0.46 c0.3 0.62 1.02 1.24 1.82 1.24 c0.62 0 1.46 -0.34 1.46 -1.3 c0 -0.92 -1.26 -1.44 -2.04 -1.74 c-0.9 -0.36 -1.82 -0.82 -2.6 -1.5 c-0.82 -0.76 -1.22 -1.6 -1.22 -2.6 c0 -2.5 2.3 -3.76 4.48 -3.76 c1.72 0 3 0.9 3.84 2.68 c0.04 0.08 0 0.18 -0.06 0.22 l-1.78 1.24 c-0.08 0.04 -0.12 0.04 -0.2 -0.06 c-0.68 -0.98 -1.28 -1.44 -2.08 -1.44 c-0.42 0 -1.4 0.16 -1.4 0.9 c0 0.9 1.66 1.36 2.46 1.74 z M106.922 17.42 c0.5 1 1.88 1.58 3 1.58 c1.46 0 2.64 -1 2.8 -2.52 c0.2 -1.86 -1.26 -2.66 -2.7 -3.38 l-0.64 -0.28 c-1.48 -0.66 -2.56 -1.16 -2.56 -2.54 c0 -1.52 1.4 -2.22 2.78 -2.22 c1.26 0 1.92 0.74 2.26 1.2 c0.12 0.16 0.32 0.02 0.2 -0.14 c-0.34 -0.42 -1.06 -1.3 -2.46 -1.3 c-1.58 0 -3.02 0.78 -3.02 2.46 c0 1.5 1.2 2.08 2.72 2.78 l0.62 0.3 c1.98 0.94 2.7 1.82 2.54 3.1 c-0.3 2.04 -1.86 2.3 -2.54 2.3 c-1.5 0 -2.5 -0.9 -2.8 -1.46 c-0.1 -0.1 -0.24 0 -0.2 0.12 z M116.484 16.66 c0.94 0 1.78 0.72 1.78 1.7 c0 0.16 -0.06 0.36 -0.1 0.5 l-1.14 2.96 c-0.02 0.08 -0.1 0.14 -0.16 0.14 l-1.36 0 c-0.18 0 -0.22 -0.14 -0.18 -0.26 l0.64 -1.6 c-0.68 -0.22 -1.28 -0.9 -1.28 -1.7 c0 -0.98 0.82 -1.74 1.8 -1.74 z M116.464 21.08 l0.56 -2.02 c0.14 -0.38 0.1 -0.68 -0.02 -0.86 c-0.08 -0.1 -0.2 -0.22 -0.48 -0.24 c-0.34 0 -0.56 0.24 -0.56 0.52 c0 0.32 0.22 0.54 0.52 0.54 c0.12 0 0.28 -0.04 0.38 -0.2 c0 0.06 0 0.08 -0.04 0.16 l-0.62 2.02 c-0.04 0.16 0.2 0.26 0.26 0.08 z M116.50399999999999 18.2 c0.16 0 0.28 0.16 0.28 0.28 c0 0.18 -0.16 0.32 -0.3 0.32 c-0.16 0 -0.3 -0.14 -0.3 -0.32 c0 -0.12 0.14 -0.28 0.32 -0.28 z M129.688 15.2 c-0.1 0 -0.18 -0.08 -0.18 -0.18 l0 -2.14 c0 -0.1 0.08 -0.18 0.18 -0.18 l4.58 0 c0.1 0 0.18 0.08 0.18 0.18 l0 3.14 c0 2.94 -1.58 4.18 -4.56 4.18 c-2.78 0 -4.6 -1.1 -4.6 -4.18 l0 -5.26 c0 -2.9 1.62 -4.14 4.6 -4.14 c2.8 0 4.56 1.08 4.56 4.14 l0 0.42 c0 0.1 -0.08 0.18 -0.18 0.18 l-2.3 0 c-0.1 0 -0.18 -0.08 -0.18 -0.18 l0 -0.26 c0 -1.22 -0.78 -1.62 -1.8 -1.62 l-0.24 0 c-0.66 0 -1.1 0.18 -1.4 0.58 c-0.28 0.38 -0.38 0.88 -0.38 1.54 l0 3.96 c0 1.74 0.94 2.12 1.78 2.12 l0.24 0 c1.22 0 1.8 -0.84 1.8 -2.12 l0 -0.18 l-2.1 0 z M126.508 15.879999999999999 c0 2.22 1.08 3.04 3.36 3.04 c2.4 0 3.38 -1 3.38 -3.46 l0 -1.5 c0 -0.06 -0.04 -0.14 -0.08 -0.14 l-2.78 0 c-0.18 0 -0.14 0.26 0 0.26 l2.62 0 l0 1.38 c0 2.14 -0.82 3.24 -3.14 3.24 c-1.92 0 -3.12 -0.68 -3.12 -2.82 l0 -4.82 c0 -2.06 0.94 -2.98 3.12 -2.98 c1.62 0 3.1 0.9 2.98 2.28 c0 0.16 0.22 0.2 0.26 0.02 c0 -1.76 -1.6 -2.52 -3.24 -2.52 c-2 0 -3.36 0.72 -3.36 3.2 l0 4.82 z M140.69 6.619999999999999 c1.72 0 2.92 0.38 3.68 1.2 c0.6 0.66 0.88 1.6 0.88 2.94 l0 5.26 c0 1.38 -0.28 2.34 -0.88 2.98 c-0.78 0.8 -1.96 1.2 -3.68 1.2 c-1.78 0 -2.94 -0.4 -3.7 -1.2 c-0.58 -0.64 -0.9 -1.6 -0.9 -2.98 l0 -5.26 c0 -1.34 0.32 -2.28 0.9 -2.96 c0.78 -0.8 1.96 -1.18 3.7 -1.18 z M142.59 15.42 l0 -4 c0 -1.76 -0.94 -2.12 -1.8 -2.12 l-0.24 0 c-1.28 0 -1.78 0.82 -1.78 2.12 l0 4 c0 1.76 0.94 2.14 1.78 2.14 l0.24 0 c1.28 0 1.78 -0.86 1.8 -2.14 z M137.35 10.9 l0 4.96 c0 0.94 0.24 1.72 0.8 2.3 c0.52 0.52 1.32 0.8 2.3 0.8 l0.52 0 c1.88 0 3.1 -1.2 3.1 -3.1 l0 -4.96 c0 -2.04 -1.08 -3.14 -3.1 -3.14 l-0.52 0 c-2.04 0 -3.1 1.1 -3.1 3.14 z M140.97 18.7 l-0.52 0 c-0.94 0 -1.64 -0.24 -2.14 -0.74 s-0.76 -1.2 -0.76 -2.1 l0 -4.96 c0 -1.9 1.02 -2.9 2.9 -2.9 l0.52 0 c1.9 0 2.84 0.98 2.84 2.9 l0 4.96 c0 0.84 -0.26 1.6 -0.8 2.12 c-0.52 0.44 -1.22 0.72 -2.04 0.72 z M154.93400000000003 6.92 l2.2 8.28 l2.26 -8.28 c0.04 -0.06 0.08 -0.12 0.16 -0.12 l2.28 0 c0.12 0 0.2 0.1 0.16 0.22 l-3.46 12.86 c-0.04 0.08 -0.08 0.12 -0.16 0.12 l-2.48 0 c-0.06 0 -0.12 -0.04 -0.14 -0.12 l-3.46 -12.86 c-0.02 -0.12 0.06 -0.22 0.18 -0.22 l2.3 0 c0.08 0 0.12 0.06 0.16 0.12 z M157.09400000000002 18.62 l-3.34 -10.66 c-0.06 -0.16 -0.28 -0.06 -0.22 0.06 l3.32 10.68 c0.08 0.3 0.4 0.32 0.5 0 l3.2 -10.68 c0.04 -0.12 -0.18 -0.2 -0.22 -0.06 z M163.436 20 c-0.1 0 -0.16 -0.08 -0.16 -0.18 l0 -12.84 c0 -0.1 0.06 -0.18 0.16 -0.18 l2.28 0 c0.1 0 0.18 0.08 0.18 0.18 l0 12.84 c0 0.1 -0.08 0.18 -0.18 0.18 l-2.28 0 z M164.47600000000003 8 l0 10.78 c0 0.18 0.22 0.18 0.22 0 l0 -10.78 c0 -0.14 -0.22 -0.14 -0.22 0 z M175.578 14.780000000000001 c-0.28 0.58 -0.68 1.02 -1.24 1.28 l1.68 3.7 c0.06 0.12 -0.02 0.24 -0.14 0.24 l-2.46 0 c-0.08 0 -0.12 -0.04 -0.14 -0.1 l-1.56 -3.4 l-1.02 0 l0 3.32 c0 0.1 -0.08 0.18 -0.18 0.18 l-2.3 0 c-0.08 0 -0.14 -0.08 -0.14 -0.18 l0 -12.84 c0 -0.1 0.06 -0.18 0.14 -0.18 l4.16 0 c2.22 0 3.56 1.26 3.56 3.6 l0 2.52 c0 0.7 -0.12 1.36 -0.36 1.86 z M173.318 12.3 l0 -1.3 c0 -1.4 -0.52 -1.54 -2.04 -1.54 l-0.58 0 l0 4.42 l0.58 0 c1.26 0 2 -0.02 2.04 -1.58 z M169.538 18.78 l0 -3.42 l2.88 0 l1.68 3.46 c0.04 0.1 0.28 0.06 0.22 -0.12 l-1.68 -3.4 c1.56 -0.22 2.1 -1.04 2.1 -2.52 l0 -2.5 c0 -2.2 -2 -2.38 -2.62 -2.38 l-2.7 0 c-0.04 0 -0.12 0.06 -0.12 0.12 l0 10.76 c0 0.14 0.24 0.14 0.24 0 z M174.49800000000002 10.28 l0 2.5 c0 2.04 -1.3 2.32 -2.56 2.32 l-2.4 0 l0 -6.94 l2.58 0 c2.16 0 2.38 1.46 2.38 2.12 z M180.48000000000002 6.92 c0.02 -0.06 0.06 -0.12 0.14 -0.12 l2.48 0 c0.08 0 0.12 0.06 0.14 0.12 l3.46 12.86 c0.02 0.12 -0.06 0.22 -0.18 0.22 l-2.28 0 c-0.06 0 -0.12 -0.04 -0.14 -0.12 l-0.78 -2.8 l-2.92 0 l-0.76 2.8 c-0.02 0.08 -0.06 0.12 -0.14 0.12 l-2.3 0 c-0.12 0 -0.2 -0.1 -0.18 -0.22 z M181.04000000000002 14.6 l1.66 0 l-0.86 -3.02 z M184.12000000000003 15.780000000000001 l0.92 3 c0.04 0.12 0.26 0.1 0.2 -0.06 l-3.2 -10.64 c-0.06 -0.26 -0.4 -0.28 -0.46 0 l-3.1 10.64 c-0.06 0.14 0.16 0.2 0.22 0.08 l0.88 -3.02 l4.54 0 z M179.64000000000001 15.52 l2.18 -7.36 l2.22 7.36 l-4.4 0 z M190.442 6.800000000000001 c0.1 0 0.18 0.08 0.18 0.18 l0 10.5 l4.32 0 c0.1 0 0.18 0.08 0.18 0.18 l0 2.16 c0 0.1 -0.08 0.18 -0.18 0.18 l-6.78 0 c-0.1 0 -0.16 -0.08 -0.16 -0.18 l0 -12.84 c0 -0.1 0.06 -0.18 0.16 -0.18 l2.28 0 z M189.20200000000003 8.02 l0 10.76 c0 0.04 0.04 0.1 0.12 0.1 l4.62 0 c0.16 0 0.16 -0.26 0 -0.26 l-4.52 0 l0 -10.6 c0 -0.14 -0.22 -0.16 -0.22 0 z M207.866 6.98 c0 -0.1 0.08 -0.18 0.18 -0.18 l2.3 0 c0.1 0 0.18 0.08 0.18 0.18 l0 12.84 c0 0.1 -0.08 0.18 -0.18 0.18 l-2.22 0 c-0.08 0 -0.16 -0.04 -0.18 -0.1 l-2.92 -6.58 l0 6.5 c0 0.1 -0.08 0.18 -0.18 0.18 l-2.28 0 c-0.1 0 -0.16 -0.08 -0.16 -0.18 l0 -12.84 c0 -0.1 0.06 -0.18 0.16 -0.18 l2.36 0 c0.08 0 0.12 0.06 0.14 0.1 l2.8 6.46 l0 -6.38 z M209.306 18.8 l0 -10.8 c0 -0.14 -0.26 -0.18 -0.26 0 l0 10.28 l-5.22 -10.32 c-0.06 -0.08 -0.22 -0.08 -0.22 0.04 l0 10.78 c0 0.18 0.24 0.18 0.24 0 l0 -10.26 l5.2 10.3 c0.08 0.14 0.26 0.1 0.26 -0.02 z M217.12800000000001 6.619999999999999 c1.72 0 2.92 0.38 3.68 1.2 c0.6 0.66 0.88 1.6 0.88 2.94 l0 5.26 c0 1.38 -0.28 2.34 -0.88 2.98 c-0.78 0.8 -1.96 1.2 -3.68 1.2 c-1.78 0 -2.94 -0.4 -3.7 -1.2 c-0.58 -0.64 -0.9 -1.6 -0.9 -2.98 l0 -5.26 c0 -1.34 0.32 -2.28 0.9 -2.96 c0.78 -0.8 1.96 -1.18 3.7 -1.18 z M219.02800000000002 15.42 l0 -4 c0 -1.76 -0.94 -2.12 -1.8 -2.12 l-0.24 0 c-1.28 0 -1.78 0.82 -1.78 2.12 l0 4 c0 1.76 0.94 2.14 1.78 2.14 l0.24 0 c1.28 0 1.78 -0.86 1.8 -2.14 z M213.788 10.9 l0 4.96 c0 0.94 0.24 1.72 0.8 2.3 c0.52 0.52 1.32 0.8 2.3 0.8 l0.52 0 c1.88 0 3.1 -1.2 3.1 -3.1 l0 -4.96 c0 -2.04 -1.08 -3.14 -3.1 -3.14 l-0.52 0 c-2.04 0 -3.1 1.1 -3.1 3.14 z M217.40800000000002 18.7 l-0.52 0 c-0.94 0 -1.64 -0.24 -2.14 -0.74 s-0.76 -1.2 -0.76 -2.1 l0 -4.96 c0 -1.9 1.02 -2.9 2.9 -2.9 l0.52 0 c1.9 0 2.84 0.98 2.84 2.9 l0 4.96 c0 0.84 -0.26 1.6 -0.8 2.12 c-0.52 0.44 -1.22 0.72 -2.04 0.72 z M237.89 6.800000000000001 c0.12 0 0.2 0.1 0.16 0.22 l-3.44 12.86 c-0.02 0.08 -0.1 0.12 -0.18 0.12 l-2.2 0 c-0.08 0 -0.14 -0.04 -0.18 -0.12 l-1.36 -5.06 l-1.84 5.08 c-0.02 0.06 -0.06 0.1 -0.14 0.1 l-2.12 0 c-0.08 0 -0.14 -0.04 -0.16 -0.12 l-3.42 -12.88 c-0.02 -0.1 0.04 -0.2 0.18 -0.2 l2.3 0 c0.06 0 0.12 0.06 0.14 0.12 l2.22 8.48 l1.66 -5.02 l-0.92 -3.36 c-0.04 -0.12 0.06 -0.22 0.16 -0.22 l2.48 0 c0.08 0 0.12 0.02 0.16 0.12 l1.84 8.16 l2.2 -8.16 c0.02 -0.06 0.08 -0.12 0.16 -0.12 l2.3 0 z M230.85 10.58 l-3.02 8.04 l-3.24 -10.66 c-0.04 -0.14 -0.28 -0.08 -0.24 0.06 l3.24 10.68 c0.06 0.28 0.4 0.26 0.5 0 l2.86 -7.72 l2.1 7.7 c0.08 0.3 0.44 0.3 0.5 0.02 l3.18 -10.68 c0.06 -0.14 -0.2 -0.22 -0.24 -0.06 l-3.16 10.66 l-2.92 -10.66 c-0.02 -0.14 -0.28 -0.1 -0.22 0.06 z M242.212 16.06 l-2.2 0 c-0.1 0 -0.18 -0.08 -0.18 -0.18 l-0.54 -8.92 c0 -0.16 0.1 -0.18 0.18 -0.18 l3.26 0 c0.14 0 0.18 0.1 0.18 0.18 l-0.52 8.92 c0 0.1 -0.08 0.18 -0.18 0.18 z M241.192 16.66 c1 0 1.78 0.76 1.78 1.74 s-0.78 1.78 -1.78 1.78 c-0.96 0 -1.72 -0.8 -1.72 -1.78 s0.76 -1.74 1.72 -1.74 z M241.012 7.98 l0 6.84 c0 0.16 0.26 0.18 0.26 0 l0 -6.84 c0 -0.18 -0.26 -0.18 -0.26 0 z M241.232 18.2 c-0.16 0 -0.32 0.12 -0.32 0.3 s0.16 0.3 0.32 0.3 c0.18 0 0.3 -0.12 0.3 -0.3 s-0.12 -0.3 -0.3 -0.3 z"></path></g><g id="SvgjsG4989" featurekey="nameLeftFeature-0" transform="matrix(2.4640065782381355,0,0,2.4640065782381355,-1.9712069074923608,90.70875902638707)" fill="#137dc5"><path d="M9.84 6 l0 0.58 l-4.22 0 l0 13.42 l-0.58 0 l0 -13.42 l-4.24 0 l0 -0.58 l9.04 0 z M21.5 20 l-0.72 0 l-4.08 -5.38 c-0.2 0.02 -0.4 0.02 -0.6 0.02 l-3.68 0 l0 5.36 l-0.58 0 l0 -14 l4.26 0 c3.14 0 4.8 1.94 4.8 4.3 c0 2.08 -1.22 3.8 -3.56 4.24 z M12.42 14.04 l3.76 0 c2.52 0 4.14 -1.46 4.14 -3.74 c0 -2.32 -1.62 -3.72 -4.14 -3.72 l-3.76 0 l0 7.46 z M23.880000000000003 19.42 l7.28 0 l0 0.58 l-7.68 0 l-0.18 0 l0 -14 l0.58 0 l7.1 0 l0 0.58 l-7.1 0 l0 6.1 l5.66 0 l0 0.58 l-5.66 0 l0 6.16 z M43.52 6 l0.58 0 l0 14 l-0.44 0 l-9.82 -12.9 l0 12.9 l-0.58 0 l0 -14 l0.44 0 l9.82 12.94 l0 -12.94 z M49.940000000000005 6 c4.18 0 7.06 3.08 7.06 7.06 c0 3.86 -2.88 6.94 -7.06 6.94 l-3.44 0 l0 -14 l3.44 0 z M49.92 19.44 c3.9 0 6.5 -2.82 6.5 -6.38 c0 -3.68 -2.6 -6.5 -6.5 -6.5 l-2.84 0 l0 12.88 l2.84 0 z M72.32000000000001 13.3 c0.04 4.28 -3.02 6.9 -6.56 6.9 s-7.06 -2.98 -7.06 -7.2 s3.62 -7.2 7.06 -7.2 c1.68 0 3.26 0.6 4.56 1.66 l-0.4 0.46 c-1.18 -1 -2.64 -1.52 -4.1 -1.52 c-3.14 0 -6.54 2.68 -6.54 6.6 s3.28 6.6 6.48 6.6 c3 0 5.74 -2.02 6 -5.74 l-4.76 0 l0 -0.56 l5.32 0 z M75 19.42 l7.28 0 l0 0.58 l-7.68 0 l-0.18 0 l0 -14 l0.58 0 l7.1 0 l0 0.58 l-7.1 0 l0 6.1 l5.66 0 l0 0.58 l-5.66 0 l0 6.16 z M94.64000000000001 6 l0.58 0 l0 14 l-0.44 0 l-9.82 -12.9 l0 12.9 l-0.58 0 l0 -14 l0.44 0 l9.82 12.94 l0 -12.94 z M98.2 6 l0 14 l-0.58 0 l0 -14 l0.58 0 z M101.18 19.42 l7.28 0 l0 0.58 l-7.68 0 l-0.18 0 l0 -14 l0.58 0 l7.1 0 l0 0.58 l-7.1 0 l0 6.1 l5.66 0 l0 0.58 l-5.66 0 l0 6.16 z"></path></g><g id="SvgjsG4990" featurekey="inlineSymbolFeature-0" transform="matrix(1.1828108608269963,0,0,1.1828108608269963,263.17407502295174,70.56168178305552)" fill="url(#SvgjsLinearGradient4997)"><path xmlns="http://www.w3.org/2000/svg" d="M68.617,46.749c-1.019-2.724-3.037-4.888-5.683-6.092c-1.43-0.651-2.945-0.979-4.506-0.979c-1.95,0-3.812,0.546-5.438,1.486  l-9.532-11.926c0.198-0.314,0.38-0.64,0.538-0.983c1.908-4.194,0.05-9.16-4.141-11.068c-1.097-0.5-2.261-0.753-3.458-0.753  c-3.269,0-6.257,1.92-7.613,4.894c-1.909,4.193-0.05,9.158,4.143,11.071c1.097,0.5,2.262,0.753,3.458,0.753  c1.759,0,3.428-0.572,4.815-1.551l9.256,11.579c-0.779,0.839-1.445,1.792-1.933,2.866c-0.966,2.116-1.212,4.435-0.754,6.672  l-13.812,5.029c-0.862-1.432-2.125-2.573-3.679-3.28c-1.097-0.501-2.262-0.754-3.46-0.754c-3.268,0-6.256,1.922-7.608,4.893  c-0.926,2.03-1.006,4.301-0.223,6.392c0.782,2.09,2.331,3.752,4.363,4.676c1.098,0.5,2.263,0.756,3.464,0.756  c3.266,0,6.25-1.922,7.604-4.895c0.685-1.51,0.903-3.146,0.651-4.743l13.81-5.029c1.119,2.064,2.86,3.714,5.035,4.703  c1.432,0.651,2.947,0.98,4.511,0.98c4.256,0,8.143-2.503,9.903-6.374C69.532,52.428,69.637,49.473,68.617,46.749z M31.466,64.189  c-0.829,1.819-2.656,2.996-4.656,2.996c-0.731,0-1.444-0.156-2.12-0.462c-1.244-0.568-2.192-1.584-2.671-2.863  c-0.48-1.28-0.431-2.668,0.136-3.913c0.829-1.819,2.658-2.998,4.659-2.998c0.73,0,1.443,0.158,2.115,0.465  c1.246,0.566,2.194,1.584,2.671,2.862C32.079,61.555,32.033,62.945,31.466,64.189z"></path></g><g id="SvgjsG4991" featurekey="nameRightFeature-0" transform="matrix(2.5344066990489456,0,0,2.5344066990489456,348.7797968843869,89.79355980570632)" fill="#137dc5"><path d="M18.380000000000003 20 l-1.06 -2.5 l-6.76 0 l-1.06 2.5 l-3.1 0 l6.22 -14 l2.64 0 l6.24 14 l-3.12 0 z M11.58 15.120000000000001 l4.72 0 l-2.36 -5.54 z M26.02 6 l0 14 l-2.92 0 l0 -14 l2.92 0 z"></path></g></svg>
              Spark Trends, Go Viral ✨
              </p>
            </div>
            
            {/* Right side - Theme Toggle */}
            <div className="flex items-center space-x-4">
              <ThemeToggle />
            </div>
          </div>
        </div>
      </div>
    </motion.header>
  )
} 
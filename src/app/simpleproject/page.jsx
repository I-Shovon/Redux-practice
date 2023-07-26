'use client'

import Link from "next/link";
import { Icon } from "@iconify/react";

export default function Navbar() {
  return (
    <nav className="h-14 bg-indigo-200 rounded-full m-2 max-w-7xl mx-auto px-5">
      <ul className="h-full  mx-auto flex justify-between items-center gap-3 font-semibold text-indigo-900">
        <h1 className="flex-1">Moon Tech</h1>
        <li>
          <Link href="/simpleproject">Home</Link>
        </li>
        <li>
          <Link href="/simpleproject/top-rated">Top Rated</Link>
        </li>
        <li>
          <Link href="/simpleproject/about">About</Link>
        </li>
        <li title="Wishlist" className="bg-indigo-500 p-2 rounded-full">
          <Link href="/simpleproject/order">
            <Icon icon="ph:note-bold" />
          </Link>
        </li>
        <li title="cart" className="bg-indigo-500 p-2 rounded-full">
          <Link href="/simpleproject/cart">
            <Icon icon="mdi:cart" />
          </Link>
        </li>
      </ul>
    </nav>
  );
} 
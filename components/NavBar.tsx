import Image from "next/image";
import Link from "next/link";
import React from "react";

const NavBar = () => {
  return (
    <header>
      <nav>
        <Link href="/" className="logo">
          <Image src="/icons/logo.png" alt="logo" width={24} height={24} />
          <p>Events Hub</p>
        </Link>
        <ul>
          <Link href="/">
            <li>Home</li>
          </Link>
          <Link href="/events">
            <li>Events</li>
          </Link>
          <Link href="/about">
            <li>Create Event</li>
          </Link>
        </ul>
      </nav>
    </header>
  );
};

export default NavBar;

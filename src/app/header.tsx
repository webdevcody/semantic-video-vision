"use client";

import { ModeToggle } from "@/components/mode-toggle";
import { SignInButton, SignedOut } from "@clerk/clerk-react";
import { SignedIn, UserButton } from "@clerk/nextjs";
import Link from "next/link";

export function Header() {
  return (
    <div className="border-b">
      <div className="container flex justify-between items-center h-16">
        <Link href="/">WebPulse</Link>

        <div>
          <SignedIn>
            <Link href="/dashboard">Dashboard</Link>
          </SignedIn>

          <SignedOut>
            <Link href="/about">About</Link>
          </SignedOut>
        </div>

        <div className="flex gap-2 items-center">
          <SignedIn>
            <UserButton />
            <ModeToggle />
          </SignedIn>

          <SignedOut>
            <SignInButton />
          </SignedOut>
        </div>
      </div>
    </div>
  );
}

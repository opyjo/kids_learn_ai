import Link from "next/link";
import Image from "next/image";
import { Heart } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-muted text-foreground py-16 border-t border-border">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Image
                src="/Logo.png"
                alt="Kids Learn AI Logo"
                width={48}
                height={48}
                className="rounded-xl"
              />
              <span className="text-xl font-bold">Kids Learn AI</span>
            </div>
            <p className="text-muted-foreground leading-relaxed">
              Helping kids build a rock-solid Python foundation so they can grow
              into confident AI creators.
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-4 text-lg">Learn</h3>
            <ul className="space-y-3 text-muted-foreground">
              <li>
                <Link
                  href="/lessons?course=python-foundations"
                  className="hover:text-foreground transition-colors cursor-pointer"
                >
                  All Lessons
                </Link>
              </li>
              <li>
                <Link
                  href="/playground"
                  className="hover:text-foreground transition-colors cursor-pointer"
                >
                  Code Playground
                </Link>
              </li>
              <li>
                <Link
                  href="/blog"
                  className="hover:text-foreground transition-colors cursor-pointer"
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="hover:text-foreground transition-colors cursor-pointer"
                >
                  About Us
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4 text-lg">Account</h3>
            <ul className="space-y-3 text-muted-foreground">
              <li>
                <Link
                  href="/signup"
                  className="hover:text-foreground transition-colors cursor-pointer"
                >
                  Sign Up Free
                </Link>
              </li>
              <li>
                <Link
                  href="/login"
                  className="hover:text-foreground transition-colors cursor-pointer"
                >
                  Sign In
                </Link>
              </li>
              <li>
                <Link
                  href="/dashboard"
                  className="hover:text-foreground transition-colors cursor-pointer"
                >
                  My Dashboard
                </Link>
              </li>
              <li>
                <Link
                  href="/profile"
                  className="hover:text-foreground transition-colors cursor-pointer"
                >
                  My Profile
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4 text-lg">Support</h3>
            <ul className="space-y-3 text-muted-foreground">
              <li>
                <Link
                  href="/help"
                  className="hover:text-foreground transition-colors cursor-pointer"
                >
                  Help Center
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="hover:text-foreground transition-colors cursor-pointer"
                >
                  Contact Us
                </Link>
              </li>
              <li>
                <Link
                  href="/privacy"
                  className="hover:text-foreground transition-colors cursor-pointer"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  href="/terms"
                  className="hover:text-foreground transition-colors cursor-pointer"
                >
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-muted-foreground text-sm">
            &copy; 2025 Kids Learn AI. All rights reserved. Made with{" "}
            <Heart className="inline h-4 w-4 text-red-400 fill-red-400" /> for
            young coders.
          </p>
          <div className="flex gap-6">
            <Link
              href="/twitter"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              Twitter
            </Link>
            <Link
              href="/facebook"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              Facebook
            </Link>
            <Link
              href="/instagram"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              Instagram
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

import Link from "next/link";
import Image from "next/image";
import { Heart } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-foreground text-background py-16">
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
              <span className="text-xl font-bold">KidsCode Academy</span>
            </div>
            <p className="text-background/70 leading-relaxed">
              Making Python programming fun and accessible for kids everywhere.
              Learn, create, and share!
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-4 text-lg">Learn</h3>
            <ul className="space-y-3 text-background/70">
              <li>
                <Link
                  href="/lessons"
                  className="hover:text-background transition-colors"
                >
                  All Lessons
                </Link>
              </li>
              <li>
                <Link
                  href="/playground"
                  className="hover:text-background transition-colors"
                >
                  Code Playground
                </Link>
              </li>
              <li>
                <Link
                  href="/pricing"
                  className="hover:text-background transition-colors"
                >
                  Pricing Plans
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="hover:text-background transition-colors"
                >
                  About Us
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4 text-lg">Account</h3>
            <ul className="space-y-3 text-background/70">
              <li>
                <Link
                  href="/signup"
                  className="hover:text-background transition-colors"
                >
                  Sign Up Free
                </Link>
              </li>
              <li>
                <Link
                  href="/login"
                  className="hover:text-background transition-colors"
                >
                  Sign In
                </Link>
              </li>
              <li>
                <Link
                  href="/dashboard"
                  className="hover:text-background transition-colors"
                >
                  My Dashboard
                </Link>
              </li>
              <li>
                <Link
                  href="/profile"
                  className="hover:text-background transition-colors"
                >
                  My Profile
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4 text-lg">Support</h3>
            <ul className="space-y-3 text-background/70">
              <li>
                <Link
                  href="/help"
                  className="hover:text-background transition-colors"
                >
                  Help Center
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="hover:text-background transition-colors"
                >
                  Contact Us
                </Link>
              </li>
              <li>
                <Link
                  href="/privacy"
                  className="hover:text-background transition-colors"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  href="/terms"
                  className="hover:text-background transition-colors"
                >
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-background/20 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-background/70 text-sm">
            &copy; 2025 KidsCode Academy. All rights reserved. Made with{" "}
            <Heart className="inline h-4 w-4 text-red-400 fill-red-400" /> for
            young coders.
          </p>
          <div className="flex gap-6">
            <Link
              href="/twitter"
              className="text-background/70 hover:text-background transition-colors"
            >
              Twitter
            </Link>
            <Link
              href="/facebook"
              className="text-background/70 hover:text-background transition-colors"
            >
              Facebook
            </Link>
            <Link
              href="/instagram"
              className="text-background/70 hover:text-background transition-colors"
            >
              Instagram
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

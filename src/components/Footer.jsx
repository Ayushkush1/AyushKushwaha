"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { ChevronUp, Instagram, Twitter, Github, Linkedin } from "lucide-react"
import { cn } from "@/lib/utils"

export default function DesignerFooter() {
  const [isVisible, setIsVisible] = useState(false);
  const [subscriptionStatus, setSubscriptionStatus] = useState(null); // Add this line

  // Track scroll visibility for the scroll-to-top button
  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 100)
    }

    window.addEventListener("scroll", handleScroll)

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }

  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-neutral-900 text-white border-t border-neutral-800 py-8 px-4 sm:px-8 md:px-16 lg:px-32">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 gap-8 text-sm sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand section */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Ayush Kushwaha</h3>
            <p className="text-neutral-400 text-sm">
              Creating digital experiences that blend art and functionality.
            </p>
            <div className="flex space-x-4">
              <a href="https://www.instagram.com/awsm_ayush_/" className="text-neutral-400" target="_blank" rel="noopener noreferrer">
                <span className="sr-only">Instagram</span>
                <Instagram className="w-5 h-5" />
              </a>
              <a href="https://x.com/AyushKu93360528?t=PAMI4rDdx4yS9kuyIe8DZA&s=09" className="text-neutral-400" target="_blank" rel="noopener noreferrer">
                <span className="sr-only">Twitter</span>
                <Twitter className="w-5 h-5" />
              </a>
              <a href="https://github.com/Ayushkush1" className="text-neutral-400" target="_blank" rel="noopener noreferrer">
                <span className="sr-only">GitHub</span>
                <Github className="w-5 h-5" />
              </a>
              <a href="https://www.linkedin.com/in/ayush-kushwaha-b3b76915b/" className="text-neutral-400" target="_blank" rel="noopener noreferrer">
                <span className="sr-only">LinkedIn</span>
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Pages section */}
          <div>
            <h4 className="mb-4 text-neutral-300 font-medium">Pages</h4>
            <ul className="space-y-2 text-neutral-400">
              <li>
                <Link href="/services" className="hover:text-white transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-white transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal section */}
          <div>
            <h4 className="mb-4 text-neutral-300 font-medium">Legal</h4>
            <ul className="space-y-2 text-neutral-400">
              <li>
                <Link href="/" className="hover:text-white transition-colors">
                  Terms
                </Link>
              </li>
              <li>
                <Link href="/" className="hover:text-white transition-colors">
                  Privacy
                </Link>
              </li>
            </ul>
          </div>

          {/* Stay Updated section */}
          <div className="col-span-1 sm:col-span-2 lg:col-span-1">
            <h4 className="mb-4 text-neutral-300 font-medium">Stay Updated</h4>
            <form
              onSubmit={async (e) => {
                e.preventDefault();
                const formData = new FormData(e.target);
                const email = formData.get("email");

                try {
                  const response = await fetch("/api/subscribe", {
                    method: "POST",
                    headers: {
                      "Content-Type": "application/json",
                    },
                    body: JSON.stringify({ email }),
                  });

                  if (response.ok) {
                    setSubscriptionStatus({ type: "success", message: "Thank you for subscribing!" });
                    e.target.reset();
                  } else {
                    setSubscriptionStatus({ type: "error", message: "Subscription failed. Please try again." });
                  }
                } catch (error) {
                  setSubscriptionStatus({ type: "error", message: "An error occurred. Please try again later." });
                }
              }}
            >
              <div className="flex">
                <input
                  type="email"
                  name="email"
                  placeholder="Your email"
                  required
                  className="w-full px-4 py-2 bg-neutral-800 border border-neutral-700 rounded-l-md text-neutral-400 focus:outline-none focus:ring-1 focus:ring-blue-500"
                />
                <button
                  type="submit"
                  className="px-4 py-2 bg-neutral-700 rounded-r-md hover:bg-neutral-600 transition-colors text-white"
                >
                  Subscribe
                </button>
              </div>
              {subscriptionStatus && (
                <p className={`mt-2 text-sm ${subscriptionStatus.type === "success" ? "text-green-500" : "text-red-500"}`}>
                  {subscriptionStatus.message}
                </p>
              )}
            </form>
            <p className="mt-2 text-xs text-neutral-500">
              Get notified about new projects and design insights.
            </p>
          </div>
        </div>

        {/* Bottom section */}
        <div className="flex flex-col items-center justify-between pt-6 mt-6 border-t border-neutral-800 md:flex-row">
          <p className="text-xs text-neutral-500">© {currentYear} Ayush Kushwaha. All rights reserved.</p>
          <button
            onClick={scrollToTop}
            className={cn(
              "mt-4 md:mt-0 w-8 h-8 flex items-center justify-center bg-neutral-800 rounded-full text-neutral-400 hover:bg-neutral-700 hover:text-white transition-all duration-300",
              isVisible ? "opacity-100" : "opacity-0"
            )}
            aria-label="Scroll to top"
          >
            <ChevronUp size={16} />
          </button>
        </div>
      </div>
    </footer>
  );
}
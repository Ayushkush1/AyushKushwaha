export default function Footer() {
    return (
      <footer className="bg-black py-4 mt-auto relative">
        <div className="text-center text-white text-sm">
          © 2024 Ayush Kushwaha. All rights reserved. 
          <span className="ml-4">
            <a href="/terms" className="hover:underline">Terms and Conditions</a>
          </span>
          <span className="ml-4">
            <a href="/privacy" className="hover:underline">Privacy Policy</a>
          </span>
        </div>
      </footer>
    );
  }
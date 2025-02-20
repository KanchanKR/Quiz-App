

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-blue-500 to-purple-500 text-white py-6">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center justify-center">
          {/* Copyright Notice */}
          <p className="text-sm mb-2">
            &copy; {new Date().getFullYear()} Quiz App. All rights reserved.
          </p>
          {/* Navigation Links */}
          <div className="flex space-x-4">
            <a
              href="/privacy"
              className="text-sm hover:text-blue-300 transition-colors"
            >
              Privacy Policy
            </a>
            <a
              href="/terms"
              className="text-sm hover:text-blue-300 transition-colors"
            >
              Terms of Service
            </a>
            <a
              href="/history"
              className="text-sm hover:text-blue-300 transition-colors"
            >
              Quiz History
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
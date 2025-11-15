import { GraduationCap, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <GraduationCap className="h-8 w-8 text-blue-500" />
              <span className="text-2xl font-bold text-white">KSR</span>
            </div>
            <p className="text-sm mb-4">
              Empowering minds and shaping futures through excellence in education since 1998.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-blue-500 transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="hover:text-blue-500 transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="hover:text-blue-500 transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="hover:text-blue-500 transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#about" className="hover:text-blue-500 transition-colors">About Us</a></li>
              <li><a href="#courses" className="hover:text-blue-500 transition-colors">Programs</a></li>
              <li><a href="#admissions" className="hover:text-blue-500 transition-colors">Admissions</a></li>
              <li><a href="#faculty" className="hover:text-blue-500 transition-colors">Faculty</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Resources</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-blue-500 transition-colors">Student Portal</a></li>
              <li><a href="#" className="hover:text-blue-500 transition-colors">Library</a></li>
              <li><a href="#" className="hover:text-blue-500 transition-colors">Career Services</a></li>
              <li><a href="#" className="hover:text-blue-500 transition-colors">Alumni Network</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Contact</h3>
            <ul className="space-y-2 text-sm">
              <li>123 Education Street</li>
              <li>Academic City, ST 12345</li>
              <li>Phone: +1 (555) 123-4567</li>
              <li>Email: info@ksr.edu</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 text-center text-sm">
          <p>&copy; {new Date().getFullYear()} KSR Educational Institution. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

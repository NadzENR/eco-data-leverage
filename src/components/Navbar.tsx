
import { useState } from 'react';
import { Menu, X, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm z-50 border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0 flex items-center">
              <Zap className="h-8 w-8 text-green-600" />
              <span className="ml-2 text-xl font-bold text-gray-900">LumenAI</span>
            </div>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <a href="#features" className="text-gray-600 hover:text-green-600 transition-colors duration-200">Features</a>
              <a href="#benefits" className="text-gray-600 hover:text-green-600 transition-colors duration-200">Benefits</a>
              <a href="#solutions" className="text-gray-600 hover:text-green-600 transition-colors duration-200">Solutions</a>
              <a href="#contact" className="text-gray-600 hover:text-green-600 transition-colors duration-200">Contact</a>
            </div>
          </div>

          <div className="hidden md:flex items-center space-x-4">
            <Button variant="outline" size="sm" asChild>
              <Link to="/login">Sign In</Link>
            </Button>
            <Button size="sm" className="bg-green-600 hover:bg-green-700">Get Started</Button>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-600 hover:text-green-600"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-b border-gray-200">
            <a href="#features" className="block px-3 py-2 text-gray-600 hover:text-green-600">Features</a>
            <a href="#benefits" className="block px-3 py-2 text-gray-600 hover:text-green-600">Benefits</a>
            <a href="#solutions" className="block px-3 py-2 text-gray-600 hover:text-green-600">Solutions</a>
            <a href="#contact" className="block px-3 py-2 text-gray-600 hover:text-green-600">Contact</a>
            <div className="px-3 py-2 space-y-2">
              <Button variant="outline" size="sm" className="w-full" asChild>
                <Link to="/login">Sign In</Link>
              </Button>
              <Button size="sm" className="w-full bg-green-600 hover:bg-green-700">Get Started</Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

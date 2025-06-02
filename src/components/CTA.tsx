
import { ArrowRight, Mail, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const CTA = () => {
  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-green-600 to-blue-600">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Transform Your Energy Data?
            </h2>
            <p className="text-xl text-green-100 mb-8">
              Join hundreds of companies already using our platform to optimize their renewable energy operations and drive economic performance.
            </p>
            
            <div className="space-y-4 mb-8">
              <div className="flex items-center text-green-100">
                <div className="w-2 h-2 bg-green-300 rounded-full mr-4"></div>
                <span>Free 14-day trial with full platform access</span>
              </div>
              <div className="flex items-center text-green-100">
                <div className="w-2 h-2 bg-blue-300 rounded-full mr-4"></div>
                <span>Dedicated onboarding and support team</span>
              </div>
              <div className="flex items-center text-green-100">
                <div className="w-2 h-2 bg-purple-300 rounded-full mr-4"></div>
                <span>Custom integration with your existing systems</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <div className="flex items-center text-white">
                <Mail className="h-5 w-5 mr-2" />
                <span>hello@energydata.com</span>
              </div>
              <div className="flex items-center text-white">
                <Phone className="h-5 w-5 mr-2" />
                <span>+1 (555) 123-4567</span>
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-2xl p-8 shadow-2xl">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Start Your Free Trial</h3>
            
            <form className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <Input placeholder="First Name" className="border-gray-300" />
                <Input placeholder="Last Name" className="border-gray-300" />
              </div>
              <Input placeholder="Business Email" type="email" className="border-gray-300" />
              <Input placeholder="Company Name" className="border-gray-300" />
              <Input placeholder="Phone Number" className="border-gray-300" />
              
              <Button size="lg" className="w-full bg-green-600 hover:bg-green-700 text-white py-3">
                Get Started Free
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </form>
            
            <p className="text-sm text-gray-500 mt-4 text-center">
              No credit card required. Cancel anytime.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;


import { Play, ArrowLeft, CheckCircle, BarChart3, TrendingUp, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Link } from 'react-router-dom';

const Demo = () => {
  const demoFeatures = [
    {
      icon: BarChart3,
      title: "Real-time Data Processing",
      description: "See how we process live energy data from multiple sources",
      timestamp: "0:45"
    },
    {
      icon: TrendingUp,
      title: "Economic Performance Modeling",
      description: "Watch data transform into actionable financial insights",
      timestamp: "2:15"
    },
    {
      icon: Zap,
      title: "Optimization Recommendations",
      description: "AI-powered suggestions for maximum efficiency",
      timestamp: "3:30"
    }
  ];

  const benefits = [
    "15-30% improvement in energy efficiency",
    "Real-time monitoring and alerts",
    "Seamless integration with existing systems",
    "Enterprise-grade security and compliance"
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <Link to="/" className="flex items-center text-green-600 hover:text-green-700">
              <ArrowLeft className="h-5 w-5 mr-2" />
              Back to Home
            </Link>
            <div className="flex items-center space-x-4">
              <Button variant="outline">Contact Sales</Button>
              <Button className="bg-green-600 hover:bg-green-700">Start Free Trial</Button>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            See EnergyData in Action
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Watch how our platform transforms renewable energy data into powerful economic insights that drive real business results.
          </p>
        </div>

        {/* Video Section */}
        <div className="mb-16">
          <div className="relative bg-gray-900 rounded-2xl overflow-hidden shadow-2xl">
            <div className="aspect-video flex items-center justify-center">
              <div className="text-center">
                <div className="w-20 h-20 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4 hover:bg-green-700 transition-colors cursor-pointer">
                  <Play className="h-8 w-8 text-white ml-1" />
                </div>
                <h3 className="text-white text-xl font-semibold mb-2">Platform Demo Video</h3>
                <p className="text-gray-300">5 minutes • See the full platform walkthrough</p>
              </div>
            </div>
            <div className="absolute top-4 right-4 bg-black/50 text-white px-3 py-1 rounded text-sm">
              5:42
            </div>
          </div>
          <p className="text-center text-gray-500 mt-4">
            Video placeholder - Upload your demo video to replace this section
          </p>
        </div>

        {/* Demo Timeline */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            What You'll See in the Demo
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {demoFeatures.map((feature, index) => (
              <Card key={index} className="border-0 shadow-lg">
                <CardHeader>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                      <feature.icon className="h-6 w-6 text-green-600" />
                    </div>
                    <span className="text-sm text-gray-500 font-mono">{feature.timestamp}</span>
                  </div>
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Benefits Section */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Real Results from Real Customers
            </h2>
            <div className="space-y-4">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center">
                  <CheckCircle className="h-6 w-6 text-green-600 mr-3 flex-shrink-0" />
                  <span className="text-lg text-gray-700">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
          
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <div className="text-center mb-6">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Ready to Get Started?</h3>
              <p className="text-gray-600">Join hundreds of companies already optimizing their renewable energy operations.</p>
            </div>
            
            <div className="space-y-4">
              <Button size="lg" className="w-full bg-green-600 hover:bg-green-700">
                Start Your Free Trial
              </Button>
              <Button variant="outline" size="lg" className="w-full">
                Schedule a Consultation
              </Button>
            </div>
            
            <p className="text-sm text-gray-500 text-center mt-4">
              No credit card required • 14-day free trial
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Demo;

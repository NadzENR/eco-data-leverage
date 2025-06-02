
import { Factory, Building2, Home, Cpu } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const Solutions = () => {
  const solutions = [
    {
      icon: Factory,
      title: "Industrial Operations",
      description: "Optimize large-scale renewable energy systems for manufacturing and industrial facilities.",
      features: ["Multi-site monitoring", "Production correlation", "Demand forecasting", "Cost optimization"],
      color: "bg-gradient-to-br from-green-500 to-green-600"
    },
    {
      icon: Building2,
      title: "Commercial Buildings",
      description: "Smart energy management for office buildings, retail spaces, and commercial complexes.",
      features: ["Building automation", "Tenant billing", "Peak load management", "Efficiency tracking"],
      color: "bg-gradient-to-br from-blue-500 to-blue-600"
    },
    {
      icon: Home,
      title: "Residential Communities",
      description: "Community-scale energy optimization for housing developments and neighborhoods.",
      features: ["Community sharing", "Grid integration", "Billing optimization", "Usage analytics"],
      color: "bg-gradient-to-br from-purple-500 to-purple-600"
    },
    {
      icon: Cpu,
      title: "Data Centers",
      description: "Mission-critical energy management for high-availability computing infrastructure.",
      features: ["Redundancy planning", "Cooling optimization", "Carbon tracking", "Compliance reporting"],
      color: "bg-gradient-to-br from-orange-500 to-orange-600"
    }
  ];

  return (
    <section id="solutions" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Solutions for Every Industry
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Tailored renewable energy data solutions designed to meet the unique challenges of different sectors and use cases.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {solutions.map((solution, index) => (
            <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group">
              <CardHeader>
                <div className={`w-16 h-16 rounded-lg ${solution.color} flex items-center justify-center mb-4`}>
                  <solution.icon className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-2xl font-semibold text-gray-900">{solution.title}</CardTitle>
                <CardDescription className="text-gray-600 text-lg">
                  {solution.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  {solution.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center">
                      <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Solutions;

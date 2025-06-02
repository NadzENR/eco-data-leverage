
import { BarChart3, Zap, Shield, TrendingUp, Database, Clock } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const Features = () => {
  const features = [
    {
      icon: BarChart3,
      title: "Real-time Analytics",
      description: "Monitor energy production and consumption patterns with live data visualization and predictive insights.",
      color: "text-green-600"
    },
    {
      icon: Zap,
      title: "Performance Optimization",
      description: "AI-powered algorithms identify inefficiencies and recommend optimization strategies for maximum ROI.",
      color: "text-blue-600"
    },
    {
      icon: Shield,
      title: "Enterprise Security",
      description: "Bank-level encryption and compliance with industry standards ensure your data remains secure.",
      color: "text-purple-600"
    },
    {
      icon: TrendingUp,
      title: "Economic Modeling",
      description: "Transform energy metrics into financial forecasts and performance indicators that matter to your business.",
      color: "text-orange-600"
    },
    {
      icon: Database,
      title: "Data Integration",
      description: "Seamlessly connect with existing energy management systems and IoT devices for comprehensive coverage.",
      color: "text-cyan-600"
    },
    {
      icon: Clock,
      title: "Automated Reporting",
      description: "Generate detailed reports and insights automatically, saving time and ensuring consistency.",
      color: "text-indigo-600"
    }
  ];

  return (
    <section id="features" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Powerful Features for Energy Intelligence
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our comprehensive platform provides everything you need to transform renewable energy data into actionable business insights.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <CardHeader>
                <div className={`w-12 h-12 rounded-lg bg-gray-50 flex items-center justify-center mb-4`}>
                  <feature.icon className={`h-6 w-6 ${feature.color}`} />
                </div>
                <CardTitle className="text-xl font-semibold text-gray-900">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600 text-base leading-relaxed">
                  {feature.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;

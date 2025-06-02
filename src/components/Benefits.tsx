
import { CheckCircle, Users, Building, Lightbulb } from 'lucide-react';

const Benefits = () => {
  const benefits = [
    {
      percentage: "35%",
      title: "Operational Cost Reduction",
      description: "Average cost savings achieved by optimizing energy consumption patterns"
    },
    {
      percentage: "24/7",
      title: "Continuous Monitoring",
      description: "Real-time oversight of your renewable energy infrastructure"
    },
    {
      percentage: "99.9%",
      title: "Uptime Guarantee",
      description: "Reliable platform performance for mission-critical operations"
    },
    {
      percentage: "15x",
      title: "Faster Decision Making",
      description: "Accelerated insights from complex energy data analysis"
    }
  ];

  const outcomes = [
    "Reduce operational costs by up to 35%",
    "Improve energy efficiency and ROI",
    "Make data-driven decisions faster",
    "Scale renewable energy operations confidently",
    "Meet sustainability goals and compliance requirements",
    "Gain competitive advantage through optimization"
  ];

  return (
    <section id="benefits" className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Measurable Business Impact
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Companies using our platform see significant improvements in operational efficiency and economic performance within the first quarter.
            </p>
            
            <div className="space-y-4 mb-8">
              {outcomes.map((outcome, index) => (
                <div key={index} className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-600 mr-3 flex-shrink-0" />
                  <span className="text-gray-700">{outcome}</span>
                </div>
              ))}
            </div>

            <div className="flex items-center space-x-8">
              <div className="flex items-center">
                <Users className="h-8 w-8 text-green-600 mr-3" />
                <div>
                  <p className="text-2xl font-bold text-gray-900">500+</p>
                  <p className="text-sm text-gray-600">Companies Trust Us</p>
                </div>
              </div>
              <div className="flex items-center">
                <Building className="h-8 w-8 text-blue-600 mr-3" />
                <div>
                  <p className="text-2xl font-bold text-gray-900">50+</p>
                  <p className="text-sm text-gray-600">Countries Served</p>
                </div>
              </div>
              <div className="flex items-center">
                <Lightbulb className="h-8 w-8 text-purple-600 mr-3" />
                <div>
                  <p className="text-2xl font-bold text-gray-900">10TB+</p>
                  <p className="text-sm text-gray-600">Data Processed Daily</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-6">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="text-3xl font-bold bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent mb-2">
                  {benefit.percentage}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{benefit.title}</h3>
                <p className="text-gray-600 text-sm">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;


import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '@/hooks/useAuth';
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  TrendingUp,
  AlertTriangle,
  Target,
  DollarSign,
  Activity,
  MapPin,
  Zap,
  LogOut
} from 'lucide-react';

const Dashboard = () => {
  const { isAuthenticated, isLoading, logout } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!isLoading && !isAuthenticated) {
      navigate('/login');
    }
  }, [isAuthenticated, isLoading, navigate]);

  const handleSignOut = () => {
    logout();
    navigate('/login');
  };

  if (isLoading) {
    return <div className="min-h-screen bg-gray-50 flex items-center justify-center">
      <div>Loading...</div>
    </div>;
  }

  if (!isAuthenticated) {
    return null;
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <Zap className="h-8 w-8 text-green-600" />
              <span className="ml-2 text-xl font-bold text-gray-900">LumenAI Dashboard</span>
            </div>
            <div className="flex items-center space-x-4">
              <span className="text-sm text-gray-600">Welcome, user1</span>
              <Button variant="outline" size="sm" onClick={handleSignOut}>
                <LogOut className="h-4 w-4 mr-2" />
                Sign Out
              </Button>
            </div>
          </div>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-6 flex flex-wrap gap-4">
          <div className="flex items-center space-x-2">
            <label htmlFor="asset-type" className="text-sm font-medium text-gray-700">Asset Type:</label>
            <select id="asset-type" className="border border-gray-300 rounded-md px-3 py-1 text-sm">
              <option>All Assets</option>
              <option>Solar</option>
              <option>Wind</option>
              <option>BESS</option>
            </select>
          </div>
          <div className="flex items-center space-x-2">
            <label htmlFor="date-range" className="text-sm font-medium text-gray-700">Date Range:</label>
            <select id="date-range" className="border border-gray-300 rounded-md px-3 py-1 text-sm">
              <option>Last 7 days</option>
              <option>Last 30 days</option>
              <option>Last 90 days</option>
              <option>Custom</option>
            </select>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center text-lg">
                <TrendingUp className="h-5 w-5 text-green-600 mr-2" />
                Performance Ratio (PR)
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-600">Current PR</span>
                  <span className="text-2xl font-bold text-green-600">94.2%</span>
                </div>
                <div className="h-32 bg-gray-100 rounded flex items-center justify-center">
                  <span className="text-sm text-gray-500">PR Trend Chart</span>
                </div>
                <div className="text-xs text-gray-500">
                  +2.1% vs expected | Target: 92%
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center text-lg">
                <AlertTriangle className="h-5 w-5 text-orange-600 mr-2" />
                Soiling Impact (SDII)
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-600">Energy Loss</span>
                  <span className="text-2xl font-bold text-orange-600">3.2%</span>
                </div>
                <div className="h-32 bg-gray-100 rounded flex items-center justify-center">
                  <span className="text-sm text-gray-500">Soiling Trend Chart</span>
                </div>
                <div className="text-xs text-red-600">
                  ⚠️ Cleaning recommended in 3 days
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center text-lg">
                <Target className="h-5 w-5 text-blue-600 mr-2" />
                Forecast Accuracy (FAI)
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-600">MAPE</span>
                  <span className="text-2xl font-bold text-blue-600">8.7%</span>
                </div>
                <div className="h-32 bg-gray-100 rounded flex items-center justify-center">
                  <span className="text-sm text-gray-500">Forecast vs Actual</span>
                </div>
                <div className="text-xs text-gray-500">
                  RMSE: 12.3 MW | Bias: -1.2%
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center text-lg">
                <DollarSign className="h-5 w-5 text-green-600 mr-2" />
                Revenue per MWh (MVI)
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="grid grid-cols-3 gap-4 text-center">
                  <div>
                    <div className="text-sm text-gray-600">Actual</div>
                    <div className="text-xl font-bold text-green-600">€84.50</div>
                  </div>
                  <div>
                    <div className="text-sm text-gray-600">PPA Price</div>
                    <div className="text-xl font-bold text-blue-600">€82.00</div>
                  </div>
                  <div>
                    <div className="text-sm text-gray-600">Spot Price</div>
                    <div className="text-xl font-bold text-purple-600">€89.20</div>
                  </div>
                </div>
                <div className="h-32 bg-gray-100 rounded flex items-center justify-center">
                  <span className="text-sm text-gray-500">Revenue Waterfall Chart</span>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center text-lg">
                <Activity className="h-5 w-5 text-red-600 mr-2" />
                Asset Health Score (AHS)
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600">Solar Farm A</span>
                    <span className="px-2 py-1 rounded text-xs font-medium bg-green-100 text-green-800">95</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600">Wind Farm B</span>
                    <span className="px-2 py-1 rounded text-xs font-medium bg-yellow-100 text-yellow-800">78</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600">BESS C</span>
                    <span className="px-2 py-1 rounded text-xs font-medium bg-red-100 text-red-800">62</span>
                  </div>
                </div>
                <div className="h-24 bg-gray-100 rounded flex items-center justify-center">
                  <span className="text-sm text-gray-500">Health Timeline</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center text-lg">
              <MapPin className="h-5 w-5 text-blue-600 mr-2" />
              Asset Performance Map
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-64 bg-gray-100 rounded flex items-center justify-center">
              <span className="text-gray-500">Interactive map showing asset locations with color-coded performance indicators</span>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Dashboard;

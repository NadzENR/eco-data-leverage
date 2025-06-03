import { useState, useEffect } from 'react';
import { Activity, Zap, Wind, Sun, Battery, TrendingUp, AlertTriangle, Settings, MapPin, Calendar, DollarSign, Wrench } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { ChartContainer, ChartTooltip, ChartTooltipContent } from '@/components/ui/chart';
import { LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, ResponsiveContainer, Area, AreaChart } from 'recharts';

const Dashboard = () => {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [selectedAssetType, setSelectedAssetType] = useState('all');
  const [selectedDateRange, setSelectedDateRange] = useState('7d');

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  // Sample data for charts
  const performanceRatioData = [
    { date: '2024-05-27', solar: 0.82, wind: 0.91, expected: 0.85 },
    { date: '2024-05-28', solar: 0.85, wind: 0.88, expected: 0.85 },
    { date: '2024-05-29', solar: 0.78, wind: 0.93, expected: 0.85 },
    { date: '2024-05-30', solar: 0.87, wind: 0.89, expected: 0.85 },
    { date: '2024-05-31', solar: 0.84, wind: 0.92, expected: 0.85 },
    { date: '2024-06-01', solar: 0.89, wind: 0.87, expected: 0.85 },
    { date: '2024-06-02', solar: 0.86, wind: 0.94, expected: 0.85 }
  ];

  const soilingData = [
    { site: 'Solar Alpha', energyLoss: 3.2, cleaningDue: '2024-06-05', roi: 150 },
    { site: 'Solar Gamma', energyLoss: 5.8, cleaningDue: '2024-06-03', roi: 220 },
    { site: 'Solar Beta', energyLoss: 2.1, cleaningDue: '2024-06-08', roi: 95 }
  ];

  const forecastAccuracyData = [
    { hour: '00:00', forecasted: 0, actual: 0, error: 0 },
    { hour: '06:00', forecasted: 15, actual: 12, error: 20 },
    { hour: '12:00', forecasted: 85, actual: 88, error: 3.5 },
    { hour: '18:00', forecasted: 35, actual: 32, error: 8.6 },
    { hour: '24:00', forecasted: 0, actual: 0, error: 0 }
  ];

  const revenueData = [
    { site: 'Solar Alpha', eurPerMwh: 85.2, ppaPrice: 80.0, spotPrice: 90.1 },
    { site: 'Wind Beta', eurPerMwh: 78.5, ppaPrice: 75.0, spotPrice: 82.3 },
    { site: 'Solar Gamma', eurPerMwh: 82.1, ppaPrice: 80.0, spotPrice: 85.7 }
  ];

  // Asset data
  const assetData = [
    {
      id: 'SOLAR-001',
      name: 'Solar Farm Alpha',
      type: 'Solar',
      capacity: '25.5 MW',
      current: '22.1 MW',
      efficiency: 86.7,
      status: 'Active',
      revenue: '$12,450',
      healthScore: 92,
      performanceRatio: 0.86,
      lastMaintenance: '2024-05-15'
    },
    {
      id: 'WIND-002', 
      name: 'Wind Farm Beta',
      type: 'Wind',
      capacity: '40.0 MW',
      current: '35.2 MW',
      efficiency: 88.0,
      status: 'Active',
      revenue: '$18,760',
      healthScore: 88,
      performanceRatio: 0.91,
      lastMaintenance: '2024-05-10'
    },
    {
      id: 'SOLAR-003',
      name: 'Solar Farm Gamma',
      type: 'Solar', 
      capacity: '18.2 MW',
      current: '15.8 MW',
      efficiency: 86.8,
      status: 'Active',
      revenue: '$8,920',
      healthScore: 85,
      performanceRatio: 0.84,
      lastMaintenance: '2024-05-20'
    },
    {
      id: 'WIND-004',
      name: 'Wind Farm Delta',
      type: 'Wind',
      capacity: '32.5 MW', 
      current: '28.7 MW',
      efficiency: 88.3,
      status: 'Maintenance',
      revenue: '$15,340',
      healthScore: 76,
      performanceRatio: 0.88,
      lastMaintenance: '2024-06-01'
    }
  ];

  const totalCapacity = assetData.reduce((sum, asset) => sum + parseFloat(asset.capacity), 0);
  const totalCurrent = assetData.reduce((sum, asset) => sum + parseFloat(asset.current), 0);
  const totalRevenue = assetData.reduce((sum, asset) => sum + parseFloat(asset.revenue.replace('$', '').replace(',', '')), 0);

  const chartConfig = {
    solar: { label: "Solar", color: "#f59e0b" },
    wind: { label: "Wind", color: "#3b82f6" },
    expected: { label: "Expected", color: "#6b7280" },
    forecasted: { label: "Forecasted", color: "#10b981" },
    actual: { label: "Actual", color: "#ef4444" }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <Zap className="h-8 w-8 text-green-600" />
              <span className="ml-2 text-xl font-bold text-gray-900">Lumen Energies</span>
              <span className="ml-4 text-sm text-gray-500">Dashboard</span>
            </div>
            <div className="flex items-center space-x-4">
              <div className="text-sm text-gray-600">
                Last updated: {currentTime.toLocaleTimeString()}
              </div>
              <Button variant="outline" size="sm">
                <Settings className="h-4 w-4 mr-2" />
                Settings
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Filters */}
        <div className="flex gap-4 mb-8">
          <Select value={selectedAssetType} onValueChange={setSelectedAssetType}>
            <SelectTrigger className="w-48">
              <SelectValue placeholder="Asset Type" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Assets</SelectItem>
              <SelectItem value="solar">Solar</SelectItem>
              <SelectItem value="wind">Wind</SelectItem>
              <SelectItem value="bess">BESS</SelectItem>
            </SelectContent>
          </Select>
          
          <Select value={selectedDateRange} onValueChange={setSelectedDateRange}>
            <SelectTrigger className="w-48">
              <SelectValue placeholder="Date Range" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="1d">Last 24 Hours</SelectItem>
              <SelectItem value="7d">Last 7 Days</SelectItem>
              <SelectItem value="30d">Last 30 Days</SelectItem>
              <SelectItem value="90d">Last 90 Days</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Overview Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Capacity</CardTitle>
              <Activity className="h-4 w-4 text-green-600" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{totalCapacity.toFixed(1)} MW</div>
              <p className="text-xs text-muted-foreground">+2.1% from last month</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Current Output</CardTitle>
              <Zap className="h-4 w-4 text-blue-600" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{totalCurrent.toFixed(1)} MW</div>
              <p className="text-xs text-muted-foreground">87.4% of capacity</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Daily Revenue</CardTitle>
              <TrendingUp className="h-4 w-4 text-green-600" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">${totalRevenue.toLocaleString()}</div>
              <p className="text-xs text-muted-foreground">+5.2% from yesterday</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">System Status</CardTitle>
              <AlertTriangle className="h-4 w-4 text-yellow-600" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">1 Alert</div>
              <p className="text-xs text-muted-foreground">Wind-004 maintenance</p>
            </CardContent>
          </Card>
        </div>

        {/* Performance Indicators */}
        <div className="grid lg:grid-cols-2 gap-8 mb-8">
          {/* 1. Performance Ratio */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <TrendingUp className="h-5 w-5 text-green-500 mr-2" />
                Performance Ratio (PR)
              </CardTitle>
              <CardDescription>Capacity factor over time vs expected performance</CardDescription>
            </CardHeader>
            <CardContent>
              <ChartContainer config={chartConfig} className="h-64">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={performanceRatioData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="date" />
                    <YAxis />
                    <ChartTooltip content={<ChartTooltipContent />} />
                    <Line type="monotone" dataKey="solar" stroke="var(--color-solar)" strokeWidth={2} />
                    <Line type="monotone" dataKey="wind" stroke="var(--color-wind)" strokeWidth={2} />
                    <Line type="monotone" dataKey="expected" stroke="var(--color-expected)" strokeDasharray="5 5" />
                  </LineChart>
                </ResponsiveContainer>
              </ChartContainer>
            </CardContent>
          </Card>

          {/* 2. Asset Health Score */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Wrench className="h-5 w-5 text-blue-500 mr-2" />
                Asset Health Score
              </CardTitle>
              <CardDescription>Real-time health monitoring and maintenance forecast</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {assetData.map((asset) => (
                  <div key={asset.id} className="flex justify-between items-center">
                    <span className="text-sm font-medium">{asset.name}</span>
                    <div className="flex items-center">
                      <div className="w-24 bg-gray-200 rounded-full h-2 mr-3">
                        <div 
                          className={`h-2 rounded-full ${
                            asset.healthScore > 90 ? 'bg-green-500' : 
                            asset.healthScore > 80 ? 'bg-yellow-500' : 'bg-red-500'
                          }`}
                          style={{width: `${asset.healthScore}%`}}
                        ></div>
                      </div>
                      <span className="text-sm font-semibold">{asset.healthScore}</span>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Revenue and Forecast Indicators */}
        <div className="grid lg:grid-cols-2 gap-8 mb-8">
          {/* 3. Revenue per MWh */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <DollarSign className="h-5 w-5 text-green-500 mr-2" />
                Revenue per MWh
              </CardTitle>
              <CardDescription>Market value index vs PPA and spot prices</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {revenueData.map((item, index) => (
                  <div key={index} className="border rounded-lg p-4">
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-medium">{item.site}</span>
                      <span className="text-lg font-bold text-green-600">€{item.eurPerMwh}</span>
                    </div>
                    <div className="flex justify-between text-sm text-gray-600">
                      <span>PPA: €{item.ppaPrice}</span>
                      <span>Spot: €{item.spotPrice}</span>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* 4. Forecast Accuracy */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Activity className="h-5 w-5 text-purple-500 mr-2" />
                Forecast Accuracy Index
              </CardTitle>
              <CardDescription>Forecasted vs actual generation with error metrics</CardDescription>
            </CardHeader>
            <CardContent>
              <ChartContainer config={chartConfig} className="h-48">
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart data={forecastAccuracyData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="hour" />
                    <YAxis />
                    <ChartTooltip content={<ChartTooltipContent />} />
                    <Area type="monotone" dataKey="forecasted" stroke="var(--color-forecasted)" fill="var(--color-forecasted)" fillOpacity={0.3} />
                    <Area type="monotone" dataKey="actual" stroke="var(--color-actual)" fill="var(--color-actual)" fillOpacity={0.3} />
                  </AreaChart>
                </ResponsiveContainer>
              </ChartContainer>
              <div className="flex justify-between text-sm text-gray-600 mt-2">
                <span>MAPE: 5.2%</span>
                <span>RMSE: 8.7 MW</span>
                <span>Bias: +2.1%</span>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Soiling Impact */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center">
              <Sun className="h-5 w-5 text-orange-500 mr-2" />
              Soiling Impact Index
            </CardTitle>
            <CardDescription>Energy loss due to soiling with cleaning recommendations</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <ChartContainer config={chartConfig} className="h-48">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={soilingData}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="site" />
                      <YAxis />
                      <ChartTooltip content={<ChartTooltipContent />} />
                      <Bar dataKey="energyLoss" fill="#f59e0b" />
                    </BarChart>
                  </ResponsiveContainer>
                </ChartContainer>
              </div>
              <div className="space-y-3">
                <h4 className="font-semibold">Cleaning Recommendations</h4>
                {soilingData.map((item, index) => (
                  <div key={index} className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                    <div>
                      <div className="font-medium">{item.site}</div>
                      <div className="text-sm text-gray-600">Due: {item.cleaningDue}</div>
                    </div>
                    <div className="text-right">
                      <div className="font-semibold text-green-600">€{item.roi} ROI</div>
                      <div className="text-sm text-red-600">{item.energyLoss}% loss</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Real-time Performance */}
        <div className="grid lg:grid-cols-2 gap-8 mb-8">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Sun className="h-5 w-5 text-yellow-500 mr-2" />
                Solar Performance
              </CardTitle>
              <CardDescription>Real-time solar asset monitoring</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-600">Solar Farm Alpha</span>
                  <div className="flex items-center">
                    <div className="w-24 bg-gray-200 rounded-full h-2 mr-3">
                      <div className="bg-yellow-500 h-2 rounded-full" style={{width: '86.7%'}}></div>
                    </div>
                    <span className="text-sm font-semibold">86.7%</span>
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-600">Solar Farm Gamma</span>
                  <div className="flex items-center">
                    <div className="w-24 bg-gray-200 rounded-full h-2 mr-3">
                      <div className="bg-yellow-500 h-2 rounded-full" style={{width: '86.8%'}}></div>
                    </div>
                    <span className="text-sm font-semibold">86.8%</span>
                  </div>
                </div>
                <div className="bg-yellow-50 rounded-lg p-4 mt-4">
                  <div className="text-sm font-medium text-yellow-800">Optimal Performance</div>
                  <div className="text-xs text-yellow-700">Solar assets operating within expected parameters</div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Wind className="h-5 w-5 text-blue-500 mr-2" />
                Wind Performance
              </CardTitle>
              <CardDescription>Real-time wind asset monitoring</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-600">Wind Farm Beta</span>
                  <div className="flex items-center">
                    <div className="w-24 bg-gray-200 rounded-full h-2 mr-3">
                      <div className="bg-blue-500 h-2 rounded-full" style={{width: '88.0%'}}></div>
                    </div>
                    <span className="text-sm font-semibold">88.0%</span>
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-600">Wind Farm Delta</span>
                  <div className="flex items-center">
                    <div className="w-24 bg-gray-200 rounded-full h-2 mr-3">
                      <div className="bg-orange-500 h-2 rounded-full" style={{width: '88.3%'}}></div>
                    </div>
                    <span className="text-sm font-semibold">88.3%</span>
                  </div>
                </div>
                <div className="bg-orange-50 rounded-lg p-4 mt-4">
                  <div className="text-sm font-medium text-orange-800">Maintenance Alert</div>
                  <div className="text-xs text-orange-700">Wind Farm Delta scheduled maintenance in progress</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Asset Table */}
        <Card>
          <CardHeader>
            <CardTitle>Asset Overview</CardTitle>
            <CardDescription>Detailed view of all renewable energy assets with performance metrics</CardDescription>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Asset ID</TableHead>
                  <TableHead>Name</TableHead>
                  <TableHead>Type</TableHead>
                  <TableHead>Capacity</TableHead>
                  <TableHead>Current Output</TableHead>
                  <TableHead>Performance Ratio</TableHead>
                  <TableHead>Health Score</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Daily Revenue</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {assetData.map((asset) => (
                  <TableRow key={asset.id}>
                    <TableCell className="font-mono text-sm">{asset.id}</TableCell>
                    <TableCell className="font-medium">{asset.name}</TableCell>
                    <TableCell>
                      <div className="flex items-center">
                        {asset.type === 'Solar' ? (
                          <Sun className="h-4 w-4 text-yellow-500 mr-2" />
                        ) : (
                          <Wind className="h-4 w-4 text-blue-500 mr-2" />
                        )}
                        {asset.type}
                      </div>
                    </TableCell>
                    <TableCell>{asset.capacity}</TableCell>
                    <TableCell className="font-semibold">{asset.current}</TableCell>
                    <TableCell>
                      <div className="flex items-center">
                        <div className="w-16 bg-gray-200 rounded-full h-2 mr-2">
                          <div 
                            className={`h-2 rounded-full ${asset.performanceRatio > 0.87 ? 'bg-green-500' : 'bg-yellow-500'}`}
                            style={{width: `${asset.performanceRatio * 100}%`}}
                          ></div>
                        </div>
                        <span className="text-sm">{(asset.performanceRatio * 100).toFixed(1)}%</span>
                      </div>
                    </TableCell>
                    <TableCell>
                      <div className="flex items-center">
                        <div className={`w-3 h-3 rounded-full mr-2 ${
                          asset.healthScore > 90 ? 'bg-green-500' : 
                          asset.healthScore > 80 ? 'bg-yellow-500' : 'bg-red-500'
                        }`}></div>
                        <span className="text-sm font-semibold">{asset.healthScore}</span>
                      </div>
                    </TableCell>
                    <TableCell>
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                        asset.status === 'Active' 
                          ? 'bg-green-100 text-green-800' 
                          : 'bg-orange-100 text-orange-800'
                      }`}>
                        {asset.status}
                      </span>
                    </TableCell>
                    <TableCell className="font-semibold text-green-600">{asset.revenue}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Dashboard;

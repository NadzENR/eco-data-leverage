
import { useState, useEffect } from 'react';
import { Activity, Zap, Wind, Sun, Battery, TrendingUp, AlertTriangle, Settings } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';

const Dashboard = () => {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const assetData = [
    {
      id: 'SOLAR-001',
      name: 'Solar Farm Alpha',
      type: 'Solar',
      capacity: '25.5 MW',
      current: '22.1 MW',
      efficiency: 86.7,
      status: 'Active',
      revenue: '$12,450'
    },
    {
      id: 'WIND-002', 
      name: 'Wind Farm Beta',
      type: 'Wind',
      capacity: '40.0 MW',
      current: '35.2 MW',
      efficiency: 88.0,
      status: 'Active',
      revenue: '$18,760'
    },
    {
      id: 'SOLAR-003',
      name: 'Solar Farm Gamma',
      type: 'Solar', 
      capacity: '18.2 MW',
      current: '15.8 MW',
      efficiency: 86.8,
      status: 'Active',
      revenue: '$8,920'
    },
    {
      id: 'WIND-004',
      name: 'Wind Farm Delta',
      type: 'Wind',
      capacity: '32.5 MW', 
      current: '28.7 MW',
      efficiency: 88.3,
      status: 'Maintenance',
      revenue: '$15,340'
    }
  ];

  const totalCapacity = assetData.reduce((sum, asset) => sum + parseFloat(asset.capacity), 0);
  const totalCurrent = assetData.reduce((sum, asset) => sum + parseFloat(asset.current), 0);
  const totalRevenue = assetData.reduce((sum, asset) => sum + parseFloat(asset.revenue.replace('$', '').replace(',', '')), 0);

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
            <CardDescription>Detailed view of all renewable energy assets</CardDescription>
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
                  <TableHead>Efficiency</TableHead>
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
                            className={`h-2 rounded-full ${asset.efficiency > 87 ? 'bg-green-500' : 'bg-yellow-500'}`}
                            style={{width: `${asset.efficiency}%`}}
                          ></div>
                        </div>
                        <span className="text-sm">{asset.efficiency}%</span>
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

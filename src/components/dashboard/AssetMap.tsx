
import { MapPin, Zap, Wind, Battery } from 'lucide-react';

const assets = [
  { id: 1, name: 'Solar Farm A', type: 'solar', status: 'excellent', x: 20, y: 30 },
  { id: 2, name: 'Wind Farm B', type: 'wind', status: 'good', x: 60, y: 45 },
  { id: 3, name: 'BESS C', type: 'battery', status: 'warning', x: 80, y: 20 },
  { id: 4, name: 'Solar Farm D', type: 'solar', status: 'excellent', x: 40, y: 70 },
];

const getStatusColor = (status: string) => {
  switch (status) {
    case 'excellent': return 'text-green-600';
    case 'good': return 'text-yellow-600';
    case 'warning': return 'text-red-600';
    default: return 'text-gray-600';
  }
};

const getAssetIcon = (type: string) => {
  switch (type) {
    case 'solar': return Zap;
    case 'wind': return Wind;
    case 'battery': return Battery;
    default: return MapPin;
  }
};

export const AssetMap = () => {
  return (
    <div className="relative w-full h-64 bg-gradient-to-br from-blue-50 to-green-50 rounded-lg overflow-hidden">
      {/* Simple map background */}
      <div className="absolute inset-0 opacity-20">
        <svg viewBox="0 0 100 100" className="w-full h-full">
          <path d="M10,50 Q30,30 50,50 T90,40" stroke="#94a3b8" strokeWidth="0.5" fill="none" />
          <path d="M20,70 Q40,60 60,70 T85,65" stroke="#94a3b8" strokeWidth="0.5" fill="none" />
          <circle cx="25" cy="25" r="2" fill="#cbd5e1" />
          <circle cx="75" cy="75" r="1.5" fill="#cbd5e1" />
        </svg>
      </div>

      {/* Asset markers */}
      {assets.map((asset) => {
        const Icon = getAssetIcon(asset.type);
        return (
          <div
            key={asset.id}
            className="absolute transform -translate-x-1/2 -translate-y-1/2 cursor-pointer group"
            style={{ left: `${asset.x}%`, top: `${asset.y}%` }}
          >
            <div className={`p-2 rounded-full bg-white shadow-lg border-2 ${
              asset.status === 'excellent' ? 'border-green-500' :
              asset.status === 'good' ? 'border-yellow-500' : 'border-red-500'
            }`}>
              <Icon className={`h-4 w-4 ${getStatusColor(asset.status)}`} />
            </div>
            <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-2 py-1 bg-black text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
              {asset.name}
            </div>
          </div>
        );
      })}

      {/* Legend */}
      <div className="absolute top-4 right-4 bg-white p-3 rounded-lg shadow-lg text-xs">
        <div className="font-medium mb-2">Asset Status</div>
        <div className="space-y-1">
          <div className="flex items-center space-x-2">
            <div className="w-3 h-3 rounded-full bg-green-500"></div>
            <span>Excellent</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
            <span>Good</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-3 h-3 rounded-full bg-red-500"></div>
            <span>Warning</span>
          </div>
        </div>
      </div>
    </div>
  );
};

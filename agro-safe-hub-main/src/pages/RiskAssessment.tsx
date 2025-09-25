import { Navigation } from '@/components/Navigation';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import {
  Shield,
  AlertTriangle,
  CheckCircle,
  XCircle,
  ArrowLeft,
  FileText,
  Users,
  MapPin,
  Stethoscope
} from 'lucide-react';

const RiskAssessment = () => {
  const riskFactors = [
    {
      category: 'Biosecurity Measures',
      score: 85,
      status: 'good',
      items: [
        { name: 'Perimeter fencing', status: 'completed', risk: 'low' },
        { name: 'Visitor protocols', status: 'completed', risk: 'low' },
        { name: 'Vehicle disinfection', status: 'incomplete', risk: 'medium' },
        { name: 'Staff training', status: 'completed', risk: 'low' }
      ]
    },
    {
      category: 'Health Monitoring',
      score: 72,
      status: 'moderate',
      items: [
        { name: 'Regular health checks', status: 'completed', risk: 'low' },
        { name: 'Vaccination records', status: 'completed', risk: 'low' },
        { name: 'Disease surveillance', status: 'incomplete', risk: 'high' },
        { name: 'Mortality tracking', status: 'completed', risk: 'low' }
      ]
    },
    {
      category: 'Facility Management',
      score: 68,
      status: 'moderate',
      items: [
        { name: 'Waste management', status: 'incomplete', risk: 'medium' },
        { name: 'Pest control', status: 'completed', risk: 'low' },
        { name: 'Feed storage', status: 'completed', risk: 'low' },
        { name: 'Water quality testing', status: 'incomplete', risk: 'high' }
      ]
    }
  ];

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'completed':
        return <CheckCircle className="h-4 w-4 text-green-500" />;
      case 'incomplete':
        return <XCircle className="h-4 w-4 text-red-500" />;
      default:
        return <AlertTriangle className="h-4 w-4 text-yellow-500" />;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'good':
        return 'bg-green-100 text-green-800';
      case 'moderate':
        return 'bg-yellow-100 text-yellow-800';
      case 'poor':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const getRiskColor = (risk: string) => {
    switch (risk) {
      case 'low':
        return 'text-green-600';
      case 'medium':
        return 'text-yellow-600';
      case 'high':
        return 'text-red-600';
      default:
        return 'text-gray-600';
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <Button
            variant="ghost"
            onClick={() => window.history.back()}
            className="mb-4"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Home
          </Button>

          <div className="flex items-center gap-3 mb-4">
            <Shield className="h-8 w-8 text-primary" />
            <div>
              <h1 className="text-3xl font-bold text-foreground">Risk Assessment</h1>
              <p className="text-muted-foreground">Comprehensive biosecurity evaluation for your farm</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <Card>
              <CardHeader className="pb-3">
                <CardTitle className="text-lg">Overall Risk Score</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold text-primary mb-2">75/100</div>
                <Progress value={75} className="mb-2" />
                <Badge className="bg-yellow-100 text-yellow-800">Moderate Risk</Badge>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-3">
                <CardTitle className="text-lg">Last Assessment</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-foreground mb-2">Dec 15, 2024</div>
                <p className="text-sm text-muted-foreground">Next check: Jan 15, 2025</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-3">
                <CardTitle className="text-lg">Action Items</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-red-600 mb-2">8</div>
                <p className="text-sm text-muted-foreground">Items need attention</p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Risk Categories */}
        <div className="space-y-6">
          {riskFactors.map((category, index) => (
            <Card key={index}>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="flex items-center gap-2">
                    <Shield className="h-5 w-5" />
                    {category.category}
                  </CardTitle>
                  <div className="flex items-center gap-3">
                    <span className="text-sm font-medium">{category.score}/100</span>
                    <Badge className={getStatusColor(category.status)}>
                      {category.status.charAt(0).toUpperCase() + category.status.slice(1)}
                    </Badge>
                  </div>
                </div>
                <Progress value={category.score} className="mt-3" />
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {category.items.map((item, itemIndex) => (
                    <div key={itemIndex} className="flex items-center justify-between p-3 bg-muted/50 rounded-lg">
                      <div className="flex items-center gap-3">
                        {getStatusIcon(item.status)}
                        <span className="font-medium">{item.name}</span>
                      </div>
                      <Badge variant="outline" className={getRiskColor(item.risk)}>
                        {item.risk} risk
                      </Badge>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Recommendations */}
        <Card className="mt-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <FileText className="h-5 w-5" />
              Recommended Actions
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="p-4 bg-red-50 border border-red-200 rounded-lg">
                <h4 className="font-semibold text-red-800 mb-2">High Priority</h4>
                <ul className="text-sm text-red-700 space-y-1">
                  <li>• Implement disease surveillance program</li>
                  <li>• Set up water quality testing schedule</li>
                  <li>• Complete vehicle disinfection protocols</li>
                </ul>
              </div>

              <div className="p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
                <h4 className="font-semibold text-yellow-800 mb-2">Medium Priority</h4>
                <ul className="text-sm text-yellow-700 space-y-1">
                  <li>• Improve waste management procedures</li>
                  <li>• Update staff training materials</li>
                </ul>
              </div>

              <div className="p-4 bg-green-50 border border-green-200 rounded-lg">
                <h4 className="font-semibold text-green-800 mb-2">Completed</h4>
                <ul className="text-sm text-green-700 space-y-1">
                  <li>• Perimeter fencing installation</li>
                  <li>• Visitor protocol establishment</li>
                  <li>• Pest control measures</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Action Buttons */}
        <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" className="bg-primary hover:bg-primary/90">
            <FileText className="mr-2 h-5 w-5" />
            Generate Report
          </Button>
          <Button variant="outline" size="lg">
            <Users className="mr-2 h-5 w-5" />
            Schedule Consultation
          </Button>
          <Button variant="outline" size="lg">
            <MapPin className="mr-2 h-5 w-5" />
            View Risk Map
          </Button>
        </div>
      </div>
    </div>
  );
};

export default RiskAssessment;
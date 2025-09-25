import { Navigation } from '@/components/Navigation';
import { AnimatedBackground } from '@/components/AnimatedBackground';
import { DashboardCard } from '@/components/DashboardCard';
import { StatusIndicator } from '@/components/StatusIndicator';
import { AnimatedCounter } from '@/components/AnimatedCounter';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { ChartContainer, ChartTooltip, ChartTooltipContent } from '@/components/ui/chart';
import { useTranslation } from '@/contexts/LanguageContext';
import {
  Shield,
  Heart,
  TrendingUp,
  Calendar,
  AlertTriangle,
  CheckCircle,
  Activity,
  Stethoscope,
  PiggyBank,
  Bird,
  BarChart3,
  PieChart,
  LineChart
} from 'lucide-react';
import {
  LineChart as RechartsLineChart,
  Line,
  AreaChart as RechartsAreaChart,
  Area,
  BarChart as RechartsBarChart,
  Bar,
  PieChart as RechartsPieChart,
  Pie,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
  Legend
} from 'recharts';

const Dashboard = () => {
  const { t } = useTranslation();

  const healthMetrics = [
    {
      title: t('dashboard.healthScore'),
      value: '78/100',
      change: t('dashboard.checked') + ' 3 ' + t('dashboard.daysAgo'),
      trend: 'neutral' as const,
      icon: <Shield className="h-4 w-4" />,
    },
    {
      title: t('dashboard.vaccinationRate'),
      value: '89%',
      change: '406 ' + t('dashboard.of') + ' 456 ' + t('dashboard.animals'),
      trend: 'neutral' as const,
      icon: <Stethoscope className="h-4 w-4" />,
    },
    {
      title: t('dashboard.deathsThisMonth'),
      value: '3',
      change: t('dashboard.normalRange'),
      trend: 'neutral' as const,
      icon: <Heart className="h-4 w-4" />,
    },
    {
      title: t('dashboard.securityCheck'),
      value: 'Good',
      change: t('dashboard.next') + ': Feb 15',
      trend: 'up' as const,
      icon: <AlertTriangle className="h-4 w-4" />,
    },
  ];

  const recentActivities = [
    {
      action: 'Fed chickens',
      target: 'Main coop - 342 birds',
      time: 'This morning',
      status: 'success',
    },
    {
      action: 'Checked pig pen',
      target: 'Section B - 114 pigs',
      time: 'Yesterday',
      status: 'success',
    },
    {
      action: 'Cleaned water systems',
      target: 'All areas',
      time: '2 days ago',
      status: 'success',
    },
  ];

  // Chart Data
  const healthTrendData = [
    { month: 'Jan', health: 75, mortality: 2.1, vaccination: 85 },
    { month: 'Feb', health: 78, mortality: 1.8, vaccination: 87 },
    { month: 'Mar', health: 82, mortality: 1.5, vaccination: 89 },
    { month: 'Apr', health: 85, mortality: 1.2, vaccination: 91 },
    { month: 'May', health: 88, mortality: 0.9, vaccination: 93 },
    { month: 'Jun', health: 90, mortality: 0.7, vaccination: 95 },
  ];

  const livestockDistribution = [
    { name: 'Chickens', value: 342, color: '#22c55e' },
    { name: 'Pigs', value: 114, color: '#f59e0b' },
    { name: 'Other', value: 12, color: '#3b82f6' },
  ];

  const vaccinationProgress = [
    { category: 'Bird Flu', completed: 298, total: 342, percentage: 87 },
    { category: 'Newcastle', completed: 312, total: 342, percentage: 91 },
    { category: 'Swine Flu', completed: 108, total: 114, percentage: 95 },
    { category: 'PRRS', completed: 102, total: 114, percentage: 89 },
  ];

  const mortalityData = [
    { month: 'Jan', poultry: 8, pigs: 3 },
    { month: 'Feb', poultry: 6, pigs: 2 },
    { month: 'Mar', poultry: 4, pigs: 1 },
    { month: 'Apr', poultry: 3, pigs: 1 },
    { month: 'May', poultry: 2, pigs: 0 },
    { month: 'Jun', poultry: 1, pigs: 1 },
  ];

  const chartConfig = {
    health: {
      label: "Health Score",
      color: "hsl(var(--primary))",
    },
    mortality: {
      label: "Mortality Rate",
      color: "hsl(var(--destructive))",
    },
    vaccination: {
      label: "Vaccination Rate",
      color: "hsl(var(--success))",
    },
    poultry: {
      label: "Poultry",
      color: "#22c55e",
    },
    pigs: {
      label: "Pigs",
      color: "#f59e0b",
    },
  };

  return (
    <AnimatedBackground variant="farm">
      <div className="min-h-screen bg-background/80 backdrop-blur-sm">
        <Navigation />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {/* Header */}
          <div className="mb-8 animate-slide-in-up">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
              <div>
                <h1 className="text-3xl font-bold text-foreground animate-text-glow">{t('dashboard.title')}</h1>
                <p className="text-muted-foreground">{t('dashboard.subtitle')}</p>
              </div>
              <div className="flex items-center gap-3">
                <Badge variant="outline" className="gap-2 animate-pulse-slow">
                  <div className="w-2 h-2 bg-success rounded-full"></div>
                  {t('dashboard.farmOnline')}
                </Badge>
                <Button className="gap-2 hover-lift-advanced">
                  <Calendar className="h-4 w-4 animate-icon-bounce" />
                  {t('dashboard.scheduleAssessment')}
                </Button>
              </div>
            </div>
          </div>

          {/* Health Metrics Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {healthMetrics.map((metric, index) => (
              <DashboardCard key={index} {...metric} />
            ))}
          </div>

          {/* Main Content */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Left Column - Charts and Analytics */}
            <div className="lg:col-span-2 space-y-6">
              {/* Health Trends Chart */}
              <Card className="hover-lift animate-fade-in">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <LineChart className="h-5 w-5" />
                    Health Trends Over Time
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ChartContainer config={chartConfig} className="h-[300px]">
                    <RechartsLineChart data={healthTrendData}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="month" />
                      <YAxis />
                      <ChartTooltip content={<ChartTooltipContent />} />
                      <Line
                        type="monotone"
                        dataKey="health"
                        stroke="var(--color-health)"
                        strokeWidth={3}
                        dot={{ fill: "var(--color-health)", strokeWidth: 2, r: 6 }}
                        activeDot={{ r: 8, stroke: "var(--color-health)", strokeWidth: 2 }}
                      />
                      <Line
                        type="monotone"
                        dataKey="vaccination"
                        stroke="var(--color-vaccination)"
                        strokeWidth={3}
                        dot={{ fill: "var(--color-vaccination)", strokeWidth: 2, r: 6 }}
                        activeDot={{ r: 8, stroke: "var(--color-vaccination)", strokeWidth: 2 }}
                      />
                    </RechartsLineChart>
                  </ChartContainer>
                </CardContent>
              </Card>

              {/* Livestock Distribution */}
              <Card className="hover-lift animate-fade-in stagger-1">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <PieChart className="h-5 w-5" />
                    Livestock Distribution
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <ChartContainer config={chartConfig} className="h-[250px]">
                      <RechartsPieChart>
                        <Pie
                          data={livestockDistribution}
                          cx="50%"
                          cy="50%"
                          innerRadius={60}
                          outerRadius={100}
                          paddingAngle={5}
                          dataKey="value"
                        >
                          {livestockDistribution.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={entry.color} />
                          ))}
                        </Pie>
                        <ChartTooltip content={<ChartTooltipContent />} />
                      </RechartsPieChart>
                    </ChartContainer>
                    <div className="space-y-3">
                      {livestockDistribution.map((item, index) => (
                        <div key={index} className="flex items-center justify-between p-3 rounded-lg bg-muted/50">
                          <div className="flex items-center gap-3">
                            <div
                              className="w-4 h-4 rounded-full"
                              style={{ backgroundColor: item.color }}
                            />
                            <span className="font-medium">{item.name}</span>
                          </div>
                          <div className="text-right">
                            <div className="font-bold">{item.value}</div>
                            <div className="text-sm text-muted-foreground">
                              {((item.value / 468) * 100).toFixed(1)}%
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Vaccination Progress */}
              <Card className="hover-lift animate-fade-in stagger-2">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <BarChart3 className="h-5 w-5" />
                    Vaccination Progress
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ChartContainer config={chartConfig} className="h-[300px]">
                    <RechartsBarChart data={vaccinationProgress}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="category" />
                      <YAxis />
                      <ChartTooltip content={<ChartTooltipContent />} />
                      <Bar
                        dataKey="completed"
                        fill="var(--color-vaccination)"
                        radius={[4, 4, 0, 0]}
                      />
                    </RechartsBarChart>
                  </ChartContainer>
                </CardContent>
              </Card>

              {/* Mortality Trends */}
              <Card className="hover-lift animate-fade-in stagger-3">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Activity className="h-5 w-5" />
                    Mortality Trends
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ChartContainer config={chartConfig} className="h-[300px]">
                    <RechartsAreaChart data={mortalityData}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="month" />
                      <YAxis />
                      <ChartTooltip content={<ChartTooltipContent />} />
                      <Area
                        type="monotone"
                        dataKey="poultry"
                        stackId="1"
                        stroke="var(--color-poultry)"
                        fill="var(--color-poultry)"
                        fillOpacity={0.6}
                      />
                      <Area
                        type="monotone"
                        dataKey="pigs"
                        stackId="1"
                        stroke="var(--color-pigs)"
                        fill="var(--color-pigs)"
                        fillOpacity={0.6}
                      />
                    </RechartsAreaChart>
                  </ChartContainer>
                </CardContent>
              </Card>

              {/* Risk Assessment Summary */}
              <Card className="hover-lift animate-fade-in stagger-4">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Shield className="h-5 w-5" />
                    Biosecurity Risk Assessment
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium">Current Risk Level</span>
                      <StatusIndicator status="low" label="Low Risk" />
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 border-t">
                      <div className="text-center">
                        <div className="text-lg font-bold text-success">8</div>
                        <div className="text-xs text-muted-foreground">Good Areas</div>
                      </div>
                      <div className="text-center">
                        <div className="text-lg font-bold text-warning">2</div>
                        <div className="text-xs text-muted-foreground">Watch Areas</div>
                      </div>
                      <div className="text-center">
                        <div className="text-lg font-bold text-destructive">0</div>
                        <div className="text-xs text-muted-foreground">Problem Areas</div>
                      </div>
                    </div>

                    <Button variant="outline" className="w-full mt-4">
                      View Full Assessment
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Right Column - Recent Activities and Alerts */}
            <div className="space-y-6">
              {/* Recent Activities */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <TrendingUp className="h-5 w-5" />
                    Recent Activities
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {recentActivities.map((activity, index) => (
                      <div key={index} className="flex items-start gap-3 pb-3 border-b border-border last:border-0">
                        <div className={`w-2 h-2 rounded-full mt-2 flex-shrink-0 ${
                          activity.status === 'success' ? 'bg-success' : 'bg-warning'
                        }`} />
                        <div className="flex-1 min-w-0">
                          <p className="text-sm font-medium text-foreground">
                            {activity.action}
                          </p>
                          <p className="text-xs text-muted-foreground">
                            {activity.target}
                          </p>
                          <p className="text-xs text-muted-foreground">
                            {activity.time}
                          </p>
                        </div>
                        {activity.status === 'success' && (
                          <CheckCircle className="h-4 w-4 text-success flex-shrink-0" />
                        )}
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Quick Actions */}
              <Card>
                <CardHeader>
                  <CardTitle>Quick Actions</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <Button className="w-full justify-start gap-2" variant="outline">
                    <Shield className="h-4 w-4" />
                    Start Risk Assessment
                  </Button>
                  <Button className="w-full justify-start gap-2" variant="outline">
                    <Stethoscope className="h-4 w-4" />
                    Log Health Check
                  </Button>
                  <Button className="w-full justify-start gap-2" variant="outline">
                    <Calendar className="h-4 w-4" />
                    Schedule Vaccination
                  </Button>
                  <Button className="w-full justify-start gap-2" variant="outline">
                    <AlertTriangle className="h-4 w-4" />
                    Report Issue
                  </Button>
                </CardContent>
              </Card>

              {/* Active Alerts */}
              <Card className="border-warning/50">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-warning">
                    <AlertTriangle className="h-5 w-5" />
                    Active Alerts
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <Alert type="warning" message="Bird flu cases 15km away - monitor closely" />
                    <Alert type="info" message="6 pigs need vaccination this week" />
                    <Alert type="low" message="Good weather expected next 5 days" />
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </AnimatedBackground>
  );
};

// Alert component
const Alert = ({ type, message }: { type: 'warning' | 'info' | 'low', message: string }) => {
  const { t } = useTranslation();
  const config = {
    warning: { bg: 'bg-warning/10', text: 'text-warning', icon: '⚠' },
    info: { bg: 'bg-accent/10', text: 'text-accent', icon: 'ℹ' },
    low: { bg: 'bg-success/10', text: 'text-success', icon: '✓' },
  };

  const { bg, text, icon } = config[type];

  return (
    <div className={`p-3 rounded-lg ${bg} flex items-center gap-2`}>
      <span className="text-sm">{icon}</span>
      <span className={`text-sm ${text}`}>{message}</span>
    </div>
  );
};

export default Dashboard;
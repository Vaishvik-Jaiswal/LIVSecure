import { useState } from 'react';
import { Navigation } from '@/components/Navigation';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Switch } from '@/components/ui/switch';
import {
  Bell,
  AlertTriangle,
  Info,
  CheckCircle,
  Clock,
  Settings,
  Filter,
  Search,
  X,
  Calendar,
  MapPin,
  Users
} from 'lucide-react';

const Alerts = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedFilter, setSelectedFilter] = useState('all');

  const alerts = [
    {
      id: 1,
      type: 'warning',
      title: 'Bird Flu Outbreak Detected',
      message: 'Confirmed cases within 15km radius. Implement enhanced biosecurity measures immediately.',
      location: 'Nearby Region',
      timestamp: '2024-01-15T10:30:00Z',
      priority: 'high',
      category: 'disease',
      read: false,
      acknowledged: false
    },
    {
      id: 2,
      type: 'info',
      title: 'Vaccination Reminder',
      message: '6 pigs require vaccination this week. Schedule has been updated.',
      location: 'Farm Section B',
      timestamp: '2024-01-15T09:15:00Z',
      priority: 'medium',
      category: 'vaccination',
      read: false,
      acknowledged: true
    },
    {
      id: 3,
      type: 'success',
      title: 'Weather Alert Cleared',
      message: 'Good weather conditions expected for the next 5 days. Normal operations can resume.',
      location: 'All Areas',
      timestamp: '2024-01-15T08:00:00Z',
      priority: 'low',
      category: 'weather',
      read: true,
      acknowledged: true
    },
    {
      id: 4,
      type: 'warning',
      title: 'Equipment Maintenance Due',
      message: 'Water filtration system requires maintenance. Schedule within 48 hours.',
      location: 'Equipment Room',
      timestamp: '2024-01-14T16:45:00Z',
      priority: 'medium',
      category: 'maintenance',
      read: true,
      acknowledged: false
    },
    {
      id: 5,
      type: 'info',
      title: 'Training Module Available',
      message: 'New training module "Emergency Disease Response" is now available.',
      location: 'Training Center',
      timestamp: '2024-01-14T14:20:00Z',
      priority: 'low',
      category: 'training',
      read: false,
      acknowledged: false
    },
    {
      id: 6,
      type: 'warning',
      title: 'Feed Quality Alert',
      message: 'Recent feed delivery shows slight contamination. Monitor livestock closely.',
      location: 'Storage Area',
      timestamp: '2024-01-14T11:30:00Z',
      priority: 'high',
      category: 'feed',
      read: false,
      acknowledged: false
    }
  ];

  const notificationSettings = [
    { id: 'disease', label: 'Disease Outbreaks', enabled: true, description: 'Alerts about disease outbreaks in your area' },
    { id: 'vaccination', label: 'Vaccination Reminders', enabled: true, description: 'Reminders for scheduled vaccinations' },
    { id: 'weather', label: 'Weather Alerts', enabled: true, description: 'Weather conditions affecting livestock' },
    { id: 'maintenance', label: 'Equipment Maintenance', enabled: false, description: 'Equipment and facility maintenance alerts' },
    { id: 'training', label: 'Training Updates', enabled: true, description: 'New training modules and sessions' },
    { id: 'feed', label: 'Feed Quality', enabled: true, description: 'Feed quality and supply alerts' }
  ];

  const filteredAlerts = alerts.filter(alert => {
    const matchesSearch = alert.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         alert.message.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesFilter = selectedFilter === 'all' || alert.category === selectedFilter;
    return matchesSearch && matchesFilter;
  });

  const getAlertIcon = (type: string) => {
    switch (type) {
      case 'warning': return <AlertTriangle className="h-4 w-4 text-warning" />;
      case 'info': return <Info className="h-4 w-4 text-info" />;
      case 'success': return <CheckCircle className="h-4 w-4 text-success" />;
      default: return <Bell className="h-4 w-4" />;
    }
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'high': return 'destructive';
      case 'medium': return 'warning';
      case 'low': return 'success';
      default: return 'default';
    }
  };

  const formatTimestamp = (timestamp: string) => {
    const date = new Date(timestamp);
    const now = new Date();
    const diffInHours = Math.floor((now.getTime() - date.getTime()) / (1000 * 60 * 60));
    
    if (diffInHours < 1) return 'Just now';
    if (diffInHours < 24) return `${diffInHours}h ago`;
    return date.toLocaleDateString();
  };

  const unreadCount = alerts.filter(alert => !alert.read).length;

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div>
              <h1 className="text-3xl font-bold text-foreground">Training Alerts</h1>
              <p className="text-muted-foreground">Stay informed about livestock health and training updates</p>
            </div>
            <div className="flex items-center gap-3">
              <Badge variant="outline" className="gap-2">
                <Bell className="h-4 w-4" />
                {unreadCount} Unread
              </Badge>
              <Button variant="outline" className="gap-2">
                <Settings className="h-4 w-4" />
                Settings
              </Button>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Alerts Panel */}
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                  <CardTitle className="flex items-center gap-2">
                    <Bell className="h-5 w-5" />
                    Recent Alerts
                  </CardTitle>
                  <div className="flex items-center gap-2">
                    <div className="relative">
                      <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                      <input
                        type="text"
                        placeholder="Search alerts..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="pl-9 pr-4 py-2 border rounded-md text-sm w-64"
                      />
                    </div>
                    <Button variant="outline" size="sm">
                      <Filter className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <Tabs value={selectedFilter} onValueChange={setSelectedFilter}>
                  <TabsList className="grid w-full grid-cols-4 mb-6">
                    <TabsTrigger value="all">All</TabsTrigger>
                    <TabsTrigger value="disease">Disease</TabsTrigger>
                    <TabsTrigger value="vaccination">Vaccines</TabsTrigger>
                    <TabsTrigger value="training">Training</TabsTrigger>
                  </TabsList>

                  <TabsContent value={selectedFilter} className="space-y-4">
                    {filteredAlerts.map((alert) => (
                      <Card key={alert.id} className={`border-l-4 ${
                        alert.type === 'warning' ? 'border-l-warning' :
                        alert.type === 'info' ? 'border-l-info' :
                        'border-l-success'
                      } ${!alert.read ? 'bg-muted/30' : ''}`}>
                        <CardContent className="p-4">
                          <div className="flex items-start gap-3">
                            <div className="flex-shrink-0 mt-1">
                              {getAlertIcon(alert.type)}
                            </div>
                            <div className="flex-1 min-w-0">
                              <div className="flex items-start justify-between gap-2">
                                <div className="flex-1">
                                  <div className="flex items-center gap-2 mb-1">
                                    <h4 className="font-semibold text-sm">{alert.title}</h4>
                                    <Badge variant={getPriorityColor(alert.priority) as any} className="text-xs">
                                      {alert.priority}
                                    </Badge>
                                    {!alert.read && (
                                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                                    )}
                                  </div>
                                  <p className="text-sm text-muted-foreground mb-2">
                                    {alert.message}
                                  </p>
                                  <div className="flex items-center gap-4 text-xs text-muted-foreground">
                                    <span className="flex items-center gap-1">
                                      <MapPin className="h-3 w-3" />
                                      {alert.location}
                                    </span>
                                    <span className="flex items-center gap-1">
                                      <Clock className="h-3 w-3" />
                                      {formatTimestamp(alert.timestamp)}
                                    </span>
                                  </div>
                                </div>
                                <div className="flex items-center gap-1">
                                  {!alert.acknowledged && (
                                    <Button size="sm" variant="outline">
                                      Acknowledge
                                    </Button>
                                  )}
                                  <Button size="sm" variant="ghost">
                                    <X className="h-4 w-4" />
                                  </Button>
                                </div>
                              </div>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </TabsContent>
                </Tabs>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Quick Stats */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Alert Summary</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">Total Alerts</span>
                  <span className="font-semibold">{alerts.length}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">High Priority</span>
                  <span className="font-semibold text-destructive">
                    {alerts.filter(a => a.priority === 'high').length}
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">Acknowledged</span>
                  <span className="font-semibold text-success">
                    {alerts.filter(a => a.acknowledged).length}
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">Unread</span>
                  <span className="font-semibold text-primary">{unreadCount}</span>
                </div>
              </CardContent>
            </Card>

            {/* Notification Settings */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg flex items-center gap-2">
                  <Settings className="h-5 w-5" />
                  Notification Settings
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {notificationSettings.map((setting) => (
                  <div key={setting.id} className="flex items-center justify-between">
                    <div className="flex-1">
                      <div className="flex items-center gap-2">
                        <span className="font-medium text-sm">{setting.label}</span>
                        <Switch checked={setting.enabled} />
                      </div>
                      <p className="text-xs text-muted-foreground">{setting.description}</p>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Upcoming Events */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg flex items-center gap-2">
                  <Calendar className="h-5 w-5" />
                  Upcoming Events
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="p-3 border rounded-lg">
                  <h4 className="font-medium text-sm">Training Session</h4>
                  <p className="text-xs text-muted-foreground">Disease Management Workshop</p>
                  <p className="text-xs text-muted-foreground">Tomorrow, 2:00 PM</p>
                </div>
                <div className="p-3 border rounded-lg">
                  <h4 className="font-medium text-sm">Vaccination Due</h4>
                  <p className="text-xs text-muted-foreground">Section B pigs</p>
                  <p className="text-xs text-muted-foreground">Friday, 10:00 AM</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Alerts;
import { useState } from 'react';
import { Navigation } from '@/components/Navigation';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import {
  Users,
  MessageCircle,
  ThumbsUp,
  Share,
  Search,
  Filter,
  Plus,
  Star,
  Calendar,
  MapPin,
  Award,
  TrendingUp,
  BookOpen,
  HelpCircle
} from 'lucide-react';

const Community = () => {
  const [selectedTab, setSelectedTab] = useState('discussions');
  const [searchTerm, setSearchTerm] = useState('');

  const discussions = [
    {
      id: 1,
      title: 'Best practices for pig feed management',
      author: 'Rajesh Kumar',
      authorRole: 'Expert Farmer',
      authorAvatar: '/api/placeholder/40/40',
      timestamp: '2 hours ago',
      category: 'Feed Management',
      replies: 24,
      likes: 18,
      views: 156,
      isHot: true,
      tags: ['pigs', 'nutrition', 'best-practices'],
      excerpt: 'I\'ve been experimenting with different feed combinations for my pig farm. Here are some tips that have worked well for me...'
    },
    {
      id: 2,
      title: 'Dealing with Newcastle disease in poultry',
      author: 'Priya Sharma',
      authorRole: 'Veterinarian',
      authorAvatar: '/api/placeholder/40/40',
      timestamp: '5 hours ago',
      category: 'Disease Management',
      replies: 12,
      likes: 31,
      views: 89,
      isHot: false,
      tags: ['poultry', 'disease', 'newcastle'],
      excerpt: 'Recently encountered Newcastle disease outbreak. Sharing my experience and treatment approach...'
    },
    {
      id: 3,
      title: 'Organic farming certification process',
      author: 'Amit Patel',
      authorRole: 'Organic Farmer',
      authorAvatar: '/api/placeholder/40/40',
      timestamp: '1 day ago',
      category: 'Certification',
      replies: 8,
      likes: 15,
      views: 67,
      isHot: false,
      tags: ['organic', 'certification', 'standards'],
      excerpt: 'Going through the organic certification process. Here\'s what I\'ve learned so far...'
    },
    {
      id: 4,
      title: 'Water management in large farms',
      author: 'Sunita Devi',
      authorRole: 'Farm Manager',
      authorAvatar: '/api/placeholder/40/40',
      timestamp: '2 days ago',
      category: 'Farm Management',
      replies: 19,
      likes: 27,
      views: 134,
      isHot: true,
      tags: ['water', 'management', 'efficiency'],
      excerpt: 'Managing water resources efficiently in a 50-acre farm. Sharing my strategies and challenges...'
    }
  ];

  const experts = [
    {
      id: 1,
      name: 'Dr. Vikram Singh',
      role: 'Senior Veterinarian',
      specialty: 'Large Animal Health',
      experience: '18 years',
      rating: 4.9,
      consultations: 1250,
      avatar: '/api/placeholder/80/80',
      isOnline: true,
      responseTime: '< 2 hours'
    },
    {
      id: 2,
      name: 'Dr. Meera Joshi',
      role: 'Poultry Specialist',
      specialty: 'Poultry Disease Management',
      experience: '12 years',
      rating: 4.8,
      consultations: 890,
      avatar: '/api/placeholder/80/80',
      isOnline: false,
      responseTime: '< 4 hours'
    },
    {
      id: 3,
      name: 'Rajesh Kumar',
      role: 'Master Farmer',
      specialty: 'Organic Farming',
      experience: '25 years',
      rating: 4.9,
      consultations: 2100,
      avatar: '/api/placeholder/80/80',
      isOnline: true,
      responseTime: '< 1 hour'
    }
  ];

  const upcomingEvents = [
    {
      id: 1,
      title: 'Monthly Farmer Meetup',
      date: '2024-01-25',
      time: '10:00 AM',
      location: 'Community Hall, District Center',
      attendees: 45,
      type: 'networking',
      description: 'Monthly gathering for local farmers to share experiences and knowledge.'
    },
    {
      id: 2,
      title: 'Biosecurity Workshop',
      date: '2024-01-28',
      time: '2:00 PM',
      location: 'Online (Zoom)',
      attendees: 120,
      type: 'workshop',
      description: 'Learn about latest biosecurity measures and disease prevention strategies.'
    },
    {
      id: 3,
      title: 'Organic Certification Q&A',
      date: '2024-02-01',
      time: '11:00 AM',
      location: 'Agricultural Extension Office',
      attendees: 30,
      type: 'qa',
      description: 'Q&A session with certification experts about organic farming requirements.'
    }
  ];

  const filteredDiscussions = discussions.filter(discussion =>
    discussion.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    discussion.excerpt.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const getCategoryColor = (category: string) => {
    const colors: { [key: string]: string } = {
      'Feed Management': 'bg-green-100 text-green-800',
      'Disease Management': 'bg-red-100 text-red-800',
      'Certification': 'bg-blue-100 text-blue-800',
      'Farm Management': 'bg-purple-100 text-purple-800'
    };
    return colors[category] || 'bg-gray-100 text-gray-800';
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div>
              <h1 className="text-3xl font-bold text-foreground">Community Hub</h1>
              <p className="text-muted-foreground">Connect, learn, and grow with fellow farmers</p>
            </div>
            <div className="flex items-center gap-3">
              <Badge variant="outline" className="gap-2">
                <Users className="h-4 w-4" />
                2,847 Members
              </Badge>
              <Button className="gap-2">
                <Plus className="h-4 w-4" />
                New Discussion
              </Button>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-3">
            <Card>
              <CardHeader>
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                  <CardTitle className="flex items-center gap-2">
                    <MessageCircle className="h-5 w-5" />
                    Community Discussions
                  </CardTitle>
                  <div className="flex items-center gap-2">
                    <div className="relative">
                      <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                      <input
                        type="text"
                        placeholder="Search discussions..."
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
                <Tabs value={selectedTab} onValueChange={setSelectedTab}>
                  <TabsList className="grid w-full grid-cols-3">
                    <TabsTrigger value="discussions">Discussions</TabsTrigger>
                    <TabsTrigger value="experts">Ask Experts</TabsTrigger>
                    <TabsTrigger value="events">Events</TabsTrigger>
                  </TabsList>

                  <TabsContent value="discussions" className="space-y-4 mt-6">
                    {filteredDiscussions.map((discussion) => (
                      <Card key={discussion.id} className="hover:shadow-md transition-shadow">
                        <CardContent className="p-6">
                          <div className="flex items-start gap-4">
                            <Avatar className="w-10 h-10">
                              <AvatarImage src={discussion.authorAvatar} />
                              <AvatarFallback>{discussion.author[0]}</AvatarFallback>
                            </Avatar>
                            <div className="flex-1">
                              <div className="flex items-start justify-between gap-2 mb-2">
                                <div>
                                  <h3 className="font-semibold text-lg mb-1">{discussion.title}</h3>
                                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                                    <span>by {discussion.author}</span>
                                    <Badge variant="outline" className="text-xs">
                                      {discussion.authorRole}
                                    </Badge>
                                    <span>•</span>
                                    <span>{discussion.timestamp}</span>
                                    {discussion.isHot && (
                                      <>
                                        <span>•</span>
                                        <Badge className="text-xs bg-orange-100 text-orange-800">
                                          🔥 Hot
                                        </Badge>
                                      </>
                                    )}
                                  </div>
                                </div>
                                <Badge className={`text-xs ${getCategoryColor(discussion.category)}`}>
                                  {discussion.category}
                                </Badge>
                              </div>

                              <p className="text-muted-foreground mb-3">{discussion.excerpt}</p>

                              <div className="flex items-center gap-4 mb-4">
                                <div className="flex items-center gap-1 text-sm text-muted-foreground">
                                  <MessageCircle className="h-4 w-4" />
                                  {discussion.replies} replies
                                </div>
                                <div className="flex items-center gap-1 text-sm text-muted-foreground">
                                  <ThumbsUp className="h-4 w-4" />
                                  {discussion.likes} likes
                                </div>
                                <div className="flex items-center gap-1 text-sm text-muted-foreground">
                                  <TrendingUp className="h-4 w-4" />
                                  {discussion.views} views
                                </div>
                              </div>

                              <div className="flex flex-wrap gap-2 mb-4">
                                {discussion.tags.map((tag) => (
                                  <Badge key={tag} variant="secondary" className="text-xs">
                                    #{tag}
                                  </Badge>
                                ))}
                              </div>

                              <div className="flex items-center gap-2">
                                <Button variant="outline" size="sm" className="gap-2">
                                  <MessageCircle className="h-4 w-4" />
                                  Reply
                                </Button>
                                <Button variant="outline" size="sm" className="gap-2">
                                  <ThumbsUp className="h-4 w-4" />
                                  Like
                                </Button>
                                <Button variant="outline" size="sm" className="gap-2">
                                  <Share className="h-4 w-4" />
                                  Share
                                </Button>
                              </div>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </TabsContent>

                  <TabsContent value="experts" className="mt-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {experts.map((expert) => (
                        <Card key={expert.id} className="hover:shadow-md transition-shadow">
                          <CardContent className="p-6">
                            <div className="flex items-start gap-4">
                              <div className="relative">
                                <Avatar className="w-16 h-16">
                                  <AvatarImage src={expert.avatar} />
                                  <AvatarFallback>{expert.name[0]}</AvatarFallback>
                                </Avatar>
                                {expert.isOnline && (
                                  <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-500 border-2 border-white rounded-full"></div>
                                )}
                              </div>
                              <div className="flex-1">
                                <h3 className="font-semibold text-lg">{expert.name}</h3>
                                <p className="text-primary text-sm mb-1">{expert.role}</p>
                                <p className="text-muted-foreground text-sm mb-2">{expert.specialty}</p>
                                <div className="flex items-center gap-4 mb-3">
                                  <div className="flex items-center gap-1">
                                    <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                                    <span className="text-sm font-medium">{expert.rating}</span>
                                  </div>
                                  <span className="text-sm text-muted-foreground">
                                    {expert.consultations} consultations
                                  </span>
                                </div>
                                <div className="flex items-center gap-2 mb-4">
                                  <Badge variant={expert.isOnline ? "default" : "secondary"}>
                                    {expert.isOnline ? "Online" : "Offline"}
                                  </Badge>
                                  <span className="text-xs text-muted-foreground">
                                    Response: {expert.responseTime}
                                  </span>
                                </div>
                                <Button className="w-full gap-2">
                                  <MessageCircle className="h-4 w-4" />
                                  Ask Question
                                </Button>
                              </div>
                            </div>
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                  </TabsContent>

                  <TabsContent value="events" className="mt-6">
                    <div className="space-y-4">
                      {upcomingEvents.map((event) => (
                        <Card key={event.id} className="hover:shadow-md transition-shadow">
                          <CardContent className="p-6">
                            <div className="flex items-start justify-between gap-4">
                              <div className="flex-1">
                                <div className="flex items-center gap-2 mb-2">
                                  <h3 className="font-semibold text-lg">{event.title}</h3>
                                  <Badge variant="outline" className="text-xs">
                                    {event.type}
                                  </Badge>
                                </div>
                                <p className="text-muted-foreground mb-3">{event.description}</p>
                                <div className="flex items-center gap-4 text-sm text-muted-foreground">
                                  <div className="flex items-center gap-1">
                                    <Calendar className="h-4 w-4" />
                                    {event.date} at {event.time}
                                  </div>
                                  <div className="flex items-center gap-1">
                                    <MapPin className="h-4 w-4" />
                                    {event.location}
                                  </div>
                                  <div className="flex items-center gap-1">
                                    <Users className="h-4 w-4" />
                                    {event.attendees} attending
                                  </div>
                                </div>
                              </div>
                              <Button className="gap-2">
                                <Calendar className="h-4 w-4" />
                                Join Event
                              </Button>
                            </div>
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                  </TabsContent>
                </Tabs>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Community Stats */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Community Stats</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">Active Members</span>
                  <span className="font-semibold">2,847</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">Discussions Today</span>
                  <span className="font-semibold">127</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">Questions Answered</span>
                  <span className="font-semibold">89</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">Events This Month</span>
                  <span className="font-semibold">12</span>
                </div>
              </CardContent>
            </Card>

            {/* Top Contributors */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg flex items-center gap-2">
                  <Award className="h-5 w-5" />
                  Top Contributors
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {experts.slice(0, 3).map((expert, index) => (
                  <div key={expert.id} className="flex items-center gap-3">
                    <div className="flex-shrink-0 w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center text-sm font-bold">
                      {index + 1}
                    </div>
                    <Avatar className="w-8 h-8">
                      <AvatarImage src={expert.avatar} />
                      <AvatarFallback>{expert.name[0]}</AvatarFallback>
                    </Avatar>
                    <div className="flex-1 min-w-0">
                      <p className="font-medium text-sm truncate">{expert.name}</p>
                      <p className="text-xs text-muted-foreground">{expert.consultations} answers</p>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Quick Actions */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Quick Actions</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <Button className="w-full justify-start gap-2" variant="outline">
                  <MessageCircle className="h-4 w-4" />
                  Start Discussion
                </Button>
                <Button className="w-full justify-start gap-2" variant="outline">
                  <HelpCircle className="h-4 w-4" />
                  Ask Question
                </Button>
                <Button className="w-full justify-start gap-2" variant="outline">
                  <Calendar className="h-4 w-4" />
                  Create Event
                </Button>
                <Button className="w-full justify-start gap-2" variant="outline">
                  <BookOpen className="h-4 w-4" />
                  Share Knowledge
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Community;
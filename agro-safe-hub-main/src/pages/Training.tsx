import { useState } from 'react';
import { Navigation } from '@/components/Navigation';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import {
  BookOpen,
  Play,
  CheckCircle,
  Clock,
  Users,
  Award,
  FileText,
  Video,
  Download,
  Star
} from 'lucide-react';

const Training = () => {
  const trainingModules = [
    {
      id: 1,
      title: 'Biosecurity Basics',
      description: 'Learn fundamental biosecurity practices for livestock farms',
      duration: '45 min',
      type: 'video',
      completed: true,
      progress: 100,
      difficulty: 'Beginner',
      category: 'Biosecurity'
    },
    {
      id: 2,
      title: 'Disease Recognition',
      description: 'Identify common livestock diseases and symptoms',
      duration: '60 min',
      type: 'interactive',
      completed: true,
      progress: 100,
      difficulty: 'Intermediate',
      category: 'Health'
    },
    {
      id: 3,
      title: 'Emergency Response',
      description: 'Handle livestock health emergencies effectively',
      duration: '30 min',
      type: 'video',
      completed: false,
      progress: 75,
      difficulty: 'Advanced',
      category: 'Emergency'
    },
    {
      id: 4,
      title: 'Vaccination Protocols',
      description: 'Proper vaccination schedules and administration',
      duration: '40 min',
      type: 'document',
      completed: false,
      progress: 0,
      difficulty: 'Intermediate',
      category: 'Health'
    },
    {
      id: 5,
      title: 'Farm Hygiene Standards',
      description: 'Maintain optimal hygiene in livestock facilities',
      duration: '35 min',
      type: 'video',
      completed: false,
      progress: 0,
      difficulty: 'Beginner',
      category: 'Hygiene'
    },
    {
      id: 6,
      title: 'Record Keeping',
      description: 'Best practices for maintaining livestock records',
      duration: '25 min',
      type: 'document',
      completed: false,
      progress: 0,
      difficulty: 'Beginner',
      category: 'Management'
    }
  ];

  const categories = ['All', 'Biosecurity', 'Health', 'Emergency', 'Hygiene', 'Management'];
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredModules = selectedCategory === 'All' 
    ? trainingModules 
    : trainingModules.filter(module => module.category === selectedCategory);

  const completedModules = trainingModules.filter(module => module.completed).length;
  const totalModules = trainingModules.length;
  const completionRate = Math.round((completedModules / totalModules) * 100);

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div>
              <h1 className="text-3xl font-bold text-foreground">Training Center</h1>
              <p className="text-muted-foreground">Enhance your livestock management skills</p>
            </div>
            <div className="flex items-center gap-3">
              <Badge variant="outline" className="gap-2">
                <Award className="h-4 w-4" />
                {completionRate}% Complete
              </Badge>
              <Button className="gap-2">
                <Users className="h-4 w-4" />
                Join Live Session
              </Button>
            </div>
          </div>
        </div>

        {/* Progress Overview */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Completed</p>
                  <p className="text-2xl font-bold">{completedModules}/{totalModules}</p>
                </div>
                <CheckCircle className="h-8 w-8 text-success" />
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">In Progress</p>
                  <p className="text-2xl font-bold">
                    {trainingModules.filter(m => !m.completed && m.progress > 0).length}
                  </p>
                </div>
                <Clock className="h-8 w-8 text-warning" />
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Certificates</p>
                  <p className="text-2xl font-bold">2</p>
                </div>
                <Award className="h-8 w-8 text-primary" />
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Training Modules */}
        <Card>
          <CardHeader>
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
              <CardTitle className="flex items-center gap-2">
                <BookOpen className="h-5 w-5" />
                Training Modules
              </CardTitle>
              <div className="flex flex-wrap gap-2">
                {categories.map((category) => (
                  <Button
                    key={category}
                    variant={selectedCategory === category ? "default" : "outline"}
                    size="sm"
                    onClick={() => setSelectedCategory(category)}
                  >
                    {category}
                  </Button>
                ))}
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {filteredModules.map((module) => (
                <Card key={module.id} className="hover:shadow-md transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2">
                          <h3 className="font-semibold text-lg">{module.title}</h3>
                          <Badge variant="secondary" className="text-xs">
                            {module.difficulty}
                          </Badge>
                        </div>
                        <p className="text-muted-foreground text-sm mb-3">
                          {module.description}
                        </p>
                        <div className="flex items-center gap-4 text-sm text-muted-foreground">
                          <span className="flex items-center gap-1">
                            <Clock className="h-3 w-3" />
                            {module.duration}
                          </span>
                          <span className="flex items-center gap-1">
                            {module.type === 'video' && <Video className="h-3 w-3" />}
                            {module.type === 'document' && <FileText className="h-3 w-3" />}
                            {module.type === 'interactive' && <Play className="h-3 w-3" />}
                            {module.type}
                          </span>
                        </div>
                      </div>
                      {module.completed && (
                        <CheckCircle className="h-5 w-5 text-success flex-shrink-0" />
                      )}
                    </div>

                    {!module.completed && (
                      <div className="mb-4">
                        <div className="flex items-center justify-between text-sm mb-1">
                          <span>Progress</span>
                          <span>{module.progress}%</span>
                        </div>
                        <Progress value={module.progress} className="h-2" />
                      </div>
                    )}

                    <div className="flex gap-2">
                      <Button 
                        className="flex-1 gap-2" 
                        variant={module.completed ? "outline" : "default"}
                      >
                        {module.completed ? (
                          <>
                            <CheckCircle className="h-4 w-4" />
                            Review
                          </>
                        ) : (
                          <>
                            <Play className="h-4 w-4" />
                            {module.progress > 0 ? 'Continue' : 'Start'}
                          </>
                        )}
                      </Button>
                      <Button variant="outline" size="sm">
                        <Download className="h-4 w-4" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Upcoming Live Sessions */}
        <Card className="mt-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Users className="h-5 w-5" />
              Upcoming Live Sessions
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center justify-between p-4 border rounded-lg">
                <div className="flex-1">
                  <h4 className="font-medium">Advanced Disease Management</h4>
                  <p className="text-sm text-muted-foreground">Live Q&A with veterinary experts</p>
                  <div className="flex items-center gap-4 mt-2 text-xs text-muted-foreground">
                    <span>Tomorrow, 2:00 PM</span>
                    <span>•</span>
                    <span>60 minutes</span>
                    <span>•</span>
                    <span>Dr. Sarah Johnson</span>
                  </div>
                </div>
                <Button className="gap-2">
                  <Users className="h-4 w-4" />
                  Register
                </Button>
              </div>
              
              <div className="flex items-center justify-between p-4 border rounded-lg">
                <div className="flex-1">
                  <h4 className="font-medium">Biosecurity Audit Workshop</h4>
                  <p className="text-sm text-muted-foreground">Interactive workshop on farm assessments</p>
                  <div className="flex items-center gap-4 mt-2 text-xs text-muted-foreground">
                    <span>Friday, 10:00 AM</span>
                    <span>•</span>
                    <span>90 minutes</span>
                    <span>•</span>
                    <span>Dr. Michael Chen</span>
                  </div>
                </div>
                <Button className="gap-2">
                  <Users className="h-4 w-4" />
                  Register
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Training;
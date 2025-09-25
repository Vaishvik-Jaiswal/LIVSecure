import { useState } from 'react';
import { Navigation } from '@/components/Navigation';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Progress } from '@/components/ui/progress';
import {
  Stethoscope,
  Phone,
  Calendar,
  MapPin,
  Star,
  Clock,
  Users,
  FileText,
  Video,
  MessageCircle,
  Heart,
  Activity,
  AlertTriangle,
  CheckCircle
} from 'lucide-react';

const Veterinary = () => {
  const [selectedService, setSelectedService] = useState('consultation');

  const veterinarians = [
    {
      id: 1,
      name: 'Dr. Priya Sharma',
      specialty: 'Large Animal Medicine',
      experience: '12 years',
      rating: 4.9,
      reviews: 156,
      availability: 'Available today',
      image: '/api/placeholder/150/150',
      distance: '2.3 km'
    },
    {
      id: 2,
      name: 'Dr. Rajesh Kumar',
      specialty: 'Poultry Health',
      experience: '8 years',
      rating: 4.8,
      reviews: 89,
      availability: 'Available tomorrow',
      image: '/api/placeholder/150/150',
      distance: '5.1 km'
    },
    {
      id: 3,
      name: 'Dr. Anita Singh',
      specialty: 'Emergency Care',
      experience: '15 years',
      rating: 5.0,
      reviews: 203,
      availability: 'Available now',
      image: '/api/placeholder/150/150',
      distance: '1.8 km'
    }
  ];

  const services = [
    {
      id: 'consultation',
      name: 'Virtual Consultation',
      description: 'Get expert advice from certified veterinarians',
      price: '₹500',
      duration: '30 min',
      icon: <Video className="h-5 w-5" />
    },
    {
      id: 'emergency',
      name: 'Emergency Visit',
      description: 'Urgent veterinary care at your farm',
      price: '₹2000',
      duration: '2-4 hours',
      icon: <AlertTriangle className="h-5 w-5" />
    },
    {
      id: 'vaccination',
      name: 'Vaccination Program',
      description: 'Comprehensive vaccination schedules',
      price: '₹300/animal',
      duration: '1 hour',
      icon: <Heart className="h-5 w-5" />
    },
    {
      id: 'healthcheck',
      name: 'Health Assessment',
      description: 'Complete livestock health evaluation',
      price: '₹800',
      duration: '45 min',
      icon: <Activity className="h-5 w-5" />
    }
  ];

  const healthRecords = [
    {
      animalId: 'PIG-001',
      type: 'Vaccination',
      treatment: 'Swine Fever Vaccine',
      date: '2024-01-10',
      veterinarian: 'Dr. Priya Sharma',
      status: 'completed'
    },
    {
      animalId: 'POULTRY-342',
      type: 'Health Check',
      treatment: 'Routine Examination',
      date: '2024-01-08',
      veterinarian: 'Dr. Rajesh Kumar',
      status: 'completed'
    },
    {
      animalId: 'PIG-045',
      type: 'Treatment',
      treatment: 'Antibiotic Therapy',
      date: '2024-01-05',
      veterinarian: 'Dr. Anita Singh',
      status: 'in-progress'
    }
  ];

  const upcomingAppointments = [
    {
      id: 1,
      type: 'Vaccination Drive',
      date: '2024-01-20',
      time: '10:00 AM',
      veterinarian: 'Dr. Priya Sharma',
      animals: 25,
      status: 'confirmed'
    },
    {
      id: 2,
      type: 'Health Assessment',
      date: '2024-01-22',
      time: '2:00 PM',
      veterinarian: 'Dr. Rajesh Kumar',
      animals: 12,
      status: 'pending'
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div>
              <h1 className="text-3xl font-bold text-foreground">Veterinary Services</h1>
              <p className="text-muted-foreground">Professional veterinary care for your livestock</p>
            </div>
            <div className="flex items-center gap-3">
              <Button className="gap-2">
                <Phone className="h-4 w-4" />
                Emergency Call
              </Button>
              <Button variant="outline" className="gap-2">
                <Calendar className="h-4 w-4" />
                Book Appointment
              </Button>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Services */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Stethoscope className="h-5 w-5" />
                  Available Services
                </CardTitle>
              </CardHeader>
              <CardContent>
                <Tabs value={selectedService} onValueChange={setSelectedService}>
                  <TabsList className="grid w-full grid-cols-2 lg:grid-cols-4">
                    {services.map((service) => (
                      <TabsTrigger key={service.id} value={service.id} className="text-xs">
                        {service.name}
                      </TabsTrigger>
                    ))}
                  </TabsList>

                  {services.map((service) => (
                    <TabsContent key={service.id} value={service.id} className="mt-6">
                      <div className="flex items-start gap-4 p-6 border rounded-lg">
                        <div className="flex-shrink-0 p-3 bg-primary/10 rounded-lg">
                          {service.icon}
                        </div>
                        <div className="flex-1">
                          <h3 className="font-semibold text-lg mb-2">{service.name}</h3>
                          <p className="text-muted-foreground mb-4">{service.description}</p>
                          <div className="flex items-center gap-6 mb-4">
                            <div className="flex items-center gap-1">
                              <Clock className="h-4 w-4 text-muted-foreground" />
                              <span className="text-sm">{service.duration}</span>
                            </div>
                            <div className="text-lg font-bold text-primary">{service.price}</div>
                          </div>
                          <Button className="gap-2">
                            Book Now
                          </Button>
                        </div>
                      </div>
                    </TabsContent>
                  ))}
                </Tabs>
              </CardContent>
            </Card>

            {/* Veterinarians */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Users className="h-5 w-5" />
                  Our Veterinarians
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {veterinarians.map((vet) => (
                    <Card key={vet.id} className="hover:shadow-md transition-shadow">
                      <CardContent className="p-6">
                        <div className="flex items-start gap-4">
                          <img
                            src={vet.image}
                            alt={vet.name}
                            className="w-16 h-16 rounded-full object-cover"
                          />
                          <div className="flex-1">
                            <h3 className="font-semibold text-lg">{vet.name}</h3>
                            <p className="text-primary text-sm mb-1">{vet.specialty}</p>
                            <p className="text-muted-foreground text-sm mb-2">{vet.experience} experience</p>
                            <div className="flex items-center gap-2 mb-3">
                              <div className="flex items-center gap-1">
                                <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                                <span className="text-sm font-medium">{vet.rating}</span>
                              </div>
                              <span className="text-sm text-muted-foreground">({vet.reviews} reviews)</span>
                            </div>
                            <div className="flex items-center justify-between">
                              <div className="flex items-center gap-1 text-sm text-muted-foreground">
                                <MapPin className="h-3 w-3" />
                                {vet.distance}
                              </div>
                              <Badge variant={vet.availability.includes('Available') ? 'default' : 'secondary'}>
                                {vet.availability}
                              </Badge>
                            </div>
                          </div>
                        </div>
                        <div className="flex gap-2 mt-4">
                          <Button size="sm" className="flex-1 gap-2">
                            <MessageCircle className="h-4 w-4" />
                            Chat
                          </Button>
                          <Button size="sm" variant="outline" className="flex-1 gap-2">
                            <Calendar className="h-4 w-4" />
                            Book
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Health Records */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg flex items-center gap-2">
                  <FileText className="h-5 w-5" />
                  Recent Records
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {healthRecords.map((record, index) => (
                  <div key={index} className="flex items-start justify-between p-3 border rounded-lg">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <span className="font-medium text-sm">{record.animalId}</span>
                        <Badge variant={record.status === 'completed' ? 'default' : 'secondary'} className="text-xs">
                          {record.status}
                        </Badge>
                      </div>
                      <p className="text-sm text-muted-foreground">{record.treatment}</p>
                      <p className="text-xs text-muted-foreground">{record.veterinarian}</p>
                    </div>
                    <div className="text-xs text-muted-foreground">
                      {new Date(record.date).toLocaleDateString()}
                    </div>
                  </div>
                ))}
                <Button variant="outline" className="w-full">
                  View All Records
                </Button>
              </CardContent>
            </Card>

            {/* Upcoming Appointments */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg flex items-center gap-2">
                  <Calendar className="h-5 w-5" />
                  Upcoming Appointments
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {upcomingAppointments.map((appointment) => (
                  <div key={appointment.id} className="p-3 border rounded-lg">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="font-medium text-sm">{appointment.type}</h4>
                      <Badge variant={appointment.status === 'confirmed' ? 'default' : 'secondary'}>
                        {appointment.status}
                      </Badge>
                    </div>
                    <div className="space-y-1 text-xs text-muted-foreground">
                      <div className="flex items-center gap-2">
                        <Calendar className="h-3 w-3" />
                        {appointment.date}
                      </div>
                      <div className="flex items-center gap-2">
                        <Clock className="h-3 w-3" />
                        {appointment.time}
                      </div>
                      <div className="flex items-center gap-2">
                        <Users className="h-3 w-3" />
                        {appointment.animals} animals
                      </div>
                    </div>
                    <p className="text-sm mt-2">{appointment.veterinarian}</p>
                  </div>
                ))}
                <Button className="w-full gap-2">
                  <Calendar className="h-4 w-4" />
                  Schedule New
                </Button>
              </CardContent>
            </Card>

            {/* Emergency Contact */}
            <Card className="border-destructive/50">
              <CardHeader>
                <CardTitle className="text-lg flex items-center gap-2 text-destructive">
                  <Phone className="h-5 w-5" />
                  Emergency Contact
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="text-center">
                  <p className="font-semibold text-lg">24/7 Emergency Line</p>
                  <p className="text-2xl font-bold text-destructive">1800-XXX-XXXX</p>
                </div>
                <Button className="w-full gap-2 bg-destructive hover:bg-destructive/90">
                  <Phone className="h-4 w-4" />
                  Call Now
                </Button>
                <p className="text-xs text-muted-foreground text-center">
                  For urgent livestock health emergencies
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Veterinary;
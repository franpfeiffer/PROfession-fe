import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
    Search,
    MapPin,
    Clock,
    Users,
    Star,
    TrendingUp,
    Calendar,
    MessageSquare,
    CheckCircle,
    AlertCircle,
    DollarSign,
} from "lucide-react"
import Header from "@/components/Header"

export default function DashboardPage() {
    const stats = [
        { label: "Propuestas Enviadas", value: "23", change: "+3 esta semana", icon: TrendingUp },
        { label: "Trabajos Completados", value: "15", change: "+2 este mes", icon: CheckCircle },
        { label: "Calificación Promedio", value: "4.8", change: "⭐⭐⭐⭐⭐", icon: Star },
        { label: "Ingresos del Mes", value: "$125.000", change: "+15% vs mes anterior", icon: DollarSign },
    ]

    const activeJobs = [
        {
            id: 1,
            title: "Reparación de cañería en cocina",
            client: "María González",
            location: "Santa Fe Capital",
            budget: "$20.000",
            status: "En progreso",
            deadline: "Mañana",
            urgent: true,
        },
        {
            id: 2,
            title: "Instalación de aire acondicionado",
            client: "Carlos Martín",
            location: "Recreo",
            budget: "$55.000",
            status: "Programado",
            deadline: "3 días",
            urgent: false,
        },
    ]

    const availableJobs = [
        {
            id: 3,
            title: "Pintura de living y comedor",
            description: "Necesito pintar living y comedor de casa. Aproximadamente 40m².",
            location: "Santo Tomé",
            budget: "$80.000 - $120.000",
            time: "Hace 2 horas",
            proposals: 8,
            category: "Pintura",
        },
        {
            id: 4,
            title: "Reparación de instalación eléctrica",
            description: "Problemas con la instalación eléctrica en varias habitaciones.",
            location: "Santa Fe Capital",
            budget: "$30.000 - $50.000",
            time: "Hace 4 horas",
            proposals: 2,
            category: "Electricidad",
        },
    ]

    return (
        <div className="min-h-screen bg-background">
            <Header />

            <div className="container mx-auto px-4 py-8">
                <div className="mb-8">
                    <h1 className="text-3xl font-bold text-foreground mb-2">Dashboard Profesional</h1>
                    <p className="text-muted-foreground">Gestiona tus trabajos, propuestas y perfil profesional</p>
                </div>

                {/* Estadísticas */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                    {stats.map((stat, index) => (
                        <Card key={index}>
                            <CardContent className="p-6">
                                <div className="flex items-center justify-between">
                                    <div>
                                        <p className="text-sm font-medium text-muted-foreground">{stat.label}</p>
                                        <p className="text-2xl font-bold text-foreground">{stat.value}</p>
                                        <p className="text-xs text-muted-foreground mt-1">{stat.change}</p>
                                    </div>
                                    <stat.icon className="h-8 w-8 text-primary" />
                                </div>
                            </CardContent>
                        </Card>
                    ))}
                </div>

                <Tabs defaultValue="active-jobs" className="space-y-6">
                    <TabsList className="grid w-full grid-cols-4">
                        <TabsTrigger value="active-jobs">Trabajos Activos</TabsTrigger>
                        <TabsTrigger value="available-jobs">Trabajos Disponibles</TabsTrigger>
                        <TabsTrigger value="proposals">Mis Propuestas</TabsTrigger>
                        <TabsTrigger value="profile">Mi Perfil</TabsTrigger>
                    </TabsList>

                    <TabsContent value="active-jobs" className="space-y-6">
                        <div className="flex items-center justify-between">
                            <h2 className="text-2xl font-bold text-foreground">Trabajos Activos</h2>
                            <Button variant="outline">
                                <Calendar className="h-4 w-4 mr-2" />
                                Ver Calendario
                            </Button>
                        </div>

                        <div className="grid gap-6">
                            {activeJobs.map((job) => (
                                <Card key={job.id} className="border-l-4 border-l-primary">
                                    <CardHeader>
                                        <div className="flex items-start justify-between">
                                            <div className="flex-1">
                                                <CardTitle className="text-lg mb-2">{job.title}</CardTitle>
                                                <div className="flex items-center gap-2 mb-2">
                                                    <Badge variant={job.status === "En progreso" ? "default" : "secondary"}>{job.status}</Badge>
                                                    {job.urgent && <Badge variant="destructive">Urgente</Badge>}
                                                </div>
                                            </div>
                                            <span className="text-lg font-semibold text-primary">{job.budget}</span>
                                        </div>
                                    </CardHeader>
                                    <CardContent>
                                        <div className="space-y-3">
                                            <div className="flex items-center justify-between text-sm">
                                                <div className="flex items-center text-muted-foreground">
                                                    <MapPin className="h-4 w-4 mr-1" />
                                                    {job.location}
                                                </div>
                                                <div className="flex items-center text-muted-foreground">
                                                    <Clock className="h-4 w-4 mr-1" />
                                                    Entrega: {job.deadline}
                                                </div>
                                            </div>
                                            <div className="text-sm text-muted-foreground">Cliente: {job.client}</div>
                                            <div className="flex gap-3">
                                                <Button size="sm">
                                                    <MessageSquare className="h-4 w-4 mr-2" />
                                                    Contactar Cliente
                                                </Button>
                                                <Button variant="outline" size="sm">
                                                    Ver Detalles
                                                </Button>
                                                {job.status === "En progreso" && (
                                                    <Button variant="outline" size="sm">
                                                        Marcar Completado
                                                    </Button>
                                                )}
                                            </div>
                                        </div>
                                    </CardContent>
                                </Card>
                            ))}
                        </div>
                    </TabsContent>

                    <TabsContent value="available-jobs" className="space-y-6">
                        <div className="flex items-center justify-between">
                            <h2 className="text-2xl font-bold text-foreground">Trabajos Disponibles</h2>
                            <div className="flex gap-2">
                                <Button variant="outline" size="sm">
                                    <Search className="h-4 w-4 mr-2" />
                                    Filtrar
                                </Button>
                                <Button variant="outline" size="sm">
                                    Actualizar
                                </Button>
                            </div>
                        </div>

                        <div className="grid gap-6">
                            {availableJobs.map((job) => (
                                <Card key={job.id} className="hover:shadow-lg transition-shadow">
                                    <CardHeader>
                                        <div className="flex items-start justify-between">
                                            <div className="flex-1">
                                                <CardTitle className="text-lg mb-2">{job.title}</CardTitle>
                                                <Badge variant="outline" className="mb-2">
                                                    {job.category}
                                                </Badge>
                                                <CardDescription className="text-pretty">{job.description}</CardDescription>
                                            </div>
                                        </div>
                                    </CardHeader>
                                    <CardContent>
                                        <div className="space-y-3">
                                            <div className="flex items-center justify-between">
                                                <div className="flex items-center text-sm text-muted-foreground">
                                                    <MapPin className="h-4 w-4 mr-1" />
                                                    {job.location}
                                                </div>
                                                <span className="font-semibold text-primary">{job.budget}</span>
                                            </div>
                                            <div className="flex items-center justify-between text-sm text-muted-foreground">
                                                <div className="flex items-center">
                                                    <Clock className="h-4 w-4 mr-1" />
                                                    {job.time}
                                                </div>
                                                <div className="flex items-center">
                                                    <Users className="h-4 w-4 mr-1" />
                                                    {job.proposals} propuestas
                                                </div>
                                            </div>
                                            <div className="flex gap-3 pt-2">
                                                <Button className="flex-1">Enviar Propuesta</Button>
                                                <Button variant="outline">Ver Detalles</Button>
                                            </div>
                                        </div>
                                    </CardContent>
                                </Card>
                            ))}
                        </div>
                    </TabsContent>

                    <TabsContent value="proposals" className="space-y-6">
                        <h2 className="text-2xl font-bold text-foreground">Mis Propuestas</h2>
                        <Card>
                            <CardContent className="p-8 text-center">
                                <AlertCircle className="h-12 w-12 mx-auto mb-4 text-muted-foreground" />
                                <h3 className="text-lg font-semibold mb-2">No hay propuestas aún</h3>
                                <p className="text-muted-foreground mb-4">
                                    Comienza enviando propuestas a trabajos que coincidan con tus habilidades
                                </p>
                                <Button>Explorar Trabajos Disponibles</Button>
                            </CardContent>
                        </Card>
                    </TabsContent>

                    <TabsContent value="profile" className="space-y-6">
                        <h2 className="text-2xl font-bold text-foreground">Mi Perfil Profesional</h2>
                        <div className="grid md:grid-cols-2 gap-6">
                            <Card>
                                <CardHeader>
                                    <CardTitle>Información Básica</CardTitle>
                                </CardHeader>
                                <CardContent className="space-y-4">
                                    <div className="flex items-center space-x-4">
                                        <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center text-primary-foreground text-xl font-bold">
                                            CM
                                        </div>
                                        <div>
                                            <h3 className="font-semibold">Carlos Martínez</h3>
                                            <p className="text-muted-foreground">Plomero Profesional</p>
                                            <div className="flex items-center mt-1">
                                                <Star className="h-4 w-4 text-yellow-500 mr-1" />
                                                <span className="text-sm">4.8 (15 reseñas)</span>
                                            </div>
                                        </div>
                                    </div>
                                    <Button variant="outline" className="w-full bg-transparent">
                                        Editar Perfil
                                    </Button>
                                </CardContent>
                            </Card>

                            <Card>
                                <CardHeader>
                                    <CardTitle>Estadísticas del Perfil</CardTitle>
                                </CardHeader>
                                <CardContent className="space-y-4">
                                    <div className="flex justify-between">
                                        <span className="text-muted-foreground">Perfil completado</span>
                                        <span className="font-semibold">85%</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span className="text-muted-foreground">Tiempo de respuesta</span>
                                        <span className="font-semibold">2 horas</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span className="text-muted-foreground">Tasa de aceptación</span>
                                        <span className="font-semibold">92%</span>
                                    </div>
                                    <Button variant="outline" className="w-full bg-transparent">
                                        Mejorar Perfil
                                    </Button>
                                </CardContent>
                            </Card>
                        </div>
                    </TabsContent>
                </Tabs>
            </div>
        </div>
    )
}


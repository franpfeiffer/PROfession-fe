import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Search, MapPin, Clock, Users, Wrench, Zap, Droplets, Paintbrush, Book as Broom } from "lucide-react"
import Link from "next/link"
import Header from "@/components/Header"
import Footer from "@/components/Footer"

export default function HomePage() {
    return (
        <div className="min-h-screen bg-background">
            <Header />

            {/* Hero Section */}
            <section className="py-16 px-4">
                <div className="container mx-auto text-center">
                    <h2 className="text-4xl md:text-6xl font-bold text-foreground mb-6 text-balance">
                        Conectamos tu hogar con los mejores <span className="text-primary">profesionales</span>
                    </h2>
                    <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto text-pretty">
                        Encuentra plomeros, electricistas, técnicos y más profesionales verificados en Santa Fe. Publica tu trabajo
                        y recibe propuestas en minutos.
                    </p>

                    {/* Search Bar */}
                    <div className="max-w-2xl mx-auto mb-8">
                        <div className="flex flex-col md:flex-row gap-3 p-2 bg-card rounded-lg border border-border shadow-sm">
                            <div className="flex-1 relative">
                                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                                <Input
                                    placeholder="¿Qué servicio necesitas? Ej: Plomero, Electricista..."
                                    className="pl-10 border-0 bg-transparent focus-visible:ring-0"
                                />
                            </div>
                            <div className="flex-1 relative">
                                <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                                <Input
                                    placeholder="¿Dónde? Ej: Santa Fe Capital"
                                    className="pl-10 border-0 bg-transparent focus-visible:ring-0"
                                />
                            </div>
                            <Link href="/browse-jobs">
                                <Button className="px-8">Buscar</Button>
                            </Link>
                        </div>
                    </div>

                    {/* Service Categories */}
                    <div className="grid grid-cols-2 md:grid-cols-5 gap-4 max-w-4xl mx-auto">
                        {[
                            { icon: Droplets, name: "Plomería", color: "text-blue-600" },
                            { icon: Zap, name: "Electricidad", color: "text-yellow-600" },
                            { icon: Paintbrush, name: "Pintura", color: "text-purple-600" },
                            { icon: Broom, name: "Limpieza", color: "text-green-600" },
                            { icon: Wrench, name: "Mantenimiento", color: "text-gray-600" },
                        ].map((service, index) => (
                            <Card key={index} className="cursor-pointer hover:shadow-md transition-shadow border-border/50">
                                <CardContent className="p-4 text-center">
                                    <service.icon className={`h-8 w-8 mx-auto mb-2 ${service.color}`} />
                                    <p className="text-sm font-medium text-card-foreground">{service.name}</p>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            {/* Featured Jobs */}
            <section className="py-16 px-4 bg-muted/30">
                <div className="container mx-auto">
                    <div className="flex items-center justify-between mb-8">
                        <h3 className="text-3xl font-bold text-foreground">Trabajos Destacados</h3>
                        <Link href="/browse-jobs">
                            <Button variant="outline">Ver Todos</Button>
                        </Link>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {[
                            {
                                title: "Reparación de cañería en cocina",
                                description: "Necesito un plomero para reparar una pérdida en la cañería de la cocina. Urgente.",
                                location: "Santa Fe Capital",
                                budget: "$15.000 - $25.000",
                                time: "Hace 2 horas",
                                proposals: 5,
                                category: "Plomería",
                                urgent: true,
                            },
                            {
                                title: "Instalación de aire acondicionado",
                                description: "Busco técnico para instalar aire acondicionado split en dormitorio principal.",
                                location: "Recreo",
                                budget: "$45.000 - $60.000",
                                time: "Hace 4 horas",
                                proposals: 3,
                                category: "Climatización",
                                urgent: false,
                            },
                            {
                                title: "Pintura de living y comedor",
                                description: "Necesito pintar living y comedor de casa. Aproximadamente 40m². Incluye materiales.",
                                location: "Santo Tomé",
                                budget: "$80.000 - $120.000",
                                time: "Hace 1 día",
                                proposals: 8,
                                category: "Pintura",
                                urgent: false,
                            },
                        ].map((job, index) => (
                            <Card key={index} className="hover:shadow-lg transition-shadow cursor-pointer">
                                <CardHeader>
                                    <div className="flex items-start justify-between">
                                        <div className="flex-1">
                                            <CardTitle className="text-lg mb-2 text-balance">{job.title}</CardTitle>
                                            <div className="flex items-center gap-2 mb-2">
                                                <Badge variant="secondary">{job.category}</Badge>
                                                {job.urgent && <Badge variant="destructive">Urgente</Badge>}
                                            </div>
                                        </div>
                                    </div>
                                    <CardDescription className="text-pretty">{job.description}</CardDescription>
                                </CardHeader>
                                <CardContent>
                                    <div className="space-y-3">
                                        <div className="flex items-center text-sm text-muted-foreground">
                                            <MapPin className="h-4 w-4 mr-1" />
                                            {job.location}
                                        </div>
                                        <div className="flex items-center justify-between">
                                            <span className="font-semibold text-primary">{job.budget}</span>
                                            <div className="flex items-center gap-4 text-sm text-muted-foreground">
                                                <div className="flex items-center">
                                                    <Clock className="h-4 w-4 mr-1" />
                                                    {job.time}
                                                </div>
                                                <div className="flex items-center">
                                                    <Users className="h-4 w-4 mr-1" />
                                                    {job.proposals} propuestas
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            {/* How It Works */}
            <section className="py-16 px-4">
                <div className="container mx-auto">
                    <h3 className="text-3xl font-bold text-center text-foreground mb-12">¿Cómo Funciona?</h3>

                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            {
                                step: "1",
                                title: "Publica tu trabajo",
                                description:
                                    "Describe qué necesitas, sube fotos y establece tu presupuesto. Es gratis y toma solo minutos.",
                            },
                            {
                                step: "2",
                                title: "Recibe propuestas",
                                description: "Los profesionales verificados te envían propuestas con precios y tiempos estimados.",
                            },
                            {
                                step: "3",
                                title: "Elige y contrata",
                                description:
                                    "Compara perfiles, lee reseñas y elige al profesional que mejor se adapte a tus necesidades.",
                            },
                        ].map((step, index) => (
                            <div key={index} className="text-center">
                                <div className="w-16 h-16 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                                    {step.step}
                                </div>
                                <h4 className="text-xl font-semibold text-foreground mb-3">{step.title}</h4>
                                <p className="text-muted-foreground text-pretty">{step.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-16 px-4 bg-primary text-primary-foreground">
                <div className="container mx-auto text-center">
                    <h3 className="text-3xl font-bold mb-4 text-balance">¿Listo para encontrar el profesional perfecto?</h3>
                    <p className="text-xl mb-8 opacity-90 text-pretty">
                        Únete a miles de personas que ya confían en OficiosPro para sus proyectos
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link href="/post-job">
                            <Button size="lg" variant="secondary" className="px-8">
                                Publicar Trabajo Gratis
                            </Button>
                        </Link>
                        <Link href="/register">
                            <Button
                                size="lg"
                                variant="outline"
                                className="px-8 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary bg-transparent"
                            >
                                Soy Profesional
                            </Button>
                        </Link>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    )
}


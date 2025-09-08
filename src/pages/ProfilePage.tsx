import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Star, MapPin, Calendar, Award, Upload, Edit, Phone, Mail, Clock, CheckCircle } from "lucide-react"
import Header from "@/components/Header"

export default function ProfilePage() {
    const reviews = [
        {
            id: 1,
            client: "María González",
            rating: 5,
            comment: "Excelente trabajo, muy profesional y puntual. Resolvió el problema de plomería rápidamente.",
            date: "Hace 1 semana",
            job: "Reparación de cañería",
        },
        {
            id: 2,
            client: "Carlos Martín",
            rating: 5,
            comment: "Muy recomendable. Instaló el aire acondicionado perfectamente y explicó todo el proceso.",
            date: "Hace 2 semanas",
            job: "Instalación de A/C",
        },
        {
            id: 3,
            client: "Ana López",
            rating: 4,
            comment: "Buen trabajo de pintura, aunque se demoró un poco más de lo esperado.",
            date: "Hace 1 mes",
            job: "Pintura de living",
        },
    ]

    const portfolio = [
        {
            id: 1,
            title: "Remodelación de baño completo",
            description: "Cambio completo de sanitarios, azulejos y grifería",
            category: "Plomería",
            date: "Marzo 2024",
        },
        {
            id: 2,
            title: "Instalación eléctrica nueva",
            description: "Instalación completa de circuitos eléctricos en casa nueva",
            category: "Electricidad",
            date: "Febrero 2024",
        },
        {
            id: 3,
            title: "Pintura exterior de casa",
            description: "Pintura completa de fachada con preparación de paredes",
            category: "Pintura",
            date: "Enero 2024",
        },
    ]

    return (
        <div className="min-h-screen bg-background">
            <Header />

            <div className="container mx-auto px-4 py-8">
                <div className="max-w-4xl mx-auto">
                    {/* Header del perfil */}
                    <Card className="mb-8">
                        <CardContent className="p-8">
                            <div className="flex flex-col md:flex-row items-start md:items-center space-y-4 md:space-y-0 md:space-x-6">
                                <div className="relative">
                                    <Avatar className="h-24 w-24">
                                        <AvatarFallback className="text-2xl">CM</AvatarFallback>
                                    </Avatar>
                                    <Button size="sm" variant="outline" className="absolute -bottom-2 -right-2 bg-transparent">
                                        <Edit className="h-3 w-3" />
                                    </Button>
                                </div>

                                <div className="flex-1">
                                    <div className="flex items-center space-x-3 mb-2">
                                        <h1 className="text-3xl font-bold text-foreground">Carlos Martínez</h1>
                                        <Badge variant="secondary" className="flex items-center space-x-1">
                                            <CheckCircle className="h-3 w-3" />
                                            <span>Verificado</span>
                                        </Badge>
                                    </div>

                                    <p className="text-xl text-muted-foreground mb-3">Plomero y Técnico en Climatización</p>

                                    <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground mb-4">
                                        <div className="flex items-center">
                                            <MapPin className="h-4 w-4 mr-1" />
                                            Santa Fe, Argentina
                                        </div>
                                        <div className="flex items-center">
                                            <Calendar className="h-4 w-4 mr-1" />
                                            Miembro desde 2023
                                        </div>
                                        <div className="flex items-center">
                                            <Clock className="h-4 w-4 mr-1" />
                                            Responde en 2 horas
                                        </div>
                                    </div>

                                    <div className="flex items-center space-x-6 mb-4">
                                        <div className="flex items-center">
                                            <Star className="h-5 w-5 text-yellow-500 mr-1" />
                                            <span className="font-semibold">4.8</span>
                                            <span className="text-muted-foreground ml-1">(15 reseñas)</span>
                                        </div>
                                        <div>
                                            <span className="font-semibold">23</span>
                                            <span className="text-muted-foreground ml-1">trabajos completados</span>
                                        </div>
                                        <div>
                                            <span className="font-semibold">98%</span>
                                            <span className="text-muted-foreground ml-1">tasa de éxito</span>
                                        </div>
                                    </div>

                                    <div className="flex space-x-3">
                                        <Button>
                                            <Mail className="h-4 w-4 mr-2" />
                                            Contactar
                                        </Button>
                                        <Button variant="outline">
                                            <Phone className="h-4 w-4 mr-2" />
                                            Llamar
                                        </Button>
                                        <Button variant="outline">Editar Perfil</Button>
                                    </div>
                                </div>
                            </div>
                        </CardContent>
                    </Card>

                    <Tabs defaultValue="about" className="space-y-6">
                        <TabsList className="grid w-full grid-cols-4">
                            <TabsTrigger value="about">Acerca de</TabsTrigger>
                            <TabsTrigger value="portfolio">Portafolio</TabsTrigger>
                            <TabsTrigger value="reviews">Reseñas</TabsTrigger>
                            <TabsTrigger value="settings">Configuración</TabsTrigger>
                        </TabsList>

                        <TabsContent value="about" className="space-y-6">
                            <Card>
                                <CardHeader>
                                    <CardTitle>Acerca de mí</CardTitle>
                                </CardHeader>
                                <CardContent className="space-y-4">
                                    <p className="text-muted-foreground">
                                        Soy un profesional con más de 8 años de experiencia en plomería y climatización. Me especializo en
                                        reparaciones urgentes, instalaciones nuevas y mantenimiento preventivo. Trabajo con materiales de
                                        primera calidad y ofrezco garantía en todos mis servicios.
                                    </p>

                                    <div className="grid md:grid-cols-2 gap-6">
                                        <div>
                                            <h4 className="font-semibold mb-3">Especialidades</h4>
                                            <div className="flex flex-wrap gap-2">
                                                <Badge variant="outline">Plomería Residencial</Badge>
                                                <Badge variant="outline">Instalación de A/C</Badge>
                                                <Badge variant="outline">Reparaciones Urgentes</Badge>
                                                <Badge variant="outline">Mantenimiento</Badge>
                                            </div>
                                        </div>

                                        <div>
                                            <h4 className="font-semibold mb-3">Certificaciones</h4>
                                            <div className="space-y-2">
                                                <div className="flex items-center">
                                                    <Award className="h-4 w-4 mr-2 text-primary" />
                                                    <span className="text-sm">Técnico Certificado en Climatización</span>
                                                </div>
                                                <div className="flex items-center">
                                                    <Award className="h-4 w-4 mr-2 text-primary" />
                                                    <span className="text-sm">Instalador Autorizado Gas Natural</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>

                            <Card>
                                <CardHeader>
                                    <CardTitle>Información de Contacto</CardTitle>
                                </CardHeader>
                                <CardContent className="space-y-4">
                                    <div className="grid md:grid-cols-2 gap-4">
                                        <div className="flex items-center">
                                            <Phone className="h-4 w-4 mr-3 text-muted-foreground" />
                                            <span>+54 342 123-4567</span>
                                        </div>
                                        <div className="flex items-center">
                                            <Mail className="h-4 w-4 mr-3 text-muted-foreground" />
                                            <span>carlos.martinez@email.com</span>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        </TabsContent>

                        <TabsContent value="portfolio" className="space-y-6">
                            <div className="flex items-center justify-between">
                                <h2 className="text-2xl font-bold text-foreground">Mi Portafolio</h2>
                                <Button>
                                    <Upload className="h-4 w-4 mr-2" />
                                    Agregar Trabajo
                                </Button>
                            </div>

                            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                                {portfolio.map((work) => (
                                    <Card key={work.id} className="overflow-hidden">
                                        <div className="aspect-video bg-muted flex items-center justify-center">
                                            <Upload className="h-8 w-8 text-muted-foreground" />
                                        </div>
                                        <CardContent className="p-4">
                                            <div className="flex items-center justify-between mb-2">
                                                <Badge variant="outline">{work.category}</Badge>
                                                <span className="text-sm text-muted-foreground">{work.date}</span>
                                            </div>
                                            <h3 className="font-semibold mb-2">{work.title}</h3>
                                            <p className="text-sm text-muted-foreground">{work.description}</p>
                                        </CardContent>
                                    </Card>
                                ))}
                            </div>
                        </TabsContent>

                        <TabsContent value="reviews" className="space-y-6">
                            <div className="flex items-center justify-between">
                                <h2 className="text-2xl font-bold text-foreground">Reseñas de Clientes</h2>
                                <div className="flex items-center space-x-2">
                                    <Star className="h-5 w-5 text-yellow-500" />
                                    <span className="font-semibold">4.8</span>
                                    <span className="text-muted-foreground">({reviews.length} reseñas)</span>
                                </div>
                            </div>

                            <div className="space-y-4">
                                {reviews.map((review) => (
                                    <Card key={review.id}>
                                        <CardContent className="p-6">
                                            <div className="flex items-start justify-between mb-3">
                                                <div>
                                                    <h4 className="font-semibold">{review.client}</h4>
                                                    <p className="text-sm text-muted-foreground">{review.job}</p>
                                                </div>
                                                <div className="flex items-center space-x-2">
                                                    <div className="flex">
                                                        {[...Array(5)].map((_, i) => (
                                                            <Star
                                                                key={i}
                                                                className={`h-4 w-4 ${i < review.rating ? "text-yellow-500 fill-current" : "text-gray-300"
                                                                    }`}
                                                            />
                                                        ))}
                                                    </div>
                                                    <span className="text-sm text-muted-foreground">{review.date}</span>
                                                </div>
                                            </div>
                                            <p className="text-muted-foreground">{review.comment}</p>
                                        </CardContent>
                                    </Card>
                                ))}
                            </div>
                        </TabsContent>

                        <TabsContent value="settings" className="space-y-6">
                            <Card>
                                <CardHeader>
                                    <CardTitle>Configuración del Perfil</CardTitle>
                                    <CardDescription>Actualiza tu información personal y preferencias</CardDescription>
                                </CardHeader>
                                <CardContent className="space-y-6">
                                    <div className="grid md:grid-cols-2 gap-4">
                                        <div className="space-y-2">
                                            <Label htmlFor="firstName">Nombre</Label>
                                            <Input id="firstName" defaultValue="Carlos" />
                                        </div>
                                        <div className="space-y-2">
                                            <Label htmlFor="lastName">Apellido</Label>
                                            <Input id="lastName" defaultValue="Martínez" />
                                        </div>
                                    </div>

                                    <div className="space-y-2">
                                        <Label htmlFor="email">Email</Label>
                                        <Input id="email" type="email" defaultValue="carlos.martinez@email.com" />
                                    </div>

                                    <div className="space-y-2">
                                        <Label htmlFor="phone">Teléfono</Label>
                                        <Input id="phone" defaultValue="+54 342 123-4567" />
                                    </div>

                                    <div className="space-y-2">
                                        <Label htmlFor="bio">Descripción profesional</Label>
                                        <Textarea
                                            id="bio"
                                            defaultValue="Soy un profesional con más de 8 años de experiencia en plomería y climatización..."
                                            className="min-h-[100px]"
                                        />
                                    </div>

                                    <div className="flex space-x-3">
                                        <Button>Guardar Cambios</Button>
                                        <Button variant="outline">Cancelar</Button>
                                    </div>
                                </CardContent>
                            </Card>
                        </TabsContent>
                    </Tabs>
                </div>
            </div>
        </div>
    )
}


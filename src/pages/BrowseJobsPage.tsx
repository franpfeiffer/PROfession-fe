"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import {
    Search,
    MapPin,
    Clock,
    Users,
    Filter,
    Zap,
    Droplets,
    Paintbrush,
    Wrench,
    Book as Broom,
    Wind,
} from "lucide-react"
import { useState } from "react"
import Header from "@/components/Header"

export default function BrowseJobsPage() {
    const [selectedCategory, setSelectedCategory] = useState("all")
    const [selectedLocation, setSelectedLocation] = useState("all")

    const categories = [
        { id: "all", name: "Todos", icon: null },
        { id: "plomeria", name: "Plomería", icon: Droplets, color: "text-blue-600" },
        { id: "electricidad", name: "Electricidad", icon: Zap, color: "text-yellow-600" },
        { id: "pintura", name: "Pintura", icon: Paintbrush, color: "text-purple-600" },
        { id: "limpieza", name: "Limpieza", icon: Broom, color: "text-green-600" },
        { id: "mantenimiento", name: "Mantenimiento", icon: Wrench, color: "text-gray-600" },
        { id: "climatizacion", name: "Climatización", icon: Wind, color: "text-cyan-600" },
    ]

    const jobs = [
        {
            id: 1,
            title: "Reparación de cañería en cocina",
            description:
                "Necesito un plomero para reparar una pérdida en la cañería de la cocina. Es urgente porque está goteando mucho.",
            location: "Santa Fe Capital",
            budget: "$15.000 - $25.000",
            time: "Hace 2 horas",
            proposals: 5,
            category: "Plomería",
            urgent: true,
            client: "María González",
            verified: true,
        },
        {
            id: 2,
            title: "Instalación de aire acondicionado split",
            description:
                "Busco técnico especializado para instalar aire acondicionado split en dormitorio principal. Tengo el equipo.",
            location: "Recreo",
            budget: "$45.000 - $60.000",
            time: "Hace 4 horas",
            proposals: 3,
            category: "Climatización",
            urgent: false,
            client: "Carlos Martín",
            verified: true,
        },
        {
            id: 3,
            title: "Pintura completa de living y comedor",
            description:
                "Necesito pintar living y comedor de casa. Aproximadamente 40m². Incluye preparación de paredes y materiales.",
            location: "Santo Tomé",
            budget: "$80.000 - $120.000",
            time: "Hace 1 día",
            proposals: 8,
            category: "Pintura",
            urgent: false,
            client: "Ana López",
            verified: true,
        },
        {
            id: 4,
            title: "Reparación de instalación eléctrica",
            description:
                "Tengo problemas con la instalación eléctrica en varias habitaciones. Se corta la luz frecuentemente.",
            location: "Santa Fe Capital",
            budget: "$30.000 - $50.000",
            time: "Hace 6 horas",
            proposals: 2,
            category: "Electricidad",
            urgent: true,
            client: "Roberto Silva",
            verified: false,
        },
        {
            id: 5,
            title: "Limpieza profunda post construcción",
            description:
                "Necesito limpieza completa de casa después de remodelación. Incluye ventanas, pisos y eliminación de polvo.",
            location: "Esperanza",
            budget: "$25.000 - $40.000",
            time: "Hace 3 días",
            proposals: 12,
            category: "Limpieza",
            urgent: false,
            client: "Lucía Fernández",
            verified: true,
        },
    ]

    return (
        <div className="min-h-screen bg-background">
            <Header />

            <div className="container mx-auto px-4 py-8">
                {/* Header de búsqueda */}
                <div className="mb-8">
                    <h1 className="text-3xl font-bold text-foreground mb-4">Explorar Trabajos</h1>
                    <p className="text-muted-foreground mb-6">Encuentra trabajos que coincidan con tus habilidades y ubicación</p>

                    {/* Barra de búsqueda */}
                    <div className="flex flex-col lg:flex-row gap-4 mb-6">
                        <div className="flex-1 relative">
                            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                            <Input placeholder="Buscar trabajos..." className="pl-10" />
                        </div>
                        <div className="relative">
                            <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                            <select className="pl-10 pr-4 py-2 border border-border rounded-md bg-background min-w-[200px]">
                                <option value="all">Todas las ubicaciones</option>
                                <option value="santa-fe">Santa Fe Capital</option>
                                <option value="recreo">Recreo</option>
                                <option value="santo-tome">Santo Tomé</option>
                                <option value="esperanza">Esperanza</option>
                            </select>
                        </div>
                        <Button>
                            <Filter className="h-4 w-4 mr-2" />
                            Filtros
                        </Button>
                    </div>

                    {/* Filtros de categoría */}
                    <div className="flex flex-wrap gap-2">
                        {categories.map((category) => (
                            <button
                                key={category.id}
                                onClick={() => setSelectedCategory(category.id)}
                                className={`flex items-center gap-2 px-4 py-2 rounded-full border transition-all ${selectedCategory === category.id
                                        ? "border-primary bg-primary text-primary-foreground"
                                        : "border-border hover:border-primary/50"
                                    }`}
                            >
                                {category.icon && <category.icon className="h-4 w-4" />}
                                <span className="text-sm font-medium">{category.name}</span>
                            </button>
                        ))}
                    </div>
                </div>

                {/* Lista de trabajos */}
                <div className="grid gap-6">
                    {jobs.map((job) => (
                        <Card key={job.id} className="hover:shadow-lg transition-shadow cursor-pointer">
                            <CardHeader>
                                <div className="flex items-start justify-between">
                                    <div className="flex-1">
                                        <div className="flex items-center gap-2 mb-2">
                                            <CardTitle className="text-xl text-balance">{job.title}</CardTitle>
                                            {job.verified && (
                                                <Badge variant="secondary" className="text-xs">
                                                    ✓ Verificado
                                                </Badge>
                                            )}
                                        </div>
                                        <div className="flex items-center gap-2 mb-3">
                                            <Badge variant="outline">{job.category}</Badge>
                                            {job.urgent && <Badge variant="destructive">Urgente</Badge>}
                                        </div>
                                        <CardDescription className="text-pretty text-base">{job.description}</CardDescription>
                                    </div>
                                </div>
                            </CardHeader>
                            <CardContent>
                                <div className="space-y-4">
                                    <div className="flex items-center justify-between">
                                        <div className="flex items-center text-sm text-muted-foreground">
                                            <MapPin className="h-4 w-4 mr-1" />
                                            {job.location}
                                        </div>
                                        <div className="text-sm text-muted-foreground">Cliente: {job.client}</div>
                                    </div>

                                    <div className="flex items-center justify-between">
                                        <span className="text-lg font-semibold text-primary">{job.budget}</span>
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

                                    <div className="flex gap-3 pt-2">
                                        <Button className="flex-1">Enviar Propuesta</Button>
                                        <Button variant="outline">Ver Detalles</Button>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    ))}
                </div>

                {/* Paginación */}
                <div className="flex justify-center mt-12">
                    <div className="flex items-center gap-2">
                        <Button variant="outline" disabled>
                            Anterior
                        </Button>
                        <Button variant="outline" className="bg-primary text-primary-foreground">
                            1
                        </Button>
                        <Button variant="outline">2</Button>
                        <Button variant="outline">3</Button>
                        <Button variant="outline">Siguiente</Button>
                    </div>
                </div>
            </div>
        </div>
    )
}


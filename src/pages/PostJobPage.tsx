"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import {
    Upload,
    MapPin,
    DollarSign,
    Calendar,
    Zap,
    Droplets,
    Paintbrush,
    Wrench,
    Book as Broom,
    Wind,
} from "lucide-react"
import { useState } from "react"
import Header from "@/components/Header"

export default function PostJobPage() {
    const [selectedCategory, setSelectedCategory] = useState("")
    const [urgency, setUrgency] = useState("normal")

    const categories = [
        { id: "plomeria", name: "Plomería", icon: Droplets, color: "text-blue-600" },
        { id: "electricidad", name: "Electricidad", icon: Zap, color: "text-yellow-600" },
        { id: "pintura", name: "Pintura", icon: Paintbrush, color: "text-purple-600" },
        { id: "limpieza", name: "Limpieza", icon: Broom, color: "text-green-600" },
        { id: "mantenimiento", name: "Mantenimiento", icon: Wrench, color: "text-gray-600" },
        { id: "climatizacion", name: "Climatización", icon: Wind, color: "text-cyan-600" },
    ]

    return (
        <div className="min-h-screen bg-background">
            <Header />

            <div className="container mx-auto px-4 py-16">
                <div className="max-w-2xl mx-auto">
                    <div className="text-center mb-8">
                        <h1 className="text-3xl font-bold text-foreground mb-4">Publica tu Trabajo</h1>
                        <p className="text-muted-foreground">
                            Describe tu proyecto y recibe propuestas de profesionales verificados
                        </p>
                    </div>

                    <Card>
                        <CardHeader>
                            <CardTitle>Detalles del Trabajo</CardTitle>
                            <CardDescription>
                                Completa la información para que los profesionales puedan enviarte propuestas precisas
                            </CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-6">
                            {/* Título del trabajo */}
                            <div className="space-y-2">
                                <Label htmlFor="title">Título del trabajo *</Label>
                                <Input id="title" placeholder="Ej: Reparación de cañería en cocina" className="text-lg" />
                            </div>

                            {/* Categoría */}
                            <div className="space-y-3">
                                <Label>Categoría del servicio *</Label>
                                <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                                    {categories.map((category) => (
                                        <button
                                            key={category.id}
                                            onClick={() => setSelectedCategory(category.id)}
                                            className={`p-4 border rounded-lg text-center transition-all ${selectedCategory === category.id
                                                    ? "border-primary bg-primary/5"
                                                    : "border-border hover:border-primary/50"
                                                }`}
                                        >
                                            <category.icon className={`h-6 w-6 mx-auto mb-2 ${category.color}`} />
                                            <span className="text-sm font-medium">{category.name}</span>
                                        </button>
                                    ))}
                                </div>
                            </div>

                            {/* Descripción */}
                            <div className="space-y-2">
                                <Label htmlFor="description">Descripción detallada *</Label>
                                <Textarea
                                    id="description"
                                    placeholder="Describe el trabajo que necesitas realizar. Incluye detalles como ubicación específica, materiales necesarios, tiempo estimado, etc."
                                    className="min-h-[120px]"
                                />
                            </div>

                            {/* Fotos */}
                            <div className="space-y-2">
                                <Label>Fotos del problema/área (opcional)</Label>
                                <div className="border-2 border-dashed border-border rounded-lg p-8 text-center">
                                    <Upload className="h-8 w-8 mx-auto mb-4 text-muted-foreground" />
                                    <p className="text-muted-foreground mb-2">Arrastra las fotos aquí o haz clic para seleccionar</p>
                                    <p className="text-sm text-muted-foreground">
                                        Las fotos ayudan a los profesionales a entender mejor el trabajo
                                    </p>
                                    <Button variant="outline" className="mt-4 bg-transparent">
                                        Seleccionar Fotos
                                    </Button>
                                </div>
                            </div>

                            {/* Ubicación */}
                            <div className="space-y-2">
                                <Label htmlFor="location">Ubicación *</Label>
                                <div className="relative">
                                    <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                                    <Input id="location" placeholder="Ej: Santa Fe Capital, Barrio Candioti" className="pl-10" />
                                </div>
                            </div>

                            {/* Presupuesto */}
                            <div className="space-y-3">
                                <Label>Presupuesto estimado *</Label>
                                <div className="grid grid-cols-2 gap-3">
                                    <div className="relative">
                                        <DollarSign className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                                        <Input placeholder="Mínimo" className="pl-10" />
                                    </div>
                                    <div className="relative">
                                        <DollarSign className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                                        <Input placeholder="Máximo" className="pl-10" />
                                    </div>
                                </div>
                                <p className="text-sm text-muted-foreground">
                                    Los rangos de presupuesto ayudan a atraer profesionales adecuados
                                </p>
                            </div>

                            {/* Urgencia */}
                            <div className="space-y-3">
                                <Label>¿Cuándo necesitas el servicio?</Label>
                                <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                                    {[
                                        { id: "urgent", label: "Urgente", desc: "Hoy o mañana", badge: "Urgente" },
                                        { id: "soon", label: "Pronto", desc: "Esta semana", badge: null },
                                        { id: "flexible", label: "Flexible", desc: "Cuando sea posible", badge: null },
                                    ].map((option) => (
                                        <button
                                            key={option.id}
                                            onClick={() => setUrgency(option.id)}
                                            className={`p-4 border rounded-lg text-left transition-all ${urgency === option.id ? "border-primary bg-primary/5" : "border-border hover:border-primary/50"
                                                }`}
                                        >
                                            <div className="flex items-center justify-between mb-1">
                                                <span className="font-medium">{option.label}</span>
                                                {option.badge && (
                                                    <Badge variant="destructive" className="text-xs">
                                                        {option.badge}
                                                    </Badge>
                                                )}
                                            </div>
                                            <p className="text-sm text-muted-foreground">{option.desc}</p>
                                        </button>
                                    ))}
                                </div>
                            </div>

                            {/* Información adicional */}
                            <div className="space-y-2">
                                <Label htmlFor="additional">Información adicional (opcional)</Label>
                                <Textarea
                                    id="additional"
                                    placeholder="¿Hay algo más que los profesionales deberían saber? Horarios preferidos, acceso al lugar, etc."
                                    className="min-h-[80px]"
                                />
                            </div>

                            {/* Botones */}
                            <div className="flex flex-col sm:flex-row gap-3 pt-6">
                                <Button className="flex-1" size="lg">
                                    <Calendar className="h-4 w-4 mr-2" />
                                    Publicar Trabajo
                                </Button>
                                <Button variant="outline" size="lg">
                                    Guardar Borrador
                                </Button>
                            </div>

                            <div className="text-center text-sm text-muted-foreground">
                                Al publicar, aceptas nuestros{" "}
                                <a href="#" className="text-primary hover:underline">
                                    términos de servicio
                                </a>
                                . Tu trabajo será visible para profesionales verificados.
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </div>
    )
}


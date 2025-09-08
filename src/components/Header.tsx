import { Button } from "@/components/ui/button"
import { Wrench } from "lucide-react"
import Link from "next/link"

export default function Header() {
    return (
        <header className="border-b border-border bg-card/50 backdrop-blur-sm sticky top-0 z-50">
            <div className="container mx-auto px-4 py-4">
                <div className="flex items-center justify-between">
                    <Link href="/" className="flex items-center space-x-2">
                        <Wrench className="h-8 w-8 text-primary" />
                        <h1 className="text-2xl font-bold text-foreground">OficiosPro</h1>
                    </Link>
                    <nav className="hidden md:flex items-center space-x-6">
                        <Link href="/browse-jobs" className="text-muted-foreground hover:text-foreground transition-colors">
                            Buscar Trabajos
                        </Link>
                        <Link href="/dashboard" className="text-muted-foreground hover:text-foreground transition-colors">
                            Para Profesionales
                        </Link>
                        <a href="#como-funciona" className="text-muted-foreground hover:text-foreground transition-colors">
                            Cómo Funciona
                        </a>
                    </nav>
                    <div className="flex items-center space-x-3">
                        <Link href="/login">
                            <Button variant="outline" size="sm">
                                Iniciar Sesión
                            </Button>
                        </Link>
                        <Link href="/register">
                            <Button size="sm">Registrarse</Button>
                        </Link>
                    </div>
                </div>
            </div>
        </header>
    )
}


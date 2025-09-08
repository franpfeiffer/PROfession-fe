import { Wrench } from "lucide-react"
import Link from "next/link"

export default function Footer() {
    return (
        <footer className="bg-card border-t border-border py-12 px-4">
            <div className="container mx-auto">
                <div className="grid md:grid-cols-4 gap-8">
                    <div>
                        <Link href="/" className="flex items-center space-x-2 mb-4">
                            <Wrench className="h-6 w-6 text-primary" />
                            <span className="text-lg font-bold text-foreground">OficiosPro</span>
                        </Link>
                        <p className="text-muted-foreground text-sm">
                            La plataforma líder para conectar profesionales de oficios con clientes en Santa Fe.
                        </p>
                    </div>

                    <div>
                        <h5 className="font-semibold text-foreground mb-3">Para Clientes</h5>
                        <ul className="space-y-2 text-sm text-muted-foreground">
                            <li>
                                <Link href="/browse-jobs" className="hover:text-foreground transition-colors">
                                    Buscar Profesionales
                                </Link>
                            </li>
                            <li>
                                <Link href="/post-job" className="hover:text-foreground transition-colors">
                                    Publicar Trabajo
                                </Link>
                            </li>
                            <li>
                                <a href="#como-funciona" className="hover:text-foreground transition-colors">
                                    Cómo Funciona
                                </a>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h5 className="font-semibold text-foreground mb-3">Para Profesionales</h5>
                        <ul className="space-y-2 text-sm text-muted-foreground">
                            <li>
                                <Link href="/register" className="hover:text-foreground transition-colors">
                                    Registrarse
                                </Link>
                            </li>
                            <li>
                                <Link href="/dashboard" className="hover:text-foreground transition-colors">
                                    Encontrar Trabajos
                                </Link>
                            </li>
                            <li>
                                <a href="#" className="hover:text-foreground transition-colors">
                                    Centro de Ayuda
                                </a>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h5 className="font-semibold text-foreground mb-3">Soporte</h5>
                        <ul className="space-y-2 text-sm text-muted-foreground">
                            <li>
                                <a href="#" className="hover:text-foreground transition-colors">
                                    Contacto
                                </a>
                            </li>
                            <li>
                                <a href="#" className="hover:text-foreground transition-colors">
                                    Términos y Condiciones
                                </a>
                            </li>
                            <li>
                                <a href="#" className="hover:text-foreground transition-colors">
                                    Privacidad
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-border mt-8 pt-8 text-center text-sm text-muted-foreground">
                    <p>&copy; 2024 OficiosPro. Todos los derechos reservados.</p>
                </div>
            </div>
        </footer>
    )
}


"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Search, Send, Paperclip, Phone, Video, MoreVertical, MessageSquare } from "lucide-react"
import { useState } from "react"
import Header from "@/components/Header"

export default function MessagesPage() {
    const [selectedChat, setSelectedChat] = useState(1)
    const [newMessage, setNewMessage] = useState("")

    const conversations = [
        {
            id: 1,
            name: "María González",
            lastMessage: "¿Podrías venir mañana por la mañana?",
            time: "10:30",
            unread: 2,
            online: true,
            job: "Reparación de cañería",
            avatar: "MG",
        },
        {
            id: 2,
            name: "Carlos Martín",
            lastMessage: "Perfecto, nos vemos el viernes",
            time: "Ayer",
            unread: 0,
            online: false,
            job: "Instalación de A/C",
            avatar: "CM",
        },
        {
            id: 3,
            name: "Ana López",
            lastMessage: "¿Incluye los materiales el presupuesto?",
            time: "2 días",
            unread: 1,
            online: true,
            job: "Pintura de living",
            avatar: "AL",
        },
    ]

    const messages = [
        {
            id: 1,
            sender: "client",
            content: "Hola Carlos, vi tu propuesta para la reparación de la cañería. Me parece muy completa.",
            time: "09:15",
            date: "Hoy",
        },
        {
            id: 2,
            sender: "me",
            content:
                "¡Hola María! Muchas gracias. Tengo experiencia con este tipo de reparaciones y puedo garantizar un trabajo de calidad.",
            time: "09:18",
            date: "Hoy",
        },
        {
            id: 3,
            sender: "client",
            content: "Perfecto. ¿Cuándo podrías venir a revisar el problema?",
            time: "09:20",
            date: "Hoy",
        },
        {
            id: 4,
            sender: "me",
            content: "Puedo ir hoy por la tarde después de las 15:00 o mañana por la mañana. ¿Qué te conviene más?",
            time: "09:25",
            date: "Hoy",
        },
        {
            id: 5,
            sender: "client",
            content: "¿Podrías venir mañana por la mañana? Estaré en casa hasta las 12:00.",
            time: "10:30",
            date: "Hoy",
        },
    ]

    const currentConversation = conversations.find((conv) => conv.id === selectedChat)

    return (
        <div className="min-h-screen bg-background">
            <Header />

            <div className="container mx-auto px-4 py-8">
                <div className="mb-6">
                    <h1 className="text-3xl font-bold text-foreground mb-2">Mensajes</h1>
                    <p className="text-muted-foreground">Comunícate con tus clientes y gestiona tus conversaciones</p>
                </div>

                <div className="grid lg:grid-cols-3 gap-6 h-[600px]">
                    <Card className="lg:col-span-1">
                        <CardHeader>
                            <CardTitle className="flex items-center justify-between">
                                <span>Conversaciones</span>
                                <Badge variant="secondary">{conversations.length}</Badge>
                            </CardTitle>
                            <div className="relative">
                                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                                <Input placeholder="Buscar conversaciones..." className="pl-10" />
                            </div>
                        </CardHeader>
                        <CardContent className="p-0">
                            <div className="space-y-1">
                                {conversations.map((conversation) => (
                                    <button
                                        key={conversation.id}
                                        onClick={() => setSelectedChat(conversation.id)}
                                        className={`w-full p-4 text-left hover:bg-muted/50 transition-colors border-b border-border last:border-b-0 ${selectedChat === conversation.id ? "bg-muted" : ""
                                            }`}
                                    >
                                        <div className="flex items-start space-x-3">
                                            <div className="relative">
                                                <Avatar className="h-10 w-10">
                                                    <AvatarFallback>{conversation.avatar}</AvatarFallback>
                                                </Avatar>
                                                {conversation.online && (
                                                    <div className="absolute -bottom-1 -right-1 w-3 h-3 bg-green-500 rounded-full border-2 border-background"></div>
                                                )}
                                            </div>
                                            <div className="flex-1 min-w-0">
                                                <div className="flex items-center justify-between mb-1">
                                                    <h3 className="font-medium text-sm truncate">{conversation.name}</h3>
                                                    <div className="flex items-center space-x-1">
                                                        <span className="text-xs text-muted-foreground">{conversation.time}</span>
                                                        {conversation.unread > 0 && (
                                                            <Badge
                                                                variant="destructive"
                                                                className="text-xs px-1.5 py-0.5 min-w-[18px] h-[18px] flex items-center justify-center"
                                                            >
                                                                {conversation.unread}
                                                            </Badge>
                                                        )}
                                                    </div>
                                                </div>
                                                <p className="text-xs text-muted-foreground mb-1 truncate">{conversation.job}</p>
                                                <p className="text-sm text-muted-foreground truncate">{conversation.lastMessage}</p>
                                            </div>
                                        </div>
                                    </button>
                                ))}
                            </div>
                        </CardContent>
                    </Card>

                    <Card className="lg:col-span-2 flex flex-col">
                        {currentConversation ? (
                            <>
                                <CardHeader className="border-b border-border">
                                    <div className="flex items-center justify-between">
                                        <div className="flex items-center space-x-3">
                                            <div className="relative">
                                                <Avatar className="h-10 w-10">
                                                    <AvatarFallback>{currentConversation.avatar}</AvatarFallback>
                                                </Avatar>
                                                {currentConversation.online && (
                                                    <div className="absolute -bottom-1 -right-1 w-3 h-3 bg-green-500 rounded-full border-2 border-background"></div>
                                                )}
                                            </div>
                                            <div>
                                                <h3 className="font-semibold">{currentConversation.name}</h3>
                                                <p className="text-sm text-muted-foreground">{currentConversation.job}</p>
                                            </div>
                                        </div>
                                        <div className="flex items-center space-x-2">
                                            <Button variant="outline" size="sm">
                                                <Phone className="h-4 w-4" />
                                            </Button>
                                            <Button variant="outline" size="sm">
                                                <Video className="h-4 w-4" />
                                            </Button>
                                            <Button variant="outline" size="sm">
                                                <MoreVertical className="h-4 w-4" />
                                            </Button>
                                        </div>
                                    </div>
                                </CardHeader>

                                <CardContent className="flex-1 p-4 overflow-y-auto">
                                    <div className="space-y-4">
                                        {messages.map((message) => (
                                            <div
                                                key={message.id}
                                                className={`flex ${message.sender === "me" ? "justify-end" : "justify-start"}`}
                                            >
                                                <div
                                                    className={`max-w-[70%] p-3 rounded-lg ${message.sender === "me" ? "bg-primary text-primary-foreground" : "bg-muted"
                                                        }`}
                                                >
                                                    <p className="text-sm">{message.content}</p>
                                                    <p
                                                        className={`text-xs mt-1 ${message.sender === "me" ? "text-primary-foreground/70" : "text-muted-foreground"
                                                            }`}
                                                    >
                                                        {message.time}
                                                    </p>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </CardContent>

                                <div className="border-t border-border p-4">
                                    <div className="flex items-center space-x-2">
                                        <Button variant="outline" size="sm">
                                            <Paperclip className="h-4 w-4" />
                                        </Button>
                                        <Input
                                            placeholder="Escribe tu mensaje..."
                                            value={newMessage}
                                            onChange={(e) => setNewMessage(e.target.value)}
                                            className="flex-1"
                                            onKeyPress={(e) => {
                                                if (e.key === "Enter") {
                                                    setNewMessage("")
                                                }
                                            }}
                                        />
                                        <Button size="sm">
                                            <Send className="h-4 w-4" />
                                        </Button>
                                    </div>
                                </div>
                            </>
                        ) : (
                            <CardContent className="flex-1 flex items-center justify-center">
                                <div className="text-center">
                                    <MessageSquare className="h-12 w-12 mx-auto mb-4 text-muted-foreground" />
                                    <h3 className="text-lg font-semibold mb-2">Selecciona una conversación</h3>
                                    <p className="text-muted-foreground">Elige una conversación de la lista para comenzar a chatear</p>
                                </div>
                            </CardContent>
                        )}
                    </Card>
                </div>
            </div>
        </div>
    )
}


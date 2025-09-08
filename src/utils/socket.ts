import { io, type Socket } from "socket.io-client"
import { ENV } from "../config/env"
import Cookies from "js-cookie"

class SocketService {
    private socket: Socket | null = null

    connect(): Socket {
        if (!this.socket) {
            const token = Cookies.get("auth_token")

            this.socket = io(ENV.SOCKET_URL, {
                auth: {
                    token,
                },
                transports: ["websocket"],
            })

            this.socket.on("connect", () => {
                console.log("[v0] Socket connected")
            })

            this.socket.on("disconnect", () => {
                console.log("[v0] Socket disconnected")
            })

            this.socket.on("connect_error", (error) => {
                console.error("[v0] Socket connection error:", error)
            })
        }

        return this.socket
    }

    disconnect(): void {
        if (this.socket) {
            this.socket.disconnect()
            this.socket = null
        }
    }

    getSocket(): Socket | null {
        return this.socket
    }

    joinConversation(conversationId: string): void {
        this.socket?.emit("join_conversation", conversationId)
    }

    leaveConversation(conversationId: string): void {
        this.socket?.emit("leave_conversation", conversationId)
    }

    sendMessage(conversationId: string, message: string): void {
        this.socket?.emit("send_message", {
            conversationId,
            message,
        })
    }

    onNewMessage(callback: (data: any) => void): void {
        this.socket?.on("new_message", callback)
    }

    onMessageRead(callback: (data: any) => void): void {
        this.socket?.on("message_read", callback)
    }

    onJobUpdate(callback: (data: any) => void): void {
        this.socket?.on("job_update", callback)
    }

    onNewProposal(callback: (data: any) => void): void {
        this.socket?.on("new_proposal", callback)
    }
}

export const socketService = new SocketService()


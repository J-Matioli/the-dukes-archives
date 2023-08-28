export interface Auth {
    accessToken: string
    id: string
    nome: string
    notificar: boolean
    refreshToken: string
}

export interface AuthResponse {
    dados: Auth
    mensagem: string[] 
    sucesso: boolean
}

export interface RegisterResponse {
    dados: boolean
    mensagem: string[];
    sucesso: boolean
}
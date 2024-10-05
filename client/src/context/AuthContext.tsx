import React, { createContext, useState, ReactNode, useContext } from 'react';
import axiosInstance from '../utils/axios';

interface UserDataType {
    userId: number;
    name: string;
    email: string;
    phoneNumber: string;
}

interface AuthContextType {
    user: UserDataType | null;
    login: (email: string, password: string) => Promise<void>;
    logout: () => void;
    isAuthenticated: boolean;
    jwtToken?: string;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

interface AuthProviderProps {
    children: ReactNode;
}

export const AuthProvider = ({ children }: AuthProviderProps) => {
    const [user, setUser] = useState<UserDataType | null>(null);
    const [jwtToken, setJwtToken] = useState<string | undefined>(undefined);

    const login = async (email: string, password: string): Promise<void> => {
        try {
            const res = await axiosInstance.post('api/login', { email, password });
            const userData: UserDataType = res.data.user;
            const token: string = res.data.token;
            setUser(userData);
            setJwtToken(token);
            localStorage.setItem('jwtToken', token);
        } catch (e) {
            console.error("Error while making login API call", e);
            throw e;
        }
    };

    const logout = () => {
        setUser(null);
        setJwtToken(undefined);
        localStorage.removeItem('jwtToken');
    };

    const isAuthenticated = !!user;

    const value: AuthContextType = {
        user,
        login,
        logout,
        isAuthenticated,
        jwtToken,
    };

    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = (): AuthContextType => {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error('useAuth must be used within an AuthProvider');
    }
    return context;
};

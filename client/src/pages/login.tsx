// src/pages/login.tsx
import Header from '../components/Header';
import Footer from '../components/Footer';
import Link from 'next/link';

const LoginPage = () => {
    return (
        <div className="flex flex-col min-h-screen">
            <Header />
            <main className="flex-grow flex items-center justify-center bg-gray-100">
                <div className="bg-white p-8 rounded shadow-md w-96">
                    <h2 className="text-2xl font-bold mb-4">Login</h2>
                    <form>
                        <div className="mb-4">
                            <label htmlFor="email" className="block mb-2">Email:</label>
                            <input type="email" id="email" className="w-full p-2 border rounded" required />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="password" className="block mb-2">Password:</label>
                            <input type="password" id="password" className="w-full p-2 border rounded" required />
                        </div>
                        <button type="submit" className="w-full bg-primary text-white p-2 rounded">Login</button>
                    </form>
                    <p className="mt-4 text-center">
                        Don&apos;t have an account? <Link href="/sign-up" className="text-primary">Sign Up</Link>
                    </p>
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default LoginPage;

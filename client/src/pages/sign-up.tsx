import Header from '../components/Header';
import Footer from '../components/Footer';
import { useState } from 'react';
import Link from 'next/link';

const SignUpPage = () => {
    const [password, setPassword] = useState('');
    const [confirmPassword, setconfirmPassword] = useState('');
    const [passwordsMatch, setPasswordsMatch] = useState(true);
    const [isPasswordValid, setIsPasswordValid] = useState(false);
    const [mobileNumber, setMobileNumber] = useState('');
    const [email, setEmail] = useState('');
    const [isMobileNumberValid, setIsMobileNumberValid] = useState(false);
    const [isEmailValid, setIsEmailValid] = useState(false);

    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    const mobileRegex = /^(\+91|0)?[6-9]\d{9}$/;

    const handleMobileNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setMobileNumber(e.target.value)
        setIsMobileNumberValid(mobileRegex.test(e.target.value))
    }

    const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(e.target.value);
        setIsPasswordValid(passwordRegex.test(e.target.value))
        setPasswordsMatch(e.target.value === confirmPassword)
    }
    const handleConfirmPasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setconfirmPassword(e.target.value);
        setPasswordsMatch(e.target.value === password)
    }

    return (
        <div className="flex flex-col min-h-screen">
            <Header />
            <main className="flex-grow flex items-center justify-center bg-gray-100">
                <div className="bg-white p-8 rounded shadow-md w-96">
                    <h2 className="text-2xl font-bold mb-3">Sign up</h2>
                    <form>
                        <div className="mb-4">
                            <label htmlFor="name" className="block mb-2">Name:</label>
                            <input type="text" id="name" className="w-full p-2 border rounded" required />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="email" className="block mb-2">Email:</label>
                            <input type="text" id="email" className="w-full p-2 border rounded" required />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="mobile" className="block mb-2">Mobile:</label>
                            <input type="text"
                                id="mobile"
                                className="w-full p-2 border rounded"
                                value={mobileNumber}
                                onChange={handleMobileNumberChange}
                                required />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="password" className="block mb-2">Password:</label>
                            <input
                                type="password"
                                id="password"
                                className={`w-full p-2 border rounded ${password && !isPasswordValid ? 'border-red-500' : ''}`}
                                value={password}
                                onChange={handlePasswordChange}
                                required
                            />
                            {!password || !isPasswordValid && (
                                <p className="text-sm text-gray-600 mt-1">
                                    Password must be at least 8 characters long and include a mix of uppercase and lowercase letters, numbers, and special characters.
                                </p>
                            )}
                        </div>
                        <div className="mb-4">
                            <label htmlFor="confirm-password" className="block mb-2">Confirm Password:</label>
                            <input type="password"
                                id="confirm-password"
                                className="w-full p-2 border rounded"
                                value={confirmPassword}
                                onChange={handleConfirmPasswordChange}
                                required
                            />
                            {!passwordsMatch && confirmPassword && (
                                <p className="text-sm text-red-500 mt-1">Passwords do not match.</p>
                            )}
                        </div>
                        <button
                            type="submit"
                            className={`w-full ${password && isPasswordValid && confirmPassword && passwordsMatch ? 'transition ease-in-out delay-150 bg-gray-500 bg-primary duration-300' : 'bg-gray-600'} text-white p-2 rounded`}
                            disabled={!isMobileNumberValid || !password || !isPasswordValid || !confirmPassword || !passwordsMatch}
                        >Login</button>
                    </form>
                    <p className="mt-4 text-center">
                        Already have an account? <Link href="/login" className="text-primary">Login</Link>
                    </p>
                </div>
            </main >
            <Footer />
        </div >
    );
};

export default SignUpPage;

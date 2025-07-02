import React from 'react'
import Swal from 'sweetalert2'
import 'sweetalert2/dist/sweetalert2.min.css'

export default function Home() {
    const handleSignIn = () => {
            Swal.fire({
                icon: 'info',
                title: 'Sign In',
                text: 'Sign in functionality coming soon!',
                confirmButtonColor: '#a78bfa'
            });
        };
        const handleSignUp = () => {
            Swal.fire({
                icon: 'success',
                title: 'Sign Up',
                text: 'Sign up functionality coming soon!',
                confirmButtonColor: '#a78bfa'
            });
        };
    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-white to-purple-100 px-4 py-12">
            <div className="bg-white rounded-xl shadow-lg p-10 max-w-md w-full flex flex-col items-center">
                <h1 className="text-4xl font-bold text-purple-700 mb-4">Tweek</h1>
                <p className="text-gray-600 text-center mb-8">
                    Tweek is a platform where professionals anonymously share company reviews, salaries, and interview experiences.
                    Discover real workplace insights to make informed career choices with confidence.
                </p>
                <div className="flex space-x-4">
                    <button
                        onClick={handleSignIn}
                        className="bg-purple-500 hover:bg-purple-600 text-white font-semibold py-2 px-6 rounded-lg shadow transition duration-200"
                    >
                        Sign in
                    </button>
                    <button
                        onClick={handleSignUp}
                        className="bg-white border border-purple-500 text-purple-600 hover:bg-purple-50 font-semibold py-2 px-6 rounded-lg shadow transition duration-200"
                    >
                        Sign up
                    </button>
                </div>
            </div>
        </div>
    )
}

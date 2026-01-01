import { useState } from "react";
import { auth } from ".././../firebase";
import { useNavigate } from "react-router-dom";

import {
    signInWithEmailAndPassword,
    GoogleAuthProvider,
    signInWithPopup,
} from "firebase/auth";

function Login({ closeLogin }) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);

    // Email / Password Login
    const handleLogin = async () => {
        if (!email || !password) {
            alert("Please fill all fields");
            return;
        }

        try {
            setLoading(true);
            await signInWithEmailAndPassword(auth, email, password);
            alert("Login Successful");
            closeLogin();
        } catch (error) {
            alert(error.message);
        } finally {
            setLoading(false);
        }
    };

    // Google Login
    const handleGoogleLogin = async () => {
        try {
            const provider = new GoogleAuthProvider();
            await signInWithPopup(auth, provider);
            alert("Google Login Successful");
            closeLogin();
        } catch (error) {
            alert(error.message);
        }
    };
    const navigate = useNavigate();  // link signup


    return (
        <div className="bg-white w-[460px] p-10 rounded-lg shadow-xl relative animate-scaleIn">
            {/* Close */}
            <button
                onClick={closeLogin}
                className="absolute top-3 right-3 text-gray-400 hover:text-black"
            >
                ✕
            </button>

            <h2 className="text-xl font-semibold text-center mb-4">Login</h2>

            <input
                type="text"
                placeholder="Please enter your Phone or Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full border p-2 rounded mb-3 focus:outline-none focus:border-orange-500"
            />

            <input
                type="password"
                placeholder="Please enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full border p-2 rounded mb-2 focus:outline-none focus:border-orange-500"
            />

            <p className="text-right text-sm text-orange-500 cursor-pointer mb-4">
                Forgot password?
            </p>

            <button
                onClick={handleLogin}
                disabled={loading}
                className="w-full bg-orange-500 text-white py-2 rounded hover:bg-orange-600 disabled:opacity-50"
            >
                {loading ? "Logging in..." : "Login"}
            </button>

            <p className="text-center text-sm mt-4">
                Don&apos;t have an account?{" "}
                <span
                    onClick={() => navigate("/signup")}
                    className="text-orange-500 cursor-pointer hover:underline"
                >
                    Sign up
                </span>

            </p>


            <div className="text-center text-sm text-gray-400 my-3">
                Or, login with
            </div>

            <div className="flex gap-2">
                <button
                    onClick={handleGoogleLogin}
                    className="flex-1 border py-2 rounded hover:bg-gray-100"
                >
                    Google
                </button>

                <button
                    disabled
                    className="flex-1 border py-2 rounded opacity-50 cursor-not-allowed"
                >
                    Facebook
                </button>
            </div>
        </div>
    );
}

export default Login;

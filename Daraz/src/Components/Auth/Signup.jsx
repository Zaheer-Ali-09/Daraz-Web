import { useState } from "react";
import { auth } from "../../firebase";

import { useNavigate } from "react-router-dom";
import {
    createUserWithEmailAndPassword,
    GoogleAuthProvider,
    signInWithPopup,
} from "firebase/auth";

function Signup({ closeSignup }) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);

    // Email / Password Signup
    const handleSignup = async () => {
        if (!email || !password) {
            alert("Please fill all fields");
            return;
        }

        try {
            setLoading(true);
            await createUserWithEmailAndPassword(auth, email, password);
            alert("Account Created Successfully");
            closeSignup();
        } catch (error) {
            alert(error.message);
        } finally {
            setLoading(false);
        }
    };

    // Google Signup
    const handleGoogleSignup = async () => {
        try {
            const provider = new GoogleAuthProvider();
            await signInWithPopup(auth, provider);
            alert("Google Signup Successful");
            closeSignup();
        } catch (error) {
            alert(error.message);
        }
    };

    const navigate = useNavigate();  // link login
    return (
        <div className="bg-white w-[360px] p-6 rounded-lg shadow-xl relative animate-scaleIn">
            {/* Close */}
            <button
                onClick={closeSignup}
                className="absolute top-3 right-3 text-gray-400 hover:text-black"
            >
                ✕
            </button>

            <h2 className="text-xl font-semibold text-center mb-4">Sign Up</h2>

            <input
                type="email"
                placeholder="Please enter your Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full border p-2 rounded mb-3 focus:outline-none focus:border-orange-500"
            />

            <input
                type="password"
                placeholder="Create a password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full border p-2 rounded mb-4 focus:outline-none focus:border-orange-500"
            />

            <button
                onClick={handleSignup}
                disabled={loading}
                className="w-full bg-orange-500 text-white py-2 rounded hover:bg-orange-600 disabled:opacity-50"
            >
                {loading ? "Creating account..." : "Sign Up"}
            </button>

            <p className="text-center text-sm mt-4">
                Already have an account?{" "}
                <span
                    onClick={() => navigate("/login")} // <- works now
                    className="text-orange-500 cursor-pointer hover:underline"
                >
                    Sign up
                </span>
            </p>

            <div className="text-center text-sm text-gray-400 my-3">
                Or, sign up with
            </div>

            <div className="flex gap-2">
                <button
                    onClick={handleGoogleSignup}
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

export default Signup;
// phone otp__________________________________________________

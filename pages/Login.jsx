import React from "react"
import {
    Form,
    useLoaderData,
    useActionData,
    useNavigation,
    redirect
} from "react-router-dom"
import { loginUser } from "../api"

export function loader({ request }) {
    return new URL(request.url).searchParams.get("message")
}

export async function action({ request }) {
    const formData = await request.formData()
    const email = formData.get("email")
    const password = formData.get("password")
    try {
        const data = await loginUser({ email, password })
        localStorage.setItem("loggedin", true)
        return redirect("/host")
    } catch (err) {
        return err.message
    }
}

export default function Login() {
    const message = useLoaderData()
    const errorMessage = useActionData()
    const navigation = useNavigation()
    
    return (
        <div className="login-container">
            <h1>{message || "Sign in to your account"}</h1>
            {errorMessage && <h3>{errorMessage}</h3>}
            <Form
                method="post"
                className="login-form"
                replace
            >
                <input
                    name="email"
                    type="email"
                    placeholder="Email address"
                />
                <input
                    name="password"
                    type="password"
                    placeholder="Password"
                />
                <button
                    disabled={navigation.state === "submitting"}
                >
                    {navigation.state === "submitting"
                        ? "Logging in..."
                        : "Log in"
                    }
                </button>
            </Form>
        </div>
    )

}
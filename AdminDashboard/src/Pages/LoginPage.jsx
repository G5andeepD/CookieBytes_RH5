import LoginForm from "../Components/LoginForm"
export default function LoginPage() {

    return (
        <LoginForm setLogged={() => { console.log("Jello!") }} />
    )
}
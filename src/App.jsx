import { RouterApp } from "./router/RouterApp";
import { AuthProvider } from "./app/auth/context/authContext";
import { CartTrolleyProvider } from "./app/context/CartTrolleyContext";
function App() {
  return (

    <AuthProvider>
      <CartTrolleyProvider>
        <RouterApp />
      </CartTrolleyProvider>
    </AuthProvider>
  )
}

export default App

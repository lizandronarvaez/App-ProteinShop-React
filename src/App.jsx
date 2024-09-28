import { RouterApp } from "./router/RouterApp";
import { CartTrolleyProvider } from "./app/context/CartTrolleyContext";
function App() {
  return (
    <CartTrolleyProvider>
      <RouterApp />
    </CartTrolleyProvider>
  )
}

export default App

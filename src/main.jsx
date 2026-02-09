import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter} from "react-router-dom";
import { QuizProvider } from "./context/QuizContext";
import { AuthProvider } from "./context/AuthContext.jsx";

createRoot(document.getElementById('root')).render(
<BrowserRouter>
    <AuthProvider>
        <QuizProvider>
            <App />
        </QuizProvider>
    </AuthProvider>
</BrowserRouter>
)

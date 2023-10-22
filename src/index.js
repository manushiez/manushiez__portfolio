import ReactDOM from "react-dom";
import { createRoot } from "react-dom/client"; // Import createRoot from react-dom/client
import App from "./app";
import './index.css';

const root = document.querySelector("#root");
const rootElement = createRoot(root); // Use createRoot from react-dom/client
rootElement.render(<App />);

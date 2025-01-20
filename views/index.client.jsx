import { hydrateRoot } from "react-dom/client";
import App from "./app";
import { SSRProvider } from "./ssr";

hydrateRoot(document.getElementById("root"), <SSRProvider value={false}><App /></SSRProvider>);
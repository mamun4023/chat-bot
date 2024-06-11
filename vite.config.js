import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
   base: "/chat-bot",
   plugins: [react()],
   preview: {
    port: 8000,
    strictPort: true,
   },
   server: {
    port: 8000,
    strictPort: true,
    host: true,
    origin: "http://0.0.0.0:8000",
   },
});
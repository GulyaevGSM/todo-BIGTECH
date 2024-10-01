import { createRoot } from 'react-dom/client';
import '@/app/styles/index.scss';
import App from "@/app/App";
import { ThemeProvider } from "@/app/providers/ThemeProvider";
import "@/shared/config/i18n/i18n";

const domNode = document.getElementById('root')!;
const root = createRoot(domNode);

root.render(
    <ThemeProvider>
        <App/>
    </ThemeProvider>
);

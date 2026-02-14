import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import ErrorBoundary from './components/ErrorBoundary.tsx';


// Global error handling to capture and log issues that cause blank screens
window.onerror = (message, source, lineno, colno, error) => {
  console.error("Global JS Error:", message, "at", source, lineno, colno, error);
  return false;
};

window.onunhandledrejection = (event) => {
  console.error("Unhandled Promise Rejection:", event.reason);
};

const rootElement = document.getElementById('root');
if (!rootElement) {
  console.error("Could not find root element with id 'root'. Check your index.html.");
} else {
  try {
    const root = ReactDOM.createRoot(rootElement);
    root.render(
      <React.StrictMode>
        <ErrorBoundary>
          <App />
        </ErrorBoundary>
      </React.StrictMode>
    );
  } catch (error) {
    console.error("Failed to render React application:", error);
    // Fallback UI if even the root fails
    if (rootElement) {
      rootElement.innerHTML = `
        <div style="height: 100vh; display: flex; align-items: center; justify-content: center; font-family: sans-serif; text-align: center; background: #F8F9FA;">
          <div style="padding: 2rem; background: white; border-radius: 1rem; box-shadow: 0 4px 6px rgba(0,0,0,0.1);">
            <h1>🐝 Critical Startup Error</h1>
            <p>CyBee could not start. Please check the console for details.</p>
            <button onclick="window.location.reload()" style="padding: 0.5rem 1rem; cursor: pointer;">Try Again</button>
          </div>
        </div>
      `;
    }
  }
}
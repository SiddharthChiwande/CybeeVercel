# CyBee: Architectural Decisions

This document provides an overview of the technical architecture and design choices made for the CyBee application.

## 1. Frontend Stack

- **Framework: React with TypeScript**
  - **Why:** React's component-based model is ideal for building a modular and scalable user interface. TypeScript adds static typing, which significantly improves code quality, maintainability, and developer confidence by catching errors early.

- **Styling: Tailwind CSS**
  - **Why:** Tailwind is a utility-first CSS framework that allows for rapid UI development directly within the HTML/JSX. This approach avoids context-switching between different file types and makes component styling self-contained and easy to manage. It is included via a CDN for simplicity in this development environment.

- **Build/Setup: Import Maps (ESM)**
  - **Why:** The project uses a modern ES Modules (ESM) approach with an `importmap` in `index.html`. This avoids the need for a complex build setup (like Webpack or Vite) for this MVP, allowing the browser to handle module resolution directly. It's fast, simple, and great for rapid prototyping.

## 2. State Management

- **Technology: React Context API**
  - **Why:** For the MVP's global state needs (user information, AI-generated tip), the built-in React Context API is both simple and sufficient. It provides a way to pass data through the component tree without having to pass props down manually at every level.
  - **Decision vs. Redux/Zustand:** Heavier state management libraries like Redux were deemed overkill for the current scope. The Context API avoids boilerplate and external dependencies while effectively solving the problem.

## 3. Routing

- **Library: React Router (`<HashRouter>`)**
  - **Why:** React Router is the standard for handling navigation in React-based Single Page Applications (SPAs).
  - **`HashRouter` specifically:** This router uses the URL hash (`#`) to manage the client-side route. It was chosen for its excellent compatibility with static file servers (like GitHub Pages or basic hosting), as it doesn't require any server-side configuration to handle URL rewrites.

## 4. Code Structure & Organization

The project follows a standard feature-based directory structure to keep the codebase organized and maintainable.

- **/`components`**: Contains reusable UI components that are shared across different parts of the application (e.g., `Header.tsx`, `BottomNav.tsx`, `Icons.tsx`).
- **/`screens`**: Contains top-level components, where each component typically represents a full page or view (e.g., `HomeScreen.tsx`, `LessonsScreen.tsx`).
- **/`context`**: Holds the React Context for global state management (`AppContext.tsx`). This centralizes state logic.
- **/`services`**: For modules that handle external interactions, primarily API calls. `geminiService.ts` abstracts all communication with the Google Gemini API, separating the AI logic from the UI components.
- **/`constants.tsx`**: A centralized location for static data used throughout the app, such as quiz questions, leaderboard data, and daily tips. This makes it easy to update content without digging through component logic.
- **/`types.ts`**: A single file for all shared TypeScript types and interfaces. This ensures type consistency across the entire application.

## 5. Key Architectural Patterns

- **Service Abstraction (`geminiService.ts`)**
  - All interactions with the Gemini API are handled within this dedicated service. This pattern is crucial for a few reasons:
    1.  **Separation of Concerns:** UI components don't need to know the implementation details of the API calls.
    2.  **Mocking for Development:** The service includes a mock function that returns a sample tip. This allows the frontend to be developed and tested independently, even without a valid Gemini API key.
    3.  **Maintainability:** If the API changes or we decide to switch AI providers, we only need to update this one file.

- **Client-Side Persistence (`localStorage`)**
  - **Why:** To enhance the user experience, quiz progress is saved to the browser's `localStorage`. This is a simple, effective, and backend-free solution for persisting non-sensitive data across browser sessions. It ensures users don't lose their work if they accidentally close the tab.

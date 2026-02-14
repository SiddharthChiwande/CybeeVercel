# CyBee: Idea Inbox & MVP Roadmap

This document outlines the core vision for the CyBee application, details the scope of the current Minimum Viable Product (MVP), and serves as an inbox for future ideas.

## 1. Project Vision: What Are We Building?

**CyBee is an AI-powered, gamified cybersecurity learning app designed for students.**

- **Mission:** To make learning about digital safety engaging, personalized, and effective. We want to empower young users to navigate the digital world safely and confidently.
- **Core Concept:** Instead of generic lessons, CyBee uses quizzes to identify a student's specific knowledge gaps. It then leverages the Gemini AI to provide a personalized, actionable "Smart Tip" that directly addresses their weakest area.
- **Target Audience:** Young students (e.g., middle school) who are active online but may lack formal cybersecurity education.

---

## 2. MVP Scope: What Works Right Now?

The current application is a functional MVP that demonstrates the core feedback loop.

### Core User Flow:
1.  **Start on Home Screen:** The user sees a default AI tip, their rank/points, and a list of quizzes.
2.  **Take a Quiz:** The user navigates to the "Lessons" screen and completes the "Phishing Basics" quiz.
3.  **Quiz Persistence:** If the user leaves the quiz mid-way, their progress (current question and selected answers) is saved to Local Storage, allowing them to resume seamlessly.
4.  **Submit & Analyze:** Upon submission, the app calculates the score and identifies the topics of any incorrectly answered questions.
5.  **AI Brain Power:** The list of "missed topics" is sent to the Google Gemini API.
6.  **Personalized Feedback:** Gemini generates a unique "Smart Tip" focused *only* on the user's identified weaknesses.
7.  **Instant Update:** The user is navigated back to the Home Screen, where the "AI Recommendation Card" has been instantly updated with their new, personalized tip. Their points and rank are also updated based on the quiz score.

### Implemented Features Checklist:
- [x] **Home Screen Dashboard:**
  - [x] Dynamic AI Recommendation Card.
  - [x] Quick Access Quiz navigation.
  - [x] Gamification widget with user rank and a static leaderboard.
  - [x] Daily Tip widget.
- [x] **Functional Quiz System:**
  - [x] Multi-question quiz ("Phishing 101").
  - [x] State management for answers and progression.
  - [x] Quiz progress saved to Local Storage.
  - [x] Results screen with score calculation.
- [x] **AI Integration (Gemini):**
  - [x] `geminiService` to handle API requests.
  - [x] Mock service for offline/API-key-less development.
  - [x] Prompt engineering to generate targeted, friendly tips.
- [x] **Persistent UI:**
  - [x] Top header with dynamic user stats.
  - [x] Bottom navigation for all main app sections.
- [x] **Global State:**
  - [x] React Context API manages user data and the AI tip across the app.

---

## 3. Idea Inbox & Future Roadmap

This section lists features and improvements for future iterations.

### Post-MVP (Next Steps)
- **Implement More Quizzes:** Build out the "Passwords" and "Cyberbullying" quizzes.
- **Dynamic Quiz Progress:** The progress bars on the Home Screen should reflect the user's actual progress/completion for each quiz.
- **Functional Profile/Settings:** A page where users can view their profile or log out.
- **Refine UI/UX:** Add more animations, transitions, and visual feedback to enhance the user experience.

### Version 2.0 Features
- **Dynamic Leaderboard:** Connect to a backend service for a real-time, persistent leaderboard.
- **Expanded Content Library:** Introduce new topics (e.g., Social Media Privacy, Online Scams, Digital Footprint) with lessons and interactive modules, not just quizzes.
- **Full Reporting Feature:** Create a guided form to help students safely report a cyberbullying or security incident to a trusted adult.
- **Achievements & Badges:** Add a dedicated system for earning badges for completing quizzes, mastering topics, or maintaining a daily login streak.

### Ambitious "Blue Sky" Ideas
- **AI Chatbot Tutor:** A conversational AI (powered by Gemini) that can answer students' specific cybersecurity questions in a safe, moderated environment.
- **Interactive Simulations:** Create "choose your own adventure" style simulations where students must navigate a mock phishing attack or a social media scam, making decisions and seeing the consequences in real-time.
- **Parent/Teacher Dashboard:** A separate web portal for parents or teachers to monitor student progress, see areas where they are struggling, and access resources to help them.


import React from 'react';
import { KeyIcon, ShieldCheckIcon, BugIcon, LockIcon, LinkIcon, CodeIcon } from '../components/Icons';

export const CYBER_QUIZ_QUESTIONS = [
  {
    question: "What does '2FA' stand for?",
    answers: [
      "Two-Factor Authentication",
      "Two-Form Authorization",
      "Two-File Authentication",
      "Two-Factor Application",
    ],
    correctAnswer: "Two-Factor Authentication",
  },
  {
    question: "Which of the following is the strongest password?",
    answers: ["password123", "MyP@ssw0rd!", "12345678", "qwerty"],
    correctAnswer: "MyP@ssw0rd!",
  },
  {
    question: "What is a 'VPN' used for?",
    answers: [
      "To speed up your computer",
      "To encrypt your internet connection",
      "To install antivirus software",
      "To block all ads",
    ],
    correctAnswer: "To encrypt your internet connection",
  },
  {
    question: "If you receive a suspicious email, what should you do?",
    answers: [
      "Click the links to check them",
      "Reply and ask if it's real",
      "Delete it without opening",
      "Forward it to all your friends",
    ],
    correctAnswer: "Delete it without opening",
  },
  {
    question: "What is 'malware'?",
    answers: [
      "A type of computer hardware",
      "A secure software program",
      "Software designed to cause harm",
      "An internet security company",
    ],
    correctAnswer: "Software designed to cause harm",
  },
  {
      question: "What is the best way to share sensitive information online?",
      answers: ["Email", "Text message", "Social media post", "Encrypted messaging app"],
      correctAnswer: "Encrypted messaging app"
  },
  {
      question: "Which of these is a sign of a secure website?",
      answers: ["It has lots of pop-up ads", "The URL starts with http://", "The URL starts with https://", "It asks for your password immediately"],
      correctAnswer: "The URL starts with https://"
  },
  {
      question: "Why should you be careful about using public Wi-Fi?",
      answers: ["It can be very slow", "It might be unsecure and expose your data", "It uses up your mobile data", "It is always safe to use"],
      correctAnswer: "It might be unsecure and expose your data"
  },
  {
      question: "What is 'phishing'?",
      answers: ["A type of computer virus", "A fun online game", "An attempt to steal your personal info", "A way to clean your computer"],
      correctAnswer: "An attempt to steal your personal info"
  },
  {
      question: "How often should you update your software and apps?",
      answers: ["Only when they stop working", "Once a year", "Never", "As soon as updates are available"],
      correctAnswer: "As soon as updates are available"
  }
];

export const PHISHING_EMAILS = [
  {
    id: 1,
    subject: "Account Verification Needed",
    from: "support@yourbanc.com",
    body: "Dear customer, we've detected suspicious activity on your account. Please click here to verify your details immediately to avoid suspension.",
    isPhishing: true,
  },
  {
    id: 2,
    subject: "Your order confirmation #12345",
    from: "orders@amazn.com",
    body: "Thanks for your order! Your new laptop will be shipped soon. If you did not make this purchase, click here to cancel.",
    isPhishing: true,
  },
  {
    id: 3,
    subject: "Weekly Project Update",
    from: "team-updates@cybee.app",
    body: "Hi team, please find the attached document for this week's project update. Let's review it in tomorrow's meeting.",
    isPhishing: false,
  },
  {
    id: 4,
    subject: "CONGRATULATIONS! YOU HAVE WON!",
    from: "winner@lucky-prizes.net",
    body: "You've been selected as the winner of our grand prize! To claim your new phone, please provide your address and pay a small shipping fee.",
    isPhishing: true,
  },
  {
    id: 5,
    subject: "Password Reset Request",
    from: "no-reply@cybee.app",
    body: "We received a request to reset the password for your account. If you made this request, you can ignore this email. No changes have been made.",
    isPhishing: false,
  },
];

export const MEMORY_ICONS = [
    { type: 'key', icon: React.createElement(KeyIcon, { className: "w-10 h-10 text-cybee-green" }) },
    { type: 'shield', icon: React.createElement(ShieldCheckIcon, { className: "w-10 h-10 text-cybee-blue" }) },
    { type: 'malware', icon: React.createElement(BugIcon, { className: "w-10 h-10 text-red-500" }) },
    { type: 'lock', icon: React.createElement(LockIcon, { className: "w-10 h-10 text-cybee-dark-blue" }) },
    { type: 'link', icon: React.createElement(LinkIcon, { className: "w-10 h-10 text-cybee-purple" }) },
    { type: 'code', icon: React.createElement(CodeIcon, { className: "w-10 h-10 text-gray-500" }) },
];

export const WORD_PUZZLES = [
  { scrambled: "SWHNIGPI", answer: "PHISHING" },
  { scrambled: "YBESRCU", answer: "CYBER" },
  { scrambled: "WSPASORD", answer: "PASSWORD" },
  { scrambled: "RUIVS", answer: "VIRUS" },
  { scrambled: "TRENICPY", answer: "ENCRYPT" },
  { scrambled: "AEMRWLA", answer: "MALWARE" },
];

export const HACK_SIM_SCENARIO = {
    start: {
        text: "You are a cybersecurity analyst. An alert flashes on your screen: 'UNUSUAL NETWORK TRAFFIC DETECTED'. What do you do?",
        choices: [
            { text: "Trace IP", next: "traceIp", score: 10 },
            { text: "Shut down server", next: "shutdown", score: -20 },
            { text: "Ignore alert", next: "ignore", score: -50 }
        ]
    },
    traceIp: {
        text: "The IP address originates from an unknown foreign server. It is attempting to access sensitive user data. What's the next move?",
        choices: [
            { text: "Block the IP", next: "blockIp", score: 30 },
            { text: "Attempt to hack back", next: "hackBack", score: -40 },
        ]
    },
    shutdown: {
        text: "You shut down the server. The attack stops, but legitimate users can no longer access the service. The company loses money.",
        choices: [{ text: "Game Over", next: "end_bad", score: 0 }]
    },
    ignore: {
        text: "You ignore the alert. An hour later, all the company's data has been encrypted and a ransom note appears. It's too late.",
        choices: [{ text: "Game Over", next: "end_bad", score: 0 }]
    },
    blockIp: {
        text: "You successfully block the IP address. The immediate threat is neutralized. You have protected the company's data!",
        choices: [{ text: "You Win!", next: "end_good", score: 50 }]
    },
    hackBack: {
        text: "You attempt to hack the attacker's server. This is illegal and they detect your attempt, launching a larger, more aggressive attack.",
        choices: [{ text: "Game Over", next: "end_bad", score: 0 }]
    },
    end_good: {
        text: "Congratulations! You made the right choices and defended the network successfully.",
        choices: []
    },
    end_bad: {
        text: "The attack was successful. Better luck next time. Review your choices and try again!",
        choices: []
    }
};

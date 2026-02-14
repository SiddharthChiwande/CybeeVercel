
import React from 'react';

type IconProps = React.SVGProps<SVGSVGElement>;

export const HomeIcon: React.FC<IconProps> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline></svg>
);

export const BookOpenIcon: React.FC<IconProps> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path></svg>
);

export const ShieldAlertIcon: React.FC<IconProps> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path><path d="M12 8v4"></path><path d="M12 16h.01"></path></svg>
);

export const TrophyIcon: React.FC<IconProps> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6"></path><path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18"></path><path d="M4 22h16"></path><path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22"></path><path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22"></path><path d="M18 2H6v7a6 6 0 0 0 12 0V2z"></path></svg>
);

export const UserIcon: React.FC<IconProps> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
);

export const BeeIcon: React.FC<IconProps> = (props) => (
    <svg viewBox="0 0 52 42" xmlns="http://www.w3.org/2000/svg" {...props}>
        <g transform="translate(2 2)" stroke="#333333" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" fill="none">
            {/* Left Wing */}
            <path d="M20 12 C 8 4, 8 20, 20 12 Z" fill="#FFFFFF"/>
            <path d="M20 26 C 8 18, 8 34, 20 26 Z" fill="#FFFFFF"/>

            {/* Body */}
            <ellipse cx="24" cy="24" rx="7" ry="12" fill="#FFD700"/>
            {/* Stripes */}
            <path d="M19 22 h 10" strokeWidth="2.5"/>
            <path d="M18.5 27 h 11" strokeWidth="2.5"/>
            
            {/* Head */}
            <circle cx="24" cy="14" r="7" fill="#FFD700"/>

            {/* Right Wing */}
            <path d="M28 12 C 40 4, 40 20, 28 12 Z" fill="#FFFFFF"/>
            <path d="M28 26 C 40 18, 40 34, 28 26 Z" fill="#FFFFFF"/>
            
            {/* Face */}
            <circle cx="22" cy="14" r="0.5" fill="#333333" stroke="none"/>
            <circle cx="26" cy="14" r="0.5" fill="#333333" stroke="none"/>
            <path d="M23 17 Q 24 18, 25 17" strokeWidth="2"/>

            {/* Antennae */}
            <path d="M21.5 8 C 20 4, 22 2, 21.5 8 Z" fill="#333333"/>
            <path d="M26.5 8 C 28 4, 26 2, 26.5 8 Z" fill="#333333"/>
        </g>
    </svg>
);

export const LightbulbIcon: React.FC<IconProps> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5"></path><path d="M9 18h6"></path><path d="M10 22h4"></path></svg>
);

export const KeyIcon: React.FC<IconProps> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="m21 2-2 2m-7.61 7.61a5.5 5.5 0 1 1-7.778 7.778 5.5 5.5 0 0 1 7.777-7.777zm0 0L15.5 7.5m0 0 3 3L22 7l-3-3m-3.5 3.5L19 4"></path></svg>
);

export const ShieldCheckIcon: React.FC<IconProps> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path><path d="m9 12 2 2 4-4"></path></svg>
);

export const MessageCircleWarningIcon: React.FC<IconProps> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z"></path><path d="M12 8v4"></path><path d="M12 16h.01"></path></svg>
);

export const CheckCircleIcon: React.FC<IconProps> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"></path><path d="m9 12 2 2 4-4"></path></svg>
);

export const AppleIcon: React.FC<IconProps> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" {...props}><path d="M15.225 3.504c.328.004.65.033.964.084a5.242 5.242 0 0 0 .528.092c.324.067.63.18.91.333.284.155.54.345.76.564.218.22.404.46.55.71.144.25.25.51.314.77.062.255.087.513.072.766a5.558 5.558 0 0 1-.072.766c-.064.26-.16.514-.28.756-.123.245-.27.48-.436.697-.17.22-.358.42-.56.59-.204.17-.42.31-.643.417-.222.108-.45.18-.68.214a3.184 3.184 0 0 1-.703.042 4.192 4.192 0 0 1-.74-.052 3.24 3.24 0 0 1-.68-.18 1.48 1.48 0 0 1-.505-.303 1.023 1.023 0 0 1-.29-.43c-.085-.18-.13-.37-.13-.56 0-.21.05-.41.14-.59.1-.18.24-.34.4-.46.16-.12.35-.2.55-.22.2-.03.4-.01.58.05.18.06.35.15.5.28.05.04.1.07.15.1l.15.08c.07.03.15.05.22.05.1 0 .2-.02.28-.08.08-.05.15-.13.18-.22.04-.09.05-.2.01-.3-.04-.1-.1-.18-.19-.23-.09-.05-.2-.08-.3-.07-.1.01-.2.05-.27.12-.08.07-.15.15-.22.24a.95.95 0 0 0-.2.28c-.06.12-.1.25-.1.38 0 .15.04.29.11.42.08.13.19.24.32.32.13.08.28.14.44.17.16.03.33.03.49.01.16-.02.32-.07.47-.14.15-.07.3-.17.43-.28.13-.12.25-.26.34-.42.1-.16.17-.34.21-.54.04-.2.05-.4.02-.6-.03-.2-.1-.4-.19-.58-.1-.18-.22-.35-.36-.49-.14-.14-.3-.27-.47-.37-.17-.1-.36-.18-.56-.23-.2-.05-.4-.07-.6-.06-.2.01-.4.05-.58.11-.18.06-.35.15-.5.27-.15.12-.28.28-.39.45-.1.13-.18.28-.23.44-.05.16-.07.33-.04.5.03.17.1.34.2.49.1.15.22.29.36.41.14.12.3.22.46.29.16.08.34.13.52.16.18.03.36.03.54 0 .1-.01.2-.04.28-.08.09-.04.16-.1.22-.17.06-.07.1-.15.12-.24.02-.09.02-.18 0-.27-.02-.09-.06-.17-.12-.24-.06-.07-.14-.12-.22-.16-.09-.04-.18-.06-.27-.06-.1 0-.19.01-.28.04-.09.03-.18.08-.25.14-.07.06-.13.14-.18.22-.05.08-.09.18-.11.28-.02.1-.03.2-.02.3.01.1.04.2.08.28.04.09.1.17.17.23.07.06.15.11.24.15.09.04.18.06.28.07.2.02.4-.02.58-.09.18-.08.35-.19.49-.33.14-.14.26-.3.34-.48.08-.18.13-.38.14-.58.01-.2-.02-.4-.08-.59-.06-.19-.15-.37-.27-.53-.12-.16-.26-.3-.42-.42-.16-.12-.34-.21-.53-.27-.19-.06-.38-.09-.58-.08-.19.01-.38.05-.56.12-.18.07-.35.18-.5.31-.15.13-.28.29-.39.46-.1-.17-.18.35-.23.54-.05.19-.06.38-.03.58.03.19.1.38.2.55.1.17.23.33.37.47.14.14.3.26.47.36.17.1.35.18.54.23.19.05.38.08.58.07.19-.01.38-.05.56-.12.18-.07.35-.18.5-.31.15-.13.28-.29.39-.46.1-.17.18.35-.22-.54-1.25-.4-2.25-1.1-3-2.1-1-1.2-1.6-2.6-1.8-4.2-1.3-.2-2.7-.1-4.1.3-1.3.4-2.5 1-3.6 1.8-1.5 1.1-2.6 2.5-3.2 4.1-1.2 3.5.3 7.2 3.1 9.1.8.5 1.7.8 2.6.8.9 0 1.8-.3 2.5-.8 1-.7 1.7-1.7 2.1-2.9.4-.9.6-1.8.5-2.8-.1-1-.4-1.9-.9-2.7-.5-.8-1.2-1.5-2-1.9-.9-.5-1.8-.7-2.8-.7-.2 0-.4 0-.6.1l-.6.1c-.2.1-.4.1-.6.2-.2 0-.4.1-.5.2-.1.1-.2.2-.3.3-.1.1-.1.2-.1.3 0 .1.1.2.2.3.1.1.2.1.4.1.1 0 .2 0 .4-.1.2-.1.4-.1.6-.1s.4 0 .6-.1c.2 0 .4.1.6.1.7.2 1.4.6 2 1.1.6.5 1.1 1.2 1.4 1.9.3.7.5 1.5.4 2.3-.1.8-.4 1.6-.9 2.2-.5.7-1.1 1.2-1.9 1.5-.7.3-1.5.4-2.2.2-.7-.2-1.4-.6-1.9-1.1-.5-.5-1-.9-1.3-1.2a1.847 1.847 0 0 1-.3-.2 1.25 1.25 0 0 1-.2-.2c-.1-.1-.1-.2-.2-.3-.1-.1-.1-.2-.1-.3 0-.1.1-.2.2-.3l.3-.3c.1-.1.2-.1.3-.1.1 0 .2.1.3.2l.2.2.2.3c.05.1.1.1.1.2.3.3.6.7.9 1 .8 1 1.9 1.7 3.1 2.1.7.2 1.4.3 2.1.1.7-.1 1.4-.4 2-.8 1.2-1 2-2.4 2.3-3.9.3-1.5.1-3.1-.6-4.5-.7-1.4-1.8-2.6-3.1-3.4-1.3-.8-2.8-1.3-4.4-1.4-.3-.1-.6-.1-.9-.1-.3 0-.6 0-.9.1s-.5.1-.8.2c-.2.1-.4.2-.6.3l-.5.3c-.1.1-.2.2-.3.3-.1.1-.1.2-.1.3s0 .2.1.3c.1.1.2.1.3.1.1 0 .2 0 .3-.1l.5-.3c.2-.1.4-.2.6-.3.2-.1.5-.1.7-.2.3-.1.5-.1.8-.1.3 0 .6 0 .9.1.5.1 1 .2 1.5.4.5.2.9.5 1.3.8.4.3.8.7 1.1 1.1.3.4.6.9.8 1.4.2.5.3 1 .4 1.5.1.5.1 1.1 0 1.6-.1.5-.2 1-.4 1.5-.2.5-.5.9-.8 1.3-.3.4-.7.8-1.1 1.1-.4.3-.9.6-1.4.8-.5.2-1 .4-1.5.4-.5.1-1.1.1-1.6 0-.5-.1-1-.2-1.5-.4-.5-.2-.9-.5-1.3-.8-.4-.3-.8-.7-1.1-1.1-.3-.4-.6-.9-.8-1.4-.2-.5-.3-1-.4-1.5-.1-.5-.1-1.1 0-1.6.1-.5.2-1 .4-1.5.2-.5.5-.9.8-1.3.3-.4.7-.8 1.1-1.1.4-.3.9-.6 1.4-.8.5-.2 1-.4 1.5-.4.5-.1 1.1-.1 1.6 0z"/></svg>
);

export const GoogleIcon: React.FC<IconProps> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 48 48" {...props}><path fill="#FFC107" d="M43.611 20.083H42V20H24v8h11.303c-1.649 4.657-6.08 8-11.303 8c-6.627 0-12-5.373-12-12s5.373-12 12-12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C34.046 6.053 29.268 4 24 4C12.955 4 4 12.955 4 24s8.955 20 20 20s20-8.955 20-20c0-1.341-.138-2.65-.389-3.917z"></path><path fill="#FF3D00" d="M6.306 14.691l6.571 4.819C14.655 15.108 18.961 12 24 12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C34.046 6.053 29.268 4 24 4C16.318 4 9.656 8.337 6.306 14.691z"></path><path fill="#4CAF50" d="M24 44c5.166 0 9.86-1.977 13.409-5.192l-6.19-5.238C29.211 35.091 26.715 36 24 36c-5.223 0-9.655-3.356-11.303-7.918l-6.522 5.025C9.505 39.556 16.227 44 24 44z"></path><path fill="#1976D2" d="M43.611 20.083H42V20H24v8h11.303c-.792 2.237-2.231 4.166-4.087 5.571l6.19 5.238C42.022 36.372 44 30.655 44 24c0-1.341-.138-2.65-.389-3.917z"></path></svg>
);

export const FacebookIcon: React.FC<IconProps> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="#1877F2" {...props}><path d="M12 2.04c-5.52 0-10 4.48-10 10s4.48 10 10 10s10-4.48 10-10s-4.48-10-10-10zm2.24 10.38h-1.62v4.94h-2.1v-4.94h-1.1v-1.89h1.1v-1.31c0-1.09.53-2.79 2.79-2.79l1.53.02v1.82h-1.01c-.19 0-.48.1-.48.51v1.75h1.53l-.21 1.89z"/></svg>
);

export const LinkedInIcon: React.FC<IconProps> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="#0A66C2" {...props}><path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14zm-11 5H5v10h3V8zm-1.5-2.25A1.75 1.75 0 0 0 4.75 4a1.75 1.75 0 0 0 0 3.5A1.75 1.75 0 0 0 6.5 5.75zM17 8h-2c-1.11 0-2 .89-2 2v1h-1v2h1v5h3v-5h2v-2h-2v-1c0-.55.45-1 1-1h1V8z"/></svg>
);

export const MicrosoftIcon: React.FC<IconProps> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" {...props}><path fill="#F25022" d="M1 1h10v10H1z"/><path fill="#7FBA00" d="M13 1h10v10H13z"/><path fill="#00A4EF" d="M1 13h10v10H1z"/><path fill="#FFB900" d="M13 13h10v10H13z"/></svg>
);

export const ArrowLeftIcon: React.FC<IconProps> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M19 12H5"></path><path d="m12 19-7-7 7-7"></path></svg>
);

export const UKFlagIcon: React.FC<IconProps> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 60 30" width="24" height="24" {...props}>
    <clipPath id="a">
      <path d="M0 0h60v30H0z"/>
    </clipPath>
    <path d="M0 0v30h60V0z" fill="#012169"/>
    <path d="m0 0 60 30m0-30L0 30" stroke="#fff" strokeWidth="6" clipPath="url(#a)"/>
    <path d="m0 0 60 30m0-30L0 30" stroke="#C8102E" strokeWidth="4" clipPath="url(#a)"/>
    <path d="M30 0v30M0 15h60" stroke="#fff" strokeWidth="10"/>
    <path d="M30 0v30M0 15h60" stroke="#C8102E" strokeWidth="6"/>
  </svg>
);

export const ChevronDownIcon: React.FC<IconProps> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="m6 9 6 6 6-6"></path></svg>
);

export const CogIcon: React.FC<IconProps> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M12 20a8 8 0 1 0 0-16 8 8 0 0 0 0 16z"></path><path d="M12 14a2 2 0 1 0 0-4 2 2 0 0 0 0 4z"></path><path d="M12 2v2"></path><path d="M12 22v-2"></path><path d="m17 20.66-1-1.73"></path><path d="M11 10.27 7 3.34"></path><path d="m20.66 17-1.73-1"></path><path d="m3.34 7 1.73 1"></path><path d="M14 12h8"></path><path d="M2 12h2"></path><path d="m20.66 7-1.73 1"></path><path d="m3.34 17 1.73-1"></path><path d="m17 3.34-1 1.73"></path><path d="m11 13.73-4 6.93"></path></svg>
);

export const LayoutGridIcon: React.FC<IconProps> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><rect width="7" height="7" x="3" y="3" rx="1"></rect><rect width="7" height="7" x="14" y="3" rx="1"></rect><rect width="7" height="7" x="3" y="14" rx="1"></rect><rect width="7" height="7" x="14" y="14" rx="1"></rect></svg>
);

export const SearchIcon: React.FC<IconProps> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><circle cx="11" cy="11" r="8"></circle><path d="m21 21-4.3-4.3"></path></svg>
);

export const BookIcon: React.FC<IconProps> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20"></path></svg>
);

export const XIcon: React.FC<IconProps> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M18 6 6 18"></path><path d="m6 6 12 12"></path></svg>
);

export const ChevronRightIcon: React.FC<IconProps> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="m9 18 6-6-6-6"></path></svg>
);

export const PersonJugglingIcon: React.FC<IconProps> = (props) => (
    <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" {...props}>
        <g fill="#A0E9FF">
            <circle cx="20" cy="20" r="8"/>
            <circle cx="80" cy="25" r="10" fill="#FFD700"/>
            <circle cx="50" cy="15" r="5" fill="#A855F7"/>
        </g>
        <path d="M 60,95 C 55,80 50,70 50,60 C 50,45 65,40 70,55 C 75,70 70,85 60,95 Z" fill="#3B82F6"/>
        <circle cx="65" cy="40" r="10" fill="#F0F0F0"/>
        <path d="M 65,40 L 65,60" stroke="#333" strokeWidth="3"/>
        <path d="M 65,50 L 80,45" stroke="#333" strokeWidth="3"/>
        <path d="M 65,50 L 50,45" stroke="#333" strokeWidth="3"/>
    </svg>
);

// Fix: This component returns a div, not an SVG. Changed props type to React.HTMLAttributes<HTMLDivElement>.
export const SalesIcon: React.FC<React.HTMLAttributes<HTMLDivElement>> = (props) => (
    <div className="w-16 h-16 flex items-center justify-center bg-blue-100 rounded-xl" {...props}>
        <span className="text-blue-600 font-bold text-lg">20%<br/>Off</span>
    </div>
);

// Fix: This component returns a div, not an SVG. Changed props type to React.HTMLAttributes<HTMLDivElement>.
export const LearnIcon: React.FC<React.HTMLAttributes<HTMLDivElement>> = (props) => (
    <div className="w-16 h-16 flex items-center justify-center bg-cyan-100 rounded-xl" {...props}>
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-cyan-600"><path d="M9 12h6l-3 3-3-3z"/><path d="M3 12a9 9 0 1 0 18 0 9 9 0 1 0-18 0z"/></svg>
    </div>
);

// Fix: This component returns a div, not an SVG. Changed props type to React.HTMLAttributes<HTMLDivElement>.
export const FeaturedIcon: React.FC<React.HTMLAttributes<HTMLDivElement>> = (props) => (
    <div className="w-16 h-16 flex items-center justify-center bg-orange-100 rounded-xl" {...props}>
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-orange-600"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
    </div>
);

// Fix: This component returns a div, not an SVG. Changed props type to React.HTMLAttributes<HTMLDivElement>.
export const ResumeIcon: React.FC<React.HTMLAttributes<HTMLDivElement>> = (props) => (
    <div className="w-16 h-16 flex items-center justify-center bg-green-100 rounded-xl" {...props}>
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-green-600"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><polyline points="10 9 9 9 8 9"/></svg>
    </div>
);

export const BellIcon: React.FC<IconProps> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path><path d="M13.73 21a2 2 0 0 1-3.46 0"></path></svg>
);

export const MessageSquareIcon: React.FC<IconProps> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path></svg>
);

export const StarIcon: React.FC<IconProps> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 9.27 12 2"></polygon></svg>
);

export const CalendarIcon: React.FC<IconProps> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><rect width="18" height="18" x="3" y="4" rx="2" ry="2"></rect><line x1="16" x2="16" y1="2" y2="6"></line><line x1="8" x2="8" y1="2" y2="6"></line><line x1="3" x2="21" y1="10" y2="10"></line></svg>
);

export const ClipboardListIcon: React.FC<IconProps> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><rect width="8" height="4" x="8" y="2" rx="1" ry="1"></rect><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"></path><path d="M12 11h4"></path><path d="M12 16h4"></path><path d="M8 11h.01"></path><path d="M8 16h.01"></path></svg>
);

export const SendIcon: React.FC<IconProps> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="m22 2-7 20-4-9-9-4Z"></path><path d="m22 2-11 11"></path></svg>
);

export const LinkIcon: React.FC<IconProps> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.72"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.72-1.72"></path></svg>
);

export const NewspaperIcon: React.FC<IconProps> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M4 22h16a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v16a2 2 0 0 1-2 2Zm0 0a2 2 0 0 1-2-2V4"></path><path d="M8 6h8"></path><path d="M8 10h8"></path><path d="M8 14h4"></path></svg>
);

export const GamepadIcon: React.FC<IconProps> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><line x1="6" x2="10" y1="12" y2="12"></line><line x1="8" x2="8" y1="10" y2="14"></line><line x1="15" x2="15.01" y1="13" y2="13"></line><line x1="18" x2="18.01" y1="11" y2="11"></line><rect width="20" height="12" x="2" y="6" rx="2"></rect></svg>
);

export const CodeIcon: React.FC<IconProps> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline></svg>
);

export const PencilIcon: React.FC<IconProps> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z"></path></svg>
);

export const PaletteIcon: React.FC<IconProps> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><circle cx="13.5" cy="6.5" r=".5" fill="currentColor"></circle><circle cx="17.5" cy="10.5" r=".5" fill="currentColor"></circle><circle cx="8.5" cy="7.5" r=".5" fill="currentColor"></circle><circle cx="6.5" cy="12.5" r=".5" fill="currentColor"></circle><path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.477-1.122-.297-.287-.703-.465-1.17-.465-1.072 0-1.946-.874-1.946-1.947 0-1.072.874-1.946 1.946-1.946.467 0 .873.178 1.17.465.297.287.477.685.477 1.122 0 .942.722 1.688 1.648 1.688 5.5 0 10-4.5 10-10S17.5 2 12 2z"></path></svg>
);

export const HelpCircleIcon: React.FC<IconProps> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><circle cx="12" cy="12" r="10"></circle><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path><line x1="12" y1="17" x2="12.01" y2="17"></line></svg>
);

export const LogOutIcon: React.FC<IconProps> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path><polyline points="16 17 21 12 16 7"></polyline><line x1="21" y1="12" x2="9" y2="12"></line></svg>
);

export const ShareIcon: React.FC<IconProps> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8"></path><polyline points="16 6 12 2 8 6"></polyline><line x1="12" y1="2" x2="12" y2="15"></line></svg>
);

export const BarChartIcon: React.FC<IconProps> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><line x1="12" x2="12" y1="20" y2="10"></line><line x1="18" x2="18" y1="20" y2="4"></line><line x1="6" x2="6" y1="20" y2="16"></line></svg>
);

export const ClockIcon: React.FC<IconProps> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
);

export const DownloadIcon: React.FC<IconProps> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line></svg>
);

export const LockIcon: React.FC<IconProps> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>
);

export const BugIcon: React.FC<IconProps> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M12 18a4 4 0 0 0 4-4h-8a4 4 0 0 0 4 4z"/>
    <path d="M12 14V8"/>
    <path d="M10 10h4"/>
    <path d="M16 8a4 4 0 0 0-8 0"/>
    <path d="M6 14h12"/>
    <path d="m18 18 2 2"/>
    <path d="m4 20 2-2"/>
    <path d="m6 10-2-2"/>
    <path d="m18 8 2-2"/>
  </svg>
);

export const BotMessageSquareIcon: React.FC<IconProps> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M12 6V2H8"/><path d="m8 18-4 4V8a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-2.4"/><path d="M12 18v-1.5"/><path d="M12 12v.5"/></svg>
);

export const SunIcon: React.FC<IconProps> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><circle cx="12" cy="12" r="4"></circle><path d="M12 2v2"></path><path d="M12 20v2"></path><path d="m4.93 4.93 1.41 1.41"></path><path d="m17.66 17.66 1.41 1.41"></path><path d="M2 12h2"></path><path d="M20 12h2"></path><path d="m6.34 17.66-1.41 1.41"></path><path d="m19.07 4.93-1.41 1.41"></path></svg>
);

export const MoonIcon: React.FC<IconProps> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"></path></svg>
);

export const GlobeIcon: React.FC<IconProps> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><circle cx="12" cy="12" r="10"></circle><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"></path><path d="M2 12h20"></path></svg>
);

export const Volume2Icon: React.FC<IconProps> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon><path d="M15.54 8.46a5 5 0 0 1 0 7.07"></path><path d="M19.07 4.93a10 10 0 0 1 0 14.14"></path></svg>
);

export const VibrateIcon: React.FC<IconProps> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="m2 8 2 2-2 2 2 2-2 2"></path><path d="m22 8-2 2 2 2-2 2 2 2"></path><rect width="8" height="14" x="8" y="5" rx="1"></rect></svg>
);

export const TypeIcon: React.FC<IconProps> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><polyline points="4 7 4 4 20 4 20 7"></polyline><line x1="9" x2="15" y1="20" y2="20"></line><line x1="12" x2="12" y1="4" y2="20"></line></svg>
);

export const InfoIcon: React.FC<IconProps> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="16" x2="12" y2="12"></line><line x1="12" y1="8" x2="12.01" y2="8"></line></svg>
);

export const Trash2Icon: React.FC<IconProps> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M3 6h18"></path><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path><line x1="10" y1="11" x2="10" y2="17"></line><line x1="14" y1="11" x2="14" y2="17"></line></svg>
);

export const GraduationCapIcon: React.FC<IconProps> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M22 10v6M2 10l10-5 10 5-10 5z"></path><path d="M6 12v5c0 1.66 4 3 6 3s6-1.34 6-3v-5"></path></svg>
);

export const MegaphoneIcon: React.FC<IconProps> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="m3 11 18-5v12L3 14v-3z"></path><path d="M11.6 16.8a3 3 0 1 1-5.8-1.6"></path></svg>
);

export const SaveIcon: React.FC<IconProps> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z"></path><polyline points="17 21 17 13 7 13 7 21"></polyline><polyline points="7 3 7 8 15 8"></polyline></svg>
);

export const CameraIcon: React.FC<IconProps> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z"></path><circle cx="12" cy="13" r="3"></circle></svg>
);

export const RefreshCwIcon: React.FC<IconProps> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8"></path><path d="M21 3v5h-5"></path><path d="M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16"></path><path d="M3 21v-5h5"></path></svg>
);

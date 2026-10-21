/**
 * Uffizio AI Chat Widget Controller - UffiSanse (ClickUp Brain² Style)
 * Seamlessly themed with Uffizio Telematics & IoT intelligence.
 */

(function () {
  'use strict';

  const CONFIG = Object.assign(
    {
      headerTargetSelector: '.header-contact',
      headerButtonText: 'Ask Uffizio',
      enableFloatingLauncher: true,
      enableSpeechInput: true,
      geminiApiKey: '',
      geminiModel: 'gemini-1.5-flash',
      storageKey: 'uffisanse_chat_history'
    },
    window.UFFIZIO_AI_CONFIG || {}
  );

  // Generator for UffiSanse Star SVG Logo (Official Vector with Travelling Rim Beams)
  const getUffiSanseSvg = (size = 36, id = 'uffi', isWhite = false) => `
    <svg class="cu-uffisanse-svg ${isWhite ? 'cu-svg-white' : ''}" width="${size}" height="${size}" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
      <mask id="path-1-inside-1_${id}" fill="white">
        <path d="M8.61823 6.34806L10.6657 9.53446L12.7095 12.708L9.53946 10.6662L6.35306 8.61882L0.000213621 12.7066L4.09162 6.34859L2.04419 3.16219L0.00952436 0.00305924L6.35306 4.08502L9.53946 2.03759L12.703 0L8.61823 6.34806Z"/>
      </mask>
      
      ${isWhite ? `
        <!-- Pure Luminous Crisp White Star Fill (User requested: "Icon White Color ma") -->
        <path class="cu-star-body-white" d="M8.61823 6.34806L10.6657 9.53446L12.7095 12.708L9.53946 10.6662L6.35306 8.61882L0.000213621 12.7066L4.09162 6.34859L2.04419 3.16219L0.00952436 0.00305924L6.35306 4.08502L9.53946 2.03759L12.703 0L8.61823 6.34806Z" fill="#ffffff" fill-opacity="0.98"/>
      ` : `
        <path d="M8.61823 6.34806L10.6657 9.53446L12.7095 12.708L9.53946 10.6662L6.35306 8.61882L0.000213621 12.7066L4.09162 6.34859L2.04419 3.16219L0.00952436 0.00305924L6.35306 4.08502L9.53946 2.03759L12.703 0L8.61823 6.34806Z" fill="white" fill-opacity="0.12"/>
        
        <!-- Core Angular Multicolor Conic Gradient Fill -->
        <g clip-path="url(#paint0_angular_${id}_clip)" mask="url(#path-1-inside-1_${id})">
          <g transform="matrix(0.00127234 0.010979 -0.0109884 0.00656636 6.35486 3.37073)">
            <foreignObject x="-1187.65" y="-1187.65" width="2375.29" height="2375.29">
              <div xmlns="http://www.w3.org/1999/xhtml" style="background:conic-gradient(from 90deg,rgba(175, 75, 59, 1) 0deg,rgba(76, 181, 58, 1) 38.1672deg,rgba(110, 72, 228, 1) 135.265deg,rgba(212, 180, 255, 1) 167.319deg,rgba(164, 107, 255, 1) 274.296deg,rgba(202, 47, 60, 1) 349.624deg,rgba(175, 75, 59, 1) 360deg);height:100%;width:100%;opacity:1"></div>
            </foreignObject>
          </g>
        </g>
      `}

      <!-- Glassy Base Contour Stroke -->
      <path class="cu-star-rim-base" d="M8.61823 6.34806L10.6657 9.53446L12.7095 12.708L9.53946 10.6662L6.35306 8.61882L0.000213621 12.7066L4.09162 6.34859L2.04419 3.16219L0.00952436 0.00305924L6.35306 4.08502L9.53946 2.03759L12.703 0L8.61823 6.34806Z" fill="none" stroke="rgba(255, 255, 255, ${isWhite ? '0.45' : '0.28'})" stroke-width="0.3" stroke-linejoin="round"/>

      <!-- Travelling Neon Rim Beam along Star Contour (Matches demo.mp4 edge light wave) -->
      <path class="cu-star-rim-trace" d="M8.61823 6.34806L10.6657 9.53446L12.7095 12.708L9.53946 10.6662L6.35306 8.61882L0.000213621 12.7066L4.09162 6.34859L2.04419 3.16219L0.00952436 0.00305924L6.35306 4.08502L9.53946 2.03759L12.703 0L8.61823 6.34806Z" fill="none" stroke="url(#rimGradient_${id})" stroke-width="0.65" stroke-linecap="round" stroke-linejoin="round"/>

      <!-- Leading Brilliant Specular Spark along Stroke Perimeter -->
      <path class="cu-star-rim-spark" d="M8.61823 6.34806L10.6657 9.53446L12.7095 12.708L9.53946 10.6662L6.35306 8.61882L0.000213621 12.7066L4.09162 6.34859L2.04419 3.16219L0.00952436 0.00305924L6.35306 4.08502L9.53946 2.03759L12.703 0L8.61823 6.34806Z" fill="none" stroke="#ffffff" stroke-width="0.85" stroke-linecap="round" stroke-linejoin="round"/>

      <defs>
        <clipPath id="paint0_angular_${id}_clip">
          <path d="M8.61823 6.34806L10.6657 9.53446L12.7095 12.708L9.53946 10.6662L6.35306 8.61882L0.000213621 12.7066L4.09162 6.34859L2.04419 3.16219L0.00952436 0.00305924L6.35306 4.08502L9.53946 2.03759L12.703 0L8.61823 6.34806Z"/>
        </clipPath>
        <!-- Chromatic Multi-Stop Linear Gradient for Stroke Sweep -->
        <linearGradient id="rimGradient_${id}" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#4cb53a" />
          <stop offset="30%" stop-color="#6e48e4" />
          <stop offset="60%" stop-color="#d4b4ff" />
          <stop offset="85%" stop-color="#a46bff" />
          <stop offset="100%" stop-color="#ca2f3c" />
        </linearGradient>
      </defs>
    </svg>
  `;

  // SVGs matching ClickUp Brain styling
  const ICONS = {
    // Uffizio AI Logo: White Rotating Star with Smooth Rhythmic Music Waves
    flower: `
      <div class="cu-flower-icon-wrap">
        <div class="cu-music-wave cu-wave-subbass"></div>
        <div class="cu-music-wave cu-wave-harmonic"></div>
        <div class="cu-music-wave cu-wave-beat"></div>
        ${getUffiSanseSvg(48, 'hero', true)}
      </div>
    `,

    // Small UffiSanse logo
    miniFlower: getUffiSanseSvg(18, 'mini_default'),
    getLogo: (size, id, isWhite = false) => getUffiSanseSvg(size, id, isWhite),

    chevronDown: `<svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m6 9 6 6 6-6"/></svg>`,
    slashCircle: `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="m4.9 4.9 14.2 14.2"/></svg>`,
    dockWindow: `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="18" height="18" x="3" y="3" rx="2"/><path d="M3 9h18"/><path d="M9 21V9"/></svg>`,
    doubleChevronRight: `<svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m13 17 5-5-5-5"/><path d="m6 17 5-5-5-5"/></svg>`,
    cancel: `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>`,
    
    // Action pills icons
    search: `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>`,
    research: `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="m21 11-6-6"/><path d="m21 13-6 6"/><path d="M3 12h18"/></svg>`,
    plus: `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 5v14"/><path d="M5 12h14"/></svg>`,
    edit: `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z"/></svg>`,
    analyze: `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 3v18h18"/><path d="m19 9-5 5-4-4-3 3"/></svg>`,
    flag: `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z"/><line x1="4" x2="4" y1="22" y2="15"/></svg>`,
    
    // Input tool icons
    zap: `<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#f59e0b" stroke-width="2"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>`,
    mic: `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z"/><path d="M19 10v2a7 7 0 0 1-14 0v-2"/><line x1="12" x2="12" y1="19" y2="22"/></svg>`,
    send: `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="m22 2-7 20-4-9-9-4Z"/><path d="M22 2 11 13"/></svg>`,
    close: `<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>`,
    copy: `<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect width="14" height="14" x="8" y="8" rx="2" ry="2"/><path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"/></svg>`,
    check: `<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#10b981" stroke-width="2"><polyline points="20 6 9 17 4 12"/></svg>`,
    
    // Topbar Dropdown Action Icons (Matches ClickUp Menu)
    reset: `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"/><path d="M3 3v5h5"/></svg>`,
    share: `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/><line x1="8.59" y1="13.51" x2="15.42" y2="17.49"/><line x1="15.41" y1="6.51" x2="8.59" y2="10.49"/></svg>`,
    download: `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>`
  };

  // Catalog of ALL 13 Uffizio Products with theme colors and brand badges
  const UFFIZIO_PRODUCTS = [
    {
      name: 'Trakzee',
      color: '#EB4B3D',
      glow: 'rgba(235, 75, 61, 0.45)',
      icon: `<svg viewBox="0 0 24 24"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/></svg>`,
      prompt: 'Tell me about Trakzee Fleet Management software, fuel theft alerts, and driver audits'
    },
    {
      name: 'Smartbus',
      color: '#FCB62C',
      glow: 'rgba(252, 182, 44, 0.45)',
      icon: `<svg viewBox="0 0 24 24"><path d="M4 16c0 .88.39 1.67 1 2.22V20c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-1h8v1c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-1.78c.61-.55 1-1.34 1-2.22V6c0-3.5-3.58-4-8-4s-8 .5-8 4v10zm3.5 1c-.83 0-1.5-.67-1.5-1.5S6.67 14 7.5 14s1.5.67 1.5 1.5S8.33 17 7.5 17zm9 0c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zm1.5-6H6V6h12v5z"/></svg>`,
      prompt: 'Tell me about Smartbus School Bus Tracking with Parent App and RFID card attendance'
    },
    {
      name: 'Smart Waste',
      color: '#6FBD45',
      glow: 'rgba(111, 189, 69, 0.45)',
      icon: `<svg viewBox="0 0 24 24"><path d="M19 4h-3.5l-1-1h-5l-1 1H5v2h14M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12z"/></svg>`,
      prompt: 'How does Smart Waste optimize municipal bin collection routes using ultrasonic IoT sensors?'
    },
    {
      name: 'Taskeye',
      color: '#3B82F6',
      glow: 'rgba(59, 130, 246, 0.45)',
      icon: `<svg viewBox="0 0 24 24"><path d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z"/></svg>`,
      prompt: 'Explain Taskeye field employee tracking with geo-fenced selfie attendance and TA/DA expenses'
    },
    {
      name: 'Elexee',
      color: '#50AF51',
      glow: 'rgba(80, 175, 81, 0.45)',
      icon: `<svg viewBox="0 0 24 24"><path d="M7 2v11h3v9l7-12h-4l3-8z"/></svg>`,
      prompt: 'What EV battery State of Charge (SoC), health, and charging station routes does Elexee monitor?'
    },
    {
      name: 'Gridzee',
      color: '#FF4C00',
      glow: 'rgba(255, 76, 0, 0.45)',
      icon: `<svg viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/></svg>`,
      prompt: 'How does Gridzee provide indoor tracking for warehouse equipment and personnel using BLE beacons?'
    },
    {
      name: 'Petzee',
      color: '#FF5E8E',
      glow: 'rgba(255, 94, 142, 0.45)',
      icon: `<svg viewBox="0 0 24 24"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/></svg>`,
      prompt: 'Tell me about Petzee smart pet GPS collar tracking and safe zone breakout alerts'
    },
    {
      name: 'Rosterz',
      color: '#00BEDD',
      glow: 'rgba(0, 190, 221, 0.45)',
      icon: `<svg viewBox="0 0 24 24"><path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5s-3 1.34-3 3 1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z"/></svg>`,
      prompt: 'How does Rosterz automate corporate employee commute rostering and female safety escorts?'
    },
    {
      name: 'SmartTranzit',
      color: '#09CAFF',
      glow: 'rgba(9, 202, 255, 0.45)',
      icon: `<svg viewBox="0 0 24 24"><path d="M12 2c-4 0-8 .5-8 4v10c0 1.5 1.5 3 3 3l-1.5 1.5v.5h13v-.5L17 19c1.5 0 3-1.5 3-3V6c0-3.5-4-4-8-4zm-4 13c-.83 0-1.5-.67-1.5-1.5S7.17 12 8 12s1.5.67 1.5 1.5S8.83 15 8 15zm8 0c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zm2-5H6V6h12v4z"/></svg>`,
      prompt: 'Explain SmartTranzit public transportation software and Passenger Information System (PIS)'
    },
    {
      name: 'Enarzee',
      color: '#F59E0B',
      glow: 'rgba(245, 158, 11, 0.45)',
      icon: `<svg viewBox="0 0 24 24"><path d="M11 21h-1l1-7H7.5c-.88 0-.33-.75-.31-.78C8.48 10.94 10.42 7.54 13.01 3h1l-1 7h3.5c.49 0 .56.33.47.51l-.07.15C12.96 17.55 11 21 11 21z"/></svg>`,
      prompt: 'How does Enarzee monitor industrial energy sub-metering and prevent peak demand penalties?'
    },
    {
      name: 'Trakzee Mini',
      color: '#E11D48',
      glow: 'rgba(225, 29, 72, 0.45)',
      icon: `<svg viewBox="0 0 24 24"><path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm0 10.99h7c-.53 4.12-3.28 7.79-7 8.94V12H5V6.3l7-3.11v8.8z"/></svg>`,
      prompt: 'Explain Trakzee Mini personal vehicle and motorcycle tracking with engine cut-off'
    },
    {
      name: 'Trakzee GSM',
      color: '#4446E1',
      glow: 'rgba(68, 70, 225, 0.45)',
      icon: `<svg viewBox="0 0 24 24"><path d="M12 3c-4.97 0-9 4.03-9 9 0 2.12.74 4.07 1.97 5.61L4.35 19.4c-.39.39-.39 1.02 0 1.41.39.39 1.02.39 1.41 0l1.9-1.9C9.22 19.59 10.57 20 12 20c4.97 0 9-4.03 9-9s-4.03-9-9-9zm0 15c-3.31 0-6-2.69-6-6s2.69-6 6-6 6 2.69 6 6-2.69 6-6 6z"/></svg>`,
      prompt: 'How does Trakzee GSM track logistics trucks using SIM cell tower triangulation without GPS devices?'
    },
    {
      name: '1,500+ Hardware',
      color: '#8B5CF6',
      glow: 'rgba(139, 92, 246, 0.45)',
      icon: `<svg viewBox="0 0 24 24"><path d="M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96z"/></svg>`,
      prompt: 'Which Teltonika, Concox, Queclink, Suntech, and Ruptela GPS devices and sensors are supported?'
    }
  ];

  class UffiSanseChatWidget {
    constructor() {
      this.isOpen = false;
      this.isDockedFull = false;
      this.isStreaming = false;
      this.messages = [];
      this.currentMode = 'UffiSanse Max';
      this.allProducts = UFFIZIO_PRODUCTS;
      this.selectedProduct = null;
      this.init();
    }

    init() {
      this.loadHistory();
      this.injectHeaderButton();
      if (CONFIG.enableFloatingLauncher) {
        this.injectFloatingLauncher();
      }
      this.injectChatDrawer();
      this.bindEvents();
    }

    /**
     * Header Trigger Button on Uffizio Site
     */
    injectHeaderButton() {
      const target = document.querySelector(CONFIG.headerTargetSelector) || 
                     document.querySelector('.header-inner') || 
                     document.querySelector('header');

      if (!target || document.getElementById('uffizio-header-ai-btn')) return;

      const btn = document.createElement('button');
      btn.id = 'uffizio-header-ai-btn';
      btn.className = 'uffizio-header-ai-btn';
      btn.type = 'button';
      btn.innerHTML = `
        <span class="brain-sparkle-flower">${getUffiSanseSvg(18, 'header_btn')}</span>
        <span class="ai-btn-text">Ask Uffizio</span>
      `;

      btn.addEventListener('click', (e) => {
        e.preventDefault();
        this.toggleChat();
      });

      if (target.firstChild) {
        target.insertBefore(btn, target.firstChild);
      } else {
        target.appendChild(btn);
      }
    }

    /**
     * Floating Launcher (Bottom-Right Circle)
     */
    injectFloatingLauncher() {
      if (document.getElementById('uffizio-ai-launcher')) return;

      const launcher = document.createElement('div');
      launcher.id = 'uffizio-ai-launcher';
      launcher.className = 'uffizio-ai-launcher';
      launcher.setAttribute('title', 'Open UffiSanse');
      launcher.innerHTML = `
        <div class="cu-launcher-logo-glow"></div>
        ${getUffiSanseSvg(28, 'launcher')}
      `;
      launcher.addEventListener('click', () => this.toggleChat());
      document.body.appendChild(launcher);
    }

    /**
     * ClickUp Style Drawer / Window for UffiSanse
     */
    injectChatDrawer() {
      if (document.getElementById('uffizio-ai-window')) return;

      // Overlay
      const overlay = document.createElement('div');
      overlay.id = 'uffizio-ai-modal-overlay';
      overlay.className = 'uffizio-ai-modal-overlay';
      overlay.addEventListener('click', () => this.closeChat());
      document.body.appendChild(overlay);

      // Main Window
      const win = document.createElement('div');
      win.id = 'uffizio-ai-window';
      win.className = 'uffizio-ai-window';
      win.innerHTML = `
        <!-- TOPBAR: New Chat ⌵ with Dropdown and right icons -->
        <div class="cu-topbar">
          <div class="cu-newchat-wrapper">
            <button class="cu-newchat-pill" id="cu-newchat-pill" type="button" aria-haspopup="true" aria-expanded="false">
              <span>New Chat</span>
              ${ICONS.chevronDown}
            </button>
            <div class="cu-newchat-dropdown" id="cu-newchat-dropdown">
              <button class="cu-dropdown-item" id="cu-action-new-conv" type="button">
                <span class="cu-dropdown-icon cu-icon-reset">${ICONS.reset}</span>
                <span class="cu-dropdown-text">New Conversation</span>
              </button>
              <button class="cu-dropdown-item" id="cu-action-share-summary" type="button">
                <span class="cu-dropdown-icon cu-icon-share">${ICONS.share}</span>
                <span class="cu-dropdown-text">Share Summary</span>
              </button>
              <button class="cu-dropdown-item" id="cu-action-download-txt" type="button">
                <span class="cu-dropdown-icon cu-icon-download">${ICONS.download}</span>
                <span class="cu-dropdown-text">Download Transcript<br><span class="cu-dropdown-subtext">(.txt)</span></span>
              </button>
            </div>
          </div>
          <div class="cu-topbar-actions">
            <button class="cu-top-btn" id="cu-btn-close" title="Close">${ICONS.cancel}</button>
          </div>
        </div>

        <!-- SCROLLABLE CHAT BODY -->
        <div class="cu-chat-scrollable" id="cu-chat-scrollable">
          <!-- Dynamically swapped between Hero Idle State and Messages Thread -->
        </div>

        <!-- ACTION PILLS ROW: Only Find Button Kept -->
        <div class="cu-action-pills-row" id="cu-action-pills-row">
          <button class="cu-action-pill" data-prompt="Find best GPS fleet software for trucks and logistics">
            ${ICONS.search}
            <span>Find</span>
          </button>
        </div>

        <!-- INPUT BOX (Exact ClickUp Design) -->
        <div class="cu-chat-input-container">
          <div class="cu-input-box">
            
            <!-- Top Strip: Selected Product Context (Hidden when no product selected) -->
            <div class="cu-input-top-strip ${this.selectedProduct ? 'has-product' : ''}" id="cu-input-strip">
              ${this.renderProductStripHtml()}
            </div>

            <!-- Textarea -->
            <textarea 
              id="cu-textarea" 
              class="cu-textarea" 
              placeholder="Ask, create, search, @ to mention" 
              rows="1"
            ></textarea>

            <!-- Bottom Toolbar inside input (Mic & Send action buttons) -->
            <div class="cu-input-bottom-bar">
              <div class="cu-bottom-right">
                <button class="cu-mic-btn" id="cu-mic-btn" title="Voice Input">${ICONS.mic}</button>
                <button class="cu-send-action-btn" id="cu-send-btn" title="Send" disabled>${ICONS.send}</button>
              </div>
            </div>

          </div>
        </div>

        <!-- Notification Toast -->
        <div class="cu-toast-notification" id="cu-toast-notification"></div>
      `;

      document.body.appendChild(win);
      this.renderBody();
      this.updateProductStrip();
    }

    bindEvents() {
      const closeBtn = document.getElementById('cu-btn-close');
      const newChatBtn = document.getElementById('cu-newchat-pill');
      const actionNewConv = document.getElementById('cu-action-new-conv');
      const actionShareSummary = document.getElementById('cu-action-share-summary');
      const actionDownloadTxt = document.getElementById('cu-action-download-txt');
      const textarea = document.getElementById('cu-textarea');
      const sendBtn = document.getElementById('cu-send-btn');
      const micBtn = document.getElementById('cu-mic-btn');

      closeBtn?.addEventListener('click', () => this.closeChat());

      // Dropdown toggle on New Chat button
      newChatBtn?.addEventListener('click', (e) => {
        e.stopPropagation();
        this.toggleNewChatDropdown();
      });

      // Dropdown menu actions
      actionNewConv?.addEventListener('click', (e) => {
        e.stopPropagation();
        this.closeNewChatDropdown();
        this.startNewConversation();
      });

      actionShareSummary?.addEventListener('click', (e) => {
        e.stopPropagation();
        this.closeNewChatDropdown();
        this.shareSummary();
      });

      actionDownloadTxt?.addEventListener('click', (e) => {
        e.stopPropagation();
        this.closeNewChatDropdown();
        this.downloadTranscript();
      });

      // Close dropdown when clicking outside
      document.addEventListener('click', (e) => {
        const wrapper = document.querySelector('.cu-newchat-wrapper');
        if (wrapper && !wrapper.contains(e.target)) {
          this.closeNewChatDropdown();
        }
      });

      // Close dropdown on Escape key
      document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
          this.closeNewChatDropdown();
        }
      });

      // Bind input strip close / clear buttons
      this.bindStripEvents();

      // Auto-resize textarea & enable send
      textarea?.addEventListener('input', () => {
        textarea.style.height = 'auto';
        textarea.style.height = Math.min(textarea.scrollHeight, 120) + 'px';
        const hasText = textarea.value.trim().length > 0;
        sendBtn.disabled = !hasText || this.isStreaming;
      });

      // Submit on Enter
      textarea?.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' && !e.shiftKey) {
          e.preventDefault();
          this.submitQuery();
        }
      });

      sendBtn?.addEventListener('click', () => this.submitQuery());

      // Action Pills click
      document.querySelectorAll('.cu-action-pill').forEach((pill) => {
        pill.addEventListener('click', () => {
          const prompt = pill.getAttribute('data-prompt');
          if (prompt) this.sendQuery(prompt);
        });
      });

      // Speech Recognition
      if (CONFIG.enableSpeechInput && ('webkitSpeechRecognition' in window || 'SpeechRecognition' in window)) {
        const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
        const recognition = new SpeechRecognition();
        recognition.continuous = false;
        recognition.lang = 'en-US';

        let isListening = false;
        micBtn?.addEventListener('click', () => {
          if (isListening) {
            recognition.stop();
            return;
          }
          try {
            recognition.start();
            micBtn.style.color = '#ef4444';
            isListening = true;
          } catch (err) {
            console.error(err);
          }
        });

        recognition.onresult = (e) => {
          const transcript = e.results[0][0].transcript;
          if (transcript) {
            textarea.value = transcript;
            textarea.dispatchEvent(new Event('input'));
            this.submitQuery();
          }
        };

        recognition.onend = () => {
          isListening = false;
          if (micBtn) micBtn.style.color = '';
        };
      } else if (micBtn) {
        micBtn.style.display = 'none';
      }
    }

    renderBody() {
      const scrollable = document.getElementById('cu-chat-scrollable');
      const actionPills = document.getElementById('cu-action-pills-row');
      if (!scrollable) return;

      if (this.messages.length === 0) {
        if (actionPills) actionPills.style.display = 'flex';

        const renderPills = (arr) => {
          return arr
            .map(
              (p) => `
            <div class="cu-prod-pill ${this.selectedProduct && this.selectedProduct.name === p.name ? 'active-selected' : ''}" 
                 style="--prod-color: ${p.color}; --prod-glow: ${p.glow};" 
                 data-prod-name="${p.name}" 
                 data-prompt="${p.prompt}">
              <span class="cu-prod-badge-icon">${p.icon}</span>
              <span class="cu-prod-name">${p.name}</span>
            </div>
          `
            )
            .join('');
        };

        // Render pills HTML from full product catalog
        const pillsHtml = renderPills(this.allProducts);

        // Render EXACT ClickUp Brain Style Hero (With White Icon, demo.mp4 glow, and NO UffiSanse title)
        scrollable.innerHTML = `
          <div class="cu-hero-center">
            ${ICONS.flower}

            <div class="cu-hero-prompt-block">
              <h3 class="cu-hero-question">How can Uffizio AI assist you?</h3>
            </div>

            <!-- Single Line Auto-Scrolling Floating Products Marquee (Strictly Right to Left, No Clipping) -->
            <div class="cu-products-auto-scroll-section" title="Hover to explore products • Click to select & discuss">
              <div class="cu-marquee-row">
                <div class="cu-marquee-group">
                  ${pillsHtml}
                </div>
                <div class="cu-marquee-group" aria-hidden="true">
                  ${pillsHtml}
                </div>
              </div>
            </div>
          </div>
        `;

        // Bind clicks on floating product pills: selects product into the red highlighted input strip
        scrollable.querySelectorAll('.cu-prod-pill').forEach((pill) => {
          pill.addEventListener('click', (e) => {
            e.stopPropagation();
            const prodName = pill.getAttribute('data-prod-name');
            const prompt = pill.getAttribute('data-prompt');
            const prod = this.allProducts.find((p) => p.name === prodName);
            if (!prod) return;

            // If already selected, clicking it again submits query immediately
            if (this.selectedProduct && this.selectedProduct.name === prod.name) {
              if (prompt) this.sendQuery(prompt);
              return;
            }

            // Select this product into the input top strip
            this.selectProduct(prod);
          });
        });
      } else {
        // Active Messages View
        if (actionPills) actionPills.style.display = 'none';

        scrollable.innerHTML = `
          <div class="cu-messages-thread" id="cu-messages-thread"></div>
        `;
        const thread = document.getElementById('cu-messages-thread');
        this.messages.forEach((msg, idx) => {
          thread.appendChild(this.createMessageElement(msg, idx));
        });
        scrollable.scrollTop = scrollable.scrollHeight;
      }
    }

    createMessageElement(msg, index) {
      const row = document.createElement('div');
      row.className = `cu-msg-row ${msg.role}`;

      if (msg.role === 'ai') {
        const idSuffix = (index !== undefined ? index : Date.now()) + '_' + Math.floor(Math.random() * 100);
        row.innerHTML = `
          <div class="cu-msg-avatar">${getUffiSanseSvg(16, 'msg_' + idSuffix)}</div>
          <div class="cu-msg-content">
            <div class="cu-msg-bubble">${this.formatMarkdown(msg.text)}</div>
            ${this.renderProductCardsHtml(msg.productCards)}
            ${this.renderFollowupsHtml(msg.suggestions)}
          </div>
        `;

        // Bind followup chips
        row.querySelectorAll('.cu-followup-chip').forEach((chip) => {
          chip.addEventListener('click', () => {
            this.sendQuery(chip.innerText);
          });
        });
      } else {
        row.innerHTML = `
          <div class="cu-msg-content">
            <div class="cu-msg-bubble">${this.escapeHtml(msg.text)}</div>
          </div>
        `;
      }

      return row;
    }

    renderProductCardsHtml(cards) {
      if (!cards || !cards.length) return '';
      return cards
        .map(
          (c) => `
        <div class="cu-product-card">
          <div class="cu-product-card-top">
            <span class="cu-prod-title">${c.name}</span>
            <span class="cu-prod-badge">${c.category}</span>
          </div>
          <div class="cu-prod-desc">${c.tagline}</div>
          <div class="cu-prod-links">
            <a href="${c.url}" target="_blank" class="cu-btn-sm primary">Explore ${c.name} &rarr;</a>
            <a href="https://uffizio.com/contact-us" target="_blank" class="cu-btn-sm outline">Book Live Demo</a>
          </div>
        </div>
      `
        )
        .join('');
    }

    renderFollowupsHtml(suggestions) {
      if (!suggestions || !suggestions.length) return '';
      return `
        <div class="cu-followups">
          ${suggestions.map((s) => `<button class="cu-followup-chip">${s}</button>`).join('')}
        </div>
      `;
    }

    submitQuery() {
      const textarea = document.getElementById('cu-textarea');
      if (!textarea) return;
      const query = textarea.value.trim();
      if (!query || this.isStreaming) return;

      textarea.value = '';
      textarea.style.height = 'auto';
      document.getElementById('cu-send-btn').disabled = true;

      this.sendQuery(query);
    }

    sendQuery(query) {
      this.messages.push({
        role: 'user',
        text: query,
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      });

      this.renderBody();
      this.showTyping();

      setTimeout(async () => {
        let aiResult;
        if (CONFIG.geminiApiKey) {
          aiResult = await this.fetchGemini(query);
        } else if (typeof generateUffizioAIResponse === 'function') {
          aiResult = generateUffizioAIResponse(query);
        } else {
          aiResult = {
            text: `Welcome to **UffiSanse**! We provide telematics and IoT solutions including [Trakzee](https://uffizio-telematics.com/fleet-management-software/) (Fleet Management), [Smartbus](https://uffizio-commute.com/school-bus-monitoring-software) (School Bus Tracking), and [Taskeye](https://uffizio-iotech.com/field-employee-tracking-software).`,
            suggestions: ['Book live demo', 'Ask about Trakzee'],
            productCards: []
          };
        }

        this.removeTyping();
        this.streamAI(aiResult);
      }, 450);
    }

    showTyping() {
      const thread = document.getElementById('cu-messages-thread');
      if (!thread) return;

      const typing = document.createElement('div');
      typing.id = 'cu-typing';
      typing.className = 'cu-msg-row ai';
      typing.innerHTML = `
        <div class="cu-msg-avatar">${getUffiSanseSvg(16, 'typing')}</div>
        <div class="cu-msg-content">
          <div class="cu-msg-bubble cu-typing">
            <span class="cu-typing-dot"></span>
            <span class="cu-typing-dot"></span>
            <span class="cu-typing-dot"></span>
          </div>
        </div>
      `;
      thread.appendChild(typing);
      const scrollable = document.getElementById('cu-chat-scrollable');
      if (scrollable) scrollable.scrollTop = scrollable.scrollHeight;
    }

    removeTyping() {
      const typing = document.getElementById('cu-typing');
      if (typing) typing.remove();
    }

    streamAI(aiResult) {
      this.isStreaming = true;
      const msgObj = {
        role: 'ai',
        text: '',
        suggestions: aiResult.suggestions || [],
        productCards: aiResult.productCards || [],
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      };

      this.messages.push(msgObj);
      const thread = document.getElementById('cu-messages-thread');
      const scrollable = document.getElementById('cu-chat-scrollable');

      const fullText = aiResult.text;
      const words = fullText.split(' ');
      let curWord = 0;

      const rowElem = this.createMessageElement(msgObj, this.messages.length - 1);
      thread.appendChild(rowElem);
      const bubble = rowElem.querySelector('.cu-msg-bubble');

      const timer = setInterval(() => {
        curWord += 2;
        if (curWord >= words.length) {
          clearInterval(timer);
          this.isStreaming = false;
          msgObj.text = fullText;
          bubble.innerHTML = this.formatMarkdown(fullText);
          if (scrollable) scrollable.scrollTop = scrollable.scrollHeight;
          this.saveHistory();
        } else {
          const partial = words.slice(0, curWord).join(' ');
          msgObj.text = partial;
          bubble.innerHTML = this.formatMarkdown(partial);
          if (scrollable) scrollable.scrollTop = scrollable.scrollHeight;
        }
      }, 35);
    }

    async fetchGemini(query) {
      try {
        const res = await fetch(
          `https://generativelanguage.googleapis.com/v1beta/models/${CONFIG.geminiModel}:generateContent?key=${CONFIG.geminiApiKey}`,
          {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              contents: [{ role: 'user', parts: [{ text: `You are UffiSanse, the AI telematics assistant for Uffizio. Answer: ${query}` }] }]
            })
          }
        );
        const data = await res.json();
        const text = data?.candidates?.[0]?.content?.parts?.[0]?.text;
        if (text) {
          return { text, suggestions: ['Book a live demo', 'Ask about fuel monitoring'], productCards: [] };
        }
      } catch (e) {}

      return typeof generateUffizioAIResponse === 'function' ? generateUffizioAIResponse(query) : { text: 'How can I help?', suggestions: [], productCards: [] };
    }

    formatMarkdown(text) {
      if (!text) return '';
      let html = this.escapeHtml(text);
      html = html.replace(/^### (.*$)/gim, '<h3>$1</h3>');
      html = html.replace(/\*\*(.*?)\*\*/gim, '<strong>$1</strong>');
      html = html.replace(/\[(.*?)\]\((.*?)\)/gim, '<a href="$2" target="_blank" rel="noopener">$1</a>');
      html = html.replace(/^\- (.*$)/gim, '<li>$1</li>');
      html = html.replace(/(<li>.*<\/li>)/s, '<ul>$1</ul>');
      html = html.replace(/\n\n/g, '</p><p>');
      html = html.replace(/\n/g, '<br>');
      return `<p>${html}</p>`;
    }

    escapeHtml(str) {
      return str.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
    }

    openChat() {
      this.isOpen = true;
      const win = document.getElementById('uffizio-ai-window');
      const overlay = document.getElementById('uffizio-ai-modal-overlay');
      if (win) win.classList.add('open');
      if (overlay) overlay.classList.add('open');
      document.body.classList.add('uffizio-ai-sidebar-open');
      setTimeout(() => document.getElementById('cu-textarea')?.focus(), 250);
    }

    closeChat() {
      this.isOpen = false;
      this.closeNewChatDropdown();
      const win = document.getElementById('uffizio-ai-window');
      const overlay = document.getElementById('uffizio-ai-modal-overlay');
      if (win) win.classList.remove('open');
      if (overlay) overlay.classList.remove('open');
      document.body.classList.remove('uffizio-ai-sidebar-open');
    }

    toggleChat() {
      if (this.isOpen) {
        this.closeChat();
      } else {
        this.openChat();
      }
    }

    /**
     * Dropdown menu open/close handler
     */
    toggleNewChatDropdown() {
      const dropdown = document.getElementById('cu-newchat-dropdown');
      const pill = document.getElementById('cu-newchat-pill');
      if (!dropdown || !pill) return;

      const isOpening = !dropdown.classList.contains('open');
      if (isOpening) {
        dropdown.classList.add('open');
        pill.classList.add('open');
        pill.setAttribute('aria-expanded', 'true');
      } else {
        this.closeNewChatDropdown();
      }
    }

    closeNewChatDropdown() {
      const dropdown = document.getElementById('cu-newchat-dropdown');
      const pill = document.getElementById('cu-newchat-pill');
      if (dropdown) dropdown.classList.remove('open');
      if (pill) {
        pill.classList.remove('open');
        pill.setAttribute('aria-expanded', 'false');
      }
    }

    /**
     * Action 1: Start New Conversation
     */
    startNewConversation() {
      this.clearChat();
      this.showToast('Started new conversation', ICONS.reset);
    }

    /**
     * Action 2: Share Summary
     */
    async shareSummary() {
      if (this.messages.length === 0) {
        this.showToast('No conversation to share yet.', ICONS.share);
        return;
      }

      const totalExchanges = this.messages.filter((m) => m.role === 'user').length;
      const userQuestions = this.messages
        .filter((m) => m.role === 'user')
        .map((m, i) => `${i + 1}. ${m.text}`)
        .join('\n');

      const summaryText =
        `Uffizio AI Conversation Summary\n` +
        `Date: ${new Date().toLocaleDateString()} ${new Date().toLocaleTimeString()}\n` +
        `Engine: ${this.currentMode}\n` +
        `User Inquiries (${totalExchanges}):\n${userQuestions}\n\n` +
        `Explore Fleet & Telematics Solutions: https://uffizio.com`;

      try {
        if (navigator.clipboard && navigator.clipboard.writeText) {
          await navigator.clipboard.writeText(summaryText);
        } else {
          const temp = document.createElement('textarea');
          temp.value = summaryText;
          document.body.appendChild(temp);
          temp.select();
          document.execCommand('copy');
          document.body.removeChild(temp);
        }
        this.showToast('Summary copied to clipboard!', ICONS.check);
      } catch (err) {
        this.showToast('Summary copied to clipboard!', ICONS.check);
      }
    }

    /**
     * Action 3: Download Transcript (.txt)
     */
    downloadTranscript() {
      if (this.messages.length === 0) {
        this.showToast('No conversation to download yet.', ICONS.download);
        return;
      }

      const now = new Date();
      const dateStr = now.toLocaleDateString();
      const timeStr = now.toLocaleTimeString();
      const timestamp = now.toISOString().replace(/[:.]/g, '-');

      let transcript = `================================================================================\n`;
      transcript += `UFFIZIO AI - CONVERSATION TRANSCRIPT\n`;
      transcript += `Generated: ${dateStr} at ${timeStr}\n`;
      transcript += `Assistant Engine: ${this.currentMode} (Telematics & Fleet Intelligence)\n`;
      transcript += `Total Messages: ${this.messages.length}\n`;
      transcript += `Official Portal: https://uffizio.com\n`;
      transcript += `================================================================================\n\n`;

      this.messages.forEach((msg) => {
        const sender = msg.role === 'user' ? 'USER' : 'UFFIZIO AI';
        const msgTime = msg.time || timeStr;
        transcript += `[${msgTime}] ${sender}:\n`;
        transcript += `${msg.text}\n`;
        transcript += `--------------------------------------------------------------------------------\n\n`;
      });

      transcript += `================================================================================\n`;
      transcript += `End of Transcript. Copyright © ${now.getFullYear()} Uffizio. All rights reserved.\n`;
      transcript += `================================================================================\n`;

      try {
        const blob = new Blob([transcript], { type: 'text/plain;charset=utf-8' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = `uffizio-ai-transcript-${timestamp}.txt`;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        setTimeout(() => URL.revokeObjectURL(url), 2000);

        this.showToast('Transcript downloaded (.txt)!', ICONS.download);
      } catch (e) {
        console.error('Download error:', e);
        this.showToast('Failed to download transcript.', ICONS.close);
      }
    }

    /**
     * Visual Toast Notification
     */
    showToast(msg, iconSvg = '') {
      const toast = document.getElementById('cu-toast-notification');
      if (!toast) return;

      if (this._toastTimer) {
        clearTimeout(this._toastTimer);
      }

      toast.innerHTML = `${iconSvg ? `<span class="cu-toast-icon">${iconSvg}</span>` : ''}<span>${this.escapeHtml(msg)}</span>`;
      toast.classList.add('show');

      this._toastTimer = setTimeout(() => {
        toast.classList.remove('show');
      }, 2600);
    }

    /**
     * Render HTML for the input top strip:
     * When product selected: displays product logo, name, status and clear button.
     * When no product selected: returns empty string (no strip).
     */
    renderProductStripHtml() {
      if (!this.selectedProduct) return '';
      const p = this.selectedProduct;
      return `
        <div class="cu-strip-selected-prod" style="--prod-color: ${p.color}; --prod-glow: ${p.glow};">
          <span class="cu-strip-prod-badge" style="background: ${p.color}; box-shadow: 0 0 10px ${p.glow};">
            ${p.icon}
          </span>
          <span class="cu-strip-prod-label">Discussing:</span>
          <span class="cu-strip-prod-name" style="color: ${p.color};">${p.name}</span>
          <span class="cu-strip-prod-status">Active Context</span>
        </div>
        <div class="cu-strip-right">
          <button class="cu-strip-clear-btn" id="cu-strip-clear-prod" title="Clear ${p.name} context" type="button">
            ${ICONS.close}
          </button>
        </div>
      `;
    }

    /**
     * Updates the input strip DOM and rebinds events
     */
    updateProductStrip() {
      const strip = document.getElementById('cu-input-strip');
      if (!strip) return;

      if (this.selectedProduct) {
        strip.classList.add('has-product');
      } else {
        strip.classList.remove('has-product');
      }

      strip.innerHTML = this.renderProductStripHtml();
      this.bindStripEvents();
    }

    /**
     * Bind click events on strip buttons
     */
    bindStripEvents() {
      const clearProd = document.getElementById('cu-strip-clear-prod');

      clearProd?.addEventListener('click', (e) => {
        e.stopPropagation();
        this.clearSelectedProduct();
      });
    }

    /**
     * Select a product from the marquee logo or cards:
     * Puts product logo and name into the input top strip.
     */
    selectProduct(productOrName) {
      const prod = typeof productOrName === 'string'
        ? this.allProducts.find((p) => p.name.toLowerCase() === productOrName.toLowerCase())
        : productOrName;
      if (!prod) return;

      this.selectedProduct = prod;
      this.updateProductStrip();

      // Highlight active pill in marquee
      document.querySelectorAll('.cu-prod-pill').forEach((pill) => {
        if (pill.getAttribute('data-prod-name') === prod.name) {
          pill.classList.add('active-selected');
        } else {
          pill.classList.remove('active-selected');
        }
      });

      // Update textarea placeholder & suggested prompt
      const textarea = document.getElementById('cu-textarea');
      const sendBtn = document.getElementById('cu-send-btn');
      if (textarea) {
        textarea.placeholder = `Ask anything about ${prod.name}...`;
        textarea.value = prod.prompt;
        textarea.style.height = 'auto';
        textarea.style.height = Math.min(textarea.scrollHeight, 120) + 'px';
        if (sendBtn) sendBtn.disabled = false;
        textarea.focus();
        textarea.select();
      }

      this.showToast(`Selected ${prod.name}`, prod.icon);
      this.saveHistory();
    }

    /**
     * Clear selected product context
     */
    clearSelectedProduct() {
      const prevName = this.selectedProduct ? this.selectedProduct.name : '';
      this.selectedProduct = null;
      this.updateProductStrip();

      // Remove active-selected highlight from marquee
      document.querySelectorAll('.cu-prod-pill').forEach((pill) => {
        pill.classList.remove('active-selected');
      });

      // Reset textarea placeholder
      const textarea = document.getElementById('cu-textarea');
      if (textarea) {
        textarea.placeholder = 'Ask, create, search, @ to mention';
      }

      if (prevName) {
        this.showToast(`Cleared ${prevName} context`, ICONS.check);
      }
      this.saveHistory();
    }

    clearChat() {
      this.messages = [];
      this.clearSelectedProduct();
      this.saveHistory();
      this.renderBody();
      this.updateProductStrip();
    }

    saveHistory() {
      try {
        sessionStorage.setItem(CONFIG.storageKey, JSON.stringify(this.messages));
        if (this.selectedProduct) {
          sessionStorage.setItem('uffizio_ai_selected_prod', this.selectedProduct.name);
        } else {
          sessionStorage.removeItem('uffizio_ai_selected_prod');
        }
      } catch (e) {}
    }

    loadHistory() {
      try {
        const saved = sessionStorage.getItem(CONFIG.storageKey);
        if (saved) this.messages = JSON.parse(saved);
        const savedProd = sessionStorage.getItem('uffizio_ai_selected_prod');
        if (savedProd) {
          this.selectedProduct = this.allProducts.find((p) => p.name === savedProd) || null;
        }
      } catch (e) {}
    }
  }

  // Initialize
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
      window.uffizioAI = new UffiSanseChatWidget();
    });
  } else {
    window.uffizioAI = new UffiSanseChatWidget();
  }
})();

# Uffizio Website AI Chat Integration Guide
## ClickUp-Style Header AI Chat Assistant for Uffizio.com

આ ગાઈડમાં Uffizio.com વેબસાઈટ પર **Header માં AI Chat Button** ઉમેરવા અને **ClickUp Brain જેવું Functional AI Chat Modal** સેટ કરવાની સંપૂર્ણ વિગતો છે.

---

## 🌟 Features Included

1. **Header AI Button (ClickUp Style)**:
   - Sparkling AI icon animation (`✨ Uffizio AI`)
   - "Ask AI" badge with glowing effect
   - Seamlessly placed next to the `Contact Us` button in the header
   - Fully responsive for Desktop, Tablet, and Mobile

2. **ClickUp-Style Floating AI Drawer / Modal**:
   - Modern Glassmorphism dark theme matching Uffizio brand colors (`#000A1E`, `#0077FF`, `#00BEDD`)
   - Welcome card with quick question chips:
     - 🚛 *Trakzee: Advanced Fleet Management & Fuel Theft*
     - 🚌 *Smartbus: School Bus Tracking & Parent App*
     - 🗑️ *Smart Waste: Route Optimization & Bin Fill*
     - ⚡ *Elexee: EV Fleet Battery SoC & Health*
     - 📱 *Taskeye: Field Staff Attendance & Expense*
     - 🛰️ *1500+ Compatible GPS Trackers & Sensors*
     - 📅 *Book a 1-on-1 Live Demo*

3. **Intelligent Response Engine**:
   - **Zero-Config Instant Engine**: Pre-trained on all 12+ Uffizio software products, 1500+ GPS hardware devices (Teltonika, Concox, Queclink, Ruptela, etc.), and company credentials.
   - **Streaming Typewriter Effect**: Responses stream in real-time word-by-word with markdown formatting, product cards, and direct CTAs.
   - **Voice Input**: Speech-to-text enabled.
   - **Optional Gemini API**: Support to connect Google Gemini 1.5/2.0 API key for infinite generative conversational depth.

---

## 🚀 Integration Methods for WordPress (Uffizio.com)

Uffizio.com WordPress અને કસ્ટમ `uffizio` થીમ પર આધારિત છે. આ વિજેટને તમે નીચે મુજબ 3 માંથી કોઈપણ સરળ પદ્ધતિથી લગાવી શકો છો:

---

### પદ્ધતિ ૧: WPCode અથવા "Insert Headers and Footers" પ્લગઈન દ્વારા (સૌથી સરળ - No Theme Edit)

1. WordPress Admin Dashboard માં જાઓ: `wp-admin` &rarr; **Code Snippets** &rarr; **Header & Footer** (અથવા WPCode).
2. **Header** સેક્શનમાં CSS લિંક મૂકો:
```html
<!-- Uffizio AI Chat Stylesheet -->
<link rel="stylesheet" href="https://your-domain.com/wp-content/uploads/uffizio-ai-chat.css">
```
*(અથવા તમે `uffizio-ai-chat.css` ના કન્ટેન્ટને `<style> ... </style>` માં મૂકી શકો છો).*

3. **Footer** સેક્શનમાં નીચેનો સ્ક્રિપ્ટ કોડ પેસ્ટ કરો:
```html
<!-- Uffizio Knowledge Engine -->
<script src="https://your-domain.com/wp-content/uploads/uffizio-knowledge.js"></script>

<!-- Uffizio AI Chat Widget -->
<script src="https://your-domain.com/wp-content/uploads/uffizio-ai-chat.js"></script>

<script>
  window.UFFIZIO_AI_CONFIG = {
    headerTargetSelector: '.header-contact', // Header container target
    headerButtonText: 'UffiSanse',
    enableFloatingLauncher: true,             // Bottom-right floating pill
    enableSpeechInput: true,                  // Voice microphone input
    geminiApiKey: ''                          // Optional Google Gemini API Key
  };
</script>
```
4. **Save Changes** પર ક્લિક કરો.

---

### પદ્ધતિ ૨: WordPress Theme ના `functions.php` દ્વારા (Enqueued Script)

જો તમે ચાઈલ્ડ થીમ (`wp-content/themes/uffizio/functions.php`) માં કોડ ઉમેરવા માંગો છો:

```php
/**
 * Enqueue Uffizio AI Chat Widget in Header & Footer
 */
function uffizio_enqueue_ai_chat_widget() {
    // CSS
    wp_enqueue_style(
        'uffizio-ai-chat-css', 
        get_stylesheet_directory_uri() . '/assets/css/uffizio-ai-chat.css', 
        array(), 
        '1.0.0'
    );

    // Knowledge Engine JS
    wp_enqueue_script(
        'uffizio-knowledge-js', 
        get_stylesheet_directory_uri() . '/assets/js/uffizio-knowledge.js', 
        array(), 
        '1.0.0', 
        true
    );

    // AI Chat Controller JS
    wp_enqueue_script(
        'uffizio-ai-chat-js', 
        get_stylesheet_directory_uri() . '/assets/js/uffizio-ai-chat.js', 
        array('uffizio-knowledge-js'), 
        '1.0.0', 
        true
    );
}
add_action('wp_enqueue_scripts', 'uffizio_enqueue_ai_chat_widget');
```

અને `header.php` માં `.header-contact` ડિવિઝનમાં સીધું બટન મૂકવા માટે:
```html
<div class="header-contact">
    <!-- ClickUp-Style AI Chat Button -->
    <button type="button" class="uffizio-header-ai-btn" onclick="window.uffizioAI.toggleChat()">
        <span class="ai-sparkle-icon">✨</span>
        <span class="ai-btn-text">UffiSanse</span>
        <span class="ai-badge">Ask AI</span>
    </button>

    <a href="https://uffizio.com/contact-us" class="contact-btn uffizio-arrow-button">Contact Us</a>
</div>
```

---

### પદ્ધતિ ૩: Google Tag Manager (GTM) દ્વારા (Zero Code Deployment)

જો તમારી વેબસાઈટ પર Google Tag Manager સેટઅપ કરેલું હોય:
1. GTM માં **Tags** &rarr; **New** &rarr; **Custom HTML Tag** પસંદ કરો.
2. `uffizio-ai-chat.css`, `uffizio-knowledge.js`, અને `uffizio-ai-chat.js` નો કોડ સિંગલ ટૅગમાં પેસ્ટ કરો.
3. Trigger: **All Pages - Page View** સિલેક્ટ કરીને **Publish** કરી દો.
4. આનાથી વેબસાઈટના કોડ કે થીમને અડ્યા વગર AI Chat સીધું લાઈવ થઈ જશે!

---

## 📁 ફાઈલ સ્ટ્રક્ચર (Workspace Files)

- **`index.html`**: સંપૂર્ણ લાઈવ વર્કિંગ પ્રીવ્યૂ (Live Prototype). તમે આ ફાઈલને બ્રાઉઝરમાં ઓપન કરીને ટેસ્ટ કરી શકો છો.
- **`uffizio-ai-chat.css`**: ClickUp Brain ની જેમ હાઈ-એન્ડ પ્રીમિયમ ગ્લાસમોર્ફિઝમ CSS.
- **`uffizio-ai-chat.js`**: AI Chat મોડલ કંટ્રોલર (હેડર ઇન્જેક્શન, સ્ટ્રીમિંગ ટાઈપિંગ, સ્પીચ ઇનપુટ, ક્લિપબોર્ડ).
- **`uffizio-knowledge.js`**: Uffizio ના તમામ પ્રોડક્ટ્સ (Trakzee, Smartbus, Taskeye, Elexee, Gridzee, 1500+ Devices) નું ઈન્ટેલિજન્ટ નોલેજ બેઝ.

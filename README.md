# Winner-TAM---Bootstrap5-admin-panel
Open source bootstrap admin panel templates 

#✅ 1.  Admin Panel Structure (HTML + Bootstrap )
Winner - Bootstrap5-admin-panel/
│
├── index.html                  # Main dashboard page
├── analytics.html              # Example of another page (linked from sidebar)
│
├── assets/                     # All static resources
│   ├── css/                    # Stylesheets
│   │   ├── variables.css       # CSS custom properties (themes, colors, spacing)
│   │   ├── base.css            # Reset, typography, scrollbar, body defaults
│   │   ├── layout.css          # Topbar, Sidebar, Main-wrap, Footer structure
│   │   ├── components.css      # Cards, Tables, Badges, Progress Bars, Buttons
│   │   ├── offcanvas.css       # Offcanvas settings panel specific styles
│   │   ├── dropdowns.css       # Topbar dropdown menus specific styles
│   │   ├── animations.css      # Keyframes, transitions, utility classes
│   │   └── responsive.css      # All @media queries (mobile, tablet breakpoints)
│   │
│   ├── js/                     # JavaScript files
│   │   ├── main.js             # Initialization, DOM refs, and Event Delegation dispatcher
│   │   ├── theme.js            # Dark mode, accent colors, localStorage logic
│   │   ├── ui.js               # Sidebar toggle, Offcanvas, Dropdown open/close logic
│   │   ├── fullscreen.js       # Fullscreen API logic
│   │   └── charts.js           # Bar chart rendering, Progress bar animations
│   │
│   ├── img/                    # Images and icons
│   │   ├── favicon.ico
│   │   ├── avatars/            # User profile pictures (e.g., john.jpg)
│   │   └── backgrounds/        # Background patterns or banner images
│   │
│   └── vendor/                 # (Optional) Local third-party libraries
│       ├── bootstrap/          # If not using CDN
│       ├── font-awesome/       # If not using CDN
│       └── fonts/              # Local Outfit & Inter font files
│
└── pages/                      # (Optional) Sub-pages directory
    ├── users.html              # Users table page
    ├── settings.html           # Settings page
    └── components.html         # UI Components page

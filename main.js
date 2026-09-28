/**
 * Stats Innotech - Master Interactive JavaScript
 * Handles navigation, course catalog modals, internship applications,
 * contact forms, toasts, and responsive menus.
 */

// Course syllabus repository for rich modal interaction
const COURSES_DATA = {
  java: {
    title: "Java Full Stack Development",
    badge: "Bestseller",
    duration: "12 Weeks (Live + Labs)",
    level: "Beginner to Advanced",
    summary: "Comprehensive mastery of Core Java, Object-Oriented Design, Collections, Spring Boot, Microservices, Hibernate ORM, and REST APIs, paired with frontend integration.",
    prerequisites: "Basic programming fundamentals (any language) or logical aptitude.",
    modules: [
      "Core Java & JVM Architecture, OOP Principles, Exception Handling",
      "Java Collections Framework, Generics & Multi-Threading",
      "Relational Databases, SQL & JDBC Integration",
      "Spring Framework Core, Dependency Injection & Spring Boot",
      "RESTful API Development, Spring Data JPA & Hibernate ORM",
      "Full Stack Integration, Spring Security & Deployment on Cloud"
    ],
    project: "Production-ready Multi-Tier E-Commerce Backend & Management API",
    certification: "Stats Innotech Certified Java Full Stack Engineer"
  },
  python: {
    title: "Python & Backend Systems",
    badge: "Trending",
    duration: "10 Weeks (Live + Labs)",
    level: "Beginner to Intermediate",
    summary: "Deep dive into modern Python 3, functional programming, data structures, automation scripting, Flask & FastAPI frameworks, and database persistence.",
    prerequisites: "No prior coding experience required. High school mathematics.",
    modules: [
      "Python Basics: Syntax, Data Types, Control Structures, and Functions",
      "Advanced Python: Decorators, Generators, Context Managers, and OOP",
      "File I/O, Regular Expressions, and Automation Scripts",
      "Web Frameworks: Building REST APIs with FastAPI & Flask",
      "Database Layer: PostgreSQL with SQLAlchemy ORM",
      "Testing, Packaging, Dockerization & Cloud Deployment"
    ],
    project: "Scalable Task Automation Engine & High-Performance REST Microservice",
    certification: "Stats Innotech Certified Python Developer"
  },
  dsa: {
    title: "Data Structures & Algorithms (DSA)",
    badge: "Core Tech",
    duration: "10 Weeks (Problem Solving)",
    level: "Intermediate",
    summary: "Rigorous technical interview preparation covering algorithmic complexity, dynamic programming, graph theory, trees, and system optimization.",
    prerequisites: "Working knowledge of Python, Java, or C++.",
    modules: [
      "Time & Space Complexity Analysis (Asymptotic Notations)",
      "Arrays, Strings, Two-Pointer, and Sliding Window Patterns",
      "Linked Lists, Stacks, Queues, and Monotonic Structures",
      "Binary Trees, BSTs, Heaps, and Priority Queues",
      "Recursion, Backtracking, and Dynamic Programming (1D & 2D)",
      "Graph Algorithms: BFS, DFS, Dijkstra, Topo Sort & Union-Find"
    ],
    project: "Algorithmic Routing & Network Flow Optimization System",
    certification: "Stats Innotech Algorithms & Problem Solving Specialist"
  },
  "dsa-java": {
    title: "Data Structures & Algorithms with Java",
    badge: "Interview Prep",
    duration: "10 Weeks (Problem Solving)",
    level: "Intermediate",
    summary: "Conquer technical interview algorithms, time/space complexity, arrays, trees, graphs, and dynamic programming with Java as the language of implementation.",
    prerequisites: "Working knowledge of Core Java syntax and OOP principles.",
    modules: [
      "Asymptotic Analysis, Time/Space Complexity & Java Collections Internals",
      "Arrays, Strings, Two-Pointer & Sliding Window Techniques",
      "Linked Lists, Stacks, Queues, and Priority Queues (Heaps)",
      "Binary Trees, BSTs, Traversals & Tree DP",
      "Recursion, Backtracking & Dynamic Programming (1D/2D)",
      "Graph Algorithms: BFS, DFS, Dijkstra, Topo Sort & Disjoint Set Union (DSU)"
    ],
    project: "Algorithmic Routing & Network Flow Optimization Engine in Java",
    certification: "Stats Innotech Algorithms Specialist (Java)"
  },
  "dsa-python": {
    title: "Data Structures & Algorithms with Python",
    badge: "Interview Prep",
    duration: "10 Weeks (Problem Solving)",
    level: "Intermediate",
    summary: "Master problem-solving patterns, algorithmic complexity, recursion, graph theory, and dynamic programming using clean, idiomatic Python.",
    prerequisites: "Working knowledge of Python 3 fundamentals.",
    modules: [
      "Time & Space Complexity Analysis & Pythonic Data Structures",
      "Lists, Dictionaries, Sets, Two-Pointer & Sliding Window Algorithms",
      "Linked Lists, Stacks, Queues & Monotonic Stacks in Python",
      "Binary Trees, Heapq, and Priority Queue Applications",
      "Recursion, Memoization & Dynamic Programming (Tabulation/Memoization)",
      "Graph Theory: BFS, DFS, Shortest Paths, Topological Sort & Union-Find"
    ],
    project: "Automated Algorithmic Problem Solver & Graph Analysis Engine",
    certification: "Stats Innotech Algorithms Specialist (Python)"
  },
  cpp: {
    title: "C & C++ Systems Programming",
    badge: "Foundational",
    duration: "10 Weeks (Code Intensive)",
    level: "Beginner to Advanced",
    summary: "Deep-dive into low-level systems programming, memory management, pointers, Object-Oriented C++, STL templates, and performance-critical engineering.",
    prerequisites: "Logical aptitude and curiosity about how hardware and software interact.",
    modules: [
      "C Fundamentals: Variables, Operators, Control Flow, and Functions",
      "Pointers, Dynamic Memory Allocation (malloc/free) & Arrays",
      "Structures, Unions, File I/O, and Modular Compilation",
      "C++ OOP: Classes, Encapsulation, Inheritance & Polymorphism",
      "Standard Template Library (STL): Vectors, Maps, Sets, and Iterators",
      "Modern C++ (C++17/20), Smart Pointers, Concurrency & Memory Safety"
    ],
    project: "High-Performance In-Memory Key-Value Store & System Resource Monitor",
    certification: "Stats Innotech Certified C/C++ Systems Developer"
  },
  analytics: {
    title: "Data Analytics & Business Intelligence",
    badge: "High Demand",
    duration: "12 Weeks (Practical + Projects)",
    level: "Beginner to Intermediate",
    summary: "Master data preparation, statistical analysis, interactive dashboards, and business reporting using Advanced Excel, SQL, Power BI, Tableau, and introductory Python.",
    prerequisites: "Basic computer familiarity and arithmetic/analytical mindset.",
    modules: [
      "Advanced Excel: Formulas, Pivot Tables, Power Query & Data Modeling",
      "SQL for Data Analysis: Joins, Aggregations, Window Functions & CTEs",
      "Power BI Essentials: Data Modeling, DAX Calculations & Interactive Dashboards",
      "Tableau Visualizations: Storytelling with Data & KPI Dashboards",
      "Exploratory Data Analysis (EDA) with Python, Pandas & Seaborn",
      "Business Metrics, Cohort Analysis & Executive KPI Reporting"
    ],
    project: "End-to-End Retail & Sales Intelligence Dashboard with Predictive Forecasting",
    certification: "Stats Innotech Certified Data Analytics Professional"
  },
  cloud: {
    title: "Cloud Computing & AWS Architecture",
    badge: "High Demand",
    duration: "8 Weeks (Hands-On Lab)",
    level: "Intermediate",
    summary: "Hands-on implementation of Amazon Web Services (AWS) core infrastructure: EC2, S3, RDS, Lambda serverless, VPC networking, IAM security, and CI/CD pipelines.",
    prerequisites: "Basic Linux command line and networking concepts.",
    modules: [
      "Cloud Fundamentals, Virtualization, and Global AWS Infrastructure",
      "Compute: EC2, Elastic Load Balancing (ELB), and Auto Scaling Groups",
      "Storage & Databases: S3, EBS, EFS, RDS, and DynamoDB",
      "Networking & Security: VPCs, Subnets, Routing Tables, and IAM Policies",
      "Serverless Architecture: AWS Lambda, API Gateway, and SQS/SNS",
      "Monitoring & DevOps: CloudWatch, CloudFormation, and Automated CI/CD"
    ],
    project: "High-Availability, Fault-Tolerant Enterprise Web Application Infrastructure",
    certification: "Stats Innotech Certified Cloud Practitioner"
  },
  linux: {
    title: "Linux System Administration & Shell",
    badge: "Essential",
    duration: "6 Weeks (Intensive)",
    level: "All Levels",
    summary: "Master the Linux operating system, command-line utilities, Bash scripting, user/process management, network configuration, and system hardening.",
    prerequisites: "Curiosity and eagerness to work with Unix/Linux terminals.",
    modules: [
      "Linux Filesystem Hierarchy, Permissions, and Shell Navigation",
      "Text Processing Tools (grep, sed, awk, cut, tr)",
      "User, Group & Storage Administration (LVM, Partitions)",
      "Systemd Services, Cron Jobs, and Process Management",
      "Bash Shell Scripting & Automated Server Health Checks",
      "Network Troubleshooting, SSH Security, and Firewall Configuration"
    ],
    project: "Automated Server Backup & Infrastructure Monitoring Bash Suite",
    certification: "Stats Innotech Linux System Specialist"
  },
  "digital-marketing": {
    title: "Digital Marketing & Growth SEO",
    badge: "Career Track",
    duration: "8 Weeks (Practical)",
    level: "Beginner to Pro",
    summary: "Strategic digital marketing combining Search Engine Optimization (SEO), Google Analytics 4, Meta Ads Manager, Content Marketing, and conversion funnel optimization.",
    prerequisites: "Basic computer and internet literacy.",
    modules: [
      "Digital Marketing Landscape & Customer Journey Mapping",
      "On-Page, Off-Page & Technical SEO Optimization",
      "Keyword Research & Search Intent Strategy",
      "Google Search Ads, Display Campaigns & PPC Bidding",
      "Social Media Marketing: Meta Ads, LinkedIn Targeting & Copywriting",
      "Analytics & Reporting with Google Analytics 4 & Tag Manager"
    ],
    project: "Live 360-Degree Growth Campaign with Measurable ROI & Analytics Dashboard",
    certification: "Stats Innotech Certified Digital Marketing Strategist"
  },
  webdev: {
    title: "Modern Web Development (HTML/CSS/JS/React)",
    badge: "Popular",
    duration: "10 Weeks (Project Based)",
    level: "Beginner to Intermediate",
    summary: "Create dynamic, responsive, and accessible web experiences using modern semantic HTML5, CSS Grid/Flexbox, ES6+ JavaScript, and component-driven React.",
    prerequisites: "Basic computer operation.",
    modules: [
      "Semantic HTML5, Accessibility (a11y) & Modern CSS Foundations",
      "Responsive Layouts with Flexbox, CSS Grid & Animation",
      "JavaScript Core: DOM Manipulation, Events & Async Fetch/JSON",
      "ES6+ Features: Modules, Promises, Destructuring & Closures",
      "React Essentials: Components, Props, State, and Hooks",
      "Building Single Page Apps (SPA) & Deploying to Vercel/Netlify"
    ],
    project: "Interactive SaaS Dashboard with Live API Feeds & Theme Customization",
    certification: "Stats Innotech Certified Frontend Web Developer"
  },
  dbms: {
    title: "Database Management & SQL Mastery",
    badge: "Core Tech",
    duration: "6 Weeks (Hands-On)",
    level: "Beginner to Intermediate",
    summary: "Master relational database architecture, ER modeling, SQL querying, indexing, transaction ACID compliance, normalization, and performance tuning.",
    prerequisites: "Basic computational logic.",
    modules: [
      "Relational Database Concepts & Entity Relationship (ER) Modeling",
      "DDL & DML Commands: Creating, Altering, and Querying Tables",
      "Complex Joins, Subqueries, Aggregations, and Window Functions",
      "Database Normalization (1NF through BCNF) & Integrity Constraints",
      "Indexing Strategies, Query Execution Plans & Optimization",
      "Stored Procedures, Triggers, Views & ACID Transactions"
    ],
    project: "High-Volume Transactional Banking Database Schema & Query Optimization Suite",
    certification: "Stats Innotech Database Management Specialist"
  },
  aiml: {
    title: "Artificial Intelligence & Machine Learning",
    badge: "Future Tech",
    duration: "12 Weeks (Applied AI)",
    level: "Intermediate",
    summary: "Comprehensive introduction to machine learning workflows: NumPy, Pandas data wrangling, Scikit-Learn algorithms, model evaluation, and introductory neural networks.",
    prerequisites: "Python fundamentals and basic linear algebra/statistics.",
    modules: [
      "Data Analysis & Vector Math with NumPy & Pandas",
      "Data Visualization with Matplotlib & Seaborn",
      "Supervised Learning: Linear/Logistic Regression, Decision Trees, Random Forests",
      "Unsupervised Learning: K-Means Clustering & PCA Dimensionality Reduction",
      "Model Evaluation, Cross-Validation & Hyperparameter Tuning",
      "Introduction to Deep Learning, PyTorch/TensorFlow, and AI Deployment"
    ],
    project: "End-to-End Predictive Analytics Model with Web Interface Deployment",
    certification: "Stats Innotech AI & Machine Learning Practitioner"
  },
  iot: {
    title: "IoT & Embedded Systems",
    badge: "Specialized",
    duration: "8 Weeks (Hardware & Code)",
    level: "Intermediate",
    summary: "Bridge physical hardware and software using microcontrollers (Arduino/ESP32), sensor interfacing, wireless protocols (MQTT/HTTP), and cloud IoT dashboards.",
    prerequisites: "Basic electronics and C/C++ or Python familiarity.",
    modules: [
      "Microcontroller Architectures: ESP32 & Arduino Platforms",
      "Digital/Analog Sensor Interfacing & Actuator Control",
      "Serial Communication: UART, I2C, and SPI Protocols",
      "Networking for IoT: Wi-Fi, Bluetooth BLE, and MQTT Broker Setup",
      "Cloud IoT Integration: AWS IoT Core & Real-time Telemetry Dashboards",
      "Edge Computing, Power Optimization & Embedded Security"
    ],
    project: "Smart Environmental Telemetry & Remote Automation Node",
    certification: "Stats Innotech Embedded Systems & IoT Specialist"
  },
  civil: {
    title: "Civil Engineering Project & CAD Modeling",
    badge: "Engineering",
    duration: "8 Weeks (CAD & Design)",
    level: "Undergraduate / Graduate",
    summary: "Industry-standard structural drafting, 2D/3D CAD design, project planning, structural analysis principles, and academic capstone guidance.",
    prerequisites: "Civil Engineering or Architectural background.",
    modules: [
      "Engineering Drawing Fundamentals & Projection Techniques",
      "2D Architectural Drafting & Plan Creation with CAD",
      "3D Building Modeling, Sectional Elevation & Detailing",
      "Structural Layouts, Reinforcement Details & Quantity Takeoffs",
      "Project Scheduling, Estimation & Quality Guidelines",
      "Capstone Project Guidance & Technical Documentation"
    ],
    project: "Comprehensive Multistory Commercial Building Drafting & Structural Portfolio",
    certification: "Stats Innotech Certified Civil Design Professional"
  }
};

// Initialize on DOM Loaded or immediately if already ready
function initAll() {
  initNavigation();
  initModals();
  initCourseInteractions();
  initFormSubmissions();
  initFaqAccordion();
  initContactPagePrefill();
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initAll);
} else {
  initAll();
}

/* -------------------------------------------------------------
 * 1. NAVIGATION & RESPONSIVE MENU
 * ------------------------------------------------------------- */
function initNavigation() {
  const mobileToggle = document.getElementById('mobileNavToggle');
  const navMenu = document.getElementById('navMenu');
  const siteHeader = document.getElementById('siteHeader');

  // Dynamic header height measurement for seamless menu snapping
  function updateHeaderHeight() {
    if (siteHeader) {
      const h = siteHeader.offsetHeight;
      if (h > 0) {
        document.documentElement.style.setProperty('--site-header-height', h + 'px');
      }
    }
  }

  // Ensure mobile backdrop exists in DOM
  let backdrop = document.querySelector('.mobile-nav-backdrop');
  if (!backdrop) {
    backdrop = document.createElement('div');
    backdrop.className = 'mobile-nav-backdrop';
    document.body.appendChild(backdrop);
  }

  if (mobileToggle && navMenu) {
    // Inject mobile quick CTA into menu drawer if not present
    if (!navMenu.querySelector('.nav-menu-mobile-cta')) {
      const mobileCta = document.createElement('div');
      mobileCta.className = 'nav-menu-mobile-cta';
      mobileCta.innerHTML = `
        <a class="btn-drawer-whatsapp" href="https://wa.me/919579099267?text=Hello%20Stats%20Innotech%2C%20I%20have%20an%20inquiry." target="_blank" rel="noopener">
          <svg fill="currentColor" height="18" viewBox="0 0 24 24" width="18">
            <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.816 9.816 0 0 0 12.04 2zm.01 1.67c2.2 0 4.26.86 5.82 2.42a8.225 8.225 0 0 1 2.41 5.83c0 4.54-3.7 8.24-8.24 8.24-1.42 0-2.82-.37-4.06-1.07l-.29-.17-3.12.82.83-3.04-.19-.3a8.212 8.212 0 0 1-1.26-4.48c0-4.54 3.7-8.23 8.24-8.23zm4.52 11.66c-.25-.13-1.47-.72-1.7-.81-.23-.08-.39-.13-.56.13-.17.25-.64.81-.79.97-.14.17-.29.19-.54.06-.25-.13-1.06-.39-2.02-1.25-.75-.67-1.26-1.49-1.41-1.74-.14-.25-.02-.39.11-.51.11-.11.25-.29.38-.44.12-.14.17-.25.25-.41.08-.17.04-.32-.02-.44-.06-.13-.56-1.35-.77-1.85-.2-.49-.41-.42-.56-.43h-.48c-.17 0-.44.06-.67.31-.23.25-.88.86-.88 2.1 0 1.24.9 2.44 1.03 2.61.13.17 1.77 2.7 4.29 3.79.6.26 1.07.41 1.44.53.6.19 1.15.16 1.58.1.48-.07 1.47-.6 1.68-1.18.21-.58.21-1.07.15-1.18-.06-.1-.23-.17-.48-.29z" />
          </svg>
          <span>Chat on WhatsApp</span>
        </a>
        <div class="drawer-contact-info">
          <span>Helpline: </span><a href="tel:+919579099267">+91 95790 99267</a>
        </div>
      `;
      navMenu.appendChild(mobileCta);
    }

    function closeMobileMenu() {
      navMenu.classList.remove('mobile-open');
      mobileToggle.classList.remove('active');
      mobileToggle.setAttribute('aria-expanded', 'false');
      backdrop.classList.remove('active');
      document.body.classList.remove('nav-locked');
    }

    function toggleMobileMenu() {
      updateHeaderHeight();
      const isOpen = navMenu.classList.toggle('mobile-open');
      mobileToggle.classList.toggle('active', isOpen);
      mobileToggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
      backdrop.classList.toggle('active', isOpen);
      document.body.classList.toggle('nav-locked', isOpen);
    }

    mobileToggle.addEventListener('click', function(e) {
      e.stopPropagation();
      toggleMobileMenu();
    });

    backdrop.addEventListener('click', function() {
      closeMobileMenu();
    });

    // Close when clicking outside
    document.addEventListener('click', function(e) {
      if (!navMenu.contains(e.target) && !mobileToggle.contains(e.target)) {
        closeMobileMenu();
      }
    });

    // Close on Escape key
    document.addEventListener('keydown', function(e) {
      if (e.key === 'Escape' && navMenu.classList.contains('mobile-open')) {
        closeMobileMenu();
      }
    });

    // Close on resize if wider than tablet
    window.addEventListener('resize', function() {
      updateHeaderHeight();
      if (window.innerWidth > 900 && navMenu.classList.contains('mobile-open')) {
        closeMobileMenu();
      }
    });

    // Close when link clicked
    navMenu.querySelectorAll('a').forEach(function(link) {
      link.addEventListener('click', function() {
        closeMobileMenu();
      });
    });
  }

  // Header scroll shadow and measurement
  if (siteHeader) {
    updateHeaderHeight();
    window.addEventListener('scroll', function() {
      if (window.scrollY > 20) {
        siteHeader.classList.add('scrolled');
      } else {
        siteHeader.classList.remove('scrolled');
      }
    });
  }

  window.addEventListener('load', updateHeaderHeight);
  window.addEventListener('orientationchange', function() {
    setTimeout(updateHeaderHeight, 150);
  });

  // Active link detection based on pathname
  const currentPath = window.location.pathname.toLowerCase();
  const navLinks = document.querySelectorAll('.nav-menu .nav-link');
  
  navLinks.forEach(function(link) {
    const href = (link.getAttribute('href') || '').toLowerCase();
    
    // Check if this link matches current page
    if (
      (currentPath.endsWith('index.html') || currentPath === '/' || currentPath.endsWith('/')) && (href === 'index.html' || href === '#home')
    ) {
      link.classList.add('active');
    } else if (href && currentPath.includes(href) && href !== 'index.html') {
      link.classList.add('active');
    } else if (!currentPath.includes('.html') && href === 'index.html') {
      link.classList.add('active');
    } else {
      link.classList.remove('active');
    }
  });

  // Get In Touch button open modal
  const btnGetInTouch = document.getElementById('btnGetInTouch');
  if (btnGetInTouch) {
    btnGetInTouch.addEventListener('click', function(e) {
      e.preventDefault();
      openModal('contactModal');
    });
  }

  // Student login navigation removed for representational build
}

/* -------------------------------------------------------------
 * 2. MODAL CONTROLS
 * ------------------------------------------------------------- */
function initModals() {
  // Close buttons
  document.querySelectorAll('[data-close]').forEach(function(btn) {
    btn.addEventListener('click', function() {
      const modalId = btn.getAttribute('data-close');
      closeModal(modalId);
    });
  });

  // Click outside to close
  document.querySelectorAll('.modal-overlay').forEach(function(overlay) {
    overlay.addEventListener('click', function(e) {
      if (e.target === overlay) {
        overlay.classList.remove('active');
        overlay.setAttribute('aria-hidden', 'true');
      }
    });
  });

  // ESC key to close
  document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
      document.querySelectorAll('.modal-overlay.active').forEach(function(m) {
        m.classList.remove('active');
        m.setAttribute('aria-hidden', 'true');
      });
    }
  });
}

function openModal(modalId) {
  const modal = document.getElementById(modalId);
  if (modal) {
    modal.classList.add('active');
    modal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
  }
}
window.openModal = openModal;

function closeModal(modalId) {
  const modal = document.getElementById(modalId);
  if (modal) {
    modal.classList.remove('active');
    modal.setAttribute('aria-hidden', 'true');
    const anyActive = document.querySelector('.modal-overlay.active');
    if (!anyActive) {
      document.body.style.overflow = '';
    }
  }
}
window.closeModal = closeModal;

/* -------------------------------------------------------------
 * 3. COURSE INTERACTIONS & SYLLABUS MODAL
 * ------------------------------------------------------------- */
function initCourseInteractions() {
  // Course card click (Home page popular course cards)
  document.querySelectorAll('.course-card[data-course]').forEach(function(card) {
    card.addEventListener('click', function() {
      const courseKey = card.getAttribute('data-course');
      showCourseDetails(courseKey);
    });
  });

  // Syllabus button clicks on Courses page
  document.querySelectorAll('[data-syllabus]').forEach(function(btn) {
    btn.addEventListener('click', function(e) {
      e.stopPropagation();
      const courseKey = btn.getAttribute('data-syllabus');
      showCourseDetails(courseKey);
    });
  });

  // Course category filtering on Courses page
  const filterButtons = document.querySelectorAll('.courses-filter-nav .filter-btn');
  const courseCards = document.querySelectorAll('.course-detail-card');

  if (filterButtons.length && courseCards.length) {
    filterButtons.forEach(function(btn) {
      btn.addEventListener('click', function() {
        filterButtons.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');

        const category = btn.getAttribute('data-filter');

        courseCards.forEach(function(card) {
          const cardCategory = card.getAttribute('data-category');
          if (category === 'all' || cardCategory === category || cardCategory.includes(category)) {
            card.style.display = 'flex';
          } else {
            card.style.display = 'none';
          }
        });
      });
    });
  }

  // Quick enroll button (navigates to enquiry page)
  document.querySelectorAll('[data-enroll]').forEach(function(btn) {
    btn.addEventListener('click', function(e) {
      const href = btn.getAttribute('href');
      if (href && href !== '#' && !href.startsWith('#')) {
        // Natural anchor navigation to enquiry page
        return;
      }
      e.preventDefault();
      const enrollTitle = btn.getAttribute('data-enroll');
      const isInternship = btn.classList.contains('domain-apply-btn') || btn.getAttribute('data-type') === 'internship';
      const interest = isInternship ? 'Internships' : 'Courses';
      const paramName = isInternship ? 'track' : 'course';
      window.location.href = `contact.html?interest=${interest}&${paramName}=${encodeURIComponent(enrollTitle)}`;
    });
  });
}

function showCourseDetails(courseKey) {
  const data = COURSES_DATA[courseKey];
  if (!data) return;

  const modal = document.getElementById('courseModal');
  const titleEl = document.getElementById('courseModalTitle');
  const bodyEl = document.getElementById('courseModalBody');

  if (!modal || !titleEl || !bodyEl) return;

  titleEl.textContent = data.title;

  const modulesHtml = data.modules.map((m, idx) => `
    <li style="display:flex; align-items:flex-start; gap:10px; margin-bottom:8px; font-size:13.5px; color:#334155;">
      <span style="display:inline-flex; align-items:center; justify-content:center; width:22px; height:22px; border-radius:50%; background:#155EEF; color:#fff; font-size:11px; font-weight:700; flex-shrink:0;">${idx + 1}</span>
      <span>${m}</span>
    </li>
  `).join('');

  bodyEl.innerHTML = `
    <div style="margin-bottom:18px;">
      <span class="course-badge badge-blue" style="margin-bottom:10px;">${data.badge}</span>
      <p style="font-size:14px; color:#64748B; line-height:1.6; margin-top:8px;">${data.summary}</p>
    </div>
    
    <div style="display:grid; grid-template-columns:1fr 1fr; gap:12px; background:#F8FAFC; border:1px solid #E2E8F0; border-radius:8px; padding:14px; margin-bottom:20px; font-size:12.5px;">
      <div><strong style="color:#0B1F3A;">Duration:</strong> <span style="color:#64748B;">${data.duration}</span></div>
      <div><strong style="color:#0B1F3A;">Level:</strong> <span style="color:#64748B;">${data.level}</span></div>
      <div style="grid-column:1 / -1;"><strong style="color:#0B1F3A;">Prerequisites:</strong> <span style="color:#64748B;">${data.prerequisites}</span></div>
    </div>

    <div style="margin-bottom:22px;">
      <h4 style="font-size:15px; font-weight:700; color:#0B1F3A; margin-bottom:12px;">Curriculum Outline & Modules:</h4>
      <ul style="list-style:none; padding:0; margin:0;">
        ${modulesHtml}
      </ul>
    </div>

    <div style="background:#EAF5FF; border-left:4px solid #06B6D4; padding:12px 16px; border-radius:0 8px 8px 0; margin-bottom:24px;">
      <div style="font-size:12.5px; font-weight:700; color:#0B1F3A; margin-bottom:3px;">Hands-On Capstone Project:</div>
      <div style="font-size:13px; color:#1E293B;">${data.project}</div>
    </div>

    <div style="display:flex; gap:12px;">
      <a class="form-submit-btn" style="margin:0; text-decoration:none; display:inline-flex; align-items:center; justify-content:center;" href="contact.html?interest=Courses&course=${encodeURIComponent(data.title)}">
        <span>Inquire / Enroll in this Course</span>
        <svg fill="none" height="15" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" viewbox="0 0 24 24" width="15">
          <polyline points="9 18 15 12 9 6"></polyline>
        </svg>
      </a>
    </div>
  `;

  openModal('courseModal');
}
window.showCourseDetails = showCourseDetails;

function prefillInquiry(courseTitle) {
  // If contactModal exists
  const modal = document.getElementById('contactModal');
  const interestSelect = document.getElementById('contactInterest');
  const messageInput = document.getElementById('contactMessage');

  if (interestSelect) {
    interestSelect.value = 'Courses';
  }
  if (messageInput) {
    messageInput.value = `I am interested in enrolling or receiving syllabus details for: ${courseTitle}. Please share batch schedule and fee details.`;
  }

  openModal('contactModal');
}
window.prefillInquiry = prefillInquiry;

/* -------------------------------------------------------------
 * 4. FORM SUBMISSIONS & TOAST FEEDBACK
 * ------------------------------------------------------------- */
function initFormSubmissions() {
  // Contact Form (Modal & Contact Page)
  const contactForms = document.querySelectorAll('#contactForm, .contact-page-form');
  contactForms.forEach(function(form) {
    form.addEventListener('submit', function(e) {
      e.preventDefault();
      const name = form.querySelector('[name="name"], #contactName, #pageContactName')?.value || 'Friend';
      
      closeModal('contactModal');
      showToast(`Thank you, ${name}! Your inquiry has been sent to Stats Innotech. Our advisor will reach out shortly.`);
      form.reset();
    });
  });

  // Internship Application Form (Modal & Internship Page)
  const internForms = document.querySelectorAll('#internshipForm, .internship-page-form');
  internForms.forEach(function(form) {
    form.addEventListener('submit', function(e) {
      e.preventDefault();
      const name = form.querySelector('[name="name"], #internName, #appFullName')?.value || 'Applicant';
      const domain = form.querySelector('[name="domain"], #internDomain, #appDomain')?.value || 'Internship';
      
      closeModal('internshipModal');
      showToast(`Congratulations, ${name}! Your application for the ${domain} Internship has been registered successfully.`);
      form.reset();
    });
  });

  // Course Inquiry Form on Courses page
  const courseInquiryForm = document.getElementById('courseInquiryForm');
  if (courseInquiryForm) {
    courseInquiryForm.addEventListener('submit', function(e) {
      e.preventDefault();
      const name = courseInquiryForm.querySelector('#inquiryName, input[type="text"]')?.value || 'Student';
      const course = courseInquiryForm.querySelector('#inquiryCourse, select')?.value || 'Course Track';
      showToast(`Thank you, ${name}! Your course inquiry for ${course} has been received. Our counselor will contact you.`);
      courseInquiryForm.reset();
    });
  }

  // Domain apply button clicks (navigates to enquiry page)
  document.querySelectorAll('[data-apply-domain]').forEach(function(btn) {
    btn.addEventListener('click', function(e) {
      const href = btn.getAttribute('href');
      if (href && href.startsWith('contact.html')) {
        // Natural anchor navigation to enquiry page
        return;
      }
      e.preventDefault();
      const domain = btn.getAttribute('data-apply-domain');
      window.location.href = `contact.html?interest=Internships&track=${encodeURIComponent(domain)}`;
    });
  });
}

function showToast(message) {
  let toast = document.getElementById('toastNotification');
  if (!toast) {
    toast = document.createElement('div');
    toast.id = 'toastNotification';
    toast.className = 'toast-notification';
    toast.innerHTML = `
      <svg fill="none" height="20" stroke="#06B6D4" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" viewbox="0 0 24 24" width="20">
        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
        <polyline points="22 4 12 14.01 9 11.01"></polyline>
      </svg>
      <span id="toastMessage"></span>
    `;
    document.body.appendChild(toast);
  }

  const msgSpan = document.getElementById('toastMessage') || toast.querySelector('span');
  if (msgSpan) msgSpan.textContent = message;

  toast.classList.add('show');
  setTimeout(function() {
    toast.classList.remove('show');
  }, 4500);
}
window.showToast = showToast;

/* -------------------------------------------------------------
 * 5. FAQ ACCORDION BEHAVIOR
 * ------------------------------------------------------------- */
function initFaqAccordion() {
  const faqItems = document.querySelectorAll('.faq-list details');
  faqItems.forEach(function(item) {
    item.addEventListener('toggle', function() {
      if (item.open) {
        // Optional: close other open items for a neat accordion
        faqItems.forEach(function(other) {
          if (other !== item && other.open) {
            other.removeAttribute('open');
          }
        });
      }
    });
  });
}


/* -------------------------------------------------------------
 * DIRECT QUERY REACH-OUT (WHATSAPP & EMAIL)
 * ------------------------------------------------------------- */
const REACH_CONFIG = {
  whatsappNumber: '919579099267',
  emailSupport: 'support@statsinnotech.com'
};

function reachViaWhatsApp(payload) {
  const textLines = [
    "Hello Stats Innotech Team,",
    payload.subject ? ("*Subject:* " + payload.subject) : null,
    payload.interest ? ("*Area/Course:* " + payload.interest) : null,
    payload.name ? ("*Name:* " + payload.name) : null,
    payload.phone ? ("*Phone:* " + payload.phone) : null,
    payload.email ? ("*Email:* " + payload.email) : null,
    payload.college ? ("*College/Org:* " + payload.college) : null,
    payload.message ? ("*Message/Query:* " + payload.message) : null
  ].filter(Boolean);

  const encoded = encodeURIComponent(textLines.join("\n"));
  const url = "https://wa.me/" + REACH_CONFIG.whatsappNumber + "?text=" + encoded;
  window.open(url, "_blank", "noopener,noreferrer");
}

function reachViaEmail(payload) {
  const subject = encodeURIComponent(payload.subject || (payload.interest ? "Inquiry for " + payload.interest : "General Academic Query - Stats Innotech"));
  const bodyLines = [
    "Hello Stats Innotech Support,",
    "",
    payload.name ? ("Name: " + payload.name) : null,
    payload.phone ? ("Phone: " + payload.phone) : null,
    payload.email ? ("Email: " + payload.email) : null,
    payload.interest ? ("Interested In: " + payload.interest) : null,
    payload.college ? ("College/University: " + payload.college) : null,
    "",
    payload.message ? ("Inquiry Details:\n" + payload.message) : null,
    "",
    "Best regards"
  ].filter(Boolean);

  const encodedBody = encodeURIComponent(bodyLines.join("\n"));
  window.location.href = "mailto:" + REACH_CONFIG.emailSupport + "?subject=" + subject + "&body=" + encodedBody;
}

function attachQueryReachListeners() {
  // Modal Contact form
  const btnSendWhatsAppModal = document.getElementById('btnSendWhatsAppModal');
  const btnSendEmailModal = document.getElementById('btnSendEmailModal');

  if (btnSendWhatsAppModal) {
    btnSendWhatsAppModal.addEventListener('click', function() {
      const name = document.getElementById('contactName')?.value || 'Prospective Student';
      const email = document.getElementById('contactEmail')?.value || '';
      const phone = document.getElementById('contactPhone')?.value || '';
      const interest = document.getElementById('contactInterest')?.value || 'General Inquiry';
      const message = document.getElementById('contactMessage')?.value || '';
      
      reachViaWhatsApp({ name, email, phone, interest, message, subject: 'Direct Website Query' });
      closeModal('contactModal');
      showToast('Opening WhatsApp with your query pre-filled...');
    });
  }

  if (btnSendEmailModal) {
    btnSendEmailModal.addEventListener('click', function() {
      const name = document.getElementById('contactName')?.value || 'Prospective Student';
      const email = document.getElementById('contactEmail')?.value || '';
      const phone = document.getElementById('contactPhone')?.value || '';
      const interest = document.getElementById('contactInterest')?.value || 'General Inquiry';
      const message = document.getElementById('contactMessage')?.value || '';
      
      reachViaEmail({ name, email, phone, interest, message, subject: 'Direct Website Query' });
      closeModal('contactModal');
      showToast('Opening your email client to send query...');
    });
  }

  // Contact Page Form
  const btnPageWhatsApp = document.getElementById('btnPageContactWhatsApp');
  const btnPageEmail = document.getElementById('btnPageContactEmail');

  if (btnPageWhatsApp) {
    btnPageWhatsApp.addEventListener('click', function() {
      const name = document.getElementById('pageContactName')?.value || 'Visitor';
      const phone = document.getElementById('pageContactPhone')?.value || '';
      const email = document.getElementById('pageContactEmail')?.value || '';
      const interest = document.getElementById('pageContactInterest')?.value || 'General';
      const subject = document.getElementById('pageContactSubject')?.value || 'Website Query';
      const message = document.getElementById('pageContactMessage')?.value || '';

      reachViaWhatsApp({ name, phone, email, interest, subject, message });
      showToast('Opening WhatsApp with your inquiry...');
    });
  }

  if (btnPageEmail) {
    btnPageEmail.addEventListener('click', function() {
      const name = document.getElementById('pageContactName')?.value || 'Visitor';
      const phone = document.getElementById('pageContactPhone')?.value || '';
      const email = document.getElementById('pageContactEmail')?.value || '';
      const interest = document.getElementById('pageContactInterest')?.value || 'General';
      const subject = document.getElementById('pageContactSubject')?.value || 'Website Query';
      const message = document.getElementById('pageContactMessage')?.value || '';

      reachViaEmail({ name, phone, email, interest, subject, message });
      showToast('Opening email client for inquiry...');
    });
  }

  // Course Inquiry Form
  const btnCourseWhatsApp = document.getElementById('btnCourseWhatsApp');
  const btnCourseEmail = document.getElementById('btnCourseEmail');

  if (btnCourseWhatsApp) {
    btnCourseWhatsApp.addEventListener('click', function() {
      const name = document.getElementById('inquiryName')?.value || 'Student';
      const phone = document.getElementById('inquiryPhone')?.value || '';
      const email = document.getElementById('inquiryEmail')?.value || '';
      const course = document.getElementById('inquiryCourse')?.value || 'Course Track';
      const message = document.getElementById('inquiryMsg')?.value || '';

      reachViaWhatsApp({ name, phone, email, interest: course, subject: 'Course Track Inquiry: ' + course, message });
      showToast('Opening WhatsApp for course inquiry...');
    });
  }

  if (btnCourseEmail) {
    btnCourseEmail.addEventListener('click', function() {
      const name = document.getElementById('inquiryName')?.value || 'Student';
      const phone = document.getElementById('inquiryPhone')?.value || '';
      const email = document.getElementById('inquiryEmail')?.value || '';
      const course = document.getElementById('inquiryCourse')?.value || 'Course Track';
      const message = document.getElementById('inquiryMsg')?.value || '';

      reachViaEmail({ name, phone, email, interest: course, subject: 'Course Track Inquiry: ' + course, message });
      showToast('Opening email client for course inquiry...');
    });
  }

  // Internship Form
  const btnInternWhatsApp = document.getElementById('btnInternWhatsApp');
  const btnInternEmail = document.getElementById('btnInternEmail');

  if (btnInternWhatsApp) {
    btnInternWhatsApp.addEventListener('click', function() {
      const name = document.getElementById('appFullName')?.value || 'Applicant';
      const phone = document.getElementById('appPhone')?.value || '';
      const email = document.getElementById('appEmail')?.value || '';
      const domain = document.getElementById('appDomain')?.value || 'Internship';
      const college = document.getElementById('appCollege')?.value || '';
      const message = document.getElementById('appStatement')?.value || '';

      reachViaWhatsApp({ name, phone, email, interest: domain, college, subject: 'Internship Application: ' + domain, message });
      showToast('Opening WhatsApp for internship application...');
    });
  }

  if (btnInternEmail) {
    btnInternEmail.addEventListener('click', function() {
      const name = document.getElementById('appFullName')?.value || 'Applicant';
      const phone = document.getElementById('appPhone')?.value || '';
      const email = document.getElementById('appEmail')?.value || '';
      const domain = document.getElementById('appDomain')?.value || 'Internship';
      const college = document.getElementById('appCollege')?.value || '';
      const message = document.getElementById('appStatement')?.value || '';

      reachViaEmail({ name, phone, email, interest: domain, college, subject: 'Internship Application: ' + domain, message });
      showToast('Opening email client for internship application...');
    });
  }
}

// Hook into DOMContentLoaded
document.addEventListener('DOMContentLoaded', attachQueryReachListeners);

/* -------------------------------------------------------------
 * 7. CONTACT / ENQUIRY PAGE PREFILL
 * ------------------------------------------------------------- */
function initContactPagePrefill() {
  const urlParams = new URLSearchParams(window.location.search);
  const interest = urlParams.get('interest');
  const course = urlParams.get('course');
  const track = urlParams.get('track');
  const domain = urlParams.get('domain');

  const interestSelect = document.getElementById('pageContactInterest');
  const subjectInput = document.getElementById('pageContactSubject');
  const messageInput = document.getElementById('pageContactMessage');

  if (interest && interestSelect) {
    interestSelect.value = interest;
  }

  const selectedItem = course || track || domain;
  if (selectedItem) {
    if (interest === 'Internships' || track || domain) {
      if (interestSelect) interestSelect.value = 'Internships';
      if (subjectInput) subjectInput.value = `Internship Track Enrollment: ${selectedItem}`;
      if (messageInput) {
        messageInput.value = `Hello Stats Innotech Team,\n\nI would like to enroll in the ${selectedItem} Internship Track. Please share batch schedule, project deliverables, and admission steps.\n\nThank you!`;
      }
    } else {
      if (interestSelect) interestSelect.value = 'Courses';
      if (subjectInput) subjectInput.value = `Course Enrollment: ${selectedItem}`;
      if (messageInput) {
        messageInput.value = `Hello Stats Innotech Team,\n\nI would like to enroll in the ${selectedItem} course. Please provide the upcoming batch timings, course outline, and fee details.\n\nThank you!`;
      }
    }

    const contactFormPanel = document.querySelector('.contact-form-panel');
    if (contactFormPanel) {
      setTimeout(function() {
        contactFormPanel.scrollIntoView({ behavior: 'smooth', block: 'center' });
        const nameInput = document.getElementById('pageContactName');
        if (nameInput) nameInput.focus();
      }, 250);
    }
  }
}

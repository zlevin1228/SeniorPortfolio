// Project data
const projects = [
    {
        title: "E-Commerce Platform",
        description: "Full-stack online shopping experience with payment integration",
        tech: "Vue.js",
        image: "/api/placeholder/300/200",
        url: "https://github.com"
    },
    {
        title: "Task Manager",
        description: "Collaborative project management tool with real-time updates",
        tech: "React",
        image: "/api/placeholder/300/200",
        url: "https://trello.com"
    },
    {
        title: "Weather Dashboard",
        description: "Interactive weather forecasting application with maps",
        tech: "JS",
        image: "/api/placeholder/300/200",
        url: "https://weather.com"
    },
    {
        title: "Portfolio Website",
        description: "Responsive personal portfolio showcasing my work",
        tech: "HTML/CSS",
        image: "/api/placeholder/300/200",
        url: "https://codepen.io"
    },
    {
        title: "Chat Application",
        description: "Real-time messaging platform with room functionality",
        tech: "Socket.io",
        image: "/api/placeholder/300/200",
        url: "https://discord.com"
    },
    {
        title: "Blog CMS",
        description: "Content management system for blogging with admin panel",
        tech: "Node.js",
        image: "/api/placeholder/300/200",
        url: "https://medium.com"
    },
    {
        title: "Fitness Tracker",
        description: "Mobile-responsive app for tracking workouts and progress",
        tech: "PWA",
        image: "/api/placeholder/300/200",
        url: "https://myfitnesspal.com"
    },
    {
        title: "Recipe Finder",
        description: "Search and save your favorite recipes with meal planning",
        tech: "API",
        image: "/api/placeholder/300/200",
        url: "https://allrecipes.com"
    },
    {
        title: "Budget Tracker",
        description: "Personal finance management with expense categorization",
        tech: "Chart.js",
        image: "/api/placeholder/300/200",
        url: "https://mint.com"
    },
    {
        title: "Learning Platform",
        description: "Online course platform with progress tracking",
        tech: "Vue.js",
        image: "/api/placeholder/300/200",
        url: "https://coursera.org"
    },
    {
        title: "Social Media App",
        description: "Mini social network with posts, likes, and comments",
        tech: "MongoDB",
        image: "/api/placeholder/300/200",
        url: "https://twitter.com"
    },
    {
        title: "Game Center",
        description: "Collection of browser-based mini-games and puzzles",
        tech: "Canvas",
        image: "/api/placeholder/300/200",
        url: "https://chess.com"
    },
    {
        title: "Music Player",
        description: "Streaming music player with playlist functionality",
        tech: "Web Audio",
        image: "/api/placeholder/300/200",
        url: "https://spotify.com"
    },
    {
        title: "Photo Gallery",
        description: "Image gallery with filters, search, and organization",
        tech: "CSS Grid",
        image: "/api/placeholder/300/200",
        url: "https://unsplash.com"
    },
    {
        title: "Event Planner",
        description: "Organize and manage events with calendar integration",
        tech: "Calendar",
        image: "/api/placeholder/300/200",
        url: "https://eventbrite.com"
    },
    {
        title: "Code Editor",
        description: "Browser-based code editor with syntax highlighting",
        tech: "CodeMirror",
        image: "/api/placeholder/300/200",
        url: "https://replit.com"
    }
];

// Initialize Vue app
if (typeof Vue !== 'undefined') {
    const { createApp } = Vue;

    createApp({
        data() {
            return {
                projects: projects
            }
        },
        methods: {
            getAosAnimation(index) {
                const animations = ['fade-up', 'fade-left', 'fade-right', 'zoom-in'];
                return animations[index % 4];
            },
            addScrollEffects() {
                // Removed parallax scroll since we removed the football field background
                console.log('Scroll effects initialized');
            },
            addHoverEffects() {
                setTimeout(() => {
                    document.querySelectorAll('.project-card').forEach(card => {
                        card.addEventListener('mouseenter', function(e) {
                            this.style.transform = 'translateY(-10px) scale(1.02) rotateX(5deg)';
                        });
                        
                        card.addEventListener('mouseleave', function(e) {
                            this.style.transform = 'translateY(0) scale(1) rotateX(0deg)';
                        });
                    });
                }, 100);
            }
        },
        mounted() {
            // Initialize AOS
            if (typeof AOS !== 'undefined') {
                AOS.init({
                    duration: 800,
                    easing: 'ease-in-out',
                    once: false,
                    mirror: true
                });
            }

            // Add interactive effects
            this.addScrollEffects();
            this.addHoverEffects();
        }
    }).mount('#app');
} else {
    // Fallback if Vue doesn't load
    console.log('Vue.js not loaded, using vanilla JavaScript');
    
    // Render projects with vanilla JS
    const projectGrid = document.querySelector('.row.g-4');
    if (projectGrid) {
        projectGrid.innerHTML = projects.map((project, index) => {
            const animations = ['fade-up', 'fade-left', 'fade-right', 'zoom-in'];
            const animation = animations[index % 4];
            
            return `
                <div class="col-12 col-sm-6 col-lg-3">
                    <div class="project-card" 
                         data-aos="${animation}"
                         data-aos-delay="${index * 100}"
                         data-aos-duration="800">
                        <img src="${project.image}" alt="${project.title}" class="project-image">
                        <div class="tech-badge">${project.tech}</div>
                        <div class="project-overlay">
                            <h5>${project.title}</h5>
                            <p>${project.description}</p>
                            <a href="${project.url}" target="_blank" class="open-project-btn">
                                Open Project
                            </a>
                        </div>
                    </div>
                </div>
            `;
        }).join('');
    }
}

// Global function for vanilla JS fallback - no longer needed
// function selectProject(title, tech, description) {
//     alert(`Selected: ${title}\nTech: ${tech}\nDescription: ${description}`);
// }

// Additional vanilla JavaScript for enhanced interactivity
document.addEventListener('DOMContentLoaded', function() {
    // Initialize AOS if Vue didn't load
    if (typeof Vue === 'undefined' && typeof AOS !== 'undefined') {
        AOS.init({
            duration: 800,
            easing: 'ease-in-out',
            once: false,
            mirror: true
        });
    }

    // Add floating animation to cards
    setTimeout(() => {
        document.querySelectorAll('.project-card').forEach((card, index) => {
            card.style.animation = `float 3s ease-in-out infinite`;
            card.style.animationDelay = `${index * 0.1}s`;
        });
    }, 2000);

    // Add scroll effects removed since no background to animate
    console.log('Page loaded successfully');
});

// CSS Animation for floating effect
const style = document.createElement('style');
style.textContent = `
    @keyframes float {
        0%, 100% { transform: translateY(0px); }
        50% { transform: translateY(-5px); }
    }
`;
document.head.appendChild(style);

// Standard video player
let videoEnded = false;
const bgVideo = document.getElementById('bgVideo');

// When the video ends
bgVideo.addEventListener('ended', function() {
    if (!videoEnded) {
        videoEnded = true;
        showWebsiteContent();
    }
});

// Show the website content after the video has ended
function showWebsiteContent() {
    // Fade in the thumbnail
    document.getElementById('thumbnailBg').classList.add('visible');
    
    // Fade in the overlay
    document.getElementById('heroOverlay').classList.add('visible');
    
    // After a slight delay, fade in the content
    setTimeout(() => {
        // Show hero content
        document.getElementById('heroContent').classList.add('visible');
        
        // Make sidebar available (but not necessarily visible yet)
        document.getElementById('sidebar').classList.add('ready');
        
        // Make all content sections visible
        document.querySelectorAll('.content-section').forEach(section => {
            section.classList.add('visible');
        });
    }, 1000);
}

document.addEventListener('DOMContentLoaded', function() {
    const body = document.body;
    const sidebar = document.getElementById('sidebar');
    const navLinks = document.querySelectorAll('.sidebar-nav a');
    const scrollButton = document.getElementById('scrollButton');
    const toggleBtn = document.getElementById('toggleBtn');
    const toggleSidebar = document.getElementById('toggleSidebar');
    
    // Force-show content after a timeout (fallback in case video doesn't load or other issues)
    const forceShowTimeout = setTimeout(() => {
        if (!videoEnded) {
            videoEnded = true;
            showWebsiteContent();
        }
    }, 30000); // 30 seconds fallback
    
    // Scroll button functionality
    scrollButton.addEventListener('click', function() {
        document.getElementById('projects').scrollIntoView({ behavior: 'smooth' });
    });
    
    // Toggle button functionality (top left)
    toggleBtn.addEventListener('click', function() {
        sidebar.classList.toggle('active');
        
        if (sidebar.classList.contains('active')) {
            body.classList.add('sidebar-active');
            if (sidebar.classList.contains('expanded')) {
                body.classList.add('sidebar-expanded');
            }
        } else {
            body.classList.remove('sidebar-active', 'sidebar-expanded');
        }
    });
    
    // Toggle sidebar expansion
    toggleSidebar.addEventListener('click', function() {
        sidebar.classList.toggle('expanded');
        
        if (sidebar.classList.contains('expanded')) {
            body.classList.remove('sidebar-active');
            body.classList.add('sidebar-expanded');
        } else {
            body.classList.remove('sidebar-expanded');
            body.classList.add('sidebar-active');
        }
    });
    
    // Show sidebar and toggle button after scrolling past the hero section
    window.addEventListener('scroll', function() {
        const heroHeight = document.querySelector('.hero').offsetHeight;
        
        if (window.scrollY > heroHeight / 2) {
            toggleBtn.classList.add('visible');
        } else {
            toggleBtn.classList.remove('visible');
            sidebar.classList.remove('active');
            body.classList.remove('sidebar-active', 'sidebar-expanded');
        }
    });
    
    // Active link highlighting
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
    
            // Only prevent default if href starts with #
            if (href.startsWith('#')) {
                e.preventDefault();
    
                const targetId = href.substring(1);
                const targetElement = document.getElementById(targetId);
    
                if (targetElement) {
                    targetElement.scrollIntoView({ behavior: 'smooth' });
                }
    
                navLinks.forEach(l => l.classList.remove('active'));
                this.classList.add('active');
            }
            // else: allow browser to navigate normally (e.g., to gallery.html)
        });
    });
    
    
    // Update active link on scroll
    window.addEventListener('scroll', function() {
        let current = '';
        const sections = document.querySelectorAll('section');
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            if (window.scrollY >= (sectionTop - 200)) {
                current = section.getAttribute('id');
            }
        });
        
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href').substring(1) === current) {
                link.classList.add('active');
            }
        });
    });
});

document.getElementById('scrollButton').addEventListener('click', function () {
    const target = document.getElementById('resume');
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
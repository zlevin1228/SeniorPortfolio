// Project data
const projects = [
    {
        title: "Aquatic Animals",
        description: "Learn about animals in the sea! (Year 1 Project)",
        tech: "HTML/CSS",
        image: "img/aquarium.png",
        url: "https://zlevin1228.github.io/Aquatic-Animals/"
    },
    {
        title: "How To Win The World Cup",
        description: "Learn how to win the world cup! (Year 1 Project)",
        tech: "HTML/CSS",
        image: "img/worldcup.png",
        url: "https://zlevin1228.github.io/How-To-Win-The-World-Cup/"
    },
    {
        title: "Brand Designer",
        description: "Made with Nick Guzzone, a tribute to Satoshi Tajiri & Game Freak (Year 1 Project)",
        tech: "HTML/CSS/Bootstrap",
        image: "img/pokemon.png",
        url: "https://zlevin1228.github.io/Brand-Designer/"
    },
    {
        title: "Vacation Destination",
        description: "Learn about a potential trip to Monaco! (Year 1 Project)",
        tech: "HTML/CSS/Bootstrap",
        image: "img/monaco.png",
        url: "https://zlevin1228.github.io/Vacation-Destination/"
    },
    {
        title: "Mixtape Cafe",
        description: "Check out me and Randy Kladerman's cafe! (Year 1 Project)",
        tech: "HTML/CSS/Bootstrap",
        image: "img/mixtape.png",
        url: "https://zlevin1228.github.io/Coffee-Shop/"
    },
    {
        title: "Summertainment",
        description: "Check out an experience from the summer of 2023! (Year 2 Project)",
        tech: "HTML/CSS/Bootstrap",
        image: "img/dontoliver.png",
        url: "https://zlevin1228.github.io/Summertainment/"
    },
    {
        title: "George Halas Tribute",
        description: "Check out a tribute to Bears legend George Halas! (Year 2 Project)",
        tech: "HTML/CSS/Bootstrap",
        image: "img/halas.png",
        url: "https://zlevin1228.github.io/Look-Ma-Im-Famous/"
    },
    {
        title: "On My Birthday",
        description: "Check out some important events on my birthday! (Year 2 Project)",
        tech: "JavaScript",
        image: "img/birthday.png",
        url: "https://zlevin1228.github.io/On-My-Birthday/"
    },
    {
        title: "Rock, Paper, Scissors",
        description: "Try out the classic game of Rock, Paper, Scissors! (Year 2 Project)",
        tech: "Video Game",
        image: "img/rps.png",
        url: "https://zlevin1228.github.io/RPS/"
    },
    {
        title: "Little Bird Toy Co.",
        description: "With Randy Kladerman, our mock WBLP (Year 2 Project)",
        tech: "CSS/JS",
        image: "img/littlebird.png",
        url: "https://rklad.github.io/little-bird-toy-co/"
    },
    {
        title: "Monthly Website Gallery",
        description: "My biggest websites from Year 2 put together onto one page",
        tech: "HTML/CSS",
        image: "img/monthly.png",
        url: "https://zlevin1228.github.io/Gallery/"
    },
    {
        title: "College Recruitment",
        description: "Learn about the University of Virginia! (Year 3 Project)",
        tech: "JavaScript/Bootstrap",
        image: "img/uva.png",
        url: "https://zlevin1228.github.io/College-Recruitment/"
    },
    {
        title: "Trunk or Treat",
        description: "Check out a website made for the 2024 Trunk or Treat! (Year 3 Project)",
        tech: "jQuery",
        image: "img/trunkortreat.png",
        url: "https://zlevin1228.github.io/Trunk-Or-Treat/"
    },
    {
        title: "My Top 10 Favorite Songs Of All Time",
        description: "Check out my favorite songs ever! (Year 3 Project)",
        tech: "jQuery/JSON",
        image: "img/slideshow.png",
        url: "https://zlevin1228.github.io/NJIT-Slideshow/"
    },
    {
        title: "Web Design Program",
        description: "A website about the Web Program, with Randy K, Issac E, Ayat S, Matt P, & Sophie H (Year 3 Project)",
        tech: "JS/jQuery/Vue.js",
        image: "img/wdpp.png",
        url: "https://zlevin1228.github.io/WebDesign/"
    },
    {
        title: "Seth A. Levin CPA",
        description: "A website for my father's business, Seth A. Levin CPA. (Year 3 Project)",
        tech: "Vue.js/PHP",
        image: "img/sethalevincpa.png",
        url: "https://www.sethalevincpa.com/"
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
    const target = document.getElementById('app');
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });

  AOS.init({
    duration: 800,
    easing: 'ease-in-out',
    once: true,
    offset: 100
});

// Add some interactive hover effects
document.querySelectorAll('.video-card').forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-15px) scale(1.02)';
    });
    
    card.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0) scale(1)';
    });
});

// Optional: Add click-to-focus functionality
document.querySelectorAll('.video-iframe').forEach(iframe => {
    iframe.addEventListener('click', function() {
        this.style.transform = 'scale(1.05)';
        setTimeout(() => {
            this.style.transform = 'scale(1)';
        }, 200);
    });
});
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
// --- DATA CONSTANTS (All data is self-contained for the single-file mandate) ---
const SITE_NAME = "King Kastrioti: The Albanian Legend";
const SUBTITLE = "The Life and Legacy of Gjergj Kastrioti (Skanderbeg)";
const MAX_PERIOD = 5; // Total number of key timeline periods

// Placeholder URL for a historical image (The Albanian Eagle Flag)
const LANDING_IMAGE_URL = 'https://images.kingkastrioti.com/albanian_eagle_flag.jpg';

// Historical Timeline Data (Replacing SIRACH_TEXT and SIRACH_TITLES)
const TIMELINE_DATA = {
    1: {
        title: "The Kastrioti Family and Early Life (1405–1428)",
        subtitle: "Birth, noble origins, and hostage to the Ottoman Sultan.",
        content: [
            "Gjergj Kastrioti was born into the noble Kastrioti family in the Principality of Kastrioti (modern Albania). His father, Gjon Kastrioti, was an autonomous prince.",
            "As was common practice among Ottoman vassal states, Gjergj was sent to the Ottoman court as a hostage along with his brothers to ensure Gjon's loyalty.",
            "There, he was converted to Islam and enrolled in the military academy, receiving the name Iskander (after Alexander the Great) and the title Bey, resulting in 'Iskander Bey' or Skanderbeg."
        ]
    },
    2: {
        title: "Ottoman Military Service (1428–1443)",
        subtitle: "The rise of Skanderbeg as an Ottoman commander.",
        content: [
            "Skanderbeg rose quickly through the ranks, distinguishing himself as a brilliant military commander in Ottoman campaigns across the Balkans and Asia Minor.",
            "He gained a reputation for tactical genius and fierce bravery, commanding thousands of soldiers under the Sultan Murad II.",
            "Despite his success, his loyalties were conflicted, and he secretly maintained his Christian faith and his connection to his Albanian homeland."
        ]
    },
    3: {
        title: "The Revolt and the League of Lezhë (1443–1450)",
        subtitle: "Betrayal of the Sultan and the formation of the Albanian confederation.",
        content: [
            "In November 1443, during the Battle of Niš, Skanderbeg saw his opportunity. He defected from the Ottoman ranks and returned to Albania.",
            "Using a forged letter from the Sultan, he gained control of the fortress of Krujë, raising the Kastrioti flag (a black double-headed eagle on a red field) and declaring his independence.",
            "In 1444, he organized the Albanian nobles into the League of Lezhë, a military and political confederation that became the first unified Albanian state."
        ]
    },
    4: {
        title: "Defending Krujë and Military Victories (1450–1466)",
        subtitle: "Twenty-five years of unrelenting resistance against three Ottoman sieges.",
        content: [
            "Skanderbeg became the central figure in the Christian resistance against the Ottoman Empire, earning the title 'Athlete of Christ' from the Papacy.",
            "He mastered mountain warfare, using small, mobile forces to ambush and defeat massive Ottoman armies, most famously during the first Siege of Krujë in 1450.",
            "His tactical brilliance and ability to consistently defeat much larger forces cemented his legend across Europe and tied up significant Ottoman resources."
        ]
    },
    5: {
        title: "Death and Enduring Legacy (1468–Present)",
        subtitle: "The final battle, his death, and his role in national identity.",
        content: [
            "Skanderbeg died of natural causes (likely malaria) in Lezhë in January 1468. His death was a massive blow to the Albanian resistance.",
            "Although the Ottomans eventually captured Krujë a decade later, Skanderbeg's 25-year struggle bought crucial time for Western Europe and prevented the Ottomans from fully consolidating their forces.",
            "Today, Gjergj Kastrioti Skanderbeg is the undisputed national hero of Albania, celebrated in art, literature, and history as a symbol of resistance, unity, and independence."
        ]
    }
};

// Popular Facts/Quotes
const POPULAR_FACTS = {
    quote: {
        title: "The Words of the Lion",
        icon: '&#x275D;', // Quote icon
        facts: [
            {
                period: 4,
                fact_id: 1,
                context: "On the meaning of freedom.",
                text: "I have not been the one to bring you freedom, but found it here, among you."
            },
            {
                period: 3,
                fact_id: 2,
                context: "On his return to Albania.",
                text: "I do not seek a place among the greatest of our time; I seek only to be counted among the faithful defenders of my people."
            },
            {
                period: 4,
                fact_id: 3,
                context: "On fighting for faith and nation.",
                text: "Freedom is not a gift, but a perpetual struggle."
            }
        ]
    },
    key_facts: {
        title: "Key Historical Milestones",
        icon: '&#x269C;', // Shield/Emblem icon
        facts: [
            {
                period: 3,
                fact_id: 4,
                context: "The formation of the League.",
                text: "Skanderbeg forged the League of Lezhë in 1444, unifying otherwise fractured Albanian principalities."
            },
            {
                period: 4,
                fact_id: 5,
                context: "A significant military feat.",
                text: "He won 22 out of 25 battles against the largest empire of his time, primarily through guerrilla tactics."
            },
            {
                period: 5,
                fact_id: 6,
                context: "His epithet.",
                text: "Pope Calixtus III conferred upon him the title *Athleta Christi* (Athlete of Christ) for his defense of Christendom."
            }
        ]
    }
};


// --- Shared CSS for a modern, elegant look (Red/Black/Gold Theme) ---
const BASE_CSS = `
    /* Load EB Garamond (classical) and Inter (UI) */
    @import url('https://fonts.googleapis.com/css2?family=EB+Garamond:ital,wght@0,400;0,600;0,700;1,400;1,700&family=Inter:wght@400;600;700&display=swap');
    
    :root {
        --primary-accent: #AA0000; /* Deep Albanian Red */
        --secondary-accent: #D4AF37; /* Gold/Bronze */
        --primary-text: #222222; /* Near Black */
        --secondary-text: #666666; /* Muted Gray */
        --bg-light: #F9F9F9;
        --bg-cream: #ffffff; /* Card Background */
        --shadow-elevation-1: 0 4px 10px rgba(0, 0, 0, 0.1);
    }

    * {
        box-sizing: border-box;
    }

    body { 
        font-family: 'EB Garamond', serif; 
        margin: 0; 
        line-height: 1.7;
        display: flex;
        flex-direction: column;
        min-height: 100vh;
        scroll-behavior: smooth;
        
        /* Global Background Image with dark overlay for a heroic feel */
        background-color: var(--primary-text);
        background-image: linear-gradient(rgba(34, 34, 34, 0.9), rgba(34, 34, 34, 0.9)), url('${LANDING_IMAGE_URL}');
        background-size: cover;
        background-position: center;
        background-attachment: fixed;
        color: white; 
    }
    
    /* Global Container */
    .container {
        max-width: 1000px;
        margin: 0 auto;
        padding: 0 24px;
        width: 100%;
    }

    /* --- Header Style --- */
    header {
        background-color: var(--primary-text);
        color: white;
        padding: 15px 0;
        box-shadow: 0 2px 8px rgba(0, 0, 0, 0.3);
        text-align: center;
        width: 100%;
        position: fixed; 
        top: 0;
        z-index: 1000;
    }
    header h1 {
        margin: 0;
        font-size: 1.8em;
        font-weight: 700; 
        font-family: 'EB Garamond', serif;
    }
    header a {
        color: white;
        text-decoration: none;
    }

    /* --- Main Content Layout --- */
    main {
        flex-grow: 1;
        width: 100%;
        padding-top: 80px; 
    }
    
    /* Base Card Style - Must be opaque with dark text */
    .card {
        background: var(--bg-cream);
        padding: 30px;
        border-radius: 12px;
        box-shadow: var(--shadow-elevation-1);
        margin-bottom: 40px;
        color: var(--primary-text); 
    }
    
    /* Shared Titles */
    h2, h3 {
        font-family: 'EB Garamond', serif;
        color: var(--primary-text);
        font-weight: 700;
    }

    /* --- Period/Fact Styles --- */
    .period-title {
        font-size: 2.2em;
        margin-top: 0;
        margin-bottom: 25px;
        border-bottom: 3px solid var(--primary-accent);
        padding-bottom: 10px;
        text-align: center;
        font-family: 'EB Garamond', serif;
        font-weight: 700;
    }
    .period-subtitle {
        text-align: center;
        font-style: italic;
        color: var(--secondary-accent);
        margin-top: -15px;
        margin-bottom: 30px;
    }
    .fact-number {
        font-weight: 700;
        color: var(--secondary-accent); /* Gold accent for numbers */
        margin-right: 10px;
        font-size: 1.2em;
        display: inline-block;
        min-width: 25px;
    }
    .verse-paragraph { /* Reused for long-form period content */
        margin-bottom: 1.5em;
        padding-bottom: 1.5em;
        border-bottom: 1px dashed #e0e0e0;
        font-family: 'EB Garamond', serif; 
        font-size: 1.4em; 
        text-align: justify;
    }
    .verse-paragraph:last-child {
        border-bottom: none;
        margin-bottom: 0;
    }
    
    /* --- Timeline Navigation Styles --- */
    .timeline-navigation {
        display: flex;
        justify-content: space-between;
        gap: 15px;
        margin-bottom: 30px;
        padding: 10px 0;
    }
    .nav-btn {
        display: inline-block;
        padding: 12px 15px;
        background-color: var(--primary-accent);
        color: white;
        text-decoration: none;
        border-radius: 8px;
        font-weight: 600;
        transition: all 0.2s ease;
        flex-grow: 1;
        text-align: center;
        border: none;
        box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        font-family: 'Inter', sans-serif;
    }
    .nav-btn:hover:not(.disabled) {
        background-color: #880000; /* Darker Red */
        transform: translateY(-2px);
        box-shadow: 0 6px 10px rgba(0, 0, 0, 0.2);
    }
    .nav-btn.disabled {
        background-color: #ccc;
        color: #888;
        pointer-events: none;
        cursor: not-allowed;
        opacity: 0.7;
        box-shadow: none;
    }
    
    /* --- Timeline Grid Styles (for Landing Page) --- */
    .chapter-grid-container {
        padding: 40px 30px;
        text-align: center;
    }
    .chapter-grid-container h3 {
        font-size: 2em;
        margin-bottom: 30px;
    }
    .chapter-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
        gap: 15px;
    }
    .chapter-link {
        padding: 15px 10px;
        background-color: var(--bg-light);
        color: var(--primary-text);
        border: 2px solid var(--secondary-accent);
        font-weight: 700;
        border-radius: 8px;
        text-decoration: none;
        display: flex;
        justify-content: center;
        align-items: center;
        transition: all 0.2s ease;
        font-family: 'Inter', sans-serif;
        text-align: center;
    }
    .chapter-link:hover {
        background-color: var(--secondary-accent); /* Gold hover effect */
        color: var(--primary-text);
        border-color: var(--primary-text);
        transform: translateY(-2px);
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    }

    /* --- Landing Specific Styles --- */
    .hero-wrapper {
        padding-top: 80px;
        margin-bottom: 50px;
        color: white; 
        min-height: 450px; 
        display: flex;
        align-items: center;
        justify-content: center;
    }
    
    .landing-card {
        text-align: center;
        max-width: 800px;
        margin: 0 auto;
        padding: 40px;
        background: rgba(255, 255, 255, 0.95);
        border-radius: 12px;
        box-shadow: 0 8px 25px rgba(0, 0, 0, 0.3);
        color: var(--primary-text);
        border-top: 5px solid var(--primary-accent);
    }
    .landing-card h2 {
        font-size: 3.5em;
        color: var(--primary-accent);
        margin-bottom: 5px;
        font-family: 'EB Garamond', serif;
    }
    .landing-card p.subtitle {
        font-size: 1.4em;
        color: var(--secondary-accent); /* Gold subtitle */
        font-weight: 600;
        margin-top: 0;
        margin-bottom: 30px;
    }
    
    .start-reading-btn {
        display: inline-block;
        background-color: var(--primary-accent);
        color: white;
        padding: 15px 30px;
        border-radius: 8px;
        text-decoration: none;
        font-weight: 700;
        transition: all 0.3s ease;
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
        font-family: 'Inter', sans-serif;
    }
    .start-reading-btn:hover {
        background-color: #880000; 
        transform: translateY(-2px);
    }
    
    /* Fact Cards Grid */
    .theme-grid-container {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
        gap: 30px;
        margin-top: 50px;
    }
    .theme-card {
        padding: 30px;
        border-left: 5px solid var(--secondary-accent); /* Gold border accent */
    }
    .fact-entry {
        margin-bottom: 15px;
        padding-bottom: 15px;
        border-bottom: 1px dotted #e0e0e0;
    }
    .fact-entry:last-child {
        border-bottom: none;
    }
    .fact-text-content {
        font-style: italic;
        color: var(--secondary-text);
        margin-top: 5px;
        font-size: 1.2em;
        font-family: 'EB Garamond', serif;
    }
    .fact-ref-link {
        color: var(--primary-accent);
        font-weight: 600;
        text-decoration: none;
        border-bottom: 1px dashed var(--primary-accent);
        transition: color 0.2s;
    }
    .fact-ref-link:hover {
        color: var(--primary-text);
    }

    /* --- Footer Style --- */
    footer {
        background-color: var(--primary-text);
        color: #ffffffa0;
        padding: 30px 24px;
        margin-top: 50px;
        text-align: center;
        font-size: 0.9em;
        font-family: 'Inter', sans-serif;
    }
    footer p {
        margin: 5px 0;
    }
    .footer-links {
        margin-bottom: 15px;
        padding-bottom: 10px;
        border-bottom: 1px solid #ffffff30;
    }
    .footer-links a {
        color: #fff;
        text-decoration: none;
        margin: 0 15px;
        font-weight: 600;
        transition: color 0.2s;
        display: inline-block;
        padding: 5px 0;
    }
    .footer-links a:hover {
        color: var(--secondary-accent);
    }

    /* Mobile Adjustments */
    @media (max-width: 600px) {
        .chapter-grid {
            grid-template-columns: repeat(2, 1fr);
        }
        .landing-card h2 { font-size: 2.2em; }
        .nav-btn { flex-grow: 0; }
        .timeline-navigation { flex-direction: column; }
        .footer-links a {
            display: block;
            margin: 5px 0;
        }
    }
`;


// --- Reusable Footer Block ---
function getFooterHtml() {
    return `
        <footer>
            <div class="footer-links">
                <a href="/privacy" title="Read our Privacy Policy">Privacy Policy</a>
                <a href="/about" title="Learn more About Us">About Skanderbeg</a>
                <a href="/contact" title="Contact the site administrator">Contact Us</a>
            </div>
            <p>&copy; ${new Date().getFullYear()} KingKastrioti.com. All rights reserved. Glory to the Eagle.</p>
        </footer>
    `;
}

/**
 * Generates the full timeline period grid HTML block.
 * @returns {string} The HTML for the timeline period index.
 */
function generateTimelineGridHtml() {
    let timelineGridHtml = '';
    for (let i = 1; i <= MAX_PERIOD; i++) {
        const period = TIMELINE_DATA[i];
        if (period) {
            timelineGridHtml += `<a href="/timeline/${i}" class="chapter-link" title="${period.title}">${i}. ${period.subtitle.split(' ')[0]}</a>`;
        }
    }
    return `
        <div class="chapter-grid-container card">
            <h3>Explore the Timeline (${MAX_PERIOD} Key Periods)</h3>
            <p style="margin-bottom: 25px; color: var(--secondary-text); font-family: 'Inter', sans-serif;">Click on a period to read the full biography.</p>
            <div class="chapter-grid">
                ${timelineGridHtml}
            </div>
        </div>
    `;
}


// --- 1. LANDING PAGE HTML Generator ---
function generateLandingPageHTML() {
    let factsHtml = '';

    // Generate HTML for the thematic fact sections
    for (const key in POPULAR_FACTS) {
        const theme = POPULAR_FACTS[key];
        let themeFactsHtml = '';

        theme.facts.forEach(ref => {
            const periodTitle = TIMELINE_DATA[ref.period]?.title || `Period ${ref.period}`;
            themeFactsHtml += `
                <div class="fact-entry">
                    <p class="fact-reference">
                        <a href="/timeline/${ref.period}" class="fact-ref-link" title="Go to ${periodTitle}">
                            ${periodTitle}
                        </a>
                        <span class="verse-context">— ${ref.context}</span>
                    </p>
                    <p class="fact-text-content">${ref.text}</p>
                </div>
            `;
        });

        factsHtml += `
            <div class="card theme-card">
                <h3 class="theme-title">${theme.icon} ${theme.title}</h3>
                <div class="fact-list">
                    ${themeFactsHtml}
                </div>
            </div>
        `;
    }
    
    // Generate the timeline grid
    const timelineGrid = generateTimelineGridHtml();

    return `
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>${SITE_NAME}</title>
            <style>
                ${BASE_CSS}
                /* Landing specific style overrides */
                main { padding-top: 0; }
            </style>
        </head>
        <body>
            <header style="position: sticky;">
                <div class="container">
                    <h1><a href="/" title="Go to Home">${SITE_NAME}</a></h1>
                </div>
            </header>

            <main>
                <!-- Hero Wrapper takes up the header slack -->
                <div class="hero-wrapper">
                    <div class="container">
                        <div class="landing-card">
                            <h2>${SITE_NAME}</h2>
                            <p class="subtitle">${SUBTITLE}</p>
                            
                            <p style="color: var(--primary-text); font-size: 1.1em;">
                                Dive into the definitive biographical timeline of Gjergj Kastrioti, the Albanian national hero who fought against the Ottoman Empire for over two decades.
                            </p>
                            <a href="/timeline/1" class="start-reading-btn">Begin the Timeline &rarr;</a>
                        </div>
                    </div>
                </div>

                <div class="container">
                    ${timelineGrid}

                    <h2 style="text-align: center; margin-bottom: 40px; font-weight: 900; font-size: 2.5em; color: white;">Inspiring Quotes & Key Facts</h2>
                    <div class="theme-grid-container">
                        ${factsHtml}
                    </div>
                </div>
            </main>
            
            ${getFooterHtml()}
        </body>
        </html>
    `;
}


// --- 2. PERIOD (Chapter) PAGE HTML Generator ---
function generatePeriodPageHTML(periodId, periodData) {
    const period = parseInt(periodId);

    // Construct the main title
    const displayTitle = periodData.title;
    
    // Construct the title for the <head> tag
    const headTitle = periodData.title;
    
    let contentHtml = '';
    
    // Calculate navigation links
    const prevPeriod = period > 1 ? period - 1 : null;
    const nextPeriod = period < MAX_PERIOD ? period + 1 : null;

    const navHtml = `
        <div class="timeline-navigation">
            <a href="/timeline/${prevPeriod}" class="nav-btn ${!prevPeriod ? 'disabled' : ''}">
                &larr; Prev. Period
            </a>
            <a href="/" class="nav-btn">
                Home / Index
            </a>
            <a href="/timeline/${nextPeriod}" class="nav-btn ${!nextPeriod ? 'disabled' : ''}">
                Next Period &rarr;
            </a>
        </div>
    `;
    
    // Check if the period data is valid and has content
    if (periodData && periodData.content && periodData.content.length > 0) {
        periodData.content.forEach((paragraph, index) => {
            contentHtml += `
                <p class="verse-paragraph">
                    <span class="fact-number">${index + 1}.</span> ${paragraph}
                </p>
            `;
        });
    } else {
        contentHtml = `<p>Timeline period ${period} is found, but the detailed content is currently unavailable.</p>`;
    }

    return `
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>${headTitle} - ${SITE_NAME}</title>
            <style>
                ${BASE_CSS}
                .period-content-card {
                    padding: 40px;
                }
            </style>
        </head>
        <body>
            <header>
                <div class="container">
                    <h1><a href="/" title="Go to Home">${SITE_NAME}</a></h1>
                </div>
            </header>

            <main>
                <div class="container">
                    <div class="card period-content-card">
                        <h2 class="period-title">${displayTitle}</h2>
                        <h3 class="period-subtitle">${periodData.subtitle}</h3>
                        
                        ${navHtml}

                        ${contentHtml}
                        
                        ${navHtml}
                    </div>
                </div>
            </main>
            
            ${getFooterHtml()}
        </body>
        </html>
    `;
}


// --- 3. SIMPLE CONTENT PAGE HTML Generator ---
/**
 * Generates a generic page for static content (Privacy, About, Contact).
 */
function generateSimpleContentPage(pageTitle, contentHtml, statusCode = 200) {
    const title = `${pageTitle} - ${SITE_NAME}`;
    
    return `
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>${title}</title>
            <style>
                ${BASE_CSS}
                .simple-content-card {
                    padding: 40px;
                }
                .simple-content-card p {
                    font-size: 1.3em;
                    margin-bottom: 20px;
                }
            </style>
        </head>
        <body>
            <header>
                <div class="container">
                    <h1><a href="/" title="Go to Home">${SITE_NAME}</a></h1>
                </div>
            </header>

            <main>
                <div class="container">
                    <div class="card simple-content-card">
                        <h2 class="period-title">${pageTitle}</h2>
                        ${contentHtml}
                    </div>
                </div>
            </main>
            
            ${getFooterHtml()}
        </body>
        </html>
    `;
}


// --- 4. WORKER FETCH HANDLER ---
// The Worker-like fetch logic determines which page to render based on the URL.
export default {
    async fetch(request, env, ctx) {
        const url = new URL(request.url);
        
        // Remove leading/trailing slashes for easier path processing
        const pathname = url.pathname.replace(/^\/|\/$/g, ''); 
        
        let htmlContent;
        let status = 200;

        // 1. Landing Page Logic
        if (pathname === '' || pathname === 'index.html') {
            htmlContent = generateLandingPageHTML();
        } 
        
        // 2. Simple Static Pages Logic
        else if (pathname === 'privacy' || pathname === 'about' || pathname === 'contact') {
            let pageTitle = '';
            let contentHtml = '';

            if (pathname === 'privacy') {
                pageTitle = 'Privacy Policy';
                contentHtml = `
                    <p>This website respects your privacy. No user tracking is performed by us. All content is freely accessible.</p>
                    <p>No personal data is collected, stored, or shared by this service.</p>
                    <p><strong>Last updated: ${new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</strong></p>
                `;
            } else if (pathname === 'about') {
                pageTitle = `About Gjergj Kastrioti (Skanderbeg)`;
                contentHtml = `
                    <p>Gjergj Kastrioti (c. 1405 – 1468), widely known as Skanderbeg, was an Albanian nobleman and military commander who served as a symbol of resistance against the expansion of the Ottoman Empire in the Balkans.</p>
                    <p>He is considered the National Hero of Albania for his ability to unite the principalities of Albania and lead a successful rebellion for 25 years. This site aims to honor his legacy by providing a clear timeline of his life and achievements.</p>
                `;
            } else if (pathname === 'contact') {
                pageTitle = 'Contact Us';
                contentHtml = `
                    <p>If you have questions, feedback, or need to report an error in the historical content, please feel free to reach out to the site administrator.</p>
                    <p><strong>Email:</strong> admin@kingkastrioti.com</p>
                    <p>We appreciate your input in maintaining the accuracy and quality of this historical resource.</p>
                `;
            }
            htmlContent = generateSimpleContentPage(pageTitle, contentHtml);
        }

        // 3. Routing Logic for Timeline Periods: /timeline/{id}
        else if (pathname.startsWith('timeline/')) {
            const parts = pathname.split('/').filter(Boolean);
            
            if (parts.length === 2 && parts[0] === 'timeline') {
                const periodId = parseInt(parts[1]);
                const periodData = TIMELINE_DATA[periodId];
                const isValidPeriod = !isNaN(periodId) && periodData && periodId >= 1 && periodId <= MAX_PERIOD;

                if (isValidPeriod) {
                    htmlContent = generatePeriodPageHTML(periodId, periodData);
                } else {
                    // Invalid period ID
                    status = 404;
                    htmlContent = generateSimpleContentPage('404 Not Found', `<p>The requested timeline period (ID: ${periodId}) does not exist. Please check the index on the <a href="/">homepage</a>.</p>`, 404);
                }
            } else {
                // Malformed path like /timeline/
                status = 404;
                htmlContent = generateSimpleContentPage('404 Not Found', `<p>Invalid URL format for the timeline. Please specify a period ID, or visit the <a href="/">homepage</a>.</p>`, 404);
            }
        }
        
        // 4. Default 404 for unknown paths
        else {
            status = 404;
            htmlContent = generateSimpleContentPage('404 Not Found', `<p>The page you requested could not be found on KingKastrioti.com. Please return to the <a href="/">homepage</a>.</p>`, 404);
        }


        return new Response(htmlContent, {
            headers: {
                'Content-Type': 'text/html',
            },
            status: status
        });
    },
};

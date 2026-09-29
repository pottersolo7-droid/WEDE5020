# PP Fitness Institute - Website Sitemap & Information Architecture

## Visual Sitemap

```
┌─────────────────────────────────────────────────────────────────────┐
│                      www.ppfitness.com                              │
│                    (PP Fitness Institute)                           │
└─────────────────────────────────────────────────────────────────────┘
                                  │
                    ┌─────────────┼─────────────┐
                    │             │             │
          ┌─────────▼─────────┐   │   ┌─────────▼──────────┐
          │  Primary Content  │   │   │  Secondary Content │
          └───────────────────┘   │   └────────────────────┘
                    │             │             │
        ┌───────────┼──────────┐  │      ┌──────┼────────┬──────────┐
        │           │          │  │      │      │        │          │
    ┌───▼──┐  ┌────▼───┐  ┌──▼──▼┐ ┌──▼──┐ ┌──▼──┐ ┌──▼──┐  ┌─────▼────┐
    │Home  │  │ About  │  │Prog  │ │Enq  │ │Copy │ │Priv │  │ 404 Page │
    │(/)   │  │(/about)│  │(/pro)│ │(/eq)│ │(txt)│ │(--) │  │(default) │
    └──────┘  └────────┘  └──────┘ └─────┘ └─────┘ └─────┘  └──────────┘
        ▲           ▲         ▲      ▲      ▲
        │           │         │      │      │
        └───────────┼─────────┴──────┴──────┘
              Navigation Menu (All Pages)
```

## Hierarchical Structure

### Level 1: Root
- **Domain:** www.ppfitness.com (to be deployed)
- **Default Page:** index.html

### Level 2: Primary Content Pages

#### 1. **Homepage** (`index.html`)
   - **Purpose:** Landing page, first impression
   - **Key Content:**
     - Hero banner with gym imagery
     - Mission statement
     - Core programmes overview (3 cards)
     - Call-to-action: "Book Free Trial"
     - Quick navigation to other sections
   - **Inbound Links:** Navigation menu (all pages), hero CTA
   - **Outbound Links:** All other pages via navigation

#### 2. **About Us** (`about_us.html`)
   - **Purpose:** Build credibility and trust
   - **Key Content:**
     - Company history
     - Founder biography
     - Mission & vision statements
     - Founder photo
     - Values and principles
   - **Inbound Links:** Navigation menu, homepage
   - **Outbound Links:** Programmes page, contact page

#### 3. **Programmes** (`programmes.html`)
   - **Purpose:** Detail offerings and pricing
   - **Key Content:**
     - MMA training (3 pricing tiers)
     - Specialized boxing (2 tiers)
     - Strength & conditioning (3 options)
     - Kids programmes (3 options)
     - Search/filter functionality
   - **Inbound Links:** Navigation, homepage CTA, enquiry form
   - **Outbound Links:** Enquiry page, contact page

#### 4. **Enquiry** (`enquiry.html`)
   - **Purpose:** Capture leads
   - **Key Content:**
     - Contact form
     - Programme selection dropdown
     - Personal information fields
     - Message textarea
   - **Inbound Links:** Navigation, CTA buttons, programmes page
   - **Outbound Links:** Contact page for additional info

#### 5. **Contact** (`contact_us.html`)
   - **Purpose:** Provide contact details and location
   - **Key Content:**
     - Physical address
     - Phone number
     - Email address
     - Embedded Google Map
     - Contact form
   - **Inbound Links:** Navigation, programmes, about pages
     - Outbound Links:** Enquiry page, social media

### Level 3: Supporting Files

#### SEO/Technical Files
- **robots.txt** - Search engine crawler directives
- **sitemap.xml** - XML site map for indexing
- **PROPOSAL_1_PP_Fitness_Institute.html** - Project proposal (documentation)
- **PROPOSAL_2_TechHub_Solutions.html** - Alternative proposal
- **WIREFRAMES_PP_Fitness.html** - Low-fidelity wireframes
- **README.md** - Project documentation

#### Resources
- **css_assets/style.css** - Main stylesheet
- **js_assets/script.js** - JavaScript functionality
- **images/** - Image directory
  - logo.png
  - gym.png
  - potego.jpg

#### Private/Excluded
- **private/** - Directory excluded from search engines

---

## Navigation Structure

### Global Navigation (All Pages)
```
Home | About Us | Programmes | Enquiry | Contact
```

Each link is present in the header on every page, enabling easy movement between sections.

### Internal Links

**Homepage Links to:**
- About Us (via "Learn More")
- Programmes (via "Core Programmes" section)
- Enquiry (via "Book Free Trial" CTA)
- Contact (via footer)

**About Us Links to:**
- Home (via navigation)
- Programmes (contextual link about training)
- Enquiry (via contact suggestion)
- Contact (via footer)

**Programmes Links to:**
- Enquiry (via "Enquire" CTA)
- Home (via breadcrumb)
- Contact (for pricing questions)

**Enquiry Links to:**
- Programmes (for detailed info)
- Contact (alternative contact methods)
- Home (via navigation)

**Contact Links to:**
- Enquiry (form submission)
- Programmes (pricing/details)
- Home (logo click)

---

## Link Depth Analysis

### Depth 0 (Home Page)
- index.html

### Depth 1 (Directly accessible from home)
- about_us.html
- programmes.html
- enquiry.html
- contact_us.html

### Depth 2+ (Not applicable)
- All primary content is at depth 1 for optimal SEO
- No deep nesting of pages

---

## Content Hierarchy

### H1 Tags (One per page)
- Homepage: "PP Fitness Institute"
- About Us: "About Us"
- Programmes: "Our Programmes & Pricing"
- Enquiry: "Membership Enquiry"
- Contact: "Contact Us"

### H2 Tags (Section Headers)
- Programme categories
- Form sections
- Contact information grouping

### H3 Tags (Subsections)
- Individual programme details
- Pricing tiers
- Form field labels

---

## Internal Linking Strategy

### SEO-Optimized Links
- **Anchor Text:** Descriptive, keyword-rich
- **Location:** Natural placement in content
- **Frequency:** Balanced (not excessive)
- **Relevance:** Links point to related content

### Example Internal Links
```
"Browse our [MMA training programmes](programmes.html)" 
→ Links to Programmes page with keyword anchor

"[Enquire about your free trial](enquiry.html)"
→ Links to Enquiry page with CTA anchor

"Our [mission and vision](about_us.html)"
→ Links to About page with context
```

---

## Mobile Navigation

### Desktop Navigation (800px+)
- Horizontal menu bar
- All pages visible
- Navigation in header

### Tablet Navigation (768px-799px)
- Horizontal menu with adjusted spacing
- Same structure as desktop

### Mobile Navigation (<768px)
- Hamburger menu toggle
- Vertical stack navigation
- Mobile menu button in header
- Responsive expansion/collapse

---

## URL Structure

### Current (Development)
```
file:///path/to/WEDE5020/index.html
file:///path/to/WEDE5020/about_us.html
file:///path/to/WEDE5020/programmes.html
file:///path/to/WEDE5020/enquiry.html
file:///path/to/WEDE5020/contact_us.html
```

### Post-Deployment (Production)
```
https://ppfitness.com/
https://ppfitness.com/about/
https://ppfitness.com/programmes/
https://ppfitness.com/enquiry/
https://ppfitness.com/contact/
```

### Clean URLs
- No file extensions (.html)
- No query parameters
- Lowercase, hyphenated paths
- Descriptive, SEO-friendly

---

## Information Architecture Principles

### Applied Principles

1. **Clarity**
   - Clear page purposes
   - Obvious navigation
   - Logical grouping

2. **Consistency**
   - Same navigation on all pages
   - Consistent layout
   - Unified visual design

3. **Completeness**
   - All necessary information present
   - No dead ends
   - Clear calls-to-action

4. **Usability**
   - Deep links (1 click from home)
   - Fast load times
   - Mobile optimized

5. **Discoverability**
   - SEO optimized
   - Sitemap provided
   - Robots.txt configured

---

## Sitemap.xml Structure

```xml
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    <url>
        <loc>https://ppfitness.com/</loc>
        <changefreq>weekly</changefreq>
        <priority>1.0</priority>
    </url>
    <url>
        <loc>https://ppfitness.com/about/</loc>
        <changefreq>monthly</changefreq>
        <priority>0.8</priority>
    </url>
    <url>
        <loc>https://ppfitness.com/programmes/</loc>
        <changefreq>weekly</changefreq>
        <priority>0.9</priority>
    </url>
    <url>
        <loc>https://ppfitness.com/enquiry/</loc>
        <changefreq>monthly</changefreq>
        <priority>0.8</priority>
    </url>
    <url>
        <loc>https://ppfitness.com/contact/</loc>
        <changefreq>monthly</changefreq>
        <priority>0.8</priority>
    </url>
</urlset>
```

---

## SEO Considerations

### Implemented
-  Descriptive page titles
-  Meta descriptions
-  Proper heading hierarchy
-  Internal linking
-  Clean URL structure
-  Mobile responsiveness
-  Sitemap
-  Robots.txt

### Best Practices
- Each page has unique focus keyword
- Links use descriptive anchor text
- Content is well-organized
- Navigation is intuitive
- Site structure is flat (all pages 1 level deep)

---

## Conclusion

The PP Fitness Institute website follows industry-standard information architecture principles with:
- Clear, logical hierarchy
- Intuitive navigation
- SEO-optimized structure
- Mobile-friendly design
- Proper internal linking
- Search engine optimization

This structure facilitates user navigation and search engine indexing while maintaining site authority through strategic internal linking.

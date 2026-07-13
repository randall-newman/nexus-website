# Nexus AI Website Structure and SEO Content Plan

A complete sitemap for mynexusai.com with the SEO targeting and content brief for every page. Built to brief designers, writers and developers from a single source of truth.

## How to use this document

Each page entry follows the same template:

- **URL** the recommended path
- **Search intent** what the visitor is trying to do when they land here
- **Primary keyword** the one term this page is built to rank for
- **Secondary keywords** supporting terms to weave into headings and body copy
- **Title tag** the `<title>` element, kept under 60 characters where possible
- **Meta description** the search snippet, kept under 155 characters
- **H1** the on-page headline, distinct from the title tag
- **Content brief** the sections and arguments the page must contain
- **Internal links** the other pages this page should link to, and why
- **Primary CTA** the single action the page is built to drive

Pages are grouped into the same eleven sections as the navigation, in the order they appear in the main menu. A full sitemap tree is below, followed by the detailed brief for every page.

## Site-wide SEO foundations

Before the page-by-page plan, four decisions apply across the whole site:

1. **URL structure.** Flat and descriptive: `/features/ai-file-chat`, `/products/code`, `/pricing/team`. Avoid date stamps, avoid stacking more than two folder levels, avoid parameters in indexable URLs.
2. **Title tag pattern.** `Primary Keyword | Nexus AI` on feature and product pages; `Nexus AI | One-line value statement` on the homepage; `Page Name | Nexus AI` on utility pages (legal, status, changelog).
3. **Schema markup.** `Organization` and `SoftwareApplication` on the homepage, `Product` schema on Pricing and Products pages, `FAQPage` schema on any page carrying an FAQ block, `Article` schema on Blog posts, `BreadcrumbList` site-wide once the folder depth exceeds one level.
4. **Cannibalisation control.** Several pages target adjacent terms (for example, AI Essay Writer and Academic Research, or Chat and AI File Chat). Each entry below names the one primary keyword that page owns so two pages never compete for the same query.

## Full sitemap tree

```
/                                   Homepage
/about                              About Us
/downloads                          Downloads (hub)
  /downloads/mobile                 Mobile App: Android, iOS
  /downloads/linux                  Linux
  /downloads/windows                Windows
  /downloads/mac                    Apple / Mac
  /downloads/huawei                 Huawei AppGallery
  /downloads/browser-extension      Browser Extension (Chromium)
/pricing                            Pricing (hub: Free, Premium, Ultimate, Business, Education, Enterprise)
  /pricing/team                     Team plan
  /pricing/add-ons                  Add-ons (Creative Studio top-ups, Meeting Notes)
  /pricing/chatbot                  Chatbot add-on
/features                           Features / Use Cases (hub)
  /features/academic-research       Academic Research
  /features/ai-image-generator      AI Image Generator
  /features/ai-plagiarism-checker   AI Plagiarism Checker
  /features/ai-audio-generator      AI Audio Generator
  /features/ai-presentation-maker   AI Presentation / Slides
  /features/ai-file-chat            AI File Chat
  /features/ai-meeting-notes        AI Note Taking / Meeting Notes
  /features/ai-memory               AI Memory
  /features/skills                  Skills
  /features/canvas                  Canvas
  /features/ai-essay-writer         AI Essay Writer
  /features/microsoft-365           Nexus AI for Microsoft 365
  /features/chrome                  Nexus AI for Chrome
/products                           Products (hub)
  /products/chat                    Chat
  /products/chatbot                 Chatbot
  /products/code                    Code (hub)
    /products/code/agents           Code: Agents
    /products/code/review           Code: Review
    /products/code/cli              Code: CLI
  /products/creative-studio         Creative Studio (hub)
    /products/creative-studio/images     Images
    /products/creative-studio/slides     Slides
    /products/creative-studio/docs       Docs
    /products/creative-studio/video      Video
    /products/creative-studio/audio      Audio
    /products/creative-studio/wireframes Wireframes
  /products/artifacts               Artifacts
/team                                Team / business hub (sales-facing parent)
  /team/features                    Team features
  /team/enterprise                  Enterprise
  /team/pricing                     Team pricing (cross-link to /pricing/team)
  /team/contact-sales                Contact Sales
/reviews                            Reviews / Testimonials
/legal                              Legal (hub)
  /legal/privacy-policy             Privacy Policy
  /legal/terms-of-service           Terms of Service
  /legal/refund-policy              Refund Policy
  /legal/affiliate-policy           Affiliate Policy
  /legal/usage-policy                Usage Policy
  /legal/security                   Security
  /legal/developer-platform-terms   Developer Platform Terms of Service
/affiliates                         Affiliate Program
/resources                          Resources (hub)
  /resources/blog                   Blog
  /resources/changelog              Changelog
  /status                           Status (subdomain candidate: status.mynexusai.com)
  /resources/updates                Update
/developers                         Developer Platform (hub)
  /developers/pricing                Developer Platform Pricing
  /developers/console                Developer Console
  /developers/docs                  Documentation
  /developers/contact-sales          Contact Sales
```

**Notes on structure decisions:**

- **Team vs Pricing/Team.** The `/team` section is the sales-facing destination for buying committees (a short hub explaining the business motion); `/pricing/team` is the transactional page with the actual seat price. They cross-link rather than duplicate content, so they do not compete for the same keyword.
- **Code and Creative Studio as sub-hubs.** Both have enough standalone search demand (`AI code review`, `AI video generator`) to justify child pages rather than anchor sections on one long page. This also lets each child page own a single keyword.
- **Status as a subdomain.** Status pages perform better operationally on `status.mynexusai.com` (separate uptime, no shared dependency if the main site is down), but the content brief is included here regardless of host.
- **Developer Platform kept separate from Products.** Developers searching for an API are a distinct intent from consumers searching for a chatbot; keeping the section separate avoids diluting either audience's experience.
## Homepage

**URL:** `/`
**Search intent:** Mixed. Branded searches ("Nexus AI") looking to confirm they have found the right product, and a smaller volume of unbranded category searches ("AI workspace", "AI productivity platform") that land here if the brand has enough authority.
**Primary keyword:** Nexus AI
**Secondary keywords:** AI workspace, AI productivity platform, AI work completion platform, all in one AI tool
**Title tag:** `Nexus AI | The AI Workspace That Finishes Your Work`
**Meta description:** `Research, write, design and code in one AI workspace. Nexus AI turns ideas into finished documents, decks, images and code. Start free.`
**H1:** `One AI workspace. Finished work, not just chat.`

**Content brief:**
- **Hero.** Headline plus subheadline stating the category (AI work-completion platform) and the wedge (research to finished document). Primary CTA "Start free", secondary CTA "Watch a 60-second demo".
- **Social proof strip.** Logos or usage stats immediately below the fold; this is the highest-impact trust signal available and should not be buried.
- **The four pillars, summarised.** One short block each for Chat, Creative Studio, Code and Canvas, each linking through to its `/products/*` page. This is the primary internal-linking hub for the whole Products section.
- **The wedge, demonstrated.** A short animated or static sequence showing upload, file chat, draft, edit in Canvas, export. This is the single most persuasive section on the page.
- **Use cases by audience.** Three to four cards (students, creators, professionals, teams), each linking to the matching `/features/*` page.
- **Downloads strip.** Icon row of available platforms (desktop, mobile, browser extension) linking to `/downloads`.
- **Pricing teaser.** Free, Premium and Ultimate prices shown with a single link through to `/pricing`. Do not duplicate the full pricing table here.
- **Testimonial block.** Two or three short quotes, linking through to `/reviews`.
- **Final CTA band.** Repeat the primary signup CTA before the footer.

**Internal links:** `/products/chat`, `/products/creative-studio`, `/products/code`, `/products/artifacts` (via Canvas mention), `/pricing`, `/downloads`, `/reviews`, `/features` (hub)
**Primary CTA:** Start free (signup)

---

## About Us

**URL:** `/about`
**Search intent:** Trust and verification. Visitors checking who is behind Nexus AI before they pay or before they recommend it to a class, a team or a client; also a target for "who owns Nexus AI" and "is Nexus AI legit" queries.
**Primary keyword:** Nexus AI company / about Nexus AI
**Secondary keywords:** Verbosec, Nexus AI team, AI workspace company
**Title tag:** `About Nexus AI | Built by Verbosec`
**Meta description:** `Nexus AI is built by Verbosec to help students, creators, professionals and teams finish real work with AI. Learn the story and the team.`
**H1:** `We build the place where work gets finished`

**Content brief:**
- **The founding problem.** Why Nexus AI exists: AI chat is everywhere, finished work is not. Two or three short paragraphs, written in plain language, no jargon.
- **Built by Verbosec.** A short credibility block naming Verbosec as the parent company, with a one-line description of Verbosec's broader work, linking out to the corporate site if one exists separately.
- **What we believe.** Three to five short principles (for example: finished work over endless chat, fair and transparent pricing, data privacy by default). Keep each to one sentence; this section is for scannability, not essays.
- **The team.** Leadership photos and one-line bios if the company is comfortable being public-facing; otherwise a short paragraph on team composition and hiring philosophy, with a link to careers if one exists.
- **Milestones.** A short timeline or stat block (launch date, users served, documents created) if numbers are strong enough to be a credibility asset.
- **Press or media mentions**, if any exist, as logos near the bottom.

**Internal links:** `/reviews`, `/affiliates` (careers/partner framing), `/resources/blog`
**Primary CTA:** Start free, secondary link to Careers if applicable
## Downloads (hub)

**URL:** `/downloads`
**Search intent:** Navigational. Existing or near-converted users looking to install Nexus AI on a specific device, usually arriving from an in-app prompt, an email, or a branded search like "Nexus AI download".
**Primary keyword:** Nexus AI download
**Secondary keywords:** Nexus AI app, download Nexus AI
**Title tag:** `Download Nexus AI | Desktop, Mobile and Browser`
**Meta description:** `Get Nexus AI on Mac, Windows, Linux, Android, iOS, Huawei AppGallery or as a Chrome extension. One AI workspace, everywhere you work.`
**H1:** `Nexus AI, wherever you work`

**Content brief:**
- **Platform grid.** Six cards (Mobile, Linux, Windows, Mac, Huawei, Browser Extension), each with its native icon, a one-line description and a direct link to the platform-specific page. This page is a router, not a content page; keep copy minimal.
- **Why download the app.** A short section on the benefit of the native app over the browser (speed, offline drafts, system-level shortcuts, notifications) to justify the click-through.
- **Cross-device continuity.** One section confirming Folders, chat history and Creative Studio assets sync across every platform, addressing the natural "will I lose my work" concern.

**Internal links:** every `/downloads/*` child page, `/products/chat`
**Primary CTA:** Platform-specific download buttons (auto-detect the visitor's OS and highlight that card first)

---

## Mobile App: Android, iOS

**URL:** `/downloads/mobile`
**Search intent:** Direct install intent from a phone, usually via a QR code, SMS link or branded search ("Nexus AI app", "Nexus AI iPhone").
**Primary keyword:** Nexus AI mobile app
**Secondary keywords:** Nexus AI Android app, Nexus AI iOS app, Nexus AI iPhone app
**Title tag:** `Nexus AI Mobile App | Android and iOS`
**Meta description:** `Download Nexus AI for Android and iOS. Chat, research and create on the go, with your Folders and history synced from desktop.`
**H1:** `Nexus AI in your pocket`

**Content brief:**
- App Store and Google Play badges above the fold, auto-detecting the visitor's device where possible.
- Three or four mobile-specific use cases (voice chat on the move, reviewing a document before a meeting, quick image generation) rather than repeating the full feature list.
- Screenshot carousel of the mobile UI.
- A short FAQ: minimum OS version, offline support, whether mobile usage counts against the same plan credits as desktop (it should, and this should be stated plainly to avoid support tickets).

**Internal links:** `/downloads`, `/downloads/browser-extension`, `/pricing`
**Primary CTA:** App Store / Google Play download buttons

---

## Linux

**URL:** `/downloads/linux`
**Search intent:** Technical users, often developers, searching "Nexus AI Linux" or arriving via the Code product pages.
**Primary keyword:** Nexus AI Linux
**Secondary keywords:** Nexus AI Linux download, Nexus AI .deb, Nexus AI AppImage
**Title tag:** `Nexus AI for Linux | Download`
**Meta description:** `Download the Nexus AI desktop app for Linux. Available as AppImage and .deb. Built for developers and power users.`
**H1:** `Nexus AI for Linux`

**Content brief:**
- Direct download links by package format (AppImage, .deb, and any others supported), with install commands shown in a code block for the terminal-comfortable audience.
- A short note on supported distributions and minimum requirements.
- A pointer to `/products/code` for developers landing here directly from a search engine rather than from inside the product.

**Internal links:** `/downloads`, `/products/code`, `/developers/docs`
**Primary CTA:** Download for Linux

---

## Windows

**URL:** `/downloads/windows`
**Search intent:** Direct install on a Windows machine, often from a work computer; meaningful overlap with the Microsoft 365 audience.
**Primary keyword:** Nexus AI Windows
**Secondary keywords:** Nexus AI Windows download, Nexus AI desktop app
**Title tag:** `Nexus AI for Windows | Download`
**Meta description:** `Download Nexus AI for Windows. One AI workspace for chat, research, documents and creative work, right on your desktop.`
**H1:** `Nexus AI for Windows`

**Content brief:**
- Single prominent download button with version number and file size shown for trust.
- System requirements (OS version, RAM) in a short table.
- A callout linking to `/features/microsoft-365` for visitors who came here to use Nexus AI alongside Word, Excel and PowerPoint.
- Install walkthrough as three numbered steps with screenshots.

**Internal links:** `/downloads`, `/features/microsoft-365`, `/products/creative-studio`
**Primary CTA:** Download for Windows

---

## Apple (Mac)

**URL:** `/downloads/mac`
**Search intent:** Direct install on macOS; secondary overlap with the iOS mobile audience searching generically for "Nexus AI Apple".
**Primary keyword:** Nexus AI Mac
**Secondary keywords:** Nexus AI macOS, Nexus AI for Mac download, Nexus AI Apple Silicon
**Title tag:** `Nexus AI for Mac | Download`
**Meta description:** `Download Nexus AI for Mac. Native Apple Silicon support, menu bar quick access, and the full Nexus AI workspace on macOS.`
**H1:** `Nexus AI for Mac`

**Content brief:**
- Single download button, with an explicit note on Apple Silicon (M-series) versus Intel support so users do not download the wrong build.
- macOS-specific conveniences: menu bar app, native notifications, keyboard shortcuts.
- Link through to the iOS page for users who also want the mobile companion.

**Internal links:** `/downloads`, `/downloads/mobile`, `/pricing`
**Primary CTA:** Download for Mac

---

## Huawei

**URL:** `/downloads/huawei`
**Search intent:** Android users on Huawei devices without Google Play access, searching specifically for AppGallery availability; an important page for several international markets where Huawei share is high.
**Primary keyword:** Nexus AI Huawei
**Secondary keywords:** Nexus AI AppGallery, Nexus AI Huawei download
**Title tag:** `Nexus AI for Huawei | AppGallery Download`
**Meta description:** `Download Nexus AI from the Huawei AppGallery. The full Nexus AI workspace, built for Huawei devices.`
**H1:** `Nexus AI on Huawei AppGallery`

**Content brief:**
- AppGallery badge and direct link, prominent and singular; this page has one job.
- A short note confirming feature parity with the Google Play version, since Huawei users are often used to AppGallery versions lagging behind.
- Brief reassurance on account sync, since this audience frequently also runs Nexus AI on a non-Huawei desktop.

**Internal links:** `/downloads`, `/downloads/mobile`
**Primary CTA:** Get it on AppGallery

---

## Browser Extension (Chromium)

**URL:** `/downloads/browser-extension`
**Search intent:** Users wanting Nexus AI accessible inside their browser without switching tabs; meaningful overlap with `/features/chrome`, which should own the feature-benefit story while this page owns the install.
**Primary keyword:** Nexus AI Chrome extension
**Secondary keywords:** Nexus AI browser extension, Nexus AI Edge extension, Nexus AI for Chrome download
**Title tag:** `Nexus AI Browser Extension | Chrome, Edge, Brave`
**Meta description:** `Add Nexus AI to your browser. Works on Chrome, Edge, Brave and other Chromium browsers. Summarise pages, draft replies and chat anywhere.`
**H1:** `Nexus AI, right in your browser`

**Content brief:**
- Install button linking to the Chrome Web Store, with a note that it works across all Chromium-based browsers (Edge, Brave, Opera), which broadens this page's relevance beyond Chrome alone.
- Three concrete in-browser use cases: summarise the current page, draft a reply inside Gmail, pull a webpage into a Folder for later research.
- A short permissions explainer, since browser extensions face higher install hesitation than native apps; transparency here measurably improves install rate.

**Internal links:** `/downloads`, `/features/chrome`, `/legal/privacy-policy`
**Primary CTA:** Add to Chrome
## Pricing (hub)

**URL:** `/pricing`
**Search intent:** High commercial intent. Visitors comparing cost, evaluating against Claude or ChatGPT pricing, or returning after a free-plan limit was hit.
**Primary keyword:** Nexus AI pricing
**Secondary keywords:** Nexus AI plans, Nexus AI cost, Nexus AI subscription
**Title tag:** `Nexus AI Pricing | Free, Premium and Ultimate Plans`
**Meta description:** `Compare Nexus AI plans. Start free, upgrade to Premium at $20/month or Ultimate at $100/month. Team, education and enterprise pricing available.`
**H1:** `Simple pricing, built to scale with you`

**Content brief:**
- **Plan comparison table.** Free, Premium, Ultimate side by side with monthly and annual pricing (Premium annual shown as $16/month), feature rows matching the internal pricing architecture (AI credits, Folders, Creative Studio credits, Canvas access, support level).
- **Plan switcher.** Toggle for monthly versus annual pricing, defaulting to annual to surface the discount.
- **Business and institutional callout.** A compact band linking to `/pricing/team`, `/team/enterprise` and the Education plan rather than cramming every B2B tier into this page.
- **Add-ons callout.** Short section linking to `/pricing/add-ons` and `/pricing/chatbot` for visitors who need Creative Studio top-ups, Meeting Notes or the chatbot product.
- **FAQ block.** What happens when credits run out, whether plans can be changed mid-cycle, whether annual plans can be refunded (link to `/legal/refund-policy`), what counts as fair use on Ultimate.
- **Comparison anchor.** One short, factual line positioning Premium and Ultimate against Claude Pro and Claude Max pricing, since visitors arrive here actively comparing.

**Internal links:** `/pricing/team`, `/pricing/add-ons`, `/pricing/chatbot`, `/team/enterprise`, `/legal/refund-policy`, `/features` (hub)
**Primary CTA:** Start free / Upgrade to Premium

---

## Pricing: Team

**URL:** `/pricing/team`
**Search intent:** A buyer (often a founder or team lead, not procurement) checking per-seat cost and the minimum seat requirement before committing.
**Primary keyword:** Nexus AI Team pricing
**Secondary keywords:** Nexus AI for teams, Nexus AI seats, Nexus AI team plan cost
**Title tag:** `Nexus AI Team Pricing | $30 per Seat`
**Meta description:** `Nexus AI Team plan: $30 per seat per month, minimum 2 members. Shared Folders, team workspace and central billing for small teams.`
**H1:** `One AI workspace for your whole team`

**Content brief:**
- **Price and minimum, stated immediately.** $30/seat/month, 2-member minimum, shown in the first screen with no scrolling required; this is the most-asked question for this page and burying it costs conversions.
- **What's included beyond Premium.** Shared Folders, team workspace, central billing, seat management, team templates, shared knowledge base, admin controls, basic analytics, presented as a delta from the individual Premium plan rather than repeated in full.
- **Seat calculator.** A simple interactive control (2 to 20 seats) showing total monthly cost, since per-seat pricing is harder to mentally total than a flat fee.
- **Who it's for.** Two or three short scenarios (a 4-person startup, a 6-person agency team) to help self-qualify.
- **Upgrade path.** A short note pointing larger or more security-conscious buyers to `/pricing` Business tier or `/team/enterprise`.

**Internal links:** `/pricing`, `/team/enterprise`, `/team/contact-sales`, `/features/canvas`
**Primary CTA:** Start a Team plan

---

## Pricing: Add-ons

**URL:** `/pricing/add-ons`
**Search intent:** Existing paying users who have hit a Creative Studio or Meeting Notes limit and are looking to top up rather than upgrade their whole plan.
**Primary keyword:** Nexus AI add-ons
**Secondary keywords:** Nexus AI credit top-up, Nexus AI Creative Studio credits, buy more AI credits
**Title tag:** `Nexus AI Add-ons | Credit Top-ups and Meeting Notes`
**Meta description:** `Top up AI credits and Creative Studio credits from $10, or add Meeting Notes. Pay for exactly what you need, on top of any plan.`
**H1:** `Need more? Top up without upgrading`

**Content brief:**
- **Top-up packages.** $10, $20 and $50 tiers shown as cards, each stating the AI credits and Creative Studio credits included, plus a Custom tier for Business, Education and Enterprise linking to `/team/contact-sales`.
- **What a credit buys.** A short reference block (one image, one short video, one voiceover, in approximate credit terms) so the numbers are meaningful rather than abstract.
- **Meeting Notes add-on summary.** Starter, Pro and Business tiers summarised with a link through to the full feature breakdown if Meeting Notes gets its own page in a future iteration; for now this page is the source of truth.
- **Why top-ups exist.** One short, honest paragraph: top-ups exist so heavy usage never gets throttled, and so light users are never forced to pay for capacity they do not need. This frames the add-on model as fair rather than as a paywall.

**Internal links:** `/pricing`, `/pricing/chatbot`, `/products/creative-studio`
**Primary CTA:** Buy credits

---

## Pricing: Chatbot

**URL:** `/pricing/chatbot`
**Search intent:** Visitors evaluating Nexus AI as a deployable website chatbot, frequently arriving via comparison searches against Chatbase or similar tools.
**Primary keyword:** Nexus AI chatbot pricing
**Secondary keywords:** Nexus AI chatbot for website, AI chatbot builder pricing, Chatbase alternative
**Title tag:** `Nexus AI Chatbot Pricing | From $50/month`
**Meta description:** `Deploy an AI chatbot on your website from $50/month. Starter, Growth and Scale plans with knowledge base, lead capture and analytics.`
**H1:** `Your own AI chatbot, live on your site`

**Content brief:**
- **Three-tier table.** Starter ($50), Growth ($150), Scale ($500), with the full feature comparison (chatbots included, message credits, knowledge sources, actions, lead capture, analytics, branding removal, API access, white-label, SSO roadmap, audit logs, SLA, support level).
- **Setup time callout.** A short section on how fast a chatbot can go live (embed a knowledge source, customise appearance, paste a script tag) since ease of deployment is a key purchase driver against incumbents.
- **Comparison framing.** A factual, non-disparaging comparison row against typical Chatbase-tier pricing to help visitors who arrived mid-comparison.
- **Use case examples.** Three short scenarios: solo creator support bot, agency client-facing bot, SaaS support deflection bot.

**Internal links:** `/pricing`, `/products/chatbot`, `/team/contact-sales`
**Primary CTA:** Start with Starter / Talk to sales (Scale)
## Features / Use Cases (hub)

**URL:** `/features`
**Search intent:** Browsing intent. Visitors who know roughly what they want Nexus AI to do but have not yet picked a specific capability, or who are comparing the breadth of Nexus AI against a single-purpose competitor.
**Primary keyword:** Nexus AI features
**Secondary keywords:** what can Nexus AI do, Nexus AI use cases, Nexus AI capabilities
**Title tag:** `Nexus AI Features | Everything You Can Do`
**Meta description:** `From academic research to AI image generation, file chat to meeting notes. Explore everything Nexus AI can do for you.`
**H1:** `Everything you need to finish the work`

**Content brief:**
- **Feature grid.** All thirteen feature pages as cards, grouped loosely by theme (Research and writing; Creative and media; Productivity and memory; Platform integrations) to aid scanning rather than presenting a flat alphabetical list.
- **Audience filter.** An optional toggle (Students / Creators / Professionals / Teams) that reorders the grid by relevance, reinforcing the segmentation strategy without needing separate landing pages for each audience.
- **Cross-link to Products.** A short explanatory note that Features describes what you can do, while Products describes how Nexus AI is organised (Chat, Creative Studio, Code, Canvas), with a link through to `/products`. This prevents visitor confusion between the two sections.

**Internal links:** every `/features/*` child page, `/products`
**Primary CTA:** Start free

---

## Academic Research

**URL:** `/features/academic-research`
**Search intent:** Students and researchers searching for AI help with literature review, source synthesis and citation-backed writing; high-intent, exam-season seasonal spikes.
**Primary keyword:** AI for academic research
**Secondary keywords:** AI research assistant, AI literature review tool, AI citation generator
**Title tag:** `AI for Academic Research | Nexus AI`
**Meta description:** `Research faster with AI. Upload sources, get cited summaries, and turn research into a finished paper with Nexus AI.`
**H1:** `Research that turns into a finished paper`

**Content brief:**
- The research-to-document workflow demonstrated step by step: upload sources, chat with files, draft with citations, check originality, export.
- Citation style support called out explicitly (APA, MLA, Chicago) since this is a common filtering question for the student audience.
- A worked example: a research question in, a cited paragraph out, shown as a before/after or short video.
- A short academic integrity note linking to `/features/ai-plagiarism-checker`, positioning Nexus AI as supporting honest work rather than enabling shortcuts.

**Internal links:** `/features/ai-file-chat`, `/features/ai-plagiarism-checker`, `/features/ai-essay-writer`, `/pricing`
**Primary CTA:** Start free

---

## AI Image Generator

**URL:** `/features/ai-image-generator`
**Search intent:** High-volume, competitive commercial term; visitors comparing image quality and pricing against Midjourney, DALL-E and similar tools.
**Primary keyword:** AI image generator
**Secondary keywords:** AI image generation tool, text to image AI, Nexus AI images
**Title tag:** `AI Image Generator | Nexus AI`
**Meta description:** `Generate images from text with Nexus AI. Brand-consistent visuals, social assets and design content, included in Creative Studio.`
**H1:** `Turn a description into an image`

**Content brief:**
- Visual-led page: example generations near the top, since this category is judged on output quality before anyone reads copy.
- Use case rail: social media graphics, blog headers, presentation visuals, brand assets, each with an example.
- A short note on credits and resolution tiers, linking to `/pricing/add-ons` for top-ups, since image generation is the highest-cost-per-unit Creative Studio feature and the page should set expectations early.
- Link through to `/products/creative-studio/images` for the full product detail; this page is the SEO-facing feature explainer, the product page is the deeper how-it-works reference.

**Internal links:** `/products/creative-studio/images`, `/features/ai-presentation-maker`, `/pricing/add-ons`
**Primary CTA:** Start free

---

## AI Plagiarism Checker

**URL:** `/features/ai-plagiarism-checker`
**Search intent:** Students and educators checking originality before submission; also content teams checking for accidental duplication.
**Primary keyword:** AI plagiarism checker
**Secondary keywords:** plagiarism checker free, originality checker, AI content originality
**Title tag:** `AI Plagiarism Checker | Nexus AI`
**Meta description:** `Check your writing for originality before you submit. Nexus AI's plagiarism checker flags matched text and supports honest academic work.`
**H1:** `Check your work before you submit it`

**Content brief:**
- Plain explanation of how the checker works (what it compares against, what a match score means) since trust and transparency are the deciding factor for this feature.
- Direct framing against academic integrity policy: this tool supports honest submission, it is not a tool for evading detection. State this explicitly and early.
- Allowance limits by plan, linking to `/pricing`, since this is a metered feature.
- A short FAQ: does it store submitted documents, is the check private, does it match against the institution's own database (clarify if not, to avoid false expectations).

**Internal links:** `/features/academic-research`, `/features/ai-essay-writer`, `/legal/privacy-policy`, `/pricing`
**Primary CTA:** Start free

---

## AI Audio Generator

**URL:** `/features/ai-audio-generator`
**Search intent:** Creators and marketers searching for text-to-speech, voiceover or short-form audio generation; meaningful overlap with podcast and video production searches.
**Primary keyword:** AI audio generator
**Secondary keywords:** AI voiceover generator, text to speech AI, AI voice generator
**Title tag:** `AI Audio Generator | Nexus AI`
**Meta description:** `Generate voiceovers and audio with AI. Natural-sounding voices for videos, podcasts and presentations, built into Nexus AI.`
**H1:** `Give your content a voice`

**Content brief:**
- Embedded audio samples across two or three voice styles near the top of the page; like the image generator page, output quality should be demonstrated before it is described.
- Use cases: narrating a presentation, podcast intro generation, accessibility narration of written documents.
- Language and accent coverage stated clearly if multilingual, since this is a common filtering question.
- Credit cost reference and link to `/pricing/add-ons`.

**Internal links:** `/products/creative-studio/audio`, `/features/ai-presentation-maker`, `/pricing/add-ons`
**Primary CTA:** Start free

---

## AI Presentation / Slides

**URL:** `/features/ai-presentation-maker`
**Search intent:** Professionals and students needing a deck quickly; competitive term against Gamma, Tome and Canva's AI features.
**Primary keyword:** AI presentation maker
**Secondary keywords:** AI slide generator, AI PowerPoint generator, make slides with AI
**Title tag:** `AI Presentation Maker | Nexus AI`
**Meta description:** `Turn an outline, document or idea into a finished presentation. Generate, edit and export slides with Nexus AI.`
**H1:** `From idea to finished deck`

**Content brief:**
- The generation-to-export loop shown explicitly: outline or document in, structured deck out, then edited live in Canvas, then exported to PowerPoint. This page should make the Canvas connection obvious since slides are rarely accepted as-generated.
- Template gallery preview (a handful of visual styles) to address the most common objection to AI-generated decks, which is that they look generic.
- A specific callout for investor decks and business proposals, tying back to the Verbosec-style use case this product was built for.
- Export format confirmation (.pptx, PDF) stated plainly.

**Internal links:** `/products/creative-studio/slides`, `/features/canvas`, `/features/microsoft-365`
**Primary CTA:** Start free
## AI File Chat

**URL:** `/features/ai-file-chat`
**Search intent:** Strong, specific intent: "chat with my PDF", "talk to my document". This is the wedge feature and likely the single highest-converting page in the Features section.
**Primary keyword:** chat with PDF AI
**Secondary keywords:** AI file chat, talk to your documents, chat with documents AI
**Title tag:** `Chat With Your Files | Nexus AI File Chat`
**Meta description:** `Upload a PDF, Word doc or spreadsheet and ask questions, get summaries and pull insights instantly. Nexus AI File Chat understands your documents.`
**H1:** `Ask your documents anything`

**Content brief:**
- Lead with the core demo: upload a file, ask a question, get a sourced answer with the relevant passage highlighted. This is the wedge; the page should not bury it.
- Supported file types listed clearly (PDF, Word, CSV, and others as supported).
- Multi-file chat called out explicitly: querying and comparing across several documents at once, not just one file at a time, since this is a meaningful differentiator over single-document tools.
- File size and upload limits by plan, linking to `/pricing`.
- A direct line to Folders: uploaded files live inside a Folder and stay searchable across future sessions, reinforcing retention rather than treating each upload as disposable.

**Internal links:** `/features/academic-research`, `/products/chat`, `/features/canvas`, `/pricing`
**Primary CTA:** Start free

---

## AI Note Taking / Meeting Notes

**URL:** `/features/ai-meeting-notes`
**Search intent:** Professionals comparing against Read AI, Otter, Fireflies and Bubbles; intent is usually "will this replace my current meeting tool".
**Primary keyword:** AI meeting notes
**Secondary keywords:** AI note taking app, meeting transcription AI, AI meeting summary
**Title tag:** `AI Meeting Notes | Nexus AI`
**Meta description:** `Automatic meeting summaries, transcripts and action items. Nexus AI Meeting Notes joins your calls and turns them into searchable notes.`
**H1:** `Never take meeting notes again`

**Content brief:**
- Feature walkthrough: calendar connection, automatic join, live transcript, summary and action items delivered after the call.
- Speaker identification and searchability across past meetings called out as a Pro-tier differentiator, linking to `/pricing/add-ons` for tier detail.
- Integration list (calendar providers, CRM or project tool handoff) since this is a recurring evaluation criterion against Read AI and Bubbles.
- Privacy and consent handling explained plainly: who is notified that a call is being recorded or summarised, linking to `/legal/privacy-policy`.

**Internal links:** `/pricing/add-ons`, `/legal/privacy-policy`, `/team/features`
**Primary CTA:** Start free

---

## AI Memory

**URL:** `/features/ai-memory`
**Search intent:** Smaller volume, more product-education intent than search-volume intent; visitors here are usually existing or near-converted users trying to understand a specific capability rather than searching generically.
**Primary keyword:** Nexus AI memory
**Secondary keywords:** AI that remembers you, personal AI memory, AI context memory
**Title tag:** `AI Memory | Nexus AI Remembers Your Context`
**Meta description:** `Nexus AI remembers your projects, preferences and past conversations, so you never have to repeat yourself.`
**H1:** `An AI that remembers what you told it`

**Content brief:**
- Plain explanation of what Memory does in practice: preferences, recurring context and prior conversations carried forward, scoped per Folder versus account-wide where relevant.
- A worked before/after example: a user who has to re-explain their writing style every session, versus one whose Folder already knows it.
- User control front and centre: how to view, edit or clear memory, linking to `/legal/privacy-policy`. Memory features carry above-average privacy sensitivity and the page should proactively address it rather than waiting for an objection.
- Plan availability noted if Memory depth scales with tier.

**Internal links:** `/features/skills`, `/features/canvas`, `/legal/privacy-policy`
**Primary CTA:** Start free

---

## Skills

**URL:** `/features/skills`
**Search intent:** Mostly product-education and competitive-positioning traffic (visitors comparing "agent skills" or "custom instructions" capability against other AI platforms) rather than high-volume generic search.
**Primary keyword:** Nexus AI Skills
**Secondary keywords:** AI custom instructions, AI agent skills, reusable AI workflows
**Title tag:** `Skills | Reusable AI Workflows | Nexus AI`
**Meta description:** `Build reusable Skills that teach Nexus AI exactly how you want a task done, then run them again in one click.`
**H1:** `Teach Nexus AI how you work, once`

**Content brief:**
- Definition first: a Skill is a saved, reusable instruction set (format, tone, steps) that can be triggered again without re-explaining it, distinct from a one-off chat.
- Three or four example Skills relevant to the core segments (a weekly report Skill, a citation-style Skill, a brand-voice Skill for Creative Studio).
- How Skills relate to Folders and Memory: a short clarifying diagram or paragraph, since these three concepts are easy to confuse and product marketing should pre-empt that confusion rather than leave it to support tickets.
- Availability by plan and a callout for Business/Enterprise teams building shared Skills.

**Internal links:** `/features/ai-memory`, `/features/canvas`, `/team/features`
**Primary CTA:** Start free

---

## Canvas

**URL:** `/features/canvas`
**Search intent:** Visitors who have already generated something with an AI tool and are frustrated they cannot easily edit it; also direct competitive searches against ChatGPT Canvas and Claude Artifacts.
**Primary keyword:** Nexus AI Canvas
**Secondary keywords:** AI document editor, edit AI generated document, AI workspace editor
**Title tag:** `Canvas | Edit and Refine AI Work | Nexus AI`
**Meta description:** `Preview, edit and refine AI-generated documents and slides before you export. Canvas turns generation into finished work.`
**H1:** `From generated to finished, without leaving Nexus AI`

**Content brief:**
- This is the differentiator page against basic chatbots and deserves the same five-step visual treatment as the homepage wedge: upload, preview, improve, edit, export.
- Document type coverage stated explicitly: Word, PowerPoint, PDF, reports, proposals, essays, research documents.
- A short, direct comparison paragraph: most AI tools generate text you copy elsewhere to format; Canvas keeps the whole loop inside Nexus AI. Factual, not disparaging of named competitors.
- Cross-link to the Products section, since Canvas underpins Creative Studio and Code output as well as document work, and the page should make clear it is not document-only.

**Internal links:** `/products/artifacts`, `/features/ai-file-chat`, `/features/ai-presentation-maker`, `/products/creative-studio`
**Primary CTA:** Start free

---

## AI Essay Writer

**URL:** `/features/ai-essay-writer`
**Search intent:** Very high volume, very competitive, dominated by lower-quality tools; students searching "AI essay writer" are often deciding between several similar-sounding products in one session, so trust signals matter more than on most pages.
**Primary keyword:** AI essay writer
**Secondary keywords:** essay writing AI, AI essay generator, write my essay AI
**Title tag:** `AI Essay Writer | Nexus AI`
**Meta description:** `Write better essays faster with AI. Research, draft, cite and check originality, all in one workspace built for academic work.`
**H1:** `Essays that are actually yours, finished faster`

**Content brief:**
- Lead with academic integrity positioning even more directly than the Academic Research page, since this exact query attracts visitors looking for shortcuts; the page should welcome the audience that wants to write better and faster while being unambiguous that it is not a submit-as-is tool.
- The same research-to-document workflow as `/features/academic-research`, written with essay-specific examples (thesis statement, argument structure, citation insertion).
- Direct links to the plagiarism checker and citation support as the trust-building companion features.
- Subject coverage breadth mentioned (humanities, sciences, business) to capture long-tail variants without needing separate pages per subject.

**Internal links:** `/features/academic-research`, `/features/ai-plagiarism-checker`, `/pricing`
**Primary CTA:** Start free

---

## Nexus AI for Microsoft 365

**URL:** `/features/microsoft-365`
**Search intent:** Professionals and enterprise buyers checking integration compatibility before adoption; a common procurement-stage query.
**Primary keyword:** Nexus AI Microsoft 365
**Secondary keywords:** Nexus AI Word add-in, Nexus AI Outlook, Nexus AI for Office
**Title tag:** `Nexus AI for Microsoft 365 | Word, Excel, PowerPoint, Outlook`
**Meta description:** `Use Nexus AI inside Word, Excel, PowerPoint and Outlook. Draft, edit and export without leaving Microsoft 365.`
**H1:** `Nexus AI, inside the Microsoft tools you already use`

**Content brief:**
- App-by-app breakdown (Word add-in, Excel add-in, PowerPoint add-in, Outlook extension) each with a one-line use case, linking to the relevant `/downloads/*` page for installation.
- IT and admin section for Business and Enterprise buyers: deployment method, whether it requires individual installs or can be pushed org-wide, linking to `/team/enterprise`.
- Honest phasing note if some integrations (Excel, Outlook) are Phase 2 per the extension roadmap; do not list unreleased integrations as available without a clear "coming soon" label, since this is a common source of buyer frustration and churn.

**Internal links:** `/downloads/windows`, `/downloads/mac`, `/team/enterprise`, `/features/canvas`
**Primary CTA:** Start free / Install for Microsoft 365

---

## Nexus AI for Chrome

**URL:** `/features/chrome`
**Search intent:** Users wanting the feature-benefit story before installing; this page owns the persuasion, `/downloads/browser-extension` owns the install action.
**Primary keyword:** Nexus AI for Chrome
**Secondary keywords:** Nexus AI Chrome extension features, AI browser assistant
**Title tag:** `Nexus AI for Chrome | Browser AI Assistant`
**Meta description:** `Bring Nexus AI into your browser. Summarise any page, draft replies and chat without switching tabs.`
**H1:** `The web, with Nexus AI built in`

**Content brief:**
- Three core in-browser use cases demonstrated with screenshots: summarising a long article, drafting a reply inside a webmail client, saving a page into a Folder.
- A short section on right-click and keyboard-shortcut access, since speed of access is the core value proposition of a browser extension over the full app.
- Clear, single link through to `/downloads/browser-extension` for the actual install; this page should not duplicate the install button prominence, to keep the two pages' roles distinct.

**Internal links:** `/downloads/browser-extension`, `/features/ai-file-chat`, `/products/chat`
**Primary CTA:** Add to Chrome
## Products (hub)

**URL:** `/products`
**Search intent:** Visitors trying to understand how Nexus AI is structured as a platform, often after already exploring one or two Feature pages; also a common destination for "Nexus AI vs [competitor]" comparison traffic wanting the full picture.
**Primary keyword:** Nexus AI products
**Secondary keywords:** what is Nexus AI, Nexus AI platform overview
**Title tag:** `Nexus AI Products | Chat, Creative Studio, Code, Artifacts`
**Meta description:** `Explore the Nexus AI product family: Chat, Chatbot, Code and Creative Studio. One platform, four ways to get work done.`
**H1:** `One platform. Four ways to work.`

**Content brief:**
- Four-pillar overview matching the architecture used internally (Chat, Creative Studio, Code, and Canvas/Artifacts as the cross-cutting work surface), each card linking to its product page.
- A short explanatory paragraph on how the pillars share Folders and a single credit system, so visitors understand this is one coherent platform rather than four bolted-together tools.
- Distinct framing from `/features`: this page answers "how is Nexus AI organised", the Features hub answers "what specific thing can I do".

**Internal links:** every `/products/*` page, `/features` (hub), `/pricing`
**Primary CTA:** Start free

---

## Chat

**URL:** `/products/chat`
**Search intent:** Visitors wanting to understand the core chat product specifically, often comparing conversational quality and capability against ChatGPT and Claude directly.
**Primary keyword:** Nexus AI Chat
**Secondary keywords:** Nexus AI chatbot, AI chat assistant, Nexus AI conversational AI
**Title tag:** `Nexus AI Chat | Research, Writing and File Chat`
**Meta description:** `General chat, research chat and file chat in one place. Nexus AI Chat organises every conversation into Folders, ready to pick up again.`
**H1:** `Chat that remembers, organises and finishes`

**Content brief:**
- Coverage of the full Chat surface: general AI chat, research chat, file chat, academic writing, business writing, professional document drafting, chat history and organisation, each as a short subsection rather than a separate page (these live inside Features individually for SEO, this page is the product-level summary).
- Folders explained as the organising unit here too, consistent with every other mention sitewide; never refer to this as "Projects".
- Model quality and capability statement: a plain, non-technical explanation of how Nexus AI chooses the right model for a task, without overclaiming or under-explaining.
- Link out to the deeper Feature pages (`/features/ai-file-chat`, `/features/academic-research`) for visitors wanting more depth on a specific capability.

**Internal links:** `/features/ai-file-chat`, `/features/academic-research`, `/features/ai-essay-writer`, `/products/artifacts`
**Primary CTA:** Start free

---

## Chatbot

**URL:** `/products/chatbot`
**Search intent:** Business buyers wanting to deploy a chatbot on their own site or product, evaluating Nexus AI as a builder/platform rather than as a personal assistant; distinct intent from `/products/chat`.
**Primary keyword:** AI chatbot builder
**Secondary keywords:** build an AI chatbot, AI chatbot for website, deploy AI chatbot
**Title tag:** `Build an AI Chatbot | Nexus AI`
**Meta description:** `Build and deploy an AI chatbot trained on your own content. Lead capture, analytics and CRM handoff, live on your site in minutes.`
**H1:** `Deploy your own AI chatbot`

**Content brief:**
- Builder workflow shown step by step: connect a knowledge source, customise behaviour and appearance, embed on a website, go live.
- Use case rail: customer support deflection, lead qualification, internal knowledge base assistant.
- Direct link through to `/pricing/chatbot` for the tier breakdown; this page sells the product, the pricing page sells the plan.
- A short comparison framing against Chatbase, factual rather than disparaging, similar in tone to the equivalent pricing page section.

**Internal links:** `/pricing/chatbot`, `/team/enterprise`, `/features/ai-memory`
**Primary CTA:** Start building / View pricing

---

## Code (hub)

**URL:** `/products/code`
**Search intent:** Developers and technical founders evaluating Nexus AI as a coding assistant, typically comparing against GitHub Copilot, Cursor and Claude Code.
**Primary keyword:** Nexus AI Code
**Secondary keywords:** AI coding assistant, Nexus AI developer tools, AI code generator
**Title tag:** `Nexus AI Code | AI Coding Assistant`
**Meta description:** `An AI coding assistant for generation, review and the command line. Nexus AI Code helps you ship faster without leaving your workflow.`
**H1:** `Code with an AI that understands the whole project`

**Content brief:**
- Three-part overview matching the sub-pages: Agents (autonomous multi-step coding tasks), Review (code review and quality feedback), CLI (terminal-native usage), each summarised in a card linking to its dedicated page.
- A code sample or short embedded demo near the top, since developer audiences expect to see real output, not marketing language, before reading further.
- Supported languages and frameworks listed plainly.
- Link to `/downloads/linux` and the VS Code extension status (live or roadmap, stated honestly) for this technically literal audience.

**Internal links:** `/products/code/agents`, `/products/code/review`, `/products/code/cli`, `/downloads/linux`, `/developers/docs`
**Primary CTA:** Start free / Read the docs

---

## Code: Agents

**URL:** `/products/code/agents`
**Search intent:** Developers searching for autonomous or semi-autonomous coding assistance (multi-file edits, task completion) rather than single-line autocomplete; comparison intent against Claude Code and similar agentic tools.
**Primary keyword:** AI coding agent
**Secondary keywords:** autonomous AI coding, AI agent for code, multi-file AI code editing
**Title tag:** `AI Coding Agents | Nexus AI Code`
**Meta description:** `Hand off multi-step coding tasks to an AI agent. Nexus AI Code Agents plan, edit across files and explain every change.`
**H1:** `Give it the task, not just the prompt`

**Content brief:**
- Concrete example of an agent task end to end: a task description in, a multi-file change out, with the agent's plan shown transparently rather than as a black box.
- Boundaries and control explained: what the agent can and cannot do unsupervised, how changes are reviewed before being applied, since trust is the primary adoption barrier for agentic coding tools.
- Link to `/products/code/review` for the natural next step after an agent produces a change.

**Internal links:** `/products/code`, `/products/code/review`, `/developers/docs`
**Primary CTA:** Start free

---

## Code: Review

**URL:** `/products/code/review`
**Search intent:** Developers and engineering leads searching for AI-assisted code review, often to supplement rather than replace human review.
**Primary keyword:** AI code review
**Secondary keywords:** AI code review tool, automated code review, AI pull request review
**Title tag:** `AI Code Review | Nexus AI Code`
**Meta description:** `Catch bugs, security issues and style problems before merge. Nexus AI reviews code with clear, actionable feedback.`
**H1:** `A second pair of eyes on every change`

**Content brief:**
- Review output shown as a realistic example: a diff with inline AI comments, demonstrating tone and specificity rather than describing it abstractly.
- Categories of issue covered (bugs, security, performance, style/consistency) stated explicitly.
- Workflow integration: how review fits into existing pull request processes, linking to relevant downloads or docs for git-platform integration if available.

**Internal links:** `/products/code`, `/products/code/agents`, `/developers/docs`
**Primary CTA:** Start free

---

## Code: CLI

**URL:** `/products/code/cli`
**Search intent:** Developers who prefer the terminal to a GUI, searching for command-line AI tooling; smaller volume, high-intent, technically literal audience.
**Primary keyword:** Nexus AI CLI
**Secondary keywords:** AI command line tool, Nexus AI terminal, AI coding CLI
**Title tag:** `Nexus AI CLI | Command Line AI Coding`
**Meta description:** `Use Nexus AI Code from the terminal. Install the CLI, authenticate, and bring AI coding assistance into your existing workflow.`
**H1:** `Nexus AI, from the terminal`

**Content brief:**
- Install command shown immediately in a code block, followed by a minimal first-use example; this audience wants to start typing before reading marketing copy.
- Common command reference table (a handful of the most-used commands) as a quick-start rather than full documentation, with a clear link to `/developers/docs` for the complete reference.
- Supported OS and shell environments stated plainly, linking to `/downloads/linux`, `/downloads/mac` and `/downloads/windows` as relevant.

**Internal links:** `/products/code`, `/developers/docs`, `/downloads/linux`
**Primary CTA:** Install the CLI / Read the docs

---

## Artifacts

**URL:** `/products/artifacts`
**Search intent:** Visitors wanting to understand how generated outputs (documents, code, designs) are saved, versioned and reused inside Nexus AI; meaningful overlap with Canvas, and the two pages should be clearly differentiated to avoid cannibalisation.
**Primary keyword:** Nexus AI Artifacts
**Secondary keywords:** AI generated content versioning, save AI output, AI work history
**Title tag:** `Artifacts | Save and Reuse AI Work | Nexus AI`
**Meta description:** `Every document, design and piece of code you create becomes a reusable Artifact. Find it, version it and build on it later.`
**H1:** `Nothing you create gets lost`

**Content brief:**
- Clear differentiation from Canvas stated early: Canvas is where you actively edit a piece of work, Artifacts is the saved, versioned record of everything created, accessible later from within its Folder. This distinction should be explicit since the two concepts are easy to conflate.
- Versioning explained: how prior versions of a document or design are kept and restored.
- Cross-pillar coverage shown: an Artifact can be a document from Chat, an image from Creative Studio, or a code change from Code, reinforcing that this is a platform-wide system rather than a single-pillar feature.

**Internal links:** `/features/canvas`, `/products/chat`, `/products/creative-studio`, `/products/code`
**Primary CTA:** Start free
## Creative Studio (hub)

**URL:** `/products/creative-studio`
**Search intent:** Creators, marketers and designers evaluating Nexus AI's multimedia generation breadth against single-purpose tools (Canva, Midjourney, Runway, ElevenLabs) or other all-in-one suites.
**Primary keyword:** Nexus AI Creative Studio
**Secondary keywords:** AI creative tools, AI design and content suite, all in one AI creative tool
**Title tag:** `Creative Studio | AI Design, Video, Audio and More | Nexus AI`
**Meta description:** `Images, video, audio, slides, docs and wireframes. Creative Studio is the AI creative suite built into Nexus AI.`
**H1:** `One creative suite. Every format.`

**Content brief:**
- Six-card grid (Images, Slides, Docs, Video, Audio, Wireframes), each linking to its dedicated page; this is the primary internal hub for the section.
- Brand kit explained at the hub level since it applies across every format: upload brand colours, fonts and logo once, apply consistently across every generated asset.
- Creative Studio credit system explained briefly with a link to `/pricing/add-ons`, since visitors evaluating breadth will immediately ask about cost per asset.
- A short note connecting Creative Studio to Canvas: generated assets can be further edited and refined, not just downloaded as-is.

**Internal links:** every `/products/creative-studio/*` child page, `/pricing/add-ons`, `/features/canvas`
**Primary CTA:** Start free

---

## Creative Studio: Images

**URL:** `/products/creative-studio/images`
**Search intent:** Product-level depth for visitors who arrived via `/features/ai-image-generator` or directly via the Creative Studio hub; this page should cover workflow and integration rather than repeat the feature pitch.
**Primary keyword:** AI image generation Creative Studio
**Secondary keywords:** Nexus AI image generator, AI design images, brand-consistent AI images
**Title tag:** `AI Images | Creative Studio | Nexus AI`
**Meta description:** `Generate on-brand images inside Creative Studio. Apply your brand kit, refine in Canvas, export ready to publish.`
**H1:** `Images that already look like your brand`

**Content brief:**
- Workflow emphasis: prompt to image, refine with brand kit applied automatically, edit in Canvas, export in the right format for the destination (social, print, presentation).
- Style and aspect ratio presets shown as a quick reference table for common needs (social post, blog header, presentation background).
- Cross-link back to `/features/ai-image-generator` for visitors who want the feature-level pitch rather than the product-level workflow detail; the two pages should feel complementary, not duplicated.

**Internal links:** `/features/ai-image-generator`, `/products/creative-studio`, `/features/canvas`
**Primary CTA:** Start free

---

## Creative Studio: Slides

**URL:** `/products/creative-studio/slides`
**Search intent:** Overlaps closely with `/features/ai-presentation-maker`; this page owns the Creative Studio workflow framing (brand kit, asset reuse) while the Feature page owns the broad search-facing pitch.
**Primary keyword:** AI slides Creative Studio
**Secondary keywords:** Nexus AI presentation generator, branded AI slides
**Title tag:** `AI Slides | Creative Studio | Nexus AI`
**Meta description:** `Generate on-brand presentations inside Creative Studio. Structure, design and export, all with your brand kit applied.`
**H1:** `Decks that look designed, not generated`

**Content brief:**
- Brand kit application shown specifically for slides: theme colours, fonts and logo placement applied automatically across a generated deck.
- Editing handoff to Canvas demonstrated, since slide structure is the most commonly edited Creative Studio output.
- A short note on combining Slides with Docs (for a one-pager leave-behind) and Images (for custom visuals within a deck), reinforcing the cross-format nature of Creative Studio.

**Internal links:** `/features/ai-presentation-maker`, `/products/creative-studio/docs`, `/products/creative-studio/images`
**Primary CTA:** Start free

---

## Creative Studio: Docs

**URL:** `/products/creative-studio/docs`
**Search intent:** Visitors wanting branded, design-forward documents (proposals, one-pagers, reports) rather than plain text output; distinct from the Chat-driven document drafting covered under Academic Research and Essay Writer.
**Primary keyword:** AI document design
**Secondary keywords:** branded AI documents, AI proposal generator, AI report design
**Title tag:** `AI Docs | Creative Studio | Nexus AI`
**Meta description:** `Generate designed documents, not just text. Proposals, reports and one-pagers with your brand kit applied, ready to export.`
**H1:** `Documents that look finished, not drafted`

**Content brief:**
- Clear differentiation from Chat-based document drafting: Docs in Creative Studio is about visual design and layout (branded templates, formatted reports), while Chat handles long-form written content; the two should be explicitly distinguished to avoid visitor confusion.
- Template categories shown: business proposal, one-pager, internal report, investor update.
- Export formats confirmed (PDF, Word) with a link to Canvas for any further editing before export.

**Internal links:** `/products/creative-studio`, `/features/canvas`, `/features/academic-research`
**Primary CTA:** Start free

---

## Creative Studio: Video

**URL:** `/products/creative-studio/video`
**Search intent:** High-interest, high-competition category; visitors comparing against Runway, Pika and similar AI video tools, often evaluating quality before anything else.
**Primary keyword:** AI video generator
**Secondary keywords:** text to video AI, AI video creation tool, Nexus AI video
**Title tag:** `AI Video Generator | Creative Studio | Nexus AI`
**Meta description:** `Generate short-form video from text or images with Nexus AI. Built for social content, ads and presentations.`
**H1:** `From script to video, without a camera`

**Content brief:**
- Example video embeds at the top of the page, since this category is judged almost entirely on output quality before any copy is read.
- Clear, honest scope statement: typical clip length, resolution and style supported, so expectations are set accurately against more specialised standalone tools.
- Use cases: social ads, product teaser clips, presentation b-roll, paired with the Audio page for a full video-with-voiceover workflow.
- Credit cost stated clearly, since video is the most credit-intensive Creative Studio feature and this should be transparent before generation rather than a surprise.

**Internal links:** `/products/creative-studio/audio`, `/pricing/add-ons`, `/features/ai-image-generator`
**Primary CTA:** Start free

---

## Creative Studio: Audio

**URL:** `/products/creative-studio/audio`
**Search intent:** Largely overlapping with `/features/ai-audio-generator`; this page owns the Creative Studio workflow and brand-voice angle specifically.
**Primary keyword:** AI audio Creative Studio
**Secondary keywords:** Nexus AI voiceover, branded AI voice
**Title tag:** `AI Audio and Voiceover | Creative Studio | Nexus AI`
**Meta description:** `Generate voiceovers and audio for your content inside Creative Studio. Pair with Video and Slides for a complete production.`
**H1:** `Sound that matches the rest of your brand`

**Content brief:**
- Brand voice concept introduced if applicable: a consistent selected voice used across a user's or team's content, paired with the Business plan's brand voice feature mentioned in pricing.
- Direct workflow pairing shown with Video and Slides: generate a voiceover, attach it to a generated video or presentation, without leaving Nexus AI.
- Cross-link to `/features/ai-audio-generator` for the feature-level pitch.

**Internal links:** `/features/ai-audio-generator`, `/products/creative-studio/video`, `/products/creative-studio/slides`
**Primary CTA:** Start free

---

## Creative Studio: Wireframes

**URL:** `/products/creative-studio/wireframes`
**Search intent:** Product managers, founders and designers wanting quick low-fidelity UI mockups from a description; a distinct, more technical sub-audience within Creative Studio.
**Primary keyword:** AI wireframe generator
**Secondary keywords:** AI UI mockup tool, generate wireframes with AI, AI app design mockup
**Title tag:** `AI Wireframe Generator | Creative Studio | Nexus AI`
**Meta description:** `Turn a product idea into a wireframe in minutes. Nexus AI generates UI mockups you can refine and share with your team.`
**H1:** `From idea to wireframe, before the standup`

**Content brief:**
- Example output shown directly: a short description in, a structured low-fidelity wireframe out, since this audience evaluates speed and clarity over visual polish.
- Use cases: early product concepting, investor deck supporting visuals (linking to Slides), team alignment before a design sprint.
- Export and handoff explained: how a wireframe leaves Nexus AI (image export, or further refinement in Canvas) since this audience often needs to move the output into a dedicated design tool afterward.

**Internal links:** `/products/creative-studio`, `/products/creative-studio/slides`, `/features/canvas`
**Primary CTA:** Start free
## Team (business hub)

**URL:** `/team`
**Search intent:** Buying-committee visitors (team leads, founders, IT) researching Nexus AI for a group rather than themselves, often arriving from a colleague's referral link or a comparison search like "AI tools for teams".
**Primary keyword:** Nexus AI for teams
**Secondary keywords:** AI workspace for business, AI tool for companies, Nexus AI for business
**Title tag:** `Nexus AI for Teams and Business`
**Meta description:** `Give your whole team one AI workspace. Shared Folders, admin controls and enterprise-grade security, built for business.`
**H1:** `AI that works the way your team already does`

**Content brief:**
- Distinct framing from the individual-focused homepage: this page speaks to a buyer evaluating on behalf of others, so it should lead with outcomes (consistency, governance, time saved across a team) rather than individual productivity language.
- Three-tier ladder summarised (Teams, Business, Enterprise) each linking to its detail page (`/team/features`, `/team/enterprise`, `/pricing/team`), avoiding duplicating the full pricing table here.
- Security and admin trust signals surfaced early, linking to `/legal/security`, since this is typically a top-three evaluation criterion for a buying committee.
- Case study or testimonial slot reserved for a team-specific quote once available, linking to `/reviews`.

**Internal links:** `/team/features`, `/team/enterprise`, `/pricing/team`, `/team/contact-sales`, `/legal/security`
**Primary CTA:** Talk to sales / Start a Team plan

---

## Team: Features

**URL:** `/team/features`
**Search intent:** A buyer past the initial interest stage, checking the specific feature delta between individual and team plans before recommending a purchase internally.
**Primary keyword:** Nexus AI team features
**Secondary keywords:** shared AI workspace features, team collaboration AI tool
**Title tag:** `Team Features | Nexus AI`
**Meta description:** `Shared Folders, team templates, central billing and admin controls. See everything included in Nexus AI for teams.`
**H1:** `Built for working together, not just working alone`

**Content brief:**
- Feature-by-feature breakdown of everything that changes from an individual plan to Teams: shared Folders, team workspace, central billing, seat management, team templates, shared knowledge base, admin controls, basic analytics.
- A short section on permissions: who can see what within a shared Folder, since this is a common pre-purchase question for any collaborative tool.
- Direct link to `/pricing/team` for cost, keeping this page focused on capability rather than price.

**Internal links:** `/team`, `/pricing/team`, `/features/canvas`
**Primary CTA:** Start a Team plan

---

## Team: Enterprise

**URL:** `/team/enterprise`
**Search intent:** IT, procurement and security-focused evaluators at larger organisations; intent is closer to due diligence than product discovery.
**Primary keyword:** Nexus AI Enterprise
**Secondary keywords:** AI workspace for enterprise, enterprise AI platform, Nexus AI security and compliance
**Title tag:** `Nexus AI Enterprise | Custom AI for Your Organisation`
**Meta description:** `Custom contracts, SSO, audit logs and dedicated support. Nexus AI Enterprise is built for security and scale.`
**H1:** `AI deployment your security team will approve`

**Content brief:**
- Lead with the procurement checklist this audience is actually working through: custom contracts, dedicated onboarding, security review, audit logs, SSO, API access, custom usage limits, SLA, dedicated support, custom integrations, each stated plainly rather than buried in marketing language.
- A direct link to `/legal/security` and `/legal/developer-platform-terms` for the documentation this audience will specifically request.
- No self-serve pricing shown; this page should route to `/team/contact-sales` rather than attempt to quote a price, consistent with custom enterprise pricing.
- A short note on data handling and where this audience's data is processed, anticipating the most common enterprise blocker.

**Internal links:** `/legal/security`, `/legal/developer-platform-terms`, `/team/contact-sales`, `/developers/docs`
**Primary CTA:** Contact sales

---

## Team: Pricing

**URL:** `/team/pricing`
**Search intent:** Functions as a cross-link landing point for buying-committee visitors who reached the Team section first; should not duplicate `/pricing/team` in full.
**Primary keyword:** (none owned; supports `/pricing/team`'s primary keyword without competing)
**Secondary keywords:** Nexus AI business pricing
**Title tag:** `Team Pricing | Nexus AI`
**Meta description:** `See Nexus AI Team, Business and Enterprise pricing. Plans built for groups of every size.`
**H1:** `Pricing for teams of every size`

**Content brief:**
- A short summary band (Teams from $30/seat, Business from $50/seat, Enterprise custom) with a clear, single link through to the full `/pricing/team` page for the detailed comparison table.
- This page exists primarily for navigational completeness within the Team section rather than to rank independently; keep it short and avoid creating duplicate content against `/pricing/team`. Consider a canonical tag pointing to `/pricing/team` if both pages end up substantially similar at launch.

**Internal links:** `/pricing/team`, `/team/contact-sales`
**Primary CTA:** View full pricing

---

## Team: Contact Sales

**URL:** `/team/contact-sales`
**Search intent:** Bottom-of-funnel. Visitors ready to talk to a human, either for a Business-tier negotiation or an Enterprise evaluation.
**Primary keyword:** Nexus AI contact sales
**Secondary keywords:** Nexus AI sales, talk to Nexus AI sales, Nexus AI demo
**Title tag:** `Contact Sales | Nexus AI`
**Meta description:** `Talk to the Nexus AI team about Business or Enterprise plans. Get a demo and a quote built for your organisation.`
**H1:** `Let's find the right plan for your team`

**Content brief:**
- A short, low-friction form: name, work email, company size, what they are looking to solve. Keep fields minimal; this audience is already convinced enough to ask, the form should not introduce new friction.
- Response-time expectation stated explicitly (for example, "we respond within one business day") to set confidence.
- A short FAQ addressing the most common pre-call questions: is a demo required before purchase, can Business be self-served instead, what does Enterprise onboarding involve.

**Internal links:** `/team/enterprise`, `/pricing/team`, `/legal/security`
**Primary CTA:** Submit / Book a call

---

## Reviews / Testimonials

**URL:** `/reviews`
**Search intent:** Late-stage validation. Visitors who already understand the product and are looking for third-party confirmation before paying, often immediately before or after visiting Pricing.
**Primary keyword:** Nexus AI reviews
**Secondary keywords:** Nexus AI testimonials, is Nexus AI good, Nexus AI customer stories
**Title tag:** `Nexus AI Reviews | What Our Users Say`
**Meta description:** `See what students, creators, professionals and teams say about Nexus AI. Real reviews from real users.`
**H1:** `Don't take our word for it`

**Content brief:**
- Testimonials organised by segment (Students, Creators, Professionals, Teams) matching the core segmentation strategy, so each visitor type finds a relevant voice quickly rather than scrolling a generic wall of quotes.
- Third-party review platform scores embedded if and when available (G2, Trustpilot, app store ratings), since independent verification carries more weight than on-site quotes alone.
- A short case study format for two or three standout stories: the problem, the workflow used, the outcome, each linking back to the relevant `/features/*` or `/products/*` page that solved it.
- A light review-submission prompt for existing users at the bottom, to keep this page's content fresh over time.

**Internal links:** `/pricing`, `/about`, relevant `/features/*` pages referenced within case studies
**Primary CTA:** Start free
## Legal (hub)

**URL:** `/legal`
**Search intent:** Navigational only; visitors looking for a specific policy document, usually arriving via the footer rather than search.
**Primary keyword:** Nexus AI legal
**Secondary keywords:** Nexus AI policies, Nexus AI terms
**Title tag:** `Legal | Nexus AI`
**Meta description:** `Privacy Policy, Terms of Service, Security and all Nexus AI legal documents in one place.`
**H1:** `Legal and policy documents`

**Content brief:**
- Simple list of links to all seven child documents, each with a one-line description and last-updated date. No persuasive content; this page is a directory, and clarity beats design here.

**Internal links:** all `/legal/*` pages
**Primary CTA:** None (informational)

---

## Privacy Policy

**URL:** `/legal/privacy-policy`
**Search intent:** Compliance and trust verification; also directly linked from in-product consent flows and several Feature pages (Memory, Meeting Notes, browser extension).
**Primary keyword:** Nexus AI Privacy Policy
**Title tag:** `Privacy Policy | Nexus AI`
**Meta description:** `Read how Nexus AI collects, uses and protects your data.`
**H1:** `Privacy Policy`

**Content brief:**
- Standard legal structure: data collected, purpose of collection, third-party sharing, retention periods, user rights (access, deletion, export), regional compliance notes (GDPR, CCPA, and any other applicable jurisdiction), contact details for privacy requests.
- A short plain-language summary box at the top of the page, above the formal legal text, since this is consistently the highest-bounce legal page when written as dense legal text alone; a summary improves both user trust and on-page time.
- Specific sections addressing AI-specific data handling: whether uploaded files or chat content are used for model training, and how Memory data is stored and can be cleared, since these are the most-asked questions linked here from Feature pages.

**Internal links:** `/legal/security`, `/legal/usage-policy`, `/features/ai-memory`
**Primary CTA:** None (informational)

---

## Terms of Service

**URL:** `/legal/terms-of-service`
**Search intent:** Compliance verification, typically linked from account signup.
**Primary keyword:** Nexus AI Terms of Service
**Title tag:** `Terms of Service | Nexus AI`
**Meta description:** `The terms that govern your use of Nexus AI.`
**H1:** `Terms of Service`

**Content brief:**
- Standard structure: account eligibility, acceptable use cross-reference to `/legal/usage-policy`, subscription and billing terms cross-reference to `/legal/refund-policy`, intellectual property (notably who owns content generated through Nexus AI, a question this audience asks often and that should be answered unambiguously), termination conditions, liability limitations, dispute resolution and governing law.

**Internal links:** `/legal/usage-policy`, `/legal/refund-policy`, `/legal/privacy-policy`
**Primary CTA:** None (informational)

---

## Refund Policy

**URL:** `/legal/refund-policy`
**Search intent:** Pre-purchase due diligence (checking before buying annual) and post-purchase dispute resolution (checking after a cancellation); two very different moments that the same page must serve.
**Primary keyword:** Nexus AI Refund Policy
**Title tag:** `Refund Policy | Nexus AI`
**Meta description:** `How refunds work for Nexus AI monthly and annual plans.`
**H1:** `Refund Policy`

**Content brief:**
- Clear, separate treatment of monthly versus annual billing refund eligibility, since this is the single most common pre-purchase question surfaced on the Pricing FAQ and should be answered with full detail here rather than only in summary.
- Process for requesting a refund stated as numbered steps, with expected turnaround time.
- Treatment of add-on and top-up purchases specifically, since usage-based purchases often have different refund logic than subscriptions and this is a common source of support tickets if left ambiguous.

**Internal links:** `/pricing`, `/legal/terms-of-service`
**Primary CTA:** Contact support (link)

---

## Affiliate Policy

**URL:** `/legal/affiliate-policy`
**Search intent:** Prospective and active affiliates checking programme rules before or while promoting Nexus AI.
**Primary keyword:** Nexus AI Affiliate Policy
**Title tag:** `Affiliate Policy | Nexus AI`
**Meta description:** `Rules and terms for the Nexus AI Affiliate Program.`
**H1:** `Affiliate Policy`

**Content brief:**
- Commission structure and payout terms, prohibited promotional practices (no incentivised or fraudulent signups, no bidding on the brand name in paid search, and any other restrictions the programme requires), cookie duration and attribution rules, termination conditions for programme violations.
- This page is the legal backstop for `/affiliates`, which carries the persuasive pitch; keep this page neutral and precise rather than promotional.

**Internal links:** `/affiliates`, `/legal/terms-of-service`
**Primary CTA:** Apply to the affiliate programme (link to `/affiliates`)

---

## Usage Policy

**URL:** `/legal/usage-policy`
**Search intent:** Compliance verification, and a common destination for users checking whether a specific use case (for example, commercial use of generated images, or automated/bulk usage) is permitted.
**Primary keyword:** Nexus AI Usage Policy
**Title tag:** `Usage Policy | Nexus AI`
**Meta description:** `Acceptable use guidelines for Nexus AI, including Chat, Creative Studio, Code and the Chatbot add-on.`
**H1:** `Usage Policy`

**Content brief:**
- Acceptable and prohibited use cases stated plainly across each product pillar: general prohibited content categories, restrictions specific to generated images and video, restrictions on chatbot deployment (no impersonation, no use for spam), restrictions on automated or bulk API usage outside the Developer Platform terms.
- Fair-use clarification cross-referenced from the pricing and credit pages, defining what constitutes abuse of "unlimited" or high-limit plan language.
- Enforcement process: what happens on a first violation versus repeated violations, since transparency here reduces disputed account suspensions.

**Internal links:** `/legal/terms-of-service`, `/legal/developer-platform-terms`, `/pricing`
**Primary CTA:** None (informational)

---

## Security

**URL:** `/legal/security`
**Search intent:** Procurement and IT due diligence, almost always linked here from `/team/enterprise` or a direct internal security review process; this is one of the highest-value B2B pages on the site despite low search volume.
**Primary keyword:** Nexus AI Security
**Secondary keywords:** Nexus AI data security, Nexus AI compliance, is Nexus AI SOC 2
**Title tag:** `Security | Nexus AI`
**Meta description:** `How Nexus AI protects your data. Encryption, access controls, compliance certifications and audit logging.`
**H1:** `Built to pass your security review`

**Content brief:**
- Written for a security reviewer, not a general visitor: encryption in transit and at rest, access control model, data residency, sub-processor list or link, incident response process, and any compliance certifications held or in progress (state honestly if a certification is in progress rather than implying it is complete).
- A downloadable security overview document (PDF) for procurement teams who need to circulate it internally, since this audience frequently needs an artefact rather than just a webpage.
- Direct link to `/team/contact-sales` for security questionnaire requests beyond what is published here.

**Internal links:** `/team/enterprise`, `/legal/privacy-policy`, `/team/contact-sales`
**Primary CTA:** Download security overview / Contact sales

---

## Developer Platform Terms of Service

**URL:** `/legal/developer-platform-terms`
**Search intent:** Developers integrating the Nexus AI API, checking usage rights, liability and data handling specific to programmatic access.
**Primary keyword:** Nexus AI Developer Platform Terms
**Title tag:** `Developer Platform Terms of Service | Nexus AI`
**Meta description:** `Terms governing use of the Nexus AI API and Developer Platform.`
**H1:** `Developer Platform Terms of Service`

**Content brief:**
- API-specific terms distinct from the general Terms of Service: rate limits and fair use, data handling for API-submitted content, liability for downstream applications built on the API, intellectual property treatment of API output specifically, suspension and termination conditions for API misuse.
- Cross-reference to `/legal/usage-policy` for content restrictions that apply equally to API usage.

**Internal links:** `/developers/docs`, `/developers/pricing`, `/legal/usage-policy`
**Primary CTA:** None (informational)

---

## Affiliate Program

**URL:** `/affiliates`
**Search intent:** Creators, bloggers and influencers researching whether Nexus AI has an affiliate programme worth promoting, often comparing commission rates against other AI tool programmes before committing their audience's attention.
**Primary keyword:** Nexus AI Affiliate Program
**Secondary keywords:** Nexus AI affiliate, earn money promoting AI tools, AI tool affiliate programme
**Title tag:** `Nexus AI Affiliate Program | Earn Recurring Commission`
**Meta description:** `Earn up to 30% recurring commission promoting Nexus AI. Built for creators, bloggers and AI educators.`
**H1:** `Get paid for every Nexus AI subscriber you bring`

**Content brief:**
- Commission structure stated immediately and clearly (rate, recurring versus one-time, cookie duration), since this is the first thing a prospective affiliate checks and burying it costs signups.
- Who the programme is built for: student ambassadors, YouTube and TikTok creators, SEO bloggers, AI newsletter writers, review sites, agency affiliates, each with a one-line note on what assets or support is provided to them.
- Dashboard and payout process explained briefly: tracking, reporting, payout schedule and method.
- Direct link to `/legal/affiliate-policy` for the formal rules, keeping this page focused on the pitch rather than the legal detail.

**Internal links:** `/legal/affiliate-policy`, `/about`, `/resources/blog`
**Primary CTA:** Apply now

---

## Resources (hub)

**URL:** `/resources`
**Search intent:** Mixed; existing users checking for updates or status, and prospective users browsing educational content before converting.
**Primary keyword:** Nexus AI resources
**Secondary keywords:** Nexus AI blog, Nexus AI updates
**Title tag:** `Resources | Nexus AI`
**Meta description:** `Blog posts, product updates, changelog and system status, all in one place.`
**H1:** `Everything beyond the product`

**Content brief:**
- Simple directory linking to Blog, Changelog, Status and Updates, each with a one-line description and, where feasible, a live preview of the most recent two or three items (latest blog post, latest changelog entry).

**Internal links:** `/resources/blog`, `/resources/changelog`, `/status`, `/resources/updates`
**Primary CTA:** None (informational)

---

## Blog

**URL:** `/resources/blog`
**Search intent:** The primary top-of-funnel SEO surface for the entire site; covers the full content engine (comparison posts, how-to guides, segment-specific articles) described in the broader content strategy.
**Primary keyword:** Nexus AI blog
**Secondary keywords:** varies per article; the blog index itself targets only the branded term
**Title tag:** `Blog | Nexus AI`
**Meta description:** `Guides, comparisons and tips on getting the most out of AI for research, writing, creative work and more.`
**H1:** `The Nexus AI blog`

**Content brief:**
- Category filtering aligned to the twelve content pillars from the broader content strategy (academic writing, AI for students, creators, professionals, comparisons, productivity, and so on), so the index itself supports internal linking and topical clustering rather than being a flat chronological list.
- Featured-post slot at the top for the highest-priority current article (a major comparison piece or product launch post).
- Each post should follow its own title tag, meta description and target keyword per the article ideas already mapped in the content strategy; this index page itself targets only the branded "Nexus AI blog" term.

**Internal links:** representative links into `/features/*` and `/products/*` pages from within individual posts
**Primary CTA:** Start free (persistent sidebar or footer CTA across posts)

---

## Changelog

**URL:** `/resources/changelog`
**Search intent:** Existing users and prospective technical buyers checking release cadence and recent improvements; also a trust signal for visitors evaluating whether the product is actively maintained.
**Primary keyword:** Nexus AI changelog
**Secondary keywords:** Nexus AI updates, Nexus AI release notes
**Title tag:** `Changelog | Nexus AI`
**Meta description:** `See what's new in Nexus AI. Every release, feature and fix, in order.`
**H1:** `What's new in Nexus AI`

**Content brief:**
- Reverse-chronological entries, each tagged by type (New, Improved, Fixed) and by product pillar (Chat, Creative Studio, Code, Canvas) so users can filter to what is relevant to them.
- Each entry linking to the relevant `/features/*` or `/products/*` page where applicable, turning the changelog into an ongoing internal-linking asset rather than a static log.
- RSS or email subscribe option for users who want release notifications without checking manually.

**Internal links:** relevant `/features/*` and `/products/*` pages per entry
**Primary CTA:** Subscribe to updates

---

## Status

**URL:** `/status` (recommend hosting at `status.mynexusai.com` operationally, content brief applies regardless of host)
**Search intent:** Almost entirely existing users checking for an active incident, usually arriving via a direct link during an outage rather than organic search.
**Primary keyword:** Nexus AI status
**Secondary keywords:** is Nexus AI down, Nexus AI outage
**Title tag:** `System Status | Nexus AI`
**Meta description:** `Live status for Nexus AI services. Check for ongoing incidents and view uptime history.`
**H1:** `System status`

**Content brief:**
- Live status indicator per major component (Chat, Creative Studio, Code, Chatbot, API, web app, mobile app), since a single overall status does not answer "is the part I use working" during a partial outage.
- Incident history with timestamps and resolution notes.
- Subscribe option (email or SMS) for proactive incident notification.
- This page should load fast and independently of the main site's infrastructure where possible, which is the core reason to host it on a separate subdomain.

**Internal links:** minimal by design; a link back to `/` and to `/resources/changelog`
**Primary CTA:** Subscribe to status updates

---

## Update

**URL:** `/resources/updates`
**Search intent:** Prospective users wanting a narrative, less technical view of product direction than the Changelog provides; functions as a lighter-weight "what's new" page for marketing and re-engagement purposes.
**Primary keyword:** Nexus AI updates
**Secondary keywords:** Nexus AI new features, Nexus AI product news
**Title tag:** `Product Updates | Nexus AI`
**Meta description:** `The latest features and improvements to Nexus AI, explained.`
**H1:** `What's new, explained`

**Content brief:**
- Distinct from the Changelog in tone and depth: each entry here is a short narrative write-up (what shipped, why it matters, who it helps) rather than a terse log line, suitable for re-engagement emails and social posts.
- Each major update links through to its full `/features/*` or `/products/*` page for users who want to try it immediately.
- Consider whether this page is necessary as distinct from the Blog and Changelog at launch; if update volume is low in the first few months, this content can run as a Blog category instead and be split out once volume justifies a dedicated page.

**Internal links:** relevant `/features/*` and `/products/*` pages, `/resources/changelog`
**Primary CTA:** Start free
## Developer Platform (hub)

**URL:** `/developers`
**Search intent:** Developers and technical teams evaluating Nexus AI as an API/infrastructure provider rather than as an end-user product; distinct audience from `/products/code`, which is for using Nexus AI to write code, not building on top of Nexus AI programmatically.
**Primary keyword:** Nexus AI API
**Secondary keywords:** Nexus AI developer platform, build with Nexus AI, Nexus AI for developers
**Title tag:** `Nexus AI Developer Platform | API and Docs`
**Meta description:** `Build on Nexus AI. API access, documentation and a developer console to integrate chat, generation and more into your own product.`
**H1:** `Build with Nexus AI`

**Content brief:**
- Clear scope-setting at the top: this section is for building products on top of Nexus AI's API, distinct from `/products/code` (using Nexus AI as a coding assistant); an explicit one-line distinction prevents this being the most-confused pair of pages on the site.
- Three-card overview linking to Pricing, Developer Console and Documentation.
- A short "what you can build" section with concrete examples (a custom chatbot integration beyond the no-code `/products/chatbot` builder, a workflow automation, an embedded research assistant).
- Quickstart code snippet shown directly on the page (authentication and a first API call) to immediately serve the audience's actual intent.

**Internal links:** `/developers/pricing`, `/developers/console`, `/developers/docs`, `/developers/contact-sales`, `/products/code`
**Primary CTA:** Get an API key / Read the docs

---

## Developer Platform: Pricing

**URL:** `/developers/pricing`
**Search intent:** Developers calculating API cost before integrating, typically comparing per-token or per-request pricing against OpenAI, Anthropic and similar API providers.
**Primary keyword:** Nexus AI API pricing
**Secondary keywords:** Nexus AI developer pricing, Nexus AI API cost
**Title tag:** `Developer Platform Pricing | Nexus AI API`
**Meta description:** `Pay-as-you-go API pricing for Nexus AI. Transparent per-request rates, with volume pricing for larger integrations.`
**H1:** `Simple, usage-based API pricing`

**Content brief:**
- Rate table by capability (chat completion, image generation, audio generation, code-related endpoints if exposed), priced per unit consistent with the credit framework used across the rest of the site, with a clear note on how API usage relates to (or is billed separately from) consumer plan credits.
- A cost calculator or worked example (for example, "1,000 chat completions plus 100 images costs approximately...") since raw per-unit rates are hard to reason about without a concrete scenario.
- Volume and custom pricing pointer to `/developers/contact-sales` for larger committed-use integrations.

**Internal links:** `/developers/console`, `/developers/docs`, `/developers/contact-sales`
**Primary CTA:** Get an API key

---

## Developer Console

**URL:** `/developers/console`
**Search intent:** Existing or near-converted developers looking to manage API keys, monitor usage and configure their integration; this page is largely a product surface rather than a marketing page, but still needs a clear entry point and explanation for first-time visitors.
**Primary keyword:** Nexus AI Developer Console
**Secondary keywords:** Nexus AI API keys, Nexus AI API dashboard
**Title tag:** `Developer Console | Nexus AI`
**Meta description:** `Manage API keys, monitor usage and configure your Nexus AI integration from the Developer Console.`
**H1:** `Your API, under control`

**Content brief:**
- For logged-out visitors: a short explanation of what the console offers (key management, usage monitoring, rate limit visibility, billing) with a sign-up/log-in prompt, since this page will mostly be an application interface behind authentication rather than a long-form marketing page.
- For SEO purposes, ensure the logged-out marketing view is fully crawlable and describes the console's value even though the functional tool itself sits behind login.

**Internal links:** `/developers/docs`, `/developers/pricing`
**Primary CTA:** Log in / Get an API key

---

## Documentation

**URL:** `/developers/docs`
**Search intent:** Highest-intent technical traffic on the site; developers actively integrating and searching for specific endpoint references, error codes or implementation guides.
**Primary keyword:** Nexus AI API documentation
**Secondary keywords:** Nexus AI API reference, Nexus AI developer docs
**Title tag:** `Documentation | Nexus AI Developer Platform`
**Meta description:** `Full API reference, guides and code examples for building with Nexus AI.`
**H1:** `Documentation`

**Content brief:**
- Standard documentation structure: getting started guide, authentication, endpoint reference (organised by capability: chat, generation, code, chatbot deployment), rate limits and error handling, SDKs or client libraries if available, and a changelog specific to the API (distinct from the consumer-facing `/resources/changelog`).
- Each major guide and endpoint page should carry its own specific title tag and target a specific long-tail technical query (for example, "Nexus AI API authentication", "Nexus AI API rate limits") rather than relying on this index page to rank for all of them; documentation is most valuable for SEO as a large set of deep, specific pages rather than one broad one.
- Code examples in multiple languages where feasible (cURL, Python, JavaScript at minimum), since this measurably reduces integration time and support burden.

**Internal links:** `/developers/console`, `/developers/pricing`, `/legal/developer-platform-terms`
**Primary CTA:** Get an API key

---

## Developer Platform: Contact Sales

**URL:** `/developers/contact-sales`
**Search intent:** Technical buyers needing committed-use pricing, dedicated support, or custom rate limits beyond self-serve API access.
**Primary keyword:** Nexus AI API enterprise / Nexus AI developer sales
**Secondary keywords:** Nexus AI API custom pricing, Nexus AI committed use
**Title tag:** `Contact Developer Sales | Nexus AI`
**Meta description:** `Talk to the Nexus AI team about custom API pricing, higher rate limits and dedicated developer support.`
**H1:** `Building something bigger? Let's talk`

**Content brief:**
- Short form similar in structure to `/team/contact-sales` but scoped to technical/API needs: company, expected request volume, use case description.
- A brief note on what this conversation typically covers: committed-use discounts, custom rate limits, dedicated support SLAs, since this sets expectations and reduces unqualified submissions.

**Internal links:** `/developers/pricing`, `/developers`
**Primary CTA:** Submit / Book a call

---

# Implementation priority

For a phased build rather than launching all ~50 pages simultaneously, this is the recommended sequencing, grouped by the commercial and SEO impact of getting each group live first.

**Phase 1: Core conversion path (build first)**
Homepage, Pricing (hub), Pricing: Team, Downloads (hub) plus the two or three most-used platform pages, Features: AI File Chat, Features: Academic Research, Features: AI Essay Writer, Features: Canvas, Products (hub), Products: Chat, Legal: Privacy Policy, Legal: Terms of Service.
*Rationale: this is the minimum set required to support the existing wedge (research to document), take payment, and meet basic legal requirements.*

**Phase 2: Full feature and product depth**
Remaining Features pages, remaining Products pages including all Creative Studio and Code sub-pages, Pricing: Add-ons, Pricing: Chatbot, remaining Downloads platform pages.
*Rationale: this phase fills out the full product story once the core funnel is proven and traffic is arriving.*

**Phase 3: B2B and trust infrastructure**
Team (hub) and all four child pages, Legal: Security, Reviews, About Us.
*Rationale: required once outbound sales and larger-account conversations begin, per the go-to-market sequencing that prioritises individual and small-team adoption before enterprise.*

**Phase 4: Platform and ecosystem**
Developer Platform (all five pages), Affiliate Program plus Legal: Affiliate Policy, Resources (all four pages), remaining Legal pages (Refund Policy, Usage Policy, Developer Platform Terms).
*Rationale: these support expansion motions (API revenue, affiliate-driven acquisition, content compounding) that the broader growth plan sequences after the core product and funnel are validated.*

Each phase should be SEO-indexed as it ships rather than held back; do not stage pages live-but-unindexed, since early indexation is part of how the programmatic and long-tail pages start accumulating authority ahead of the traffic targets in the growth plan.

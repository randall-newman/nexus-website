export interface SolutionUseCase {
  title: string;
  description: string;
  icon: string;
}

export interface SolutionFaqItem {
  value: string;
  question: string;
  answer: string;
}

export interface Solution {
  slug: string;
  type: 'industry' | 'audience';
  name: string;
  tagline: string;
  description: string;
  stats: Array<{ value: string; label: string }>;
  useCases: SolutionUseCase[];
  tools: string[];
  faq: SolutionFaqItem[];
  icon: string;
  color: string;
}

export const solutionsData: Solution[] = [
  // ─── INDUSTRIES ────────────────────────────────────────────────────────────

  {
    slug: 'education',
    type: 'industry',
    name: 'Education',
    tagline: 'AI that transforms teaching and accelerates student learning',
    description:
      'Nexus AI empowers educators to design engaging lesson plans, generate differentiated content, and give every student access to instant research support. From K–12 classrooms to university lecture halls, our platform cuts administrative overhead so teachers can focus on what matters most — their students.',
    stats: [
      { value: '40%', label: 'Reduction in lesson-planning time' },
      { value: '3.2×', label: 'Increase in student research depth' },
      { value: '94%', label: 'Educator satisfaction rate' },
    ],
    useCases: [
      {
        title: 'Differentiated Lesson Planning',
        description:
          'Generate tiered lesson plans for below-grade, on-grade, and advanced learners from a single topic prompt. Include learning objectives, activity sequences, and suggested assessments aligned to Common Core or state standards.',
        icon: '📋',
      },
      {
        title: 'Student Essay Feedback & Coaching',
        description:
          'Provide specific, rubric-aligned written feedback on student essays — identifying thesis clarity, evidence use, and grammar issues — without simply rewriting the work. Give each student actionable revision steps they can act on immediately.',
        icon: '✍️',
      },
      {
        title: 'Academic Research Assistance',
        description:
          'Guide students through multi-step research using credible sources, helping them evaluate source quality, synthesize competing arguments, and build an annotated bibliography. Surfaces peer-reviewed literature without leading students to unsupported claims.',
        icon: '🔬',
      },
      {
        title: 'Quiz & Assessment Generation',
        description:
          'Create multiple-choice, short-answer, matching, and essay questions from any uploaded text, lecture notes, or curriculum standard. Automatically generate an answer key and Bloom\'s Taxonomy tagging for each item.',
        icon: '📝',
      },
      {
        title: 'IEP & Special Education Documentation',
        description:
          'Draft Individualized Education Program goal statements, present-level-of-performance narratives, and accommodation lists from teacher observations and prior evaluations. Reduce documentation time from hours to minutes while maintaining compliance language.',
        icon: '🎯',
      },
      {
        title: 'Parent & Guardian Communication',
        description:
          'Write clear, professional parent update letters, progress report narratives, and conference summaries from brief teacher notes. Automatically adjust reading level and tone, and translate communications into over 50 languages for multilingual families.',
        icon: '💌',
      },
    ],
    tools: ['Essay Writer', 'Academic Research', 'Plagiarism Checker', 'AI Chat', 'Artifacts', 'AI Presentation Maker'],
    faq: [
      {
        value: 'edu-ferpa-compliance',
        question: 'Is Nexus AI compliant with FERPA and COPPA?',
        answer:
          'Yes. Nexus AI signs a FERPA-compliant Data Processing Agreement with every educational institution and maintains COPPA compliance for student users under 13. Student data entered into the platform is never used to train our models, and we publish a dedicated Student Data Privacy Policy that meets the requirements of the Student Privacy Pledge.',
      },
      {
        value: 'edu-academic-integrity',
        question: 'How should schools handle academic integrity concerns with AI?',
        answer:
          'Nexus AI includes a built-in Plagiarism Checker that flags AI-assisted and copied content in student submissions, giving teachers full visibility. We also provide an Educator Integrity Toolkit — a set of prompt templates and classroom policies that help teachers design AI-aware assignments where using Nexus AI becomes a transparent, skills-building activity rather than a shortcut.',
      },
      {
        value: 'edu-grade-levels',
        question: 'What grade levels and subject areas does Nexus AI support?',
        answer:
          'Nexus AI adapts to K–12, community college, and university contexts across all core subjects — English Language Arts, STEM, social studies, world languages, and the arts. Reading level, vocabulary, and output complexity can be set explicitly or inferred from the curriculum context you provide.',
      },
      {
        value: 'edu-plagiarism-vs-turnitin',
        question: 'How does the Nexus AI Plagiarism Checker compare to Turnitin?',
        answer:
          'Our Plagiarism Checker screens against a continuously updated database of web sources, academic journals, and student paper repositories, and also includes AI-origin detection that identifies machine-generated text. Unlike Turnitin, originality reports are included in every Nexus AI plan with no per-submission fees, and the interface is accessible directly inside the same workspace teachers use for lesson planning.',
      },
      {
        value: 'edu-institutional-pricing',
        question: 'Do you offer district-wide or institutional pricing?',
        answer:
          'Yes. We offer volume pricing for districts, school networks, and higher education institutions, including a Title I discount program and negotiated multi-year agreements. Contact our education team for a custom quote — most institutions have their deployment live within two weeks of signing.',
      },
    ],
    icon: '🎓',
    color: 'bg-blue-50',
  },

  {
    slug: 'financial-services',
    type: 'industry',
    name: 'Financial Services',
    tagline: 'Accelerate analysis, reporting, and client work with precision AI',
    description:
      'Nexus AI helps financial professionals cut through information overload — summarizing earnings calls, analyzing regulatory filings, and generating client-ready reports in a fraction of the time. Built with the security and audit trail requirements of regulated environments, it fits naturally into investment, banking, and advisory workflows.',
    stats: [
      { value: '70%', label: 'Faster first-draft client report generation' },
      { value: '5 hrs', label: 'Saved per analyst per week on document review' },
      { value: '99.9%', label: 'Platform uptime SLA' },
    ],
    useCases: [
      {
        title: 'Client Investment Report Drafting',
        description:
          'Generate polished, client-ready investment summary letters and quarterly portfolio commentary from trade logs, performance data, and market context notes. Maintain a consistent tone and comply with firm disclosure templates automatically.',
        icon: '📊',
      },
      {
        title: 'Regulatory Document Analysis',
        description:
          'Upload SEC filings, FINRA notices, or internal compliance memos and extract key obligations, effective dates, and action items in minutes. Nexus AI surfaces the clauses most relevant to your business line so compliance officers can prioritize quickly.',
        icon: '⚖️',
      },
      {
        title: 'Earnings Call Summarization',
        description:
          'Paste or upload quarterly earnings call transcripts and receive a structured summary covering revenue drivers, management guidance, risk factors, and analyst Q&A highlights. Compare summaries across multiple companies side-by-side to inform sector views.',
        icon: '📞',
      },
      {
        title: 'Financial Model Narrative Generation',
        description:
          'Convert the output of complex Excel or Python financial models into plain-English client narratives and investment memos. Explain assumptions, sensitivities, and scenarios without losing analytical rigor.',
        icon: '📈',
      },
      {
        title: 'RFP Response Drafting',
        description:
          'Rapidly draft responses to institutional investment management and wealth management RFPs by feeding Nexus AI your firm\'s standard capability documents, performance track record, and the specific RFP questions. Produce tailored, professional responses in hours rather than days.',
        icon: '📄',
      },
      {
        title: 'Market Research Synthesis',
        description:
          'Aggregate and synthesize research reports from multiple sources — broker notes, industry surveys, central bank publications — into a single coherent briefing document. Export to Word or PowerPoint for immediate distribution to clients or internal stakeholders.',
        icon: '🔭',
      },
    ],
    tools: ['AI Chat', 'Academic Research', 'AI File Chat', 'Code', 'Artifacts', 'Microsoft 365'],
    faq: [
      {
        value: 'fin-data-training',
        question: 'Is the data I enter into Nexus AI used to train your models?',
        answer:
          'No. Business and Enterprise plan data is never used to train or improve Nexus AI models. All inputs and outputs are isolated to your organization\'s workspace, and we sign a Data Processing Agreement that contractually prohibits training use. We undergo annual third-party audits to verify this commitment.',
      },
      {
        value: 'fin-soc2',
        question: 'Is Nexus AI SOC 2 Type II certified?',
        answer:
          'Yes. Nexus AI holds SOC 2 Type II certification covering Security, Availability, and Confidentiality trust service criteria. Our audit reports are available to enterprise customers under NDA. We also maintain ISO 27001 certification and conduct quarterly penetration testing.',
      },
      {
        value: 'fin-file-types',
        question: 'Can Nexus AI read PDF prospectuses, Excel models, and financial statements?',
        answer:
          'Yes. AI File Chat supports PDF, Word, Excel, CSV, and PowerPoint uploads up to 500 MB per file, with batch processing for large document sets. The model preserves numerical precision and table structure, so it accurately references figures from financial statements without hallucinating data.',
      },
      {
        value: 'fin-not-advice',
        question: 'Does Nexus AI provide regulated financial advice or investment recommendations?',
        answer:
          'No. Nexus AI is a productivity and research tool, not a registered investment adviser or broker-dealer. All outputs are drafts for review by licensed professionals and should not be distributed to clients without human review and appropriate disclosure. We include model-generated content watermarks that can be toggled for internal drafts.',
      },
      {
        value: 'fin-private-deployment',
        question: 'Can we deploy Nexus AI in a private cloud or behind our firewall?',
        answer:
          'Yes — our Enterprise tier supports deployment in your AWS, Azure, or GCP private tenant, with no data egress to Nexus AI infrastructure. We provide a Terraform deployment module and dedicated implementation engineering support to get your private instance live within 30 days.',
      },
    ],
    icon: '💹',
    color: 'bg-emerald-50',
  },

  {
    slug: 'legal',
    type: 'industry',
    name: 'Legal',
    tagline: 'From contract review to client letters, faster and sharper',
    description:
      'Nexus AI compresses hours of legal document work into minutes — surfacing key clauses, summarizing case law, and drafting client-ready communications from complex legal briefs. Whether you\'re in BigLaw, a boutique firm, or an in-house team, Nexus AI becomes the always-available associate that never misses a deadline.',
    stats: [
      { value: '65%', label: 'Reduction in first-draft contract review time' },
      { value: '4×', label: 'More matters handled per attorney per month' },
      { value: '100%', label: 'Output audit trail for matter files' },
    ],
    useCases: [
      {
        title: 'Contract Review & Clause Extraction',
        description:
          'Upload NDAs, service agreements, or M&A transaction documents and receive a structured summary of key clauses, obligations, termination rights, indemnification language, and risk flags. Identify non-standard provisions against your firm\'s preferred positions.',
        icon: '📑',
      },
      {
        title: 'Legal Research Assistance',
        description:
          'Describe a legal question and receive a synthesized research memo covering relevant statutes, regulations, and case law. Nexus AI cites specific authorities and flags jurisdictional variations, giving attorneys a strong starting point that reduces billable research hours.',
        icon: '🔍',
      },
      {
        title: 'Deposition Preparation',
        description:
          'Feed Nexus AI case facts, prior deposition transcripts, and witness profiles to generate targeted deposition question outlines. Automatically identify inconsistencies in prior statements and suggest impeachment sequences.',
        icon: '🎙️',
      },
      {
        title: 'Client Communication Drafting',
        description:
          'Translate dense legal briefs, motions, and court orders into clear, plain-language client update letters that non-lawyers can understand. Maintain appropriate privilege language and firm branding throughout every communication.',
        icon: '✉️',
      },
      {
        title: 'Redline Comparison & Change Summarization',
        description:
          'Upload two versions of a contract and receive a plain-English summary of every substantive change — categorized by topic, risk level, and commercial impact. Save negotiators from reading hundreds of pages of tracked changes manually.',
        icon: '🔴',
      },
      {
        title: 'Demand Letter & Pleading Drafting',
        description:
          'Generate first-draft demand letters, cease-and-desist notices, and complaint drafts from a structured summary of case facts, claimed damages, and legal theories. Attorneys review and finalize rather than writing from scratch.',
        icon: '⚡',
      },
    ],
    tools: ['AI File Chat', 'AI Chat', 'Academic Research', 'Artifacts', 'Microsoft 365'],
    faq: [
      {
        value: 'legal-privilege',
        question: 'Is attorney-client privilege preserved when using Nexus AI?',
        answer:
          'Nexus AI is a tool under attorney supervision, and privilege analysis depends on how it is deployed within your firm\'s workflows. We recommend treating Nexus AI outputs as attorney work product when used in matter-specific contexts. Our Enterprise plan includes a BAA and contractual data isolation commitments that support privilege arguments, and our legal technology counsel can provide a privilege memo on request.',
      },
      {
        value: 'legal-not-a-lawyer',
        question: 'Can Nexus AI replace legal counsel?',
        answer:
          'No. Nexus AI is a productivity tool for licensed legal professionals, not a substitute for legal advice or representation. All AI-generated legal documents and research memos must be reviewed, verified, and approved by a licensed attorney before use. We include prominent review reminders in every legal output.',
      },
      {
        value: 'legal-file-size',
        question: 'What is the maximum document size for contract and filing uploads?',
        answer:
          'AI File Chat supports single files up to 500 MB and batches of up to 50 documents in a single session. For large-scale due diligence projects — such as reviewing thousands of transaction documents — our Enterprise batch processing API handles unlimited volume with results returned in structured JSON or Word format.',
      },
      {
        value: 'legal-case-law-currency',
        question: 'How current is Nexus AI\'s knowledge of case law and statutes?',
        answer:
          'Nexus AI\'s base model knowledge is updated regularly, and the Academic Research tool can surface recent developments through live database queries. For matters where currency of authority is critical, we recommend verifying all cited cases in Westlaw or Lexis — Nexus AI is designed to augment, not replace, dedicated legal research platforms.',
      },
      {
        value: 'legal-jurisdictions',
        question: 'Does Nexus AI support multiple jurisdictions, including international law?',
        answer:
          'Yes. Nexus AI has substantive coverage across US federal and state law, EU regulations (GDPR, MiFID II, etc.), UK law post-Brexit, and major common law and civil law jurisdictions globally. You can specify the governing jurisdiction in your prompt, and Nexus AI will tailor its research and drafting accordingly.',
      },
    ],
    icon: '⚖️',
    color: 'bg-slate-50',
  },

  {
    slug: 'sales',
    type: 'industry',
    name: 'Sales',
    tagline: 'Close more deals with AI-powered research and personalized outreach',
    description:
      'Nexus AI equips sales teams to research prospects deeply, personalize outreach at scale, and write compelling proposals in the time it used to take to draft a single email. From SDR to account executive to sales leader, every rep on your team can operate like your best performer.',
    stats: [
      { value: '3×', label: 'More personalized emails sent per day per rep' },
      { value: '28%', label: 'Higher reply rate on AI-assisted cold outreach' },
      { value: '1.5 hrs', label: 'Saved per rep daily on admin and writing tasks' },
    ],
    useCases: [
      {
        title: 'Prospect Research Briefing',
        description:
          'Generate a comprehensive account brief before every discovery call — covering the prospect\'s business model, recent news, key initiatives, likely pain points, and relevant competitors — from public sources in under two minutes.',
        icon: '🔎',
      },
      {
        title: 'Personalized Cold Outreach at Scale',
        description:
          'Write highly personalized cold emails and LinkedIn connection messages that reference each prospect\'s specific situation, not just their job title. Maintain your authentic voice while generating hundreds of unique, non-generic messages per day.',
        icon: '📨',
      },
      {
        title: 'Sales Proposal & Quote Generation',
        description:
          'Turn your call notes, deal context, and product specs into a fully structured sales proposal with executive summary, solution mapping, ROI narrative, and pricing section. Proposals that used to take a day now take 20 minutes.',
        icon: '📃',
      },
      {
        title: 'Objection Handling & Role-Play',
        description:
          'Generate comprehensive objection-handling frameworks for every stage of your sales cycle — price, timing, competitor preference — with specific rebuttal language and discovery questions. Use AI Chat to role-play tough buyer conversations before the real call.',
        icon: '🥊',
      },
      {
        title: 'CRM Note Structuring',
        description:
          'Paste raw, stream-of-consciousness call notes into Nexus AI and receive a cleanly structured CRM entry with next steps, stakeholder mapping, MEDDIC/SPICED fields, and follow-up email draft — ready to paste directly into Salesforce or HubSpot.',
        icon: '🗂️',
      },
      {
        title: 'Competitive Intelligence Battle Cards',
        description:
          'Feed Nexus AI competitor websites, G2 reviews, and win/loss data to generate concise, actionable battle cards. Highlight where you win, where competitors are vulnerable, and the exact talking points reps need when a competitor is mentioned on a call.',
        icon: '🃏',
      },
    ],
    tools: ['AI Chat', 'Academic Research', 'Artifacts', 'AI Presentation Maker', 'Microsoft 365'],
    faq: [
      {
        value: 'sales-crm-integration',
        question: 'Can Nexus AI integrate directly with Salesforce or HubSpot?',
        answer:
          'Our Microsoft 365 integration connects Nexus AI to Outlook and Teams workflows natively. For CRM integration with Salesforce and HubSpot, we offer a Zapier/Make connector that can push AI-generated content directly to deal records. A native Salesforce managed package is on our 2026 roadmap for Enterprise customers.',
      },
      {
        value: 'sales-data-security',
        question: 'How does Nexus AI protect our prospect and customer data?',
        answer:
          'All data entered into Nexus AI is encrypted at rest (AES-256) and in transit (TLS 1.3). Business and Enterprise plan data is never used for model training, and workspaces are fully isolated between organizations. We do not sell or share your prospect or customer data to any third party.',
      },
      {
        value: 'sales-team-templates',
        question: 'Can the whole team share prompt templates and outreach playbooks?',
        answer:
          'Yes. Team and Enterprise plans include a shared Skills Library where sales managers can publish approved prompt templates, persona frameworks, and outreach sequences. Every rep can access and use them with one click, ensuring consistency across the team while letting individuals customize their tone.',
      },
      {
        value: 'sales-call-followup',
        question: 'Can Nexus AI write my follow-up email from a call transcript?',
        answer:
          'Yes — paste or upload your call transcript into AI File Chat and ask Nexus AI to draft a follow-up email that references specific conversation points, summarizes agreed next steps, and attaches relevant resources. The output is personalized enough that prospects rarely recognize it as AI-assisted.',
      },
      {
        value: 'sales-mobile',
        question: 'Can reps use Nexus AI on mobile between field sales calls?',
        answer:
          'Nexus AI is fully responsive and optimized for mobile browsers, so reps can research accounts, generate quick email drafts, and review battle cards from their phone between meetings. A dedicated mobile app for iOS and Android is in beta for Enterprise customers and expected to launch in Q3 2026.',
      },
    ],
    icon: '📈',
    color: 'bg-orange-50',
  },

  {
    slug: 'marketing',
    type: 'industry',
    name: 'Marketing',
    tagline: 'Create more content, maintain brand consistency, move faster',
    description:
      'Nexus AI is the content engine modern marketing teams use to go from brief to publish-ready copy without the bottlenecks. Generate on-brand blog posts, ad variations, email sequences, and social content at scale — while keeping every word aligned to your voice, your audience, and your campaign goals.',
    stats: [
      { value: '5×', label: 'More content published per team member per month' },
      { value: '60%', label: 'Reduction in content production cycle time' },
      { value: '2.1×', label: 'Improvement in email open rates with AI-optimized subject lines' },
    ],
    useCases: [
      {
        title: 'Campaign Brief to Full Content Suite',
        description:
          'Turn a one-paragraph campaign brief into a complete content package — messaging pillars, landing page copy, ad headlines, email subject line variations, and a social posting plan — all aligned to the same campaign narrative and audience segment.',
        icon: '🚀',
      },
      {
        title: 'SEO Blog Post Research & Writing',
        description:
          'Research target keywords, map topical authority clusters, and generate long-form, search-optimized blog posts that pass E-E-A-T guidelines. Each post includes a suggested meta description, internal linking structure, and schema markup recommendations.',
        icon: '🔍',
      },
      {
        title: 'Ad Copy A/B Variation Generation',
        description:
          'Generate dozens of headline, body copy, and CTA variants for Google Search, Meta, LinkedIn, and display campaigns from a single creative brief. Organize variants by audience segment, funnel stage, and messaging angle for systematic testing.',
        icon: '🧪',
      },
      {
        title: 'Email Marketing Sequence Writing',
        description:
          'Write complete drip email sequences — welcome series, nurture tracks, re-engagement campaigns — with attention to subject line psychology, preview text, CTA placement, and send-cadence logic. Maintain a consistent brand voice across every email in the sequence.',
        icon: '📧',
      },
      {
        title: 'Social Media Content Batching',
        description:
          'Build a 30-day social media calendar from a single campaign brief, with platform-native copy for LinkedIn, Instagram, X, Facebook, and TikTok. Include hashtag strategy, optimal posting times, and image prompt suggestions for Creative Studio.',
        icon: '📅',
      },
      {
        title: 'Performance Report Narration',
        description:
          'Paste raw analytics data from Google Analytics, social dashboards, or paid media platforms and receive a written executive summary that explains what happened, why it happened, and what to do next — ready to drop into your monthly stakeholder report.',
        icon: '📊',
      },
    ],
    tools: ['Essay Writer', 'Creative Studio', 'AI Chat', 'Artifacts', 'AI Presentation Maker', 'Skills'],
    faq: [
      {
        value: 'mkt-brand-voice',
        question: 'How does Nexus AI learn and maintain our brand voice?',
        answer:
          'You can define your brand voice in a Nexus AI Skill — a reusable prompt configuration that captures your tone attributes, vocabulary preferences, phrases to use, and phrases to avoid. Once saved to your team\'s Skills Library, every content output automatically applies those guidelines without any additional prompting.',
      },
      {
        value: 'mkt-image-generation',
        question: 'Can Nexus AI generate images and visual assets for campaigns?',
        answer:
          'Yes — Creative Studio supports AI image generation, with controls for style, aspect ratio, brand color palette, and image type (photography, illustration, icon, etc.). Images are generated at commercial-use resolution and available for direct download or use in Nexus AI Presentation Maker.',
      },
      {
        value: 'mkt-multilingual',
        question: 'Can Nexus AI write marketing copy in multiple languages?',
        answer:
          'Yes. Nexus AI supports content generation in over 50 languages with native-quality fluency, not just machine translation. You can define separate brand voice configurations per language and region to ensure culturally appropriate tone and idiomatic phrasing across global markets.',
      },
      {
        value: 'mkt-team-collab',
        question: 'How do multiple marketers collaborate on content in Nexus AI?',
        answer:
          'Team workspaces let marketers share prompt templates, brand voice Skills, content calendars, and Artifact drafts in a single shared environment. Role-based permissions control who can publish shared resources versus who can use them, and an activity log tracks all changes for campaign accountability.',
      },
      {
        value: 'mkt-vs-competitors',
        question: 'How is Nexus AI different from Jasper or Copy.ai?',
        answer:
          'Nexus AI is a full AI platform — not just a copywriting tool. Alongside marketing content, the same workspace handles document analysis, code generation, image and audio creation, academic research, and file-based Q&A. Marketing teams get specialized content capabilities plus a unified AI environment that serves the whole organization, eliminating the need for multiple single-purpose tools.',
      },
    ],
    icon: '📣',
    color: 'bg-purple-50',
  },

  {
    slug: 'hr',
    type: 'industry',
    name: 'Human Resources',
    tagline: 'Hire better, onboard faster, and support every employee with AI',
    description:
      'Nexus AI modernizes the entire HR lifecycle — from writing inclusive job descriptions and building structured interview guides to drafting compliant policy documents and coaching managers through performance conversations. Spend less time on paperwork and more time building the workforce that moves your organization forward.',
    stats: [
      { value: '55%', label: 'Faster job description creation' },
      { value: '80%', label: 'Reduction in onboarding document preparation time' },
      { value: '4.8/5', label: 'Employee self-service satisfaction rating' },
    ],
    useCases: [
      {
        title: 'Inclusive Job Description Writing',
        description:
          'Generate structured, bias-minimized job descriptions from a brief role summary. Nexus AI flags gendered language, credential inflation, and exclusionary requirements while ensuring every description includes clear responsibilities, qualifications, and compensation transparency language.',
        icon: '📋',
      },
      {
        title: 'Structured Interview Guide Creation',
        description:
          'Build competency-based interview guides with behavioral, situational, and technical questions mapped to each role\'s core competencies. Include scoring rubrics, follow-up probes, and legal compliance notes to ensure consistent, defensible hiring decisions.',
        icon: '🎤',
      },
      {
        title: 'Employee Handbook & Policy Drafting',
        description:
          'Draft new policy sections, update existing handbook language for compliance changes, or translate dense legalese into clear, accessible employee-facing language. Nexus AI flags areas where legal counsel review is recommended before publishing.',
        icon: '📖',
      },
      {
        title: 'Performance Review Coaching',
        description:
          'Help managers write specific, balanced performance reviews that go beyond vague praise or criticism. Provide examples of effective, development-oriented feedback language and help structure conversations around clear goals and growth opportunities.',
        icon: '🌱',
      },
      {
        title: 'Role-Specific Onboarding Plans',
        description:
          'Generate detailed first-30/60/90-day onboarding plans with role-specific learning milestones, key stakeholder introduction sequences, and tool setup checklists. Reduce time-to-productivity for new hires across every department.',
        icon: '🗺️',
      },
      {
        title: 'Employee HR Self-Service Chatbot',
        description:
          'Upload your employee handbook, benefits guides, and PTO policies into AI File Chat and give employees an always-available AI assistant that answers policy questions instantly — reducing HR ticket volume by handling routine inquiries like PTO balances, benefits enrollment windows, and expense policy.',
        icon: '🤖',
      },
    ],
    tools: ['AI Chat', 'Essay Writer', 'AI File Chat', 'Artifacts', 'Microsoft 365', 'Skills'],
    faq: [
      {
        value: 'hr-resume-screening',
        question: 'Can HR use Nexus AI to screen or evaluate candidate resumes?',
        answer:
          'Nexus AI can assist HR teams in structuring evaluation criteria and summarizing candidate profiles, but we strongly recommend that all resume evaluation decisions involve human judgment and a structured rubric. Using AI to make autonomous hiring decisions raises legal and fairness concerns under EEOC guidance and emerging state AI-in-hiring laws. Our HR Skills Library includes a compliant AI-assisted screening workflow.',
      },
      {
        value: 'hr-sensitive-data',
        question: 'How does Nexus AI handle sensitive employee data like compensation and performance records?',
        answer:
          'Business and Enterprise plans provide isolated workspaces with role-based access controls so that sensitive HR data is only accessible to authorized users. We recommend setting up a dedicated HR workspace with restricted membership, and our Data Residency option ensures employee data never leaves your chosen geographic region.',
      },
      {
        value: 'hr-dei',
        question: 'Can Nexus AI help us create more equitable and DEI-focused HR content?',
        answer:
          'Yes. Nexus AI includes a DEI writing mode that actively audits job descriptions, performance review language, and policy documents for exclusionary language, affinity bias, and structural barriers. It also helps draft DEI statements, allyship guides, and inclusive meeting facilitation frameworks grounded in current organizational psychology research.',
      },
      {
        value: 'hr-hris-integration',
        question: 'Does Nexus AI integrate with our HRIS system like Workday or BambooHR?',
        answer:
          'Direct HRIS integrations are available on the Enterprise plan through our API and webhook system. Our Microsoft 365 integration also connects Nexus AI to SharePoint and Teams, where many HR teams manage documentation. A native Workday connector is scheduled for Q4 2026.',
      },
      {
        value: 'hr-self-service',
        question: 'Can we deploy Nexus AI as an employee-facing HR self-service tool?',
        answer:
          'Yes. Using AI File Chat and our Skills platform, HR teams can configure a branded employee assistant pre-loaded with company-specific policy documents, benefits information, and FAQs. Employees ask questions in natural language and receive accurate, policy-grounded answers instantly — with seamless escalation to a human HR partner for complex issues.',
      },
    ],
    icon: '👥',
    color: 'bg-teal-50',
  },

  {
    slug: 'technology',
    type: 'industry',
    name: 'Technology',
    tagline: 'Build faster, document smarter, and ship with confidence',
    description:
      'Nexus AI is the AI workspace built for engineering and product teams who need more than just code completion. From architecture review and automated documentation to sprint planning and incident postmortem writing, Nexus AI accelerates every part of the software development lifecycle.',
    stats: [
      { value: '35%', label: 'Faster time-to-first-commit on new features' },
      { value: '60%', label: 'Reduction in documentation backlog' },
      { value: '2×', label: 'Faster sprint planning and story estimation' },
    ],
    useCases: [
      {
        title: 'Code Generation, Review & Debugging',
        description:
          'Write, debug, and refactor code across 40+ languages with detailed explanation of every decision. Get line-by-line review of pull request diffs with specific suggestions for performance, security, and maintainability improvements — not just stylistic comments.',
        icon: '💻',
      },
      {
        title: 'Technical Documentation at Scale',
        description:
          'Generate comprehensive API reference documentation, README files, architecture decision records (ADRs), and user guides directly from source code and inline comments. Keep documentation synchronized with codebase changes across every release.',
        icon: '📚',
      },
      {
        title: 'System Architecture Review',
        description:
          'Describe a proposed system design in plain English or as a diagram and receive structured feedback on scalability bottlenecks, single points of failure, data consistency risks, and industry-standard alternatives. Use Nexus AI as a senior technical reviewer available at 2 AM.',
        icon: '🏗️',
      },
      {
        title: 'Sprint Planning & Story Writing',
        description:
          'Transform product requirements, design specs, and engineering constraints into well-formed user stories with acceptance criteria, technical notes, and T-shirt size estimates. Generate the entire backlog for a sprint from a single product brief.',
        icon: '📌',
      },
      {
        title: 'Automated Test Generation',
        description:
          'Generate unit tests, integration test scaffolding, and edge case test cases from existing function signatures and business logic descriptions. Dramatically improve test coverage without requiring engineers to hand-write every assertion.',
        icon: '🧪',
      },
      {
        title: 'Incident Postmortem Drafting',
        description:
          'Feed Nexus AI a timeline of an incident — alert triggers, slack threads, runbook actions, resolution steps — and receive a structured postmortem with a blameless root cause analysis, contributing factors, and prioritized action items for future prevention.',
        icon: '🚨',
      },
    ],
    tools: ['Code', 'AI Chat', 'AI File Chat', 'Artifacts', 'Skills', 'Academic Research'],
    faq: [
      {
        value: 'tech-languages',
        question: 'Which programming languages does Nexus AI support?',
        answer:
          'Nexus AI supports 40+ programming languages including Python, TypeScript/JavaScript, Java, Go, Rust, C/C++, Ruby, Swift, Kotlin, PHP, SQL, shell scripting, and infrastructure-as-code languages like Terraform and Ansible. It also understands framework-specific patterns for React, Next.js, Django, FastAPI, Spring Boot, and others.',
      },
      {
        value: 'tech-private-repos',
        question: 'Can Nexus AI access our private code repositories?',
        answer:
          'Nexus AI does not automatically connect to code repositories, so your source code is never indexed without explicit action. Developers can paste code snippets or upload files within a session, and Enterprise customers can configure a GitHub or GitLab OAuth integration that allows Nexus AI to read specific repository content within a sandboxed session that does not persist after logout.',
      },
      {
        value: 'tech-code-confidentiality',
        question: 'Is proprietary code I share with Nexus AI kept confidential?',
        answer:
          'Yes. Code shared in Business and Enterprise plan sessions is never used to train models and is subject to the same isolation, encryption, and retention controls as all other data. Sessions can be configured to auto-delete after a defined period, and our Enterprise plan supports custom data retention policies aligned with your IP protection requirements.',
      },
      {
        value: 'tech-unit-tests',
        question: 'How good is Nexus AI at generating useful unit tests?',
        answer:
          'Nexus AI generates test cases that cover the happy path, boundary conditions, null/empty inputs, and exception paths for most standard function signatures. For complex business logic, providing a description of expected behavior alongside the code significantly improves test quality. Generated tests should still be reviewed by engineers — they are starting points, not a replacement for thoughtful QA strategy.',
      },
      {
        value: 'tech-pair-programming',
        question: 'Does Nexus AI support pair programming workflows?',
        answer:
          'Yes. AI Chat\'s conversational context window lets you maintain a running dialogue about a codebase across multiple turns — explaining the system, iterating on implementations, and asking follow-up questions — much like pair programming with a senior engineer. Shared workspaces let teams continue conversations and share code context with colleagues.',
      },
    ],
    icon: '💻',
    color: 'bg-indigo-50',
  },

  {
    slug: 'healthcare',
    type: 'industry',
    name: 'Healthcare',
    tagline: 'Reduce documentation burden and focus on patient care',
    description:
      'Nexus AI helps healthcare professionals spend more time with patients and less time writing notes, letters, and reports. From structuring clinical documentation and summarizing medical literature to drafting patient education materials and prior authorization letters, Nexus AI fits into clinical workflows without disrupting them.',
    stats: [
      { value: '2 hrs', label: 'Saved per clinician per day on documentation' },
      { value: '80%', label: 'Faster prior authorization letter drafting' },
      { value: '4.9/5', label: 'Clinician ease-of-use rating' },
    ],
    useCases: [
      {
        title: 'Clinical Note Structuring',
        description:
          'Dictate or type free-form clinical observations and have Nexus AI convert them into properly structured SOAP notes, H&P documents, or progress notes. Ensure completeness, appropriate medical terminology, and ICD-10 code alignment without additional documentation time.',
        icon: '🩺',
      },
      {
        title: 'Medical Literature Summarization',
        description:
          'Upload clinical studies, systematic reviews, and journal articles and receive a concise summary covering study design, patient population, primary outcomes, statistical significance, and clinical implications. Compare evidence across multiple studies to inform clinical decision-making.',
        icon: '📖',
      },
      {
        title: 'Patient Education Content Creation',
        description:
          'Generate plain-language patient handouts, discharge instructions, and condition explainers from clinical diagnoses and treatment plans. Automatically adjust reading level to grade 6–8 for broad accessibility, with translation available into over 50 languages.',
        icon: '👨‍⚕️',
      },
      {
        title: 'Prior Authorization Letter Drafting',
        description:
          'Generate insurance prior authorization letters with complete clinical justification, relevant CPT/ICD codes, supporting literature citations, and appeals language — reducing denial rates and the time clinicians spend navigating payer requirements.',
        icon: '📄',
      },
      {
        title: 'Discharge Summary Generation',
        description:
          'Convert clinical notes, medication lists, and procedure records into structured discharge summaries with chief complaint, hospital course, discharge diagnosis, follow-up instructions, and medication reconciliation. Improve care transition quality and reduce readmissions.',
        icon: '🏥',
      },
      {
        title: 'Continuing Medical Education Research',
        description:
          'Help practitioners research, summarize, and synthesize literature for CME credit activities, clinical protocols, and grand rounds presentations. Build evidence-based clinical guideline summaries with proper citation formatting for institutional distribution.',
        icon: '🎓',
      },
    ],
    tools: ['AI File Chat', 'AI Chat', 'Academic Research', 'Essay Writer', 'Artifacts', 'AI Presentation Maker'],
    faq: [
      {
        value: 'health-hipaa',
        question: 'Is Nexus AI HIPAA compliant?',
        answer:
          'Nexus AI signs a Business Associate Agreement (BAA) with healthcare organizations on our Business and Enterprise plans, supporting HIPAA compliance for covered entities and business associates. We implement the required administrative, physical, and technical safeguards, and our infrastructure is hosted in HIPAA-eligible cloud environments. You should review the BAA and consult your compliance officer before processing PHI.',
      },
      {
        value: 'health-not-diagnosis',
        question: 'Can Nexus AI diagnose patients or recommend treatments?',
        answer:
          'No. Nexus AI is a clinical productivity tool, not a diagnostic system or clinical decision support software regulated by the FDA. All outputs represent drafts for review by licensed clinicians and should never be used as a substitute for professional medical judgment. We include clinical review reminders in all health-related outputs.',
      },
      {
        value: 'health-phi-handling',
        question: 'How does Nexus AI handle Protected Health Information (PHI)?',
        answer:
          'On HIPAA-covered plans, PHI is encrypted at rest and in transit, isolated to your organization\'s tenant, and never used to train models. Session data retention can be configured from 30 days to zero (immediate deletion after session end). We also support de-identification workflows where clinical staff can scrub PHI before entering data into Nexus AI for non-covered use cases.',
      },
      {
        value: 'health-ehr-files',
        question: 'Can Nexus AI read EHR exports, lab reports, or clinical PDFs?',
        answer:
          'Yes. AI File Chat can process PDF, Word, and structured text exports from most major EHR systems including Epic and Cerner, as well as lab reports, imaging reports, and clinical correspondence. For large-volume document processing, our Enterprise API supports batch ingestion with structured output formatting.',
      },
      {
        value: 'health-fda-clearance',
        question: 'Is Nexus AI cleared or approved as a medical device by the FDA?',
        answer:
          'No. Nexus AI is a general-purpose productivity platform and is not FDA-cleared or approved as Software as a Medical Device (SaMD). It is designed to support administrative and documentation tasks performed by licensed clinicians, not to provide autonomous clinical decision support that would require regulatory clearance.',
      },
    ],
    icon: '🏥',
    color: 'bg-red-50',
  },

  {
    slug: 'small-business',
    type: 'industry',
    name: 'Small Business',
    tagline: 'Your AI-powered team member that never clocks out',
    description:
      'Nexus AI gives small business owners the capabilities of a full marketing, writing, and research team — without the headcount. Whether you\'re writing your business plan, drafting customer emails, creating social content, or reviewing a supplier contract, Nexus AI handles it so you can focus on running your business.',
    stats: [
      { value: '15 hrs', label: 'Average time saved per week per small business owner' },
      { value: '4×', label: 'Faster business document creation' },
      { value: '78%', label: 'Of users report stronger customer communications' },
    ],
    useCases: [
      {
        title: 'Business Plan Writing',
        description:
          'Write a structured, investor-ready business plan complete with executive summary, market analysis, competitive landscape, operations plan, and financial narrative. Tailor the depth and tone for SBA loan applications, angel investors, or internal planning.',
        icon: '📋',
      },
      {
        title: 'Customer Email & Newsletter Campaigns',
        description:
          'Draft professional, on-brand email newsletters, promotional campaigns, and transactional messages that sound like you — not a template. Generate subject line variations tested for open rate psychology and plain-text fallbacks for email deliverability.',
        icon: '📧',
      },
      {
        title: 'Social Media Content Creation',
        description:
          'Generate a week of branded social media posts for Instagram, Facebook, LinkedIn, and X from a brief description of your business and what you want to promote. Include caption copy, hashtag suggestions, and image prompts for Creative Studio.',
        icon: '📱',
      },
      {
        title: 'Vendor & Supplier Contract Review',
        description:
          'Upload a supplier contract, lease agreement, or vendor service agreement and receive a plain-English summary of your key obligations, payment terms, liability clauses, and renewal/exit terms — so you know exactly what you\'re signing before you sign it.',
        icon: '🤝',
      },
      {
        title: 'Grant & Small Business Loan Applications',
        description:
          'Draft the narrative sections of SBA loan applications, SBIR grants, CDFI funding applications, and local small business development grants. Nexus AI helps you articulate your story, community impact, and financial projections in the language grant reviewers respond to.',
        icon: '💰',
      },
      {
        title: 'Product & Service Description Writing',
        description:
          'Write conversion-optimized product descriptions for your e-commerce store, service pages for your website, and menu or catalog copy that answers buyer questions and drives purchase decisions. Generate multiple tone variations to test what resonates with your customers.',
        icon: '🏷️',
      },
    ],
    tools: ['AI Chat', 'Essay Writer', 'Creative Studio', 'AI File Chat', 'AI Presentation Maker', 'Microsoft 365'],
    faq: [
      {
        value: 'smb-technical-skills',
        question: 'Do I need any technical skills to use Nexus AI?',
        answer:
          'None at all. If you can type a message, you can use Nexus AI. The interface works like a chat conversation — you describe what you need in plain language and Nexus AI does the work. We also provide a library of pre-built prompt templates for common small business tasks so you can get results in one click, even as a first-time user.',
      },
      {
        value: 'smb-accounting',
        question: 'Can Nexus AI help with my accounting or bookkeeping?',
        answer:
          'Nexus AI can help you write financial narratives, analyze trends in data you share, draft invoices, and explain accounting concepts in plain English. However, it is not accounting software and does not connect to your books. For tax preparation, payroll, and bookkeeping, we recommend using a dedicated tool like QuickBooks or Wave alongside Nexus AI.',
      },
      {
        value: 'smb-vs-chatgpt',
        question: 'How is Nexus AI different from ChatGPT?',
        answer:
          'Nexus AI is purpose-built for professional work, with specialized tools like Academic Research, Plagiarism Checker, Creative Studio for image and audio creation, AI Presentation Maker, AI File Chat for document analysis, and Microsoft 365 integration — all in one platform. We also offer team workspaces, a Skills library for saving and reusing your best workflows, and business-grade data privacy that ChatGPT\'s free tier does not provide.',
      },
      {
        value: 'smb-mobile',
        question: 'Can I use Nexus AI on my phone while I\'m on the go?',
        answer:
          'Yes. Nexus AI is fully optimized for mobile browsers on iOS and Android, so you can draft emails, research suppliers, and create social content from anywhere. A dedicated mobile app with voice input is available in beta for Business plan subscribers.',
      },
      {
        value: 'smb-free-plan',
        question: 'Is there a free plan for small businesses?',
        answer:
          'Yes. Our Free plan gives you access to AI Chat, Essay Writer, and basic Academic Research with a generous monthly usage limit — enough for occasional use and to evaluate whether Nexus AI fits your business. When you\'re ready for unlimited usage, advanced tools like Creative Studio and AI File Chat, and priority support, our Starter plan starts at just $12/month.',
      },
    ],
    icon: '🏪',
    color: 'bg-yellow-50',
  },

  {
    slug: 'government',
    type: 'industry',
    name: 'Government',
    tagline: 'Serve constituents faster with secure, responsible AI',
    description:
      'Nexus AI helps government agencies at every level — federal, state, and local — do more with constrained resources. Summarize policy documents, draft public communications, streamline procurement writing, and surface legislative research with an AI platform designed to meet the security, accessibility, and accountability standards the public sector demands.',
    stats: [
      { value: '50%', label: 'Faster policy briefing preparation' },
      { value: '3×', label: 'More RFP responses completed per procurement officer per quarter' },
      { value: '99.5%', label: 'Uptime SLA for government deployments' },
    ],
    useCases: [
      {
        title: 'Policy Document Summarization',
        description:
          'Condense multi-hundred-page federal regulations, legislative bills, and agency policy documents into structured executive briefing memos. Highlight the sections most relevant to your agency\'s mandate, effective dates, and required compliance actions.',
        icon: '🏛️',
      },
      {
        title: 'Public Communication Drafting',
        description:
          'Write clear, accessible public announcements, press releases, constituent newsletters, and emergency notifications that meet plain language standards (Grade 8 readability or lower) while remaining accurate and legally appropriate.',
        icon: '📢',
      },
      {
        title: 'Procurement & RFP Document Creation',
        description:
          'Draft government RFP and solicitation documents with proper compliance language, FAR/DFARS clause incorporation, evaluation criteria frameworks, and Statement of Work sections. Reduce procurement officer workload while improving solicitation quality.',
        icon: '📋',
      },
      {
        title: 'Legislative & Regulatory Research',
        description:
          'Research existing statutory authority, related federal and state legislation, regulatory precedent, and agency rulemaking history on any policy topic. Generate comparative analyses of how different jurisdictions have addressed similar issues.',
        icon: '🔍',
      },
      {
        title: 'Grant Narrative & Application Writing',
        description:
          'Draft competitive federal and state grant narrative sections — including project description, need statement, evaluation plan, and budget justification — aligned to specific funding opportunity requirements and scoring rubrics.',
        icon: '💼',
      },
      {
        title: 'Meeting Records & Action Item Extraction',
        description:
          'Process meeting transcripts, committee hearing recordings, and town hall notes into structured official minutes, action item registries, and follow-up task assignments. Ensure all stakeholder commitments are captured and tracked.',
        icon: '📝',
      },
    ],
    tools: ['AI Chat', 'AI File Chat', 'Academic Research', 'Essay Writer', 'Artifacts', 'Microsoft 365'],
    faq: [
      {
        value: 'gov-fedramp',
        question: 'Is Nexus AI FedRAMP authorized?',
        answer:
          'Nexus AI is currently pursuing FedRAMP Moderate authorization with an anticipated authorization date in Q1 2027. In the interim, federal agencies can deploy Nexus AI in a FISMA Low environment using our Government Cloud offering, which runs in FedRAMP-authorized AWS GovCloud infrastructure with FIPS 140-2 encryption and restricted data residency in the continental United States.',
      },
      {
        value: 'gov-cui-data',
        question: 'Can Controlled Unclassified Information (CUI) be processed in Nexus AI?',
        answer:
          'CUI processing is supported in our Government Cloud tier, which implements CUI-specific access controls, audit logging, and data handling procedures aligned to NIST 800-171. We recommend agencies review specific CUI category requirements with their ISSO before processing sensitive data. Classified information should never be entered into any cloud AI platform.',
      },
      {
        value: 'gov-foia',
        question: 'Does Nexus AI support FOIA-compliant records management?',
        answer:
          'Our Government tier includes comprehensive audit logs of all AI interactions — inputs, outputs, and user identities — with configurable retention periods that can align with agency records schedules under NARA guidelines. These logs are available for FOIA review, and our data export tools allow agencies to produce AI interaction records in standard formats.',
      },
      {
        value: 'gov-air-gap',
        question: 'Can Nexus AI be deployed in an air-gapped or classified environment?',
        answer:
          'We offer on-premises deployment packages for agencies with air-gapped requirements, available exclusively through our Federal Enterprise program. The on-premises deployment runs on government-owned infrastructure with no external network dependencies. Contact our federal sales team to begin the authorization process.',
      },
      {
        value: 'gov-accessibility',
        question: 'What accessibility standards does Nexus AI meet?',
        answer:
          'Nexus AI meets WCAG 2.1 AA accessibility standards and is tested for compatibility with JAWS, NVDA, and VoiceOver screen readers. We publish a current VPAT (Voluntary Product Accessibility Template) that federal agencies can use for Section 508 procurement compliance reviews, available on request from our government relations team.',
      },
    ],
    icon: '🏛️',
    color: 'bg-sky-50',
  },

  {
    slug: 'nonprofits',
    type: 'industry',
    name: 'Nonprofits',
    tagline: 'Amplify your mission with AI-powered storytelling and fundraising',
    description:
      'Nexus AI helps nonprofits do more with the resources they have — writing compelling grant narratives, crafting donor communications that move people to give, and turning program data into impact stories that funders and board members actually read. Spend more time on mission delivery and less time staring at a blank page.',
    stats: [
      { value: '4×', label: 'More grant applications submitted per development officer per quarter' },
      { value: '32%', label: 'Average increase in donor email open rates' },
      { value: '60%', label: 'Faster impact report production' },
    ],
    useCases: [
      {
        title: 'Grant Proposal Writing',
        description:
          'Draft compelling grant narratives aligned to specific funder priorities, theories of change, and logic model frameworks. Generate tailored versions for different foundations from a single master narrative, adjusting emphasis and language to match each funder\'s vocabulary and values.',
        icon: '📄',
      },
      {
        title: 'Donor Appeals & Stewardship Communications',
        description:
          'Write emotionally resonant year-end appeals, mid-year asks, and major donor cultivation letters that tell specific impact stories rather than making generic organizational pitches. Generate personalized stewardship notes and thank-you communications at scale.',
        icon: '💌',
      },
      {
        title: 'Program Impact Report Drafting',
        description:
          'Transform raw program data, client stories, and outcome statistics into compelling narrative impact reports for funders, board members, and the public. Generate annual reports, mid-year grantee reports, and program evaluation narratives in a fraction of the usual time.',
        icon: '📊',
      },
      {
        title: 'Volunteer & Staff Recruitment Content',
        description:
          'Write mission-driven job descriptions, volunteer role descriptions, and AmeriCorps position listings that attract aligned candidates. Generate onboarding welcome materials and role-specific training guides that help new team members understand your culture and impact from day one.',
        icon: '🙋',
      },
      {
        title: 'Social Media & Advocacy Campaigns',
        description:
          'Build mission-aligned social media content calendars with platform-specific posts, donor spotlights, program impact stories, and calls to action for advocacy campaigns. Create hashtag strategies and awareness month content plans that grow your community and drive engagement.',
        icon: '📣',
      },
      {
        title: 'Board Governance & Committee Materials',
        description:
          'Draft board meeting agendas, committee reports, board chair letters, and governance policy documents that help volunteer board members stay informed and engaged. Generate board recruitment materials, orientation packets, and evaluation frameworks for strong governance.',
        icon: '🏢',
      },
    ],
    tools: ['Essay Writer', 'AI Chat', 'Academic Research', 'Artifacts', 'AI Presentation Maker', 'Creative Studio'],
    faq: [
      {
        value: 'npo-discount',
        question: 'Do nonprofits receive discounted pricing?',
        answer:
          'Yes. Registered 501(c)(3) organizations and their international equivalents receive a 40% discount on all Nexus AI plans. We also participate in TechSoup\'s nonprofit technology distribution program, through which qualifying organizations can access Nexus AI at further reduced rates. Contact our nonprofit relations team with proof of tax-exempt status to receive your discount.',
      },
      {
        value: 'npo-multiple-grants',
        question: 'Can Nexus AI efficiently help us apply to multiple grant opportunities at once?',
        answer:
          'Yes — this is one of the highest-value use cases for development teams. Create a master organizational narrative in Nexus AI as a reusable Skill, then rapidly generate funder-tailored applications by providing each opportunity\'s specific requirements, focus areas, and eligibility criteria. Development officers report completing 4× more grant applications per quarter without sacrificing application quality.',
      },
      {
        value: 'npo-donor-data',
        question: 'Is donor information secure when used in Nexus AI?',
        answer:
          'Yes. Donor information shared within Nexus AI is encrypted at rest and in transit and is never used to train our models. We recommend using donor initials or pseudonyms rather than full names when drafting personalized communications, as a best practice for minimizing data exposure. Our nonprofit plan includes DPA templates compatible with state charitable solicitation regulations.',
      },
      {
        value: 'npo-annual-fund',
        question: 'Can Nexus AI help manage our annual fund campaign communications?',
        answer:
          'Absolutely. Nexus AI can generate an entire annual fund campaign communication sequence — save-the-date emails, appeal letters, mid-campaign updates, deadline urgency messages, and post-campaign thank-yous — from a campaign brief and your impact stories. Skills let you save your annual fund voice and reuse it every year with updated data.',
      },
      {
        value: 'npo-metrics-storytelling',
        question: 'How does Nexus AI handle complex nonprofit program metrics and outcome data?',
        answer:
          'Upload your program data as a spreadsheet or CSV into AI File Chat and describe the story you want to tell. Nexus AI transforms tables of numbers into compelling narrative paragraphs that contextualize your outcomes, compare them to baseline data, and articulate the human significance of your results — in the language funders use in their guidelines.',
      },
    ],
    icon: '🤝',
    color: 'bg-pink-50',
  },

  // ─── AUDIENCES ─────────────────────────────────────────────────────────────

  {
    slug: 'for-businesses',
    type: 'audience',
    name: 'For Businesses',
    tagline: 'One AI platform to power every department and function',
    description:
      'Nexus AI gives every department — marketing, sales, HR, finance, and operations — a shared AI workspace that eliminates tool sprawl. From customer-facing deliverables to internal reporting and knowledge management, Nexus AI replaces a stack of single-purpose tools with one unified platform your entire organization can use from day one.',
    stats: [
      { value: '12+', label: 'Specialized AI tools in one subscription' },
      { value: '3.8×', label: 'ROI measured by business customers in year one' },
      { value: '2 days', label: 'Average time to full team onboarding' },
    ],
    useCases: [
      {
        title: 'Operational Workflow Automation',
        description:
          'Automate the most time-consuming writing tasks across your business — weekly status reports, internal memos, meeting summaries, and policy documents — so your team focuses on decisions and relationships, not formatting and drafting.',
        icon: '⚙️',
      },
      {
        title: 'Meeting Intelligence',
        description:
          'Turn recorded meeting transcripts into structured action item lists, decision logs, stakeholder summaries, and follow-up email drafts. Never lose a commitment or miss a follow-through because no one had time to write the minutes.',
        icon: '🎙️',
      },
      {
        title: 'Client-Facing Deliverable Production',
        description:
          'Generate professional proposals, case studies, executive presentations, and status reports for client delivery. Nexus AI maintains your brand voice and formats every document to your visual standards, cutting production time from days to hours.',
        icon: '📁',
      },
      {
        title: 'Market Research & Competitive Intelligence',
        description:
          'Synthesize industry reports, competitor websites, analyst publications, and news sources into concise briefing documents. Equip every decision-maker with current market context without hiring a dedicated research analyst.',
        icon: '🔭',
      },
      {
        title: 'Internal Knowledge Base Q&A',
        description:
          'Upload your company\'s SOPs, policies, product documentation, and process guides into AI File Chat. Give every employee an AI assistant that answers operational questions instantly with accurate, source-grounded answers — reducing internal support requests by up to 70%.',
        icon: '🧠',
      },
      {
        title: 'Executive Communication Drafting',
        description:
          'Draft board update memos, all-hands talking points, investor letters, and strategic communications with the clarity and precision that executive communications demand. Maintain a consistent leadership voice across every external and internal communication.',
        icon: '📊',
      },
    ],
    tools: ['AI Chat', 'AI File Chat', 'Artifacts', 'Microsoft 365', 'AI Presentation Maker', 'Skills'],
    faq: [
      {
        value: 'biz-user-count',
        question: 'How many users can be on one business account?',
        answer:
          'Our Business plan supports teams of 5 to 250 users with per-seat pricing. Enterprise plans support unlimited users with volume pricing, dedicated workspaces per department, and centralized admin controls. If you have a specific team size in mind, our sales team can build a custom quote within 24 hours.',
      },
      {
        value: 'biz-m365-integration',
        question: 'Does Nexus AI integrate with Microsoft 365 and Google Workspace?',
        answer:
          'Yes. Our Microsoft 365 integration connects Nexus AI directly to Word, Outlook, Teams, and SharePoint. Google Workspace integration (Docs, Gmail, Drive) is available via our browser extension and is in native integration development for 2026. Both integrations allow you to invoke Nexus AI without leaving the tools your team already lives in.',
      },
      {
        value: 'biz-data-privacy',
        question: 'What is the data retention and privacy policy for business accounts?',
        answer:
          'Business accounts sign a Data Processing Agreement under which your data is never used to train models, is encrypted at rest and in transit, and is isolated to your organization\'s workspace. Default data retention is 90 days, configurable to 30 days or custom periods. Data can be exported or deleted on request at any time.',
      },
      {
        value: 'biz-customization',
        question: 'Can we customize Nexus AI with our company\'s brand voice and internal knowledge?',
        answer:
          'Yes. Business plan administrators can create a Company Context — a persistent configuration that includes your brand voice guidelines, company description, product catalog, and key terminology. Every Nexus AI output across the workspace automatically applies this context, eliminating the need for individual users to re-explain your business on every task.',
      },
      {
        value: 'biz-admin-dashboard',
        question: 'Is there an admin dashboard for monitoring usage and managing team access?',
        answer:
          'Yes. The Business admin console provides real-time and historical usage analytics by user, department, and tool type, along with role assignment, permission management, SSO configuration, and content moderation controls. Usage reports can be exported to CSV or integrated with your BI tools via API.',
      },
    ],
    icon: '🏢',
    color: 'bg-blue-50',
  },

  {
    slug: 'for-creators',
    type: 'audience',
    name: 'For Creators',
    tagline: 'Create more, faster — words, images, audio, and video all in one place',
    description:
      'Nexus AI is the creative OS for content creators who are tired of juggling six different tools. Write scripts, generate visuals, compose audio, and build your brand identity — all from one platform that understands your creative vision and helps you ship more without burning out.',
    stats: [
      { value: '5×', label: 'More content pieces published per week' },
      { value: '70%', label: 'Reduction in pre-production research time' },
      { value: '92%', label: 'Of creators report improved content consistency' },
    ],
    useCases: [
      {
        title: 'Script & Screenplay Writing',
        description:
          'Generate first-draft YouTube scripts, podcast episode outlines, short-form video hooks, and long-form documentary treatments from a topic brief and audience description. Include B-roll suggestions, chapter markers, and SEO-optimized titles for every piece.',
        icon: '🎬',
      },
      {
        title: 'AI Image & Visual Asset Generation',
        description:
          'Create original thumbnails, promotional graphics, social media visuals, and editorial illustrations using Creative Studio. Define your visual style once — color palette, aesthetic, composition preferences — and generate consistent on-brand assets for every piece of content.',
        icon: '🎨',
      },
      {
        title: 'Podcast Show Notes & Summaries',
        description:
          'Upload your episode transcript and receive a complete show notes package — episode summary, key takeaways, guest bio, timestamped chapters, and SEO-optimized description — ready for your podcast host and website in minutes.',
        icon: '🎧',
      },
      {
        title: 'Music & Audio Production',
        description:
          'Compose background music tracks, podcast intro jingles, ambient soundscapes, and sound effects for your content using Creative Studio\'s audio generation tools. Specify tempo, mood, instrumentation, and duration for royalty-free audio you fully own.',
        icon: '🎵',
      },
      {
        title: 'Content Repurposing Engine',
        description:
          'Turn one long-form piece — a YouTube video, blog post, or podcast episode — into a full content suite: Twitter/X thread, LinkedIn article, Instagram carousel captions, email newsletter, and Shorts/Reels script. Maximize the reach of every piece of content you create.',
        icon: '♻️',
      },
      {
        title: 'Personal Brand Strategy',
        description:
          'Define and document your personal brand positioning, content pillars, target audience persona, and unique point of view using AI-facilitated strategy frameworks. Create a brand voice guide that keeps every piece of content authentically you, at any scale.',
        icon: '⭐',
      },
    ],
    tools: ['Creative Studio', 'Essay Writer', 'AI Chat', 'Skills', 'Artifacts', 'AI Presentation Maker'],
    faq: [
      {
        value: 'creator-ownership',
        question: 'Who owns the content I create with Nexus AI?',
        answer:
          'You do. All content generated with Nexus AI is fully owned by you and available for commercial use without attribution requirements. We do not claim any intellectual property rights over your outputs. Paid plan subscribers receive enhanced commercial licensing terms including indemnification coverage for IP claims on generated images.',
      },
      {
        value: 'creator-style-matching',
        question: 'Can Nexus AI generate content that matches my specific creative style?',
        answer:
          'Yes. You can define your style in a Creator Skill — a saved configuration that captures your tone, vocabulary, structural patterns, and reference examples. The more samples you provide, the closer Nexus AI gets to your authentic voice. Many creators share that after a few hours of training, followers can\'t tell the difference between AI-assisted and solo content.',
      },
      {
        value: 'creator-formats',
        question: 'What image, audio, and video formats does Creative Studio support?',
        answer:
          'Creative Studio generates images in PNG, JPG, and WebP at resolutions up to 4K. Audio generation outputs MP3 and WAV files at up to 320kbps. Video generation and AI video editing features are in beta, with support for MP4 export at 1080p. AI-generated captions and subtitle files are exported as SRT and VTT.',
      },
      {
        value: 'creator-commercial-use',
        question: 'Can I use Nexus AI-generated content in commercial projects, ads, and products?',
        answer:
          'Yes. All Nexus AI outputs on paid plans carry a commercial use license. You can use generated images, copy, audio, and other assets in client work, advertising campaigns, merchandise, and products without additional licensing fees. Enterprise customers receive an enhanced IP indemnification agreement for high-stakes commercial deployments.',
      },
      {
        value: 'creator-youtube-seo',
        question: 'Does Nexus AI help with YouTube SEO and channel growth?',
        answer:
          'Yes. Nexus AI can research high-opportunity keywords for your niche, write SEO-optimized titles, descriptions, and tags for each video, suggest video topic ideas based on trending searches, and write community posts and end-screen CTAs. We also help with channel positioning and content calendar planning for algorithmic consistency.',
      },
    ],
    icon: '✨',
    color: 'bg-violet-50',
  },

  {
    slug: 'for-enterprise',
    type: 'audience',
    name: 'For Enterprise',
    tagline: 'Enterprise-grade AI with the security, scale, and control you need',
    description:
      'Nexus AI Enterprise is designed for organizations that need more than a productivity tool — they need a secure, governable AI infrastructure that integrates with existing systems, meets strict compliance requirements, and scales across thousands of users without compromising data integrity or auditability.',
    stats: [
      { value: '99.99%', label: 'Uptime SLA with financial penalties' },
      { value: 'SOC 2', label: 'Type II + ISO 27001 certified' },
      { value: '< 30 days', label: 'Average enterprise deployment time' },
    ],
    useCases: [
      {
        title: 'Custom AI Workflow Deployment',
        description:
          'Design, deploy, and manage custom AI workflows tailored to your organization\'s specific processes — from financial reporting pipelines to legal contract review systems — using Nexus AI\'s Skills and Artifacts platform with full API access.',
        icon: '🔧',
      },
      {
        title: 'Document Intelligence at Scale',
        description:
          'Process thousands of documents simultaneously through batch AI analysis — contracts, reports, filings, research papers — with structured output in JSON, Word, or CSV formats. Handle due diligence, compliance audits, and knowledge migrations at enterprise speed.',
        icon: '📚',
      },
      {
        title: 'Enterprise Knowledge Management',
        description:
          'Create a living, searchable AI knowledge base from your organization\'s internal documentation, policies, research, and institutional knowledge. Every employee gets an AI assistant with accurate, source-attributed answers about how your organization operates.',
        icon: '🧠',
      },
      {
        title: 'Compliance & Audit Trail Management',
        description:
          'Maintain comprehensive, immutable audit logs of all AI-generated content — who generated it, when, with what inputs, and what outputs were produced. Support regulatory examination readiness, SOX compliance, and internal governance reviews.',
        icon: '🔒',
      },
      {
        title: 'Multi-Team Collaboration Infrastructure',
        description:
          'Set up isolated departmental workspaces with shared Skills Libraries, cross-team Artifact repositories, and role-based permissions. Scale from a pilot team to 10,000 users without losing governance or organizational coherence.',
        icon: '🏗️',
      },
      {
        title: 'Domain-Specific Model Customization',
        description:
          'Fine-tune Nexus AI on your proprietary data, terminology, and domain-specific knowledge to achieve expert-level accuracy in your industry. Custom models are deployed in your private tenant and never shared across customers.',
        icon: '🎯',
      },
    ],
    tools: ['AI Chat', 'AI File Chat', 'Code', 'Skills', 'Artifacts', 'Microsoft 365'],
    faq: [
      {
        value: 'ent-sla',
        question: 'Does Nexus AI offer SLA-backed uptime guarantees for enterprise customers?',
        answer:
          'Yes. Enterprise contracts include a 99.99% monthly uptime SLA with financial remedies — service credits for every hour of downtime below the threshold. We publish real-time and historical uptime on our status page, and Enterprise customers receive proactive notification of planned maintenance windows and incident escalation via a dedicated Slack channel.',
      },
      {
        value: 'ent-private-cloud',
        question: 'Can we deploy Nexus AI in our private cloud or on-premises?',
        answer:
          'Yes. Enterprise customers can choose fully managed SaaS in an isolated cloud tenant, deployment in their own AWS/Azure/GCP account via our Terraform module, or on-premises deployment for air-gapped or classified environments. All deployment models are supported by our implementation engineering team and covered by the same SLA.',
      },
      {
        value: 'ent-security-certs',
        question: 'What security certifications and compliance frameworks does Nexus AI Enterprise support?',
        answer:
          'Nexus AI holds SOC 2 Type II, ISO 27001, and CSA STAR Level 2 certifications. We support customer compliance requirements for HIPAA (BAA available), GDPR (DPA available), CCPA, FedRAMP Moderate (in progress), and NIST 800-171. Our Security team is available for customer security reviews and questionnaires at no additional cost for Enterprise customers.',
      },
      {
        value: 'ent-customer-success',
        question: 'Is there a dedicated customer success and implementation team for enterprise?',
        answer:
          'Yes. Every Enterprise customer is assigned a dedicated Customer Success Manager and a Solutions Architect for implementation. Your CSM conducts monthly business reviews, tracks adoption metrics, and coordinates with engineering on feature requests. Enterprise SLAs include a 4-hour response time for critical issues with a named support engineer.',
      },
      {
        value: 'ent-data-loss-prevention',
        question: 'Can we prevent employees from sharing sensitive company data externally through Nexus AI?',
        answer:
          'Yes. Enterprise administrators can configure Data Loss Prevention (DLP) policies that detect and block outputs containing defined sensitive patterns — PII, confidential project names, proprietary data classifications — before they can be exported or shared. Full integration with existing DLP tools like Microsoft Purview is supported via our API.',
      },
    ],
    icon: '🏗️',
    color: 'bg-gray-50',
  },

  {
    slug: 'for-marketers',
    type: 'audience',
    name: 'For Marketers',
    tagline: 'Brief to published content in a fraction of the usual time',
    description:
      'Nexus AI is the only platform marketers need to go from strategy to shipped content without switching tools. Research your market, define your messaging, write every content format, generate visuals, and measure performance — all in a single workspace that keeps your brand voice consistent at any volume.',
    stats: [
      { value: '8×', label: 'More content variations tested per campaign' },
      { value: '55%', label: 'Lower content production cost per asset' },
      { value: '4 hrs', label: 'Saved per marketer per day on writing tasks' },
    ],
    useCases: [
      {
        title: 'Campaign Content at Unlimited Scale',
        description:
          'Generate hundreds of on-brand ad variations, email subject line tests, landing page headlines, and social posts from a single campaign brief. Run systematic A/B testing across channels without the bottleneck of waiting for copy reviews.',
        icon: '🚀',
      },
      {
        title: 'SEO Content Strategy Execution',
        description:
          'Research high-opportunity keywords, map your topical authority content clusters, and generate fully optimized long-form blog posts and pillar pages. Each piece includes meta tags, internal linking strategy, schema markup recommendations, and featured snippet optimization.',
        icon: '🔍',
      },
      {
        title: 'Full Email Marketing Sequence Writing',
        description:
          'Write complete drip campaigns — welcome series, product education sequences, re-engagement flows, and post-purchase nurture tracks — with psychologically optimized subject lines, preview text, and CTAs at every stage of the funnel.',
        icon: '📧',
      },
      {
        title: 'Automated Brand Voice Enforcement',
        description:
          'Define your brand voice as a Nexus AI Skill with tone attributes, approved vocabulary, forbidden phrases, and structural rules. Apply it instantly to any content across the team so every asset sounds like it came from the same editorial team, regardless of who wrote it.',
        icon: '🎯',
      },
      {
        title: 'Performance Data Narrative Generation',
        description:
          'Paste raw analytics exports — CTR, conversion rate, CPL, revenue attribution — and receive a written marketing performance narrative ready for your CMO or client report. Contextualize results, explain anomalies, and recommend next actions in plain English.',
        icon: '📊',
      },
      {
        title: 'Influencer & Creator Partnership Briefs',
        description:
          'Write detailed creator briefs, partnership one-pagers, and seeding program descriptions that give influencers everything they need to create authentic, on-brief content. Generate campaign-specific talking points, key messages, and content dos-and-don\'ts.',
        icon: '🌟',
      },
    ],
    tools: ['Essay Writer', 'Creative Studio', 'AI Chat', 'Artifacts', 'Skills', 'AI Presentation Maker'],
    faq: [
      {
        value: 'mkt-stack-integration',
        question: 'Can Nexus AI connect to our marketing stack — HubSpot, Marketo, Google Ads?',
        answer:
          'Nexus AI connects to Microsoft 365 natively and integrates with HubSpot, Marketo, and Google Ads through our Zapier and Make connectors, enabling automated content push workflows. A direct API for custom integrations allows enterprise marketing teams to build bespoke pipelines — for example, auto-generating personalized email copy from CRM segments.',
      },
      {
        value: 'mkt-team-brand-alignment',
        question: 'How do we keep all team members using the same brand voice in Nexus AI?',
        answer:
          'Admins publish the brand voice configuration as a pinned Team Skill in your shared workspace. Every team member applies it to any task with one click — no prompt engineering required. When brand guidelines change, admins update the Skill once and the update is reflected across the entire team instantly.',
      },
      {
        value: 'mkt-multilingual-2',
        question: 'Can Nexus AI write marketing copy in multiple languages without losing brand voice?',
        answer:
          'Yes. You can define language-specific brand voice configurations that adapt tone and idiomatic style for each market while maintaining core brand attributes. Content is generated in native-quality target language — not translated from English — to ensure cultural appropriateness for audiences in each region.',
      },
      {
        value: 'mkt-cro',
        question: 'Does Nexus AI help with conversion rate optimization (CRO)?',
        answer:
          'Yes. Nexus AI can generate A/B test hypotheses for landing pages, write multiple CTA variations tested against conversion psychology principles, rewrite above-the-fold copy for clarity and urgency, and produce persuasive email sequences with optimized send timing logic. You supply the test framework; Nexus AI supplies copy variations at a pace your testing velocity can actually use.',
      },
      {
        value: 'mkt-vs-jasper',
        question: 'How is Nexus AI different from Jasper, Copy.ai, or Writer?',
        answer:
          'Nexus AI is a full AI platform, not a specialized copywriting tool. Alongside marketing content, marketers use the same workspace for competitive research, data analysis, document review, presentation building, and visual asset creation. There\'s no "marketing module" — the entire platform is available to every user, which means marketing leaders can unify their team on one tool instead of managing a separate AI subscription for every use case.',
      },
    ],
    icon: '🎯',
    color: 'bg-rose-50',
  },

  {
    slug: 'for-solopreneurs',
    type: 'audience',
    name: 'For Solopreneurs',
    tagline: 'Run your entire business with an AI that works as hard as you do',
    description:
      'Nexus AI is the unfair advantage for people building a business alone. Handle content creation, client proposals, customer communications, research, and brand development at a pace that used to require a team — so you can compete with companies ten times your size.',
    stats: [
      { value: '20 hrs', label: 'Average time reclaimed per week' },
      { value: '6×', label: 'Faster client proposal creation' },
      { value: '$0', label: 'Need for a full-time content writer, researcher, or VA' },
    ],
    useCases: [
      {
        title: 'Solo Content Production Engine',
        description:
          'Plan and produce a full week of content across your newsletter, social media, blog, and YouTube channel in a single morning session. From ideation to first draft, Nexus AI keeps your content pipeline full so you never face a blank page again.',
        icon: '⚡',
      },
      {
        title: 'Client Proposals & Service Agreements',
        description:
          'Write professional, persuasive client proposals from a brief scope description — with executive summary, solution overview, timeline, deliverables, and investment section. Generate simple service agreements and SOW templates that protect both you and your client.',
        icon: '📄',
      },
      {
        title: 'Product & Offer Launch Copywriting',
        description:
          'Generate a complete launch sequence for a new course, product, coaching offer, or service — including the launch email series, sales page copy, social announcement posts, and FAQ page content. Launch in days, not weeks.',
        icon: '🚀',
      },
      {
        title: 'Customer Support Response Library',
        description:
          'Build a comprehensive library of personalized, on-brand customer support response templates for your most common inquiries. Use AI Chat to draft responses to unusual or complex customer situations in under a minute.',
        icon: '💬',
      },
      {
        title: 'Business Research & Competitive Analysis',
        description:
          'Research your market, analyze competitors, synthesize industry trends, and identify underserved audience needs — in the depth that used to require hiring a research analyst. Make confident strategic decisions with AI-powered business intelligence.',
        icon: '🔍',
      },
      {
        title: 'Personal Brand & Positioning Development',
        description:
          'Facilitate your own brand strategy using AI-powered frameworks — define your niche, articulate your unique POV, develop your messaging hierarchy, and create the brand voice guide that makes every piece of content sound unmistakably like you.',
        icon: '🌟',
      },
    ],
    tools: ['AI Chat', 'Essay Writer', 'Creative Studio', 'Artifacts', 'Skills', 'AI Presentation Maker'],
    faq: [
      {
        value: 'solo-pricing',
        question: 'Is Nexus AI affordable for a one-person business?',
        answer:
          'Absolutely. Our Starter plan, designed for solopreneurs and freelancers, includes all core AI tools — writing, research, image generation, file chat, and presentations — for $12/month. Most solopreneurs report replacing multiple specialized tool subscriptions (a writing tool, a design tool, a research tool) that cost more combined, making Nexus AI a net cost saving from day one.',
      },
      {
        value: 'solo-all-in-one',
        question: 'Can I really use Nexus AI for everything — writing, images, code, research?',
        answer:
          'Yes — that\'s the entire point. Nexus AI is intentionally designed so a solopreneur can handle their marketing copy, client research, social media visuals, website code edits, presentation decks, and document analysis without switching between five different tools. One workspace, one subscription, one place to build your skills and workflows.',
      },
      {
        value: 'solo-time-savings',
        question: 'How much time can Nexus AI realistically save me per week?',
        answer:
          'Based on usage data from solopreneur subscribers, the average time savings is 15–20 hours per week — equivalent to two to two-and-a-half full working days. The biggest gains come from content creation, client communication drafting, and research tasks. Within the first month, most solopreneurs shift from "doing the work" to "reviewing and refining AI outputs," which fundamentally changes what\'s possible at one person\'s capacity.',
      },
      {
        value: 'solo-client-chatbot',
        question: 'Can I create a custom AI assistant for my clients using Nexus AI?',
        answer:
          'Yes. Using AI File Chat and the Skills platform, you can build a branded knowledge assistant pre-loaded with your service documentation, client onboarding materials, and FAQ content. Share it with clients so they can self-serve answers about your process, deliverables, and project status — reducing back-and-forth email volume significantly.',
      },
      {
        value: 'solo-mobile-desktop',
        question: 'Does Nexus AI work seamlessly across mobile and desktop?',
        answer:
          'Yes. Nexus AI is fully responsive and maintains your workspace, saved Skills, and conversation history across all devices. The mobile experience is optimized for quick content drafts and research lookups on the go. A dedicated mobile app with voice-to-prompt dictation is available in beta — ideal for capturing ideas and starting tasks while you\'re between client meetings.',
      },
    ],
    icon: '🚀',
    color: 'bg-amber-50',
  },

  {
    slug: 'for-students',
    type: 'audience',
    name: 'For Students',
    tagline: 'Study smarter, research deeper, and write with confidence',
    description:
      'Nexus AI is the academic companion that helps students at every level — high school, undergraduate, and graduate — research more effectively, understand difficult concepts faster, and produce better academic work. It\'s not a shortcut; it\'s the study partner who\'s always available, always patient, and always focused on helping you actually learn.',
    stats: [
      { value: '2×', label: 'Faster literature review completion' },
      { value: '89%', label: 'Of students report improved essay quality' },
      { value: '40%', label: 'More sources reviewed per research project' },
    ],
    useCases: [
      {
        title: 'Research Paper Literature Review',
        description:
          'Find and synthesize credible academic sources on your research topic, evaluate source quality and relevance, identify gaps in existing literature, and build a structured literature review section — with proper citation tracking throughout the research process.',
        icon: '🔬',
      },
      {
        title: 'Essay Drafting & Revision Coaching',
        description:
          'Outline, draft, and iteratively revise essays with structured AI coaching that explains why each change improves your writing. Receive specific feedback on thesis strength, argument structure, evidence integration, and transition quality — not just grammar corrections.',
        icon: '✍️',
      },
      {
        title: 'Study Guide & Flashcard Creation',
        description:
          'Convert lecture notes, textbook chapters, and uploaded PDFs into concise study guides, concept summaries, and spaced-repetition flashcard sets. Generate practice questions in multiple formats — multiple choice, short answer, essay — for any subject.',
        icon: '📚',
      },
      {
        title: 'Citation Formatting & Bibliography Management',
        description:
          'Automatically format in-text citations and reference lists in APA 7th, MLA 9th, Chicago 17th, Harvard, and over 20 other citation styles. Check existing citations for formatting errors and convert between styles instantly.',
        icon: '📖',
      },
      {
        title: 'Concept Explanation & Problem Walkthrough',
        description:
          'Get step-by-step explanations of complex math problems, scientific concepts, historical arguments, and theoretical frameworks in language you can actually understand. Ask follow-up questions until the concept clicks — unlike a textbook, Nexus AI adapts to your level.',
        icon: '🧮',
      },
      {
        title: 'Academic Presentation Building',
        description:
          'Create structured academic presentations with logical flow, evidence-supported talking points, speaker notes, and visual layout suggestions. Build conference-quality slides for seminars, thesis defenses, and class presentations in a fraction of the usual preparation time.',
        icon: '🎤',
      },
    ],
    tools: ['Academic Research', 'Essay Writer', 'Plagiarism Checker', 'AI File Chat', 'AI Chat', 'AI Presentation Maker'],
    faq: [
      {
        value: 'stu-academic-integrity',
        question: 'Does using Nexus AI violate academic integrity policies?',
        answer:
          'It depends on how you use it and your institution\'s specific policy. Using Nexus AI to research, understand concepts, get feedback on your writing, and learn from explanations is consistent with most academic integrity policies — similar to using a writing center or study group. Submitting AI-generated text as your own original work, without disclosure, violates most honor codes. Always review your institution\'s current AI policy and disclose AI assistance when required.',
      },
      {
        value: 'stu-essay-writing',
        question: 'Will Nexus AI just write my essay for me?',
        answer:
          'Nexus AI can generate essay drafts, but using them as your own work violates academic integrity. The most valuable way to use Nexus AI for essays is as a coaching tool — have it critique your outline, give feedback on your draft\'s argument, explain why a particular paragraph isn\'t working, and suggest how to strengthen your evidence. Students who engage with it this way report significantly better writing skills after just a few weeks.',
      },
      {
        value: 'stu-vs-other-ai',
        question: 'How is Nexus AI different from other AI essay tools marketed to students?',
        answer:
          'Most AI tools marketed to students generate text for submission, which creates academic integrity risk and doesn\'t build real skills. Nexus AI is built as a full academic platform — combining research assistance with credible source access, plagiarism detection, citation management, concept explanation, and presentation building — focused on making you a more capable student, not doing the work for you.',
      },
      {
        value: 'stu-other-subjects',
        question: 'Can Nexus AI help with subjects outside of writing — math, sciences, coding?',
        answer:
          'Yes. Nexus AI provides step-by-step math and statistics problem walkthroughs, explains chemistry and physics concepts with worked examples, helps with programming assignments by explaining logic rather than just writing code, and supports language learning through translation, grammar explanation, and conversational practice. It\'s a general academic assistant, not just a writing tool.',
      },
      {
        value: 'stu-discount',
        question: 'Is there a student discount?',
        answer:
          'Yes. Students with a verified .edu email address receive 50% off all Nexus AI paid plans. We also offer a semester-based billing option so you only pay during the academic year. Our Free plan is available to everyone with no credit card required and covers essential research and writing tools at no cost.',
      },
    ],
    icon: '📚',
    color: 'bg-cyan-50',
  },

  {
    slug: 'for-teams',
    type: 'audience',
    name: 'For Teams',
    tagline: 'A shared AI brain that makes every team member more effective',
    description:
      'Nexus AI Teams transforms how departments work together — with shared knowledge bases, collaborative drafting, consistent team voice, and AI-powered project coordination. Every team member benefits from collective knowledge and best-in-class workflows, not just the ones who know how to prompt well.',
    stats: [
      { value: '45%', label: 'Reduction in cross-team communication overhead' },
      { value: '3×', label: 'Faster first-draft production across all content types' },
      { value: '91%', label: 'Team adoption rate within first month' },
    ],
    useCases: [
      {
        title: 'Shared Team Knowledge Base',
        description:
          'Upload all your team\'s documentation — process guides, brand standards, client briefs, project history — and give every team member an AI assistant that answers questions accurately with citations to the source documents. New hires get up to speed in days, not weeks.',
        icon: '🧠',
      },
      {
        title: 'Collaborative Document Drafting',
        description:
          'Co-create briefs, reports, strategy documents, and presentations in a shared Nexus AI workspace where team members build on each other\'s AI sessions. Comment, refine, and iterate together without the coordination overhead of email and version conflicts.',
        icon: '📝',
      },
      {
        title: 'Consistent Team Communication Voice',
        description:
          'Enforce your team\'s writing standards, terminology, and communication style across every document, email, and external communication — regardless of who on the team produced it. One shared brand voice Skill, applied universally.',
        icon: '🗣️',
      },
      {
        title: 'Cross-Functional Project Coordination',
        description:
          'Generate project plans, status update emails, stakeholder summary reports, and risk registers from project notes and meeting transcripts. Keep all stakeholders informed without the overhead of weekly update-writing pulling team members away from actual work.',
        icon: '🔗',
      },
      {
        title: 'Shared Skills & Prompt Library',
        description:
          'Team leads build and publish the best prompt templates, personas, and workflow Skills to a shared library accessible by every team member. Capture institutional knowledge in reusable AI workflows that survive employee turnover and prevent each person from reinventing the wheel.',
        icon: '📚',
      },
      {
        title: 'Async Meeting Intelligence',
        description:
          'Automatically summarize recorded team meetings, standups, and client calls — distributing structured minutes, decision logs, and action item assignments to all stakeholders within minutes of the call ending. Teams that use this feature report 30% fewer follow-up meetings.',
        icon: '🎙️',
      },
    ],
    tools: ['AI Chat', 'AI File Chat', 'Skills', 'Artifacts', 'Microsoft 365', 'AI Presentation Maker'],
    faq: [
      {
        value: 'teams-workspaces',
        question: 'How do team workspaces work?',
        answer:
          'A team workspace is a shared Nexus AI environment where members access a common Skills Library, shared Artifact drafts, a shared knowledge base, and a unified conversation history they can search and reference. Admins control membership, role permissions, and which resources are visible to which sub-groups. Workspaces are isolated between different teams or departments within the same organization.',
      },
      {
        value: 'teams-rbac',
        question: 'Can we set role-based access controls within our team workspace?',
        answer:
          'Yes. Nexus AI Teams supports three permission tiers — Admin, Editor, and Viewer — with granular controls over who can create and publish shared Skills, who can modify team knowledge base documents, who can access sensitive client files, and who can export data from the workspace. Custom role configurations are available on Enterprise plans.',
      },
      {
        value: 'teams-onboarding',
        question: 'How do we onboard a new team member to our Nexus AI workspace?',
        answer:
          'New members are invited via email and immediately access the full team workspace — shared Skills, knowledge base, and conversation history — on first login. We provide a Team Onboarding Skill that admins can pre-configure: it walks new members through your team\'s AI workflows, most-used templates, and workspace conventions in an interactive tutorial format that takes under 30 minutes.',
      },
      {
        value: 'teams-privacy',
        question: 'Can teammates see each other\'s private conversations?',
        answer:
          'No. Each team member\'s individual conversations are private by default. Only content explicitly shared to the team workspace — published Artifacts, shared Skills, and pinned knowledge base documents — is visible to other members. Admins have access to aggregated usage analytics but cannot read individual private conversations.',
      },
      {
        value: 'teams-dashboard',
        question: 'Is there a team usage dashboard for measuring AI adoption?',
        answer:
          'Yes. The team admin dashboard shows individual and aggregate usage by tool type, content volume, and active days. Track which Skills are most used, which team members are most active, and what types of tasks generate the most AI assistance. Export reports to CSV or connect to your BI tool via API for custom analytics dashboards.',
      },
    ],
    icon: '🤝',
    color: 'bg-lime-50',
  },
];

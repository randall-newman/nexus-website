export type Connector = {
  name: string;
  category: string;
  blurb: string;
  /** Basename of an SVG in /public/images/connectors, or null for a monogram tile. */
  logo: string | null;
};

export const connectorCategories = [
  'Communication & Email',
  'Customer Support & CRM',
  'Data & Analytics',
  'Design & Creative',
  'Development Tools',
  'Documents & Files',
  'Finance & Investing',
  'Healthcare & Life Sciences',
  'Legal',
  'Lifestyle & Local',
  'Productivity & Notes',
  'Project Management',
  'Research & Data',
  'Sales & Marketing',
] as const;

export const connectors: Connector[] = [
  // Communication & Email
  { name: 'Gmail', category: 'Communication & Email', blurb: 'Search, summarize and draft email, with calendar context built in.', logo: 'gmail' },
  { name: 'Microsoft Teams', category: 'Communication & Email', blurb: 'Bring channel and chat context into your Nexus AI workspace.', logo: null },
  { name: 'Outlook', category: 'Communication & Email', blurb: 'Work with your Outlook mail and calendar from any chat.', logo: null },
  { name: 'Slack', category: 'Communication & Email', blurb: 'Search conversations and turn threads into decisions and docs.', logo: null },
  { name: 'Zoom', category: 'Communication & Email', blurb: 'Pull meeting recordings and transcripts into your work.', logo: 'zoom' },
  // Customer Support & CRM
  { name: 'HubSpot', category: 'Customer Support & CRM', blurb: 'Query contacts, deals and pipelines in plain language.', logo: 'hubspot' },
  { name: 'Intercom', category: 'Customer Support & CRM', blurb: 'Summarize customer conversations and surface product feedback.', logo: 'intercom' },
  { name: 'Salesforce', category: 'Customer Support & CRM', blurb: 'Ask questions across accounts, opportunities and reports.', logo: null },
  { name: 'Unwrap', category: 'Customer Support & CRM', blurb: 'Turn raw user feedback into themes and priorities.', logo: null },
  // Data & Analytics
  { name: 'Blockscout', category: 'Data & Analytics', blurb: 'Explore on-chain data and smart contracts conversationally.', logo: null },
  { name: 'Databricks', category: 'Data & Analytics', blurb: 'Query your lakehouse and notebooks without leaving Nexus AI.', logo: 'databricks' },
  { name: 'MotherDuck', category: 'Data & Analytics', blurb: 'Run DuckDB analytics on your data with natural language.', logo: null },
  { name: 'Snowflake', category: 'Data & Analytics', blurb: 'Ask questions of your warehouse and get governed answers.', logo: 'snowflake' },
  // Design & Creative
  { name: 'Canva', category: 'Design & Creative', blurb: 'Reference designs and turn briefs into on-brand assets.', logo: null },
  { name: 'Wix', category: 'Design & Creative', blurb: 'Manage site content and drafts straight from a chat.', logo: 'wix' },
  // Development Tools
  { name: 'Cloudinary', category: 'Development Tools', blurb: 'Search, transform and manage your media library.', logo: 'cloudinary' },
  { name: 'GitHub', category: 'Development Tools', blurb: 'Review PRs, search issues and reason over your codebase.', logo: 'github' },
  { name: 'GoDaddy', category: 'Development Tools', blurb: 'Manage domains and site settings conversationally.', logo: 'godaddy' },
  { name: 'Jam', category: 'Development Tools', blurb: 'Attach bug reports with full context to your debugging chats.', logo: null },
  { name: 'Lucid', category: 'Development Tools', blurb: 'Reference and generate diagrams from your documents.', logo: null },
  { name: 'Sentry', category: 'Development Tools', blurb: 'Investigate errors and releases without tab-switching.', logo: 'sentry' },
  { name: 'Stytch', category: 'Development Tools', blurb: 'Inspect auth flows and user data from your workspace.', logo: null },
  { name: 'Supabase', category: 'Development Tools', blurb: 'Query your database and manage projects in plain language.', logo: 'supabase' },
  { name: 'Vercel', category: 'Development Tools', blurb: 'Check deployments, logs and projects from any chat.', logo: 'vercel' },
  // Documents & Files
  { name: 'Box', category: 'Documents & Files', blurb: 'Get cited answers from the documents your company stores in Box.', logo: 'box' },
  { name: 'Dropbox', category: 'Documents & Files', blurb: 'Search PDFs, spreadsheets and docs stored in Dropbox.', logo: 'dropbox' },
  { name: 'Google Drive', category: 'Documents & Files', blurb: 'Chat with your Docs, Sheets and Slides, with citations.', logo: 'googledrive' },
  { name: 'OneDrive', category: 'Documents & Files', blurb: 'Bring your Microsoft files into every conversation.', logo: null },
  { name: 'SharePoint', category: 'Documents & Files', blurb: 'Enterprise document search across your SharePoint sites.', logo: null },
  // Finance & Investing
  { name: 'Base MCP', category: 'Finance & Investing', blurb: 'Interact with the Base network from your workspace.', logo: null },
  { name: 'Carbon Arc', category: 'Finance & Investing', blurb: 'Query alternative data insights for research workflows.', logo: null },
  { name: 'Carta', category: 'Finance & Investing', blurb: 'Reference cap table and equity data securely.', logo: null },
  { name: 'CB Insights', category: 'Finance & Investing', blurb: 'Pull market intelligence into memos and analyses.', logo: null },
  { name: 'Crypto.com', category: 'Finance & Investing', blurb: 'Check markets and portfolio data conversationally.', logo: null },
  { name: 'Daloopa', category: 'Finance & Investing', blurb: 'Use audited fundamental data in your financial models.', logo: null },
  { name: 'Investment Portfolio', category: 'Finance & Investing', blurb: 'Analyze holdings and performance in plain language.', logo: null },
  { name: 'Morningstar', category: 'Finance & Investing', blurb: 'Bring ratings and research into investment decisions.', logo: null },
  { name: 'MT Newswires', category: 'Finance & Investing', blurb: 'Stream market-moving news into your research.', logo: null },
  { name: 'PitchBook', category: 'Finance & Investing', blurb: 'Query private market data for deals and diligence.', logo: null },
  { name: 'Quartr', category: 'Finance & Investing', blurb: 'Search earnings calls and investor materials.', logo: null },
  { name: 'Square', category: 'Finance & Investing', blurb: 'Review sales, payments and customers from your chats.', logo: 'square' },
  { name: 'Stripe', category: 'Finance & Investing', blurb: 'Query payments, customers and revenue data safely.', logo: 'stripe' },
  // Healthcare & Life Sciences
  { name: 'American Heart Association', category: 'Healthcare & Life Sciences', blurb: 'Reference AHA guidelines in clinical research.', logo: null },
  { name: 'The BMJ', category: 'Healthcare & Life Sciences', blurb: 'Cite peer-reviewed medical research in your work.', logo: null },
  { name: 'EBSCO', category: 'Healthcare & Life Sciences', blurb: 'Search scholarly databases with cited results.', logo: null },
  { name: 'Function Health', category: 'Healthcare & Life Sciences', blurb: 'Bring lab results into personal health questions.', logo: null },
  { name: 'Health & Fitness Apps', category: 'Healthcare & Life Sciences', blurb: 'Connect activity and wellness data for insights.', logo: null },
  { name: 'ICD-10 Codes', category: 'Healthcare & Life Sciences', blurb: 'Look up and validate diagnostic codes instantly.', logo: null },
  { name: 'Medical Records', category: 'Healthcare & Life Sciences', blurb: 'Query structured patient records with permissions.', logo: null },
  { name: 'NEJM', category: 'Healthcare & Life Sciences', blurb: 'Search New England Journal of Medicine content.', logo: null },
  { name: 'Open Targets', category: 'Healthcare & Life Sciences', blurb: 'Explore target-disease evidence for drug discovery.', logo: null },
  { name: 'VisualDx', category: 'Healthcare & Life Sciences', blurb: 'Reference clinical decision support imagery.', logo: null },
  // Legal
  { name: 'Deel', category: 'Legal', blurb: 'Query contracts, payroll and compliance across your team.', logo: null },
  { name: 'DeepJudge', category: 'Legal', blurb: 'Search your firm’s knowledge with legal-grade precision.', logo: null },
  { name: 'Docusign', category: 'Legal', blurb: 'Track agreements and pull terms into your analysis.', logo: null },
  { name: 'Midpage', category: 'Legal', blurb: 'Research case law with verifiable citations.', logo: null },
  { name: 'NetDocuments', category: 'Legal', blurb: 'Search your document management system securely.', logo: null },
  // Lifestyle & Local
  { name: 'DoorDash', category: 'Lifestyle & Local', blurb: 'Order and track deliveries without leaving your chat.', logo: 'doordash' },
  { name: 'Trivago', category: 'Lifestyle & Local', blurb: 'Compare hotels and plan trips conversationally.', logo: 'trivago' },
  // Productivity & Notes
  { name: 'Guru', category: 'Productivity & Notes', blurb: 'Answer questions from your company wiki, with sources.', logo: null },
  { name: 'Microsoft OneNote', category: 'Productivity & Notes', blurb: 'Search and summarize your notebooks.', logo: null },
  { name: 'Notion', category: 'Productivity & Notes', blurb: 'Search pages and databases; combine them with other sources.', logo: 'notion' },
  { name: 'Todoist', category: 'Productivity & Notes', blurb: 'Create and organize tasks from any conversation.', logo: 'todoist' },
  // Project Management
  { name: 'Asana', category: 'Project Management', blurb: 'Create tasks from notes and query project status.', logo: 'asana' },
  { name: 'Confluence', category: 'Project Management', blurb: 'Search and draft wiki content across your spaces.', logo: 'confluence' },
  { name: 'Jira', category: 'Project Management', blurb: 'File, triage and summarize issues in plain language.', logo: 'jira' },
  { name: 'Linear', category: 'Project Management', blurb: 'Turn feedback into issues and track cycles effortlessly.', logo: 'linear' },
  { name: 'Monday.com', category: 'Project Management', blurb: 'Query boards and automate updates from your chats.', logo: null },
  // Research & Data
  { name: 'Dice', category: 'Research & Data', blurb: 'Search tech talent and market data.', logo: null },
  { name: 'Hugging Face', category: 'Research & Data', blurb: 'Discover models and datasets for your ML work.', logo: 'huggingface' },
  { name: 'Similarweb', category: 'Research & Data', blurb: 'Pull traffic and market intelligence into analyses.', logo: 'similarweb' },
  { name: 'Statista', category: 'Research & Data', blurb: 'Cite statistics and market forecasts in your reports.', logo: 'statista' },
  { name: 'Wiley', category: 'Research & Data', blurb: 'Access scholarly content for cited literature reviews.', logo: null },
  // Sales & Marketing
  { name: 'Apollo.io', category: 'Sales & Marketing', blurb: 'Enrich leads and build outreach lists conversationally.', logo: null },
  { name: 'Bitly', category: 'Sales & Marketing', blurb: 'Create and track short links from your campaigns.', logo: 'bitly' },
  { name: 'Klaviyo', category: 'Sales & Marketing', blurb: 'Query campaign performance and audience segments.', logo: null },
  { name: 'WordPress.com', category: 'Sales & Marketing', blurb: 'Draft, publish and update posts from your workspace.', logo: 'wordpress' },
];

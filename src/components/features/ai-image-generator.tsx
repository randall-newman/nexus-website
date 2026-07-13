import PricingTeaser from '@/src/components/home/pricing-teaser';
import RevealAnimation from '@/src/components/animation/reveal-animation';
import { TextReveal } from '@/src/components/animation/text-reveal';
import { BadgePrimary } from '@/src/components/shared/ui/badge';
import { ButtonPrimary, ButtonWhite } from '@/src/components/shared/ui/button';
import {
  Camera,
  CheckCircle,
  Download,
  Eraser,
  ImagePlus,
  Layers,
  MessageSquare,
  Palette,
  Pencil,
  RefreshCw,
  Sliders,
  Sparkles,
  Users,
  Wand2,
  Zap,
  ZoomIn,
} from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

/* ─── Hero generation mock ──────────────────────────── */
function HeroGeneratorMock() {
  const variants = [
    { label: 'Variant 1', bg: 'from-blue-600/40 to-purple-700/40', active: true },
    { label: 'Variant 2', bg: 'from-indigo-500/30 to-cyan-600/30', active: false },
    { label: 'Variant 3', bg: 'from-violet-600/30 to-pink-600/30', active: false },
    { label: 'Variant 4', bg: 'from-blue-400/25 to-indigo-500/25', active: false },
  ];
  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 overflow-hidden text-[12px]">
      <div className="flex items-center gap-x-1.5 border-b border-white/10 px-4 py-3 bg-white/5">
        <span className="size-2.5 rounded-full bg-red-500/70" />
        <span className="size-2.5 rounded-full bg-yellow-500/70" />
        <span className="size-2.5 rounded-full bg-green-500/70" />
        <span className="ml-3 text-[11px] text-white/30">Nexus AI: Creative Studio</span>
        <span className="ml-auto flex items-center gap-x-1 text-[10px]">
          <span className="size-1.5 rounded-full bg-green-400 animate-pulse" />
          <span className="text-white/30">Generating…</span>
        </span>
      </div>
      <div className="border-b border-white/10 px-4 py-3 bg-white/3">
        <div className="rounded-xl bg-white/8 border border-white/10 px-3 py-2 text-white/60 leading-relaxed">
          A cinematic aerial view of a futuristic city at golden hour, neon reflections on wet streets, ultra-detailed, 16:9
        </div>
      </div>
      <div className="flex items-center gap-x-3 border-b border-white/10 px-4 py-2.5 bg-white/3 flex-wrap gap-y-2">
        {[
          { icon: Palette, label: 'Cinematic', active: true },
          { icon: Sliders, label: '16:9', active: true },
          { icon: Layers, label: '4 variants', active: false },
          { icon: ZoomIn, label: '4K', active: false },
        ].map((c) => (
          <span
            key={c.label}
            className={`flex items-center gap-x-1 rounded-full px-2.5 py-1 text-[10px] ${c.active ? 'bg-[#4c7df0]/30 border border-[#4c7df0]/40 text-[#8ab0f5]' : 'bg-white/8 border border-white/10 text-white/40'}`}
          >
            <c.icon className="size-3" />
            {c.label}
          </span>
        ))}
      </div>
      <div className="grid grid-cols-4 gap-2 p-4">
        {variants.map((v) => (
          <div
            key={v.label}
            className={`relative aspect-video rounded-lg overflow-hidden border ${v.active ? 'border-[#4c7df0]/60 ring-1 ring-[#4c7df0]/40' : 'border-white/10'} bg-gradient-to-br ${v.bg}`}
          >
            <div className="absolute inset-0 opacity-40">
              <div className="absolute top-1/4 left-1/4 size-4 rounded-full bg-white/20 blur-sm" />
              <div className="absolute top-1/2 right-1/3 size-3 rounded-full bg-white/15 blur-sm" />
              <div className="absolute bottom-1/4 left-1/2 size-5 rounded-full bg-white/10 blur-md" />
            </div>
            {v.active && (
              <div className="absolute bottom-1 right-1 rounded bg-[#4c7df0]/80 px-1 text-[8px] text-white">
                Selected
              </div>
            )}
          </div>
        ))}
      </div>
      <div className="flex items-center justify-between border-t border-white/10 px-4 py-3">
        <div className="flex items-center gap-x-2 text-[10px] text-white/30">
          <span className="flex items-center gap-x-1">
            <ZoomIn className="size-3" /> Upscale
          </span>
          <span>·</span>
          <span className="flex items-center gap-x-1">
            <Eraser className="size-3" /> Remove BG
          </span>
          <span>·</span>
          <span className="flex items-center gap-x-1">
            <Pencil className="size-3" /> Edit
          </span>
        </div>
        <span className="flex items-center gap-x-1 rounded-full bg-white/10 px-2.5 py-1 text-[10px] text-white/50">
          <Download className="size-3" /> Download PNG
        </span>
      </div>
    </div>
  );
}

/* ─── Style gallery mock ────────────────────────────── */
function StyleGalleryMock() {
  const styles = [
    { name: 'Photorealistic', grad: 'from-slate-400 to-slate-600', tag: 'Photo' },
    { name: 'Cinematic', grad: 'from-amber-700 to-orange-900', tag: 'Film' },
    { name: 'Digital Art', grad: 'from-violet-500 to-purple-700', tag: 'Art' },
    { name: 'Illustration', grad: 'from-cyan-400 to-blue-600', tag: 'Illus.' },
    { name: 'Anime', grad: 'from-pink-400 to-rose-600', tag: 'Anime' },
    { name: 'Watercolor', grad: 'from-teal-300 to-emerald-500', tag: 'Paint' },
  ];
  return (
    <div className="grid grid-cols-3 gap-2">
      {styles.map((s) => (
        <div key={s.name} className="rounded-xl overflow-hidden border border-stroke-3">
          <div className={`aspect-square bg-gradient-to-br ${s.grad} relative`}>
            <div className="absolute inset-0 opacity-30">
              <div className="absolute top-1/3 left-1/3 size-8 rounded-full bg-white/30 blur-md" />
              <div className="absolute bottom-1/3 right-1/4 size-5 rounded-full bg-white/20 blur-sm" />
            </div>
            <span className="absolute top-1.5 right-1.5 rounded bg-black/30 px-1.5 py-0.5 text-[9px] text-white/80">
              {s.tag}
            </span>
          </div>
          <div className="bg-white px-2 py-1.5">
            <p className="text-[11px] font-medium text-secondary truncate">{s.name}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

/* ─── Editing tools mock ────────────────────────────── */
function EditingMock() {
  return (
    <div className="rounded-2xl border border-stroke-3 bg-white overflow-hidden text-[12px]">
      <div className="flex items-center gap-x-1.5 border-b border-stroke-3 px-4 py-3 bg-background-13">
        <Wand2 className="size-3.5 text-secondary/50" />
        <span className="text-[11px] text-secondary/60 font-medium">Image Editor</span>
        <span className="ml-auto text-[10px] text-secondary/30">4096 × 2304 px</span>
      </div>
      <div className="relative bg-gradient-to-br from-blue-100 to-purple-100 aspect-video mx-4 mt-4 rounded-xl overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="size-16 rounded-full bg-white/40 blur-lg" />
        </div>
        <div className="absolute top-4 left-8 w-24 h-16 border-2 border-dashed border-[#4c7df0] rounded-lg bg-[#4c7df0]/10 flex items-center justify-center">
          <span className="text-[9px] text-[#4c7df0] font-semibold">Inpaint area</span>
        </div>
      </div>
      <div className="flex items-center gap-x-2 px-4 py-3 overflow-x-auto">
        {[
          { icon: Eraser, label: 'Remove BG', active: false },
          { icon: ZoomIn, label: 'Upscale 4K', active: false },
          { icon: Pencil, label: 'Inpaint', active: true },
          { icon: RefreshCw, label: 'Variations', active: false },
          { icon: ImagePlus, label: 'Outpaint', active: false },
        ].map((t) => (
          <button
            key={t.label}
            className={`flex items-center gap-x-1 rounded-full px-2.5 py-1.5 text-[10px] shrink-0 ${t.active ? 'bg-secondary text-white' : 'bg-secondary/6 text-secondary/60'}`}
          >
            <t.icon className="size-3" />
            {t.label}
          </button>
        ))}
      </div>
      <div className="px-4 pb-4">
        <div className="rounded-lg border border-stroke-3 bg-background-13 px-3 py-2 text-[11px] text-secondary/50">
          Replace the sky with a dramatic sunset, keep the foreground unchanged
        </div>
      </div>
    </div>
  );
}

/* ─── Where to access mock ──────────────────────────── */
function AccessMock() {
  return (
    <div className="grid gap-4 sm:grid-cols-2">
      <div className="rounded-2xl border border-stroke-3 bg-white p-5 space-y-3">
        <div className="flex items-center gap-x-2">
          <div className="flex size-8 items-center justify-center rounded-xl bg-[#4c7df0]/10">
            <MessageSquare className="size-4 text-[#4c7df0]" />
          </div>
          <p className="font-semibold text-secondary text-[14px]">Nexus AI Chat</p>
        </div>
        <div className="rounded-lg bg-background-13 p-3 text-[11px] space-y-2">
          <p className="text-secondary/50">You →</p>
          <p className="text-secondary/80">Generate a logo concept for a coffee brand, minimalist, black and gold</p>
          <div className="h-px bg-stroke-3" />
          <p className="text-secondary/50">Nexus AI →</p>
          <div className="aspect-video rounded-md bg-gradient-to-br from-amber-800 to-yellow-600 relative overflow-hidden">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="size-8 rounded-full bg-black/20 border border-yellow-400/40" />
            </div>
          </div>
          <p className="text-[10px] text-secondary/40">Generated · PNG · 1024×1024</p>
        </div>
        <p className="text-[12px] text-secondary/50">Ask for images mid-conversation, refine with follow-up prompts.</p>
      </div>
      <div className="rounded-2xl border border-stroke-3 bg-white p-5 space-y-3">
        <div className="flex items-center gap-x-2">
          <div className="flex size-8 items-center justify-center rounded-xl bg-[#ac87eb]/15">
            <Sparkles className="size-4 text-[#ac87eb]" />
          </div>
          <p className="font-semibold text-secondary text-[14px]">Creative Studio</p>
        </div>
        <div className="rounded-lg bg-background-13 p-3 text-[11px] space-y-2">
          <div className="flex flex-wrap gap-1.5">
            {['Batch generate', 'Brand Kit colours', 'Style presets', '4K export'].map((tag) => (
              <span key={tag} className="rounded-full bg-[#ac87eb]/15 border border-[#ac87eb]/20 px-2 py-0.5 text-[10px] text-[#8a60cc]">
                {tag}
              </span>
            ))}
          </div>
          <div className="grid grid-cols-3 gap-1 pt-1">
            {['from-violet-500 to-purple-700', 'from-violet-400 to-indigo-600', 'from-purple-600 to-pink-500'].map((g, i) => (
              <div key={i} className={`aspect-square rounded-md bg-gradient-to-br ${g}`} />
            ))}
          </div>
          <p className="text-[10px] text-secondary/40">3 brand-matched variants · Batch mode</p>
        </div>
        <p className="text-[12px] text-secondary/50">Full creative workspace with brand colours, style presets, and batch export.</p>
      </div>
    </div>
  );
}

/* ─── Gallery images ────────────────────────────────── */
const galleryImages = [
  {
    src: '/images/ai-image-generator/gallery-1.avif',
    alt: 'AI generated cinematic cityscape at golden hour',
    prompt: 'Cinematic aerial view of a futuristic city at golden hour',
    style: 'Cinematic',
  },
  {
    src: '/images/ai-image-generator/gallery-2.avif',
    alt: 'AI generated digital art portrait',
    prompt: 'Portrait with cosmic background, digital art style',
    style: 'Digital Art',
  },
  {
    src: '/images/ai-image-generator/gallery-3.avif',
    alt: 'AI generated photorealistic landscape',
    prompt: 'Misty mountain valley at sunrise, photorealistic',
    style: 'Photorealistic',
  },
  {
    src: '/images/ai-image-generator/gallery-4.avif',
    alt: 'AI generated fantasy portrait with dramatic lighting',
    prompt: 'Ethereal fantasy portrait, luminous skin, mystical forest',
    style: 'Fantasy',
  },
  {
    src: '/images/ai-image-generator/gallery-5.avif',
    alt: 'AI generated vibrant illustration artwork',
    prompt: 'Vibrant pop-art illustration, bold colours and sharp lines',
    style: 'Illustration',
  },
  {
    src: '/images/ai-image-generator/gallery-6.avif',
    alt: 'AI generated watercolor painting scene',
    prompt: 'Soft watercolor scene, cherry blossoms over a still lake',
    style: 'Watercolor',
  },
  {
    src: '/images/ai-image-generator/gallery-7.avif',
    alt: 'AI generated anime style character portrait',
    prompt: 'Anime-style portrait, dramatic lighting, vibrant colours',
    style: 'Anime',
  },
  {
    src: '/images/ai-image-generator/gallery-8.avif',
    alt: 'AI generated 3D rendered scene',
    prompt: 'Hyper-realistic 3D render, soft volumetric lighting',
    style: '3D Render',
  },
];

/* ─── Headshot images ───────────────────────────────── */
const headshotImages = [
  { src: '/images/ai-image-generator/headshot-2.jpg', alt: 'AI professional headshot', label: 'Software Engineer' },
  { src: '/images/ai-image-generator/headshot-3.jpg', alt: 'AI professional headshot', label: 'Marketing Director' },
  { src: '/images/ai-image-generator/headshot-1.jpg', alt: 'AI professional headshot', label: 'Product Manager' },
  { src: '/images/ai-image-generator/headshot-6.jpg', alt: 'AI professional headshot', label: 'Creative Director' },
  { src: '/images/ai-image-generator/headshot-5.jpg', alt: 'AI professional headshot', label: 'Business Analyst' },
];

/* ─── Image features (imagine.art-style) ───────────── */
const imageFeatures = [
  {
    icon: Sparkles,
    title: 'Text to Image',
    desc: 'Turn any description into a stunning image. Products, characters, scenes, abstract concepts — anything you can describe, Nexus AI can generate.',
    color: '#217bfe',
    bg: 'bg-blue-50',
  },
  {
    icon: ImagePlus,
    title: 'Reference Image Upload',
    desc: 'Upload a reference image to guide the style, composition, or subject of your generation. The AI understands visual context instantly.',
    color: '#ac87eb',
    bg: 'bg-purple-50',
  },
  {
    icon: Zap,
    title: 'Real-Time Generation',
    desc: 'Watch your image form as you type. Instant previews let you refine the prompt before committing to a full generation run.',
    color: '#f59e0b',
    bg: 'bg-amber-50',
  },
  {
    icon: Wand2,
    title: 'Smart Prompt Assistant',
    desc: 'Not sure how to phrase it? Nexus AI rewrites your prompt to be clearer, more descriptive, and optimised for better output quality.',
    color: '#8b5cf6',
    bg: 'bg-violet-50',
  },
  {
    icon: Users,
    title: 'Character Consistency',
    desc: 'Generate the same character across multiple images, different scenes, and varying poses while maintaining their appearance.',
    color: '#4c7df0',
    bg: 'bg-indigo-50',
  },
  {
    icon: Camera,
    title: 'Camera Angle Control',
    desc: 'Specify portrait, low angle, wide shot, bird\'s eye view, or close-up. Precise camera control without any photography knowledge.',
    color: '#06b6d4',
    bg: 'bg-cyan-50',
  },
  {
    icon: Palette,
    title: '10+ Artistic Styles',
    desc: 'Photorealistic, Cinematic, Illustration, Anime, Watercolor, Flat Design, 3D Render, Pixel Art and more — all on the same prompt.',
    color: '#ec4899',
    bg: 'bg-pink-50',
  },
  {
    icon: ZoomIn,
    title: 'AI Upscaler to 4K',
    desc: 'Increase resolution to 4096 px without stretching pixels. Every detail sharpens, ready for print, billboard, or large-format display.',
    color: '#10b981',
    bg: 'bg-emerald-50',
  },
  {
    icon: Eraser,
    title: 'Background Removal',
    desc: 'One-click pixel-perfect background removal with smart edge detection. Perfect for product shots, stickers, and compositing.',
    color: '#ee4d5d',
    bg: 'bg-rose-50',
  },
  {
    icon: Pencil,
    title: 'Inpainting',
    desc: 'Select any part of an image and reprompt it. Change a face, swap an outfit, replace the sky — surgical edits without starting over.',
    color: '#f97316',
    bg: 'bg-orange-50',
  },
  {
    icon: Layers,
    title: 'Batch Generation',
    desc: 'Generate multiple images simultaneously with consistent style and subject. Ideal for content calendars, A/B testing, and social campaigns.',
    color: '#0ea5e9',
    bg: 'bg-sky-50',
  },
  {
    icon: Sliders,
    title: 'Brand Kit Integration',
    desc: 'Lock in your brand colours, typography, and style presets so every generated image stays consistent with your visual identity.',
    color: '#7c3aed',
    bg: 'bg-purple-50',
  },
];

/* ─── Image styles data ─────────────────────────────── */
const imageStyles = [
  {
    name: 'Photorealistic',
    desc: 'Camera-quality renders: product shots, portraits, and lifestyle photography.',
    tags: ['Product shots', 'Portraits', 'Stock photos'],
    color: 'text-slate-600',
    bg: 'bg-slate-50 border-slate-200/60',
  },
  {
    name: 'Cinematic',
    desc: 'High-contrast, filmic images with dramatic lighting for editorial and campaign use.',
    tags: ['Editorial', 'Ads', 'Film posters'],
    color: 'text-amber-700',
    bg: 'bg-amber-50 border-amber-200/60',
  },
  {
    name: 'Digital Art',
    desc: 'Painterly, high-detail illustrations combining traditional and digital techniques.',
    tags: ['NFT art', 'Game art', 'Concept art'],
    color: 'text-violet-600',
    bg: 'bg-violet-50 border-violet-200/60',
  },
  {
    name: 'Illustration',
    desc: 'Clean, vector-inspired line art ideal for web graphics, icons, and infographics.',
    tags: ['Web graphics', 'Icons', 'Marketing'],
    color: 'text-blue-600',
    bg: 'bg-blue-50 border-blue-200/60',
  },
  {
    name: 'Anime / Manga',
    desc: 'Japanese animation aesthetic with bold lines, vivid colour, expressive characters.',
    tags: ['Characters', 'Stickers', 'Social'],
    color: 'text-pink-500',
    bg: 'bg-pink-50 border-pink-200/60',
  },
  {
    name: 'Watercolor',
    desc: 'Soft, textured brush strokes with natural blending, ideal for a handmade, artisan feel.',
    tags: ['Branding', 'Invitations', 'Packaging'],
    color: 'text-teal-600',
    bg: 'bg-teal-50 border-teal-200/60',
  },
  {
    name: 'Flat Design',
    desc: 'Minimal shapes with solid fills, perfect for UI mockups, diagrams, and app visuals.',
    tags: ['UI/UX', 'Diagrams', 'Apps'],
    color: 'text-indigo-500',
    bg: 'bg-indigo-50 border-indigo-200/60',
  },
  {
    name: '3D Render',
    desc: 'Volumetric, physically accurate 3D objects and scenes for product mockups and tech visuals.',
    tags: ['Product mockups', 'Tech', 'Packaging'],
    color: 'text-cyan-600',
    bg: 'bg-cyan-50 border-cyan-200/60',
  },
  {
    name: 'Pixel Art',
    desc: 'Retro grid-based artwork with a nostalgic feel, for gaming, merch, and social media.',
    tags: ['Gaming', 'Merch', 'Thumbnails'],
    color: 'text-green-600',
    bg: 'bg-green-50 border-green-200/60',
  },
  {
    name: 'Oil Painting',
    desc: 'Rich texture and depth mimicking traditional oil-on-canvas techniques.',
    tags: ['Fine art', 'Portraits', 'Décor'],
    color: 'text-orange-600',
    bg: 'bg-orange-50 border-orange-200/60',
  },
];

/* ─── Aspect ratios ─────────────────────────────────── */
const aspectRatios = [
  { ratio: '1:1', use: 'Instagram posts, profile pictures', dims: '1024 × 1024' },
  { ratio: '16:9', use: 'YouTube thumbnails, presentations', dims: '1920 × 1080' },
  { ratio: '9:16', use: 'Stories, Reels, TikTok', dims: '1080 × 1920' },
  { ratio: '4:3', use: 'Blog headers, slides', dims: '1440 × 1080' },
  { ratio: '3:2', use: 'Print, photography', dims: '1500 × 1000' },
  { ratio: 'Custom', use: 'Any dimensions you specify', dims: 'Up to 4096 px' },
];

/* ─── Editing tools ─────────────────────────────────── */
const editingTools = [
  { icon: ZoomIn, title: 'Upscale to 4K', body: 'Increase resolution to 4096 px without loss of quality, ready for print or large-format display.' },
  { icon: Eraser, title: 'Background Removal', body: 'One-click transparent background. Perfect for product photos, stickers, and compositing.' },
  { icon: Pencil, title: 'Inpainting', body: 'Select any part of an image and reprompt it. Change a face, swap an outfit, or replace the sky.' },
  { icon: ImagePlus, title: 'Outpainting', body: 'Extend the canvas in any direction. Generate more scene beyond the original frame.' },
  { icon: RefreshCw, title: 'Style Transfer', body: 'Apply a new visual style to an existing image. Turn a photo into watercolor or a sketch into oil painting.' },
  { icon: Layers, title: 'Batch Generate', body: 'Generate multiple images in one go with consistent style and brand colours, ideal for social campaigns.' },
];

/* ─── How it works steps ────────────────────────────── */
const steps = [
  { n: '01', title: 'Write your prompt', body: 'Describe what you want in plain language. Include subject, style, mood, lighting, and aspect ratio. The more specific, the better.' },
  { n: '02', title: 'Choose your style', body: 'Pick from 10 built-in styles, or let Nexus AI infer the best style from your prompt. Switch styles on the same prompt with one click.' },
  { n: '03', title: 'Generate 4 variants', body: 'Nexus AI generates 4 variations in under 10 seconds. Pick your favourite or blend elements from multiple results.' },
  { n: '04', title: 'Edit and export', body: 'Upscale, remove the background, inpaint specific areas, then download as PNG, JPG or WebP, or continue in Creative Studio.' },
];

/* ─── Personas ─────────────────────────────────────── */
const personas = [
  {
    role: 'Marketing Teams',
    headline: 'Campaign visuals without a stock subscription',
    points: ['Hero images and ad creatives in minutes', 'Consistent brand colours across all outputs', 'Social-ready at every aspect ratio', 'No more licensing headaches'],
  },
  {
    role: 'Content Creators',
    headline: 'Thumbnails that stand out without Photoshop',
    points: ['Unique thumbnail concepts in seconds', 'Blog headers that match your writing style', 'Repurpose one image across every platform', 'Batch-generate for content calendars'],
  },
  {
    role: 'E-commerce Sellers',
    headline: 'Product photos and lifestyle shots on demand',
    points: ['Place products in lifestyle scenes', 'White-background product shots instantly', 'Seasonal campaign imagery fast', 'Save thousands on studio photography'],
  },
  {
    role: 'Designers and Creatives',
    headline: 'Rapid concept exploration and client mockups',
    points: ['10 style variants per brief in one session', 'Inpaint to iterate instead of starting over', 'Outpaint for wider compositions', 'Use as a starting point to refine manually'],
  },
];

/* ─── FAQ items ─────────────────────────────────────── */
export const aiImageGeneratorFaqItems = [
  {
    value: 'styles',
    question: 'How many image styles does Nexus AI support?',
    answer:
      'Nexus AI supports 10 built-in styles: Photorealistic, Cinematic, Digital Art, Illustration, Anime/Manga, Watercolor, Flat Design, 3D Render, Pixel Art, and Oil Painting. You can also describe a style in your prompt and Nexus AI will attempt to match it. Styles can be switched on the same prompt without regenerating from scratch.',
  },
  {
    value: 'resolution',
    question: 'What resolution are the images generated at?',
    answer:
      'Images are generated at up to 1024x1024 px by default, depending on the aspect ratio selected. You can upscale any image to up to 4096 px (4K) with one click using the built-in upscaler, making them suitable for print and large-format use.',
  },
  {
    value: 'editing',
    question: 'Can I edit an image after generating it?',
    answer:
      'Yes. Every generated image can be inpainted (reprompt a selected area), outpainted (extend the canvas), upscaled to 4K, or have its background removed with one click. Style transfer lets you apply a different aesthetic to an existing image without regenerating from scratch.',
  },
  {
    value: 'chat-vs-studio',
    question: 'What is the difference between generating images in Chat vs Creative Studio?',
    answer:
      'In Nexus AI Chat, you can request an image mid-conversation and refine it with follow-up prompts, ideal for quick, one-off requests. Creative Studio provides a dedicated workspace with style presets, Brand Kit colour matching, batch generation, and folder organisation, ideal for campaigns and consistent brand output.',
  },
  {
    value: 'commercial',
    question: 'Can I use generated images commercially?',
    answer:
      'Yes. All images you generate on a paid plan are fully yours to use commercially, including advertising, product packaging, editorial, merchandise, and more. AI Image Generator is available on Premium and Ultimate plans only.',
  },
  {
    value: 'portrait',
    question: 'Can Nexus AI generate professional headshots?',
    answer:
      'Yes. Nexus AI can generate photorealistic professional headshots from a text description or by uploading a reference photo. Specify the setting, attire, lighting, and expression to produce LinkedIn-ready portraits, team page photos, speaker bios, and press kit images in minutes. It does not generate images of named public figures.',
  },
  {
    value: 'vs-midjourney',
    question: 'How does Nexus AI Image Generator compare to Midjourney or DALL-E?',
    answer:
      'Unlike standalone tools, Nexus AI Image Generator is built into the same product as Chat, Creative Studio, Artifacts, and AI Academic Research, so you can go from generating an image to using it in a presentation, essay, or document without switching apps. Brand Kit integration and prompt-to-campaign workflows are unique to the Nexus AI ecosystem.',
  },
  {
    value: 'limits',
    question: 'How many images can I generate per month?',
    answer:
      'AI Image Generator is available on paid plans only. Premium includes 100 Creative Studio credits per month, which cover image generations alongside other creative features. Ultimate includes 750 credits per month. Credits reset on your billing date. Top-ups are available any time from your account dashboard.',
  },
];

/* ─── Main component ────────────────────────────────── */
const AiImageGenerator = () => {
  return (
    <>
      {/* ── Hero ── */}
      <section className="bg-secondary overflow-hidden pt-[160px] pb-0">
        <div className="main-container">
          <div className="grid grid-cols-12 items-center gap-y-14 lg:gap-x-12">
            <div className="col-span-12 space-y-8 lg:col-span-6">
              <RevealAnimation delay={0.1}>
                <BadgePrimary className="border-white/20 bg-white/10 text-white/80">
                  AI Image Generator
                </BadgePrimary>
              </RevealAnimation>
              <div className="space-y-5">
                <TextReveal delay={0.2}>
                  <h1 className="text-white">
                    Turn words into{' '}
                    <span
                      className="bg-clip-text text-transparent"
                      style={{ backgroundImage: 'var(--color-gradient-logo)' }}
                    >
                      stunning visuals
                    </span>
                  </h1>
                </TextReveal>
                <TextReveal delay={0.3}>
                  <p className="text-white/60 max-w-[500px]">
                    Describe the image you need. Choose a style. Get 4 variations in seconds. Then
                    upscale, edit, remove backgrounds, and download, all without leaving Nexus AI.
                    Available in Chat and Creative Studio.
                  </p>
                </TextReveal>
              </div>
              <RevealAnimation delay={0.4} asChild={false} className="flex flex-wrap gap-3">
                <Link href="https://app.mynexusai.com/upgrade/premium">
                  <ButtonPrimary textClassName="text-nowrap">Start generating</ButtonPrimary>
                </Link>
                <Link href="/products/creative-studio">
                  <ButtonWhite textClassName="text-nowrap">See Creative Studio</ButtonWhite>
                </Link>
              </RevealAnimation>
              <RevealAnimation delay={0.5} asChild={false} className="flex flex-wrap gap-x-6 gap-y-2">
                {[
                  { label: 'Available in Chat', href: '/products/chat' },
                  { label: 'Available in Creative Studio', href: '/products/creative-studio' },
                ].map((e) => (
                  <Link
                    key={e.label}
                    href={e.href}
                    className="flex items-center gap-x-1.5 text-[13px] text-white/40 hover:text-white/60 transition-colors"
                  >
                    <CheckCircle className="size-3.5" />
                    {e.label}
                  </Link>
                ))}
              </RevealAnimation>
            </div>
            <div className="col-span-12 lg:col-span-6">
              <RevealAnimation delay={0.3} direction="right" offset={60}>
                <HeroGeneratorMock />
              </RevealAnimation>
            </div>
          </div>
        </div>
      </section>

      {/* ── Image gallery ── */}
      <section className="pt-16 md:pt-20">
        <style>{`
          @keyframes gallery-scroll {
            from { transform: translateX(0); }
            to   { transform: translateX(-50%); }
          }
          .gallery-marquee-track {
            animation: gallery-scroll 56s linear infinite;
          }
          .gallery-marquee-track:hover {
            animation-play-state: paused;
          }
        `}</style>
        <div className="relative overflow-hidden">
          {/* Fade edges */}
          <div className="pointer-events-none absolute inset-y-0 left-0 w-20 md:w-36 z-10 bg-gradient-to-r from-background-13 to-transparent" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-20 md:w-36 z-10 bg-gradient-to-l from-background-13 to-transparent" />
          {/* Scrolling track — images duplicated for seamless loop */}
          <div className="gallery-marquee-track flex gap-3 w-max">
            {[...galleryImages, ...galleryImages].map((img, i) => (
              <div
                key={`${img.src}-${i}`}
                className="relative flex-shrink-0 w-[185px] md:w-[235px] h-[310px] md:h-[415px] rounded-2xl overflow-hidden"
              >
                <Image src={img.src} alt={img.alt} fill className="object-cover" sizes="235px" />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent p-3 md:p-4">
                  <span className="inline-block rounded-full bg-white/15 border border-white/20 px-2.5 py-0.5 text-[10px] text-white/70 font-medium mb-1.5">
                    {img.style}
                  </span>
                  <p className="text-[11px] md:text-[12px] text-white font-medium leading-snug">{img.prompt}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── How it works ── */}
      <section className="pt-20 md:pt-25 lg:pt-39">
        <div className="main-container space-y-14">
          <div className="space-y-4 text-center">
            <RevealAnimation delay={0.1}>
              <BadgePrimary>How it works</BadgePrimary>
            </RevealAnimation>
            <TextReveal delay={0.2}>
              <h2>From prompt to print-ready in four steps</h2>
            </TextReveal>
          </div>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {steps.map((step, i) => (
              <RevealAnimation key={step.n} delay={0.1 + i * 0.08} direction="up" offset={40}>
                <div className="rounded-2xl border border-stroke-3 bg-white p-6 space-y-4 h-full">
                  <span className="text-[13px] font-bold text-secondary/20 font-mono">{step.n}</span>
                  <h3 className="text-[17px] font-semibold text-secondary leading-snug">{step.title}</h3>
                  <p className="text-tagline-3 text-secondary/60 leading-relaxed">{step.body}</p>
                </div>
              </RevealAnimation>
            ))}
          </div>
        </div>
      </section>

      {/* ── Features grid ── */}
      <section className="pt-20 md:pt-25 lg:pt-39">
        <div className="main-container space-y-14">
          <div className="space-y-4 text-center">
            <RevealAnimation delay={0.1}>
              <BadgePrimary>Powerful Features</BadgePrimary>
            </RevealAnimation>
            <TextReveal delay={0.2}>
              <h2>Everything you need to create stunning images</h2>
            </TextReveal>
            <TextReveal delay={0.3}>
              <p className="text-secondary/60 mx-auto max-w-[520px]">
                From text to print-ready artwork in seconds. Nexus AI packs a full creative suite
                into a single workspace, no plugins, no extra subscriptions.
              </p>
            </TextReveal>
          </div>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {imageFeatures.map((feat, i) => {
              const Icon = feat.icon;
              return (
                <RevealAnimation key={feat.title} delay={0.04 + i * 0.04} direction="up" offset={30}>
                  <div className="rounded-2xl border border-stroke-3 bg-white p-5 space-y-4 h-full">
                    <div className={`${feat.bg} flex size-10 items-center justify-center rounded-xl`}>
                      <Icon className="size-5" style={{ color: feat.color }} />
                    </div>
                    <div className="space-y-1.5">
                      <h3 className="text-[15px] font-semibold text-secondary leading-snug">{feat.title}</h3>
                      <p className="text-[13px] text-secondary/55 leading-relaxed">{feat.desc}</p>
                    </div>
                  </div>
                </RevealAnimation>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── 10 styles ── */}
      <section className="pt-20 md:pt-25 lg:pt-39">
        <div className="main-container space-y-14">
          <div className="space-y-4 text-center">
            <RevealAnimation delay={0.1}>
              <BadgePrimary>Image Styles</BadgePrimary>
            </RevealAnimation>
            <TextReveal delay={0.2}>
              <h2>Ten styles for every brief</h2>
            </TextReveal>
            <TextReveal delay={0.3}>
              <p className="text-secondary/60 mx-auto max-w-[520px]">
                Switch style with one click. Nexus AI keeps your subject, composition, and colours
                consistent across every style variant.
              </p>
            </TextReveal>
          </div>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {imageStyles.map((s, i) => (
              <RevealAnimation key={s.name} delay={0.04 + i * 0.04} direction="up" offset={30}>
                <div className={`rounded-2xl border p-5 space-y-3 ${s.bg}`}>
                  <p className={`text-[11px] font-bold uppercase tracking-widest ${s.color}`}>
                    {s.name}
                  </p>
                  <p className="text-[13px] text-secondary/70 leading-relaxed">{s.desc}</p>
                  <div className="flex flex-wrap gap-1.5">
                    {s.tags.map((tag) => (
                      <span key={tag} className="rounded-full bg-white/70 border border-white/80 px-2 py-0.5 text-[10px] text-secondary/60">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </RevealAnimation>
            ))}
          </div>
        </div>
      </section>

      {/* ── Aspect ratios ── */}
      <section className="pt-20 md:pt-25 lg:pt-39">
        <div className="main-container">
          <div className="grid grid-cols-12 items-center gap-y-12 lg:gap-x-16">
            <div className="col-span-12 space-y-6 lg:col-span-5">
              <RevealAnimation delay={0.1}>
                <BadgePrimary>Aspect Ratios</BadgePrimary>
              </RevealAnimation>
              <TextReveal delay={0.2}>
                <h2>Every format, right from the start</h2>
              </TextReveal>
              <TextReveal delay={0.3}>
                <p className="text-secondary/60 max-w-[420px]">
                  Generate at the right dimensions from the beginning. No cropping after the fact.
                  From a square Instagram post to a 4K cinema still, Nexus AI generates at the
                  correct aspect ratio natively.
                </p>
              </TextReveal>
            </div>
            <div className="col-span-12 lg:col-span-7">
              <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
                {aspectRatios.map((ar, i) => (
                  <RevealAnimation key={ar.ratio} delay={0.05 + i * 0.05} asChild={false} direction="up" offset={25}>
                    <div className="rounded-2xl border border-stroke-3 bg-white p-4 space-y-2">
                      <p
                        className="text-xl font-bold bg-clip-text text-transparent"
                        style={{ backgroundImage: 'var(--color-gradient-logo)' }}
                      >
                        {ar.ratio}
                      </p>
                      <p className="text-[12px] font-semibold text-secondary">{ar.use}</p>
                      <p className="text-[11px] text-secondary/40 font-mono">{ar.dims}</p>
                    </div>
                  </RevealAnimation>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Editing tools ── */}
      <section className="pt-20 md:pt-25 lg:pt-39">
        <div className="main-container">
          <div className="grid grid-cols-12 items-start gap-y-12 lg:gap-x-16">
            <div className="col-span-12 lg:col-span-6">
              <RevealAnimation delay={0.2} direction="left" offset={50}>
                <EditingMock />
              </RevealAnimation>
            </div>
            <div className="col-span-12 space-y-8 lg:col-span-6">
              <div className="space-y-4">
                <RevealAnimation delay={0.1}>
                  <BadgePrimary>Image Editing</BadgePrimary>
                </RevealAnimation>
                <TextReveal delay={0.2}>
                  <h2>Generate, then perfect</h2>
                </TextReveal>
                <TextReveal delay={0.3}>
                  <p className="text-secondary/60 max-w-[440px]">
                    Every image is a starting point, not a final answer. Six built-in editing tools
                    let you iterate without starting over.
                  </p>
                </TextReveal>
              </div>
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                {editingTools.map((tool, i) => (
                  <RevealAnimation key={tool.title} delay={0.1 + i * 0.07} direction="up" offset={25}>
                    <div className="rounded-2xl border border-stroke-3 bg-white p-4 space-y-2">
                      <div className="flex items-center gap-x-2">
                        <div className="flex size-7 items-center justify-center rounded-lg bg-secondary/6">
                          <tool.icon className="size-3.5 text-secondary" />
                        </div>
                        <p className="text-[13px] font-semibold text-secondary">{tool.title}</p>
                      </div>
                      <p className="text-[12px] text-secondary/55 leading-relaxed">{tool.body}</p>
                    </div>
                  </RevealAnimation>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Professional Headshots ── */}
      <section className="pt-20 md:pt-25 lg:pt-39">
        <div className="main-container">
          <div className="grid grid-cols-12 items-center gap-y-12 lg:gap-x-16">
            <div className="col-span-12 space-y-6 lg:col-span-5">
              <RevealAnimation delay={0.1}>
                <BadgePrimary>AI Headshots</BadgePrimary>
              </RevealAnimation>
              <TextReveal delay={0.2}>
                <h2>Professional headshots, generated in minutes</h2>
              </TextReveal>
              <TextReveal delay={0.3}>
                <p className="text-secondary/60 max-w-[420px]">
                  No studio. No photographer. No retouching appointment. Describe your attire,
                  background, and expression — Nexus AI returns a portrait ready for LinkedIn,
                  your company page, or your speaker bio.
                </p>
              </TextReveal>
              <RevealAnimation delay={0.4} asChild={false} className="space-y-2.5">
                {[
                  'LinkedIn profile photos',
                  'Company team and About pages',
                  'Speaker bios and author portraits',
                  'Press kits and media inquiries',
                  'Professional dating profiles',
                ].map((pt) => (
                  <div key={pt} className="flex items-center gap-x-2.5">
                    <CheckCircle className="size-4 text-secondary shrink-0" />
                    <span className="text-[14px] text-secondary/70">{pt}</span>
                  </div>
                ))}
              </RevealAnimation>
              <RevealAnimation delay={0.5}>
                <Link href="https://app.mynexusai.com/upgrade/premium">
                  <ButtonPrimary textClassName="text-nowrap">Generate your headshot</ButtonPrimary>
                </Link>
              </RevealAnimation>
            </div>
            <div className="col-span-12 lg:col-span-7">
              <RevealAnimation asChild={false} delay={0.3} direction="right" offset={50} className="space-y-3">
                {/* Top row: 2 images centred */}
                <div className="flex justify-center gap-3">
                  {headshotImages.slice(0, 2).map((hs) => (
                    <div key={hs.src} className="basis-1/3 relative overflow-hidden rounded-2xl">
                      <Image src={hs.src} alt={hs.alt} width={512} height={672} className="w-full h-auto" />
                      <div className="absolute bottom-0 left-0 right-0 rounded-b-2xl bg-gradient-to-t from-black/60 to-transparent px-3 py-3">
                        <p className="text-[11px] font-semibold text-white leading-snug">{hs.label}</p>
                      </div>
                    </div>
                  ))}
                </div>
                {/* Bottom row: 3 images full width */}
                <div className="flex gap-3">
                  {headshotImages.slice(2).map((hs) => (
                    <div key={hs.src} className="flex-1 relative overflow-hidden rounded-2xl">
                      <Image src={hs.src} alt={hs.alt} width={512} height={672} className="w-full h-auto" />
                      <div className="absolute bottom-0 left-0 right-0 rounded-b-2xl bg-gradient-to-t from-black/60 to-transparent px-3 py-3">
                        <p className="text-[11px] font-semibold text-white leading-snug">{hs.label}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </RevealAnimation>
            </div>
          </div>
        </div>
      </section>

      {/* ── Available in Chat + Creative Studio ── */}
      <section className="pt-20 md:pt-25 lg:pt-39">
        <div className="main-container space-y-10">
          <div className="space-y-4 text-center">
            <RevealAnimation delay={0.1}>
              <BadgePrimary>Where to use it</BadgePrimary>
            </RevealAnimation>
            <TextReveal delay={0.2}>
              <h2>Available in Chat and Creative Studio</h2>
            </TextReveal>
            <TextReveal delay={0.3}>
              <p className="text-secondary/60 mx-auto max-w-[520px]">
                Generate on the fly in Chat, or go deep with the full Creative Studio workspace.
                Both use the same underlying model — the difference is the workflow.
              </p>
            </TextReveal>
          </div>
          <RevealAnimation delay={0.3}>
            <AccessMock />
          </RevealAnimation>
        </div>
      </section>

      {/* ── Style gallery ── */}
      <section className="pt-20 md:pt-25 lg:pt-39">
        <div className="main-container">
          <div className="grid grid-cols-12 items-center gap-y-12 lg:gap-x-16">
            <div className="col-span-12 space-y-6 lg:col-span-5">
              <RevealAnimation delay={0.1}>
                <BadgePrimary>Style Switching</BadgePrimary>
              </RevealAnimation>
              <TextReveal delay={0.2}>
                <h2>Same prompt. Ten different looks.</h2>
              </TextReveal>
              <TextReveal delay={0.3}>
                <p className="text-secondary/60 max-w-[420px]">
                  Write your prompt once. Cycle through Photorealistic, Cinematic, Illustration, Anime,
                  Watercolor, and more — the subject and composition stay consistent, only the
                  aesthetic changes.
                </p>
              </TextReveal>
              <RevealAnimation delay={0.4} asChild={false} className="space-y-3">
                {['No reprompting for each style', 'Compare variants side by side', 'Save any style as a Creative Studio preset'].map((pt) => (
                  <div key={pt} className="flex items-start gap-x-2.5">
                    <CheckCircle className="size-4 text-secondary shrink-0 mt-0.5" />
                    <span className="text-tagline-2 text-secondary/80">{pt}</span>
                  </div>
                ))}
              </RevealAnimation>
            </div>
            <div className="col-span-12 lg:col-span-7">
              <RevealAnimation delay={0.3} direction="right" offset={50}>
                <StyleGalleryMock />
              </RevealAnimation>
            </div>
          </div>
        </div>
      </section>

      {/* ── Personas ── */}
      <section className="pt-20 md:pt-25 lg:pt-39">
        <div className="main-container space-y-14">
          <div className="space-y-4 text-center">
            <RevealAnimation delay={0.1}>
              <BadgePrimary>Who uses it</BadgePrimary>
            </RevealAnimation>
            <TextReveal delay={0.2}>
              <h2>Built for every creator and team</h2>
            </TextReveal>
          </div>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {personas.map((p, i) => (
              <RevealAnimation key={p.role} delay={0.1 + i * 0.08} direction="up" offset={40}>
                <div className="rounded-2xl border border-stroke-3 bg-white p-6 space-y-4 h-full">
                  <div>
                    <p className="text-[11px] font-semibold uppercase tracking-widest text-secondary/40 mb-1">{p.role}</p>
                    <h3 className="text-[16px] font-semibold text-secondary leading-snug">{p.headline}</h3>
                  </div>
                  <ul className="space-y-2">
                    {p.points.map((pt) => (
                      <li key={pt} className="flex items-start gap-x-2">
                        <CheckCircle className="size-3.5 text-secondary/50 shrink-0 mt-0.5" />
                        <span className="text-[12px] text-secondary/60">{pt}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </RevealAnimation>
            ))}
          </div>
        </div>
      </section>

      {/* ── Prompt tips callout ── */}
      <section className="pt-20 md:pt-25 lg:pt-39">
        <div className="main-container">
          <RevealAnimation
            delay={0.1}
            asChild={false}
            className="bg-secondary rounded-3xl px-8 py-12 md:px-14 md:py-16"
          >
            <div className="grid grid-cols-12 items-center gap-y-10 lg:gap-x-16">
              <div className="col-span-12 space-y-4 lg:col-span-5">
                <TextReveal delay={0.1}>
                  <h2 className="text-white">Writing prompts that actually work</h2>
                </TextReveal>
                <p className="text-white/60">
                  Better prompts produce better images. Include these four elements and
                  you will get consistent results every time.
                </p>
              </div>
              <div className="col-span-12 lg:col-span-7">
                <div className="grid grid-cols-2 gap-4">
                  {[
                    { n: '1', label: 'Subject', eg: '"a golden retriever sitting in a sunlit park"' },
                    { n: '2', label: 'Style', eg: '"photorealistic, cinematic, watercolor"' },
                    { n: '3', label: 'Mood / Lighting', eg: '"golden hour, dramatic shadows, soft light"' },
                    { n: '4', label: 'Aspect Ratio', eg: '"16:9, portrait, square"' },
                  ].map((tip) => (
                    <div key={tip.n} className="rounded-2xl border border-white/10 bg-white/5 p-4 space-y-2">
                      <div className="flex items-center gap-x-2">
                        <span className="text-[11px] font-bold text-white/25 font-mono">{tip.n}</span>
                        <p className="text-[13px] font-semibold text-white">{tip.label}</p>
                      </div>
                      <p className="text-[11px] text-white/45 italic leading-relaxed">{tip.eg}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </RevealAnimation>
        </div>
      </section>

      {/* ── Pricing ── */}
      <PricingTeaser />
    </>
  );
};

export default AiImageGenerator;

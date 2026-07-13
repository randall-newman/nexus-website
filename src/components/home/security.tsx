import RevealAnimation from '@/src/components/animation/reveal-animation';
import { TextReveal } from '@/src/components/animation/text-reveal';
import { BadgePrimary } from '@/src/components/shared/ui/badge';
import { ButtonPrimary, ButtonWhite } from '@/src/components/shared/ui/button';
import {
  Bot,
  Calendar,
  CheckSquare,
  MessageSquare,
  Mic,
  Sparkles,
  Users2,
} from 'lucide-react';
import Link from 'next/link';

const chatbotFeatures = [
  { icon: Bot,         text: 'Train on your own content, no code required' },
  { icon: MessageSquare, text: 'Embed on any website in minutes'            },
  { icon: Users2,      text: 'Lead capture, CRM handoff and analytics'      },
];

const meetingFeatures = [
  { icon: Mic,         text: 'Automatic transcripts and AI summaries'       },
  { icon: CheckSquare, text: 'Action items extracted and assigned instantly' },
  { icon: Calendar,    text: 'Works with Google Meet, Zoom and Teams'       },
];

const Security = () => {
  return (
    <section className="pt-20 md:pt-25 lg:pt-39">
      <div className="main-container">
        <div className="space-y-5 text-center mb-10 lg:mb-14">
          <RevealAnimation delay={0.1}>
            <BadgePrimary>Add-ons</BadgePrimary>
          </RevealAnimation>
          <TextReveal delay={0.2}>
            <h2>Extend Nexus AI even further</h2>
          </TextReveal>
          <TextReveal delay={0.3}>
            <p className="text-background-14/60 mx-auto max-w-[520px]">
              Two powerful add-ons that turn Nexus AI into your always-on customer assistant and
              your most attentive meeting partner.
            </p>
          </TextReveal>
        </div>

        <div className="grid grid-cols-12 gap-y-5 md:gap-6">
          {/* Chatbot card */}
          <RevealAnimation
            delay={0.2}
            asChild={false}
            className="col-span-12 md:col-span-6 border-stroke-3 rounded-2xl border bg-white p-8 flex flex-col gap-y-6"
          >
            <div className="space-y-4">
              <div className="flex size-12 items-center justify-center rounded-2xl bg-primary-50">
                <Bot className="text-primary-500 size-6" />
              </div>
              <div>
                <h3 className="text-heading-5 text-secondary">AI Chatbot</h3>
                <p className="text-tagline-2 text-secondary/60 mt-1">
                  Deploy your own AI chatbot. Train it on your content and embed it on any website
                  in minutes, no code required.
                </p>
              </div>
              <ul className="space-y-3">
                {chatbotFeatures.map((f) => (
                  <li key={f.text} className="flex items-center gap-x-3">
                    <span className="bg-primary-50 flex size-8 shrink-0 items-center justify-center rounded-lg">
                      <f.icon className="text-primary-500 size-4" />
                    </span>
                    <span className="text-tagline-2 text-secondary/70">{f.text}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Chatbot widget demo */}
            <div className="flex-1 rounded-2xl overflow-hidden shadow-[0_8px_32px_rgba(0,12,96,0.14)] border border-stroke-3 flex flex-col">
              {/* Widget header */}
              <div className="bg-secondary px-4 py-3 flex items-center gap-x-3">
                <div className="relative">
                  <div className="size-9 rounded-full bg-white/20 flex items-center justify-center">
                    <Sparkles className="size-4 text-white" />
                  </div>
                  <span className="absolute -bottom-0.5 -right-0.5 size-3 rounded-full bg-green-400 border-2 border-[#000c60]" />
                </div>
                <div>
                  <p className="text-[12px] font-semibold text-white leading-tight">Nexus Support</p>
                  <p className="text-[10px] text-white/60 leading-tight">Always online</p>
                </div>
                <div className="ml-auto flex items-center gap-x-1.5">
                  <span className="size-1.5 rounded-full bg-white/30" />
                  <span className="size-1.5 rounded-full bg-white/30" />
                  <span className="size-1.5 rounded-full bg-white/30" />
                </div>
              </div>

              {/* Messages */}
              <div className="flex-1 bg-[#f8fafd] px-3 py-3 space-y-3 overflow-hidden">
                {/* Bot greeting */}
                <div className="flex items-end gap-x-2">
                  <div className="size-6 rounded-full bg-secondary flex items-center justify-center shrink-0">
                    <Sparkles className="size-3 text-white" />
                  </div>
                  <div className="bg-white rounded-2xl rounded-bl-sm border border-stroke-3 px-3 py-2 max-w-[82%] shadow-sm">
                    <p className="text-tagline-3 text-secondary/80 leading-relaxed">
                      Hi there! 👋 I&apos;m your AI assistant. I can help with pricing, features, billing and getting started. What can I help you with today?
                    </p>
                  </div>
                </div>

                {/* Quick replies */}
                <div className="flex flex-wrap gap-1.5 pl-8">
                  {['Pricing plans', 'Start free trial', 'Talk to sales'].map((r) => (
                    <span key={r} className="border border-secondary/20 text-secondary rounded-full px-2.5 py-1 text-[10px] font-medium bg-white cursor-default hover:bg-secondary/5 transition-colors">
                      {r}
                    </span>
                  ))}
                </div>

                {/* User message */}
                <div className="flex justify-end">
                  <div className="bg-secondary text-white rounded-2xl rounded-br-sm px-3 py-2 max-w-[78%]">
                    <p className="text-tagline-3 leading-relaxed">What&apos;s the difference between Premium and Ultimate?</p>
                  </div>
                </div>

                {/* Bot reply */}
                <div className="flex items-end gap-x-2">
                  <div className="size-6 rounded-full bg-secondary flex items-center justify-center shrink-0">
                    <Sparkles className="size-3 text-white" />
                  </div>
                  <div className="bg-white rounded-2xl rounded-bl-sm border border-stroke-3 px-3 py-2.5 max-w-[82%] shadow-sm space-y-2">
                    <p className="text-tagline-3 text-secondary/80 leading-relaxed">
                      Great question! Here&apos;s a quick comparison:
                    </p>
                    <div className="space-y-1">
                      {[
                        { plan: 'Premium', detail: '$20/mo: Unlimited chat, Research Mode & full Academic' },
                        { plan: 'Ultimate', detail: '$100/mo: Unlimited Research Mode, advanced AI & 750 Creative credits' },
                      ].map(p => (
                        <div key={p.plan} className="flex gap-x-1.5 text-[10px]">
                          <span className="font-semibold text-secondary shrink-0">{p.plan}:</span>
                          <span className="text-secondary/60">{p.detail}</span>
                        </div>
                      ))}
                    </div>
                    <p className="text-[10px] text-primary-500 font-medium cursor-default">View full comparison →</p>
                  </div>
                </div>

                {/* Typing indicator */}
                <div className="flex items-end gap-x-2">
                  <div className="size-6 rounded-full bg-secondary flex items-center justify-center shrink-0">
                    <Sparkles className="size-3 text-white" />
                  </div>
                  <div className="bg-white rounded-2xl rounded-bl-sm border border-stroke-3 px-3 py-3 shadow-sm">
                    <div className="flex items-center gap-x-1">
                      <span className="size-1.5 rounded-full bg-secondary/40 animate-bounce" style={{ animationDelay: '0ms' }} />
                      <span className="size-1.5 rounded-full bg-secondary/40 animate-bounce" style={{ animationDelay: '150ms' }} />
                      <span className="size-1.5 rounded-full bg-secondary/40 animate-bounce" style={{ animationDelay: '300ms' }} />
                    </div>
                  </div>
                </div>
              </div>

              {/* Input bar */}
              <div className="bg-white border-t border-stroke-3 px-3 py-2.5 flex items-center gap-x-2">
                <input
                  readOnly
                  placeholder="Type a message..."
                  className="flex-1 text-tagline-3 text-secondary/50 bg-transparent outline-none placeholder:text-secondary/30 cursor-default"
                />
                <button
                  type="button"
                  className="flex size-7 shrink-0 items-center justify-center rounded-full bg-secondary transition-colors"
                  aria-label="Send"
                >
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                    <path d="M1 6h10M6 1l5 5-5 5" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button>
              </div>

              {/* Powered by */}
              <div className="bg-white border-t border-stroke-3/50 py-1.5 text-center">
                <span className="text-[9px] text-secondary/30">Powered by </span>
                <span className="text-[9px] text-secondary/50 font-semibold">Nexus AI</span>
              </div>
            </div>

            <div className="flex flex-col gap-y-2">
              <Link href="/products/chatbot" className="block">
                <ButtonPrimary className="w-full" textClassName="text-center flex-1 px-0! pr-8!">
                  Explore AI Chatbot
                </ButtonPrimary>
              </Link>
            </div>
          </RevealAnimation>

          {/* Meeting Notes card */}
          <RevealAnimation
            delay={0.3}
            asChild={false}
            className="col-span-12 md:col-span-6 border-stroke-3 rounded-2xl border bg-white p-8 flex flex-col gap-y-6"
          >
            <div className="space-y-4">
              <div className="flex size-12 items-center justify-center rounded-2xl bg-[#f65c9c]/10">
                <Mic className="text-[#f65c9c] size-6" />
              </div>
              <div>
                <h3 className="text-heading-5 text-secondary">AI Meeting Notes</h3>
                <p className="text-tagline-2 text-secondary/60 mt-1">
                  Never take manual notes again. Get automatic summaries, transcripts and action
                  items for every meeting, synced to your calendar.
                </p>
              </div>
              <ul className="space-y-3">
                {meetingFeatures.map((f) => (
                  <li key={f.text} className="flex items-center gap-x-3">
                    <span className="bg-[#f65c9c]/10 flex size-8 shrink-0 items-center justify-center rounded-lg">
                      <f.icon className="text-[#f65c9c] size-4" />
                    </span>
                    <span className="text-tagline-2 text-secondary/70">{f.text}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Mini Meeting Notes demo */}
            <div className="border-stroke-3 rounded-xl border bg-white overflow-hidden flex-1">
              {/* Note header */}
              <div className="border-b border-stroke-3 bg-background-13 px-4 py-3 flex items-center justify-between">
                <div>
                  <p className="text-tagline-2 text-secondary font-semibold">Product Roadmap Sync</p>
                  <div className="flex items-center gap-x-2 mt-0.5">
                    <span className="text-[10px] text-secondary/40">52 min</span>
                    <span className="text-secondary/20">·</span>
                    <span className="text-[10px] text-secondary/40">Today, 2:00 PM</span>
                    <span className="text-secondary/20">·</span>
                    <span className="text-[10px] text-secondary/40">5 attendees</span>
                  </div>
                </div>
                <span className="rounded-full bg-green-50 text-green-600 text-[10px] font-medium px-2 py-0.5 border border-green-200/60">
                  Processed
                </span>
              </div>

              <div className="px-4 py-3 space-y-4">
                {/* Summary */}
                <div className="space-y-1.5">
                  <p className="text-[10px] text-secondary/40 font-semibold uppercase tracking-wider">AI Summary</p>
                  <p className="text-tagline-3 text-secondary/75 leading-relaxed">
                    The team reviewed the Q4 feature roadmap and reprioritised the mobile release ahead of the desktop refresh. Engineering confirmed a 3-week runway for the auth overhaul. Design will present revised wireframes on Thursday.
                  </p>
                </div>

                {/* Decisions */}
                <div className="space-y-1.5">
                  <p className="text-[10px] text-secondary/40 font-semibold uppercase tracking-wider">Key decisions</p>
                  <div className="space-y-1">
                    {[
                      'Mobile release promoted to October 8th',
                      'Auth overhaul scoped to 3 weeks',
                      'Desktop refresh pushed to Q1',
                    ].map((d) => (
                      <div key={d} className="flex items-start gap-x-2">
                        <span className="mt-1 size-1.5 shrink-0 rounded-full bg-[#f65c9c]" />
                        <span className="text-tagline-3 text-secondary/70">{d}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Action items */}
                <div className="space-y-1.5">
                  <p className="text-[10px] text-secondary/40 font-semibold uppercase tracking-wider">Action items</p>
                  <div className="space-y-1.5">
                    {[
                      { text: 'Share revised wireframes with eng by Thursday', who: 'Maya', due: 'Thu' },
                      { text: 'Confirm mobile release date with marketing',    who: 'James', due: 'Fri' },
                      { text: 'Kick off auth overhaul sprint',                 who: 'You',   due: 'Mon' },
                    ].map((a) => (
                      <div key={a.text} className="flex items-start gap-x-2">
                        <CheckSquare className="text-[#f65c9c] size-3.5 shrink-0 mt-0.5" />
                        <span className="text-tagline-3 text-secondary/70 flex-1 leading-relaxed">{a.text}</span>
                        <div className="flex items-center gap-x-1 shrink-0">
                          <span className="text-[10px] text-secondary/50 font-medium">{a.who}</span>
                          <span className="text-[9px] text-secondary/30">{a.due}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-y-2">
              <Link href="/products/ai-meeting-notes" className="block">
                <ButtonWhite className="w-full" textClassName="text-center flex-1 px-0! pr-8!">
                  Explore AI Meeting Notes
                </ButtonWhite>
              </Link>
            </div>
          </RevealAnimation>
        </div>
      </div>
    </section>
  );
};

export default Security;

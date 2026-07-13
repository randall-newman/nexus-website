export const skillsFaqItems = [
  {
    value: 'what-is',
    question: 'What is a Skill in Nexus AI?',
    answer:
      "A Skill is a saved set of instructions that Nexus AI applies automatically whenever it's active. Think of it as a persistent briefing: you define your process, preferences, or rules once — in plain English — and Nexus AI follows them across every relevant chat, document, or creative output from that point forward. Skills replace repetitive system prompts and manual re-explaining.",
  },
  {
    value: 'how-create',
    question: 'How do I create a Skill?',
    answer:
      'Open Settings → Capabilities → Skills, then click New Skill. Give it a name, write your instructions in plain English (no code needed), and choose which Nexus AI products it applies to — Chat, Essay Writer, Creative Studio, Artifacts, or all of them. Save it, toggle it on, and it activates automatically in every relevant session.',
  },
  {
    value: 'vs-prompt',
    question: 'How is a Skill different from a system prompt or custom instruction?',
    answer:
      "Custom instructions apply globally and always. Skills are modular and switchable — you can have 12 skills and activate only the three relevant to today's project. Skills also have names and explicit scope (which products they apply to), making it easy to manage a library of workflows rather than a single all-or-nothing instruction block.",
  },
  {
    value: 'multiple',
    question: 'Can I use multiple Skills at once?',
    answer:
      "Yes. You can activate as many Skills as you like simultaneously — Nexus AI blends them without conflict. For example, a Brand Voice skill and a Report Structure skill can both be active at the same time. If two skills give contradictory instructions on the same point, Nexus AI will flag the ambiguity or apply the more recently created skill's rule by default.",
  },
  {
    value: 'team',
    question: 'Can I share Skills with my team?',
    answer:
      "On Ultimate plans with team workspaces, an admin can publish shared Skills that appear in every team member's skills library. Personal skills remain private. Shared skills are read-only for regular members so they cannot be edited, only toggled on or off.",
  },
  {
    value: 'credits',
    question: 'Do Skills use extra credits?',
    answer:
      "No. Skills are instructions, not additional AI calls. Activating a Skill doesn't consume extra credits — it simply shapes how Nexus AI responds within your existing message. The only cost is a slightly longer context on each message, which is managed automatically.",
  },
  {
    value: 'privacy',
    question: 'Are my Skill instructions private?',
    answer:
      "Yes. Your Skill instructions are stored in your account and are never shared with other users, used to train AI models, or visible to Nexus AI support unless you explicitly share them. Personal skills are visible only to you. Team-published skills are visible to members of your workspace only.",
  },
  {
    value: 'plan',
    question: 'Which plan includes Skills?',
    answer:
      'Skills are available on Premium plans (up to 50 Skills) and Ultimate plans (unlimited Skills). Free users cannot create Skills. Premium and Ultimate plans also include Artifacts, and Ultimate unlocks team-level skill sharing. You can manage and switch between Skills any time from Settings → Capabilities.',
  },
];

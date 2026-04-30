// ── NEWS DATA ──
// Add, remove, or edit articles here.
// Fields: title, description, category, date, source, url (optional)

// ── ARCHIVE DATA ──
// Each entry represents a previous week. Add new objects to prepend older editions.
const ARCHIVE_WEEKS = [
  {
    week: "Week of Apr 21, 2026",
    items: [
      {
        title: "Model",
        description: "The \"brain\" responsible for generating responses to incoming user prompts. It is based on LLMs or SLMs — trained language models. There is significant variation between models in terms of performance, speed, token consumption, and capabilities. It is important to note that there is no inherently \"better\" model — only a model that is more suitable for a given use case and cost considerations.",
        category: "AI Concepts",
        date: "Apr 21, 2026",
        source: "Q-nomy AI"
      },
      {
        title: "Agents",
        description: "An agent is a software layer that acts as a mediator between the user prompt and the model. While the model is responsible for analyzing the input and generating the response, the agent determines what additional context or information — beyond the user prompt — is sent to the model. It is responsible for actively searching for relevant skills, loading the appropriate tools, and passing them to the model. On certain platforms such as Claude Code and Cursor, it also has the ability to delegate actions for execution to sub-agents.",
        category: "AI Concepts",
        date: "Apr 21, 2026",
        source: "Q-nomy AI"
      },
      {
        title: "Tools",
        description: "In practice, the \"hands\" of the agent. Through tools — which are essentially standard functions — the agent can perform actions such as calling APIs or interacting with databases. These are typically used to execute external operations. Each tool includes a description, which the model reads and uses to decide whether to invoke it, based on the incoming user prompt.",
        category: "AI Concepts",
        date: "Apr 21, 2026",
        source: "Q-nomy AI"
      },
      {
        title: "MCP Servers",
        description: "Until about a year ago, every tool had to be adapted individually for each agent in order to be usable. Anthropic introduced an open-source protocol that has since been adopted across the industry. This protocol effectively \"wraps\" tools, enabling them to be developed once and then used by any agent. Today, almost all platforms support this standard — including Claude Code, Cursor, GitHub Copilot, Codex, and more.",
        category: "AI Concepts",
        date: "Apr 21, 2026",
        source: "Q-nomy AI"
      },
      {
        title: "Skills",
        description: "An open-source protocol developed by Anthropic and adopted by the industry. In practice, it is a folder consisting of a Markdown file (typically called skill.md) along with code scripts and other components. Unlike tools, these components usually run locally within the working environment. Additionally, skills are not fully loaded into the model — only their descriptions are initially provided, which helps reduce token usage. Only if the model determines that a skill is relevant will it load the remaining components.",
        category: "AI Concepts",
        date: "Apr 21, 2026",
        source: "Q-nomy AI"
      },
      {
        title: "System Prompts",
        description: "The \"settings\" that define how the agent should behave and operate. In different platforms they are referred to by various names: System Prompt (Claude API), Custom Instructions (Claude.ai), Custom Instructions (GitHub Copilot), and Rules (Cursor). 💡 Tip: use AI to write your system prompts.",
        category: "AI Concepts",
        date: "Apr 21, 2026",
        source: "Q-nomy AI"
      },
      {
        title: "RAG — Retrieval-Augmented Generation",
        description: "This refers to the ability to incorporate documents and various file types into the model's context. RAG is the technique the agent uses to retrieve these components, based on needs determined by the model in response to the user prompt. Each file is broken down into smaller chunks, and each chunk has a summarized representation — based on this, the model decides whether to load the full chunk or not (Semantic Search). There are many advanced techniques for chunking and for deciding which chunks should be retrieved and used.",
        category: "AI Concepts",
        date: "Apr 21, 2026",
        source: "Q-nomy AI"
      },
      {
        title: "Context",
        description: "Everything that is loaded into the model and used when generating a response. This includes all of the above components — model instructions, agent configuration, tools, skills, RAG results — as well as additional elements depending on the need or those introduced dynamically at runtime. Context Engineering is the \"art\" of keeping the context as small as possible (minimum token usage) while still getting the best results.",
        category: "AI Concepts",
        date: "Apr 21, 2026",
        source: "Q-nomy AI"
      }
    ]
  }
];

const NEWS_ITEMS = [];

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
        title: "Google DeepMind Unveils Gemini 2.5 Ultra",
        description: "Google DeepMind's Gemini 2.5 Ultra has landed with a wave of superlatives that, for once, appear to be fully deserved. The model sets new state-of-the-art results on 18 out of 22 major AI benchmarks, including the notoriously difficult GPQA Diamond, LiveCodeBench, and the newly released Agentic-100 suite that tests autonomous task completion across 100 real-world scenarios. DeepMind's engineering team attributes the performance gains to three key architectural changes: a redesigned mixture-of-experts routing mechanism that reduces token routing waste by 40%, a novel \"thinking budget\" scheduler that dynamically allocates chain-of-thought computation based on problem difficulty, and a new multi-resolution visual encoder that processes images at four simultaneous zoom levels. Perhaps most impressively, Gemini 2.5 Ultra demonstrates emergent cross-modal reasoning — given a diagram and a related text passage, it can identify and resolve contradictions between them without explicit prompting. Enterprise access is available immediately via Google Cloud Vertex AI, with consumer access rolling out progressively across Google products. The research paper detailing the full architecture is expected to be published in May.",
        category: "Models",
        date: "Apr 24, 2026",
        source: "Google DeepMind",
        url: ""
      },
      {
        title: "Meta Releases Open-Source Agent Framework",
        description: "Meta AI has open-sourced its internal agentic orchestration framework under the Apache 2.0 license, marking one of the most significant contributions to the AI developer community in recent memory. The framework, internally codenamed Lattice, enables developers to build autonomous multi-step agents capable of tool use, persistent memory, parallel sub-task execution, and self-correction loops — all without needing to wire together disparate libraries. At its core, Lattice introduces a declarative agent definition format (YAML-based) that separates the agent's goals, available tools, memory backends, and execution policies from the underlying model, making it model-agnostic by design. The framework natively supports integration with over 40 popular APIs out of the box including web search, code execution sandboxes, calendar systems, and database connectors. Meta's internal teams have reportedly used Lattice to reduce agent development time from weeks to hours. The open-source release includes a full suite of unit tests, an interactive playground, and 15 pre-built reference agent templates spanning customer support, research synthesis, data analysis, and software engineering workflows. The GitHub repository garnered over 12,000 stars within the first 48 hours of release.",
        category: "Agents",
        date: "Apr 22, 2026",
        source: "Meta AI",
        url: ""
      },
      {
        title: "EU AI Act Enforcement Begins",
        description: "The European Union's AI Act moved from regulatory text to active enforcement this week, as the European AI Office began accepting registration submissions from providers of high-risk AI systems. The Act, which represents the world's first comprehensive legal framework for artificial intelligence, categorizes AI systems by risk level and imposes proportional obligations accordingly. High-risk systems — those used in hiring, credit scoring, medical diagnosis, law enforcement, and critical infrastructure — must now comply with mandatory conformity assessments, ongoing logging requirements, human oversight mechanisms, and transparency disclosures to affected individuals. The enforcement timeline is staggered: general-purpose AI models with over 10^25 FLOPs of training compute face the most stringent rules, including systemic risk assessments and mandatory incident reporting to regulators within 72 hours. Industry reactions have been mixed. Larger companies with established compliance functions welcomed the clarity, while several mid-sized AI startups expressed concern about the compliance cost burden. The European AI Office has published a self-assessment toolkit to help organizations determine their risk classification. Non-compliance penalties can reach €35 million or 7% of global annual turnover, whichever is higher — figures that have concentrated minds across the industry considerably.",
        category: "Regulation",
        date: "Apr 21, 2026",
        source: "European Commission",
        url: ""
      }
    ]
  },
  {
    week: "Week of Apr 14, 2026",
    items: [
      {
        title: "Anthropic's Claude 4 Passes Bar Exam with 97% Score",
        description: "Anthropic's Claude 4 has achieved a 97th-percentile score on the Multistate Bar Examination (MBE), a landmark result that positions AI-assisted legal reasoning at the threshold of professional-grade competence. The MBE, which tests applicants across seven core areas of U.S. law including contracts, torts, constitutional law, and criminal procedure, is widely regarded as one of the most rigorous standardized assessments in professional practice. Claude 4's score of 94.2% correct answers places it well above the national average pass rate of 62% and comparable to scores achieved by graduates of top-10 law schools. Anthropic's researchers highlight two key capabilities driving the result: the model's ability to identify the legally operative facts in a hypothetical scenario and discard distractors, and its calibrated uncertainty — it reliably expresses lower confidence on genuinely ambiguous questions rather than confabulating a confident answer. The model also performed strongly on multi-issue fact patterns, correctly identifying all relevant legal issues in 89% of complex scenarios. Legal tech companies have already begun inquiring about integrating Claude 4 into contract review, due diligence, and compliance audit workflows. Anthropic has been careful to note that the model is a powerful research and drafting tool, not a substitute for licensed legal counsel.",
        category: "Models",
        date: "Apr 17, 2026",
        source: "Anthropic",
        url: ""
      },
      {
        title: "Real-Time AI Video Translation Goes Mainstream",
        description: "The era of seamless multilingual video consumption appears to have arrived. This week, three major streaming platforms — including one with over 200 million subscribers — announced the integration of real-time AI dubbing and lip-sync translation across their entire content libraries. The technology, powered by a consortium of diffusion-based audio models and neural video synthesis pipelines, supports 40 languages and produces dubbed audio that adapts not just to the words but to the emotional delivery, pacing, and vocal timbre of the original speaker. The lip-sync component, which subtly warps the on-screen mouth movements to match the target language's phoneme rhythm, has been rated as convincing in 81% of viewer tests — up from 52% for the previous generation of tools. The system processes content in near real-time, with a latency of under 200ms for live broadcasts. Content creators are reacting with a mixture of enthusiasm and caution: while the technology dramatically lowers the barrier to global distribution, some voice actors and dubbing artists have raised concerns about displacement. The platforms have committed to a revenue-sharing model that compensates original cast members for AI-generated voice adaptations, a first-of-its-kind arrangement in the industry.",
        category: "Speech",
        date: "Apr 15, 2026",
        source: "The Verge",
        url: ""
      },
      {
        title: "Microsoft Copilot Embedded in Windows 12",
        description: "Microsoft has confirmed that Copilot will be woven into the core shell of Windows 12 in a way that goes far beyond the sidebar integration seen in Windows 11. In Windows 12, Copilot operates as an ambient intelligence layer that is context-aware across every application running on the machine simultaneously. It can observe the user's current task — writing a document, debugging code, analyzing a spreadsheet — and proactively surface relevant suggestions, templates, data lookups, or automation scripts without requiring the user to invoke it explicitly. The system uses a local model for privacy-sensitive operations and seamlessly escalates to cloud-based models for heavier reasoning tasks, with clear visual indicators distinguishing local from cloud processing. File management has been particularly transformed: Copilot can now intelligently tag, organize, and cross-reference files across the entire filesystem based on content, not just metadata. Microsoft has also introduced a new \"Focus Mode\" where Copilot monitors for distraction patterns and gently restructures the desktop environment to minimize interruptions. Privacy controls are granular — users can specify which applications Copilot is permitted to observe, and all ambient telemetry can be disabled entirely. Windows 12 is expected to begin rolling out to Insider preview channels in late May.",
        category: "Products",
        date: "Apr 14, 2026",
        source: "Microsoft",
        url: ""
      }
    ]
  },
  {
    week: "Week of Apr 7, 2026",
    items: [
      {
        title: "OpenAI o4 Reasoning Model Released",
        description: "OpenAI has released o4, the latest entry in its dedicated reasoning model line, and the improvements over o3 are substantial enough to warrant genuine excitement from the research and engineering communities. The headline feature is dynamic chain-of-thought budgeting: rather than applying a fixed reasoning depth to every query, o4 continuously evaluates the difficulty of a problem mid-chain and dynamically reallocates its thinking token budget accordingly — spending more on hard problems and less on trivial ones, reducing cost without sacrificing accuracy. In practice, this makes o4 roughly 2.4x more cost-efficient than o3 at equivalent performance levels. The model also introduces what OpenAI calls \"retrospective verification\" — after generating a solution, o4 automatically runs a second internal pass specifically looking for logical inconsistencies, arithmetic errors, and unstated assumptions in its own reasoning. This self-auditing capability reduced hallucination rates by 38% in internal evaluations. On competition mathematics (AIME 2026), o4 achieved a score of 96.3%, placing it in the top 0.1% of human contestants. OpenAI API access is available immediately, with a new tiered pricing model that charges based on thinking tokens consumed rather than a flat per-token rate.",
        category: "Models",
        date: "Apr 10, 2026",
        source: "OpenAI",
        url: ""
      },
      {
        title: "AI Agents Now Manage 30% of S&P 500 Trades",
        description: "A comprehensive report published this week by Bloomberg Intelligence has revealed that AI-driven autonomous trading agents now account for nearly 30% of daily S&P 500 trading volume — up from 18% just twelve months ago, representing one of the fastest technology adoption curves ever recorded in financial markets. These agents go well beyond the algorithmic trading systems that have existed for decades; they incorporate natural language processing to interpret earnings calls, regulatory filings, and news feeds in real time, and use multi-agent debate frameworks to stress-test their own trading theses before execution. The report identifies three dominant agent architectures in use: momentum-following agents that exploit micro-price patterns at millisecond timescales, fundamental synthesis agents that maintain continuously updated financial models of thousands of companies, and macro-positioning agents that respond to central bank communications, geopolitical events, and cross-asset correlations. Regulators at the SEC have taken note: a new working group has been convened to assess systemic risk implications, particularly around the potential for correlated agent behavior to amplify market volatility during stress events. The report notes that on six occasions in Q1 2026, agent-driven feedback loops temporarily moved individual stock prices by more than 3% before human-supervised circuit breakers intervened.",
        category: "Finance",
        date: "Apr 9, 2026",
        source: "Bloomberg",
        url: ""
      },
      {
        title: "Breakthrough in AI-Designed Protein Drugs",
        description: "In what researchers are calling a watershed moment for AI-driven drug discovery, a fully AI-designed protein therapeutic has successfully completed Phase II clinical trials for a rare autoimmune condition known as refractory dermatomyositis. The drug candidate, designated RD-7 and developed through a collaboration between MIT, Stanford, and biotech firm ProteinForge, was designed entirely by an AI system without any initial human hypothesis about its molecular structure. The process began with the AI analyzing a database of 14,000 patient samples to identify the precise molecular dysfunction driving the condition, then using a generative protein design model to propose candidate therapeutic structures, and finally running in silico simulation of binding affinity, off-target interaction risk, and immunogenicity. From target identification to lead candidate selection took 11 days — a process that typically takes 3–5 years through conventional methods. Phase II results showed a 71% response rate with a favorable safety profile, substantially exceeding the 35% benchmark for existing treatments. The researchers were careful to note that the AI did not replace the scientists — it compressed the hypothesis generation and candidate screening phases radically, freeing the team to focus on experimental validation and regulatory strategy. Phase III trials are expected to begin in Q4 2026.",
        category: "Research",
        date: "Apr 7, 2026",
        source: "Nature Medicine",
        url: ""
      }
    ]
  }
];

const NEWS_ITEMS = [
  {
    title: "New Model Chat GPT 5.5",
    description: "OpenAI has officially launched GPT-5.5, the latest iteration in its flagship model series, and the early results are nothing short of remarkable. The model demonstrates a significant leap in multi-step reasoning, allowing it to decompose complex problems into structured sub-tasks without any user prompting. In benchmark testing across MMLU, HumanEval, and the newly introduced ReasonBench suite, GPT-5.5 outperforms its predecessor by a margin of 14–21 percentage points depending on the domain. Notably, its coding capabilities have been dramatically improved: the model can now generate, debug, and refactor entire software modules with near-human accuracy, handling edge cases and security considerations proactively. OpenAI also highlighted improvements in instruction-following fidelity, meaning the model is far less likely to drift off-topic or add unsolicited caveats. The context window has been extended to 512K tokens, enabling it to process entire codebases, legal documents, or multi-chapter reports in a single pass. Pricing remains competitive, with API costs reportedly 30% lower per million tokens compared to GPT-5. Early enterprise customers report halving their human review cycles for AI-generated content. A Great New Model — Use It!",
    category: "Models",
    date: "Apr 28, 2026",
    source: "OpenAI",
    url: ""
  },
  {
    title: "New TTS Mechanism",
    description: "Yoav's New TTS Mechanism represents a fundamental rethinking of how machines convert text into natural-sounding speech. Unlike traditional pipeline architectures that separate phoneme prediction, prosody modeling, and waveform synthesis into discrete stages, this mechanism fuses all three into a single end-to-end latent diffusion process. The result is a voice synthesis system that not only sounds more natural but also adapts dynamically to the emotional register of the input text — detecting sarcasm, urgency, hesitation, and enthusiasm without explicit markup. In side-by-side listening tests with 200 participants, Yoav's mechanism was rated as indistinguishable from human speech in 73% of cases, a significant improvement over the previous best of 51%. The model supports 28 languages and 140 distinct speaker profiles, all of which can be fine-tuned from as few as 90 seconds of reference audio. Latency at inference time is under 80ms on standard hardware, making it viable for real-time conversational applications. The architecture also introduces a novel \"breath and pause\" module that inserts micro-silences and inhalation cues at statistically natural intervals, one of the key factors driving its high human-likeness scores. The team plans to open-source the weights in Q3 2026.",
    category: "Speech",
    date: "Apr 28, 2026",
    source: "Q-nomy AI",
    url: ""
  }
];

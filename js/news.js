// ── NEWS DATA ──
// Add, remove, or edit articles here.
// title, description, category support { en: "...", he: "..." } for bilingual display.
// Fields: title, description, category, date, source, url (optional)

// ── ARCHIVE DATA ──
// Each entry represents a previous week. Add new objects to prepend older editions.
const ARCHIVE_WEEKS = [
  {
    week: { en: "Week of Apr 21, 2026", he: "שבוע 21 באפריל 2026" },
    items: [
      {
        title: { en: "Model", he: "מודל" },
        description: {
          en: "The \"brain\" responsible for generating responses to incoming user prompts. It is based on LLMs or SLMs — trained language models. There is significant variation between models in terms of performance, speed, token consumption, and capabilities. It is important to note that there is no inherently \"better\" model — only a model that is more suitable for a given use case and cost considerations.",
          he: "ה\"מוח\" האחראי על יצירת תגובות לפרומפטים הנכנסים. הוא מבוסס על LLMs או SLMs — מודלי שפה מאומנים. קיים פער משמעותי בין מודלים שונים מבחינת ביצועים, מהירות, צריכת טוקנים ויכולות. חשוב לציין שאין מודל \"טוב יותר\" באופן מוחלט — יש רק מודל שמתאים יותר לצורך הספציפי ולשיקולי העלות."
        },
        category: { en: "AI Concepts", he: "מושגי AI" },
        date: "Apr 21, 2026",
        source: "Q-nomy AI"
      },
      {
        title: { en: "Agents", he: "סוכנים" },
        description: {
          en: "An agent is a software layer that acts as a mediator between the user prompt and the model. While the model is responsible for analyzing the input and generating the response, the agent determines what additional context or information — beyond the user prompt — is sent to the model. It is responsible for actively searching for relevant skills, loading the appropriate tools, and passing them to the model. On certain platforms such as Claude Code and Cursor, it also has the ability to delegate actions for execution to sub-agents.",
          he: "סוכן הוא שכבת תוכנה המתפקדת כמתווך בין פרומפט המשתמש לבין המודל. בעוד שהמודל אחראי על ניתוח הקלט ויצירת התגובה, הסוכן קובע איזה הקשר ומידע נוסף — מעבר לפרומפט — יישלח למודל. הסוכן אחראי על חיפוש מיומנויות רלוונטיות, טעינת הכלים המתאימים והעברתם למודל. בפלטפורמות כגון Claude Code ו-Cursor, יש לו גם יכולת להאציל פעולות לסוכני-משנה."
        },
        category: { en: "AI Concepts", he: "מושגי AI" },
        date: "Apr 21, 2026",
        source: "Q-nomy AI"
      },
      {
        title: { en: "Tools", he: "כלים" },
        description: {
          en: "In practice, the \"hands\" of the agent. Through tools — which are essentially standard functions — the agent can perform actions such as calling APIs or interacting with databases. These are typically used to execute external operations. Each tool includes a description, which the model reads and uses to decide whether to invoke it, based on the incoming user prompt.",
          he: "ה\"ידיים\" של הסוכן. באמצעות כלים — שהם למעשה פונקציות רגילות — הסוכן יכול לבצע פעולות כגון קריאה ל-APIs או אינטראקציה עם בסיסי נתונים. כל כלי כולל תיאור שהמודל קורא ומשתמש בו כדי להחליט אם להפעיל אותו בהתאם לפרומפט הנכנס."
        },
        category: { en: "AI Concepts", he: "מושגי AI" },
        date: "Apr 21, 2026",
        source: "Q-nomy AI"
      },
      {
        title: { en: "MCP Servers", he: "שרתי MCP" },
        description: {
          en: "Until about a year ago, every tool had to be adapted individually for each agent in order to be usable. Anthropic introduced an open-source protocol that has since been adopted across the industry. This protocol effectively \"wraps\" tools, enabling them to be developed once and then used by any agent. Today, almost all platforms support this standard — including Claude Code, Cursor, GitHub Copilot, Codex, and more.",
          he: "עד לפני כשנה, כל כלי היה צריך להיות מותאם בנפרד לכל סוכן. Anthropic הציגה פרוטוקול קוד פתוח שאומץ מאז בכל התעשייה. הפרוטוקול \"עוטף\" כלים, מאפשר פיתוח פעם אחת ושימוש בכל סוכן. כיום כמעט כל הפלטפורמות תומכות בסטנדרט זה — כולל Claude Code, Cursor, GitHub Copilot, Codex ועוד."
        },
        category: { en: "AI Concepts", he: "מושגי AI" },
        date: "Apr 21, 2026",
        source: "Q-nomy AI"
      },
      {
        title: { en: "Skills", he: "מיומנויות" },
        description: {
          en: "An open-source protocol developed by Anthropic and adopted by the industry. In practice, it is a folder consisting of a Markdown file (typically called skill.md) along with code scripts and other components. Unlike tools, these components usually run locally within the working environment. Additionally, skills are not fully loaded into the model — only their descriptions are initially provided, which helps reduce token usage. Only if the model determines that a skill is relevant will it load the remaining components.",
          he: "פרוטוקול קוד פתוח שפותח על ידי Anthropic ואומץ בתעשייה. בפועל, זוהי תיקייה המורכבת מקובץ Markdown (בדרך כלל skill.md) יחד עם סקריפטים ורכיבים נוספים. בשונה מכלים, רכיבים אלה פועלים מקומית. המיומנויות אינן נטענות במלואן לתוך המודל — רק התיאורים שלהן מסופקים תחילה. רק אם המודל יקבע שמיומנות רלוונטית יטעון את הרכיבים הנותרים."
        },
        category: { en: "AI Concepts", he: "מושגי AI" },
        date: "Apr 21, 2026",
        source: "Q-nomy AI"
      },
      {
        title: { en: "System Prompts", he: "הוראות מערכת" },
        description: {
          en: "The \"settings\" that define how the agent should behave and operate. In different platforms they are referred to by various names: System Prompt (Claude API), Custom Instructions (Claude.ai), Custom Instructions (GitHub Copilot), and Rules (Cursor). 💡 Tip: use AI to write your system prompts.",
          he: "ה\"הגדרות\" שמגדירות כיצד הסוכן אמור להתנהג ולפעול. בפלטפורמות שונות הן מכונות בשמות שונים: System Prompt (Claude API), Custom Instructions (Claude.ai), Custom Instructions (GitHub Copilot), ו-Rules (Cursor). 💡 טיפ: השתמשו ב-AI לכתיבת הוראות המערכת שלכם."
        },
        category: { en: "AI Concepts", he: "מושגי AI" },
        date: "Apr 21, 2026",
        source: "Q-nomy AI"
      },
      {
        title: { en: "RAG — Retrieval-Augmented Generation", he: "RAG — יצירה מועשרת על ידי אחזור" },
        description: {
          en: "This refers to the ability to incorporate documents and various file types into the model's context. RAG is the technique the agent uses to retrieve these components, based on needs determined by the model in response to the user prompt. Each file is broken down into smaller chunks, and each chunk has a summarized representation — based on this, the model decides whether to load the full chunk or not (Semantic Search). There are many advanced techniques for chunking and for deciding which chunks should be retrieved and used.",
          he: "היכולת לשלב מסמכים וסוגי קבצים שונים בהקשר של המודל. RAG היא הטכניקה שהסוכן משתמש בה לאחזור רכיבים אלה בהתאם לצרכים שנקבעו על ידי המודל. כל קובץ מחולק לחתיכות קטנות, ולכל חתיכה יש ייצוג מסוכם — על בסיסו המודל מחליט אם לטעון את החתיכה המלאה (חיפוש סמנטי). קיימות טכניקות מתקדמות רבות לחלוקה ולהחלטה אילו חתיכות לאחזר."
        },
        category: { en: "AI Concepts", he: "מושגי AI" },
        date: "Apr 21, 2026",
        source: "Q-nomy AI"
      },
      {
        title: { en: "Context", he: "הקשר" },
        description: {
          en: "Everything that is loaded into the model and used when generating a response. This includes all of the above components — model instructions, agent configuration, tools, skills, RAG results — as well as additional elements depending on the need or those introduced dynamically at runtime. Context Engineering is the \"art\" of keeping the context as small as possible (minimum token usage) while still getting the best results.",
          he: "כל מה שנטען למודל ומשמש ביצירת תגובה. זה כולל את כל הרכיבים הנ\"ל — הוראות מודל, תצורת סוכן, כלים, מיומנויות, תוצאות RAG — וכן אלמנטים נוספים בהתאם לצורך. Context Engineering היא \"האמנות\" של שמירת ההקשר כמינימלי ככל האפשר (שימוש מינימלי בטוקנים) תוך קבלת התוצאות הטובות ביותר."
        },
        category: { en: "AI Concepts", he: "מושגי AI" },
        date: "Apr 21, 2026",
        source: "Q-nomy AI"
      },
      {
        title: { en: "Opus 4.7", he: "Opus 4.7" },
        description: {
          en: "The successor to Opus 4.6, which was considered one of the strongest models for complex coding tasks. Opus 4.7 introduces cybersecurity capabilities, though opinions about it are mixed. It is significantly more expensive per token, and so far the performance improvements do not appear to justify the cost.",
          he: "יורשו של Opus 4.6, שנחשב לאחד המודלים החזקים ביותר למשימות קוידינג מורכבות. Opus 4.7 מציג יכולות אבטחת סייבר, אם כי הדעות לגביו מעורבות. הוא יקר משמעותית יותר לטוקן, ועד כה שיפורי הביצועים אינם נראים מצדיקים את העלות."
        },
        category: { en: "AI Models", he: "מודלי AI" },
        date: "Apr 21, 2026",
        source: "Anthropic"
      },
      {
        title: { en: "GPT-5.5", he: "GPT-5.5" },
        description: {
          en: "Released just a few days ago by OpenAI. Surprisingly, it has received very positive reviews — especially notable given that Anthropic models have led in performance until now. It specializes in long tasks and executing them efficiently at lower cost.",
          he: "שוחרר לפני מספר ימים על ידי OpenAI. באופן מפתיע, קיבל ביקורות חיוביות מאוד — מה שבולט במיוחד כיוון שמודלי Anthropic הובילו בביצועים עד כה. הוא מתמחה במשימות ארוכות וביצוען ביעילות בעלות נמוכה יותר."
        },
        category: { en: "AI Models", he: "מודלי AI" },
        date: "Apr 21, 2026",
        source: "OpenAI"
      },
      {
        title: { en: "Gemma 4", he: "Gemma 4" },
        description: {
          en: "A new open model from Google. Being open means its weights can be modified, allowing customization for specific needs and specialization. It is designed to run locally — lightweight yet powerful, usable offline, and capable of running on mobile devices while still delivering strong performance.",
          he: "מודל \"פתוח\" חדש מ-Google. היותו פתוח משמעה שניתן לשנות את משקולות שלו, מה שמאפשר התאמה אישית לצרכים ספציפיים. הוא מתוכנן לפעול מקומית — קל אך עוצמתי, ניתן לשימוש ללא חיבור לאינטרנט, ומסוגל לפעול על מכשירים ניידים תוך שמירה על ביצועים חזקים."
        },
        category: { en: "AI Models", he: "מודלי AI" },
        date: "Apr 21, 2026",
        source: "Google"
      },
      {
        title: { en: "Mythos", he: "Mythos" },
        description: {
          en: "A mysterious and powerful model from Anthropic — so mysterious that it is not publicly available, reportedly because it is \"too powerful.\" It focuses on identifying security vulnerabilities in legacy code. Anthropic has made it available only to a limited group of 40+ companies for internal use in detecting and addressing security issues. The jury is still out on whether this is a publicity stunt or a real leap in model capability.",
          he: "מודל מסתורי ועוצמתי מ-Anthropic — כה מסתורי שאינו זמין לציבור, לכאורה כי הוא \"חזק מדי\". הוא מתמקד בזיהוי פרצות אבטחה בקוד ישן. Anthropic הפך אותו לזמין רק לקבוצה מצומצמת של 40+ חברות לשימוש פנימי. עדיין לא ברור אם זו תרגיל יחסי ציבור או קפיצה אמיתית ביכולות המודל."
        },
        category: { en: "AI Models", he: "מודלי AI" },
        date: "Apr 21, 2026",
        source: "Anthropic"
      },
      {
        title: { en: "Don't Write to Agents — Speak with Them", he: "אל תכתבו לסוכנים — דברו איתם" },
        description: {
          en: "Many users still \"chat\" with agents or chatbots, but this approach is becoming slower and somewhat outdated. Today, there are tools that convert your speech to text in fractions of a second and insert it wherever your cursor is — enabling a much faster and more natural way to interact with agents. One example is Wispr Flow, which supports Hebrew and has proven effective in practice.",
          he: "משתמשים רבים עדיין \"מצ'טים\" עם סוכנים, אך גישה זו הופכת לאיטית ומיושנת. כיום קיימים כלים שממירים את דיבורכם לטקסט בשניות ומכניסים אותו היישר לסביבת העבודה — מה שמאפשר אינטראקציה מהירה וטבעית הרבה יותר. דוגמה אחת היא Wispr Flow, התומך בעברית ונמצא יעיל בפועל."
        },
        category: { en: "Pro Tips", he: "טיפים" },
        date: "Apr 21, 2026",
        source: "Q-nomy AI"
      },
      {
        title: { en: "GitHub Copilot Workshops", he: "סדנאות GitHub Copilot" },
        description: {
          en: "Last week, we kicked off a four-part workshop with an external instructor focused on using agents within GitHub Copilot. Many new concepts will be covered — some familiar, some less so. While the workshop centers on GitHub Copilot, it is relevant to everyone, as modern platforms are increasingly converging around the same standards. From my perspective, Claude Code currently leads with Cursor close behind, while GitHub Copilot is still catching up — but the workshop provides significant value for everyone.",
          he: "בשבוע שעבר השקנו סדנה של ארבעה חלקים עם מדריך חיצוני המתמקד בשימוש בסוכנים ב-GitHub Copilot. יחשפו לנו מושגים חדשים רבים — חלקם מוכרים, חלקם פחות. חשוב לציין שלמרות שהסדנה ממוקדת ב-GitHub Copilot, היא רלוונטית לכולם, שכן פלטפורמות מודרניות מתכנסות סביב אותם סטנדרטים. מנקודת מבטי, Claude Code מוביל עם Cursor קרוב אחריו, ובעוד GitHub Copilot עדיין מדביק פיגור — הסדנה מספקת ערך משמעותי לכולם."
        },
        category: { en: "Workshops", he: "סדנאות" },
        date: "Apr 21, 2026",
        source: "Q-nomy AI"
      }
    ]
  }
];

const NEWS_ITEMS = [
  {
    title: { en: "Test", he: "בדיקה" },
    description: {
      en: "This is a test news item for today's highlights. It serves as a placeholder to verify that the current week's section is rendering correctly.",
      he: "זהו פריט חדשות לבדיקה עבור הדגשות השבוע. הוא משמש כמילוי כדי לוודא שקטע השבוע הנוכחי מוצג כראוי."
    },
    category: { en: "Test", he: "בדיקה" },
    date: "Apr 30, 2026",
    source: "Q-nomy AI"
  },
  {
    title: { en: "Test 2", he: "בדיקה 2" },
    description: {
      en: "A second test news item to confirm multiple cards in the Test category render and filter correctly.",
      he: "פריט בדיקה שני לאישור שמספר כרטיסיות בקטגוריית הבדיקה מוצגות ומסוננות כראוי."
    },
    category: { en: "Test", he: "בדיקה" },
    date: "Apr 30, 2026",
    source: "Q-nomy AI"
  },
  {
    title: { en: "Try 1", he: "ניסוי 1" },
    description: {
      en: "First placeholder item in the Try category, used to verify multi-category filtering in the current week's highlights section.",
      he: "פריט ניסוי ראשון בקטגוריית הניסוי, המשמש לאימות סינון רב-קטגוריות בקטע הדגשות השבוע."
    },
    category: { en: "Try", he: "ניסוי" },
    date: "Apr 30, 2026",
    source: "Q-nomy AI"
  },
  {
    title: { en: "Try 2", he: "ניסוי 2" },
    description: {
      en: "Second placeholder item in the Try category.",
      he: "פריט ניסוי שני בקטגוריית הניסוי."
    },
    category: { en: "Try", he: "ניסוי" },
    date: "Apr 30, 2026",
    source: "Q-nomy AI"
  },
  {
    title: { en: "Try 3", he: "ניסוי 3" },
    description: {
      en: "Third placeholder item in the Try category.",
      he: "פריט ניסוי שלישי בקטגוריית הניסוי."
    },
    category: { en: "Try", he: "ניסוי" },
    date: "Apr 30, 2026",
    source: "Q-nomy AI"
  },
  {
    title: { en: "Try 4", he: "ניסוי 4" },
    description: {
      en: "Fourth placeholder item in the Try category.",
      he: "פריט ניסוי רביעי בקטגוריית הניסוי."
    },
    category: { en: "Try", he: "ניסוי" },
    date: "Apr 30, 2026",
    source: "Q-nomy AI"
  }
];

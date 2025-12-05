export type Language = "fr" | "ar";

export const content = {
  fr: {
    hero: {
      title: "Maroc AI — Votre copilote administratif intelligent.",
      subtitle:
        "L’IA qui vous guide pas à pas dans toutes vos démarches au Maroc : documents, procédures, workflows, explications en Darija.",
      cta: "Rejoignez la liste d’attente",
      subCta:
        "En avant-première : soyez parmi les premiers à tester le prototype.",
      emailPlaceholder: "Votre email professionnel",
      namePlaceholder: "Votre nom complet",
      typeLabel: "Type de procédures qui vous intéressent",
      typeSME: "Procédures PME et Entreprises",
      typeIndividual: "Procédures Particuliers",
      phonePlaceholder: "Votre numéro de téléphone",
      ideaLabel: "Une idée ou suggestion ?",
      ideaPlaceholder: "Partagez vos idées...",
    },
    problem: {
      title: "Le problème aujourd’hui",
      description: "Les démarches administratives au Maroc sont :",
      points: [
        "Complexes",
        "Floues",
        "Longues",
        "Remplies d’erreurs et d'allers-retours",
      ],
      examplesTitle: "Exemples réels :",
      examples: [
        "CIN / Passeport → documents manquants",
        "Vente voiture → étapes confuses",
        "Auto-entrepreneur → fiscalité, ANAPEC, CNSS",
        "PME → quittances, attestations, contrats",
      ],
      shockPhrase:
        "👉 Les Marocains perdent des heures… juste par manque d’information claire.",
    },
    solution: {
      title: "Maroc AI : votre copilote administratif intelligent.",
      features: [
        "Analyse vos documents (OCR)",
        "Comprend votre procédure",
        "Explique tout en Darija simple",
        "Génère la liste des pièces",
        "Détecte les pièces manquantes",
        "Crée un workflow étape par étape",
        "Donne lieux, délais, actions",
      ],
      result: "Plus d’erreurs, plus d’allers-retours, plus de stress.",
    },
    demo: {
      title: "Démo en direct : “Procédure Conversational Assist”",
      subtitle:
        "Voici comment Maroc AI fonctionne réellement. Pas besoin d’uploader des documents ou connaître la procédure. L’utilisateur discute simplement avec l’IA, comme avec un ami.",
      examples: [
        {
          id: "cin",
          label: "Renouvellement de CIN",
          title: "Exemple : Renouvellement de CIN",
          description:
            "L’idée : pas besoin de comprendre la procédure. L’IA pose les questions elle-même, puis génère un workflow personnalisé et clair.",
          conversation: [
            {
              role: "user",
              type: "text",
              text: "Salam, je veux renouveler ma CIN, chno khasni ndir ?",
            },
            {
              role: "ai",
              type: "questions",
              text: "Daba, ghan-3awnk. D’abord quelques questions rapides :",
            },
            {
              role: "user",
              type: "answers",
              text: "Expirée, et je suis à Rabat.",
            },
            {
              role: "ai",
              type: "checklist_map",
              text: "Très bien. Voici EXACTEMENT ce qu’il faut faire :",
            },
          ],
        },
        {
          id: "auto-entrepreneur",
          label: "Création Auto-Entrepreneur",
          title: "Exemple rapide : Création Auto-Entrepreneur",
          description:
            "Une procédure complexe simplifiée en quelques échanges.",
          conversation: [
            {
              role: "user",
              type: "text",
              text: "Je veux devenir auto-entrepreneur, je fais quoi ?",
            },
            {
              role: "ai",
              type: "questions",
              text: "Parfait ! Je vais te guider. D’abord, quel type d’activité ? (commerce, service, artisanat)",
            },
            {
              role: "user",
              type: "answers",
              text: "Service.",
            },
            {
              role: "ai",
              type: "checklist_map",
              text: "Très bien. Voici les étapes exactes :",
            },
          ],
        },
      ],
      conclusion:
        "L’IA pose les questions elle-même, puis génère un workflow personnalisé et clair.",
    },
    differentiation: {
      title: "Pourquoi nous ?",
      points: [
        "Spécialisation 100% procédures marocaines",
        "Compréhension Darija",
        "Multi-agents avancés (OCR, RAG, workflows)",
        "UX ultra-simple",
      ],
      conclusion:
        "Une IA construite pour le Maroc, pas adaptée d’un modèle étranger.",
    },
    roadmap: {
      title: "Nous travaillons actuellement sur :",
      items: [
        "OCR + extraction",
        "RAG spécialisé Maroc",
        "3 procédures pilotes :",
      ],
      pilots: [
        "Vente véhicule",
        "Création auto-entrepreneur",
        "Renouvellement CIN",
      ],
      access: "Accès anticipé uniquement pour la waitlist.",
    },
    footer: {
      cta: "Rejoignez la liste d’attente et testez Maroc AI en avant-première.",
      button: "Je m’inscris",
      legal: "Nous respectons votre confidentialité. Pas de spam.",
    },
  },
  ar: {
    hero: {
      title: "Maroc AI — المساعد الإداري الذكي ديالك.",
      subtitle:
        "الذكاء الاصطناعي لي كيشرح ليك الإجراءات خطوة بخطوة، بالدارجة، وكيجهّز ليك الوثائق ويعطيك شنو خصّك دير بالضبط.",
      cta: "سجّل فـ اللائحة ديال الانتظار",
      subCta: "كون من الأوائل لي غادي يجربو النسخة الأولى.",
      emailPlaceholder: "الإيميل ديالك",
      namePlaceholder: "سميتك الكاملة",
      typeLabel: "نوع الإجراءات لي مهتم بها",
      typeSME: "إجراءات الشركات والمقاولات",
      typeIndividual: "إجراءات الأفراد",
      phonePlaceholder: "نمرة التيليفون ديالك",
      ideaLabel: "عندك شي فكرة؟",
      ideaPlaceholder: "شاركنا أفكارك...",
    },
    problem: {
      title: "المشكل",
      description: "الإجراءات الإدارية فالمغرب:",
      points: [
        "معقّدين",
        "ماشي واضحين",
        "كيضيعو الوقت",
        "وكيوقّعو بزاف الأخطاء",
      ],
      examplesTitle: "أمثلة:",
      examples: [
        "تجديد لكارط ناسيونال → وثائق ناقصين",
        "بيع الطوموبيل → مراحل كثيرة ومشاوّشة",
        "الأوطو-أنترابرونور → الضرائب، CNSS…",
        "الشركات → شواهد، عقود، تصاريح",
      ],
      shockPhrase:
        "👉 حنا كنضيعو وقت بزاف غير حيت ما كنعرفوش شنو نديرو وشنو نجمعو.",
    },
    solution: {
      title: "Maroc AI : المساعد الإداري الذكي ديالك.",
      features: [
        "كيقرا الوثائق بالOCR",
        "كيعرف شنو بغيت دير",
        "كيشرح ليك كلشي بالدارجة",
        "كيجهّز ليك لاليست ديال لدوصي",
        "كيكشف الوثائق الناقصين",
        "كيعطيك الخطوات وحدة بوحدة",
        "كيعطيك البلايص، الوقت، والإجراءات",
      ],
      result: "مايبقاش الخطأ. مايبقاش الذهاب والإياب. مايبقاش الصداع.",
    },
    demo: {
      title: "تجربة مباشرة: المساعد الذكي",
      subtitle:
        "ها كيفاش كيخدم Maroc AI بصح. ما تحتاجش ترفع وثائق ولا تكون عارف الإجراءات. كتهضر مع الذكاء الاصطناعي بحال إلا كتهضر مع صاحبك.",
      examples: [
        {
          id: "cin",
          label: "تجديد البطاقة الوطنية",
          title: "مثال: تجديد البطاقة الوطنية",
          description:
            "الفكرة: ما تحتاجش تفهم الإجراءات المعقدة. الـ AI كيسولك الأسئلة المناسبة، ومن بعد كيعطيك خطة واضحة ومخصصة ليك.",
          conversation: [
            {
              role: "user",
              type: "text",
              text: "السلام، بغيت نجدد لاكارط ناسيونال، شنو خاصني ندير؟",
            },
            {
              role: "ai",
              type: "questions",
              text: "مرحبا، أنا نعاونك. جاوبني غير على هاد الأسئلة دغيا:",
            },
            {
              role: "user",
              type: "answers",
              text: "وفات ليا الصلاحية، وأنا ساكن فالرباط.",
            },
            {
              role: "ai",
              type: "checklist_map",
              text: "مزيان. ها شنو خاصك دير بالضبط:",
            },
          ],
        },
        {
          id: "auto-entrepreneur",
          label: "إنشاء مقاول ذاتي",
          title: "مثال سريع: إنشاء مقاول ذاتي",
          description: "إجراءات معقدة بسطناها فبضع خطوات.",
          conversation: [
            {
              role: "user",
              type: "text",
              text: "بغيت ندير مقاول ذاتي، كيفاش ندير؟",
            },
            {
              role: "ai",
              type: "questions",
              text: "واخا! أنا غادي نوريك الطريق. أول حاجة، شنو نوع النشاط ديالك؟ (تجارة، خدمات، حرفة)",
            },
            {
              role: "user",
              type: "answers",
              text: "خدمات.",
            },
            {
              role: "ai",
              type: "checklist_map",
              text: "مزيان. ها الخطوات لي خاصك تبع:",
            },
          ],
        },
      ],
      conclusion:
        "الذكاء الاصطناعي كيسولك، ومن بعد كيوجد ليك خطة عمل واضحة ومخصصة ليك.",
    },
    differentiation: {
      title: "القوة ديالنا:",
      points: [
        "موجّهة 100% للإجراءات المغربية",
        "كتفهم الدارجة",
        "Multi-agents متطور",
        "واجهة سهلة بزاف",
      ],
      conclusion: "هاد الIA معمولة للمغاربة، ماشي مجرد ترجمة من شي خدمة برا.",
    },
    roadmap: {
      title: "دابا خدامين على :",
      items: [
        "OCR + استخراج المعلومات",
        "RAG خاص بالمغرب",
        "3 إجراءات الأوليين:",
      ],
      pilots: ["بيع طوموبيل", "الأوطو-أنترابرونور", "تجديد لكارط ناسيونال"],
      access: "الناس لي غادي يسجلو فـ اللائحة غادي يجربو الأولين.",
    },
    footer: {
      cta: "سجّل دابا فـ اللائحة وجرّب Maroc AI قبل من الجميع.",
      button: "بغيت نتسجّل",
      legal: "ماكاين لا سبام لا والو. غادي نرسلو غير الجديد.",
    },
  },
};

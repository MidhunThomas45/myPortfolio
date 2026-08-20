export const personalInfo = {
  name: "Midhun Thomas",
  role: "AI / ML Engineer & Data Scientist",
  tagline: "Architecting Intelligent Systems & Scalable AI Solutions",
  bio: "AI-ML Engineer with expertise in Machine Learning, Deep Learning, Agentic AI, and Natural Language Processing (NLP). Skilled in developing AI-powered applications for predictive analytics, automation, and intelligent decision-making. Proficient in Python, PyTorch, TensorFlow, Azure AI, and cloud infrastructure, with hands-on experience in end-to-end model development, deployment, and optimization.",
  location: "Japan / India",
  email: "midhunthomas45@gmail.com",
  github: "https://github.com/MidhunThomas45",
  linkedin: "https://www.linkedin.com/in/midhun997/",
  instagram: "https://www.instagram.com/midhunkanjirakadan",
  resumeUrl: "https://drive.google.com/file/d/137nFrC2rhe09-iTs3haxynphz28OYGpA/view?usp=sharing",
  photo: "/thomas.jpeg",
  stats: {
    projectsCount: 14,
    certificatesCount: 6,
    yearsExperience: "2+",
  }
};

export const experiences = [
  {
    id: "exp-1",
    role: "AI-ML Engineer",
    company: "Adam Innovations Co., Ltd",
    type: "Full-time",
    duration: "Jul 2025 - Present",
    location: "Global IT Park, Japan · Remote",
    description: "Contributed to multiple high-impact projects including AIInterviewMate, IMarket Predict, and Masshou AutoDoc. Engineered full-stack architectures, and integrated advanced Machine Learning models, Computer Vision (PoseNet, FaceAPI), and Generative AI (Gemini API) to drive intelligent automation and predictive analytics.",
    tools: [
      "Python (FastAPI)", "Machine Learning", "Deep Learning", "Gemini API", 
      "Scikit-learn", "TensorFlow", "Keras", "NumPy", "Pandas", "Matplotlib", 
      "Azure Text Analytics", "Azure Speech Service", "Azure Document Intelligence", 
      "Azure Service Bus", "PoseNet", "FaceAPI", "MLOps", "Docker", "DevOps", 
      "React", "TypeScript", "Node.js", "MERN Stack", "Stripe Connect"
    ]
  },
  {
    id: "exp-2",
    role: "Data Analyst",
    company: "Indian Oil Corp Limited",
    type: "Full-time",
    duration: "Jan 2023 - Jan 2024",
    location: "Kozhikode, Kerala, India · Hybrid",
    description: "Specialized in comprehensive data analysis to drive operational efficiencies and strategic insights. Leveraged advanced Excel capabilities and intricate SAP ERP systems to process, model, and visualize complex operational data.",
    tools: [
      "SAP ERP", "Advanced Excel", "Data Analysis", "Data Modeling", "Statistical Reporting"
    ]
  }
];

export const projects = [
  {
    id: "p1-interview-prep",
    title: "AI-Driven Interview Preparation & Career Platform",
    shortDescription: "Multilingual interview platform using Gemini API for interview logic and Azure Speech for real-time voice interaction with ATS resume scoring.",
    description: "Built the AI core of an interview platform supporting English and Japanese, using Gemini API for interview logic and Azure Speech for real-time voice interaction. Features include ATS resume scoring, automated resume rebuilding, and personalized progress tracking analytics.",
    category: "AI & LLMs",
    img: "/thomas.jpeg",
    techStack: ["MERN", "FastAPI", "Gemini API", "Azure Speech", "ElevenLabs", "Azure"],
    features: [
      "Built the AI core of an interview platform supporting English and Japanese",
      "Used Gemini API for interview logic and Azure Speech for real-time voice interaction",
      "Added ATS resume scoring, resume rebuilding, and progress tracking"
    ],
    github: "Private",
    link: ""
  },
  {
    id: "p2-ocr-translation",
    title: "Japanese Document OCR & Translation Microservice",
    shortDescription: "FastAPI microservice using Azure Document Intelligence to extract text from Japanese documents and translate with Gemini API.",
    description: "FastAPI microservice using Azure Document Intelligence to extract text from Japanese documents and Gemini API to translate it into English, utilizing Azure Service Bus for scalable asynchronous processing.",
    category: "AI & LLMs",
    img: "/thomas.jpeg",
    techStack: ["MERN", "FastAPI", "Azure Document Intelligence", "Gemini API", "Azure Service Bus"],
    features: [
      "Built a FastAPI microservice using Azure Document Intelligence to extract text from Japanese documents",
      "Used Gemini API to translate text into English with domain terminology preservation",
      "Utilized Azure Service Bus for scalable processing, integrated with a MERN front end"
    ],
    github: "Private",
    link: ""
  },
  {
    id: "p3-stock-prediction",
    title: "Stock Market Prediction System (TSE)",
    shortDescription: "LSTM neural network model predicting price trends for TSE-listed stocks, deployed with FastAPI and MERN dashboard.",
    description: "LSTM model in TensorFlow to predict price trends for TSE-listed stocks using historical price data, deployed with FastAPI microservices and visualized on an interactive MERN dashboard.",
    category: "AI & LLMs",
    img: "/thomas.jpeg",
    techStack: ["MERN", "FastAPI", "TensorFlow", "LSTM", "Docker"],
    features: [
      "Built an LSTM model in TensorFlow to predict price trends for TSE-listed stocks",
      "Set up separate FastAPI services for data pipelines and model training/inference",
      "Displayed real-time forecast metrics on a modern dashboard"
    ],
    github: "Private",
    link: ""
  },
  {
    id: "p4-job-matching",
    title: "AI-Powered Job Matching Platform",
    shortDescription: "AI matching engine using vector embeddings and RAG pipeline for candidate-to-job matching and multilingual parsing.",
    description: "AI matching engine using vector embeddings to match resumes with job postings. Includes a RAG pipeline for resume translation, automated skill extraction, and personalized job recommendations.",
    category: "AI & LLMs",
    img: "/thomas.jpeg",
    techStack: ["MERN", "FastAPI", "RAG", "Vector Embeddings", "Gemini API"],
    features: [
      "Built an AI matching engine using vector embeddings to match resumes with job postings",
      "Used a RAG pipeline for resume translation and job recommendations",
      "Implemented multilingual resume parsing for global hiring workflows"
    ],
    github: "Private",
    link: ""
  },
  {
    id: "p5-loan-eligibility",
    title: "Loan Eligibility Prediction System",
    shortDescription: "End-to-end ML pipeline with feature engineering, SMOTE oversampling, and XGBoost achieving 99.5% accuracy.",
    description: "Engineered an end-to-end ML pipeline with feature engineering, SMOTE oversampling, and GridSearchCV for loan approval prediction, deployed as a RESTful API serving 1000+ daily requests.",
    category: "Computer Vision & ML",
    img: "/thomas.jpeg",
    techStack: ["Scikit-learn", "XGBoost", "FastAPI", "Docker", "PostgreSQL"],
    features: [
      "Engineered ML pipeline using CIBIL score, income, loan amount, and credit-history features",
      "Trained and compared Logistic Regression, Random Forest, and XGBoost classifiers",
      "Achieved 99.5% accuracy and deployed as FastAPI service for production workloads"
    ],
    github: "https://github.com/MidhunThomas45",
    link: ""
  },
  {
    id: "p6-rag-chatbot",
    title: "RAG-based Enterprise Chatbot",
    shortDescription: "Company knowledge-base chatbot chunking internal documents and embedding them using Sentence-Transformers & ChromaDB.",
    description: "Built a company knowledge-base chatbot by chunking internal documents and embedding them using Sentence-Transformers, storing vectors in ChromaDB, and feeding context to Gemini API.",
    category: "AI & LLMs",
    img: "/thomas.jpeg",
    techStack: ["ChromaDB", "Sentence-Transformers", "Gemini API", "Python"],
    features: [
      "Chunked internal documents and embedded them using Sentence-Transformers",
      "Stored vectors in ChromaDB and implemented Retrieval-Augmented Generation pipeline",
      "Automated logging of every chat interaction to Excel/databases for analytics"
    ],
    github: "https://github.com/MidhunThomas45",
    link: ""
  },
  {
    id: "p7-telegram-bot",
    title: "Telegram Sales Assistant Bot (n8n Automation)",
    shortDescription: "Workflow automation connecting Telegram Bot API, Gemini API, and Excel/email nodes for retail customer support.",
    description: "End-to-end automation workflow connecting Telegram Bot API, Gemini API, and Excel/email nodes for customer support and order handling for a retail shoe store.",
    category: "Full-Stack & Data",
    img: "/thomas.jpeg",
    techStack: ["n8n", "Gemini API", "Telegram Bot API", "Excel", "Email Automation"],
    features: [
      "Designed automation workflow in n8n for customer support",
      "Used Gemini API to parse customer messages and answer product queries in real-time",
      "Automated syncing of customer orders across Excel, email, and Telegram"
    ],
    github: "https://github.com/MidhunThomas45",
    link: ""
  },
  {
    id: "p8-face-recognition",
    title: "Real-time Face Recognition & Liveness Detection",
    shortDescription: "Face detection & recognition pipeline using MTCNN and CNN fine-tuned on VGGFace2 with liveness anti-spoofing.",
    description: "Real-time face detection and recognition pipeline using MTCNN and CNN fine-tuned on VGGFace2, featuring texture and motion-based liveness/anti-spoofing detection for secure biometric access.",
    category: "Computer Vision & ML",
    img: "/thomas.jpeg",
    techStack: ["OpenCV", "TensorFlow", "MTCNN", "CNN", "YOLO", "VGGFace2"],
    features: [
      "Built pipeline using MTCNN and transfer learning on VGGFace2 achieving 95.2% accuracy",
      "Implemented liveness detection using texture and motion-based cues to prevent spoofing",
      "Optimized CNN architecture for edge deployment reducing inference time by 67%"
    ],
    github: "https://github.com/MidhunThomas45",
    link: ""
  },
  {
    id: "p9-sentiment-analysis",
    title: "Sentiment Analysis from Text",
    shortDescription: "Fine-tuned bert-base-uncased Transformer model on IMDB Movie Reviews for binary sentiment classification.",
    description: "Fine-tuned bert-base-uncased model on IMDB Movie Reviews dataset for binary sentiment classification using learning-rate warm-up and dropout tuning.",
    category: "AI & LLMs",
    img: "/thomas.jpeg",
    techStack: ["BERT", "Hugging Face Transformers", "IMDB Dataset", "PyTorch"],
    features: [
      "Fine-tuned bert-base-uncased model for binary sentiment classification",
      "Tokenized text using BERT WordPiece tokenizer",
      "Improved generalization through learning-rate warm-up and dropout tuning"
    ],
    github: "https://github.com/MidhunThomas45",
    link: ""
  },
  {
    id: "p10-emotion-recognition",
    title: "Real-time Emotion Recognition from Audio",
    shortDescription: "CNN-LSTM model trained on RAVDESS dataset for audio emotion classification with live microphone stream processing.",
    description: "CNN-LSTM model trained on RAVDESS dataset for emotion classification, with real-time microphone audio-capture pipeline extracting MFCC, chroma, and mel-spectrogram features.",
    category: "Computer Vision & ML",
    img: "/thomas.jpeg",
    techStack: ["Python", "Librosa", "CNN/LSTM", "Kaggle RAVDESS Dataset"],
    features: [
      "Trained CNN-LSTM model extracting MFCC, chroma, and mel-spectrogram features",
      "Classified 8 emotion classes using Categorical Cross-Entropy loss",
      "Built real-time microphone audio-capture pipeline to predict emotion on the fly"
    ],
    github: "https://github.com/MidhunThomas45",
    link: ""
  },
  {
    id: "p11-image-classification",
    title: "Image Classification with PyTorch",
    shortDescription: "CNN image classifier in PyTorch fine-tuning a pretrained ResNet-18 backbone on the CIFAR-10 dataset.",
    description: "CNN image classifier in PyTorch fine-tuning a pretrained ResNet-18 backbone on the CIFAR-10 dataset with data augmentation and learning-rate schedulers.",
    category: "Computer Vision & ML",
    img: "/thomas.jpeg",
    techStack: ["PyTorch", "CNN", "ResNet", "CIFAR-10"],
    features: [
      "Built and trained CNN classifier fine-tuning pretrained ResNet-18",
      "Applied data augmentation and learning-rate scheduler",
      "Evaluated performance using accuracy metrics and detailed confusion matrix"
    ],
    github: "https://github.com/MidhunThomas45",
    link: ""
  },
  {
    id: "p12-mini-llm",
    title: "Mini Language Model with TensorFlow",
    shortDescription: "Transformer-based language model trained from scratch on Tiny Shakespeare for next-token prediction.",
    description: "Transformer-based language model trained from scratch on the Tiny Shakespeare dataset for next-token prediction using custom tokenization and multi-head self-attention.",
    category: "AI & LLMs",
    img: "/thomas.jpeg",
    techStack: ["TensorFlow", "Keras", "Transformers", "Tiny Shakespeare Dataset"],
    features: [
      "Designed transformer model with custom tokenization and multi-head self-attention",
      "Trained using next-token prediction objective",
      "Generated coherent text continuations via greedy and temperature-based sampling"
    ],
    github: "https://github.com/MidhunThomas45",
    link: ""
  },
  {
    id: "p13-bi-dashboard",
    title: "Business Intelligence Dashboard",
    shortDescription: "Interactive retail analytics dashboard in Power BI tracking 50+ KPIs with automated Python/SQL ETL pipelines.",
    description: "Interactive retail analytics dashboard in Power BI tracking 50+ KPIs with Python/SQL ETL pipelines for automated daily refresh handling 10M+ records.",
    category: "Full-Stack & Data",
    img: "/thomas.jpeg",
    techStack: ["Power BI", "Python", "SQL", "ETL Pipelines"],
    features: [
      "Developed interactive analytics dashboard using DAX measures and Power Query",
      "Built ETL pipelines to extract, clean, and load complex multi-source data",
      "Enabled automated daily refresh for 10M+ records"
    ],
    github: "https://github.com/MidhunThomas45",
    link: ""
  },
  {
    id: "p14-clinic-management",
    title: "Full-Stack Clinic Management System",
    shortDescription: "Clinic management system handling patient records, appointments, and billing with Django backend & Angular frontend.",
    description: "Full-stack clinic management system handling patient records, appointments, and billing with a Django backend and Angular frontend for 500+ active users.",
    category: "Full-Stack & Data",
    img: "/thomas.jpeg",
    techStack: ["Django", "Angular", "MySQL", "Python"],
    features: [
      "Built system handling patient records, appointments, and billing for 500+ users",
      "Designed normalized MySQL database schema",
      "Implemented RESTful APIs with JWT authentication and role-based access control"
    ],
    github: "https://github.com/MidhunThomas45",
    link: ""
  }
];

export const techStackCategories = [
  {
    name: "Programming Languages",
    icon: "code",
    items: [
      { name: "Python" },
      { name: "SQL" },
      { name: "R" },
      { name: "JavaScript / TypeScript" },
      { name: "Bash / Shell Scripting" },
      { name: "C++ (Basics)" },
    ]
  },
  {
    name: "Machine Learning Frameworks",
    icon: "cpu",
    items: [
      { name: "Scikit-learn" },
      { name: "XGBoost / LightGBM" },
      { name: "CatBoost" },
      { name: "Statsmodels" },
      { name: "RAPIDS (GPU ML)" },
      { name: "H2O AutoML" },
    ]
  },
  {
    name: "Deep Learning Frameworks",
    icon: "brain",
    items: [
      { name: "PyTorch" },
      { name: "TensorFlow 2.x" },
      { name: "Keras" },
      { name: "JAX / Flax" },
      { name: "ONNX" },
      { name: "TensorRT" },
    ]
  },
  {
    name: "Generative AI & LLMs",
    icon: "sparkles",
    items: [
      { name: "Gemini API" },
      { name: "OpenAI GPT APIs" },
      { name: "Hugging Face Transformers" },
      { name: "LangChain / LlamaIndex" },
      { name: "RAG Pipelines" },
      { name: "Prompt Engineering" },
      { name: "Fine-Tuning (LoRA / PEFT)" },
      { name: "Agentic AI / AI Agents" },
    ]
  },
  {
    name: "Natural Language Processing",
    icon: "message",
    items: [
      { name: "BERT / RoBERTa / T5" },
      { name: "Sentence-Transformers" },
      { name: "spaCy / NLTK" },
      { name: "Text Classification" },
      { name: "Named Entity Recognition" },
      { name: "Sentiment Analysis" },
      { name: "Tokenization & Embeddings" },
      { name: "Machine Translation" },
    ]
  },
  {
    name: "Computer Vision",
    icon: "eye",
    items: [
      { name: "OpenCV" },
      { name: "YOLO (v5, v8, v11)" },
      { name: "MTCNN / FaceAPI" },
      { name: "Image Segmentation" },
      { name: "Object Detection" },
      { name: "CNNs (ResNet, VGG, EfficientNet)" },
      { name: "Transfer Learning" },
      { name: "Liveness Detection" },
    ]
  },
  {
    name: "Data Engineering & Analytics",
    icon: "database",
    items: [
      { name: "Pandas / NumPy" },
      { name: "Matplotlib / Seaborn" },
      { name: "Plotly / Dash" },
      { name: "Apache Spark" },
      { name: "ETL Pipelines" },
      { name: "Power BI / Tableau" },
      { name: "Feature Engineering" },
      { name: "Exploratory Data Analysis" },
    ]
  },
  {
    name: "Vector Databases & Search",
    icon: "layers",
    items: [
      { name: "ChromaDB" },
      { name: "Pinecone" },
      { name: "Weaviate" },
      { name: "FAISS" },
      { name: "Vector Embeddings" },
      { name: "Semantic Search" },
    ]
  },
  {
    name: "Cloud & AI Services (Azure)",
    icon: "cloud",
    items: [
      { name: "Azure AI Studio" },
      { name: "Azure Document Intelligence" },
      { name: "Azure Speech Service" },
      { name: "Azure Text Analytics" },
      { name: "Azure Service Bus" },
      { name: "Azure ML Workspace" },
      { name: "Azure OpenAI Service" },
      { name: "Azure Blob Storage" },
    ]
  },
  {
    name: "MLOps & Deployment",
    icon: "settings",
    items: [
      { name: "FastAPI" },
      { name: "Docker / Docker Compose" },
      { name: "Kubernetes (K8s)" },
      { name: "MLflow / DVC" },
      { name: "CI/CD (GitHub Actions)" },
      { name: "BentoML / Triton" },
      { name: "Model Registry & Versioning" },
      { name: "Monitoring & Drift Detection" },
    ]
  },
  {
    name: "Databases & Storage",
    icon: "server",
    items: [
      { name: "PostgreSQL" },
      { name: "MySQL" },
      { name: "MongoDB" },
      { name: "Redis" },
      { name: "SQLite" },
      { name: "SAP ERP" },
    ]
  },
  {
    name: "Web & API Development",
    icon: "globe",
    items: [
      { name: "FastAPI (REST APIs)" },
      { name: "Django / DRF" },
      { name: "ReactJS / Next.js" },
      { name: "Node.js / Express" },
      { name: "Angular" },
      { name: "REST & GraphQL APIs" },
    ]
  },
  {
    name: "Mathematics & Statistics",
    icon: "function",
    items: [
      { name: "Linear Algebra" },
      { name: "Probability & Statistics" },
      { name: "Calculus & Optimization" },
      { name: "Bayesian Inference" },
      { name: "Time Series Analysis" },
      { name: "Dimensionality Reduction (PCA, t-SNE)" },
    ]
  },
  {
    name: "Audio & Signal Processing",
    icon: "audio",
    items: [
      { name: "Librosa" },
      { name: "MFCC / Spectrogram Features" },
      { name: "CNN-LSTM Audio Models" },
      { name: "Azure Speech SDK" },
      { name: "ElevenLabs TTS" },
      { name: "Speech-to-Text Pipelines" },
    ]
  },
  {
    name: "Tools & Productivity",
    icon: "tool",
    items: [
      { name: "Jupyter Notebooks" },
      { name: "Git / GitHub" },
      { name: "VS Code" },
      { name: "Postman" },
      { name: "n8n (Workflow Automation)" },
      { name: "Linux / Ubuntu" },
    ]
  }
];


export const certificates = [
  // --- Professional Certifications ---
  {
    type: "certification",
    title: "Foundations: Data, Data, Everywhere",
    issuer: "Google",
    issuerLogo: "google",
    date: "2024",
    description: "Part of the Google Data Analytics Professional Certificate program on Coursera. Covers data lifecycle, spreadsheets, SQL, and data visualization fundamentals.",
    link: "https://drive.google.com/file/d/1NHBwNbhOxbAEhFVk-t8c71ac5lnY5Up4/view",
    badge: "Google Certified"
  },
  {
    type: "certification",
    title: "Database Operations in MariaDB Using Python",
    issuer: "Infosys",
    issuerLogo: "infosys",
    date: "Jan 2024",
    description: "Hands-on training in database management, CRUD operations, query optimization, and Python integration with MariaDB through Infosys Springboard.",
    link: "",
    badge: "Infosys Springboard"
  },
  {
    type: "experience",
    title: "Data Analyst — Experience Certificate",
    issuer: "Indian Oil Corporation Ltd (IOCL)",
    issuerLogo: "iocl",
    date: "Jan 2023 – Jan 2024",
    location: "Kozhikode, Kerala",
    duration: "1 Year",
    description: "Official 1-year experience certificate issued by Indian Oil Corporation Ltd. Roles included SAP ERP data handling, advanced Excel analytics, data modeling, and operational reporting for the Kozhikode regional office.",
    link: "",
    badge: "Work Experience"
  },

  // --- Education ---
  {
    type: "education",
    title: "Python Full Stack Development with Data Science & AI",
    issuer: "Faith Infotech Pvt Ltd",
    issuerLogo: "faith",
    date: "Sep 2024 – Mar 2025",
    location: "Technopark, Trivandrum",
    description: "Intensive full-stack development training covering Python, Django, ReactJS, Machine Learning, and AI integration for real-world application development.",
    grade: "",
    link: "",
    badge: "Professional Training"
  },
  {
    type: "education",
    title: "MSc Physics",
    issuer: "University of Kerala",
    issuerLogo: "kerala",
    date: "2020 – 2022",
    location: "Thiruvananthapuram, Kerala",
    description: "",
    grade: "77.77%",
    link: "",
    badge: "Postgraduate"
  },
  {
    type: "education",
    title: "BSc Physics",
    issuer: "Kannur University",
    issuerLogo: "kannur",
    date: "2017 – 2020",
    location: "Kannur, Kerala",
    description: "",
    grade: "84.93%",
    link: "",
    badge: "Undergraduate"
  }
];


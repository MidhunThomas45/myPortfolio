import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import {
  ArrowLeft, ExternalLink, Github, Code2, Star,
  ChevronRight, Layers, Layout, Globe, Package, Cpu, Code,
} from "lucide-react";
import Swal from 'sweetalert2';

const TECH_ICONS = {
  React: Globe,
  Tailwind: Layout,
  Express: Cpu,
  Python: Code,
  Javascript: Code,
  HTML: Code,
  CSS: Code,
  default: Package,
};

const TechBadge = ({ tech }) => {
  const Icon = TECH_ICONS[tech] || TECH_ICONS["default"];
  
  return (
    <div className="group relative overflow-hidden px-3 py-2 md:px-4 md:py-2.5 bg-gradient-to-r from-blue-600/10 to-purple-600/10 rounded-xl border border-blue-500/10 hover:border-blue-500/30 transition-all duration-300 cursor-default">
      <div className="absolute inset-0 bg-gradient-to-r from-blue-500/0 to-purple-500/0 group-hover:from-blue-500/10 group-hover:to-purple-500/10 transition-all duration-500" />
      <div className="relative flex items-center gap-1.5 md:gap-2">
        <Icon className="w-3.5 h-3.5 md:w-4 md:h-4 text-blue-400 group-hover:text-blue-300 transition-colors" />
        <span className="text-xs md:text-sm font-medium text-blue-300/90 group-hover:text-blue-200 transition-colors">
          {tech}
        </span>
      </div>
    </div>
  );
};

const FeatureItem = ({ feature }) => {
  return (
    <li className="group flex items-start space-x-3 p-2.5 md:p-3.5 rounded-xl hover:bg-card transition-all duration-300 border border-transparent hover:border-card">
      <div className="relative mt-2">
        <div className="absolute -inset-1 bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-full blur group-hover:opacity-100 opacity-0 transition-opacity duration-300" />
        <div className="relative w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-gradient-to-r from-blue-400 to-purple-400 group-hover:scale-125 transition-transform duration-300" />
      </div>
      <span className="text-sm md:text-base text-secondaryText group-hover:text-primaryText transition-colors">
        {feature}
      </span>
    </li>
  );
};

const ProjectStats = ({ project }) => {
  const techStackCount = project?.TechStack?.length || 0;
  const featuresCount = project?.Features?.length || 0;

  return (
    <div className="grid grid-cols-2 gap-3 md:gap-4 p-3 md:p-4 bg-[#0a0a1a] rounded-xl overflow-hidden relative">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 to-purple-900/20 opacity-50 blur-2xl z-0" />

      <div className="relative z-10 flex items-center space-x-2 md:space-x-3 bg-card p-2 md:p-3 rounded-lg border border-blue-500/20 transition-all duration-300 hover:scale-105 hover:border-blue-500/50 hover:shadow-lg">
        <div className="bg-blue-500/20 p-1.5 md:p-2 rounded-full">
          <Code2 className="text-blue-300 w-4 h-4 md:w-6 md:h-6" strokeWidth={1.5} />
        </div>
        <div className="flex-grow">
          <div className="text-lg md:text-xl font-semibold text-blue-200">{techStackCount}</div>
          <div className="text-[10px] md:text-xs text-secondaryText">Total Technology</div>
        </div>
      </div>

      <div className="relative z-10 flex items-center space-x-2 md:space-x-3 bg-card p-2 md:p-3 rounded-lg border border-purple-500/20 transition-all duration-300 hover:scale-105 hover:border-purple-500/50 hover:shadow-lg">
        <div className="bg-purple-500/20 p-1.5 md:p-2 rounded-full">
          <Layers className="text-purple-300 w-4 h-4 md:w-6 md:h-6" strokeWidth={1.5} />
        </div>
        <div className="flex-grow">
          <div className="text-lg md:text-xl font-semibold text-purple-200">{featuresCount}</div>
          <div className="text-[10px] md:text-xs text-secondaryText">Main Features</div>
        </div>
      </div>
    </div>
  );
};

const handleGithubClick = (githubLink) => {
  if (githubLink === 'Private') {
    Swal.fire({
      icon: 'info',
      title: 'Source Code Private',
      text: 'Sorry, the source code for this project is private.',
      confirmButtonText: 'Understood',
      confirmButtonColor: '#3085d6',
      background: '#0e3b2e',
      color: '#ffffff'
    });
    return false;
  }
  return true;
};

const ProjectDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [project, setProject] = useState(null);
  const [isImageLoaded, setIsImageLoaded] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
    const baseUrl = import.meta.env.BASE_URL || "/";
    
    const hardcodedProjects = [
        {
          id: "p1-interview-prep",
          Title: "AI-Driven Interview Preparation & Career Platform",
          Description: "Built the AI core of an interview platform supporting English and Japanese, using Gemini API for interview logic and Azure Speech for real-time voice interaction. Features include ATS resume scoring, resume rebuilding, and progress tracking.",
          Img: baseUrl + "default_project.png",
          TechStack: ["MERN", "FastAPI", "Gemini API", "Azure Speech", "ElevenLabs", "Azure"],
          Features: [
            "Built the AI core of an interview platform supporting English and Japanese",
            "Used Gemini API for interview logic and Azure Speech for real-time voice interaction",
            "Added ATS resume scoring, resume rebuilding, and progress tracking"
          ],
          Link: ""
        },
        {
          id: "p2-ocr-translation",
          Title: "Japanese Document OCR & Translation Microservice",
          Description: "FastAPI microservice using Azure Document Intelligence to extract text from Japanese documents and Gemini API to translate it into English, utilizing Azure Service Bus for scalable processing.",
          Img: baseUrl + "default_project.png",
          TechStack: ["MERN", "FastAPI", "Azure Document Intelligence", "Gemini API", "Azure Service Bus"],
          Features: [
            "Built a FastAPI microservice using Azure Document Intelligence to extract text from Japanese documents",
            "Used Gemini API to translate text into English",
            "Used Azure Service Bus for scalable processing, integrated with a MERN front end"
          ],
          Link: ""
        },
        {
          id: "p3-stock-prediction",
          Title: "Stock Market Prediction System (TSE)",
          Description: "LSTM model in TensorFlow to predict price trends for TSE-listed stocks using historical price data, deployed with FastAPI and visualized on a MERN dashboard.",
          Img: baseUrl + "default_project.png",
          TechStack: ["MERN", "FastAPI", "TensorFlow", "LSTM", "Docker"],
          Features: [
            "Built an LSTM model in TensorFlow to predict price trends for TSE-listed stocks",
            "Set up separate FastAPI services for data pipelines and model training/inference",
            "Displayed results on a MERN dashboard"
          ],
          Link: ""
        },
        {
          id: "p4-job-matching",
          Title: "AI-Powered Job Matching Platform",
          Description: "AI matching engine using vector embeddings to match resumes with job postings. Includes a RAG pipeline for resume translation and job recommendations.",
          Img: baseUrl + "default_project.png",
          TechStack: ["MERN", "FastAPI", "RAG", "Vector Embeddings", "Gemini API"],
          Features: [
            "Built an AI matching engine using vector embeddings to match resumes with job postings",
            "Used a RAG pipeline for resume translation and job recommendations",
            "Implemented multilingual resume parsing"
          ],
          Link: ""
        },
        {
          id: "p5-loan-eligibility",
          Title: "Loan Eligibility Prediction System",
          Description: "Engineered an end-to-end ML pipeline with feature engineering, SMOTE oversampling, and GridSearchCV for loan approval prediction, deployed as a RESTful API.",
          Img: baseUrl + "default_project.png",
          TechStack: ["Scikit-learn", "XGBoost", "FastAPI", "Docker", "PostgreSQL"],
          Features: [
            "Engineered ML pipeline using CIBIL score, income, loan amount, and credit-history features",
            "Trained and compared Logistic Regression, Random Forest, and XGBoost classifiers",
            "Achieved 99.5% accuracy and deployed as FastAPI service for 1000+ daily requests"
          ],
          Link: ""
        },
        {
          id: "p6-rag-chatbot",
          Title: "RAG-based Enterprise Chatbot",
          Description: "Built a company knowledge-base chatbot by chunking internal documents and embedding them using Sentence-Transformers, feeding context to Gemini API.",
          Img: baseUrl + "default_project.png",
          TechStack: ["ChromaDB", "Sentence-Transformers", "Gemini API", "Python"],
          Features: [
            "Chunked internal documents and embedded them using Sentence-Transformers",
            "Stored vectors in ChromaDB and implemented Retrieval-Augmented Generation pipeline",
            "Automated logging of every chat interaction to Excel for analytics"
          ],
          Link: ""
        },
        {
          id: "p7-telegram-bot",
          Title: "Telegram Sales Assistant Bot (n8n Automation)",
          Description: "End-to-end automation workflow connecting Telegram Bot API, Gemini API, and Excel/email nodes for customer support and order handling.",
          Img: baseUrl + "default_project.png",
          TechStack: ["n8n", "Gemini API", "Telegram Bot API", "Excel", "Email Automation"],
          Features: [
            "Designed automation workflow in n8n for a retail shoe shop's customer support",
            "Used Gemini API to parse messages and answer product queries",
            "Automated syncing of orders across Excel, email, and Telegram"
          ],
          Link: ""
        },
        {
          id: "p8-face-recognition",
          Title: "Real-time Face Recognition & Liveness Detection",
          Description: "Real-time face detection and recognition pipeline using MTCNN and CNN fine-tuned on VGGFace2, featuring liveness/anti-spoofing detection.",
          Img: baseUrl + "default_project.png",
          TechStack: ["OpenCV", "TensorFlow", "MTCNN", "CNN", "YOLO", "VGGFace2"],
          Features: [
            "Built pipeline using MTCNN and transfer learning on VGGFace2 achieving 95.2% accuracy",
            "Implemented liveness detection using texture and motion-based cues",
            "Optimized CNN architecture for edge deployment reducing inference time by 67%"
          ],
          Link: ""
        },
        {
          id: "p9-sentiment-analysis",
          Title: "Sentiment Analysis from Text",
          Description: "Fine-tuned bert-base-uncased model on IMDB Movie Reviews dataset for binary sentiment classification.",
          Img: baseUrl + "default_project.png",
          TechStack: ["BERT", "Hugging Face Transformers", "IMDB Dataset"],
          Features: [
            "Fine-tuned bert-base-uncased model for binary sentiment classification",
            "Tokenized text using BERT WordPiece tokenizer",
            "Improved generalization through learning-rate warm-up and dropout tuning"
          ],
          Link: ""
        },
        {
          id: "p10-emotion-recognition",
          Title: "Real-time Emotion Recognition from Audio",
          Description: "CNN-LSTM model trained on RAVDESS dataset for emotion classification, with real-time microphone audio-capture pipeline.",
          Img: baseUrl + "default_project.png",
          TechStack: ["Python", "Librosa", "CNN/LSTM", "Kaggle RAVDESS Dataset"],
          Features: [
            "Trained CNN-LSTM model extracting MFCC, chroma, and mel-spectrogram features",
            "Classified 8 emotion classes using Categorical Cross-Entropy loss",
            "Built real-time microphone audio-capture pipeline to predict emotion on the fly"
          ],
          Link: ""
        },
        {
          id: "p11-image-classification",
          Title: "Image Classification with PyTorch",
          Description: "CNN image classifier in PyTorch fine-tuning a pretrained ResNet-18 backbone on the CIFAR-10 dataset.",
          Img: baseUrl + "default_project.png",
          TechStack: ["PyTorch", "CNN", "ResNet", "CIFAR-10"],
          Features: [
            "Built and trained CNN classifier fine-tuning pretrained ResNet-18",
            "Applied data augmentation and learning-rate scheduler",
            "Evaluated performance using accuracy and confusion matrix"
          ],
          Link: ""
        },
        {
          id: "p12-mini-llm",
          Title: "Mini Language Model with TensorFlow",
          Description: "Transformer-based language model trained from scratch on the Tiny Shakespeare dataset for next-token prediction.",
          Img: baseUrl + "default_project.png",
          TechStack: ["TensorFlow", "Keras", "Transformers", "Tiny Shakespeare Dataset"],
          Features: [
            "Designed transformer model with custom tokenization and multi-head self-attention",
            "Trained using next-token prediction objective",
            "Generated coherent text continuations via greedy and temperature-based sampling"
          ],
          Link: ""
        },
        {
          id: "p13-bi-dashboard",
          Title: "Business Intelligence Dashboard",
          Description: "Interactive retail analytics dashboard in Power BI tracking 50+ KPIs with Python/SQL ETL pipelines for automated daily refresh.",
          Img: baseUrl + "default_project.png",
          TechStack: ["Power BI", "Python", "SQL", "ETL Pipelines"],
          Features: [
            "Developed interactive analytics dashboard using DAX measures and Power Query",
            "Built ETL pipelines to extract, clean, and load data",
            "Enabled automated daily refresh for 10M+ records"
          ],
          Link: ""
        },
        {
          id: "p14-clinic-management",
          Title: "Full-Stack Clinic Management System",
          Description: "Clinic management system handling patient records, appointments, and billing with a Django backend and Angular frontend.",
          Img: baseUrl + "default_project.png",
          TechStack: ["Django", "Angular", "MySQL", "Python"],
          Features: [
            "Built system handling patient records, appointments, and billing for 500+ users",
            "Designed normalized MySQL schema",
            "Implemented RESTful APIs with JWT authentication and role-based access control"
          ],
          Link: ""
        }
      ];

    const storedProjects = JSON.parse(localStorage.getItem("projects")) || [];
    const combinedProjects = [...storedProjects, ...hardcodedProjects];
    const selectedProject = combinedProjects.find((p) => String(p.id) === id);
    
    if (selectedProject) {
      const enhancedProject = {
        ...selectedProject,
        Features: selectedProject.Features || [],
        TechStack: selectedProject.TechStack || [],
        Github: selectedProject.Github || 'https://github.com/MidhunThomas45',
      };
      setProject(enhancedProject);
    }
  }, [id]);

  if (!project) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center space-y-6 animate-fadeIn">
          <div className="w-16 h-16 md:w-24 md:h-24 mx-auto border-4 border-blue-500/30 border-t-blue-500 rounded-full animate-spin" />
          <h2 className="text-xl md:text-3xl font-bold text-primaryText">Loading Project...</h2>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background px-[2%] sm:px-0 relative overflow-hidden">
      {/* Background animations remain unchanged */}
      <div className="fixed inset-0">
        <div className="absolute -inset-[10px] opacity-20">
          <div className="absolute top-0 -left-4 w-72 md:w-96 h-72 md:h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob" />
          <div className="absolute top-0 -right-4 w-72 md:w-96 h-72 md:h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-2000" />
          <div className="absolute -bottom-8 left-20 w-72 md:w-96 h-72 md:h-96 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-4000" />
        </div>
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-[0.02]" />
      </div>

      <div className="relative">
        <div className="max-w-7xl mx-auto px-4 md:px-6 py-8 md:py-16">
          <div className="flex items-center space-x-2 md:space-x-4 mb-8 md:mb-12 animate-fadeIn">
            <button
              onClick={() => navigate(-1)}
              className="group inline-flex items-center space-x-1.5 md:space-x-2 px-3 md:px-5 py-2 md:py-2.5 bg-card backdrop-blur-xl rounded-xl text-primaryText/90 hover:bg-cardHover transition-all duration-300 border border-card hover:border-cardHover text-sm md:text-base"
            >
              <ArrowLeft className="w-4 h-4 md:w-5 md:h-5 group-hover:-translate-x-1 transition-transform" />
              <span>Back</span>
            </button>
            <div className="flex items-center space-x-1 md:space-x-2 text-sm md:text-base text-primaryText/50">
              <span>Projects</span>
              <ChevronRight className="w-3 h-3 md:w-4 md:h-4" />
              <span className="text-primaryText/90 truncate">{project.Title}</span>
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 md:gap-16">
            <div className="space-y-6 md:space-y-10 animate-slideInLeft">
              <div className="space-y-4 md:space-y-6">
                <h1 className="text-3xl md:text-6xl font-bold bg-gradient-to-r from-primaryText to-secondaryText bg-clip-text text-transparent leading-tight">
                  {project.Title}
                </h1>
                <div className="relative h-1 w-16 md:w-24">
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full animate-pulse" />
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full blur-sm" />
                </div>
              </div>

              <div className="prose prose-invert max-w-none">
                <p className="text-base md:text-lg text-secondaryText/90 leading-relaxed">
                  {project.Description}
                </p>
              </div>

              <ProjectStats project={project} />

              <div className="flex flex-wrap gap-3 md:gap-4">
                {/* Action buttons */}
                <a
                  href={project.Link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative inline-flex items-center space-x-1.5 md:space-x-2 px-4 md:px-8 py-2.5 md:py-4 bg-gradient-to-r from-blue-600/10 to-purple-600/10 hover:from-blue-600/20 hover:to-purple-600/20 text-blue-300 rounded-xl transition-all duration-300 border border-blue-500/20 hover:border-blue-500/40 backdrop-blur-xl overflow-hidden text-sm md:text-base"
                >
                  <div className="absolute inset-0 translate-y-[100%] bg-gradient-to-r from-blue-600/10 to-purple-600/10 transition-transform duration-300 group-hover:translate-y-[0%]" />
                  <ExternalLink className="relative w-4 h-4 md:w-5 md:h-5 group-hover:rotate-12 transition-transform" />
                  <span className="relative font-medium">Live Demo</span>
                </a>

                <a
                  href={project.Github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative inline-flex items-center space-x-1.5 md:space-x-2 px-4 md:px-8 py-2.5 md:py-4 bg-gradient-to-r from-purple-600/10 to-pink-600/10 hover:from-purple-600/20 hover:to-pink-600/20 text-purple-300 rounded-xl transition-all duration-300 border border-purple-500/20 hover:border-purple-500/40 backdrop-blur-xl overflow-hidden text-sm md:text-base"
                  onClick={(e) => !handleGithubClick(project.Github) && e.preventDefault()}
                >
                  <div className="absolute inset-0 translate-y-[100%] bg-gradient-to-r from-purple-600/10 to-pink-600/10 transition-transform duration-300 group-hover:translate-y-[0%]" />
                  <Github className="relative w-4 h-4 md:w-5 md:h-5 group-hover:rotate-12 transition-transform" />
                  <span className="relative font-medium">Github</span>
                </a>
              </div>

              <div className="space-y-4 md:space-y-6">
                <h3 className="text-lg md:text-xl font-semibold text-primaryText/90 mt-[3rem] md:mt-0 flex items-center gap-2 md:gap-3">
                  <Code2 className="w-4 h-4 md:w-5 md:h-5 text-blue-400" />
                  Technologies Used
                </h3>
                {project.TechStack.length > 0 ? (
                  <div className="flex flex-wrap gap-2 md:gap-3">
                    {project.TechStack.map((tech, index) => (
                      <TechBadge key={index} tech={tech} />
                    ))}
                  </div>
                ) : (
                  <p className="text-sm md:text-base text-secondaryText opacity-50">No technologies added.</p>
                )}
              </div>
            </div>

            <div className="space-y-6 md:space-y-10 animate-slideInRight">
              {/* Fitur Utama */}
              <div className="bg-white/[0.02] backdrop-blur-xl rounded-2xl p-8 border border-card space-y-6 hover:border-cardHover transition-colors duration-300 group">
                <h3 className="text-xl font-semibold text-primaryText/90 flex items-center gap-3">
                  <Star className="w-5 h-5 text-yellow-400 group-hover:rotate-[20deg] transition-transform duration-300" />
                  Key Features
                </h3>
                {project.Features.length > 0 ? (
                  <ul className="list-none space-y-2">
                    {project.Features.map((feature, index) => (
                      <FeatureItem key={index} feature={feature} />
                    ))}
                  </ul>
                ) : (
                  <p className="text-secondaryText opacity-50">No features added.</p>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes blob {
          0% {
            transform: translate(0px, 0px) scale(1);
          }
          33% {
            transform: translate(30px, -50px) scale(1.1);
          }
          66% {
            transform: translate(-20px, 20px) scale(0.9);
          }
          100% {
            transform: translate(0px, 0px) scale(1);
          }
        }
        .animate-blob {
          animation: blob 10s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
        .animate-fadeIn {
          animation: fadeIn 0.7s ease-out;
        }
        .animate-slideInLeft {
          animation: slideInLeft 0.7s ease-out;
        }
        .animate-slideInRight {
          animation: slideInRight 0.7s ease-out;
        }
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
        @keyframes slideInLeft {
          from {
            opacity: 0;
            transform: translateX(-30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        @keyframes slideInRight {
          from {
            opacity: 0;
            transform: translateX(30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
      `}</style>
    </div>
  );
};

export default ProjectDetails;

import React, { useEffect, useState, useCallback } from "react";
import { db, collection } from "../firebase";
import { getDocs } from "firebase/firestore";
import PropTypes from "prop-types";
import { AnimatePresence, motion } from "framer-motion";
import { useTheme } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import CardProject from "../components/CardProject";
import TechStackIcon from "../components/TechStackIcon";
import AOS from "aos";
import "aos/dist/aos.css";
import Certificate from "../components/Certificate";
import { Code, Award, Boxes } from "lucide-react";

// Separate ShowMore/ShowLess button component
const ToggleButton = ({ onClick, isShowingMore }) => (
  <button
    onClick={onClick}
    className="
      px-3 py-1.5
      text-secondaryText 
      hover:text-primaryText 
      text-sm 
      font-medium 
      transition-all 
      duration-300 
      ease-in-out
      flex 
      items-center 
      gap-2
      bg-card 
      hover:bg-cardHover
      rounded-md
      border 
      border-card
      hover:border-cardHover
      backdrop-blur-sm
      group
      relative
      overflow-hidden
    "
  >
    <span className="relative z-10 flex items-center gap-2">
      {isShowingMore ? "See Less" : "See More"}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={`
          transition-transform 
          duration-300 
          ${isShowingMore ? "group-hover:-translate-y-0.5" : "group-hover:translate-y-0.5"}
        `}
      >
        <polyline points={isShowingMore ? "18 15 12 9 6 15" : "6 9 12 15 18 9"}></polyline>
      </svg>
    </span>
    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-purple-500/50 transition-all duration-300 group-hover:w-full"></span>
  </button>
);

function TabPanel({ children, value, index, ...other }) {
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: { xs: 1, sm: 3 } }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    "aria-controls": `full-width-tabpanel-${index}`,
  };
}

const techStacks = [
  { icon: "Python.svg", language: "Python" },
  { icon: "Django.svg", language: "Django" },
  { icon: "Angular.svg", language: "Angular" },
  { icon: "PostgreSQL.svg", language: "PostgreSQL" },
  { icon: "Mysql.svg", language: "MySQL" },
  { icon: "Github.svg", language: "GitHub" },
  { icon: "html.svg", language: "HTML" },
  { icon: "css.svg", language: "CSS" },
  { icon: "javascript.svg", language: "JavaScript" },
  { icon: "reactjs.svg", language: "ReactJS" },
  { icon: "nodejs.svg", language: "Node JS" },
  { icon: "bootstrap.svg", language: "Bootstrap" },
];

export default function FullWidthTabs() {
  const theme = useTheme();
  const [value, setValue] = useState(0);
  const [projects, setProjects] = useState([]);
  const [certificates, setCertificates] = useState([]);
  const [showAllProjects, setShowAllProjects] = useState(false);
  const [showAllCertificates, setShowAllCertificates] = useState(false);
  const isMobile = window.innerWidth < 768;
  const initialItems = isMobile ? 4 : 6;

  useEffect(() => {
    // Initialize AOS once
    AOS.init({
      once: false, // This will make animations occur only once
    });
  }, []);

  const fetchData = useCallback(async () => {
    try {
      const projectCollection = collection(db, "projects");
      const certificateCollection = collection(db, "certificates");

      const [projectSnapshot, certificateSnapshot] = await Promise.all([
        getDocs(projectCollection),
        getDocs(certificateCollection),
      ]);

      const rawProjectData = projectSnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
        TechStack: doc.data().TechStack || [],
      }));

      // Filter out 'Library Management System' and 'Clinic Management System'
      // to avoid duplicates and remove unwanted projects from Firebase data.
      const projectData = rawProjectData.filter(
        (project) =>
          !project.Title.includes("Library Management System") &&
          !project.Title.includes("Clinic Management System")
      );

      const certificateData = certificateSnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));

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

      const allProjects = [...projectData, ...hardcodedProjects];

      setProjects(allProjects);
      setCertificates(certificateData);

      // Store in localStorage
      localStorage.setItem("projects", JSON.stringify(allProjects));
      localStorage.setItem("certificates", JSON.stringify(certificateData));
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }, []);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  useEffect(() => {
    AOS.refresh();
  }, [value, projects, certificates]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const toggleShowMore = useCallback((type) => {
    if (type === 'projects') {
      setShowAllProjects(prev => !prev);
    } else {
      setShowAllCertificates(prev => !prev);
    }
  }, []);

  const displayedProjects = showAllProjects ? projects : projects.slice(0, initialItems);
  const displayedCertificates = showAllCertificates ? certificates : certificates.slice(0, initialItems);

  return (
    <div className="md:px-[10%] px-[5%] w-full sm:mt-0 mt-[3rem] bg-background overflow-hidden" id="Portofolio">
      {/* Header section - unchanged */}
      <div className="text-center pb-10" data-aos="fade-up" data-aos-duration="1000">
        <h2 className="inline-block text-3xl md:text-5xl font-bold text-center mx-auto text-transparent bg-clip-text bg-gradient-to-r from-[#c9a227] to-[#f2e8d8]">
          <span style={{
            color: '#c9a227',
            backgroundImage: 'linear-gradient(45deg, #c9a227 10%, #f2e8d8 93%)',
            WebkitBackgroundClip: 'text',
            backgroundClip: 'text',
            WebkitTextFillColor: 'transparent'
          }}>
            Portfolio Showcase
          </span>
        </h2>
        <p className="text-secondaryText max-w-2xl mx-auto text-sm md:text-base mt-2">
          Explore my journey through projects, certifications, and technical expertise. 
          Each section represents a milestone in my continuous learning path.
        </p>
      </div>

      <Box sx={{ width: "100%" }}>
        {/* AppBar and Tabs section - unchanged */}
        <AppBar
          position="static"
          elevation={0}
          sx={{
            bgcolor: "transparent",
            border: "1px solid rgba(255, 255, 255, 0.1)",
            borderRadius: "20px",
            position: "relative",
            overflow: "hidden",
            "&::before": {
              content: '""',
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              background: "linear-gradient(180deg, rgba(139, 92, 246, 0.03) 0%, rgba(59, 130, 246, 0.03) 100%)",
              backdropFilter: "blur(10px)",
              zIndex: 0,
            },
          }}
          className="md:px-4"
        >
          {/* Tabs remain unchanged */}
          <Tabs
            value={value}
            onChange={handleChange}
            textColor="secondary"
            indicatorColor="secondary"
            variant="fullWidth"
            sx={{
              // Existing styles remain unchanged
              minHeight: "70px",
              "& .MuiTab-root": {
                fontSize: { xs: "0.9rem", md: "1rem" },
                fontWeight: "600",
                color: "#94a3b8",
                textTransform: "none",
                transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
                padding: "20px 0",
                zIndex: 1,
                margin: "8px",
                borderRadius: "12px",
                "&:hover": {
                  color: "#ffffff",
                  backgroundColor: "rgba(139, 92, 246, 0.1)",
                  transform: "translateY(-2px)",
                  "& .lucide": {
                    transform: "scale(1.1) rotate(5deg)",
                  },
                },
                "&.Mui-selected": {
                  color: "#fff",
                  background: "linear-gradient(135deg, rgba(139, 92, 246, 0.2), rgba(59, 130, 246, 0.2))",
                  boxShadow: "0 4px 15px -3px rgba(139, 92, 246, 0.2)",
                  "& .lucide": {
                    color: "#a78bfa",
                  },
                },
              },
              "& .MuiTabs-indicator": {
                height: 0,
              },
              "& .MuiTabs-flexContainer": {
                gap: "8px",
              },
            }}
          >
            <Tab
              icon={<Code className="mb-2 w-5 h-5 transition-all duration-300" />}
              label="Projects"
              {...a11yProps(0)}
            />
            <Tab
              icon={<Award className="mb-2 w-5 h-5 transition-all duration-300" />}
              label="Certificates"
              {...a11yProps(1)}
            />
            <Tab
              icon={<Boxes className="mb-2 w-5 h-5 transition-all duration-300" />}
              label="Tech Stack"
              {...a11yProps(2)}
            />
          </Tabs>
        </AppBar>

        <AnimatePresence mode="wait">
          <motion.div
            key={value}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
          >
            {value === 0 && (
              <TabPanel value={value} index={0} dir={theme.direction}>
                <div className="container mx-auto flex justify-center items-center overflow-hidden">
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 2xl:grid-cols-3 gap-5">
                    {displayedProjects.map((project, index) => (
                      <div
                        key={project.id || index}
                        data-aos={index % 3 === 0 ? "fade-up-right" : index % 3 === 1 ? "fade-up" : "fade-up-left"}
                        data-aos-duration={index % 3 === 0 ? "1000" : index % 3 === 1 ? "1200" : "1000"}
                      >
                        <CardProject
                          Img={project.Img}
                          Title={project.Title}
                          Description={project.Description}
                          Link={project.Link}
                          id={project.id}
                        />
                      </div>
                    ))}
                  </div>
                </div>
                {projects.length > initialItems && (
                  <div className="mt-6 w-full flex justify-start">
                    <ToggleButton
                      onClick={() => toggleShowMore('projects')}
                      isShowingMore={showAllProjects}
                    />
                  </div>
                )}
              </TabPanel>
            )}

            {value === 1 && (
              <TabPanel value={value} index={1} dir={theme.direction}>
                <div className="container mx-auto flex justify-center items-center overflow-hidden">
                  <div className="grid grid-cols-1 md:grid-cols-3 md:gap-5 gap-4">
                    {displayedCertificates.map((certificate, index) => (
                      <div
                        key={index}
                        data-aos={index % 3 === 0 ? "fade-up-right" : index % 3 === 1 ? "fade-up" : "fade-up-left"}
                        data-aos-duration={index % 3 === 0 ? "1000" : index % 3 === 1 ? "1200" : "1000"}
                      >
                        <Certificate ImgSertif={certificate.Img} />
                      </div>
                    ))}
                  </div>
                </div>
                {certificates.length > initialItems && (
                  <div className="mt-6 w-full flex justify-start">
                    <ToggleButton
                      onClick={() => toggleShowMore('certificates')}
                      isShowingMore={showAllCertificates}
                    />
                  </div>
                )}
              </TabPanel>
            )}

            {value === 2 && (
              <TabPanel value={value} index={2} dir={theme.direction}>
                <div className="container mx-auto flex justify-center items-center overflow-hidden pb-[5%]">
                  <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 lg:gap-8 gap-5">
                    {techStacks.map((stack, index) => (
                      <div
                        key={index}
                        data-aos={index % 3 === 0 ? "fade-up-right" : index % 3 === 1 ? "fade-up" : "fade-up-left"}
                        data-aos-duration={index % 3 === 0 ? "1000" : index % 3 === 1 ? "1200" : "1000"}
                      >
                        <TechStackIcon TechStackIcon={stack.icon} Language={stack.language} />
                      </div>
                    ))}
                  </div>
                </div>
              </TabPanel>
            )}
          </motion.div>
        </AnimatePresence>
      </Box>
    </div>
  );
}
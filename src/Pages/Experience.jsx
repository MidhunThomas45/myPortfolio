import React, { memo } from "react";
import { Briefcase, Calendar, Code, Sparkles, MapPin } from "lucide-react";

const experiences = [
  {
    role: "AI-ML Engineer",
    company: "Adam Innovations Co., Ltd",
    type: "Full-time",
    duration: "Jul 2025 - Present",
    location: "Global IT Park, Japan · Remote",
    description: "Contributed to multiple high-impact projects including AIInterviewMate, IMarket Predict, and Masshou AutoDoc. Engineered full-stack architectures, and integrated advanced Machine Learning models, Computer Vision (PoseNet, FaceAPI), and Generative AI (Gemini) to drive intelligent automation and predictive analytics.",
    tools: [
      "MERN", "MERN Stack", "Stripe Connect", "Python (FastAPI)", "React", "TypeScript", 
      "Node.js", "Gemini", "Azure Text Analytics", "Azure Speech Service", 
      "Azure Document Intelligence", "Azure Service Bus", "PoseNet", "FaceAPI", 
      "Deep Learning", "Machine Learning", "Scikit-learn", "TensorFlow", "Keras", 
      "NumPy", "Pandas", "Matplotlib", "Docker", "DevOps", "MLOps", "Stripe"
    ]
  },
  {
    role: "Data Analyst",
    company: "Indian Oil Corp Limited",
    type: "Full-time",
    duration: "Jan 2023 - Jan 2024",
    location: "Kozhikode, Kerala, India · Hybrid",
    description: "Specialized in comprehensive data analysis to drive operational efficiencies and strategic insights. Leveraged advanced Excel capabilities and intricate SAP ERP systems to process, model, and visualize complex information.",
    tools: [
      "SAP ERP", "Advance Excel", "Data Analysis", "Data Modeling", "Reporting"
    ]
  }
];

const Experience = () => {
  return (
    <div className="h-auto pb-[10%] text-white overflow-hidden px-[5%] sm:px-[5%] lg:px-[10%] mt-10 sm-mt-0" id="Experience">
      {/* Header */}
      <div className="text-center lg:mb-12 mb-6 px-[5%]">
        <div className="inline-block relative group">
          <h2
            className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#6366f1] to-[#a855f7]"
            data-aos="zoom-in-up"
            data-aos-duration="600"
          >
            Professional Experience
          </h2>
        </div>
        <p
          className="mt-2 text-gray-400 max-w-2xl mx-auto text-base sm:text-lg flex items-center justify-center gap-2"
          data-aos="zoom-in-up"
          data-aos-duration="800"
        >
          <Sparkles className="w-5 h-5 text-purple-400" />
          My professional journey
          <Sparkles className="w-5 h-5 text-purple-400" />
        </p>
      </div>

      <div className="w-full mx-auto relative space-y-8">
        {experiences.map((exp, index) => (
          <div key={index} className="w-full bg-white/5 border border-white/10 rounded-3xl p-6 sm:p-10 backdrop-blur-xl transition-all duration-500 hover:border-white/20 hover:bg-white/10 shadow-2xl relative overflow-hidden" data-aos="fade-up" data-aos-duration="1000">
            
            <div className="absolute inset-0 bg-gradient-to-br from-[#6366f1]/10 to-[#a855f7]/10 opacity-50 z-0"></div>

            <div className="relative z-10 flex flex-col md:flex-row gap-6 md:gap-10">
              {/* Left side: Role & Company */}
              <div className="md:w-1/3 flex flex-col space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#6366f1] to-[#a855f7] flex items-center justify-center shadow-lg">
                    <Briefcase className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white max-w-[200px] truncate sm:max-w-max">{exp.role}</h3>
                    <p className="text-[#a855f7] font-semibold text-lg hover:text-[#6366f1] transition-colors cursor-pointer">{exp.company}</p>
                  </div>
                </div>
                
                <div className="flex flex-col space-y-2 text-gray-400 mt-2">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4 text-indigo-400" />
                    <span className="text-sm font-medium">{exp.duration}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-purple-400" />
                    <span className="text-sm">{exp.location}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Briefcase className="w-4 h-4 text-indigo-400" />
                    <span className="text-sm">{exp.type}</span>
                  </div>
                </div>
              </div>

              {/* Right side: Description & Tools */}
              <div className="md:w-2/3 flex flex-col space-y-6">
                <p className="text-gray-300 text-base sm:text-lg leading-relaxed text-justify">
                  {exp.description}
                </p>
                
                <div className="flex flex-col space-y-3">
                  <div className="flex items-center gap-2 text-gray-200 font-semibold mb-2">
                    <Code className="w-5 h-5 text-[#a855f7]" />
                    <h4>Tools & Technologies</h4>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {exp.tools.map((tool, idx) => (
                      <span 
                        key={idx} 
                        className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-xs sm:text-sm text-gray-300 hover:text-white hover:bg-white/10 transition-colors shadow-sm"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>

              </div>
            </div>

          </div>
        ))}
      </div>
    </div>
  );
};

export default memo(Experience);

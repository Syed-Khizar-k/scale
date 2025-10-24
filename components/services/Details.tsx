import React from "react";

// 1. Define the structure for a single feature item
type FeatureItem = {
  title: string;
  description: string;
  // The icon component remains the same across services, representing a key theme
  icon: React.ReactNode;
};

// 2. Define the structure for the entire service content section
type ServiceDetailsContent = {
  headerLabel: string;
  headerTitle: string;
  features: FeatureItem[];
};

// --- ICON Definitions (Reused from your original component) ---

// Icon 1: User Globe (Used for Global/General Concepts)
const IconGlobal = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height="24"
    width="24"
    viewBox="0 0 18 18"
  >
    <title>user globe</title>
    <g
      strokeLinecap="round"
      strokeWidth="1.5"
      fill="none"
      stroke="#b9b9b9"
      strokeLinejoin="round"
      className="nc-icon-wrapper"
    >
      <path d="M5.05103 11.25C6.15559 11.25 7.05103 10.3546 7.05103 9.25C7.05103 8.14543 6.15559 7.25 5.05103 7.25C3.94646 7.25 3.05103 8.14543 3.05103 9.25C3.05103 10.3546 3.94646 11.25 5.05103 11.25Z"></path>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M11.5 11.75C14.3995 11.75 16.75 9.3995 16.75 6.5C16.75 3.60051 14.3995 1.25 11.5 1.25C9.0417 1.25 6.97804 2.9396 6.40692 5.22087C8.08928 5.78681 9.30102 7.37689 9.30102 9.25C9.30102 9.8975 9.15622 10.5112 8.89723 11.0604C9.66439 11.4992 10.5529 11.75 11.5 11.75Z"
        fill="#F7F7F7"
        fillOpacity={0.3}
        data-color="color-2"
        data-stroke="none"
        stroke="none"
      ></path>
      <path d="M1.25 16.5C1.775 14.903 3.278 13.75 5.051 13.75C6.824 13.75 8.327 14.903 8.852 16.5"></path>
      <path d="M11.5 11.5C12.6996 11.5 13.672 9.26142 13.672 6.5C13.672 3.73858 12.6996 1.5 11.5 1.5C10.3004 1.5 9.328 3.73858 9.328 6.5C9.328 9.26142 10.3004 11.5 11.5 11.5Z"></path>
      <path d="M9.10103 11.145C9.82303 11.519 10.631 11.75 11.5 11.75C14.399 11.75 16.75 9.399 16.75 6.5C16.75 3.601 14.399 1.25 11.5 1.25C9.12303 1.25 7.13803 2.84 6.49103 5.008"></path>
      <path d="M16.735 6.75H9.33099"></path>
    </g>
  </svg>
);

// Icon 2: Data Stacks (Used for Scalability/Architecture)
const IconStacks = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="32"
    height="32"
    fill="currentColor"
    viewBox="0 0 32 32"
    className="w-6 h-6 text-gray-400"
  >
    <g clipPath="url(#a)">
      <mask
        id="b"
        width="32"
        height="32"
        x="0"
        y="0"
        maskUnits="userSpaceOnUse"
        style={{ maskType: "luminance" }}
      >
        <path fill="#fff" d="M32 0H0v32h32V0Z"></path>
      </mask>
      <g mask="url(#b)">
        <path
          fillRule="evenodd"
          d="M16 27c-5.523 0-10-2.015-10-4.5v-.763a.727.727 0 0 1 1.183-.571C8.9 22.557 12.223 23.5 16 23.5c3.778 0 7.099-.943 8.817-2.334a.727.727 0 0 1 1.183.57v.764c0 2.485-4.477 4.5-10 4.5Zm0-5.5c-5.523 0-10-2.015-10-4.5v-.763a.727.727 0 0 1 1.183-.571C8.9 17.057 12.223 18 16 18c3.778 0 7.099-.943 8.817-2.334a.727.727 0 0 1 1.183.57V17c0 2.485-4.477 4.5-10 4.5Zm0-5.5c-5.523 0-10-2.015-10-4.5v-2C6 7.015 10.477 5 16 5s10 2.015 10 4.5v2c0 2.485-4.477 4.5-10 4.5Z"
          clipRule="evenodd"
        ></path>
      </g>
    </g>
    <defs>
      <clipPath id="a">
        <path fill="#fff" d="M0 0h32v32H0z"></path>
      </clipPath>
    </defs>
  </svg>
);

// Icon 3: Chart (Used for Diversity/Model Performance/Analytics)
const IconChart = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height="24"
    width="24"
    viewBox="0 0 18 18"
    fill="currentColor"
    className="w-6 h-6 text-gray-400"
  >
    <title>chart stacked bar</title>
    <g className="nc-icon-wrapper">
      <path d="M9.25,2h-.5c-.965,0-1.75,.785-1.75,1.75V14.25c0,.965,.785,1.75,1.75,1.75h.5c.965,0,1.75-.785,1.75-1.75V3.75c0-.965-.785-1.75-1.75-1.75Zm-.5,1.5h.5c.138,0,.25,.112,.25,.25v5.25h-1V3.75c0-.138,.112-.25,.25-.25Z"></path>
      <path d="M3.75,6h-.5c-.965,0-1.75,.785-1.75,1.75v6.5c0,.965,.785,1.75,1.75,1.75h.5c.965,0,1.75-.785,1.75-1.75V7.75c0-.965-.785-1.75-1.75-1.75Zm-.5,1.5h.5c.138,0,.25,.112,.25,.25v3.25h-1v-3.25c0-.138,.112-.25,.25-.25Z"></path>
      <path d="M14.75,8h-.5c-.965,0-1.75,.785-1.75,1.75v4.5c0,.965,.785,1.75,1.75,1.75h.5c.965,0,1.75-.785,1.75-1.75v-4.5c0-.965-.785-1.75-1.75-1.75Zm-.5,1.5h.5c.138,0,.25,.112,.25,.25v2.25h-1v-2.25c0-.138,.112-.25,.25-.25Z"></path>
    </g>
  </svg>
);

// Icon 4: Refresh (Used for Performance/Continuous Improvement)
const IconRefresh = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height="24"
    width="24"
    viewBox="0 0 18 18"
  >
    <title>refresh clockwise</title>
    <g
      strokeLinecap="round"
      strokeWidth="1.5"
      fill="none"
      stroke="#b9b9b9"
      strokeLinejoin="round"
      className="nc-icon-wrapper"
    >
      <circle
        cx="9"
        cy="9"
        r="7.25"
        fill="#F7F7F7"
        fillOpacity={0.3}
        data-color="color-2"
        data-stroke="none"
        stroke="none"
      ></circle>
      <path d="M16.25 9C16.25 13.004 13.004 16.25 9.00001 16.25C5.96901 16.25 3.37301 14.39 2.29001 11.75"></path>
      <path d="M1.88 14.695L2.288 11.75L5.232 12.157"></path>
      <path d="M1.75 9C1.75 4.996 4.996 1.75 9 1.75C12.031 1.75 14.627 3.61 15.71 6.25"></path>
      <path d="M16.12 3.30499L15.712 6.24999L12.768 5.84299"></path>
    </g>
  </svg>
);

// 3. Create a comprehensive data map keyed by service slug
const serviceContentMap: Record<string, ServiceDetailsContent> = {
  // --- DEFAULT / ORIGINAL CONTENT ---
  "ai-development": {
    headerLabel: "AI DEVELOPMENT",
    headerTitle: "AI Development Core Capabilities",
    features: [
      {
        title: "NLP & Computer Vision",
        description: "We deliver Custom AI model development including NLP, Computer Vision solutions, Predictive analytics, AI-powered chatbots, and Recommendation systems for business impact.",
        icon: IconGlobal,
      },
      {
        title: "Predictive Analytics",
        description: "Harnessing historical and real-time data to forecast market trends, demand, and operational outcomes with high precision and reliability.",
        icon: IconStacks,
      },
      {
        title: "AI-Powered Chatbots",
        description: "Deploying generative and conversational agents for 24/7 customer support, lead qualification, and internal workflow automation.",
        icon: IconChart,
      },
      {
        title: "Recommendation Systems",
        description: "Building personalized engine platforms that maximize user engagement and conversion through smart product and content suggestions.",
        icon: IconRefresh,
      },
    ],
  },
  // --- AI AGENT AUTOMATION CONTENT ---
  "ai-agent-automation": {
    headerLabel: "AGENT AUTOMATION",
    headerTitle: "Autonomous AI Agent Workflow Orchestration",
    features: [
      {
        title: "Robotic Process Automation (RPA)",
        description: "We automate workflows with intelligent RPA and Integration solutions, perfecting Document processing, Email automation, and Data entry automation for efficiency.",
        icon: IconGlobal,
      },
      {
        title: "Workflow Optimization",
        description: "Designing streamlined, multi-step processes where autonomous agents reduce friction and decision latency across departments.",
        icon: IconStacks,
      },
      {
        title: "Document Processing",
        description: "Agents capable of analyzing, extracting, and verifying complex information from unstructured documents at scale.",
        icon: IconChart,
      },
      {
        title: "Integration Solutions",
        description: "Seamlessly connecting AI agents with existing enterprise systems (CRMs, ERPs) for real-time data exchange and task execution.",
        icon: IconRefresh,
      },
    ],
  },
  // --- DATA ENGINEERING CONTENT ---
  "data-engineering": {
    headerLabel: "DATA ENGINEERING",
    headerTitle: "Data Infrastructure & Pipeline Solutions",
    features: [
      {
        title: "Data Pipelines & ETL/ELT",
        description: "We design robust Data pipeline development for Cloud data solutions. We specialize in ETL/ELT, Data warehousing, Real-time processing, and Data quality management.",
        icon: IconGlobal,
      },
      {
        title: "Data Warehousing",
        description: "Building scalable, performant data warehouses (Snowflake, BigQuery) optimized for analytics, reporting, and large-scale ML training.",
        icon: IconStacks,
      },
      {
        title: "Real-Time Processing",
        description: "Implementing streaming architectures (Kafka, Flink) to handle high-velocity data ingestion and low-latency decision-making.",
        icon: IconChart,
      },
      {
        title: "Data Quality & Cloud Solutions",
        description: "Establishing comprehensive data quality management frameworks and deploying secure, cost-effective data solutions on major cloud providers.",
        icon: IconRefresh,
      },
    ],
  },
  // --- MACHINE LEARNING CONTENT ---
  "machine-learning": {
    headerLabel: "MACHINE LEARNING",
    headerTitle: "Applied Machine Learning Excellence",
    features: [
      {
        title: "Supervised & Unsupervised Models",
        description: "We build Supervised learning and Unsupervised learning including advanced Deep learning solutions, focusing on Time series forecasting, Classification & regression, and reliable Model deployment & monitoring.",
        icon: IconGlobal,
      },
      {
        title: "Deep Learning Solutions",
        description: "Developing and optimizing neural networks for advanced tasks like image recognition, sequence generation, and complex pattern detection.",
        icon: IconStacks,
      },
      {
        title: "Time Series & Forecasting",
        description: "Specialized models for analyzing time-dependent data to accurately predict future values, stock trends, and resource needs.",
        icon: IconChart,
      },
      {
        title: "Model Deployment & Monitoring (ML Ops)",
        description: "Establishing MLOps pipelines for continuous integration, deployment, and performance monitoring of models in production environments.",
        icon: IconRefresh,
      },
    ],
  },
};

// 4. Component Definition
const DetailsSection = ({ slug }: { slug: string }) => {
  // Default to 'ai-development' content if the slug doesn't match a key
  const content = serviceContentMap[slug] || serviceContentMap["ai-development"];

  return (
    <main className="w-full bg-black text-white py-16 md:py-24">
      <div className="container mx-auto px-6 md:px-8">
        {/* Centered Header Section */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h3 className="text-sm font-light uppercase tracking-widest mb-4 text-white font-mono">
            {content.headerLabel}
          </h3>
          <h1 className="mt-4 text-4xl md:text-5xl font-light tracking-tight text-white">
            {content.headerTitle}
          </h1>
        </div>

        {/* 2x2 Grid Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10 max-w-5xl mx-auto">
          {/* Map over the features array to create each grid item */}
          {content.features.map((feature, index) => (
            <div key={index}>
              {/* Icon and Title Row */}
              <div className="flex items-start gap-4 mb-3">
                <figure className="relative shrink-0 flex items-center justify-center rounded-lg select-none w-11 h-11 bg-white/[0.09] border border-white/10">
                  <div className="relative w-6 h-6 text-gray-400">{feature.icon}</div>
                </figure>
                <h4 className="text-xl font-semibold text-white mt-1">
                  {feature.title}
                </h4>
              </div>

              {/* Description Paragraph */}
              <p className="text-gray-300 ml-[60px]">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
};

export default DetailsSection;

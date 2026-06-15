import { motion } from "framer-motion";
import "./Solutions.css";

// Industry Images Imports
import healthcareImg from "./assets/healthcare.jpg";
import bankingFinancialImg from "./assets/banking_financial.jpg";
import educationImg from "./assets/education.jpg";
import retailEcommerceImg from "./assets/retail_ecommerce.jpg";
import manufacturingImg from "./assets/manufacturing.jpg";
import logisticsTransportationImg from "./assets/logistics_transportation.jpg";
import realEstateImg from "./assets/real_estate.jpg";
import governmentPublicImg from "./assets/government_public.jpg";
import telecommunicationsImg from "./assets/telecommunications.jpg";
import energyUtilitiesImg from "./assets/energy_utilities.jpg";
import startupsSmeImg from "./assets/startups_sme.jpg";

// --- CUSTOM SVG GRAPHICS & ICONS ---


// Hero isometric tech city visual
function IsometricCityGraphic() {
  return (
    <svg
      viewBox="0 0 500 500"
      className="solutions-hero-city-svg"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        {/* Glow & Gradient Defs */}
        <linearGradient id="gridGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#2563EB" stopOpacity="0.3" />
          <stop offset="100%" stopColor="#EC008C" stopOpacity="0.05" />
        </linearGradient>
        <linearGradient id="buildingGrad1" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#3B82F6" stopOpacity="0.8" />
          <stop offset="100%" stopColor="#0B1F5F" stopOpacity="0.9" />
        </linearGradient>
        <linearGradient id="buildingGrad2" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#EC008C" stopOpacity="0.8" />
          <stop offset="100%" stopColor="#7B2CBF" stopOpacity="0.9" />
        </linearGradient>
        <linearGradient id="buildingGrad3" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#10B981" stopOpacity="0.7" />
          <stop offset="100%" stopColor="#065F46" stopOpacity="0.9" />
        </linearGradient>
        <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur stdDeviation="8" result="blur" />
          <feComposite in="SourceGraphic" in2="blur" operator="over" />
        </filter>
      </defs>

      {/* Grid Floor Isometric */}
      <g transform="translate(250, 420)">
        <polygon
          points="0,-220 240,-100 0,20 -240,-100"
          fill="rgba(11, 31, 95, 0.4)"
          stroke="url(#gridGrad)"
          strokeWidth="1.5"
        />
        {/* Grid lines inside floor */}
        <line x1="-120" y1="-160" x2="120" y2="-40" stroke="rgba(37, 99, 235, 0.15)" strokeWidth="1" />
        <line x1="-60" y1="-130" x2="180" y2="-10" stroke="rgba(37, 99, 235, 0.15)" strokeWidth="1" />
        <line x1="60" y1="-190" x2="-180" y2="-70" stroke="rgba(37, 99, 235, 0.15)" strokeWidth="1" />
        <line x1="120" y1="-160" x2="-120" y2="-40" stroke="rgba(37, 99, 235, 0.15)" strokeWidth="1" />
        <line x1="180" y1="-130" x2="-60" y2="-10" stroke="rgba(37, 99, 235, 0.15)" strokeWidth="1" />
        <line x1="-60" y1="-190" x2="180" y2="-70" stroke="rgba(37, 99, 235, 0.15)" strokeWidth="1" />
      </g>

      {/* Main Server Tower (Center) */}
      <g transform="translate(250, 310)">
        {/* Left Side */}
        <polygon points="0,0 -45,-22 -45,-120 0,-98" fill="url(#buildingGrad1)" />
        {/* Right Side */}
        <polygon points="0,0 45,-22 45,-120 0,-98" fill="#06123D" />
        {/* Top Diamond */}
        <polygon points="0,-98 -45,-120 0,-142 45,-120" fill="#3B82F6" stroke="rgba(255,255,255,0.4)" strokeWidth="1" />
        {/* Glowing Core */}
        <line x1="0" y1="-20" x2="0" y2="-90" stroke="#60A5FA" strokeWidth="3" filter="url(#glow)" />
        {/* Server Slots Indicators */}
        <line x1="-25" y1="-45" x2="-5" y2="-35" stroke="#60A5FA" strokeWidth="2" />
        <line x1="-25" y1="-65" x2="-5" y2="-55" stroke="#60A5FA" strokeWidth="2" />
        <line x1="-25" y1="-85" x2="-5" y2="-75" stroke="#60A5FA" strokeWidth="2" />
        <line x1="25" y1="-45" x2="5" y2="-35" stroke="#EC008C" strokeWidth="2" />
        <line x1="25" y1="-65" x2="5" y2="-55" stroke="#EC008C" strokeWidth="2" />
        <line x1="25" y1="-85" x2="5" y2="-75" stroke="#EC008C" strokeWidth="2" />
      </g>

      {/* AI Block (Left) */}
      <g transform="translate(140, 270)">
        <polygon points="0,0 -35,-17 -35,-80 0,-63" fill="url(#buildingGrad2)" />
        <polygon points="0,0 35,-17 35,-80 0,-63" fill="#2E0854" />
        <polygon points="0,-63 -35,-80 0,-97 35,-80" fill="#EC008C" />
        {/* Glowing Ring */}
        <ellipse cx="0" cy="-63" rx="20" ry="10" stroke="#F472B6" strokeWidth="1.5" fill="none" filter="url(#glow)" />
      </g>

      {/* Data Core Platform (Right) */}
      <g transform="translate(360, 330)">
        <polygon points="0,0 -35,-17 -35,-70 0,-53" fill="url(#buildingGrad3)" />
        <polygon points="0,0 35,-17 35,-70 0,-53" fill="#042F2C" />
        <polygon points="0,-53 -35,-70 0,-87 35,-70" fill="#10B981" />
        {/* Data Stream Line */}
        <path d="M0, -20 L-40, -100" stroke="#34D399" strokeWidth="2" strokeDasharray="4,4" filter="url(#glow)" />
      </g>

      {/* Network Rings and Data Particles */}
      <g stroke="rgba(255, 255, 255, 0.15)" strokeWidth="1" fill="none">
        <ellipse cx="250" cy="210" rx="150" ry="75" />
        <ellipse cx="250" cy="210" rx="100" ry="50" />
      </g>
      
      {/* Floating Sparkles */}
      <circle cx="200" cy="180" r="3" fill="#60A5FA" filter="url(#glow)" />
      <circle cx="290" cy="230" r="4" fill="#F472B6" filter="url(#glow)" />
      <circle cx="160" cy="320" r="3.5" fill="#34D399" filter="url(#glow)" />
      <circle cx="330" cy="150" r="3" fill="#A78BFA" filter="url(#glow)" />
    </svg>
  );
}

// Icons
const ArrowRightIcon = () => (
  <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <line x1="5" y1="12" x2="19" y2="12" />
    <polyline points="12 5 19 12 12 19" />
  </svg>
);

const CheckIcon = () => (
  <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="20 6 9 17 4 12" />
  </svg>
);

// Section specific icons mapping
const iconMap = {
  ai: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41" />
      <circle cx="12" cy="12" r="4" />
    </svg>
  ),
  cloud: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z" />
    </svg>
  ),
  security: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    </svg>
  ),
  data: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <line x1="18" y1="20" x2="18" y2="10" />
      <line x1="12" y1="20" x2="12" y2="4" />
      <line x1="6" y1="20" x2="6" y2="14" />
    </svg>
  ),
  dx: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" />
      <polyline points="17 6 23 6 23 12" />
    </svg>
  ),
  industry: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
      <line x1="2" y1="10" x2="22" y2="10" />
      <path d="M8 21h8M12 17v4" />
    </svg>
  ),
  erp: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
    </svg>
  ),
  crm: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2M9 7a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  ),
  hrms: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
      <circle cx="8.5" cy="7" r="4" />
      <polyline points="17 11 19 13 23 9" />
    </svg>
  ),
  platforms: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
      <line x1="9" y1="3" x2="9" y2="21" />
      <line x1="15" y1="3" x2="15" y2="21" />
      <line x1="3" y1="9" x2="21" y2="9" />
      <line x1="3" y1="15" x2="21" y2="15" />
    </svg>
  )
};

export default function Solutions() {
  // Animation utility props
  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  return (
    <div className="solutions-page">
      
      {/* 1. HERO SECTION */}
      <section className="solutions-hero">
        <div className="solutions-container">
          <div className="solutions-hero-grid">
            
            {/* Left Column Copy */}
            <motion.div 
              className="solutions-hero-content"
              initial="hidden"
              animate="visible"
              variants={staggerContainer}
            >
              <motion.h1 className="solutions-hero-title" variants={fadeUp}>Business-Focused Solutions for Digital Transformation</motion.h1>
              <motion.h2 className="solutions-hero-subtitle" variants={fadeUp}>
                Innovative Solutions Designed to Solve Real Business Challenges
              </motion.h2>
              <motion.p className="solutions-hero-desc" variants={fadeUp}>
                At Tanvox Technologies, we provide industry-specific and enterprise-grade solutions that help organizations improve efficiency, streamline operations, enhance customer experiences, and accelerate business growth.
                <br /><br />
                Our solutions combine business expertise, modern technologies, cloud-native architectures, artificial intelligence, automation, cybersecurity, and data intelligence to help organizations achieve sustainable growth and competitive advantage.
              </motion.p>
              
              <motion.div className="solutions-hero-actions" variants={fadeUp}>
                <a href="#contact" className="sol-btn sol-btn-primary">
                  Request a Consultation
                  <ArrowRightIcon />
                </a>
                <a href="#solutions-overview" className="sol-btn sol-btn-outline">
                  Explore Solutions
                </a>
              </motion.div>
            </motion.div>

            {/* Right Column Illustration */}
            <div className="solutions-hero-graphic">
              <IsometricCityGraphic />
              
              {/* Floating Solution Icons */}
              <div className="solutions-floating-icon-node node-ai" style={{ transform: "translateY(0px)" }}>
                {iconMap.ai}
                <span>AI & Automation</span>
              </div>
              <div className="solutions-floating-icon-node node-cloud" style={{ transform: "translateY(0px)" }}>
                {iconMap.cloud}
                <span>Cloud Solutions</span>
              </div>
              <div className="solutions-floating-icon-node node-security" style={{ transform: "translateY(0px)" }}>
                {iconMap.security}
                <span>Zero-Trust Security</span>
              </div>
              <div className="solutions-floating-icon-node node-data" style={{ transform: "translateY(0px)" }}>
                {iconMap.data}
                <span>Data & Analytics</span>
              </div>
              <div className="solutions-floating-icon-node node-dx" style={{ transform: "translateY(0px)" }}>
                {iconMap.dx}
                <span>Digital Transformation</span>
              </div>
              <div className="solutions-floating-icon-node node-industry" style={{ transform: "translateY(0px)" }}>
                {iconMap.industry}
                <span>Industry Solutions</span>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 2. SOLUTIONS OVERVIEW SECTION */}
      <section id="solutions-overview" className="solutions-section-light">
        <div className="solutions-container">
          <div className="solutions-overview-grid">
            
            {/* Left Block */}
            <motion.div 
              className="solutions-overview-left"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeUp}
            >
              <span className="solutions-section-subtitle">Overview</span>
              <h2>We Understand. We Solve. We Deliver.</h2>
              <p>
                At Tanvox Technologies, we analyze your organizational bottlenecks to architect robust technology blueprints. From legacy system migration to AI agent implementation, we build systems that scale with business expansion.
              </p>
              <a href="#contact" className="sol-btn sol-btn-secondary-outline">
                Speak to a Specialist
              </a>
            </motion.div>

            {/* Right Grid of Areas */}
            <motion.div 
              className="solutions-overview-cards-grid"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={staggerContainer}
            >
              <motion.div className="solution-area-card enterprise-sol-theme" variants={fadeUp}>
                <div className="solution-area-card-icon">{iconMap.erp}</div>
                <h3>Enterprise Solutions</h3>
                <p>Streamline corporate structures, automate key operations, and centralize databases across all departments.</p>
                <a href="#enterprise-solutions" className="sol-link-learn">
                  Explore ERP, CRM & HRMS <ArrowRightIcon />
                </a>
              </motion.div>

              <motion.div className="solution-area-card industry-sol-theme" variants={fadeUp}>
                <div className="solution-area-card-icon">{iconMap.industry}</div>
                <h3>Industry-Specific Solutions</h3>
                <p>Tailored digital frameworks resolving core compliance, automation, and operational problems across sectors.</p>
                <a href="#industry-solutions" className="sol-link-learn">
                  View Sector Offerings <ArrowRightIcon />
                </a>
              </motion.div>

              <motion.div className="solution-area-card dx-sol-theme" variants={fadeUp}>
                <div className="solution-area-card-icon">{iconMap.dx}</div>
                <h3>Digital Transformation</h3>
                <p>Modernize legacy frameworks, restructure architectures, and integrate APIs for next-gen productivity.</p>
                <a href="#contact" className="sol-link-learn">
                  Transform Business <ArrowRightIcon />
                </a>
              </motion.div>

              <motion.div className="solution-area-card ai-sol-theme" variants={fadeUp}>
                <div className="solution-area-card-icon">{iconMap.ai}</div>
                <h3>AI & Automation Solutions</h3>
                <p>Deploy intelligent machine learning pipelines, predictive dashboards, and robotic workflows.</p>
                <a href="#contact" className="sol-link-learn">
                  See AI Capabilities <ArrowRightIcon />
                </a>
              </motion.div>

              <motion.div className="solution-area-card cloud-sol-theme" variants={fadeUp}>
                <div className="solution-area-card-icon">{iconMap.cloud}</div>
                <h3>Cloud-Based Solutions</h3>
                <p>Scale environments on secure AWS, Azure, and Google Cloud hybrid or multi-tenant configurations.</p>
                <a href="#contact" className="sol-link-learn">
                  Configure Cloud <ArrowRightIcon />
                </a>
              </motion.div>

              <motion.div className="solution-area-card data-sol-theme" variants={fadeUp}>
                <div className="solution-area-card-icon">{iconMap.data}</div>
                <h3>Data & Analytics Solutions</h3>
                <p>Harness organizational datasets through pipelines, pipelines engineering, and BI reporting tools.</p>
                <a href="#contact" className="sol-link-learn">
                  Extract Insights <ArrowRightIcon />
                </a>
              </motion.div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* 3. ENTERPRISE SOLUTIONS SECTION */}
      <section id="enterprise-solutions" className="solutions-section-dark">
        <div className="solutions-container">
          
          <div className="solutions-section-header">
            <span className="solutions-section-subtitle">Operations Hub</span>
            <h2 className="solutions-section-title">Enterprise Solutions</h2>
            <p className="solutions-section-desc">
              Integrated business solutions to streamline operations, enhance collaboration, and drive organizational efficiency.
            </p>
          </div>

          <motion.div 
            className="enterprise-solutions-grid"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            {/* ERP Card */}
            <motion.div className="enterprise-card erp-theme" variants={fadeUp}>
              <div className="enterprise-card-icon">{iconMap.erp}</div>
              <h3>ERP Solutions</h3>
              
              <div className="enterprise-list-section">
                <span className="enterprise-list-title">Core Modules</span>
                <ul className="enterprise-list">
                  <li className="enterprise-list-item"><CheckIcon /> Finance & Accounting</li>
                  <li className="enterprise-list-item"><CheckIcon /> Human Resources</li>
                  <li className="enterprise-list-item"><CheckIcon /> Procurement</li>
                  <li className="enterprise-list-item"><CheckIcon /> Inventory Management</li>
                  <li className="enterprise-list-item"><CheckIcon /> Project Management</li>
                </ul>
              </div>

              <div className="enterprise-list-section" style={{ marginBottom: "2rem" }}>
                <span className="enterprise-list-title">Key Benefits</span>
                <ul className="enterprise-list">
                  <li className="enterprise-list-item"><CheckIcon /> Process Standardization</li>
                  <li className="enterprise-list-item"><CheckIcon /> Improved Operational Efficiency</li>
                  <li className="enterprise-list-item"><CheckIcon /> Real-Time Business Insights</li>
                  <li className="enterprise-list-item"><CheckIcon /> Better Resource Utilization</li>
                </ul>
              </div>

              <a href="#contact" className="sol-link-learn">
                Learn More <ArrowRightIcon />
              </a>
            </motion.div>

            {/* CRM Card */}
            <motion.div className="enterprise-card crm-theme" variants={fadeUp}>
              <div className="enterprise-card-icon">{iconMap.crm}</div>
              <h3>CRM Solutions</h3>

              <div className="enterprise-list-section">
                <span className="enterprise-list-title">Core Features</span>
                <ul className="enterprise-list">
                  <li className="enterprise-list-item"><CheckIcon /> Lead Management</li>
                  <li className="enterprise-list-item"><CheckIcon /> Sales Pipeline Management</li>
                  <li className="enterprise-list-item"><CheckIcon /> Customer Service</li>
                  <li className="enterprise-list-item"><CheckIcon /> Marketing Automation</li>
                  <li className="enterprise-list-item"><CheckIcon /> Customer Analytics</li>
                </ul>
              </div>

              <div className="enterprise-list-section" style={{ marginBottom: "2rem" }}>
                <span className="enterprise-list-title">Key Benefits</span>
                <ul className="enterprise-list">
                  <li className="enterprise-list-item"><CheckIcon /> Increased Customer Retention</li>
                  <li className="enterprise-list-item"><CheckIcon /> Better Customer Experience</li>
                  <li className="enterprise-list-item"><CheckIcon /> Higher Revenue Growth</li>
                </ul>
              </div>

              <a href="#contact" className="sol-link-learn">
                Learn More <ArrowRightIcon />
              </a>
            </motion.div>

            {/* HRMS Card */}
            <motion.div className="enterprise-card hrms-theme" variants={fadeUp}>
              <div className="enterprise-card-icon">{iconMap.hrms}</div>
              <h3>HRMS Solutions</h3>

              <div className="enterprise-list-section">
                <span className="enterprise-list-title">Core Modules</span>
                <ul className="enterprise-list">
                  <li className="enterprise-list-item"><CheckIcon /> Employee Information</li>
                  <li className="enterprise-list-item"><CheckIcon /> Attendance & Leave</li>
                  <li className="enterprise-list-item"><CheckIcon /> Payroll Processing</li>
                  <li className="enterprise-list-item"><CheckIcon /> Recruitment Management</li>
                  <li className="enterprise-list-item"><CheckIcon /> Performance Evaluation</li>
                </ul>
              </div>

              <div className="enterprise-list-section" style={{ marginBottom: "2rem" }}>
                <span className="enterprise-list-title">Key Benefits</span>
                <ul className="enterprise-list">
                  <li className="enterprise-list-item"><CheckIcon /> Reduced Administrative Work</li>
                  <li className="enterprise-list-item"><CheckIcon /> Improved Employee Engagement</li>
                  <li className="enterprise-list-item"><CheckIcon /> Compliance Management</li>
                </ul>
              </div>

              <a href="#contact" className="sol-link-learn">
                Learn More <ArrowRightIcon />
              </a>
            </motion.div>

            {/* Enterprise Platforms Card */}
            <motion.div className="enterprise-card platforms-theme" variants={fadeUp}>
              <div className="enterprise-card-icon">{iconMap.platforms}</div>
              <h3>Enterprise Platforms</h3>

              <div className="enterprise-list-section">
                <span className="enterprise-list-title">Key Features</span>
                <ul className="enterprise-list">
                  <li className="enterprise-list-item"><CheckIcon /> Process Automation</li>
                  <li className="enterprise-list-item"><CheckIcon /> Centralized Data Management</li>
                  <li className="enterprise-list-item"><CheckIcon /> Workflow Optimization</li>
                  <li className="enterprise-list-item"><CheckIcon /> Real-Time Reporting</li>
                </ul>
              </div>

              <div className="enterprise-list-section" style={{ marginBottom: "2rem" }}>
                <span className="enterprise-list-title">Key Benefits</span>
                <ul className="enterprise-list">
                  <li className="enterprise-list-item"><CheckIcon /> Improved Productivity</li>
                  <li className="enterprise-list-item"><CheckIcon /> Better Decision Making</li>
                  <li className="enterprise-list-item"><CheckIcon /> Enhanced Business Agility</li>
                </ul>
              </div>

              <a href="#contact" className="sol-link-learn">
                Learn More <ArrowRightIcon />
              </a>
            </motion.div>

          </motion.div>
        </div>
      </section>

      {/* 4. INDUSTRY SOLUTIONS GRID */}
      <section id="industry-solutions" className="solutions-section-light">
        <div className="solutions-container">
          
          <div className="solutions-section-header">
            <span className="solutions-section-subtitle">Dedicated Expertise</span>
            <h2 className="solutions-section-title">Industry Solutions</h2>
            <p className="solutions-section-desc">
              Customized strategies engineered to address unique compliance, scaling, and processing challenges.
            </p>
          </div>

          <motion.div 
            className="industry-solutions-grid"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            {/* 1. Healthcare (Featured Card) */}
            <motion.div className="industry-image-card featured-card" variants={fadeUp}>
              <img src={healthcareImg} alt="Healthcare" className="industry-card-img" />
              <div className="industry-overlay">
                <h3>Healthcare</h3>
                <p className="industry-feat-desc">Transforming patient care delivery with secure, compliant digital architectures.</p>
                <ul className="industry-list">
                  <li className="industry-list-item">Telemedicine Platforms</li>
                  <li className="industry-list-item">EHR Integration</li>
                  <li className="industry-list-item">Patient Portals</li>
                  <li className="industry-list-item">Medical Billing</li>
                  <li className="industry-list-item">Healthcare Analytics</li>
                </ul>
                <a href="#contact" className="sol-link-learn featured-cta">Learn More &rarr;</a>
              </div>
            </motion.div>

            {/* 2. Banking & Financial Services (Featured Card) */}
            <motion.div className="industry-image-card featured-card" variants={fadeUp}>
              <img src={bankingFinancialImg} alt="Banking & Financial Services" className="industry-card-img" />
              <div className="industry-overlay">
                <h3>Banking & FinTech</h3>
                <p className="industry-feat-desc">Deploying high-velocity financial systems and secure payment infrastructures.</p>
                <ul className="industry-list">
                  <li className="industry-list-item">Payment Gateways</li>
                  <li className="industry-list-item">Mobile Banking Apps</li>
                  <li className="industry-list-item">Fraud Detection Systems</li>
                  <li className="industry-list-item">Robo-Advisors</li>
                  <li className="industry-list-item">Blockchain Solutions</li>
                </ul>
                <a href="#contact" className="sol-link-learn featured-cta">Learn More &rarr;</a>
              </div>
            </motion.div>

            {/* 3. Education (Featured Card) */}
            <motion.div className="industry-image-card featured-card" variants={fadeUp}>
              <img src={educationImg} alt="Education" className="industry-card-img" />
              <div className="industry-overlay">
                <h3>Education</h3>
                <p className="industry-feat-desc">Enabling scalable, interactive virtual learning environments globally.</p>
                <ul className="industry-list">
                  <li className="industry-list-item">Learning Systems (LMS)</li>
                  <li className="industry-list-item">Virtual Classrooms</li>
                  <li className="industry-list-item">Student Information</li>
                  <li className="industry-list-item">E-Learning Content</li>
                  <li className="industry-list-item">Proctoring Tools</li>
                </ul>
                <a href="#contact" className="sol-link-learn featured-cta">Learn More &rarr;</a>
              </div>
            </motion.div>

            {/* 4. Retail & E-Commerce (Featured Card) */}
            <motion.div className="industry-image-card featured-card" variants={fadeUp}>
              <img src={retailEcommerceImg} alt="Retail & E-Commerce" className="industry-card-img" />
              <div className="industry-overlay">
                <h3>Retail & E-Commerce</h3>
                <p className="industry-feat-desc">Optimizing retail operations with headless storefronts and smart commerce dashboards.</p>
                <ul className="industry-list">
                  <li className="industry-list-item">E-commerce Platforms</li>
                  <li className="industry-list-item">POS Systems</li>
                  <li className="industry-list-item">Inventory Optimization</li>
                  <li className="industry-list-item">Loyalty Programs</li>
                  <li className="industry-list-item">Retail Analytics</li>
                </ul>
                <a href="#contact" className="sol-link-learn featured-cta">Learn More &rarr;</a>
              </div>
            </motion.div>

            {/* 5. Manufacturing (Standard Card) */}
            <motion.div className="industry-image-card" variants={fadeUp}>
              <img src={manufacturingImg} alt="Manufacturing" className="industry-card-img" />
              <div className="industry-overlay">
                <h3>Manufacturing</h3>
              </div>
            </motion.div>

            {/* 6. Logistics & Transportation (Standard Card) */}
            <motion.div className="industry-image-card" variants={fadeUp}>
              <img src={logisticsTransportationImg} alt="Logistics & Transportation" className="industry-card-img" />
              <div className="industry-overlay">
                <h3>Logistics & Cargo</h3>
              </div>
            </motion.div>

            {/* 7. Real Estate (Standard Card) */}
            <motion.div className="industry-image-card" variants={fadeUp}>
              <img src={realEstateImg} alt="Real Estate" className="industry-card-img" />
              <div className="industry-overlay">
                <h3>Real Estate</h3>
              </div>
            </motion.div>

            {/* 8. Government & Public Sector (Standard Card) */}
            <motion.div className="industry-image-card" variants={fadeUp}>
              <img src={governmentPublicImg} alt="Government & Public Sector" className="industry-card-img" />
              <div className="industry-overlay">
                <h3>Government</h3>
              </div>
            </motion.div>

            {/* 9. Telecommunications (Standard Card) */}
            <motion.div className="industry-image-card" variants={fadeUp}>
              <img src={telecommunicationsImg} alt="Telecommunications" className="industry-card-img" />
              <div className="industry-overlay">
                <h3>Telecom & 5G</h3>
              </div>
            </motion.div>

            {/* 10. Energy & Utilities (Standard Card) */}
            <motion.div className="industry-image-card" variants={fadeUp}>
              <img src={energyUtilitiesImg} alt="Energy & Utilities" className="industry-card-img" />
              <div className="industry-overlay">
                <h3>Energy & Utilities</h3>
              </div>
            </motion.div>

            {/* 11. Startups & SMEs (Standard Card) */}
            <motion.div className="industry-image-card" variants={fadeUp}>
              <img src={startupsSmeImg} alt="Startups & SMEs" className="industry-card-img" />
              <div className="industry-overlay">
                <h3>Startups & SMEs</h3>
              </div>
            </motion.div>

          </motion.div>
        </div>
      </section>

      {/* 5. FOUR INFORMATION BLOCKS SECTION */}
      <section className="solutions-section-dark">
        <div className="solutions-container">
          <div className="solutions-info-grid">
            
            {/* Block 1: Delivery Process */}
            <div className="solutions-info-block">
              <h3 className="solutions-info-block-title">
                <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="9 11 12 14 22 4"/><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"/></svg>
                Our Delivery Process
              </h3>
              <div className="solutions-process-list">
                <div className="solutions-process-item">
                  <div className="solutions-process-num">1</div>
                  <span className="solutions-process-name">Business Discovery</span>
                </div>
                <div className="solutions-process-item">
                  <div className="solutions-process-num">2</div>
                  <span className="solutions-process-name">Requirement Analysis</span>
                </div>
                <div className="solutions-process-item">
                  <div className="solutions-process-num">3</div>
                  <span className="solutions-process-name">Solution Design</span>
                </div>
                <div className="solutions-process-item">
                  <div className="solutions-process-num">4</div>
                  <span className="solutions-process-name">Development & Integration</span>
                </div>
                <div className="solutions-process-item">
                  <div className="solutions-process-num">5</div>
                  <span className="solutions-process-name">Testing & QA</span>
                </div>
                <div className="solutions-process-item">
                  <div className="solutions-process-num">6</div>
                  <span className="solutions-process-name">Deployment</span>
                </div>
                <div className="solutions-process-item">
                  <div className="solutions-process-num">7</div>
                  <span className="solutions-process-name">Training & Adoption</span>
                </div>
                <div className="solutions-process-item">
                  <div className="solutions-process-num">8</div>
                  <span className="solutions-process-name">Support & Continuous Improvement</span>
                </div>
              </div>
            </div>

            {/* Block 2: Why Choose Us */}
            <div className="solutions-info-block">
              <h3 className="solutions-info-block-title">
                <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2.5"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
                Why Choose Tanvox
              </h3>
              <div className="solutions-why-cards">
                <div className="solutions-why-card">
                  <div className="solutions-why-icon">{iconMap.dx}</div>
                  <span className="solutions-why-title">Business-Focused</span>
                </div>
                <div className="solutions-why-card">
                  <div className="solutions-why-icon">{iconMap.industry}</div>
                  <span className="solutions-why-title">Industry Expertise</span>
                </div>
                <div className="solutions-why-card">
                  <div className="solutions-why-icon">{iconMap.cloud}</div>
                  <span className="solutions-why-title">Scalable Architecture</span>
                </div>
                <div className="solutions-why-card">
                  <div className="solutions-why-icon">{iconMap.security}</div>
                  <span className="solutions-why-title">Security & Compliance</span>
                </div>
                <div className="solutions-why-card">
                  <div className="solutions-why-icon">{iconMap.ai}</div>
                  <span className="solutions-why-title">Innovation Driven</span>
                </div>
                <div className="solutions-why-card">
                  <div className="solutions-why-icon">{iconMap.erp}</div>
                  <span className="solutions-why-title">End-to-End Delivery</span>
                </div>
              </div>
            </div>

            {/* Block 4: Technologies We Leverage */}
            <div className="solutions-info-block">
              <h3 className="solutions-info-block-title">
                <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>
                Technologies Leverage
              </h3>
              <div className="solutions-tech-list">
                
                <div>
                  <div className="solutions-tech-cat-title">Cloud Platforms</div>
                  <div className="solutions-tech-pills">
                    <span className="solutions-tech-pill">AWS</span>
                    <span className="solutions-tech-pill">Azure</span>
                    <span className="solutions-tech-pill">Google Cloud</span>
                  </div>
                </div>

                <div>
                  <div className="solutions-tech-cat-title">AI / Machine Learning</div>
                  <div className="solutions-tech-pills">
                    <span className="solutions-tech-pill">TensorFlow</span>
                    <span className="solutions-tech-pill">PyTorch</span>
                    <span className="solutions-tech-pill">OpenAI APIs</span>
                    <span className="solutions-tech-pill">LLMs</span>
                  </div>
                </div>

                <div>
                  <div className="solutions-tech-cat-title">Data & Analytics</div>
                  <div className="solutions-tech-pills">
                    <span className="solutions-tech-pill">Snowflake</span>
                    <span className="solutions-tech-pill">Databricks</span>
                    <span className="solutions-tech-pill">Power BI</span>
                    <span className="solutions-tech-pill">Apache Spark</span>
                  </div>
                </div>

                <div>
                  <div className="solutions-tech-cat-title">DevOps & Platforms</div>
                  <div className="solutions-tech-pills">
                    <span className="solutions-tech-pill">Docker</span>
                    <span className="solutions-tech-pill">Kubernetes</span>
                    <span className="solutions-tech-pill">Terraform</span>
                    <span className="solutions-tech-pill">GitHub Actions</span>
                  </div>
                </div>

                <div>
                  <div className="solutions-tech-cat-title">Security Frameworks</div>
                  <div className="solutions-tech-pills">
                    <span className="solutions-tech-pill">IAM</span>
                    <span className="solutions-tech-pill">Vault</span>
                    <span className="solutions-tech-pill">SIEM</span>
                    <span className="solutions-tech-pill">Cloudflare WAF</span>
                  </div>
                </div>

              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 6. FINAL CTA SECTION */}
      <section className="solutions-section-light" style={{ padding: "4rem 0" }}>
        <div className="solutions-container">
          <div className="solutions-cta">
            <div className="solutions-cta-glow-1"></div>
            <div className="solutions-cta-glow-2"></div>
            <div className="solutions-cta-content">
              <h2 className="solutions-cta-title">Ready to Transform Your Business?</h2>
              <p className="solutions-cta-desc">
                Partner with Tanvox Technologies to implement innovative enterprise solutions that drive efficiency, business growth, and long-term competitive advantage.
              </p>
              <div className="solutions-cta-actions">
                <a href="#contact" className="sol-btn sol-btn-primary">
                  Schedule a Consultation
                </a>
                <a href="#contact" className="sol-btn sol-btn-outline">
                  Request a Demo
                </a>
                <a href="#contact" className="sol-btn sol-btn-outline">
                  Talk to a Solution Expert
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}

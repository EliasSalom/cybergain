import { BlogPostProps } from "@/components/Blog/BlogPost";
import { BalloonCardProps } from "@/components/Cards/BalloonCard";
import { Event } from "@/components/Cards/EventCard";
import { SpecialtyCardProps } from "@/components/Cards/SpecialtyCard";
import { ServiceSectionProps } from "@/components/ServiceSection/ServiceSection";
import CodeIcon from "@mui/icons-material/Code";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import BrushIcon from "@mui/icons-material/Brush";
import StorageIcon from "@mui/icons-material/Storage";
import PhoneIphoneIcon from "@mui/icons-material/PhoneIphone";
import ReceiptIcon from "@mui/icons-material/Receipt";
import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";
import LanIcon from "@mui/icons-material/Lan";
import { getS3URL } from "../getEnv";
import { IEmployee } from "@/components/Cards/TeamCard";

export const levels = [
  {
    level: 'BEGINNER',
    description: 'Just Starting Out In Cybersecurity, Eager To Learn And Explore, Equipped With Foundational Knowledge In Networking And Security Principles. Actively Pursuing Education, And Certifications, And Engaging In Various Cybersecurity Domains. ',
    icon: 'https://public.qa.cybergain.io/website/logos/beginner.png', // replace with actual path to icon
  },
  {
    level: 'INTERMEDIATE',
    description: 'Passionate About Expanding Knowledge And Improving Skills Beyond The Basics. Possesses A Solid Foundation In Networking, System Security, And Practical Experience. Actively Advancing Education With Specialized Courses And Certifications.',
    icon: 'https://public.qa.cybergain.io/website/logos/intermediate.png', // replace with actual path to icon
  },
  {
    level: 'PROFESSIONAL',
    description: 'Driven To Excel And Enhance Expertise. Have Extensive Knowledge In Networking, System Security, And Hands-On Experience. Continuously Enhances Skills Through Advanced Courses And Certifications, Exploring Detailed Areas Of Cybersecurity Domains.',
    icon: 'https://public.qa.cybergain.io/website/logos/professional.png', // replace with actual path to icon
  },
  {
    level: 'MASTER',
    description: 'Dedicated To Pushing Boundaries And Innovating In The Field. Holds An Unmatched Depth Of Knowledge In Networking, System Security, And Extensive Practical Expertise. Pursues Cutting-Edge Advancements Through Groundbreaking Research, Leading-Edge Certifications, And Spearheading Advancements In Diverse Cybersecurity Realms.',
    icon: 'https://public.qa.cybergain.io/website/logos/master.png', // replace with actual path to icon
  },
];
       
export const partnersLogos = [
     'https://public.qa.cybergain.io/website/logos/Check_Point.png', 
     'https://public.qa.cybergain.io/website/logos/Circle-Logo.webp', 

     'https://public.qa.cybergain.io/website/logos/aws.png', 

     'https://public.qa.cybergain.io/website/logos/ec_council_logo.webp', 

     'https://public.qa.cybergain.io/website/logos/softcloud.png', 

     'https://public.qa.cybergain.io/website/logos/ThinkCyber_Logo.webp', 

     'https://public.qa.cybergain.io/website/logos/wlogo.png', 

     'https://public.qa.cybergain.io/website/logos/SecureAcademy.png', 

  
];
export const courses = [
  {
    name: 'BlueTeam',
    description: 'Introducing The Blue Team Courses, A Comprehensive Certification Pathway ...',
    image: 'https://public.qa.cybergain.io/website/logos/transparent-BlueTeam.png',
    information: [
      '• Cyber Infrastructure',
      '• SIEM SOC IR',
      '• Network Security',
      '• Risk Assessment',
      '• Cloud Security'
    ]
  },
  {
    name: 'RedTeam',
    description: 'Experience Our Red Team Course, Designed To Enhance Your Personal Skills And Unleash...',
    image: 'https://public.qa.cybergain.io/website/logos/transparent-RedTeam.png',
    information: [
      '• Internal Penetration Testing',
      '• External Penetration Testing',
      '• Active Directory Penetration Testing',
      '• Web App & API Penetration Testing',
      '• Cloud Penetration Testing',
    ]
  },
  {
    name: 'Purple Team',
    description: '',
    image: 'https://public.qa.cybergain.io/website/logos/transparent-PurpleTeam.png',
    information: [
      '• Exploit Development & Detection',
      '• Defensive Security Automation',
      '• Privilege Escalation & Lateral Movement',
      '• Purple Team Life Cycle',
      '• Initial Intrusion Strategies Emulation & Detection',
    ]
  },
  {
    name: 'IT & Cloud Security',
    description: '',
    image: 'https://public.qa.cybergain.io/website/logos/transparent-ItTeam.png',
    information: [
      '• Windows Server Management & Domain Services',
      '• Cloud Computing IAC (Infrastructure as Code)',
      '• AWS/Azure Services',
      '• Firewalls',
      '• Networking Management',
    ]
  },
];


export const contactReasons=[
  'General Inquiry',
  'Technical Support',
  'Billing and Payments',
  'Product Information',
  'Order Status',
  'Feedback or Suggestions',
  'Report a Problem',
  'Sales Inquiry',
  'Partnership Opportunities',
  'Careers',
  'Press or Media',
  'Refund Request',
  'Shipping Information',
  'Account Assistance',
  'Other',
];

  
export const services:ServiceSectionProps[] = [
  {
    id: "it-consulting",
    title: "IT Consulting - ITaaS",
    mainImage:'https://public.qa.cybergain.io/Services/ITaaS/Cyber+Gain+Center+-+Cybersecurity+Solutions++(21).png',
    cards: [
      {
        title: "Microsoft 365",
        description: "Microsoft 365 rents familiar Office apps (Word, Excel, etc.) with cloud storage and security.",
        imagePosition: "left",
      },
      {
        title: "Backup",
        description: "Cloud backup securely stores your data on remote servers, accessible from anywhere for disaster recovery or easy access.",
        imagePosition: "left",
      },
      {
        title: "Disaster Recovery – DR",
        description: "A plan and process for restoring critical IT systems and data after outages or disruptions.",
        imagePosition: "left",
      },
      {
        title: "Cloud Management – Azure + AWS",
        description: "Tools and strategies to provision, manage, and optimize resources across both leading cloud platforms.",
        imagePosition: "left",
      },
      {
        title: "Azure AD + Windows Server AD",
        description: "Can work together for a hybrid identity solution, managing user authentication on-premises and in the cloud.",
        imagePosition: "left",
      }
    ],
  },
  {
    id: "security-section",
    title: "Security as a Service - SECaaS",
    cards: [
      {
        title: "Network Security",
        description:
          "Fortinet offers a network security solution with FortiGate acting as the firewall, FortiSwitch managing wired connections, and FortiAP securing wireless access points, all working together seamlessly under the Security Fabric for unified threat protection.",
        imagePosition: "left",
        imageSrc:getS3URL()+'/Services/SECaaS/Network Security.png'
      },
      {
        title: "Client Security",
        description:
          "Client security integrates endpoint protection (Microsoft Intune, FortiClient Fabric, ESET Antivirus), endpoint management (FortiEMS), endpoint detection and response (FortiEDR), and data loss prevention (DLP Safetica) to safeguard individual devices and prevent data breaches.",
        imagePosition: "right",
        imageSrc:getS3URL()+'/Services/SECaaS/Client Security.png'
        
      },
      {
        title: "Manager & Monitoring Security",
        description:
          "Manager & Monitoring Security combines Fortinet's FortiAnalyzer (log analysis), FortiSIEM (security information and event management), and FortiManager (centralized management) for unified security threat monitoring, investigation, response, and offering a 24/7 Security Operations Center as a Service (SOCaaS).",
        imagePosition: "left",
        imageSrc:getS3URL()+'/Services/SECaaS/Manager & Monitoring Security.png'
      },
      {
        title: "Cloud Security",
        description:
          "Cloud Security secures cloud environments by combining web application protection (FortiWAF), security information and event management (SIEM), identity and access management (IAM), and denial-of-service protection (AWS Shield) for comprehensive cloud threat defense.",
        imagePosition: "right",
        imageSrc:getS3URL()+'/Services/SECaaS/Cloud Security.png'

      },
    ],
  },
  {
    id: "Offensive-section",
    title: "Offensive Security - PTaaS",
    cards: [
      {
        title: "Red Teaming",
        description:
            "Red teaming pits ethical hackers against an organizations defenses to uncover security weaknesses through simulated real-world attacks.",
        imagePosition: "left",
        imageSrc:getS3URL()+'/Services/PTaaS/Red+Teaming.png'
      },
      {
        title: "Internal Infrastructure PT",
        description:
            "Internal penetration testing simulates a malicious insider by assessing vulnerabilities within your internal network, including devices, cloud resources, servers, susceptibility to phishing attacks, and how far an attacker could spread once inside.",
        imagePosition: "right",
        imageSrc:getS3URL()+'/Services/PTaaS/Internal+Infrastructure+Penetration+Testing.png'

      },
      {
        title: "External Infrastructure PT",
        description:
            "External penetration testing acts like a hacker on the internet, probing for weaknesses in APIs, websites, DNS, public cloud storage, servers, and any other internet-facing aspects of your system.",
        imagePosition: "left",
        imageSrc:getS3URL()+'/Services/PTaaS/External+infrastructure+Penetration+Testing.png'
      },
      {
        title: "Vulnerability Assessment",
        description:
            "Vulnerability assessment is the systematic inspection of a computer system to identify, prioritize, and potentially quantify its security",
        imagePosition: "right",
        imageSrc:getS3URL()+'/Services/PTaaS/Vulnerability+Assessment.png'

      },
    ],
  },
  {
    id: "devops-section",
    title: "DevOps as a Service - DaaS",
    cards: [
      {
        title: "Continuous Integration and Delivery (CI/CD)",
        description:
          "CI/CD with secure code repositories (GitHub), automated security testing, and secure build environments (using GitHub Actions) automates the software development pipeline, ensuring code quality and security at every integration and delivery stage.",
        imagePosition: "left",
        imageSrc:getS3URL()+'/Services/DaaS/Continuous Integration and Delivery (CICD).png'
      },
      {
        title: "Infrastructure Provisioning and Management",
        description:
          "Infrastructure Provisioning and Management with IaC tools like Terraform automates defining, provisioning, and managing infrastructure across clouds and on-premises environments, enabling scaling with Kubernetes container orchestration.",
        imagePosition: "right",
        imageSrc:getS3URL()+'/Services/DaaS/Infrastructure Provisioning and Management.png'

      },
      {
        title: "Monitoring and Logging",
        description:
          "DevOps monitoring and logging utilizes Application Performance Monitoring (APM), cloud monitoring services (like AWS CloudWatch), and log management tools (like Logz.io) to gain comprehensive visibility into application health, infrastructure performance, and system events.",
        imagePosition: "left",
        imageSrc:getS3URL()+'/Services/DaaS/Monitoring and Logging.png'

      },
      {
        title: "Security as a Shared Responsibility",
        description:
          "DevSecOps emphasizes Security as a Shared Responsibility, where development, operations, and security teams collaborate on security practices, leverage security expertise, and conduct regular security audits to ensure a secure software development lifecycle.",
        imagePosition: "right",
        imageSrc:getS3URL()+'/Services/DaaS/Security as a Shared Responsibility.png'

      },
    ],
  },
  // {
  //   id: "development-section",
  //   title: "Development as a Service - DEVaaS",
  //   cards: [
  //     {
  //       title: "UI/UX Design",
  //       description:
  //         "UI/UX design combines the user interface (UI), the look and feel, with the user experience (UX), the user's journey through a product or service, to create a seamless and engaging interaction.",
  //       imagePosition: "left",
  //       imageSrc:getS3URL()+'/Services/DEVaaS/UIUX Design.png'
  //     },
  //     {
  //       title: "Full-stack development",
  //       description:
  //         "Full-stack development encompasses both front-end (user interface), back-end (server-side logic and databases), API integrations, security measures, and potentially microservices architecture to build complete web applications.",
  //       imagePosition: "right",
  //       imageSrc:getS3URL()+'/Services/DEVaaS/Full-stack development.png'
  //
  //     },
  //     {
  //       title: "Quality Assurance (QA) testing",
  //       description:
  //         "Quality Assurance (QA) testing involves a systematic process of evaluating software to identify bugs and security issues and ensure it meets all functional and non-functional requirements.",
  //       imagePosition: "left",
  //       imageSrc:getS3URL()+'/Services/DEVaaS/Quality Assurance (QA) testing.png'
  //
  //     },
  //     {
  //       title: "Maintenance and support",
  //       description:
  //         "Maintenance and support encompass fixing bugs, analyzing security logs, adding new features, and more to keep software functioning smoothly and securely after its launch.",
  //       imagePosition: "right",
  //       imageSrc:getS3URL()+'/Services/DEVaaS/Maintenance and support.png'
  //
  //     },
  //   ],
  // },
];


export const teamMembers = [
  {
    name: "John Doe",
    role: "Software Engineer",
    description:
      "John is a passionate software engineer with 5 years of experience in full stack development.",
    image: "https://via.placeholder.com/150",
  },
  {
    name: "Jane Smith",
    role: "Product Manager",
    description:
      "Jane is an experienced product manager who loves to build user-centric products.",
    image: "https://via.placeholder.com/150",
  },
];
export const missionData:BalloonCardProps[] = [
  {
    title: "MISSION",
    description:
      "                CyberGain is a company with a two-pronged mission: to empower individuals with the cybersecurity skills and knowledge needed to excel in their careers, and to secure businesses by helping them develop secure development practices and implement robust cybersecurity solutions.",
      imagePosition:"right"
  },
  {
    title: "VISION",
    description:
      "To pioneer innovative cybersecurity training and solutions, extending our reach globally to shape the future of digital defense and empower individuals and organizations worldwide to protect themselves in the digital age.",
      imagePosition:"left"

  },
  {
    title: "PURPOSE",
    description: "Forge cybersecurity warriors, equipped to defend against the latest attacks, ignite awareness across industries, and fortify the digital world, one secure connection at a time.",
    imagePosition:"right"

  },
];
export const serviceHeroData = {
  title: "Services & Solutions",
  description: "crafts cutting-edge solutions that align seamlessly with both current and future business needs, ensuring real value for every client. Explore our comprehensive services, designed to empower your success with forward-thinking technology.",
  backgroundImage: "@/images/cyber-security.webp"
};


export const allPackagesFeatures = ['Feature 1', 'Feature 2', 'Feature 3', 'Feature 4', 'Feature 5'];
export const packages = [
  {
    packageName: 'Basic Plan',
    price: '$19.99/month',
    features: ['Feature 1', 'Feature 2', 'Feature 5'],
    ctaType: 'free', 
  },
  {
    packageName: 'Standard Plan',
    price: '$49.99/month',
    features: ['Feature 1', 'Feature 2', 'Feature 3', 'Feature 4'],
    isRecommended: true,
    ctaType: 'free',
  },
  {
    packageName: 'Premium Plan',
    price: '$99.99/month',
    features: ['Feature 1', 'Feature 2', 'Feature 3', 'Feature 4', 'Feature 5'],
    ctaType: 'free',
  },
  {
    packageName: 'Business Plan',
    price: 'Contact Us',
    features: ['All Features Included', '24/7 Support', 'Custom Integrations'],
    ctaType: 'contact', 
  },
];


export const blogPosts: BlogPostProps['post'][] = [
  {
    id:1,
    title: "Sample Blog Post",
    subtitle: "This is a subtitle",
    author: {
      name: "John Doe",
      profileImage: "https://example.com/johndoe.jpg",
      bio: "Tech enthusiast and blogger."
    },
    date: "September 1, 2024",
    coverImage:'/next.svg',
    content: "This is the content of the blog post.",
    tags: ["Tech", "JavaScript", "React"],
    readingTime: "5 min",
    likes: 20,
    comments: [
      {
        author: "Jane Smith",
        text: "Great post! Learned a lot.",
        date: "September 2, 2024"
      },
      {
        author: "Bob Brown",
        text: "Thanks for sharing!",
        date: "September 3, 2024"
      },
    ],
  },
  {
    id:2,
    title: "Sample Blog Post",
    subtitle: "This is a subtitle",
    author: {
      name: "John Doe",
      profileImage: "https://example.com/johndoe.jpg",
      bio: "Tech enthusiast and blogger."
    },
    date: "September 1, 2024",
    coverImage:'/next.svg',
    content: "This is the content of the blog post.",
    tags: ["Tech", "JavaScript", "React"],
    readingTime: "5 min",
    likes: 20,
    comments: [
      {
        author: "Jane Smith",
        text: "Great post! Learned a lot.",
        date: "September 2, 2024"
      },
      {
        author: "Bob Brown",
        text: "Thanks for sharing!",
        date: "September 3, 2024"
      },
    ],
  },
  
]
export const eventsData: Event[] = [
  {
    id: '1',
    title: 'Cybersecurity Youth Program',
    description: 'Cyber Gain Center conducted a cybersecurity youth program aimed at empowering students in Arab middle schools.',
    location: 'Dubai, UAE',
    startDate: '2024-09-15',
    endDate: '2024-09-17',
    type: 'Youth Program',
    isActive: true,
    image: '/events-1.jpeg'
  },
  {
    id: '2',
    title: 'Dubai University Cybersecurity Workshop',
    description: 'An interactive workshop held at Dubai University, focusing on the latest cybersecurity trends and best practices.',
    location: 'Dubai, UAE',
    startDate: '2024-10-22',
    endDate: '2024-10-22',
    type: 'University Workshop',
    isActive: true,
    image: '/events-2.jpeg'
  },
  {
    id: '3',
    title: 'GISEC Global Conference',
    description: 'Join industry experts at GISEC for insights into the future of cybersecurity and innovations in the field.',
    location: 'Dubai, UAE',
    startDate: '2024-11-01',
    endDate: '2024-11-03',
    type: 'Conference',
    isActive: true,
    image: '/events-3.jpeg'
  }
];
export const specialties: SpecialtyCardProps[] = [
  { icon: CodeIcon, title: "Red Team", description: "Simulating real-world cyberattacks to test an organization’s security defenses." },
  { icon: TrendingUpIcon, title: "Cloud Security", description: "Protecting cloud environments, data, and applications from cyber threats." },
  { icon: BrushIcon, title: "Penetration Testing", description: "Identifying security vulnerabilities by ethically hacking systems and networks." },
  { icon: StorageIcon, title: "Data Security", description: "Safeguarding sensitive data from unauthorized access, corruption, or theft." },
  { icon: PhoneIphoneIcon, title: "SIEM/SOC-24/7/365", description: "Continuous monitoring and threat detection through a Security Operations Center." },
  { icon: ReceiptIcon, title: "ITaaS", description: "Delivering IT services and infrastructure as a managed solution for businesses." },
  { icon: AccountBalanceWalletIcon, title: "DevSecOps", description: "Integrating security into the software development and operations lifecycle." },
  { icon: LanIcon, title: "Incident Response", description: "Rapidly detecting, containing, and mitigating security breaches." },
];

export const employees: IEmployee[] = [
  { name: 'Ali Zinaty', role: 'Co-Founder & CEO', image: 'Ali Zinaty - CEO.webp' },
  { name: 'Eias Haj Yahya', role: 'Co-Founder & CTO', image: 'Eias - CTO.jpeg' },
  { name: 'Elias Sallom', role: 'Co-Founder & VP R&D', image: 'Elias - VP R&D.jpg' },

];

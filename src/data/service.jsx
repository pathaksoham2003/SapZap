import { MoneySutra, NFT, Somazon } from "../images";

export const Companies = [
  {
    role: "AI Researcher | Software Developer",
    companyName: "Daten & Wissen Pvt. Ltd.",
    start_date: "23 December 2023",
    end_date: "Current",
    location:"Remote - Mumbai",
    projects: [
      {
        name: "AI Face recognition and photo sharing application",
        technologies: ["Flutter", "NodeJS", "Google Drive API", "TensorFlow"],
        implementations: [
          "Developed a responsive UI from Figma designs, integrating deep linking with GoRouter and incorporating toasts and progress indicators, leading to a 20% increase in user engagement and a 15% boost in user retention.",
          "Implemented a comprehensive photo management system, including stream queues for enhanced photo evaluation and backend Node.js API routes for efficient photo saving and retrieval, improving processing speed by 40% and retrieval time by 35%.",
          "Engineered an advanced media detection system, incorporating screenshot detection and QR code generation, which reduced unauthorized content sharing by 25% and increased user interaction by 10%.",
        ],
      },
      {
        name: "Secure Chatting Application",
        technologies: [
          "React Native",
          "Socket",
          "Axios",
          "Django",
          "AES & RSA Encryption",
        ],
        implementations: [
          "Built a real-time messaging system using WebSockets, enabling instant communication with zero downtime and improving user engagement by 30%.",
          "Integrated advanced security features, including master PIN, biometric authentication, and end-to-end encryption with AES and RSA, enhancing data protection and reducing unauthorized access by 40%.",
          "Implemented geofencing with real-time location tracking and screenshot blocking, increasing user privacy and security by 35% while ensuring compliance with region-specific regulations.",
        ],
      },
    ],
  },
  {
    role: "Software Development Engineer",
    companyName: "Nanasaheb Kadam College Of Agriculture",
    start_date: "15 June 2023",
    end_date: "15 September 2023",
    location:"On-site - Chh. Sambhaji Nagar",
    projects: [
      {
        name: "Official College Website",
        technologies: ["HTML", "CSS", "JS","Bootstrap", "PHP","MySQL"],
        implementations: [
          "Integrated image upload and display functionality, allowing seamless faculty profile management and improving website interaction by 25%.",
          "Developed comprehensive pages for the canteen, hostel, and labs, enhancing user navigation and increasing overall site traffic by 30%.",
          "Embedded YouTube video links, enriching the website's content and boosting user engagement by 20%.",
        ],
      },
    ],
  },
];


export const WorkProject = [
  {
    title:"Somazon: Ecommerce full stack",
    hero:Somazon,
    url:"https://major-project-client-wheat.vercel.app/",
    description:"An ecommerce site with the complete filter functionality and payment gateway implementation",

  },
  {
    title:"NFT Marketplace: Transaction for NFTs",
    hero:NFT,
    url:"https://nft-market-place-omega.vercel.app/",
    description:"An ecommerce site with the complete filter functionality and payment gateway implementation",

  },
  {
    title:"Somazon: Ecommerce full stack",
    hero:MoneySutra,
    url:"https://moneysutra.vercel.app/",
    description:"An ecommerce site with the complete filter functionality and payment gateway implementation",

  }
]
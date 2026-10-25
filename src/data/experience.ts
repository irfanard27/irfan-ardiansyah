export type ExperienceItem = {
	id: string;
	company: string;
	role: string;
	period: string;
	location: string;
	type: "full-time" | "freelance" | "part-time" | "contract";
	keyContributions: string[];
	techStack: string[];
	relatedWorks?: string[];
};

export const experiences: ExperienceItem[] = [
	{
		id: "prima-abadi",
		company: "PT Prima Abadi Distribusi",
		role: "IT Application Specialist",
		period: "October 2026 – Present",
		location: "Surabaya, Indonesia",
		type: "full-time",
		keyContributions: [
			"Manage and maintain business applications to ensure smooth operations.",
			"Provide technical support and troubleshoot application issues.",
			"Coordinate system updates, enhancements, and implementation.",
			"Collaborate with users and vendors to improve application performance.",
			"Ensure data accuracy and maintain system documentation.",
		],
		techStack: ["Business Applications", "System Maintenance", "Technical Support"],
	},
	{
		id: "espace",
		company: "Espace Limited",
		role: "Product Engineer - Frontend Focused (Freelance)",
		period: "July 2026 – October 2026",
		location: "Hong Kong (Remote)",
		type: "freelance",
		keyContributions: [
			"Design end-to-end UI/UX experiences for international clients, covering user flows, wireframes, prototypes, and high-fidelity interfaces.",
			"Collaborate directly with clients and distributed stakeholders across different countries to translate business requirements into scalable, production-ready products.",
			"Build AI-powered applications across the entire product lifecycle, from product discovery and UI/UX design to engineering and MVP delivery.",
			"Bridge product design and software engineering to transform ideas into functional, user-focused, and production-ready products.",
			"Lead client-facing product discussions, design iterations, and technical implementation while balancing user experience, business goals, and engineering constraints.",
		],
		techStack: ["React.js", "TypeScript", "UI/UX Design", "AI-powered Applications", "Product Engineering"],
		relatedWorks: ["espace-ai-product"],
	},
	{
		id: "happy-day",
		company: "PT Happy Day Services",
		role: "UI / UX Designer (Freelance)",
		period: "August 2025 – August 2026",
		location: "Bali, Indonesia",
		type: "freelance",
		keyContributions: [
			"Analyzed business requirements and translated user needs into functional product solutions.",
			"Created user journeys, wireframes, and high-fidelity interfaces focused on usability and customer experience.",
			"Designed production-ready interfaces that improved usability and supported engineering implementation.",
			"Collaborated directly with international clients throughout product discovery and delivery.",
		],
		techStack: ["UI/UX Design", "Wireframing", "Prototyping", "Figma"],
	},
	{
		id: "stashworks-lead",
		company: "Stashworks Pte. Ltd.",
		role: "Lead Frontend Engineer",
		period: "October 2023 – February 2026",
		location: "Singapore (Remote)",
		type: "full-time",
		keyContributions: [
			"Led technical initiatives across multiple SaaS platforms, defining scalable architecture and engineering standards to support long-term product growth.",
			"Designed reusable frontend architecture and shared component systems that improved maintainability and accelerated feature development across multiple applications.",
			"Collaborated on API architecture and system integration strategies, ensuring reliable communication between frontend and backend services.",
			"Optimized application performance through architecture improvements, rendering optimization, and efficient client-side data management.",
			"Established engineering best practices through technical design discussions, code reviews, and mentorship, improving software quality across the team.",
		],
		techStack: ["React.js", "TypeScript", "SaaS Architecture", "Component Systems", "Team Leadership"],
		relatedWorks: ["stashworks-component-library", "stashworks-wms"],
	},
	{
		id: "stashworks-senior",
		company: "Stashworks Pte. Ltd.",
		role: "Senior Frontend Engineer",
		period: "October 2021 – October 2023",
		location: "Singapore (Remote)",
		type: "full-time",
		keyContributions: [
			"Reduced application load time by 80% by optimizing bundle size, implementing lazy loading, code splitting, and improving rendering performance.",
			"Accelerated development by 30% through the design and adoption of a reusable component library, enabling faster feature delivery and greater code consistency.",
			"Engineered scalable Warehouse Management System (WMS) applications using React.js and JavaScript within a modular frontend architecture.",
			"Built responsive, accessible, and user-centric interfaces by collaborating closely with product and design teams using Figma.",
			"Developed Flutter mobile applications integrated with warehouse operations and backend services.",
			"Integrated REST and GraphQL APIs while optimizing client-side state management and asynchronous data fetching.",
			"Participated in architecture design, sprint planning, code reviews, and technical discussions to improve software quality and long-term maintainability.",
		],
		techStack: ["React.js", "TypeScript", "GraphQL", "REST API", "Flutter", "Performance Optimization", "WMS"],
		relatedWorks: ["stashworks-component-library", "stashworks-wms"],
	},
	{
		id: "flashcom",
		company: "Flashcom Indonesia",
		role: "Mobile & Web Programming Trainer (Freelance)",
		period: "December 2023 – December 2024",
		location: "Surabaya, Indonesia",
		type: "freelance",
		keyContributions: [
			"Mentored students in software engineering fundamentals, web development, and mobile application development.",
			"Delivered practical programming sessions using real-world software engineering practices.",
			"Guided students through project-based learning and modern development workflows.",
		],
		techStack: ["Web Development", "Mobile Development", "Training", "Mentorship"],
	},
	{
		id: "dnet-frontend",
		company: "PT Dutakom Wibawa Putra (D~NET)",
		role: "Frontend Developer",
		period: "October 2018 – October 2021",
		location: "Surabaya, Indonesia",
		type: "full-time",
		keyContributions: [
			"Developed customer dashboard applications using React.js and JavaScript.",
			"Integrated GraphQL APIs with backend services to deliver responsive user experiences.",
			"Improved application maintainability through reusable components and modular architecture.",
			"Optimized frontend performance and enhanced software quality across multiple projects.",
		],
		techStack: ["React.js", "JavaScript", "GraphQL", "REST API", "Component Architecture"],
		relatedWorks: ["dnet-dashboard"],
	},
	{
		id: "dnet-fullstack",
		company: "PT Dutakom Wibawa Putra (D~NET)",
		role: "Fullstack Developer",
		period: "September 2017 – October 2018",
		location: "Surabaya, Indonesia",
		type: "full-time",
		keyContributions: [
			"Designed and developed ERP modules using Ruby on Rails.",
			"Built RESTful services and integrated business workflows into enterprise systems.",
			"Designed and maintained PostgreSQL and MySQL databases.",
			"Refactored legacy applications to improve scalability, maintainability, and code quality.",
		],
		techStack: ["Ruby on Rails", "PostgreSQL", "MySQL", "REST API", "ERP"],
		relatedWorks: ["dnet-erp"],
	},
	{
		id: "indoartha",
		company: "CV Indoartha",
		role: "Fullstack Developer (Freelance)",
		period: "June 2015 – September 2017",
		location: "Surabaya, Indonesia",
		type: "freelance",
		keyContributions: [
			"Developed a road digitization platform for government agencies to improve infrastructure data management.",
			"Built monitoring systems that streamlined operational reporting and decision-making processes.",
			"Designed software specifications and technical documentation to support long-term maintenance.",
			"Collaborated with stakeholders throughout system development and deployment.",
		],
		techStack: ["Web Development", "GIS", "Government Systems", "Technical Documentation"],
	},
];

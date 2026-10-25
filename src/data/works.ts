export type WorkItem = {
	id: string;
	title: string;
	type: "work" | "freelance" | "confidential";
	role: string;
	description: string;
	impact?: string;
	techStack: string[];
	links?: {
		live?: string;
		demo?: string;
		github?: string;
	};
	relatedExperienceIds?: string[];
	featured?: boolean;
};

export const works: WorkItem[] = [
	{
		id: "stashworks-wms",
		title: "Warehouse Management System (WMS)",
		type: "work",
		role: "Senior/Lead Frontend Engineer",
		description:
			"Scalable WMS platform for warehouse operations with modular frontend architecture. Built responsive, accessible interfaces integrated with warehouse services.",
		impact: "Improved operational workflows and system scalability.",
		techStack: ["React.js", "JavaScript", "TypeScript", "GraphQL", "REST API", "Flutter"],
		relatedExperienceIds: ["stashworks-senior", "stashworks-lead"],
		featured: true,
	},
	{
		id: "stashworks-component-library",
		title: "Reusable Component Library & Design System",
		type: "work",
		role: "Senior/Lead Frontend Engineer",
		description:
			"Shared component system adopted across multiple SaaS applications to enforce consistency and accelerate development.",
		impact: "Accelerated development by 30% and improved code consistency across the team.",
		techStack: ["React.js", "TypeScript", "Component Architecture", "Design System"],
		relatedExperienceIds: ["stashworks-senior", "stashworks-lead"],
		featured: true,
	},
	{
		id: "espace-ai-product",
		title: "AI-Powered Product (Client MVP)",
		type: "freelance",
		role: "Product Engineer - Frontend Focused",
		description:
			"End-to-end product delivery for international client: product discovery, UI/UX design, and engineering MVP built with modern frontend stack.",
		impact: "Delivered production-ready AI-powered MVP from concept to launch.",
		techStack: ["React.js", "TypeScript", "UI/UX", "AI Integration"],
		relatedExperienceIds: ["espace"],
		featured: true,
	},
	{
		id: "dnet-dashboard",
		title: "Customer Dashboard Platform",
		type: "work",
		role: "Frontend Developer",
		description:
			"Customer-facing dashboard applications with GraphQL integration delivering responsive user experiences.",
		impact: "Improved user experience and frontend maintainability.",
		techStack: ["React.js", "JavaScript", "GraphQL", "REST API"],
		relatedExperienceIds: ["dnet-frontend"],
		featured: true,
	},
	{
		id: "dnet-erp",
		title: "ERP Modules",
		type: "work",
		role: "Fullstack Developer",
		description:
			"Enterprise resource planning modules built with Ruby on Rails, with PostgreSQL/MySQL databases and integrated business workflows.",
		impact: "Improved scalability and maintainability through refactoring of legacy applications.",
		techStack: ["Ruby on Rails", "PostgreSQL", "MySQL", "REST API"],
		relatedExperienceIds: ["dnet-fullstack"],
	},
	{
		id: "indoartha-roadmap",
		title: "Road Digitization Platform",
		type: "freelance",
		role: "Fullstack Developer",
		description:
			"Government platform for road digitization and infrastructure data management with monitoring systems for operational reporting.",
		impact: "Streamlined operational reporting and decision-making processes.",
		techStack: ["Web Development", "GIS", "Database Design"],
		relatedExperienceIds: ["indoartha"],
	},
];

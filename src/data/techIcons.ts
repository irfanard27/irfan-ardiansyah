export type TechIcon = {
	icon: string;
	color: string;
};

const simpleIcon = (slug: string, color: string) =>
	`https://cdn.simpleicons.org/${slug}/${color.replace("#", "")}`;

export const techIcons: Record<string, TechIcon> = {
	"React.js": { icon: simpleIcon("react", "#61DAFB"), color: "#61DAFB" },
	TypeScript: { icon: simpleIcon("typescript", "#3178C6"), color: "#3178C6" },
	JavaScript: { icon: simpleIcon("javascript", "#F7DF1E"), color: "#F7DF1E" },
	"Next.js": { icon: simpleIcon("nextdotjs", "#000000"), color: "#000000" },
	Astro: { icon: simpleIcon("astro", "#FF5D01"), color: "#FF5D01" },
	GraphQL: { icon: simpleIcon("graphql", "#E10098"), color: "#E10098" },
	Flutter: { icon: simpleIcon("flutter", "#02569B"), color: "#02569B" },
	Figma: { icon: simpleIcon("figma", "#F24E1E"), color: "#F24E1E" },
	"UI/UX Design": { icon: simpleIcon("figma", "#F24E1E"), color: "#F24E1E" },
	Wireframing: { icon: simpleIcon("figma", "#F24E1E"), color: "#F24E1E" },
	Prototyping: { icon: simpleIcon("figma", "#F24E1E"), color: "#F24E1E" },
	"Ruby on Rails": {
		icon: simpleIcon("rubyonrails", "#CC0000"),
		color: "#CC0000",
	},
	PostgreSQL: {
		icon: simpleIcon("postgresql", "#4169E1"),
		color: "#4169E1",
	},
	MySQL: { icon: simpleIcon("mysql", "#4479A1"), color: "#4479A1" },
	MongoDB: { icon: simpleIcon("mongodb", "#47A248"), color: "#47A248" },
	Redis: { icon: simpleIcon("redis", "#DC382D"), color: "#DC382D" },
	"Node.js": { icon: simpleIcon("nodedotjs", "#339933"), color: "#339933" },
	Docker: { icon: simpleIcon("docker", "#2496ED"), color: "#2496ED" },
	Kubernetes: {
		icon: simpleIcon("kubernetes", "#326CE5"),
		color: "#326CE5",
	},
	GCP: { icon: simpleIcon("googlecloud", "#4285F4"), color: "#4285F4" },
	"Google Cloud": {
		icon: simpleIcon("googlecloud", "#4285F4"),
		color: "#4285F4",
	},
	Python: { icon: simpleIcon("python", "#3776AB"), color: "#3776AB" },
	Go: { icon: simpleIcon("go", "#00ADD8"), color: "#00ADD8" },
	Golang: { icon: simpleIcon("go", "#00ADD8"), color: "#00ADD8" },
	Redux: { icon: simpleIcon("redux", "#764ABC"), color: "#764ABC" },
	"Redux Toolkit": { icon: simpleIcon("redux", "#764ABC"), color: "#764ABC" },
	"GitHub Actions": {
		icon: simpleIcon("githubactions", "#2088FF"),
		color: "#2088FF",
	},
	"Tailwind CSS": {
		icon: simpleIcon("tailwindcss", "#06B6D4"),
		color: "#06B6D4",
	},
	"REST API": { icon: simpleIcon("postman", "#FF6C37"), color: "#FF6C37" },
};

import type { ImageMetadata } from "astro";
import getMyHome from "../assets/img/works/ui-designs/get-myhome.png";
import happyDay from "../assets/img/works/ui-designs/happy-day.png";
import cloutfluence from "../assets/img/works/ui-designs/cloutfluence.png";
import fullcarHistory from "../assets/img/works/ui-designs/fullcar-history.png";
import bookminute from "../assets/img/works/ui-designs/bookminute.png";
import videoAi from "../assets/img/works/ui-designs/video-ai.png";
import photoId from "../assets/img/works/ui-designs/photo-id.png";

export type UIDesignItem = {
	id: string;
	title: string;
	description: string;
	image: ImageMetadata;
};

export const uiDesigns: UIDesignItem[] = [
	{
		id: "get-my-home",
		title: "Get My Home",
		description:
			"A house and property rental platform connecting property owners with potential tenants.",
		image: getMyHome,
	},
	{
		id: "happy-day",
		title: "Happy Day",
		description:
			"An on-demand wellness platform for booking at-home massage and wellness services.",
		image: happyDay,
	},
	{
		id: "cloutfluence",
		title: "Cloutfluence",
		description:
			"A social media growth platform offering services to enhance online presence and engagement.",
		image: cloutfluence,
	},
	{
		id: "fullcar-history",
		title: "Fullcar History",
		description:
			"A vehicle history platform providing comprehensive car reports and database information.",
		image: fullcarHistory,
	},
	{
		id: "bookminutes",
		title: "Bookminutes",
		description:
			"A concierge service platform that simplifies access to personalized assistance and lifestyle services.",
		image: bookminute,
	},
	{
		id: "video-ai",
		title: "Video AI",
		description:
			"An AI-powered platform for generating videos from creative inputs using artificial intelligence.",
		image: videoAi,
	},
	{
		id: "photo-id",
		title: "Photo ID",
		description:
			"An AI-powered photo enhancement tool for creating professional-quality ID and portrait photos.",
		image: photoId,
	},
];

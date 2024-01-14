export type SiteConfig = typeof siteConfig;

export const siteConfig = {
	name: "Ingarö Moppers",
	description: "Idk",
	navItems: [
		{
			label: "Hem",
			href: "/",
		},
		{
			label: "Sånger",
			href: "/songs",
		},
		{
			label: "Äventyr",
			href: "/adventures",
		},
		{
			label: "Om oss",
			href: "/about",
		},
	],
	navMenuItems: [
		{
			label: "Profile",
			href: "/profile",
		},
		{
			label: "Dashboard",
			href: "/dashboard",
		},
		{
			label: "Projects",
			href: "/projects",
		},
		{
			label: "Team",
			href: "/team",
		},
		{
			label: "Calendar",
			href: "/calendar",
		},
		{
			label: "Settings",
			href: "/settings",
		},
		{
			label: "Help & Feedback",
			href: "/help-feedback",
		},
		{
			label: "Logout",
			href: "/logout",
		},
	],
	links: {
		github: "https://github.com/Snoodelz/",
		instagram: "https://www.instagram.com/ingaromoppers/",
		youtube: "https://www.youtube.com/watch?v=wi0FQMmlyzk",
	},
};

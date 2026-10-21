// Get site URL from environment variable, use default value if not set
const SITE_URL = import.meta.env.PUBLIC_SITE_URL || 'https://nordvpn.world';
const INVITE_CODE = import.meta.env.PUBLIC_INVITE_CODE || 'keqgvT5Y';
const REGISTER_URL = import.meta.env.PUBLIC_REGISTER_URL || `https://sahude.gsyvipaff.com/?code=${INVITE_CODE}#/?code=${INVITE_CODE}`;

export const siteConfig = {
	title: "NordVPN — 官方授权全球专线网络",
	brandName: "NordVPN",
	domain: "nordvpn.world",
	author: "NordVPN Official",
	url: SITE_URL,
	mail: "support@nordvpn.world",
	registerUrl: REGISTER_URL,
	inviteCode: INVITE_CODE,
	badge: "官方授权品牌",
	establishedYear: "2020",
	telegram: "https://t.me/nordvpn_world",
	meta: {
		title: "NordVPN 官方授权品牌官网 — 企业级 IEPL/IPLC 专线与 VLESS 高速网络",
		description: "NordVPN（nordvpn.world）品牌官网，自2020年起稳定运营。提供全节点 IEPL/IPLC 企业专线、原生 VLESS 协议、单节点最高 2.5Gbps。覆盖港/台/日/新/美等全球优质原生节点，不限设备，专为跨境电商、TikTok 直播、AI 生产力及 4K/8K 海外流媒体打造。提供自研客户端与第三方订阅无缝导入。",
		keywords: "NordVPN, nordvpn.world, NordVPN官网, 品牌机场, IEPL专线, IPLC专线, VLESS节点, 跨境电商专线, TikTok直播节点, ChatGPT解锁, 原生节点, 机场推荐",
		image: `${SITE_URL}/og.jpg`,
		twitterHandle: "@NordVPNOfficial",
	},
	social: {
		twitter: "https://x.com/NordVPN",
		twitterName: "NordVPN",
		telegram: "https://t.me/nordvpn_world",
		blog: `${SITE_URL}/blog`,
	},
	// Search engine verification placeholders (read from environment variables or configure directly)
	verification: {
		google: import.meta.env.PUBLIC_GOOGLE_SITE_VERIFICATION || "",
		bing: import.meta.env.PUBLIC_BING_SITE_VERIFICATION || "",
		shenma: import.meta.env.PUBLIC_SHENMA_SITE_VERIFICATION || "",
		baidu: import.meta.env.PUBLIC_BAIDU_SITE_VERIFICATION || "",
	},
};

// Footer navigation & links
export const socialLinks = [
	{
		name: 'Telegram',
		url: siteConfig.telegram,
		icon: `<svg class="icon ic-telegram ic-social" viewBox="0 0 24 24" width="20" height="20" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69a.2.2 0 00-.05-.18c-.06-.05-.14-.03-.21-.02-.09.02-1.49.95-4.22 2.79-.4.27-.76.41-1.08.4-.36-.01-1.04-.2-1.55-.37-.63-.2-1.12-.31-1.08-.66.02-.18.27-.36.75-.55 2.92-1.27 4.86-2.11 5.83-2.52 2.77-1.16 3.35-1.36 3.73-1.36.08 0 .27.02.39.12.1.08.13.19.14.27-.01.06.01.24 0 .37z"/></svg>`
	},
	{
		name: 'RSS',
		url: '/rss.xml',
		icon: `<svg class="icon ic-rss ic-social" viewBox="0 0 24 24" width="20" height="20" fill="currentColor"><circle cx="6.18" cy="17.82" r="2.18"/><path d="M4 4.44v2.83c7.03 0 12.73 5.7 12.73 12.73h2.83c0-8.59-6.97-15.56-15.56-15.56zm0 5.66v2.83c3.9 0 7.07 3.17 7.07 7.07h2.83c0-5.47-4.43-9.9-9.9-9.9z"/></svg>`
	},
];

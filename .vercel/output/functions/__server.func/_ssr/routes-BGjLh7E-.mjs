import { r as __toESM } from "../_runtime.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import "./router-Df-EeCzU.mjs";
import { a as Rocket, c as Clock, d as ArrowRight, i as Ticket, l as Calendar, n as Users, o as MapPin, r as TrendingUp, s as Instagram, t as Zap, u as Briefcase } from "../_libs/lucide-react.mjs";
import { t as require_aos } from "../_libs/aos.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-BGjLh7E-.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var import_aos = /* @__PURE__ */ __toESM(require_aos());
var TICKET_URL = "https://www.cofee.life/events/kerala-traders-carnival-2026---marketable-x-the5ers-india/evnt_yOxP1iyocc3820?utm_source=ig&utm_medium=social&utm_content=link_in_bio&fbclid=PAZXh0bgNhZW0CMTEAc3J0YwZhcHBfaWQPNTY3MDY3MzQzMzUyNDI3AAGnw5eHPZfGo2gv28E7AbkoqF_5tAwXyPumof0HMZvi-y6tRPAyekdIDytMtmY_aem_4pN_TLzSm-jX9MtwfvpFqw";
function LoadingScreen({ isLoading }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: `fixed inset-0 z-50 flex flex-col items-center justify-center bg-background transition-all duration-[1200ms] ease-[cubic-bezier(0.85,0,0.15,1)] ${isLoading ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0 pointer-events-none"}`,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "relative flex items-center justify-center",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute h-40 w-40 rounded-full bg-blue/20 blur-3xl animate-pulse-slow" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
				src: "/KTC Logo 1.svg",
				alt: "Loading...",
				className: "relative h-16 md:h-24 w-auto animate-float"
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mt-10 h-1 w-48 bg-border rounded-full overflow-hidden relative",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute top-0 left-0 h-full bg-lime rounded-full animate-[loading_1.5s_ease-in-out_forwards]" })
		})]
	});
}
function Nav() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("header", {
		className: "sticky top-0 z-40 backdrop-blur-md bg-background/70 border-b border-border",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-7xl px-6 py-4 flex items-center justify-between",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
				href: "#top",
				className: "transition-transform hover:scale-105",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: "/KTC Logo 1.svg",
					alt: "Kerala Traders Carnival",
					className: "h-8 md:h-10 w-auto"
				})
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
				href: TICKET_URL,
				target: "_blank",
				rel: "noopener noreferrer",
				className: "inline-flex items-center gap-2 rounded-full bg-lime text-deep px-6 py-2.5 text-sm font-bold hover:-translate-y-1 hover:scale-105 active:scale-95 transition-all shadow-[0_0_20px_-5px_var(--lime)]",
				children: ["Book Tickets ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-4 w-4" })]
			})]
		})
	});
}
function Hero() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		id: "top",
		className: "relative overflow-hidden",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				"aria-hidden": true,
				className: "pointer-events-none absolute -top-40 left-1/2 -translate-x-1/2 h-[600px] w-[1100px] rounded-full blur-3xl opacity-40 animate-pulse-slow",
				style: { background: "radial-gradient(closest-side, var(--blue), transparent 70%)" }
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				"aria-hidden": true,
				className: "absolute inset-0 opacity-[0.07] animate-grid-pan",
				style: {
					backgroundImage: "linear-gradient(var(--cyan) 1px, transparent 1px), linear-gradient(90deg, var(--cyan) 1px, transparent 1px)",
					backgroundSize: "60px 60px",
					maskImage: "radial-gradient(ellipse at center, black 40%, transparent 75%)"
				}
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative mx-auto max-w-7xl px-6 pt-20 pb-20 md:pt-28 md:pb-28",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						"data-aos": "fade-down",
						className: "inline-flex items-center gap-2 rounded-full border border-blue/40 bg-blue-soft px-4 py-1.5 text-xs md:text-sm font-semibold uppercase tracking-[0.1em] md:tracking-[0.2em] text-blue hover:scale-105 transition-transform cursor-default",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TrendingUp, { className: "h-4 w-4" }),
							" Marketable ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-lime mx-0.5",
								children: "x"
							}),
							" The 5ers"
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
						"data-aos": "fade-right",
						"data-aos-delay": "50",
						className: "mt-8 font-black tracking-tight text-5xl sm:text-7xl md:text-8xl leading-[0.9]",
						children: [
							"KERALA",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-lime",
								children: "TRADERS"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
							"CARNIVAL"
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						"data-aos": "fade-left",
						"data-aos-delay": "100",
						className: "mt-8 max-w-2xl text-xl md:text-2xl font-medium text-foreground/90 leading-tight",
						children: ["Kerala's largest offline summit. Stop trading alone. ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-lime font-bold",
							children: "Connect, learn, and get funded."
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-10 grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								"data-aos": "fade-up",
								"data-aos-delay": "150",
								className: "flex flex-col md:flex-row items-start md:items-center gap-3 md:gap-4 rounded-2xl border border-border bg-card/60 backdrop-blur p-4 md:px-5 hover:-translate-y-1 transition-transform",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Calendar, { className: "h-6 w-6 text-cyan md:h-5 md:w-5" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "min-w-0",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "text-[10px] md:text-xs uppercase tracking-widest text-foreground/60",
										children: "Date"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "font-semibold text-sm md:text-base",
										children: "July 5, 2026"
									})]
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								"data-aos": "fade-up",
								"data-aos-delay": "200",
								className: "flex flex-col md:flex-row items-start md:items-center gap-3 md:gap-4 rounded-2xl border border-border bg-card/60 backdrop-blur p-4 md:px-5 hover:-translate-y-1 transition-transform",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Clock, { className: "h-6 w-6 text-cyan md:h-5 md:w-5" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "min-w-0",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "text-[10px] md:text-xs uppercase tracking-widest text-foreground/60",
										children: "Time"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "font-semibold text-sm md:text-base truncate",
										children: "9 AM – 6 PM"
									})]
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
								href: "https://maps.app.goo.gl/nEyr5WS4UzuR6WP86",
								target: "_blank",
								rel: "noopener noreferrer",
								"data-aos": "fade-up",
								"data-aos-delay": "250",
								className: "group flex flex-col md:flex-row items-start md:items-center gap-3 md:gap-4 rounded-2xl border border-border bg-card/60 backdrop-blur p-4 md:px-5 hover:-translate-y-1 hover:border-cyan/50 hover:bg-card/80 transition-all active:scale-[0.98]",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, { className: "h-6 w-6 text-cyan md:h-5 md:w-5 group-hover:scale-110 transition-transform" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "min-w-0",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "text-[10px] md:text-xs uppercase tracking-widest text-foreground/60",
										children: "Venue"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "font-semibold text-sm md:text-base truncate group-hover:text-cyan transition-colors",
										children: "Gokulam Park"
									})]
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
								href: TICKET_URL,
								target: "_blank",
								rel: "noopener noreferrer",
								"data-aos": "fade-up",
								"data-aos-delay": "300",
								className: "group flex flex-col md:flex-row items-start md:items-center gap-3 md:gap-4 rounded-2xl border border-lime/30 bg-lime-soft p-4 md:px-5 hover:-translate-y-1 hover:border-lime/60 hover:bg-lime/20 transition-all active:scale-[0.98]",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Ticket, { className: "h-6 w-6 text-lime md:h-5 md:w-5 group-hover:scale-110 transition-transform" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "min-w-0",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "text-[10px] md:text-xs uppercase tracking-widest text-lime",
										children: "Entry"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "font-bold text-sm md:text-base text-foreground group-hover:text-lime transition-colors",
										children: "₹999/- Onwards"
									})]
								})]
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						"data-aos": "fade-up",
						"data-aos-delay": "350",
						className: "mt-10",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
							href: TICKET_URL,
							target: "_blank",
							rel: "noopener noreferrer",
							className: "group w-full md:w-auto inline-flex justify-center items-center gap-2 rounded-full bg-blue text-white px-8 py-4 text-lg font-bold shadow-[0_15px_50px_-12px_var(--blue)] hover:-translate-y-2 hover:scale-105 active:scale-95 transition-all",
							children: ["Get Your Access Pass", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-6 w-6 group-hover:translate-x-2 transition-transform" })]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-4 text-sm text-foreground/50 md:ml-4 inline-block text-center md:text-left w-full md:w-auto",
							children: "Limited to 500 seats. Selling fast."
						})]
					})
				]
			})
		]
	});
}
function Marquee() {
	const items = [
		{
			text: "KERALA TRADERS CARNIVAL 2026",
			icon: Rocket
		},
		{
			text: "500 TRADERS",
			icon: Users
		},
		{
			text: "GET FUNDED",
			icon: Briefcase
		},
		{
			text: "LIVE PAYOUTS",
			icon: TrendingUp
		},
		{
			text: "MARKETABLE x THE 5ERS",
			icon: Zap
		}
	];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "w-full bg-lime text-deep py-2.5 md:py-4 overflow-hidden flex whitespace-nowrap shadow-[0_0_30px_-10px_var(--lime)] -rotate-1 scale-105 my-8",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "animate-marquee flex items-center w-max",
			children: [...Array(4)].map((_, groupIndex) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "flex items-center font-black text-sm md:text-xl tracking-widest uppercase",
				children: items.map((item, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "mx-4 md:mx-8",
						children: item.text
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(item.icon, {
						className: "h-4 w-4 md:h-6 md:w-6",
						strokeWidth: 3
					})]
				}, i))
			}, groupIndex))
		})
	});
}
function Hooks() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "py-16 md:py-24 bg-deep/50",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-7xl px-6",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "text-center mb-12 md:mb-16",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
					"data-aos": "zoom-in",
					className: "font-black tracking-tight text-3xl md:text-5xl",
					children: ["Why You ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-lime",
						children: "Need To Be Here"
					})]
				})
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid md:grid-cols-3 gap-6 overflow-hidden py-4",
				children: [
					{
						icon: Briefcase,
						title: "Unlock $4M Capital",
						desc: "Meet the 5ers prop firm team directly. Learn exactly how to clear challenges and trade institutional money risk-free.",
						color: "lime"
					},
					{
						icon: Users,
						title: "Network with 500+",
						desc: "Connect with Kerala's top active traders, fund managers, and the Marketable community under one roof.",
						color: "blue"
					},
					{
						icon: Zap,
						title: "Real Strategies",
						desc: "Expert panels on tax, compliance, wealth building, and trading technology. No fluff, just actionable insights.",
						color: "cyan"
					}
				].map((h, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					"data-aos": i === 0 ? "fade-right" : i === 1 ? "fade-up" : "fade-left",
					"data-aos-delay": i * 100,
					className: `group rounded-3xl border border-border bg-card/40 backdrop-blur p-8 hover:-translate-y-2 transition-all hover:border-${h.color}/50`,
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: `grid place-items-center h-16 w-16 rounded-2xl bg-${h.color}/10 text-${h.color} mb-6 group-hover:scale-110 transition-transform ${i % 2 === 0 ? "animate-float" : "animate-float-delayed"}`,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(h.icon, { className: "h-8 w-8" })
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "text-2xl font-bold mb-3",
							children: h.title
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-foreground/70 leading-relaxed text-lg",
							children: h.desc
						})
					]
				}, i))
			})]
		})
	});
}
function FinalCTA() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		id: "register",
		className: "py-16 md:py-24 bg-deep border-t border-border relative overflow-hidden",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				"aria-hidden": true,
				className: "pointer-events-none absolute top-10 left-10 h-64 w-64 rounded-full bg-blue/10 blur-3xl animate-float"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				"aria-hidden": true,
				className: "pointer-events-none absolute bottom-10 right-10 h-64 w-64 rounded-full bg-lime/10 blur-3xl animate-float-delayed"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-lime/5" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				"data-aos": "zoom-in",
				className: "relative mx-auto max-w-3xl px-6 text-center",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "animate-float inline-block",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Rocket, { className: "h-12 w-12 text-lime mx-auto mb-6" })
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
						className: "font-black tracking-tight text-3xl md:text-5xl leading-tight",
						children: [
							"Don't Miss ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", { className: "md:hidden" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-lime",
								children: "The Event of 2026."
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-4 text-lg md:text-xl text-foreground/75 font-medium",
						children: "1 Full Day. 500 Traders. Infinite Opportunities."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-8 md:mt-10",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
							href: TICKET_URL,
							target: "_blank",
							rel: "noopener noreferrer",
							className: "group w-full md:w-auto inline-flex justify-center items-center gap-2 rounded-full bg-lime text-deep px-8 py-4 text-lg font-bold shadow-[0_15px_40px_-12px_var(--lime)] hover:-translate-y-2 hover:scale-105 active:scale-95 transition-all uppercase tracking-wide",
							children: ["Claim Your Ticket Now", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-5 w-5 group-hover:translate-x-2 transition-transform" })]
						})
					})
				]
			})
		]
	});
}
function Footer() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("footer", {
		className: "border-t border-border py-10",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-7xl px-6 flex flex-col items-center gap-6",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-wrap justify-center items-center gap-6",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
						href: "https://www.instagram.com/keralatraderscarnival/",
						target: "_blank",
						rel: "noopener noreferrer",
						className: "flex items-center gap-2 text-foreground/50 hover:text-cyan transition-colors",
						"aria-label": "KTC Instagram",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Instagram, { className: "h-5 w-5" }),
							" ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-xs font-semibold tracking-wider uppercase",
								children: "Carnival"
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
						href: "https://www.instagram.com/themarketable.in/?hl=en",
						target: "_blank",
						rel: "noopener noreferrer",
						className: "flex items-center gap-2 text-foreground/50 hover:text-blue transition-colors",
						"aria-label": "Marketable Instagram",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Instagram, { className: "h-5 w-5" }),
							" ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-xs font-semibold tracking-wider uppercase",
								children: "Marketable"
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
						href: "https://www.instagram.com/the5ersindia/",
						target: "_blank",
						rel: "noopener noreferrer",
						className: "flex items-center gap-2 text-foreground/50 hover:text-lime transition-colors",
						"aria-label": "The 5ers India Instagram",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Instagram, { className: "h-5 w-5" }),
							" ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-xs font-semibold tracking-wider uppercase",
								children: "The 5ers"
							})
						]
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "text-sm text-foreground/50 text-center",
				children: [
					"Hosted by ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: "https://www.instagram.com/themarketable.in/?hl=en",
						target: "_blank",
						rel: "noopener noreferrer",
						className: "font-bold text-foreground/80 hover:text-blue transition-colors",
						children: "Marketable"
					}),
					" · Presented by ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: "https://the5ers.com/",
						target: "_blank",
						rel: "noopener noreferrer",
						className: "font-bold text-lime hover:text-lime/80 transition-colors",
						children: "The 5ers"
					})
				]
			})]
		})
	});
}
function Landing() {
	const [isLoading, setIsLoading] = (0, import_react.useState)(true);
	(0, import_react.useEffect)(() => {
		const timer = setTimeout(() => {
			setIsLoading(false);
		}, 1500);
		return () => clearTimeout(timer);
	}, []);
	(0, import_react.useEffect)(() => {
		if (!isLoading) {
			import_aos.default.init({
				duration: 800,
				once: true,
				easing: "ease-out-cubic",
				offset: 50
			});
			setTimeout(() => import_aos.default.refresh(), 100);
		}
	}, [isLoading]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-h-screen overflow-x-hidden",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoadingScreen, { isLoading }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Nav, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Hero, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Marquee, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Hooks, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FinalCTA, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Footer, {})
		]
	});
}
//#endregion
export { Landing as component };

// AUTO-GENERATED from Stitch — DO NOT modify layout or CSS
// Screen: Pipeline Board - Runtime Ping Rootfix
// 
// AGENT INSTRUCTIONS:
// 1. DO NOT change className values or layout structure
// 2. Add useState for dynamic values (replace hardcoded text)
// 3. Wire interactive controls through the typed actions prop
// 4. Replace placeholder data with props/state

import { ArrowUpDown, BarChart3, Bell, CheckCircle2, ChevronDown, CircleUserRound, Ellipsis, Headphones, Kanban, Lightbulb, ListFilter, Menu, Pencil, Plus, Search, Settings, Terminal, TriangleAlert } from "lucide-react";


export type PipelineBoardRuntimePingRootfixActionId = "support-docs-1" | "menu-2" | "notifications-3" | "account-circle-4" | "create-record-5" | "filter-6" | "sort-7" | "more-horiz-8" | "edit-9" | "more-horiz-10" | "edit-11" | "more-horiz-12" | "edit-13" | "more-horiz-14" | "edit-15" | "more-horiz-16" | "record-operations-1" | "pipeline-board-2" | "insights-3" | "settings-4" | "system-logs-5";

export interface PipelineBoardRuntimePingRootfixProps {
  actions?: Partial<Record<PipelineBoardRuntimePingRootfixActionId, () => void>>;

}

export function PipelineBoardRuntimePingRootfix({ actions }: PipelineBoardRuntimePingRootfixProps) {
  return (
    <>
      {/* SideNavBar */}
      <aside className="hidden md:flex flex-col h-screen fixed left-0 top-0 w-[240px] z-40 bg-inverse-surface dark:bg-surface-container-lowest border-r border-outline-variant dark:border-on-surface-variant flex-shrink-0">
      <div className="p-md flex flex-col gap-sm">
      <div className="flex items-center gap-sm mb-lg">
      <img className="w-8 h-8 rounded-full object-cover border border-outline-variant" data-alt="A small, professional corporate avatar of a system operator. Close up face, neutral lighting, modern tech office background. The avatar is circular and fits perfectly as a profile picture in a dense UI." src="https://lh3.googleusercontent.com/aida-public/AB6AXuDKbFYqhEhGom49IlH5lwvluj3oipDXwouNS9QwptvX2oXWhd140JUZUldJm1lCRi9C9eSZAk4_bwR8Xj8upggfNyRH-orwYa52OeTHQ6BfxpyhSMzz2WBMfX5bw4qkSCcYAbhbcP-GdFUo4WNHFJLPijqxygftyrsYnqUlXLLoGk6Oc9zxgZuLttI2kqdUnxjkZg2-OtG4DCKkRcr9pSmjff_l0aVy27UO7OnOfVCCAWIu0CwfuULrE_Ro8ibl0tsepPr5OAflgT4" />
      <div>
      <h2 className="font-headline-sm text-headline-sm text-on-primary">System Operator</h2>
      <p className="font-label-xs text-label-xs text-on-surface-variant dark:text-outline-variant">Rootfix Admin</p>
      </div>
      </div>
      <button className="w-full bg-primary text-on-primary font-body-sm text-body-sm py-sm px-md rounded flex items-center justify-center gap-xs hover:bg-surface-tint transition-colors" type="button" data-action-id="support-docs-1" onClick={actions?.["support-docs-1"]}>
      <Headphones className="text-[16px]" aria-hidden={true} focusable="false" />
                      Support Docs
                  </button>
      </div>
      <nav className="flex-1 overflow-y-auto py-sm px-xs space-y-xs">
      <a className="flex items-center gap-sm py-sm px-md mx-2 rounded-lg text-on-surface-variant dark:text-outline-variant hover:bg-on-secondary-fixed-variant dark:hover:bg-surface-container-high transition-colors cursor-pointer transition-colors duration-150 font-label-xs text-label-xs" href="#" data-action-id="record-operations-1" onClick={(event) => { event.preventDefault(); actions?.["record-operations-1"]?.(); }}>
      <BarChart3 className="text-[18px]" aria-hidden={true} focusable="false" />
      <span>Record Operations</span>
      </a>
      <a className="flex items-center gap-sm py-sm px-md mx-2 rounded-lg bg-primary-container text-on-primary-container transition-colors cursor-pointer transition-colors duration-150 font-label-xs text-label-xs" href="#" data-action-id="pipeline-board-2" onClick={(event) => { event.preventDefault(); actions?.["pipeline-board-2"]?.(); }}>
      <Kanban className="text-[18px]" aria-hidden={true} focusable="false" />
      <span>Pipeline Board</span>
      </a>
      <a className="flex items-center gap-sm py-sm px-md mx-2 rounded-lg text-on-surface-variant dark:text-outline-variant hover:bg-on-secondary-fixed-variant dark:hover:bg-surface-container-high transition-colors cursor-pointer transition-colors duration-150 font-label-xs text-label-xs" href="#" data-action-id="insights-3" onClick={(event) => { event.preventDefault(); actions?.["insights-3"]?.(); }}>
      <Lightbulb className="text-[18px]" aria-hidden={true} focusable="false" />
      <span>Insights</span>
      </a>
      </nav>
      <div className="p-xs mt-auto space-y-xs border-t border-outline-variant dark:border-on-surface-variant py-sm">
      <a className="flex items-center gap-sm py-sm px-md mx-2 rounded-lg text-on-surface-variant dark:text-outline-variant hover:bg-on-secondary-fixed-variant dark:hover:bg-surface-container-high transition-colors cursor-pointer transition-colors duration-150 font-label-xs text-label-xs" href="#" data-action-id="settings-4" onClick={(event) => { event.preventDefault(); actions?.["settings-4"]?.(); }}>
      <Settings className="text-[18px]" aria-hidden={true} focusable="false" />
      <span>Settings</span>
      </a>
      <a className="flex items-center gap-sm py-sm px-md mx-2 rounded-lg text-on-surface-variant dark:text-outline-variant hover:bg-on-secondary-fixed-variant dark:hover:bg-surface-container-high transition-colors cursor-pointer transition-colors duration-150 font-label-xs text-label-xs" href="#" data-action-id="system-logs-5" onClick={(event) => { event.preventDefault(); actions?.["system-logs-5"]?.(); }}>
      <Terminal className="text-[18px]" aria-hidden={true} focusable="false" />
      <span>System Logs</span>
      </a>
      </div>
      </aside>
      {/* Main Content Area */}
      <div className="flex-1 flex flex-col md:ml-[240px] w-full min-w-0 bg-surface dark:bg-inverse-surface">
      {/* TopNavBar */}
      <header className="flex justify-between items-center w-full px-lg py-sm sticky top-0 z-50 bg-surface-container-lowest dark:bg-inverse-surface border-b border-outline-variant dark:border-on-surface-variant">
      <div className="flex items-center gap-md">
      {/* Mobile Menu Button */}
      <button className="md:hidden text-on-surface-variant hover:bg-surface-container-low p-xs rounded" type="button" aria-label="Menu" data-action-id="menu-2" onClick={actions?.["menu-2"]}>
      <Menu aria-hidden={true} focusable="false" />
      </button>
      <div className="font-headline-sm text-headline-sm font-bold text-on-surface dark:text-inverse-on-surface">Runtime Ping Rootfix</div>
      <div className="hidden md:flex relative ml-lg">
      <Search className="absolute left-sm top-1/2 -translate-y-1/2 text-outline text-[16px]" aria-hidden={true} focusable="false" />
      <input className="pl-xl pr-sm py-xs w-64 bg-surface dark:bg-surface-container-lowest border border-outline-variant dark:border-outline rounded font-body-sm text-body-sm text-on-surface dark:text-on-primary-container focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary placeholder:text-outline transition-shadow" placeholder="Search board..." type="text" />
      </div>
      </div>
      <div className="flex items-center gap-sm">
      <button className="p-xs text-on-surface-variant dark:text-outline hover:bg-surface-container-low dark:hover:bg-on-secondary-fixed-variant transition-colors rounded cursor-pointer active:scale-95 transition-transform" type="button" aria-label="Notifications" data-action-id="notifications-3" onClick={actions?.["notifications-3"]}>
      <Bell className="text-[20px]" aria-hidden={true} focusable="false" />
      </button>
      <button className="p-xs text-on-surface-variant dark:text-outline hover:bg-surface-container-low dark:hover:bg-on-secondary-fixed-variant transition-colors rounded cursor-pointer active:scale-95 transition-transform" type="button" aria-label="Account Circle" data-action-id="account-circle-4" onClick={actions?.["account-circle-4"]}>
      <CircleUserRound className="text-[20px]" aria-hidden={true} focusable="false" />
      </button>
      <button className="ml-sm bg-primary text-on-primary font-label-xs text-label-xs py-xs px-sm rounded flex items-center gap-xs hover:bg-surface-tint transition-colors border border-transparent cursor-pointer active:scale-95 transition-transform" type="button" data-action-id="create-record-5" onClick={actions?.["create-record-5"]}>
      <Plus className="text-[16px]" aria-hidden={true} focusable="false" />
                          Create Record
                      </button>
      </div>
      </header>
      {/* Board Toolbar */}
      <div className="px-lg py-sm border-b border-outline-variant dark:border-on-surface-variant bg-surface-bright dark:bg-inverse-surface flex justify-between items-center flex-shrink-0">
      <div className="flex items-center gap-sm">
      <span className="font-headline-sm text-headline-sm text-on-surface dark:text-on-primary-container">Pipeline Board</span>
      <span className="px-2 py-[2px] bg-surface-container-high dark:bg-surface-container rounded-full text-on-surface-variant dark:text-on-surface font-label-xs text-label-xs">14 Records</span>
      </div>
      {/* Mobile Search (Visible only on small screens) */}
      <div className="md:hidden flex relative w-full max-w-xs ml-sm">
      <Search className="absolute left-sm top-1/2 -translate-y-1/2 text-outline text-[16px]" aria-hidden={true} focusable="false" />
      <input className="pl-xl pr-sm py-xs w-full bg-surface dark:bg-surface-container-lowest border border-outline-variant dark:border-outline rounded font-body-sm text-body-sm text-on-surface dark:text-on-primary-container focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary placeholder:text-outline transition-shadow" placeholder="Search board..." type="text" />
      </div>
      <div className="hidden md:flex items-center gap-sm">
      <button className="flex items-center gap-xs text-on-surface-variant dark:text-outline text-label-xs font-label-xs px-sm py-xs hover:bg-surface-container-low dark:hover:bg-surface-container-highest rounded transition-colors border border-outline-variant dark:border-outline" type="button" data-action-id="filter-6" onClick={actions?.["filter-6"]}>
      <ListFilter className="text-[16px]" aria-hidden={true} focusable="false" />
                          Filter
                       </button>
      <button className="flex items-center gap-xs text-on-surface-variant dark:text-outline text-label-xs font-label-xs px-sm py-xs hover:bg-surface-container-low dark:hover:bg-surface-container-highest rounded transition-colors border border-outline-variant dark:border-outline" type="button" data-action-id="sort-7" onClick={actions?.["sort-7"]}>
      <ArrowUpDown className="text-[16px]" aria-hidden={true} focusable="false" />
                          Sort
                       </button>
      </div>
      </div>
      {/* Kanban Board Area */}
      <div className="flex-1 overflow-x-auto overflow-y-hidden kanban-scroll p-md bg-surface-container-lowest dark:bg-[#1a2636]">
      <div className="flex gap-md h-full min-w-max pb-sm">
      {/* Column: Backlog */}
      <div className="w-[300px] flex flex-col h-full bg-surface-bright dark:bg-inverse-surface rounded-lg border border-outline-variant dark:border-on-surface-variant flex-shrink-0">
      <div className="p-sm flex justify-between items-center border-b border-outline-variant dark:border-on-surface-variant bg-surface-container-lowest dark:bg-surface-container-lowest rounded-t-lg">
      <div className="flex items-center gap-xs">
      <span className="w-2 h-2 rounded-full bg-outline"></span>
      <h3 className="font-label-xs text-label-xs text-on-surface dark:text-on-primary-container uppercase tracking-wider">Backlog</h3>
      <span className="ml-xs text-outline dark:text-outline-variant font-code-md text-code-md">3</span>
      </div>
      <button className="text-on-surface-variant hover:text-on-surface dark:hover:text-on-primary-container" type="button" aria-label="More Horiz" data-action-id="more-horiz-8" onClick={actions?.["more-horiz-8"]}><Ellipsis className="text-[16px]" aria-hidden={true} focusable="false" /></button>
      </div>
      <div className="flex-1 overflow-y-auto p-xs space-y-xs kanban-scroll">
      {/* Card 1 */}
      <div className="bg-surface-container-lowest dark:bg-surface-container-lowest p-sm rounded border border-outline-variant dark:border-outline cursor-grab hover:shadow-sm hover:border-outline transition-colors group relative">
      <div className="flex justify-between items-start mb-xs">
      <span className="font-code-md text-code-md text-primary dark:text-primary-fixed-dim">REC-8902</span>
      <div className="opacity-0 group-hover:opacity-100 transition-opacity flex gap-1 bg-surface-container-lowest dark:bg-surface-container-lowest rounded shadow-sm border border-outline-variant dark:border-outline absolute top-sm right-sm z-10">
      <button className="p-1 hover:bg-surface-container-low dark:hover:bg-surface-container-highest rounded text-on-surface-variant" title="Edit" type="button" data-action-id="edit-9" onClick={actions?.["edit-9"]}><Pencil className="text-[14px]" aria-hidden={true} focusable="false" /></button>
      </div>
      </div>
      <h4 className="font-body-md text-body-md font-semibold text-on-surface dark:text-on-primary-container mb-sm leading-tight">Implement rate limiting middleware</h4>
      <div className="flex items-center justify-between mt-sm pt-xs border-t border-outline-variant dark:border-on-surface-variant">
      <div className="flex items-center gap-xs">
      <img className="w-5 h-5 rounded-full object-cover border border-outline-variant" data-alt="Small circular avatar of a software engineer, male, glasses, professional studio lighting, dark background, suitable for a dense data grid." src="https://lh3.googleusercontent.com/aida-public/AB6AXuANqF3Fxm0lXXIXBmOOlE7KkUlnbhyA6iVqAQdh5BDD3fI61nWJSL3-M2x90std6Sa24ov1TVjgMXmRMEPIZ1dbLrGD3hrUINVojg_5soYjFBOJPD17UOAyvHGHOH5Sh6BydF5CEqypW8v_McrkaosBfHs1rJfOHS8XjJOyj58uPjYJ5Mp0UKzpKWRYvuGptxy75uxBEexs7AO6CLz3AFAGxpNllhLaJ4k0u08gygVbEvbYUy9hKE0a2l4bjt0CM4ToUqsMqOPjXgc" />
      <span className="font-label-xs text-label-xs text-on-surface-variant dark:text-outline">12h ago</span>
      </div>
      <div className="relative">
      <select className="appearance-none bg-transparent border-none text-label-xs font-label-xs text-on-surface-variant dark:text-outline py-0 pl-0 pr-4 focus:ring-0 cursor-pointer">
      <option selected={true} value="backlog">Backlog</option>
      <option value="processing">Processing</option>
      </select>
      <ChevronDown className="absolute right-0 top-1/2 -translate-y-1/2 text-[12px] pointer-events-none text-on-surface-variant" aria-hidden={true} focusable="false" />
      </div>
      </div>
      </div>
      </div>
      </div>
      {/* Column: Processing */}
      <div className="w-[300px] flex flex-col h-full bg-surface-bright dark:bg-inverse-surface rounded-lg border border-outline-variant dark:border-on-surface-variant flex-shrink-0">
      <div className="p-sm flex justify-between items-center border-b border-outline-variant dark:border-on-surface-variant bg-surface-container-lowest dark:bg-surface-container-lowest rounded-t-lg">
      <div className="flex items-center gap-xs">
      <span className="w-2 h-2 rounded-full bg-primary"></span>
      <h3 className="font-label-xs text-label-xs text-on-surface dark:text-on-primary-container uppercase tracking-wider">Processing</h3>
      <span className="ml-xs text-outline dark:text-outline-variant font-code-md text-code-md">2</span>
      </div>
      <button className="text-on-surface-variant hover:text-on-surface" type="button" aria-label="More Horiz" data-action-id="more-horiz-10" onClick={actions?.["more-horiz-10"]}><Ellipsis className="text-[16px]" aria-hidden={true} focusable="false" /></button>
      </div>
      <div className="flex-1 overflow-y-auto p-xs space-y-xs kanban-scroll">
      {/* Card 1 */}
      <div className="bg-surface-container-lowest dark:bg-surface-container-lowest p-sm rounded border border-outline-variant dark:border-outline cursor-grab hover:shadow-sm hover:border-outline transition-colors group relative">
      <div className="flex justify-between items-start mb-xs">
      <span className="font-code-md text-code-md text-primary dark:text-primary-fixed-dim">REC-8895</span>
      <div className="opacity-0 group-hover:opacity-100 transition-opacity flex gap-1 bg-surface-container-lowest dark:bg-surface-container-lowest rounded shadow-sm border border-outline-variant dark:border-outline absolute top-sm right-sm z-10">
      <button className="p-1 hover:bg-surface-container-low dark:hover:bg-surface-container-highest rounded text-on-surface-variant" title="Edit" type="button" data-action-id="edit-11" onClick={actions?.["edit-11"]}><Pencil className="text-[14px]" aria-hidden={true} focusable="false" /></button>
      </div>
      </div>
      <h4 className="font-body-md text-body-md font-semibold text-on-surface dark:text-on-primary-container mb-sm leading-tight">Database migration script optimization</h4>
      <div className="flex items-center justify-between mt-sm pt-xs border-t border-outline-variant dark:border-on-surface-variant">
      <div className="flex items-center gap-xs">
      <img className="w-5 h-5 rounded-full object-cover border border-outline-variant" data-alt="Small circular avatar of a female data scientist, neutral expression, soft lighting, abstract blue background, suitable for a dense data grid." src="https://lh3.googleusercontent.com/aida-public/AB6AXuClL2d_b7C7g9SUmBIpoEvH7APWq2KwrlJt9XKO6TekuY4VZnehFOAyLEdo_Jogm7lcEMU_74hG1VRWh5B0J6AuFasIu4KM9rFxNl9F6sSGIJy11rRcbkS8YuXuaDdNuOtDFsqGBpm3JfsGc6DaSEiBTYerWSQKQhwWhJpFQe8XSxkJlyxKioN_T61xJUxOO7ct3mBZnHNR5Nav0Bvvfzp7s0ONtqbJNhF0xoqZNG3epQplVWXGl6Mjkccbcy67ClyKvDGlLrTNPEI" />
      <span className="font-label-xs text-label-xs text-on-surface-variant dark:text-outline">2h ago</span>
      </div>
      <div className="relative">
      <select className="appearance-none bg-transparent border-none text-label-xs font-label-xs text-primary dark:text-primary-fixed-dim py-0 pl-0 pr-4 focus:ring-0 cursor-pointer">
      <option selected={true} value="processing">Processing</option>
      <option value="verification">Verification</option>
      </select>
      <ChevronDown className="absolute right-0 top-1/2 -translate-y-1/2 text-[12px] pointer-events-none text-primary" aria-hidden={true} focusable="false" />
      </div>
      </div>
      </div>
      </div>
      </div>
      {/* Column: Verification */}
      <div className="w-[300px] flex flex-col h-full bg-surface-bright dark:bg-inverse-surface rounded-lg border border-outline-variant dark:border-on-surface-variant flex-shrink-0">
      <div className="p-sm flex justify-between items-center border-b border-outline-variant dark:border-on-surface-variant bg-surface-container-lowest dark:bg-surface-container-lowest rounded-t-lg">
      <div className="flex items-center gap-xs">
      <span className="w-2 h-2 rounded-full bg-secondary-fixed"></span>
      <h3 className="font-label-xs text-label-xs text-on-surface dark:text-on-primary-container uppercase tracking-wider">Verification</h3>
      <span className="ml-xs text-outline dark:text-outline-variant font-code-md text-code-md">1</span>
      </div>
      <button className="text-on-surface-variant hover:text-on-surface" type="button" aria-label="More Horiz" data-action-id="more-horiz-12" onClick={actions?.["more-horiz-12"]}><Ellipsis className="text-[16px]" aria-hidden={true} focusable="false" /></button>
      </div>
      <div className="flex-1 overflow-y-auto p-xs space-y-xs kanban-scroll">
      {/* Card 1 (Blocked) */}
      <div className="bg-surface-container-lowest dark:bg-surface-container-lowest p-sm rounded border-2 border-error-container dark:border-error-container/50 cursor-grab hover:shadow-sm transition-colors group relative">
      <div className="flex justify-between items-start mb-xs">
      <span className="font-code-md text-code-md text-primary dark:text-primary-fixed-dim">REC-8888</span>
      <div className="opacity-0 group-hover:opacity-100 transition-opacity flex gap-1 bg-surface-container-lowest dark:bg-surface-container-lowest rounded shadow-sm border border-outline-variant dark:border-outline absolute top-sm right-sm z-10">
      <button className="p-1 hover:bg-surface-container-low dark:hover:bg-surface-container-highest rounded text-on-surface-variant" title="Edit" type="button" data-action-id="edit-13" onClick={actions?.["edit-13"]}><Pencil className="text-[14px]" aria-hidden={true} focusable="false" /></button>
      </div>
      </div>
      <h4 className="font-body-md text-body-md font-semibold text-on-surface dark:text-on-primary-container mb-sm leading-tight">Update API documentation for v2.1 endpoints</h4>
      <div className="flex items-center gap-xs mb-sm bg-error-container/20 text-on-error-container text-xs px-2 py-1 rounded w-fit border border-error/20">
      <TriangleAlert className="text-[14px]" aria-hidden={true} focusable="false" />
      <span className="font-label-xs">Blocked: Missing dependencies</span>
      </div>
      <div className="flex items-center justify-between mt-sm pt-xs border-t border-outline-variant dark:border-on-surface-variant">
      <div className="flex items-center gap-xs">
      <div className="w-5 h-5 rounded-full bg-secondary-container flex items-center justify-center text-on-secondary-container font-label-xs text-[9px] border border-outline-variant">JD</div>
      <span className="font-label-xs text-label-xs text-error">Stuck 18h</span>
      </div>
      <div className="relative">
      <select className="appearance-none bg-transparent border-none text-label-xs font-label-xs text-secondary dark:text-secondary-fixed-dim py-0 pl-0 pr-4 focus:ring-0 cursor-pointer">
      <option selected={true} value="verification">Verification</option>
      <option value="failure">Failure</option>
      </select>
      <ChevronDown className="absolute right-0 top-1/2 -translate-y-1/2 text-[12px] pointer-events-none text-secondary" aria-hidden={true} focusable="false" />
      </div>
      </div>
      </div>
      </div>
      </div>
      {/* Column: Failure */}
      <div className="w-[300px] flex flex-col h-full bg-surface-bright dark:bg-inverse-surface rounded-lg border border-error-container/30 dark:border-error-container/20 flex-shrink-0 bg-error-container/5 dark:bg-error-container/5">
      <div className="p-sm flex justify-between items-center border-b border-error-container/30 dark:border-error-container/20 bg-surface-container-lowest dark:bg-surface-container-lowest rounded-t-lg">
      <div className="flex items-center gap-xs">
      <span className="w-2 h-2 rounded-full bg-error"></span>
      <h3 className="font-label-xs text-label-xs text-error uppercase tracking-wider">Failure</h3>
      <span className="ml-xs text-error font-code-md text-code-md">1</span>
      </div>
      <button className="text-on-surface-variant hover:text-on-surface" type="button" aria-label="More Horiz" data-action-id="more-horiz-14" onClick={actions?.["more-horiz-14"]}><Ellipsis className="text-[16px]" aria-hidden={true} focusable="false" /></button>
      </div>
      <div className="flex-1 overflow-y-auto p-xs space-y-xs kanban-scroll">
      {/* Card 1 (Failed) */}
      <div className="bg-surface-container-lowest dark:bg-surface-container-lowest p-sm rounded border border-error/50 cursor-grab hover:shadow-sm transition-colors group relative">
      <div className="flex justify-between items-start mb-xs">
      <span className="font-code-md text-code-md text-error">REC-8870</span>
      <div className="opacity-0 group-hover:opacity-100 transition-opacity flex gap-1 bg-surface-container-lowest dark:bg-surface-container-lowest rounded shadow-sm border border-outline-variant dark:border-outline absolute top-sm right-sm z-10">
      <button className="p-1 hover:bg-surface-container-low dark:hover:bg-surface-container-highest rounded text-on-surface-variant" title="Edit" type="button" data-action-id="edit-15" onClick={actions?.["edit-15"]}><Pencil className="text-[14px]" aria-hidden={true} focusable="false" /></button>
      </div>
      </div>
      <h4 className="font-body-md text-body-md font-semibold text-on-surface dark:text-on-primary-container mb-sm leading-tight">Resolve memory leak in worker node #4</h4>
      <div className="flex items-center justify-between mt-sm pt-xs border-t border-outline-variant dark:border-on-surface-variant">
      <div className="flex items-center gap-xs">
      <div className="w-5 h-5 rounded-full bg-surface-variant flex items-center justify-center text-on-surface font-label-xs text-[9px] border border-outline-variant">SYS</div>
      <span className="font-label-xs text-label-xs text-error">2d ago</span>
      </div>
      <div className="relative">
      <select className="appearance-none bg-transparent border-none text-label-xs font-label-xs text-error py-0 pl-0 pr-4 focus:ring-0 cursor-pointer">
      <option selected={true} value="failure">Failure</option>
      <option value="processing">Restart</option>
      </select>
      <ChevronDown className="absolute right-0 top-1/2 -translate-y-1/2 text-[12px] pointer-events-none text-error" aria-hidden={true} focusable="false" />
      </div>
      </div>
      </div>
      </div>
      </div>
      {/* Column: Deployed */}
      <div className="w-[300px] flex flex-col h-full bg-surface-bright dark:bg-inverse-surface rounded-lg border border-outline-variant dark:border-on-surface-variant flex-shrink-0 opacity-80">
      <div className="p-sm flex justify-between items-center border-b border-outline-variant dark:border-on-surface-variant bg-surface-container-lowest dark:bg-surface-container-lowest rounded-t-lg">
      <div className="flex items-center gap-xs">
      <span className="w-2 h-2 rounded-full bg-tertiary"></span>
      <h3 className="font-label-xs text-label-xs text-on-surface dark:text-on-primary-container uppercase tracking-wider">Deployed</h3>
      <span className="ml-xs text-outline dark:text-outline-variant font-code-md text-code-md">7</span>
      </div>
      <button className="text-on-surface-variant hover:text-on-surface" type="button" aria-label="More Horiz" data-action-id="more-horiz-16" onClick={actions?.["more-horiz-16"]}><Ellipsis className="text-[16px]" aria-hidden={true} focusable="false" /></button>
      </div>
      <div className="flex-1 overflow-y-auto p-xs space-y-xs kanban-scroll">
      {/* Card 1 */}
      <div className="bg-surface-container-lowest dark:bg-surface-container-lowest p-sm rounded border border-outline-variant dark:border-outline cursor-default hover:border-outline transition-colors group relative opacity-70">
      <div className="flex justify-between items-start mb-xs">
      <span className="font-code-md text-code-md text-tertiary">REC-8865</span>
      <CheckCircle2 className="text-tertiary text-[16px]" aria-hidden={true} focusable="false" />
      </div>
      <h4 className="font-body-md text-body-md text-on-surface dark:text-on-primary-container mb-sm leading-tight line-through decoration-outline">Patch security vulnerability CVE-2023-XXXX</h4>
      <div className="flex items-center justify-between mt-sm pt-xs border-t border-outline-variant dark:border-on-surface-variant">
      <div className="flex items-center gap-xs">
      <img className="w-5 h-5 rounded-full object-cover border border-outline-variant grayscale" data-alt="Small circular avatar of a security engineer, professional studio lighting, dark background, suitable for a dense data grid." src="https://lh3.googleusercontent.com/aida-public/AB6AXuD5kIpuTfUo9FUwlAbRidmf_Zh7e-rGnFZenhYjVOWUAqKb-nIeaGBNxdr5atqnWIzyszo2NPpcwv9h9WVZ4_tqGK0qcA_PT_qWZiF05j5_8ai4XIgXc-sL6jhrkhyP1kEkKBkK7o1M9JgPaQ094hQ4BIg0q6Te_goWGctsV0As89lJNxRbL73LPx6qfKqIK-7fEXtsSSlpMlDasfXK8OdQUW2OkoDCXiXdqZM7WHNJBsi2giKXOjjOcAMZ1WKjJoY5JJxP5WuHk3I" />
      <span className="font-label-xs text-label-xs text-outline">3d ago</span>
      </div>
      <span className="text-label-xs font-label-xs text-tertiary">Done</span>
      </div>
      </div>
      </div>
      </div>
      </div>
      </div>
      </div>
    </>
  );
}

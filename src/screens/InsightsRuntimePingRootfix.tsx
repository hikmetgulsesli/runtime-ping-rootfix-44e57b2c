// AUTO-GENERATED from Stitch — DO NOT modify layout or CSS
// Screen: Insights - Runtime Ping Rootfix
// 
// AGENT INSTRUCTIONS:
// 1. DO NOT change className values or layout structure
// 2. Add useState for dynamic values (replace hardcoded text)
// 3. Wire interactive controls through the typed actions prop
// 4. Replace placeholder data with props/state

import { BadgeHelp, BarChart3, Bell, CheckCircle2, CircleAlert, CircleHelp, CircleUserRound, Download, Gauge, Kanban, Lightbulb, ListFilter, Menu, Plus, RefreshCw, Settings, Terminal, TriangleAlert } from "lucide-react";


export type InsightsRuntimePingRootfixActionId = "support-docs-1" | "menu-2" | "notifications-3" | "account-circle-4" | "create-record-5" | "filter-6" | "export-summary-7" | "view-all-8" | "investigate-9" | "schedule-now-10" | "record-operations-1" | "pipeline-board-2" | "insights-3" | "settings-4" | "system-logs-5";

export interface InsightsRuntimePingRootfixProps {
  actions?: Partial<Record<InsightsRuntimePingRootfixActionId, () => void>>;

}

export function InsightsRuntimePingRootfix({ actions }: InsightsRuntimePingRootfixProps) {
  return (
    <>
      {/* SideNavBar */}
      <nav className="hidden md:flex flex-col h-screen fixed left-0 top-0 w-[240px] z-40 bg-inverse-surface dark:bg-surface-container-lowest text-primary-fixed dark:text-primary">
      <div className="px-md py-lg border-b border-on-surface-variant/20">
      <div className="flex items-center gap-sm mb-md">
      <div className="w-8 h-8 rounded-full bg-primary-container flex items-center justify-center text-on-primary-container">
      <BadgeHelp  style={{fontVariationSettings: "'FILL' 1"}} aria-hidden={true} focusable="false" />
      </div>
      <div>
      <h2 className="font-headline-sm text-headline-sm text-on-primary">System Operator</h2>
      <p className="font-label-xs text-label-xs text-secondary-fixed-dim">Rootfix Admin</p>
      </div>
      </div>
      </div>
      <div className="flex-1 overflow-y-auto py-md flex flex-col gap-xs">
      <a className="flex items-center gap-md px-md py-sm text-on-surface-variant dark:text-outline-variant mx-2 hover:bg-on-secondary-fixed-variant dark:hover:bg-surface-container-high transition-colors rounded-lg cursor-pointer transition-colors duration-150" href="#" data-action-id="record-operations-1" onClick={(event) => { event.preventDefault(); actions?.["record-operations-1"]?.(); }}>
      <BarChart3 aria-hidden={true} focusable="false" />
      <span className="font-body-md text-body-md">Record Operations</span>
      </a>
      <a className="flex items-center gap-md px-md py-sm text-on-surface-variant dark:text-outline-variant mx-2 hover:bg-on-secondary-fixed-variant dark:hover:bg-surface-container-high transition-colors rounded-lg cursor-pointer transition-colors duration-150" href="#" data-action-id="pipeline-board-2" onClick={(event) => { event.preventDefault(); actions?.["pipeline-board-2"]?.(); }}>
      <Kanban aria-hidden={true} focusable="false" />
      <span className="font-body-md text-body-md">Pipeline Board</span>
      </a>
      <a className="flex items-center gap-md px-md py-sm bg-primary-container text-on-primary-container rounded-lg mx-2 cursor-pointer transition-colors duration-150" href="#" data-action-id="insights-3" onClick={(event) => { event.preventDefault(); actions?.["insights-3"]?.(); }}>
      <Lightbulb aria-hidden={true} focusable="false" />
      <span className="font-body-md text-body-md font-bold">Insights</span>
      </a>
      </div>
      <div className="p-md border-t border-on-surface-variant/20">
      <a className="flex items-center gap-md px-md py-sm text-on-surface-variant dark:text-outline-variant mx-2 hover:bg-on-secondary-fixed-variant dark:hover:bg-surface-container-high transition-colors rounded-lg cursor-pointer transition-colors duration-150" href="#" data-action-id="settings-4" onClick={(event) => { event.preventDefault(); actions?.["settings-4"]?.(); }}>
      <Settings aria-hidden={true} focusable="false" />
      <span className="font-body-md text-body-md">Settings</span>
      </a>
      <a className="flex items-center gap-md px-md py-sm text-on-surface-variant dark:text-outline-variant mx-2 hover:bg-on-secondary-fixed-variant dark:hover:bg-surface-container-high transition-colors rounded-lg cursor-pointer transition-colors duration-150" href="#" data-action-id="system-logs-5" onClick={(event) => { event.preventDefault(); actions?.["system-logs-5"]?.(); }}>
      <Terminal aria-hidden={true} focusable="false" />
      <span className="font-body-md text-body-md">System Logs</span>
      </a>
      <button className="w-full mt-md bg-transparent border border-outline-variant text-on-primary py-xs px-sm rounded hover:bg-on-secondary-fixed-variant transition-colors font-label-xs text-label-xs flex items-center justify-center gap-xs" type="button" data-action-id="support-docs-1" onClick={actions?.["support-docs-1"]}>
      <CircleHelp className="text-[16px]" aria-hidden={true} focusable="false" /> Support Docs
                  </button>
      </div>
      </nav>
      {/* Main Content Area */}
      <div className="flex-1 flex flex-col md:ml-[240px] w-full min-w-0">
      {/* TopNavBar */}
      <header className="flex justify-between items-center w-full px-lg py-sm sticky top-0 z-50 bg-surface-container-lowest dark:bg-inverse-surface border-b border-outline-variant dark:border-on-surface-variant flat no shadows text-primary dark:text-primary-fixed-dim">
      <div className="flex items-center gap-sm">
      {/* Mobile menu button */}
      <button className="md:hidden p-xs rounded hover:bg-surface-container-low transition-colors text-on-surface-variant" type="button" aria-label="Menu" data-action-id="menu-2" onClick={actions?.["menu-2"]}>
      <Menu aria-hidden={true} focusable="false" />
      </button>
      <h1 className="font-headline-sm text-headline-sm font-bold text-on-surface dark:text-inverse-on-surface">Runtime Ping Rootfix</h1>
      </div>
      <div className="flex-1 flex justify-start px-lg">
      {/* Search bar omitted based on logic or minimal design needs, contextually implied it could be here */}
      </div>
      <div className="flex items-center gap-md">
      <button aria-label="notifications" className="p-xs rounded-full hover:bg-surface-container-low dark:hover:bg-on-secondary-fixed-variant transition-colors text-on-surface-variant cursor-pointer active:scale-95 transition-transform" type="button" data-action-id="notifications-3" onClick={actions?.["notifications-3"]}>
      <Bell aria-hidden={true} focusable="false" />
      </button>
      <button aria-label="account_circle" className="p-xs rounded-full hover:bg-surface-container-low dark:hover:bg-on-secondary-fixed-variant transition-colors text-on-surface-variant cursor-pointer active:scale-95 transition-transform" type="button" data-action-id="account-circle-4" onClick={actions?.["account-circle-4"]}>
      <CircleUserRound aria-hidden={true} focusable="false" />
      </button>
      <button className="bg-primary text-on-primary font-label-xs text-label-xs py-xs px-md rounded-DEFAULT hover:bg-surface-tint transition-colors cursor-pointer active:scale-95 transition-transform flex items-center gap-xs" type="button" data-action-id="create-record-5" onClick={actions?.["create-record-5"]}>
      <Plus className="text-[14px]" aria-hidden={true} focusable="false" /> Create Record
                      </button>
      </div>
      </header>
      {/* Canvas */}
      <main className="flex-1 overflow-y-auto p-lg bg-background">
      {/* Page Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-lg gap-sm">
      <div>
      <h2 className="font-display-sm text-display-sm text-on-surface">System Insights</h2>
      <p className="font-body-sm text-body-sm text-on-surface-variant mt-xs">Real-time performance and operational summary.</p>
      </div>
      <div className="flex items-center gap-sm">
      <button className="flex items-center gap-xs px-sm py-xs bg-surface border border-outline-variant rounded text-on-surface font-label-xs text-label-xs hover:bg-surface-container-low transition-colors" type="button" data-action-id="filter-6" onClick={actions?.["filter-6"]}>
      <ListFilter className="text-[16px]" aria-hidden={true} focusable="false" /> Filter
                          </button>
      <button className="flex items-center gap-xs px-sm py-xs bg-surface border border-outline-variant rounded text-on-surface font-label-xs text-label-xs hover:bg-surface-container-low transition-colors" type="button" data-action-id="export-summary-7" onClick={actions?.["export-summary-7"]}>
      <Download className="text-[16px]" aria-hidden={true} focusable="false" /> Export Summary
                          </button>
      </div>
      </div>
      {/* Bento Grid Layout */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-md">
      {/* Top Metrics (Span full width, split into 4) */}
      <div className="md:col-span-12 grid grid-cols-2 lg:grid-cols-4 gap-md">
      {/* Metric 1: Availability */}
      <div className="bg-surface border border-outline-variant rounded-lg p-md flex flex-col justify-between h-32 hover:bg-surface-container-low transition-colors cursor-default">
      <div className="flex justify-between items-start">
      <span className="font-label-xs text-label-xs text-secondary uppercase tracking-wider">Availability</span>
      <CheckCircle2 className="text-[16px] text-tertiary" aria-hidden={true} focusable="false" />
      </div>
      <div className="flex items-end justify-between">
      <span className="font-headline-sm text-headline-sm text-on-surface text-2xl">99.98%</span>
      <svg className="w-16 h-8" viewBox="0 0 100 30">
      <defs>
      <linearGradient id="gradient-primary" x1="0" x2="0" y1="0" y2="1">
      <stop offset="0%" stopColor="#0050cb" stopOpacity="0.2"></stop>
      <stop offset="100%" stopColor="#0050cb" stopOpacity="0"></stop>
      </linearGradient>
      </defs>
      <path className="sparkline-area" d="M0 30 L0 15 L20 18 L40 10 L60 12 L80 5 L100 8 L100 30 Z"></path>
      <path className="sparkline" d="M0 15 L20 18 L40 10 L60 12 L80 5 L100 8"></path>
      </svg>
      </div>
      </div>
      {/* Metric 2: Latency */}
      <div className="bg-surface border border-outline-variant rounded-lg p-md flex flex-col justify-between h-32 hover:bg-surface-container-low transition-colors cursor-default">
      <div className="flex justify-between items-start">
      <span className="font-label-xs text-label-xs text-secondary uppercase tracking-wider">Avg Latency</span>
      <Gauge className="text-[16px] text-primary" aria-hidden={true} focusable="false" />
      </div>
      <div className="flex items-end justify-between">
      <span className="font-headline-sm text-headline-sm text-on-surface text-2xl">42ms</span>
      <svg className="w-16 h-8" viewBox="0 0 100 30">
      <path className="sparkline-area" d="M0 30 L0 20 L20 15 L40 25 L60 18 L80 10 L100 12 L100 30 Z"></path>
      <path className="sparkline" d="M0 20 L20 15 L40 25 L60 18 L80 10 L100 12"></path>
      </svg>
      </div>
      </div>
      {/* Metric 3: Throughput */}
      <div className="bg-surface border border-outline-variant rounded-lg p-md flex flex-col justify-between h-32 hover:bg-surface-container-low transition-colors cursor-default">
      <div className="flex justify-between items-start">
      <span className="font-label-xs text-label-xs text-secondary uppercase tracking-wider">Throughput</span>
      <BadgeHelp className="text-[16px] text-primary" aria-hidden={true} focusable="false" />
      </div>
      <div className="flex items-end justify-between">
      <span className="font-headline-sm text-headline-sm text-on-surface text-2xl">1.2k/s</span>
      <svg className="w-16 h-8" viewBox="0 0 100 30">
      <path className="sparkline-area" d="M0 30 L0 25 L20 22 L40 15 L60 10 L80 8 L100 5 L100 30 Z"></path>
      <path className="sparkline" d="M0 25 L20 22 L40 15 L60 10 L80 8 L100 5"></path>
      </svg>
      </div>
      </div>
      {/* Metric 4: Error Rate */}
      <div className="bg-surface border border-outline-variant rounded-lg p-md flex flex-col justify-between h-32 hover:bg-error-container/20 transition-colors cursor-default">
      <div className="flex justify-between items-start">
      <span className="font-label-xs text-label-xs text-secondary uppercase tracking-wider">Error Rate</span>
      <TriangleAlert className="text-[16px] text-error" aria-hidden={true} focusable="false" />
      </div>
      <div className="flex items-end justify-between">
      <span className="font-headline-sm text-headline-sm text-on-surface text-2xl">0.02%</span>
      <svg className="w-16 h-8" viewBox="0 0 100 30">
      <path className="sparkline-error" d="M0 28 L20 29 L40 28 L60 25 L80 20 L100 28"></path>
      </svg>
      </div>
      </div>
      </div>
      {/* Middle Row: Recent Activity & State Distribution */}
      <div className="md:col-span-8 bg-surface border border-outline-variant rounded-lg p-0 flex flex-col h-80">
      <div className="p-sm border-b border-outline-variant bg-surface-container-lowest rounded-t-lg flex justify-between items-center">
      <h3 className="font-label-xs text-label-xs text-on-surface uppercase tracking-wider">Recent Activity Timeline</h3>
      <button className="text-primary font-label-xs text-label-xs hover:underline" type="button" data-action-id="view-all-8" onClick={actions?.["view-all-8"]}>View All</button>
      </div>
      <div className="flex-1 overflow-y-auto p-md">
      <div className="relative border-l border-outline-variant ml-sm space-y-md">
      {/* Timeline Item */}
      <div className="relative pl-md">
      <div className="absolute w-2 h-2 bg-tertiary rounded-full -left-[5px] top-1.5 ring-4 ring-surface"></div>
      <div className="flex justify-between items-start">
      <div>
      <p className="font-body-sm text-body-sm text-on-surface font-semibold">Ping Succeeded</p>
      <p className="font-code-md text-code-md text-on-surface-variant text-[11px] mt-xs">Node: us-east-1a | Latency: 12ms</p>
      </div>
      <span className="font-label-xs text-label-xs text-secondary">2m ago</span>
      </div>
      </div>
      {/* Timeline Item */}
      <div className="relative pl-md">
      <div className="absolute w-2 h-2 bg-primary rounded-full -left-[5px] top-1.5 ring-4 ring-surface"></div>
      <div className="flex justify-between items-start">
      <div>
      <p className="font-body-sm text-body-sm text-on-surface font-semibold">Rootfix Applied</p>
      <p className="font-code-md text-code-md text-on-surface-variant text-[11px] mt-xs">Patch: v2.1.4 | Target: db-cluster-02</p>
      </div>
      <span className="font-label-xs text-label-xs text-secondary">15m ago</span>
      </div>
      </div>
      {/* Timeline Item */}
      <div className="relative pl-md">
      <div className="absolute w-2 h-2 bg-error rounded-full -left-[5px] top-1.5 ring-4 ring-surface"></div>
      <div className="flex justify-between items-start">
      <div>
      <p className="font-body-sm text-body-sm text-error font-semibold">Verification Failed</p>
      <p className="font-code-md text-code-md text-on-surface-variant text-[11px] mt-xs">Record ID: REC-9921 | Status: Timeout</p>
      </div>
      <span className="font-label-xs text-label-xs text-secondary">1h ago</span>
      </div>
      </div>
      {/* Timeline Item */}
      <div className="relative pl-md">
      <div className="absolute w-2 h-2 bg-surface-variant border border-outline rounded-full -left-[5px] top-1.5 ring-4 ring-surface"></div>
      <div className="flex justify-between items-start">
      <div>
      <p className="font-body-sm text-body-sm text-on-surface font-semibold">System Backup Completed</p>
      <p className="font-code-md text-code-md text-on-surface-variant text-[11px] mt-xs">Size: 4.2TB | Duration: 45m</p>
      </div>
      <span className="font-label-xs text-label-xs text-secondary">3h ago</span>
      </div>
      </div>
      </div>
      </div>
      </div>
      <div className="md:col-span-4 flex flex-col gap-md h-80">
      {/* State Distribution */}
      <div className="flex-1 bg-surface border border-outline-variant rounded-lg p-0 flex flex-col">
      <div className="p-sm border-b border-outline-variant bg-surface-container-lowest rounded-t-lg">
      <h3 className="font-label-xs text-label-xs text-on-surface uppercase tracking-wider">Record Status</h3>
      </div>
      <div className="flex-1 flex flex-col justify-center p-md gap-sm">
      {/* Simple Bar Chart */}
      <div className="w-full">
      <div className="flex justify-between mb-xs">
      <span className="font-label-xs text-label-xs text-on-surface">Active</span>
      <span className="font-label-xs text-label-xs text-secondary">65%</span>
      </div>
      <div className="w-full bg-surface-container-low h-2 rounded-full overflow-hidden">
      <div className="bg-primary h-full" style={{width: "65%"}}></div>
      </div>
      </div>
      <div className="w-full mt-sm">
      <div className="flex justify-between mb-xs">
      <span className="font-label-xs text-label-xs text-on-surface">Pending Verification</span>
      <span className="font-label-xs text-label-xs text-secondary">25%</span>
      </div>
      <div className="w-full bg-surface-container-low h-2 rounded-full overflow-hidden">
      <div className="bg-outline-variant h-full" style={{width: "25%"}}></div>
      </div>
      </div>
      <div className="w-full mt-sm">
      <div className="flex justify-between mb-xs">
      <span className="font-label-xs text-label-xs text-on-surface">Failed</span>
      <span className="font-label-xs text-label-xs text-error">10%</span>
      </div>
      <div className="w-full bg-surface-container-low h-2 rounded-full overflow-hidden">
      <div className="bg-error h-full" style={{width: "10%"}}></div>
      </div>
      </div>
      </div>
      </div>
      </div>
      {/* Actionable Hints */}
      <div className="md:col-span-12 bg-surface-container-lowest border border-outline-variant rounded-lg p-md mt-md">
      <h3 className="font-headline-sm text-headline-sm text-on-surface mb-sm flex items-center gap-xs">
      <Lightbulb className="text-primary" aria-hidden={true} focusable="false" /> Next Steps
                          </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-sm">
      <div className="bg-error-container/30 border border-error/30 p-sm rounded flex items-start gap-sm">
      <CircleAlert className="text-error mt-0.5 text-[18px]" aria-hidden={true} focusable="false" />
      <div>
      <p className="font-body-sm text-body-sm text-on-surface font-semibold">3 records failing in Verification</p>
      <p className="font-body-sm text-body-sm text-on-surface-variant mt-xs">Review connection logs for nodes in us-west-2.</p>
      <button className="mt-sm font-label-xs text-label-xs text-error hover:underline" type="button" data-action-id="investigate-9" onClick={actions?.["investigate-9"]}>Investigate</button>
      </div>
      </div>
      <div className="bg-surface-container p-sm rounded flex items-start gap-sm border border-outline-variant/50">
      <RefreshCw className="text-primary mt-0.5 text-[18px]" aria-hidden={true} focusable="false" />
      <div>
      <p className="font-body-sm text-body-sm text-on-surface font-semibold">Routine maintenance required</p>
      <p className="font-body-sm text-body-sm text-on-surface-variant mt-xs">Database cluster indices need rebuilding.</p>
      <button className="mt-sm font-label-xs text-label-xs text-primary hover:underline" type="button" data-action-id="schedule-now-10" onClick={actions?.["schedule-now-10"]}>Schedule Now</button>
      </div>
      </div>
      </div>
      </div>
      </div>
      </main>
      </div>
    </>
  );
}

// AUTO-GENERATED from Stitch — DO NOT modify layout or CSS
// Screen: Record Operations - Runtime Ping Rootfix
// 
// AGENT INSTRUCTIONS:
// 1. DO NOT change className values or layout structure
// 2. Add useState for dynamic values (replace hardcoded text)
// 3. Wire interactive controls through the typed actions prop
// 4. Replace placeholder data with props/state

import { ArrowUp, BarChart3, Bell, CalendarDays, CheckCircle2, ChevronDown, ChevronLeft, ChevronRight, CircleUserRound, Clock, Database, Headphones, Kanban, Lightbulb, ListFilter, Pencil, Plus, RefreshCw, Search, Server, Settings, Terminal, TriangleAlert, X } from "lucide-react";


export type RecordOperationsRuntimePingRootfixActionId = "support-docs-1" | "notifications-2" | "account-circle-3" | "create-record-4" | "refresh-data-5" | "status-all-6" | "date-last-7-days-7" | "chevron-left-8" | "chevron-right-9" | "edit-10" | "edit-11" | "edit-12" | "edit-13" | "close-14" | "pause-15" | "edit-details-16" | "record-operations-1" | "pipeline-board-2" | "insights-3" | "settings-4" | "system-logs-5";

export interface RecordOperationsRuntimePingRootfixProps {
  actions?: Partial<Record<RecordOperationsRuntimePingRootfixActionId, () => void>>;

}

export function RecordOperationsRuntimePingRootfix({ actions }: RecordOperationsRuntimePingRootfixProps) {
  return (
    <>
      {/* SideNavBar */}
      <nav className="bg-inverse-surface text-primary-fixed fixed h-full left-0 w-sidebar_width flex flex-col z-40 border-r border-inverse-surface">
      {/* Brand/Header */}
      <div className="px-md py-lg border-b border-on-secondary-fixed-variant">
      <div className="flex items-center gap-sm mb-md">
      <div className="w-8 h-8 rounded bg-primary-container text-on-primary-container flex items-center justify-center">
      <Server aria-hidden={true} focusable="false" />
      </div>
      <h1 className="font-headline-sm text-headline-sm text-on-primary">System Operator</h1>
      </div>
      <div className="flex items-center gap-sm">
      <img alt="User Profile" className="w-8 h-8 rounded-full object-cover border border-outline-variant" data-alt="A small, professional headshot of an IT administrator, modern lighting, clear background." src="https://lh3.googleusercontent.com/aida-public/AB6AXuA1ghZ3yg9_2HmkdVonlx0jL_eoVJiMAwsvLGOt7gXj8ohdlQ-wpk4sJ_wE0QvRQKNJfnIeFt0U6PmQSW_MpzfHwDHR81YD8J5X9z7teNI__K6ipP9__xtZphvVLbKFtkPvdm3XU6LEZ51MPYa9VwSSrj2dQV8cdjAdfpLTneUV4E53-L0C_2tz-U_AX09KKPMtQtHeG5e5hpPmMYsBUmoiDZ-bMDOB3wwiEQIv8oJad2aF5xFJY7R9N3Ig3KgLeuoKBkJJi4rxsic" />
      <div>
      <div className="font-body-md text-body-md text-on-primary">Admin User</div>
      <div className="font-label-xs text-label-xs text-outline-variant">Rootfix Admin</div>
      </div>
      </div>
      </div>
      {/* Navigation Links */}
      <div className="flex-1 overflow-y-auto py-md flex flex-col gap-sm">
      <a className="bg-primary-container text-on-primary-container rounded-lg mx-2 px-md py-sm flex items-center gap-md cursor-pointer transition-colors duration-150 group" href="#" data-action-id="record-operations-1" onClick={(event) => { event.preventDefault(); actions?.["record-operations-1"]?.(); }}>
      <BarChart3 aria-hidden={true} focusable="false" />
      <span className="font-body-md text-body-md">Record Operations</span>
      </a>
      <a className="text-on-surface-variant dark:text-outline-variant mx-2 px-md py-sm flex items-center gap-md hover:bg-on-secondary-fixed-variant dark:hover:bg-surface-container-high transition-colors rounded-lg cursor-pointer transition-colors duration-150 group text-outline-variant" href="#" data-action-id="pipeline-board-2" onClick={(event) => { event.preventDefault(); actions?.["pipeline-board-2"]?.(); }}>
      <Kanban className="group-hover:text-primary-fixed transition-colors" aria-hidden={true} focusable="false" />
      <span className="font-body-md text-body-md group-hover:text-primary-fixed transition-colors">Pipeline Board</span>
      </a>
      <a className="text-on-surface-variant dark:text-outline-variant mx-2 px-md py-sm flex items-center gap-md hover:bg-on-secondary-fixed-variant dark:hover:bg-surface-container-high transition-colors rounded-lg cursor-pointer transition-colors duration-150 group text-outline-variant" href="#" data-action-id="insights-3" onClick={(event) => { event.preventDefault(); actions?.["insights-3"]?.(); }}>
      <Lightbulb className="group-hover:text-primary-fixed transition-colors" aria-hidden={true} focusable="false" />
      <span className="font-body-md text-body-md group-hover:text-primary-fixed transition-colors">Insights</span>
      </a>
      </div>
      {/* Footer Actions */}
      <div className="p-md border-t border-on-secondary-fixed-variant flex flex-col gap-sm">
      <button className="w-full bg-primary-container text-on-primary-container rounded hover:bg-primary transition-colors py-sm px-md flex items-center justify-center gap-sm font-body-md text-body-md font-medium" type="button" data-action-id="support-docs-1" onClick={actions?.["support-docs-1"]}>
      <Headphones className="text-[18px]" aria-hidden={true} focusable="false" />
                      Support Docs
                  </button>
      <div className="flex flex-col gap-xs mt-sm">
      <a className="text-outline-variant px-md py-sm flex items-center gap-md hover:bg-on-secondary-fixed-variant transition-colors rounded cursor-pointer group" href="#" data-action-id="settings-4" onClick={(event) => { event.preventDefault(); actions?.["settings-4"]?.(); }}>
      <Settings className="text-[18px]" aria-hidden={true} focusable="false" />
      <span className="font-label-xs text-label-xs uppercase">Settings</span>
      </a>
      <a className="text-outline-variant px-md py-sm flex items-center gap-md hover:bg-on-secondary-fixed-variant transition-colors rounded cursor-pointer group" href="#" data-action-id="system-logs-5" onClick={(event) => { event.preventDefault(); actions?.["system-logs-5"]?.(); }}>
      <Terminal className="text-[18px]" aria-hidden={true} focusable="false" />
      <span className="font-label-xs text-label-xs uppercase">System Logs</span>
      </a>
      </div>
      </div>
      </nav>
      {/* Main Content Area */}
      <main className="ml-sidebar_width flex-1 flex flex-col h-screen overflow-hidden bg-background">
      {/* TopNavBar */}
      <header className="bg-surface-container-lowest flex justify-between items-center w-full px-lg py-sm sticky top-0 z-30 border-b border-outline-variant h-[64px]">
      {/* Left: Brand / Search */}
      <div className="flex items-center gap-lg flex-1">
      <div className="font-headline-sm text-headline-sm font-bold text-on-surface">Runtime Ping Rootfix</div>
      {/* Search Input */}
      <div className="relative flex-1 max-w-md hidden md:block">
      <Search className="absolute left-sm top-1/2 -translate-y-1/2 text-outline text-[18px]" aria-hidden={true} focusable="false" />
      <input className="w-full bg-surface border border-outline-variant rounded pl-[32px] pr-sm py-xs font-body-sm text-body-sm focus:ring-2 focus:ring-primary focus:border-primary transition-colors outline-none" placeholder="Search records by ID, Name, or IP..." type="text" />
      </div>
      </div>
      {/* Right: Actions */}
      <div className="flex items-center gap-md">
      <button className="text-on-surface-variant hover:bg-surface-container-low p-sm rounded transition-colors cursor-pointer active:scale-95 transition-transform flex items-center justify-center" type="button" aria-label="Notifications" data-action-id="notifications-2" onClick={actions?.["notifications-2"]}>
      <Bell className="text-[20px]" aria-hidden={true} focusable="false" />
      </button>
      <button className="text-on-surface-variant hover:bg-surface-container-low p-sm rounded transition-colors cursor-pointer active:scale-95 transition-transform flex items-center justify-center" type="button" aria-label="Account Circle" data-action-id="account-circle-3" onClick={actions?.["account-circle-3"]}>
      <CircleUserRound className="text-[20px]" aria-hidden={true} focusable="false" />
      </button>
      <div className="w-[1px] h-6 bg-outline-variant mx-xs"></div>
      <button className="bg-primary text-on-primary px-md py-xs rounded hover:bg-primary-fixed-variant transition-colors font-body-sm text-body-sm font-medium flex items-center gap-xs cursor-pointer active:scale-95 transition-transform shadow-sm" type="button" data-action-id="create-record-4" onClick={actions?.["create-record-4"]}>
      <Plus className="text-[18px]" aria-hidden={true} focusable="false" />
                          Create Record
                      </button>
      </div>
      </header>
      {/* Scrollable Workspace */}
      <div className="flex-1 overflow-auto p-lg flex flex-col gap-lg bg-surface">
      {/* Page Header */}
      <div className="flex justify-between items-end">
      <div>
      <h2 className="font-display-sm text-display-sm text-on-surface mb-xs">Record Operations</h2>
      <p className="font-body-md text-body-md text-on-surface-variant">Manage and monitor active routing records across the global cluster.</p>
      </div>
      <button className="bg-surface-container-lowest text-on-surface border border-outline-variant px-md py-xs rounded hover:bg-surface-container-low transition-colors font-body-sm text-body-sm flex items-center gap-xs shadow-sm" type="button" data-action-id="refresh-data-5" onClick={actions?.["refresh-data-5"]}>
      <RefreshCw className="text-[18px]" aria-hidden={true} focusable="false" />
                          Refresh Data
                      </button>
      </div>
      {/* Summary Metrics Bar (Bento style grid) */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-md">
      {/* Metric Tile */}
      <div className="bg-surface-container-lowest border border-outline-variant rounded p-md flex flex-col gap-sm shadow-sm relative overflow-hidden group">
      <div className="absolute top-0 right-0 p-sm opacity-20 group-hover:opacity-100 transition-opacity">
      <Database className="text-primary" aria-hidden={true} focusable="false" />
      </div>
      <div className="font-label-xs text-label-xs text-secondary uppercase tracking-wider">Total Records</div>
      <div className="flex items-baseline gap-sm">
      <span className="font-display-sm text-display-sm">14,239</span>
      <span className="font-body-sm text-body-sm text-tertiary-container flex items-center"><ArrowUp className="text-[14px]" aria-hidden={true} focusable="false" /> 2.4%</span>
      </div>
      </div>
      {/* Metric Tile */}
      <div className="bg-surface-container-lowest border border-outline-variant rounded p-md flex flex-col gap-sm shadow-sm relative overflow-hidden group">
      <div className="absolute top-0 right-0 p-sm opacity-20 group-hover:opacity-100 transition-opacity">
      <TriangleAlert className="text-error" aria-hidden={true} focusable="false" />
      </div>
      <div className="font-label-xs text-label-xs text-secondary uppercase tracking-wider">Active Issues</div>
      <div className="flex items-baseline gap-sm">
      <span className="font-display-sm text-display-sm text-error">24</span>
      <span className="font-body-sm text-body-sm text-error flex items-center"><ArrowUp className="text-[14px]" aria-hidden={true} focusable="false" /> 12</span>
      </div>
      </div>
      {/* Metric Tile */}
      <div className="bg-surface-container-lowest border border-outline-variant rounded p-md flex flex-col gap-sm shadow-sm relative overflow-hidden group">
      <div className="absolute top-0 right-0 p-sm opacity-20 group-hover:opacity-100 transition-opacity">
      <CheckCircle2 className="text-tertiary" aria-hidden={true} focusable="false" />
      </div>
      <div className="font-label-xs text-label-xs text-secondary uppercase tracking-wider">Success Rate</div>
      <div className="flex items-baseline gap-sm">
      <span className="font-display-sm text-display-sm">99.98%</span>
      <span className="font-body-sm text-body-sm text-on-surface-variant">Global avg</span>
      </div>
      </div>
      {/* Metric Tile */}
      <div className="bg-surface-container-lowest border border-outline-variant rounded p-md flex flex-col gap-sm shadow-sm relative overflow-hidden group">
      <div className="absolute top-0 right-0 p-sm opacity-20 group-hover:opacity-100 transition-opacity">
      <Clock className="text-secondary" aria-hidden={true} focusable="false" />
      </div>
      <div className="font-label-xs text-label-xs text-secondary uppercase tracking-wider">Last Ping</div>
      <div className="flex items-baseline gap-sm">
      <span className="font-display-sm text-display-sm">12ms</span>
      <span className="font-body-sm text-body-sm text-on-surface-variant">ago</span>
      </div>
      </div>
      </div>
      {/* Main Workspace Area (Table + Slideout) */}
      <div className="flex gap-lg flex-1 overflow-hidden min-h-[400px]">
      {/* Data Table Section */}
      <div className="bg-surface-container-lowest border border-outline-variant rounded flex-1 flex flex-col shadow-sm overflow-hidden">
      {/* Filters Toolbar */}
      <div className="p-sm border-b border-outline-variant flex items-center justify-between bg-surface-bright">
      <div className="flex items-center gap-sm">
      <button className="px-sm py-xs border border-outline-variant rounded bg-surface-container-lowest hover:bg-surface-container-low transition-colors flex items-center gap-xs font-body-sm text-body-sm" type="button" data-action-id="status-all-6" onClick={actions?.["status-all-6"]}>
      <ListFilter className="text-[16px]" aria-hidden={true} focusable="false" />
                                      Status: All
                                      <ChevronDown className="text-[16px]" aria-hidden={true} focusable="false" />
      </button>
      <button className="px-sm py-xs border border-outline-variant rounded bg-surface-container-lowest hover:bg-surface-container-low transition-colors flex items-center gap-xs font-body-sm text-body-sm" type="button" data-action-id="date-last-7-days-7" onClick={actions?.["date-last-7-days-7"]}>
      <CalendarDays className="text-[16px]" aria-hidden={true} focusable="false" />
                                      Date: Last 7 Days
                                      <ChevronDown className="text-[16px]" aria-hidden={true} focusable="false" />
      </button>
      </div>
      <div className="flex items-center gap-sm">
      <span className="font-body-sm text-body-sm text-on-surface-variant">Showing 1-50 of 14,239</span>
      <div className="flex border border-outline-variant rounded overflow-hidden">
      <button className="p-xs bg-surface-container-lowest hover:bg-surface-container-low border-r border-outline-variant transition-colors" type="button" aria-label="Chevron Left" data-action-id="chevron-left-8" onClick={actions?.["chevron-left-8"]}>
      <ChevronLeft className="text-[18px]" aria-hidden={true} focusable="false" />
      </button>
      <button className="p-xs bg-surface-container-lowest hover:bg-surface-container-low transition-colors" type="button" aria-label="Chevron Right" data-action-id="chevron-right-9" onClick={actions?.["chevron-right-9"]}>
      <ChevronRight className="text-[18px]" aria-hidden={true} focusable="false" />
      </button>
      </div>
      </div>
      </div>
      {/* Table Wrapper */}
      <div className="flex-1 overflow-auto">
      <table className="w-full text-left border-collapse">
      <thead className="sticky top-0 bg-[#F1F5F9] border-b border-outline-variant z-10">
      <tr>
      <th className="py-sm px-md font-label-xs text-label-xs text-secondary uppercase tracking-wider font-semibold w-12">
      <input className="rounded border-outline-variant text-primary focus:ring-primary" type="checkbox" />
      </th>
      <th className="py-sm px-md font-label-xs text-label-xs text-secondary uppercase tracking-wider font-semibold">Record ID</th>
      <th className="py-sm px-md font-label-xs text-label-xs text-secondary uppercase tracking-wider font-semibold">Name / Description</th>
      <th className="py-sm px-md font-label-xs text-label-xs text-secondary uppercase tracking-wider font-semibold">Status</th>
      <th className="py-sm px-md font-label-xs text-label-xs text-secondary uppercase tracking-wider font-semibold">Last Activity</th>
      <th className="py-sm px-md font-label-xs text-label-xs text-secondary uppercase tracking-wider font-semibold text-right">Actions</th>
      </tr>
      </thead>
      <tbody className="divide-y divide-outline-variant bg-surface-container-lowest">
      {/* Row 1 (Selected) */}
      <tr className="hover:bg-surface-container-low transition-colors group bg-primary-container/5">
      <td className="py-sm px-md w-12">
      <input defaultChecked={true} className="rounded border-outline-variant text-primary focus:ring-primary" type="checkbox" />
      </td>
      <td className="py-sm px-md font-code-md text-code-md text-on-surface">REC-8921-A</td>
      <td className="py-sm px-md">
      <div className="font-body-sm text-body-sm font-medium text-on-surface">Primary Gateway Router</div>
      <div className="font-label-xs text-label-xs text-on-surface-variant truncate w-48">Handles ingress for EU-West-1</div>
      </td>
      <td className="py-sm px-md">
      <span className="inline-flex items-center px-2 py-1 rounded bg-tertiary-container/10 border border-tertiary-container/20 text-tertiary-container font-label-xs text-label-xs">Active</span>
      </td>
      <td className="py-sm px-md font-body-sm text-body-sm text-on-surface-variant">2 mins ago</td>
      <td className="py-sm px-md text-right">
      <button className="text-primary hover:text-primary-fixed-variant font-body-sm text-body-sm font-medium flex items-center gap-xs ml-auto" type="button" data-action-id="edit-10" onClick={actions?.["edit-10"]}>
                                                  Edit
                                                  <Pencil className="text-[16px] opacity-0 group-hover:opacity-100 transition-opacity" aria-hidden={true} focusable="false" />
      </button>
      </td>
      </tr>
      {/* Row 2 */}
      <tr className="hover:bg-surface-container-low transition-colors group">
      <td className="py-sm px-md w-12">
      <input className="rounded border-outline-variant text-primary focus:ring-primary" type="checkbox" />
      </td>
      <td className="py-sm px-md font-code-md text-code-md text-on-surface">REC-8922-B</td>
      <td className="py-sm px-md">
      <div className="font-body-sm text-body-sm font-medium text-on-surface">Secondary Failover</div>
      <div className="font-label-xs text-label-xs text-on-surface-variant truncate w-48">Standby cluster routing</div>
      </td>
      <td className="py-sm px-md">
      <span className="inline-flex items-center px-2 py-1 rounded bg-error-container/20 border border-error/30 text-error font-label-xs text-label-xs">Degraded</span>
      </td>
      <td className="py-sm px-md font-body-sm text-body-sm text-on-surface-variant">15 mins ago</td>
      <td className="py-sm px-md text-right">
      <button className="text-primary hover:text-primary-fixed-variant font-body-sm text-body-sm font-medium flex items-center gap-xs ml-auto" type="button" data-action-id="edit-11" onClick={actions?.["edit-11"]}>
                                                  Edit
                                                  <Pencil className="text-[16px] opacity-0 group-hover:opacity-100 transition-opacity" aria-hidden={true} focusable="false" />
      </button>
      </td>
      </tr>
      {/* Row 3 */}
      <tr className="hover:bg-surface-container-low transition-colors group">
      <td className="py-sm px-md w-12">
      <input className="rounded border-outline-variant text-primary focus:ring-primary" type="checkbox" />
      </td>
      <td className="py-sm px-md font-code-md text-code-md text-on-surface">REC-8923-C</td>
      <td className="py-sm px-md">
      <div className="font-body-sm text-body-sm font-medium text-on-surface">Internal Load Balancer</div>
      <div className="font-label-xs text-label-xs text-on-surface-variant truncate w-48">Service mesh traffic</div>
      </td>
      <td className="py-sm px-md">
      <span className="inline-flex items-center px-2 py-1 rounded bg-surface-container-highest border border-outline-variant text-secondary font-label-xs text-label-xs">Maintenance</span>
      </td>
      <td className="py-sm px-md font-body-sm text-body-sm text-on-surface-variant">1 hour ago</td>
      <td className="py-sm px-md text-right">
      <button className="text-primary hover:text-primary-fixed-variant font-body-sm text-body-sm font-medium flex items-center gap-xs ml-auto" type="button" data-action-id="edit-12" onClick={actions?.["edit-12"]}>
                                                  Edit
                                                  <Pencil className="text-[16px] opacity-0 group-hover:opacity-100 transition-opacity" aria-hidden={true} focusable="false" />
      </button>
      </td>
      </tr>
      {/* Add more rows for density */}
      <tr className="hover:bg-surface-container-low transition-colors group">
      <td className="py-sm px-md w-12">
      <input className="rounded border-outline-variant text-primary focus:ring-primary" type="checkbox" />
      </td>
      <td className="py-sm px-md font-code-md text-code-md text-on-surface">REC-8924-D</td>
      <td className="py-sm px-md">
      <div className="font-body-sm text-body-sm font-medium text-on-surface">Cache Node Alpha</div>
      <div className="font-label-xs text-label-xs text-on-surface-variant truncate w-48">Redis cluster proxy</div>
      </td>
      <td className="py-sm px-md">
      <span className="inline-flex items-center px-2 py-1 rounded bg-tertiary-container/10 border border-tertiary-container/20 text-tertiary-container font-label-xs text-label-xs">Active</span>
      </td>
      <td className="py-sm px-md font-body-sm text-body-sm text-on-surface-variant">Just now</td>
      <td className="py-sm px-md text-right">
      <button className="text-primary hover:text-primary-fixed-variant font-body-sm text-body-sm font-medium flex items-center gap-xs ml-auto" type="button" data-action-id="edit-13" onClick={actions?.["edit-13"]}>
                                                  Edit
                                                  <Pencil className="text-[16px] opacity-0 group-hover:opacity-100 transition-opacity" aria-hidden={true} focusable="false" />
      </button>
      </td>
      </tr>
      </tbody>
      </table>
      </div>
      </div>
      {/* Selected Item Preview (Side Panel) */}
      <div className="w-[320px] bg-surface-container-lowest border border-outline-variant rounded flex flex-col shadow-sm overflow-hidden hidden lg:flex">
      {/* Preview Header */}
      <div className="p-md border-b border-outline-variant flex justify-between items-start bg-surface-bright">
      <div>
      <div className="font-code-md text-code-md text-on-surface mb-xs">REC-8921-A</div>
      <h3 className="font-headline-sm text-headline-sm text-on-surface">Primary Gateway Router</h3>
      <div className="mt-sm">
      <span className="inline-flex items-center px-2 py-1 rounded bg-tertiary-container/10 border border-tertiary-container/20 text-tertiary-container font-label-xs text-label-xs">Active</span>
      </div>
      </div>
      <button className="text-on-surface-variant hover:text-on-surface p-xs rounded hover:bg-surface-container-low transition-colors" type="button" aria-label="Close" data-action-id="close-14" onClick={actions?.["close-14"]}>
      <X className="text-[20px]" aria-hidden={true} focusable="false" />
      </button>
      </div>
      {/* Preview Content */}
      <div className="flex-1 overflow-y-auto p-md flex flex-col gap-lg">
      {/* Metadata section */}
      <div>
      <h4 className="font-label-xs text-label-xs text-secondary uppercase tracking-wider mb-sm border-b border-outline-variant pb-xs">Metadata</h4>
      <div className="grid grid-cols-2 gap-y-sm gap-x-md">
      <div>
      <div className="font-label-xs text-label-xs text-on-surface-variant">Region</div>
      <div className="font-body-sm text-body-sm text-on-surface">EU-West-1</div>
      </div>
      <div>
      <div className="font-label-xs text-label-xs text-on-surface-variant">Cluster IP</div>
      <div className="font-code-md text-code-md text-on-surface">192.168.1.104</div>
      </div>
      <div>
      <div className="font-label-xs text-label-xs text-on-surface-variant">Created</div>
      <div className="font-body-sm text-body-sm text-on-surface">Oct 12, 2023</div>
      </div>
      <div>
      <div className="font-label-xs text-label-xs text-on-surface-variant">Owner</div>
      <div className="font-body-sm text-body-sm text-on-surface">Platform Team</div>
      </div>
      </div>
      </div>
      {/* Mini Graph/Viz */}
      <div>
      <h4 className="font-label-xs text-label-xs text-secondary uppercase tracking-wider mb-sm border-b border-outline-variant pb-xs">Ping Latency</h4>
      <div className="h-24 bg-surface-container-low border border-outline-variant rounded flex items-end p-xs gap-xs">
      {/* Dummy bars for viz */}
      <div className="w-full bg-primary/20 h-[30%] rounded-t"></div>
      <div className="w-full bg-primary/40 h-[40%] rounded-t"></div>
      <div className="w-full bg-primary/60 h-[35%] rounded-t"></div>
      <div className="w-full bg-error/40 h-[80%] rounded-t"></div>
      <div className="w-full bg-primary/30 h-[20%] rounded-t"></div>
      <div className="w-full bg-primary/50 h-[45%] rounded-t"></div>
      <div className="w-full bg-primary h-[25%] rounded-t"></div>
      </div>
      </div>
      {/* Activity Timeline */}
      <div>
      <h4 className="font-label-xs text-label-xs text-secondary uppercase tracking-wider mb-sm border-b border-outline-variant pb-xs">Recent Activity</h4>
      <div className="flex flex-col gap-md relative">
      <div className="absolute left-[7px] top-2 bottom-0 w-[2px] bg-outline-variant"></div>
      <div className="flex gap-sm relative z-10">
      <div className="w-4 h-4 rounded-full bg-surface-container-lowest border-2 border-primary mt-1"></div>
      <div>
      <div className="font-body-sm text-body-sm text-on-surface font-medium">Health check passed</div>
      <div className="font-label-xs text-label-xs text-on-surface-variant">2 mins ago by System</div>
      </div>
      </div>
      <div className="flex gap-sm relative z-10">
      <div className="w-4 h-4 rounded-full bg-surface-container-lowest border-2 border-outline-variant mt-1"></div>
      <div>
      <div className="font-body-sm text-body-sm text-on-surface">Config updated</div>
      <div className="font-label-xs text-label-xs text-on-surface-variant">Yesterday, 14:32 by J. Doe</div>
      </div>
      </div>
      <div className="flex gap-sm relative z-10">
      <div className="w-4 h-4 rounded-full bg-surface-container-lowest border-2 border-error mt-1"></div>
      <div>
      <div className="font-body-sm text-body-sm text-error">Latency spike detected</div>
      <div className="font-label-xs text-label-xs text-on-surface-variant">Oct 24, 09:15 by Monitor</div>
      </div>
      </div>
      </div>
      </div>
      </div>
      {/* Preview Footer Actions */}
      <div className="p-sm border-t border-outline-variant flex gap-sm bg-surface-bright">
      <button className="flex-1 border border-outline-variant text-on-surface py-xs rounded hover:bg-surface-container-low transition-colors font-body-sm text-body-sm font-medium" type="button" data-action-id="pause-15" onClick={actions?.["pause-15"]}>Pause</button>
      <button className="flex-1 bg-primary text-on-primary py-xs rounded hover:bg-primary-fixed-variant transition-colors font-body-sm text-body-sm font-medium" type="button" data-action-id="edit-details-16" onClick={actions?.["edit-details-16"]}>Edit Details</button>
      </div>
      </div>
      </div>
      </div>
      </main>
    </>
  );
}

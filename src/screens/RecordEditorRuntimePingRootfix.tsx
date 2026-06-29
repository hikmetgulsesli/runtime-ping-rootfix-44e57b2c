// AUTO-GENERATED from Stitch — DO NOT modify layout or CSS
// Screen: Record Editor - Runtime Ping Rootfix
// 
// AGENT INSTRUCTIONS:
// 1. DO NOT change className values or layout structure
// 2. Add useState for dynamic values (replace hardcoded text)
// 3. Wire interactive controls through the typed actions prop
// 4. Replace placeholder data with props/state

import { BadgeHelp, BarChart3, Bell, CircleAlert, CircleUserRound, Info, Kanban, Lightbulb, Save, Settings, Terminal } from "lucide-react";


export type RecordEditorRuntimePingRootfixActionId = "support-docs-1" | "cancel-2" | "save-record-3" | "cancel-4" | "save-record-5" | "record-operations-1" | "pipeline-board-2" | "insights-3" | "settings-4" | "system-logs-5";

export interface RecordEditorRuntimePingRootfixProps {
  actions?: Partial<Record<RecordEditorRuntimePingRootfixActionId, () => void>>;

}

export function RecordEditorRuntimePingRootfix({ actions }: RecordEditorRuntimePingRootfixProps) {
  return (
    <>
      {/* TopNavBar (Mobile Only) */}
      <header className="md:hidden flex justify-between items-center w-full px-lg py-sm sticky top-0 z-50 bg-surface-container-lowest border-b border-outline-variant">
      <div className="font-headline-sm text-headline-sm font-bold text-on-surface">
                  Runtime Ping Rootfix
              </div>
      <div className="flex items-center gap-md">
      <Bell className="text-primary cursor-pointer active:scale-95 transition-transform hover:bg-surface-container-low p-sm rounded-full" aria-hidden={true} focusable="false" />
      <CircleUserRound className="text-primary cursor-pointer active:scale-95 transition-transform hover:bg-surface-container-low p-sm rounded-full" aria-hidden={true} focusable="false" />
      </div>
      </header>
      {/* SideNavBar (Web Only) */}
      <aside className="hidden md:flex flex-col h-screen fixed left-0 top-0 w-sidebar_width z-40 bg-inverse-surface">
      <div className="p-lg flex flex-col gap-sm border-b border-outline-variant/20">
      <div className="font-headline-sm text-headline-sm text-on-primary font-bold">Runtime Ping Rootfix</div>
      <div className="flex items-center gap-sm mt-md">
      <div className="w-8 h-8 rounded-full bg-primary-container text-on-primary-container flex items-center justify-center font-bold font-body-sm">
                          SO
                      </div>
      <div>
      <div className="font-body-sm text-body-sm text-on-primary font-bold">System Operator</div>
      <div className="font-label-xs text-label-xs text-on-surface-variant text-secondary-fixed-dim">Rootfix Admin</div>
      </div>
      </div>
      </div>
      <nav className="flex-1 overflow-y-auto py-md flex flex-col gap-base">
      <a className="flex items-center gap-sm px-md py-sm bg-primary-container text-on-primary-container rounded-lg mx-2 transition-colors duration-150 cursor-pointer hover:bg-on-secondary-fixed-variant" href="#" data-action-id="record-operations-1" onClick={(event) => { event.preventDefault(); actions?.["record-operations-1"]?.(); }}>
      <BarChart3 className="font-label-xs text-label-xs" aria-hidden={true} focusable="false" />
      <span className="font-label-xs text-label-xs font-bold">Record Operations</span>
      </a>
      <a className="flex items-center gap-sm px-md py-sm text-on-surface-variant mx-2 transition-colors duration-150 cursor-pointer hover:bg-on-secondary-fixed-variant text-secondary-fixed-dim" href="#" data-action-id="pipeline-board-2" onClick={(event) => { event.preventDefault(); actions?.["pipeline-board-2"]?.(); }}>
      <Kanban className="font-label-xs text-label-xs" aria-hidden={true} focusable="false" />
      <span className="font-label-xs text-label-xs font-bold">Pipeline Board</span>
      </a>
      <a className="flex items-center gap-sm px-md py-sm text-on-surface-variant mx-2 transition-colors duration-150 cursor-pointer hover:bg-on-secondary-fixed-variant text-secondary-fixed-dim" href="#" data-action-id="insights-3" onClick={(event) => { event.preventDefault(); actions?.["insights-3"]?.(); }}>
      <Lightbulb className="font-label-xs text-label-xs" aria-hidden={true} focusable="false" />
      <span className="font-label-xs text-label-xs font-bold">Insights</span>
      </a>
      </nav>
      <div className="p-md flex flex-col gap-base border-t border-outline-variant/20">
      <a className="flex items-center gap-sm px-md py-sm text-on-surface-variant mx-2 transition-colors duration-150 cursor-pointer hover:bg-on-secondary-fixed-variant text-secondary-fixed-dim" href="#" data-action-id="settings-4" onClick={(event) => { event.preventDefault(); actions?.["settings-4"]?.(); }}>
      <Settings className="font-label-xs text-label-xs" aria-hidden={true} focusable="false" />
      <span className="font-label-xs text-label-xs font-bold">Settings</span>
      </a>
      <a className="flex items-center gap-sm px-md py-sm text-on-surface-variant mx-2 transition-colors duration-150 cursor-pointer hover:bg-on-secondary-fixed-variant text-secondary-fixed-dim" href="#" data-action-id="system-logs-5" onClick={(event) => { event.preventDefault(); actions?.["system-logs-5"]?.(); }}>
      <Terminal className="font-label-xs text-label-xs" aria-hidden={true} focusable="false" />
      <span className="font-label-xs text-label-xs font-bold">System Logs</span>
      </a>
      <button className="mt-md w-full bg-surface-container-lowest text-primary font-label-xs text-label-xs font-bold py-sm px-md rounded border border-outline-variant hover:bg-surface-container-low transition-colors" type="button" data-action-id="support-docs-1" onClick={actions?.["support-docs-1"]}>
                      Support Docs
                  </button>
      </div>
      </aside>
      {/* Main Content Canvas */}
      <main className="flex-1 md:ml-sidebar_width flex flex-col min-h-screen">
      {/* Unsaved Changes Banner */}
      <div className="bg-surface-container-high border-b border-outline-variant px-lg py-sm flex items-center justify-between">
      <div className="flex items-center gap-sm text-on-surface font-body-sm text-body-sm">
      <Info className="text-outline" aria-hidden={true} focusable="false" />
                      You have unsaved changes
                  </div>
      <div className="flex gap-sm">
      <button className="px-md py-base text-on-surface border border-outline-variant rounded font-label-xs text-label-xs font-bold hover:bg-surface-container-low transition-colors bg-surface-container-lowest" type="button" data-action-id="cancel-2" onClick={actions?.["cancel-2"]}>Cancel</button>
      <button className="px-md py-base bg-primary text-on-primary rounded font-label-xs text-label-xs font-bold hover:bg-primary-fixed-variant transition-colors" type="button" data-action-id="save-record-3" onClick={actions?.["save-record-3"]}>Save Record</button>
      </div>
      </div>
      <div className="p-lg flex-1 flex justify-center">
      <div className="w-full max-w-3xl bg-surface-container-lowest border border-outline-variant rounded-lg p-lg shadow-[0_2px_4px_rgba(0,0,0,0.02)] h-fit">
      <div className="mb-lg border-b border-outline-variant pb-md">
      <h1 className="font-display-sm text-display-sm text-on-surface">Record Editor</h1>
      <p className="font-body-sm text-body-sm text-on-surface-variant mt-base">Create or modify a system record.</p>
      </div>
      <form className="flex flex-col gap-lg">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-lg">
      {/* Record Name */}
      <div className="flex flex-col gap-base">
      <label className="font-label-xs text-label-xs text-on-surface flex items-center gap-xs" htmlFor="recordName">
                                      Record Name <span className="text-error">*</span>
      </label>
      <input className="w-full border border-outline-variant rounded px-sm py-sm font-body-sm text-body-sm bg-surface-container-lowest focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-shadow" id="recordName" name="recordName" placeholder="e.g. Prod-DB-Ping" type="text" />
      </div>
      {/* Type */}
      <div className="flex flex-col gap-base">
      <label className="font-label-xs text-label-xs text-on-surface" htmlFor="recordType">Type</label>
      <select className="w-full border border-outline-variant rounded px-sm py-sm font-body-sm text-body-sm bg-surface-container-lowest focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-shadow appearance-none" id="recordType" name="recordType">
      <option value="http">HTTP Endpoint</option>
      <option value="tcp">TCP Socket</option>
      <option value="icmp">ICMP Echo</option>
      <option value="dns">DNS Resolution</option>
      </select>
      </div>
      </div>
      {/* Endpoint URL */}
      <div className="flex flex-col gap-base">
      <label className="font-label-xs text-label-xs text-on-surface flex items-center gap-xs" htmlFor="endpointUrl">
                                  Endpoint URL <span className="text-error">*</span>
      </label>
      <div className="relative flex items-center">
      <BadgeHelp className="absolute left-sm text-outline-variant" aria-hidden={true} focusable="false" />
      <input className="w-full border border-error rounded pl-xl pr-sm py-sm font-code-md text-code-md bg-error-container/10 focus:ring-2 focus:ring-error focus:border-error outline-none transition-shadow text-on-surface" id="endpointUrl" name="endpointUrl" type="text" defaultValue="htps://api.rootfix.internal/v1/health" />
      </div>
      <p className="font-body-sm text-body-sm text-error mt-xs flex items-center gap-xs">
      <CircleAlert className="text-[14px]" aria-hidden={true} focusable="false" />
                                  Invalid URL format. Must start with http:// or https://
                              </p>
      </div>
      {/* Priority */}
      <div className="flex flex-col gap-base">
      <label className="font-label-xs text-label-xs text-on-surface">Priority</label>
      <div className="flex gap-lg">
      <label className="flex items-center gap-sm cursor-pointer">
      <input className="text-primary focus:ring-primary border-outline-variant" name="priority" type="radio" defaultValue="low" />
      <span className="font-body-sm text-body-sm text-on-surface">Low</span>
      </label>
      <label className="flex items-center gap-sm cursor-pointer">
      <input defaultChecked={true} className="text-primary focus:ring-primary border-outline-variant" name="priority" type="radio" defaultValue="medium" />
      <span className="font-body-sm text-body-sm text-on-surface">Medium</span>
      </label>
      <label className="flex items-center gap-sm cursor-pointer">
      <input className="text-primary focus:ring-primary border-outline-variant" name="priority" type="radio" defaultValue="high" />
      <span className="font-body-sm text-body-sm text-on-surface">High</span>
      </label>
      <label className="flex items-center gap-sm cursor-pointer">
      <input className="text-error focus:ring-error border-outline-variant" name="priority" type="radio" defaultValue="critical" />
      <span className="font-body-sm text-body-sm text-error font-bold">Critical</span>
      </label>
      </div>
      </div>
      {/* Description */}
      <div className="flex flex-col gap-base">
      <label className="font-label-xs text-label-xs text-on-surface" htmlFor="description">Description</label>
      <textarea className="w-full border border-outline-variant rounded px-sm py-sm font-body-sm text-body-sm bg-surface-container-lowest focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-shadow resize-y" id="description" name="description" placeholder="Brief context about this record..." rows={4}></textarea>
      </div>
      {/* Form Actions (Bottom) */}
      <div className="mt-md pt-md border-t border-outline-variant flex justify-end gap-md">
      <button className="px-lg py-sm text-on-surface border border-outline-variant rounded font-label-xs text-label-xs font-bold hover:bg-surface-container-low transition-colors bg-surface-container-lowest" type="button" data-action-id="cancel-4" onClick={actions?.["cancel-4"]}>Cancel</button>
      <button className="px-lg py-sm bg-primary text-on-primary rounded font-label-xs text-label-xs font-bold hover:bg-primary-fixed-variant transition-colors flex items-center gap-xs" type="submit" data-action-id="save-record-5" onClick={actions?.["save-record-5"]}>
      <Save className="text-[16px]" aria-hidden={true} focusable="false" />
                                  Save Record
                              </button>
      </div>
      </form>
      </div>
      </div>
      </main>
    </>
  );
}

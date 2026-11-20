import {
  ArrowDownToLine,
  ArrowUpFromLine,
  ClipboardList,
  Database,
  FileSpreadsheet,
  ScanBarcode,
  ShieldCheck
} from "lucide-react";

const actions = [
  { title: "New stocktake", detail: "Start a physical count session", icon: ClipboardList, href: "#sessions" },
  { title: "Scan items", detail: "Barcode, PLU or item search", icon: ScanBarcode, href: "#counter" },
  { title: "Import Item Master", detail: "Load the latest iTrade export", icon: ArrowUpFromLine, href: "#import" },
  { title: "Export reports", detail: "Download counts and variance", icon: ArrowDownToLine, href: "#reports" }
];

export default function Home() {
  return (
    <main className="app-shell">
      <aside className="sidebar">
        <div className="brand">
          <div className="brand-mark"><Database size={19} /></div>
          <div><strong>SmartStock</strong><span>STOCKTAKING</span></div>
        </div>
        <nav className="nav-list" aria-label="Main navigation">
          <a className="nav-item active" href="#"><ClipboardList size={18} /> Overview</a>
          <a className="nav-item" href="#sessions"><ScanBarcode size={18} /> Stock counter</a>
          <a className="nav-item" href="#items"><Database size={18} /> Item master</a>
          <a className="nav-item" href="#reports"><FileSpreadsheet size={18} /> Reports</a>
        </nav>
        <div className="sidebar-foot"><ShieldCheck size={16} /> Append-only count records</div>
      </aside>

      <section className="main-panel">
        <header className="topbar">
          <div><span className="eyebrow">PERSONAL WORKSPACE</span><h1>Stocktaking overview</h1></div>
          <div className="user-chip"><span className="status-dot" /> Local setup</div>
        </header>

        <section className="welcome">
          <div>
            <span className="eyebrow light">SMARTSTOCK WORKSPACE</span>
            <h2>Count accurately.<br />Reconcile confidently.</h2>
            <p>A focused stocktaking tool for iTrade item masters, barcode scanning and verified physical counts.</p>
          </div>
          <div className="welcome-icon"><ScanBarcode size={66} strokeWidth={1.25} /></div>
        </section>

        <section className="section-block">
          <div className="section-heading"><div><span className="eyebrow">WORKSPACE</span><h2>Quick actions</h2></div></div>
          <div className="action-grid">
            {actions.map(({ title, detail, icon: Icon, href }) => (
              <a className="action-card" href={href} key={title}>
                <span className="action-icon"><Icon size={21} /></span>
                <strong>{title}</strong><span>{detail}</span>
              </a>
            ))}
          </div>
        </section>

        <section className="lower-grid">
          <div className="panel-card" id="sessions">
            <div className="card-heading"><div><span className="eyebrow">SESSIONS</span><h3>Stocktake sessions</h3></div><ClipboardList size={20} /></div>
            <div className="empty-state"><div className="empty-icon"><ClipboardList size={25} /></div><strong>No sessions yet</strong><span>Your stocktaking sessions will appear here once session creation is implemented.</span></div>
          </div>
          <div className="panel-card" id="import">
            <div className="card-heading"><div><span className="eyebrow">DATA SOURCE</span><h3>Item Master</h3></div><FileSpreadsheet size={20} /></div>
            <div className="data-status"><span className="status-dot muted" /> Not connected</div>
            <p className="muted-copy">Import an iTrade Excel/CSV export to populate the catalogue. Product images will be preserved between imports.</p>
            <div className="setup-note">Setup required · No data has been imported</div>
          </div>
        </section>

        <footer className="footer"><span>SmartStock · Initial application scaffold</span><span>Count ledger integrity controls will be enabled before live use.</span></footer>
      </section>
    </main>
  );
}

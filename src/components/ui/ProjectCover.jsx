import { Ticket, ShoppingBag, QrCode, CreditCard, ShieldCheck, Zap } from 'lucide-react'

export function ProjectCover({ projectId, size = 'card' }) {
  const isLarge = size === 'detail'

  if (projectId === 'ticketing') {
    return (
      <div className={`project-cover-container project-cover-ticketing ${isLarge ? 'is-detail' : ''}`}>
        {/* Subtle grid pattern background */}
        <div className="cover-bg-glow glow-emerald"></div>

        {/* Mock Browser Header */}
        <div className="mock-window-header">
          <div className="mock-window-dots">
            <span className="dot dot-red"></span>
            <span className="dot dot-yellow"></span>
            <span className="dot dot-green"></span>
          </div>
          <span className="mock-window-title">goers-ticket.app</span>
          <span className="mock-live-badge">QRIS Ready</span>
        </div>

        {/* Central Graphic */}
        <div className="cover-content">
          <div className="cover-ticket-card">
            <div className="ticket-left">
              <span className="ticket-tag">VIP PASS</span>
              <div className="ticket-title-row">
                <Ticket className="ticket-icon text-emerald-400" size={isLarge ? 28 : 20} />
                <span className="ticket-event-name">Music Fest 2025</span>
              </div>
              <div className="ticket-meta-row">
                <span className="ticket-meta">Gate A • Onsite Validated</span>
              </div>
            </div>
            <div className="ticket-divider"></div>
            <div className="ticket-right">
              <QrCode className="qr-icon text-slate-200" size={isLarge ? 42 : 28} />
              <span className="qr-label">SCAN GATE</span>
            </div>
          </div>
        </div>

        {/* Bottom Feature Badges */}
        <div className="cover-bottom-bar">
          <span className="cover-pill">
            <Zap size={11} className="text-emerald-400" />
            <span>Instant QRIS</span>
          </span>
          <span className="cover-pill">
            <ShieldCheck size={11} className="text-cyan-400" />
            <span>Onsite Scanner</span>
          </span>
        </div>
      </div>
    )
  }

  // E-commerce (ACSA Plakat)
  return (
    <div className={`project-cover-container project-cover-ecommerce ${isLarge ? 'is-detail' : ''}`}>
      <div className="cover-bg-glow glow-cyan"></div>

      {/* Mock Browser Header */}
      <div className="mock-window-header">
        <div className="mock-window-dots">
          <span className="dot dot-red"></span>
          <span className="dot dot-yellow"></span>
          <span className="dot dot-green"></span>
        </div>
        <span className="mock-window-title">acsa-plakat.store</span>
        <span className="mock-live-badge badge-cyan">Midtrans Snap</span>
      </div>

      {/* Central Graphic */}
      <div className="cover-content">
        <div className="cover-shop-card">
          <div className="shop-icon-wrapper">
            <ShoppingBag className="shop-icon text-cyan-400" size={isLarge ? 32 : 22} />
          </div>
          <div className="shop-info">
            <span className="shop-tag">CUSTOM PRODUCT</span>
            <span className="shop-item-name">Crystal Trophy & Plaque</span>
            <div className="shop-price-row">
              <span className="shop-price">IDR 350.000</span>
              <span className="shop-cart-pill">+ Cart Drawer</span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Feature Badges */}
      <div className="cover-bottom-bar">
        <span className="cover-pill">
          <CreditCard size={11} className="text-cyan-400" />
          <span>Payment Sandbox</span>
        </span>
        <span className="cover-pill">
          <ShieldCheck size={11} className="text-emerald-400" />
          <span>Admin Order CMS</span>
        </span>
      </div>
    </div>
  )
}

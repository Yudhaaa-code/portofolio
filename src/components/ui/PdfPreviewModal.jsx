import React, { useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { X, Download, ExternalLink, FileText } from "@/components/ui/icons"
import { useLanguage } from "@/context/LanguageContext"

export function PdfPreviewModal({
  isOpen,
  onClose,
  pdfUrl = "/downloads/Portfolio-Yudha-Putra-Anangga.pdf",
  fileName = "Portfolio-Yudha-Putra-Anangga.pdf",
}) {
  const { t } = useLanguage()

  // Prevent body scrolling when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "unset"
    }
    return () => {
      document.body.style.overflow = "unset"
    }
  }, [isOpen])

  // Close on Escape key press
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape" && isOpen) {
        onClose()
      }
    }
    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [isOpen, onClose])

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-[9999] flex items-center justify-center p-3 sm:p-4 md:p-6 bg-black/80 backdrop-blur-md"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          onClick={onClose}
        >
          <motion.div
            className="relative w-full max-w-5xl h-[88vh] md:h-[90vh] flex flex-col bg-slate-950/95 border border-emerald-500/30 rounded-2xl shadow-[0_0_50px_rgba(16,185,129,0.25)] overflow-hidden"
            initial={{ scale: 0.94, opacity: 0, y: 25 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.94, opacity: 0, y: 25 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="flex items-center justify-between px-4 py-3 md:px-6 md:py-4 border-b border-slate-800 bg-slate-900/60 backdrop-blur-sm">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 shadow-sm">
                  <FileText className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="text-base md:text-lg font-bold text-white leading-tight">
                    {t('pdfModal.title')}
                  </h3>
                  <p className="text-xs text-slate-400">
                    {t('pdfModal.subtitle')}
                  </p>
                </div>
              </div>

              {/* Header Action Buttons */}
              <div className="flex items-center gap-2 sm:gap-3">
                <a
                  href={pdfUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-slate-700 bg-slate-900/80 text-xs font-medium text-slate-300 hover:text-white hover:bg-slate-800 hover:border-slate-600 transition-colors"
                  title={t('pdfModal.newTab')}
                >
                  <ExternalLink className="h-3.5 w-3.5" />
                  {t('pdfModal.newTab')}
                </a>

                <a
                  href={pdfUrl}
                  download={fileName}
                  className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-lg bg-emerald-500 text-xs md:text-sm font-semibold text-white hover:bg-emerald-600 shadow-[0_0_20px_rgba(16,185,129,0.35)] hover:shadow-[0_0_25px_rgba(16,185,129,0.5)] transition-all cursor-pointer"
                  title={t('pdfModal.downloadPdf')}
                >
                  <Download className="h-4 w-4" />
                  {t('pdfModal.downloadPdf')}
                </a>

                <button
                  type="button"
                  onClick={onClose}
                  className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800/80 transition-colors cursor-pointer"
                  aria-label={t('pdfModal.close')}
                >
                  <X className="h-5 w-5" />
                </button>
              </div>
            </div>

            {/* Modal Body: Embedded PDF Viewer */}
            <div className="relative flex-1 w-full bg-slate-900 overflow-hidden">
              <iframe
                src={`${pdfUrl}#toolbar=1&navpanes=0`}
                className="w-full h-full border-0"
                title="Portfolio PDF Preview"
              />
            </div>

            {/* Modal Footer / Mobile Actions */}
            <div className="flex items-center justify-between px-4 py-2.5 md:px-6 bg-slate-950/80 border-t border-slate-800/80 text-xs text-slate-400">
              <span className="hidden sm:inline">
                {t('pdfModal.tip')}
              </span>
              <span className="sm:hidden text-slate-400 text-[11px]">
                {t('pdfModal.formatBadge')}
              </span>
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={onClose}
                  className="px-3 py-1 text-slate-400 hover:text-white text-xs transition-colors cursor-pointer"
                >
                  {t('pdfModal.close')}
                </button>
                <a
                  href={pdfUrl}
                  download={fileName}
                  className="inline-flex sm:hidden items-center gap-1 px-3 py-1 bg-emerald-500/20 text-emerald-300 rounded border border-emerald-500/40 text-xs"
                >
                  <Download className="h-3.5 w-3.5" />
                  {t('pdfModal.downloadShort')}
                </a>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default PdfPreviewModal

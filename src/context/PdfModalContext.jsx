import React, { createContext, useContext, useState } from 'react'
import { PdfPreviewModal } from '@/components/ui/PdfPreviewModal'

const PdfModalContext = createContext({
  isOpen: false,
  openPreview: () => {},
  closePreview: () => {},
})

export function PdfModalProvider({ children }) {
  const [isOpen, setIsOpen] = useState(false)

  const openPreview = () => setIsOpen(true)
  const closePreview = () => setIsOpen(false)

  return (
    <PdfModalContext.Provider value={{ isOpen, openPreview, closePreview }}>
      {children}
      <PdfPreviewModal isOpen={isOpen} onClose={closePreview} />
    </PdfModalContext.Provider>
  )
}

export function usePdfModal() {
  return useContext(PdfModalContext)
}

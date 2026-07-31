"use client"

import {
  createContext,
  useCallback,
  useContext,
  useState,
  type ReactNode,
} from "react"

import { ContactModal } from "@/components/contact-modal"

type ContactModalContextValue = {
  openContactModal: () => void
}

const ContactModalContext = createContext<ContactModalContextValue | null>(null)

export function ContactModalProvider({ children }: { children: ReactNode }) {
  const [open, setOpen] = useState(false)
  const [formKey, setFormKey] = useState(0)

  const openContactModal = useCallback(() => setOpen(true), [])

  const handleOpenChange = useCallback((nextOpen: boolean) => {
    setOpen(nextOpen)
    if (!nextOpen) {
      setFormKey((current) => current + 1)
    }
  }, [])

  return (
    <ContactModalContext.Provider value={{ openContactModal }}>
      {children}
      <ContactModal key={formKey} open={open} onOpenChange={handleOpenChange} />
    </ContactModalContext.Provider>
  )
}

export function useContactModal() {
  const context = useContext(ContactModalContext)
  if (!context) {
    throw new Error("useContactModal must be used within ContactModalProvider")
  }
  return context
}

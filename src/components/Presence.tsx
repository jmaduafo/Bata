"use client"
import React from 'react'
import { AnimatePresence } from 'framer-motion'

function Presence({ children}: { readonly children: React.ReactNode}) {
  return (
    <AnimatePresence>
        {children}
    </AnimatePresence>
  )
}

export default Presence
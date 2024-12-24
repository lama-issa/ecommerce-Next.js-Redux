import React from 'react'

export default function loading() {
  return (
    <div className="flex items-center justify-center mt-80">
    <div
      className="w-14 h-14 border-4 border-foreground border-t-transparent rounded-full animate-spin"
      role="status"
    ></div>
  </div>
  
  )
}

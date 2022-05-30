import React, { useCallback, useEffect, useState } from "react"

export const SizeContext = React.createContext<{ innerWidth: number }>({ innerWidth: 0 })

export const SizeObserver: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [innerWidth, setInnerWidth] = useState(0)
  const handleResize = useCallback(() => setInnerWidth(window.innerWidth), [])

  useEffect(() => {
    handleResize()
    window.addEventListener("resize", handleResize, { passive: true })
    return () => window.removeEventListener("resize", handleResize)
  }, [handleResize])

  return (
    <SizeContext.Provider value={{ innerWidth }}>
      {children}
    </SizeContext.Provider >
  )
}

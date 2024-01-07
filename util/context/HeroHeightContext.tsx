import React, { createContext, useContext, useState } from 'react'

// Create a context with a default value
const HeroHeightContext = createContext({
  heroHeight: 0,
  setHeroHeight: (height: number) => {},
})

// Export the provider as a named export
export const HeroHeightProvider = ({ children }) => {
  const [heroHeight, setHeroHeight] = useState(0)

  return (
    <HeroHeightContext.Provider value={{ heroHeight, setHeroHeight }}>
      {children}
    </HeroHeightContext.Provider>
  )
}

// Export the hook as a named export
export const useHeroHeight = () => useContext(HeroHeightContext)

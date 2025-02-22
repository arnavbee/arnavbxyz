'use client'

import { useEffect, useState } from 'react'

export function Clock() {
  const [time, setTime] = useState('')
  const [showColon, setShowColon] = useState(true)

  useEffect(() => {
    const updateTime = () => {
      const now = new Date()
      const hours = now.getHours() % 12 || 12
      const minutes = now.getMinutes().toString().padStart(2, '0')
      const meridiem = now.getHours() >= 12 ? 'PM' : 'AM'
      setTime(`${hours}${showColon ? ':' : ' '}${minutes} ${meridiem}`)
    }

    updateTime()
    const timeInterval = setInterval(updateTime, 1000)
    const colonInterval = setInterval(() => setShowColon(prev => !prev), 1000)

    return () => {
      clearInterval(timeInterval)
      clearInterval(colonInterval)
    }
  }, [showColon])

  return <span>{time}</span>
} 
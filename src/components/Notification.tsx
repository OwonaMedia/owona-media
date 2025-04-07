'use client'

import { useEffect, useState } from 'react'
import { notification } from '@/lib/notification'
import { motion, AnimatePresence } from 'framer-motion'

export default function Notification() {
  const [notifications, setNotifications] = useState(notification.getNotifications())

  useEffect(() => {
    const updateNotifications = () => {
      setNotifications(notification.getNotifications())
    }

    // Aktualisiere alle 100ms
    const interval = setInterval(updateNotifications, 100)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="fixed top-4 right-4 z-50">
      <AnimatePresence>
        {notifications.map((notification) => (
          <motion.div
            key={notification.id}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 100 }}
            className={`mb-2 p-4 rounded-lg shadow-lg ${
              notification.type === 'success' ? 'bg-green-500' :
              notification.type === 'error' ? 'bg-red-500' :
              notification.type === 'warning' ? 'bg-yellow-500' :
              'bg-blue-500'
            } text-white`}
          >
            <p className="text-sm">{notification.message}</p>
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  )
} 
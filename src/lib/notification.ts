interface Notification {
  id: string
  type: 'success' | 'info' | 'warning' | 'error'
  message: string
  timestamp: number
}

class NotificationService {
  private static instance: NotificationService
  private notifications: Notification[] = []
  private readonly maxNotifications = 5

  private constructor() {}

  public static getInstance(): NotificationService {
    if (!NotificationService.instance) {
      NotificationService.instance = new NotificationService()
    }
    return NotificationService.instance
  }

  public addNotification(type: Notification['type'], message: string): void {
    const notification: Notification = {
      id: Math.random().toString(36).substr(2, 9),
      type,
      message,
      timestamp: Date.now()
    }

    this.notifications.unshift(notification)
    
    // Begrenze die Anzahl der Benachrichtigungen
    if (this.notifications.length > this.maxNotifications) {
      this.notifications.pop()
    }

    // Automatisches Entfernen nach 5 Sekunden
    setTimeout(() => {
      this.removeNotification(notification.id)
    }, 5000)
  }

  public removeNotification(id: string): void {
    this.notifications = this.notifications.filter(n => n.id !== id)
  }

  public getNotifications(): Notification[] {
    return this.notifications
  }

  public clearNotifications(): void {
    this.notifications = []
  }
}

export const notification = NotificationService.getInstance() 
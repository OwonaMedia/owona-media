interface ErrorData {
  message: string
  stack?: string
  componentStack?: string
  timestamp: string
  userAgent: string
  url: string
}

class MonitoringService {
  private static instance: MonitoringService
  private readonly apiEndpoint: string

  private constructor() {
    this.apiEndpoint = process.env.NEXT_PUBLIC_MONITORING_API || '/api/monitoring'
  }

  public static getInstance(): MonitoringService {
    if (!MonitoringService.instance) {
      MonitoringService.instance = new MonitoringService()
    }
    return MonitoringService.instance
  }

  public async logError(error: Error, componentStack?: string): Promise<void> {
    if (process.env.NODE_ENV !== 'production') {
      console.error('Error in development:', error)
      return
    }

    const errorData: ErrorData = {
      message: error.message,
      stack: error.stack,
      componentStack,
      timestamp: new Date().toISOString(),
      userAgent: navigator.userAgent,
      url: window.location.href
    }

    try {
      await fetch(this.apiEndpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(errorData)
      })
    } catch (e) {
      console.error('Failed to send error to monitoring service:', e)
    }
  }

  public async logEvent(eventName: string, data?: Record<string, any>): Promise<void> {
    if (process.env.NODE_ENV !== 'production') {
      console.log('Event in development:', eventName, data)
      return
    }

    try {
      await fetch(this.apiEndpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          type: 'event',
          name: eventName,
          data,
          timestamp: new Date().toISOString(),
          userAgent: navigator.userAgent,
          url: window.location.href
        })
      })
    } catch (e) {
      console.error('Failed to send event to monitoring service:', e)
    }
  }
}

export const monitoring = MonitoringService.getInstance() 
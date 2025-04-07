interface CacheItem<T> {
  data: T
  timestamp: number
  expiresAt: number
}

class CacheService {
  private static instance: CacheService
  private cache: Map<string, CacheItem<any>>
  private readonly defaultTTL: number

  private constructor() {
    this.cache = new Map()
    this.defaultTTL = 5 * 60 * 1000 // 5 Minuten Standard-TTL
  }

  public static getInstance(): CacheService {
    if (!CacheService.instance) {
      CacheService.instance = new CacheService()
    }
    return CacheService.instance
  }

  public set<T>(key: string, data: T, ttl?: number): void {
    const now = Date.now()
    const expiresAt = now + (ttl || this.defaultTTL)

    this.cache.set(key, {
      data,
      timestamp: now,
      expiresAt
    })

    // Cleanup alte Einträge
    this.cleanup()
  }

  public get<T>(key: string): T | null {
    const item = this.cache.get(key)

    if (!item) {
      return null
    }

    const now = Date.now()

    if (now > item.expiresAt) {
      this.cache.delete(key)
      return null
    }

    return item.data as T
  }

  public delete(key: string): void {
    this.cache.delete(key)
  }

  public clear(): void {
    this.cache.clear()
  }

  private cleanup(): void {
    const now = Date.now()
    for (const [key, item] of this.cache.entries()) {
      if (now > item.expiresAt) {
        this.cache.delete(key)
      }
    }
  }
}

export const cache = CacheService.getInstance() 
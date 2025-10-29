type SubdomainData = {
  emoji: string;
  createdAt: number;
};

class InMemoryStorage {
  private data: Map<string, SubdomainData> = new Map();

  async get<T>(key: string): Promise<T | null> {
    const value = this.data.get(key);
    return value as T || null;
  }

  async set(key: string, value: SubdomainData): Promise<void> {
    this.data.set(key, value);
  }

  async del(key: string): Promise<void> {
    this.data.delete(key);
  }

  async keys(pattern: string): Promise<string[]> {
    const regex = new RegExp(pattern.replace('*', '.*'));
    return Array.from(this.data.keys()).filter(key => regex.test(key));
  }

  async mget<T>(...keys: string[]): Promise<(T | null)[]> {
    return keys.map(key => {
      const value = this.data.get(key);
      return value ? (value as T) : null;
    });
  }
}

export const storage = new InMemoryStorage();

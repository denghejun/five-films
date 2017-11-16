export interface BrowserService {
  open(url: string): Promise<BrowserResult>;
}

export interface BrowserResult {
  type: string; // ['cancel', 'dismissed'].
}

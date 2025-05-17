export interface AppInfo {
  id: number;
  title: string;
  developer: string;
  platform: string;
  description: string;
  apkUrl: string;
  apkUrl2?: string | null;
  image: string;
  screenshots: string[];
}

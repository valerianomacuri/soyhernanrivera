const VIDEOS_BASE_URL = "https://dmr7t4zl2pe6s.cloudfront.net/videos";

export function videoUrl(fileName: string): string {
  return `${VIDEOS_BASE_URL}/${fileName}`;
}

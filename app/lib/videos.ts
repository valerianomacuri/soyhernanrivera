const VIDEOS_BASE_URL = "https://soyhernanrivera.s3.us-east-1.amazonaws.com/videos";

export function videoUrl(fileName: string): string {
  return `${VIDEOS_BASE_URL}/${fileName}`;
}

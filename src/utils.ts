export default function idFromLink(link: string): string {
  const result = link.substring(link.lastIndexOf('/') + 1);
  return result;
}

export function formatFileSize(size: number): string {
  const i = Math.floor(Math.log(size) / Math.log(1024));
  return (
    (size / Math.pow(1024, i)).toFixed(2) +
    " " +
    (i > -1 ? ["kB", "KB", "MB", "GB", "TB"][i] : "Bit")
  );
}

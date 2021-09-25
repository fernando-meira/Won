export default function formatTime(time: number) {
  return time.toString().padStart(2, '0');
}

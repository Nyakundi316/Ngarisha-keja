const attempts = new Map();
const windowMs = 10 * 60 * 1000;
const maxAttempts = 5;

export function allowQuoteAttempt(identifier) {
  const now = Date.now();
  const recent = (attempts.get(identifier) || []).filter((timestamp) => now - timestamp < windowMs);
  if (recent.length >= maxAttempts) {
    attempts.set(identifier, recent);
    return false;
  }
  recent.push(now);
  attempts.set(identifier, recent);
  if (attempts.size > 1000) {
    for (const [key, timestamps] of attempts) {
      if (!timestamps.some((timestamp) => now - timestamp < windowMs)) attempts.delete(key);
    }
  }
  return true;
}

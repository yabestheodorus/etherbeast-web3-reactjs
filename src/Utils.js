export const decodeBase64Json = (dataUri) => {
  // 1. buang prefix "data:application/json;base64,"
  const base64 = dataUri.split(",")[1];

  // 2. decode base64 → string
  const jsonString = atob(base64);

  // 3. bersihkan control characters (ini penting)
  const sanitized = jsonString.replace(/[\x00-\x1F\x7F]/g, "");

  // 4. parse JSON
  return JSON.parse(sanitized);
};

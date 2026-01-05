import { formatUnits } from "viem";
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

export const roundUpTo8Decimals = (wei) => {
  const decimals = 8n;
  const factor = 10n ** (18n - decimals); // 10^12

  const roundedWei = ((wei + factor - 1n) / factor) * factor;
  return formatUnits(roundedWei, 18);
};

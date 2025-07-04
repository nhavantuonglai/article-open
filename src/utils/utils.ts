import { I18N } from 'nhavantuonglai:config';

export const formatter: Intl.DateTimeFormat = new Intl.DateTimeFormat(I18N?.language || 'en-US', {
  year: 'numeric',
  month: 'short',
  day: 'numeric',
  timeZone: 'UTC',
});

export const getFormattedDate = (date: Date): string => (date ? formatter.format(date) : '');

export const trim = (str = '', ch?: string) => {
  let start = 0,
    end = str.length || 0;
  while (start < end && str[start] === ch) ++start;
  while (end > start && str[end - 1] === ch) --end;
  return start > 0 || end < str.length ? str.substring(start, end) : str;
};

export const toUiAmount = (amount: number) => {
  if (!amount) return 0;
  const thresholds: [number, string][] = [
    [1_000_000_000, 'B'],
    [1_000_000, 'M'],
    [1_000, 'K'],
    [0, ''],
  ];
  for (const [threshold, suffix] of thresholds) {
    if (amount >= threshold) {
      const formattedNumber = (amount / threshold).toFixed(suffix ? 1 : 0);
      return Number(formattedNumber) === parseInt(formattedNumber) ? parseInt(formattedNumber) + suffix : formattedNumber + suffix;
    }
  }
  return amount.toString();
};
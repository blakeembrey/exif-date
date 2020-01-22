const DATE_REGEXP = new RegExp(
  "^(\\d{4}):(\\d{2}):(\\d{2}) (\\d{2}):(\\d{2}):(\\d{2})" +
    "(?:\\.(\\d{1,3}))?(?:([zZ])|([-+])(\\d{2}):(\\d{2}))?$"
);

/**
 * Pad EXIF date formatting.
 */
function pad(num: number, length: number) {
  let value = num.toString();
  let len = length - value.length;

  while (len > 0) {
    len -= 1;
    value = `0${value}`;
  }

  return value;
}

/**
 * Parse EXIF date string into `Date`.
 */
export function parse(value: string): Date {
  const m = DATE_REGEXP.exec(value);

  if (m == null) {
    return new Date(NaN);
  }

  const date = new Date();
  const offset = m[8]
    ? 0
    : m[9]
    ? (Number(m[10]) * 60 + Number(m[11])) * (m[9] === "+" ? 1 : -1)
    : 0;

  date.setUTCFullYear(Number(m[1]));
  date.setUTCMonth(Number(m[2]) - 1);
  date.setUTCDate(Number(m[3]));
  date.setUTCHours(Number(m[4]));
  date.setUTCMinutes(Number(m[5]) + offset);
  date.setUTCSeconds(Number(m[6]));
  date.setUTCMilliseconds(Number(m[7]) || 0);

  return date;
}

/**
 * Format `Date` into EXIF format.
 */
export function format(
  value: Date,
  subsecond?: boolean,
  timezone?: boolean
): string {
  if (isNaN(value.getTime())) return "";

  const year = pad(value.getUTCFullYear(), 4);
  const month = pad(value.getUTCMonth() + 1, 2);
  const date = pad(value.getUTCDate(), 2);
  const hours = pad(value.getUTCHours(), 2);
  const minutes = pad(value.getUTCMinutes(), 2);
  const seconds = pad(value.getUTCSeconds(), 2);

  const suffix = subsecond
    ? `.${Math.round(value.getUTCMilliseconds() / 10)}`
    : "";
  const zone = timezone ? "Z" : "";

  return `${year}:${month}:${date} ${hours}:${minutes}:${seconds}${suffix}${zone}`;
}

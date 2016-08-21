const DATE_REGEXP = /^(\d{4}):(\d{2}):(\d{2}) (\d{2}):(\d{2}):(\d{2})(?:\.(\d{2}))?[zZ]?$/

/**
 * Pad EXIF date formatting.
 */
function pad (num: number, length = 2) {
  let value = num.toString()
  let len = length - value.length

  while (len > 0) {
    len -= 1
    value = `0${value}`
  }

  return value
}

/**
 * Parse EXIF date string into `Date`.
 */
export function parse (value: string): Date {
  const m = DATE_REGEXP.exec(value)

  if (m == null) {
    return
  }

  const date = new Date()

  date.setUTCFullYear(Number(m[1]))
  date.setUTCMonth(Number(m[2]) - 1)
  date.setUTCDate(Number(m[3]))
  date.setUTCHours(Number(m[4]))
  date.setUTCMinutes(Number(m[5]))
  date.setUTCSeconds(Number(m[6]))
  date.setUTCMilliseconds((Number(m[7]) * 10) || 0)

  return date
}

/**
 * Format `Date` into EXIF format.
 */
export function format (value: Date, subsecond?: boolean): string {
  if (isNaN(value.getTime())) {
    return
  }

  const date = `${pad(value.getUTCFullYear(), 4)}:${pad(value.getUTCMonth() + 1)}:${pad(value.getUTCDate())}`
  const time = `${pad(value.getUTCHours())}:${pad(value.getUTCMinutes())}:${pad(value.getUTCSeconds())}`
  const suffix = subsecond ? `.${Math.round(value.getUTCMilliseconds() / 10)}` : ''

  return `${date} ${time}${suffix}`
}

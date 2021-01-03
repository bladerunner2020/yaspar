const parsers = [
  { re: /^(\d+)$/, f: (res) => +res[1] },
  { re: /^(\d+) *ms$/, f: (res) => +res[1] },
  { re: /^(\d+) *(:?s|sec|seconds?)$/, f: (res) => +res[1] * 1000 },
  { re: /^(\d+) *(:?m|min|minutes?)$/, f: (res) => +res[1] * 60 * 1000 },
  { re: /^(\d+) *(:?h|hours?)$/, f: (res) => +res[1] * 3600 * 1000 },
  { re: /^(\d{1,2}):(\d{2})$/, f: (res) => +res[1] * 60 * 1000 + res[2] * 1000 },
  { re: /^(\d{1,2}):(\d{2}):(\d{2})$/, f: (res) => +res[1] * 3600 * 1000 + res[2] * 60 * 1000 + res[3] * 1000 },
];

const toMilliseconds = (s) => {
  if (typeof s === 'number') return s;
  if (typeof s !== 'string') throw new Error('Expected string or number');

  const trimmed = s.trim();
  for (let i = 0; i < parsers.length; i++) {
    const { re, f } = parsers[i];
    const res = re.exec(trimmed);
    if (res) return f(res);
  }

  return null;
};

const toBoolean = (s) => {
  if (typeof s === 'boolean') return s;
  if (typeof s === 'number') return !!s;
  if (typeof s === 'string') {
    const res = /(:?(yes|true|on)|(no|false|off)|(\d+))/i.exec(s);
    if (!res) return null;
    if (typeof res[2] !== 'undefined') return true;
    if (typeof res[3] !== 'undefined') return false;
    if (typeof res[4] !== 'undefined') return +res[4] !== 0;
  }
  return null;
};

module.exports = {
  toMilliseconds,
  toBoolean
};

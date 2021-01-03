const { toMilliseconds, toBoolean } = require('..');

describe('general tests', () => {
  it('toMilliseconds', () => {
    expect(toMilliseconds(42)).toBe(42);
    expect(toMilliseconds('42')).toBe(42);
    expect(toMilliseconds('42 ms')).toBe(42);
    expect(toMilliseconds('42 s')).toBe(42000);
    expect(toMilliseconds('42 sec')).toBe(42000);
    expect(toMilliseconds('42 seconds')).toBe(42000);
    expect(toMilliseconds('42 second')).toBe(42000);
    expect(toMilliseconds('42 m')).toBe(42 * 60 * 1000);
    expect(toMilliseconds('42 min')).toBe(42 * 60 * 1000);
    expect(toMilliseconds('42 minutes')).toBe(42 * 60 * 1000);
    expect(toMilliseconds('42 minute')).toBe(42 * 60 * 1000);
    expect(toMilliseconds('42 h')).toBe(42 * 3600 * 1000);
    expect(toMilliseconds('42 hours')).toBe(42 * 3600 * 1000);
    expect(toMilliseconds('42 hour')).toBe(42 * 3600 * 1000);
    expect(toMilliseconds('10:20')).toBe(10 * 60 * 1000 + 20 * 1000);
    expect(toMilliseconds('1:20')).toBe(1 * 60 * 1000 + 20 * 1000);
    expect(toMilliseconds('10:20:30')).toBe(10 * 3600 * 1000 + 20 * 60 * 1000 + 30 * 1000);
    expect(toMilliseconds('1:20:30')).toBe(1 * 3600 * 1000 + 20 * 60 * 1000 + 30 * 1000);

    expect(toMilliseconds('42a')).toBe(null);
    expect(toMilliseconds('1:2')).toBe(null);
    expect(toMilliseconds('10:2:30')).toBe(null);
    expect(toMilliseconds('10:20:3')).toBe(null);
  });

  it('toBoolean', () => {
    expect(toBoolean(true)).toBe(true);
    expect(toBoolean(false)).toBe(false);

    expect(toBoolean(1)).toBe(true);
    expect(toBoolean(42)).toBe(true);
    expect(toBoolean(0)).toBe(false);

    expect(toBoolean('true')).toBe(true);
    expect(toBoolean('yes')).toBe(true);
    expect(toBoolean('on')).toBe(true);
    expect(toBoolean('1')).toBe(true);
    expect(toBoolean('42')).toBe(true);

    expect(toBoolean('false')).toBe(false);
    expect(toBoolean('no')).toBe(false);
    expect(toBoolean('off')).toBe(false);
    expect(toBoolean('0')).toBe(false);

    expect(toBoolean('abcc')).toBe(null);
  });
});

import { describe, expect, it } from 'vitest';

import { formatPhone } from '../../src/lib/formatters';

describe('formatPhone', () => {
  it('formata números com 11 dígitos', () => {
    expect(formatPhone('71999990000')).toBe('(71) 99999-0000');
  });

  it('mantém parcialmente preenchido', () => {
    expect(formatPhone('71')).toBe('71');
    expect(formatPhone('719')).toBe('(71) 9');
  });

  it('remove caracteres não numéricos', () => {
    expect(formatPhone('(+55) 71-99999-0000')).toBe('(71) 99999-0000');
  });
});

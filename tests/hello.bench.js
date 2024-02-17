import { describe, expect, bench } from "vitest";

describe('benchmarking', () => {
  function sayHello(name) {
    return `Hello ${name}`;
  }

  bench('should run a benchmark', () => {
    const result = sayHello('Thariq');
    expect(result).toBe("Hello Thariq");
  });
});
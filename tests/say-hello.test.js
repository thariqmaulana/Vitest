import { describe, expect, it } from "vitest";
import { sayHello } from "../src/say-hello.js";


describe('Say Hello', () => {
  it('should say hello', () => {
    const result = sayHello("Thariq");
    expect(result).toBe("Hello Thariq");
  });
});
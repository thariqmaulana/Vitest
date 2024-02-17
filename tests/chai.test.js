import { assert, describe, expect, it } from "vitest";

function sayHello(name) {
  return `Hello ${name}`;
}

describe('sayHello', () => {
  it('should return with name', () => {
    expect(sayHello("thariq")).to.be.a('string', 'Hello thariq');
    assert.equal(sayHello("thariq"), "Hello thariq");
  });
});
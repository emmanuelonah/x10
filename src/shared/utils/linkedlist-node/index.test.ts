import { LinkedlistNode } from './index.util';

describe('LinkedlistNode', () => {
  it('should create a new node with the given value', () => {
    const node = new LinkedlistNode(1);
    expect(node.value).toBe(1);
    expect(node.next).toBeNull();
  });

  it('should create a new node with the given value and next node', () => {
    const nextNode = new LinkedlistNode(2);
    const node = new LinkedlistNode(1, nextNode);
    expect(node.value).toBe(1);
    expect(node.next).toBe(nextNode);
  });
});

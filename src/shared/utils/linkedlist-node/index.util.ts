export class LinkedlistNode<ValueType> {
  public value: ValueType;
  public next: LinkedlistNode<ValueType> | null;

  constructor(value: ValueType, next: LinkedlistNode<ValueType> | null = null) {
    this.value = value;
    this.next = next;
  }
}

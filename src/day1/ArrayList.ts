export default class ArrayList<T> {
  public length: number;
  public list: T[];

  constructor(length: number) {
    this.length = 0;
    this.list = [];
  }

  prepend(item: T): void {
    this.length = this.list.unshift(item);
  }
  insertAt(item: T, idx: number): void {
    for (let i = this.length; i >= idx; i--) {
      this.list[i + 1] = this.list[i];
      if (i === idx) {
        this.list[idx] = item;
      }
      idx++;
    }
  }
  append(item: T): void {
    this.length = this.list.push(item);
  }
  remove(item: T): T | undefined {
    let idx = -1;
    for (let i = 0; i < this.length; i++) {
      if (this.list[i] === item) {
        idx = i;
        break;
      }
    }
    if (idx >= 0) {
      this.length--;
      this.list.splice(idx, 1)[0];
      return item;
    }
    return undefined;
  }
  get(idx: number): T | undefined {
    return this.list[idx];
  }
  removeAt(idx: number): T | undefined {
    this.length--;
    return this.list.splice(idx, 1)[0];
  }
}

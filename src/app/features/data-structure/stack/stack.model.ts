export class Stack {
  public items: string[];

  constructor() {
    this.items = [];
  }

  public addItem(): void {
    const newItem = `Item ${this.items.length + 1}`;
    // Adiciona o novo item no final do array
    this.items[this.items.length] = newItem;
  }

  public removeItem(): void {
    if (this.items.length > 0) {
      // Remove o último item do array
      this.items.length = this.items.length - 1;
    }
  }
}

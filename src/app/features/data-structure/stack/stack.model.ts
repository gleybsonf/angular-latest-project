// stack.model.ts
import { computed, signal } from '@angular/core';

export class Stack {
  // Transformamos a lista em um Signal privado
  private _items = signal<string[]>([]);

  // Expomos apenas uma versão de leitura (Readonly) para segurança
  public items = this._items.asReadonly();

  // Signal computado para facilitar o uso no HTML
  public isEmpty = computed(() => this._items().length === 0);

  public addItem(): void {
    const nextValue = `Item ${this._items().length + 1}`;
    // .update() garante a criação de uma nova referência (Imutabilidade)
    this._items.update((prev) => [...prev, nextValue]);
  }

  public removeItem(): void {
    this._items.update((prev: string[]) => {
      if (prev.length === 0) {
        return prev; // Nada a remover, retorna o array original
      }

      const newArray: string[] = [];
      for (let i = 0; i < prev.length - 1; i++) {
        console.log('Adicionando item ao novo array:', prev[i]);
        newArray[i] = prev[i];
      }

      return newArray;
    });
  }
}

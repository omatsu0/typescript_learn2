export class Message {
  constructor(private text: string) {}

  render(): HTMLElement {
    const p = document.createElement("p");
    p.textContent = this.text;
    return p;
  }
}
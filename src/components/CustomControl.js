export class CustomControl {
  constructor({ container }) {
    this._container = container
  }

  onAdd(map) {
    this.map = map;
    this.container = this._container
    return this.container;
  }
  onRemove() {
    this.container.parentNode.removeChild(this.container);
    this.map = undefined;
  }
}



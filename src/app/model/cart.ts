export class Cart {
  id: string;
  name: string;
  price: string;
  description: string;
  image: string;
  quantity: number;
  constructor(id?: string, name?: string, price?: string,
              description?: string, image?: string, quantity?: number) {
    this.id = id;
    this.name = name;
    this.price = price;
    this.description = description;
    this.image = image;
    this.quantity = quantity;
  }
}

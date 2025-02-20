export class Lead {
    id: string;
    name: string;
    phone: string;
    email: string;
    created: Date;
    suburb: string;
    category: string;
    description: string;
    price: number;

    constructor(
      id: string,
      name: string,
      phone: string,
      email: string,
      created: Date,
      suburb: string,
      category: string,
      description: string,
      price: number
    ) {
      this.id = id;
      this.name = name;
      this.phone = phone;
      this.email = email;
      this.created = created;
      this.suburb = suburb;
      this.category = category;
      this.description = description;
      this.price = price;
    }
  }
  
interface Category {
  id: string;
  name: string;
  imageUrl: Image[];
  products?: Product[];
  children?: Category[];
}

interface Image {
  id: string;
  thumbnailUrl: string;
}

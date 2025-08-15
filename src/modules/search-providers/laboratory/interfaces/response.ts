export interface ILaboratoryRawBook {
  type: 'product' | 'post';
  price: string;
  title: string;
  data: {
    url: string;
    author: string;
  };
}

const domain = 'vps709924.ovh.net';
const products = 'products';

export const api = {
    products: {
        all: `${domain}/${products}`,
        one: (id: number) => `${domain}/${products}/${id}`,
        create: `${domain}/${products}`,
        update: `${domain}/${products}`,
    }
};

export interface Product {
    id: number,
    name: string,
    description: string,
    image: string,
    price: number,
    discount_amount: number,
    status: boolean,
    categories: CategoryShort[]	
}

export interface Data {
    data: Product[];
    meta: {
        pagination:{
            page: number
            pages: number
        }
    }
};

export interface CategoryShort {
    id: number,
    name: string
}
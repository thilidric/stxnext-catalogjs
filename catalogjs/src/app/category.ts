export interface Category {
    id: number;
    name: string;
    description: string;
    status: boolean;
}

export interface Data{
    data: Category[];
    meta: {
        pagination:{
            page: number
            pages: number
        }
    }
};
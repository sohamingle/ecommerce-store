export interface Billboard{
    id:string
    label:string
    labelColor:string
    imageUrl:string
}

export interface Category{
    id:string
    name:string
    billboardId:string
    billboard:Billboard
}

export interface Product{
    id: string
    name: string
    price:string
    isFeatured:boolean
    category:Category
    size:Size
    color:Color
    images:Image[]    
}

export interface Size{
    id:string
    name:string
    value:string
}

export interface Color{
    id:string
    name:string
    value:string
}

export interface Image{
    id:string
    url:string
}
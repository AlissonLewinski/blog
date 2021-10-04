export interface Post {
    id?: number,
    title: string,
    image: string,
    description: string,
    category_id: number | null,
    content: string,
    created_at?: Date
}

export interface PostListParams {
    page: number,
    limit: number,
    titleSearch: string,
    direction: string,
    category_id: number | null
}
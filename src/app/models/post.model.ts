export interface Post {
    id?: number,
    title: string,
    image: string,
    content: string,
    created_at?: Date
}

export interface PostListParams {
    page: number,
    limit: number,
    titleSearch: string,
    direction: string
}
import { Tag } from "../tags/tags.model";

export interface Post {
    id: string;
    title: string;
    body: string;
    username: string;
    gravatar: string;
    user_id: string;
    answer_count: number;
    comment_count: number;
    views: number;
    created_at: Date;
    tags: Tag[];
}

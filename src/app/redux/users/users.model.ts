export interface User {
    id: string;
    username: string;
    email: string;
    created_at: Date;
    updated_at?: Date;
    profile_picture?: string;
    bio?: string;
    topTags?: { tagName: string; postCount: number }[];
    posts_count?: number;
    tags_count?: number;
    gravatar?: string;
    views?: number;
  }
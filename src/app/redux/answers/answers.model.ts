export interface Answer {
    id: string;
    body: string;
    user_id: string;
    username: string;
    gravatar: string;
    created_at: Date;
    post_id: string;
    votes: number;
  }
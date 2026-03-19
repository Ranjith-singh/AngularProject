import { Routes } from "@angular/router";
import { Comment } from "./comment";
import { commentGuard } from "./guard/comment-guard";

export const commentRoutes: Routes= [
    {path: '', component: Comment, resolve: {
        resolvedComponents: commentGuard
    }}
]
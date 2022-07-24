import { Post } from "../blog/Post";

export function ensure<T>() {
    return <X extends T>(v: X) => v;
}

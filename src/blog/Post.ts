
export abstract class Post {
    public abstract readonly name: string;
    public abstract readonly slug: string;
    public abstract readonly date: number;
    public abstract readonly hidden: boolean;
    public abstract readonly description: string;
    public abstract readonly tags: string[];
    public abstract readonly author: string;
    public abstract render(): JSX.Element;
}

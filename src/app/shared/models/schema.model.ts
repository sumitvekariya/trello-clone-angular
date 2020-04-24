export interface Tag {
    name: string;
    color?: string;
}
export interface Talk {
    text: string;
    speaker?: string;
    tags?: Tag[];
    image?: string;
    createdAt?: Date;
    issueType?: IssueType;
}

// export interface Issue {
//     name: IssueType;
//     color: string;
// }

export enum IssueType {
    Task = 'task',
    SubTask = 'sub-task',
    Bug = 'bug',
    Epic = 'epic',
    Story = 'story'
}

export interface Track {
    title: string;
    talks: Talk[];
    id: string;
}

export interface Board {
    title: string;
    tracks: Track[];
}
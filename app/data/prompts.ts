type PageType = 'year' | "trip" | "chapter";
type Theme = "paper" | "archive" | "film";
type TimelineItem = {
    id : string;
    date : string;
    text : string;
}

type Person = {
    id : string;
    name : string;
    descroption : string;
    image? : string;
}

type Favorite = {
    label : string;
    value : string
}
type Page = {
    id : string;
    type : PageType;
    title : string;
    intro : string;
    theme : Theme;
    coverImage? : string;
    timeLine : TimelineItem[];
    people : Person[];
    favorites : Favorite[];
    memory : string;
    closingNote : string;
    createdAt : string;
    updatedAt : string;
}


export function extractPatterns(input: string, patternType: "email" | "url" | "date" | "hashtag"): string[] {
    let regex: RegExp;

    switch (patternType) {
        case "email":
            regex = /\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}\b/g;
            break;
        case "url":
            regex = /\bhttps?:\/\/[^\s/$.?#].[^\s]*\b/g;
            break;
        case "date":
            regex = /\b\d{4}-\d{2}-\d{2}\b|\b\d{2}\/\d{2}\/\d{4}\b/g; // Matches YYYY-MM-DD or DD/MM/YYYY formats.
            break;
        case "hashtag":
            regex = /#[A-Za-z0-9_]+/g;
            break;
        default:
            throw new Error("Invalid pattern type provided.");
    }

    return input.match(regex) || [];
}

export const numOfFruits = (fruitsAndGrassMap: string[][]): number => {
    const moves: number[][] = [[1,0],[-1, 0], [0, 1], [0, -1]];
    const visited: boolean[][] = [];
    let fruits: number = 0;

    const markFruit = (i: number, j: number): void => {
        visited[i][j] = true;

        moves.forEach(([moveI, moveJ]) => {
            const doesExist: boolean = i + moveI < fruitsAndGrassMap.length && i + moveI >= 0 && j + moveJ < fruitsAndGrassMap[0].length && j + moveJ >= 0;
            if(doesExist && fruitsAndGrassMap[i + moveI][j + moveJ] === "1" && !visited[i + moveI][j + moveJ]){
                markFruit(i + moveI, j + moveJ);
            }
        });
    };

    for(let i = 0; i < fruitsAndGrassMap.length; ++i){
        visited.push(Array(fruitsAndGrassMap[0].length).fill(false));
    }

    for(let i = 0; i < fruitsAndGrassMap.length; ++i){
        for(let j = 0; j < fruitsAndGrassMap[i].length; ++j){
            if(fruitsAndGrassMap[i][j] === "1" && !visited[i][j]){
                fruits++;
                markFruit(i, j);
            }
        }
    }

    return fruits;
};
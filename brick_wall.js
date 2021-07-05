let wall1 = [[1,2,2,1],[3,1,2],[1,3,2],[2,4],[3,1,2],[1,3,3,1]];
let wall2 = [[1],[1],[1]];

const leastBricks = function (wall) {
    let map = {};
    let max = 0;

    wall.forEach(row => {
        let sum = 0;
        for (let n = 0; n < row.length - 1; n++) {
            sum += row[n];
            map[sum] = map[sum] ? map[sum] + 1 : 1;
            max = Math.max(map[sum], max);
        }
    })

    return wall.length - max;
}

console.log(leastBricks(wall1));
console.log(leastBricks(wall2));
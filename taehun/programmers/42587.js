// https://school.programmers.co.kr/learn/courses/30/lessons/42587
// [programmers] 42587. 프로세스 (스택/큐)

const returnMax = (arr) => {
    let maxValue = 0;
    arr.forEach((p) => {
        if (p[0] >= maxValue) {
            maxValue = p[0];
        }
    });
    return maxValue;
};

function solution(priorities, location) {
    let arr = priorities.map((p, i) => [p, i]);
    let order = 0;

    while (true) {
        let maxValue = returnMax(arr);
        let temp = arr.shift();

        if (temp[0] !== maxValue) arr.push(temp);
        else {
            order++;
            if (temp[1] === location) break;
        }
    }

    return order;
}
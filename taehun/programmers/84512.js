// https://school.programmers.co.kr/learn/courses/30/lessons/84512
// [programmers] 84512. 모음사전 (완전탐색)

function solution(word) {
    const strArr = ['A', 'E', 'I', 'O', 'U'];
    const set = new Set();
    let flag = false;

    function findAll(str) {
        if (str === word) {
            flag = true
            return
        }
        if (flag || str.length >= 5) {
            return
        }
        for (const s of strArr) {
            set.add(str + s);
            findAll(str + s);
        };
    }

    findAll('')

    const wordList = Array.from(set);

    wordList.sort()

    return wordList.findIndex((x) => x === word) + 1

}
// https://school.programmers.co.kr/learn/courses/30/lessons/12913
// [programmers] 12913. 땅따먹기

function solution(land) {
    let prev = [...land[land.length - 1]];

    for (let i = land.length - 2; i >= 0; i--) {
        // 최대값과 두 번째 최대값 찾기
        let max1 = -1, max2 = -1, maxIdx = -1;

        for (let j = 0; j < 4; j++) {
            if (prev[j] > max1) {
                max2 = max1;
                max1 = prev[j];
                maxIdx = j;
            } else if (prev[j] > max2) {
                max2 = prev[j];
            }
        }

        // 새로운 행 계산
        const curr = land[i].map((val, idx) =>
            val + (idx === maxIdx ? max2 : max1)
        );

        prev = curr;
    }

    return Math.max(...prev);
}

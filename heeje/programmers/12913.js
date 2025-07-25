// [programmers] 12913. 땅따먹기

function solution(land) {
    const N = land.length;
    const M = 4;

    for (let i = 1; i < N; i++) {
        for (let j = 0; j < M; j++) {
            land[i][j] += Math.max(...land[i - 1].slice(0, j), ...land[i - 1].slice(j + 1, 4))
        }
    }

    return Math.max(...land[N - 1]);
}
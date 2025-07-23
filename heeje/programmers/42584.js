// [programmers] 42584. 주식가격

function solution(prices) {
    const N = prices.length;
    const answer = Array({ length: N }).fill(0);
    const stack = [];

    for (let i = 0; i < N; i++) {
        if (stack.length > 0 && stack[stack.length - 1][1] > prices[i]) {
            while (stack.length > 0) {
                const [curIdx, curPrice] = stack[stack.length - 1];

                if (curPrice > prices[i]) {
                    answer[curIdx] = i - curIdx;
                    stack.pop();
                } else break;
            }
        }

        stack.push([i, prices[i]]);
    }

    while (stack.length > 0) {
        const [curIdx, curPrice] = stack.pop();
        answer[curIdx] = N - curIdx - 1;
    }

    return answer;
}
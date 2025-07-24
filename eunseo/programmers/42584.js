// [programmers] 42584. 주식가격
// 스택 방식으로 수정하기

function solution(prices) {
    const answer = Array.from({length: prices.length}).fill(0);
    
    for (let i = 0; i < prices.length; i++) {
        for (let j = i + 1; j < prices.length; j++) {
            if (prices[j] < prices[i]) {
                answer[i] += 1;
                break;
            }
            answer[i] += 1;
        }
    }   
    return answer;
}

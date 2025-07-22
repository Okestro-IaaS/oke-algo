// [programmers] 84512. 모음사전

function solution(word) {
    let answer = -1;
    let flag = false;
    const vowels = ["A", "E", "I", "O", "U"]

    function dfs(curWord) {

        // 정답을 찾았다면 return
        if (flag) return;

        // 단어를 찾았다면 flag를 true로 변환
        if (curWord === word) {
            answer += 1;
            flag = true;
            return;
        }

        answer += 1;

        // 단어의 길이가 5이면 return
        if (curWord.length === 5) return;

        for (const vowel of vowels) {
            dfs(curWord + vowel);
        }
    }

    dfs('')
    return answer;
}
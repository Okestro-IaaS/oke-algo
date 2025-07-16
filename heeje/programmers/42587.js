// [programmers] 42587. 프린터

function solution(priorities, location) {
    let answer = 0;

    const stack = priorities.slice().sort();

    while (true) {
        const process = priorities.shift();
        if (stack[stack.length - 1] === process) {
            answer += 1;
            stack.pop();
            if (location === 0) return answer;
        } else {
            priorities.push(process);
        }

        location = (location - 1) >= 0 ? location - 1 : priorities.length - 1;
    }

    return answer;
}
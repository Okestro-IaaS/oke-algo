// [programmers] 42885. 구명보트

function solution(people, limit) {
    const sortedPeople = people.slice();
    sortedPeople.sort((a, b) => a - b);
    let front = 0;
    let rear = people.length - 1;
    let answer = 0;

    while (front <= rear) {
        if (sortedPeople[front] + sortedPeople[rear] <= limit) {
            front += 1;
        }
        rear -= 1;
        answer += 1;
    }

    return answer;
}
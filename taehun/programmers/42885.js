// https://programmers.co.kr/learn/courses/30/lessons/42885
// [programmers] 42885. 구명보트 (그리디)

class Dequeue {
    constructor() {
        this.storage = new Map();
        this.front = 0;
        this.rear = 0;
    }

    size() {
        return this.storage.size;
    }

    getItemByIndex(index) {
        const key = this.front + index;

        return this.storage.get(key);
    }

    push(value) {
        if (!this.storage.size) {
            this.storage.set(0, value);
        } else {
            this.rear += 1;
            this.storage.set(this.rear, value);
        }
    }

    popLeft() {
        const item = this.storage.get(this.front);

        if (this.storage.size === 1) {
            this.storage.clear();
            this.front = 0;
            this.rear = 0;
        } else {
            this.storage.delete(this.front);
            this.front += 1;
        }

        return item;
    }

    pop() {
        const item = this.storage.get(this.rear);

        if (this.storage.size === 1) {
            this.storage.clear();
            this.front = 0;
            this.rear = 0;
        } else {
            this.storage.delete(this.rear);
            this.rear -= 1;
        }

        return item;
    }
}


function solution(people, limit) {
    let result = 0;

    people.sort((a,b) => a-b)

    const dq = people.reduce((dq, cur) => {
        dq.push(cur)

        return dq;
    }, new Dequeue())

    while (dq.size()) {
        const heavyPeople = dq.pop();

        if (dq.size() && dq.getItemByIndex(0) <= limit - heavyPeople) {
            dq.popLeft()
        }

        result += 1
    }

    return result;
}
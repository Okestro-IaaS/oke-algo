// https://school.programmers.co.kr/learn/courses/30/lessons/1844
// [programmers] 1844. 게임 맵 최단거리 (깊이/너비 우선 탐색(DFS/BFS))

class Queue {
    constructor() {
        this.storage = new Map();
        this.front = 0;
        this.rear = 0;
    }

    size() {
        return this.storage.size;
    }

    enqueue(value) {
        if (!this.storage.size) {
            this.storage.set(0, value);
        } else {
            this.rear += 1;
            this.storage.set(this.rear, value);
        }
    }

    dequeue() {
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
}

const d = [[1,0], [0,1], [-1,0], [0,-1]]

function bfs(maps) {
    let result = -1;
    let flag = true;

    const n = maps.length;
    const m = maps[0].length;

    const visited = new Set();
    const q = new Queue();

    q.enqueue([0, 0, 1])

    visited.add('00');

    while(q.size() && flag) {
        const [r, c, cnt] = q.dequeue();

        for (const [dr, dc] of d) {
            const nr = r + dr;
            const nc = c + dc;

            if (nr === n-1 && nc === m-1) {
                result = cnt + 1;
                flag = false;

                break
            }

            if (!visited.has(`${nr}${nc}`) && nr >= 0 && nr < n && nc >= 0 && nc < m && maps[nr][nc] === 1) {
                visited.add(`${nr}${nc}`);
                q.enqueue([nr, nc, cnt + 1]);
            }
        }
    }

    return result;
}

function solution(maps) {
    return bfs(maps)
}
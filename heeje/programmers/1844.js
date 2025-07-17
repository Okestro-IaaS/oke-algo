// [programmers] 1844. 게임 맵 최단거리

function solution(maps) {
    const directions = [[-1, 0], [0, -1], [1, 0], [0, 1]];

    class Queue {
        constructor() {
            this.storage = new Object();
            this.front = 0;
            this.rear = 0;
        }

        size() {
            return this.rear - this.front;
        }

        enqueue(element) {
            this.storage[this.rear] = element;
            this.rear++;
        }

        dequeue() {
            let removed = this.storage[this.front];
            delete this.storage[this.front];
            this.front++;

            if (this.front === this.rear) {
                this.front = 0;
                this.rear = 0;
            }

            return removed;
        }
    }

    function bfs() {
        queue = new Queue();
        queue.enqueue([0, 0]);

        while (queue.size() > 0) {
            const [ y, x ] = queue.dequeue();

            if (y === n - 1 && x === m - 1) {
                return visited[y][x];
            }

            for (const direction of directions) {
                ny = y + direction[0];
                nx = x + direction[1];

                if (ny < 0 || ny >= n || nx < 0 || nx >= m) continue;
                if (maps[ny][nx] === 1 && visited[ny][nx] === 0) {
                    visited[ny][nx] = visited[y][x] + 1;
                    queue.enqueue([ny, nx]);
                }
            }
        }

        return -1;
    }

    const n = maps.length;
    const m = maps[0].length;

    const visited = Array.from({length: n}, () => Array(m).fill(0));
    visited[0][0] = 1;

    return bfs();
}
// [programmers] 17680. 캐시

function solution(cacheSize, cities) {
  var answer = 0;
  const cache = Array.from({length: cacheSize});
  for (let city of cities) {
      city = city.toLowerCase();
      let index = cache.indexOf(city);
      
      if (cacheSize !== 0) {
          cache.push(city);
      }
      
      if (index >= 0) {
          cache.splice(index, 1);
          answer++;
      } else {
          answer += 5;
          
          if (cache.length >= cacheSize) {
              cache.shift();
          }
      }
      
  }
  
  return answer;
}
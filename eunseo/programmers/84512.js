// [programmers] 84512. 모음사전

function solution(word) {
  const alpabet = ['A', 'E', 'I', 'O', 'U']
  const dic = [];
  
  function dictionary(str) {
      if (str.length > 5) {
          return;
      } else if (str.length > 0) {
          dic.push(str)
      }
      for (let i = 0; i < 5; i++) {
          dictionary(str + alpabet[i]);
      }
  }
  
  dictionary('')
  const answer = dic.indexOf(word) + 1;
  return answer;
}
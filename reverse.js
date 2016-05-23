function reverse(str) {
  var result = '';
  for( var i in str ){
    //console.log(i, str.length - 1);
    //console.log(str.length - i - 1);
    result += str[str.length - i - 1]
  }
  //console.log('result:',result);
  return result;

}


console.log(reverse('Windows 95 WOW ROLLING STONES!!!'));
console.log(reverse('I love SAFEWAY to eat Chinese cuisine set with eggrolling STONES'));
console.log(reverse('お刺身食べたいな'));

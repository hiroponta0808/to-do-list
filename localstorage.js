var str = 'フクヤマ';
localStorage.setItem('name', str);

var num = 100;
localStorage.setItem('num', num);

var array = ['りんご', 'みかん', 'ぶどう'];
array = JSON.stringify(array);
localStorage.setItem('fruits', array);

var name = localStorage.getItem('name');
console.log(name);

var num1 = localStorage.getItem('num');
console.log(+num1);

var array1 = localStorage.getItem('fruits');
array1 = JSON.parse(array1);
console.log(array1);


// JSONに変換
// JSON.stringify();
//
// JSONから変換
// JSON.parse();

// 一括削除
// localStorage.clear();

// 対象を削除
localStorage.removeItem('name');

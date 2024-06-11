// 結果の中に文字を代入する
// その文字は###userName###で置き換えておく
'use strict';
// 基本的に最初はconstを使う
// 書き換えが必要なときにletに変更する
// letは波括弧の中でしか使えない
// 一方varは波括弧の外でも使うことができる

const userNameInput=document.getElementById('user-name');
const assessmentButton=document.getElementById('assessment');
const resultDivision=document.getElementById('reslt-area');
const tweetDivision=document.getElementById('tweet-area');

assessmentButton.onclick=function(){
  console.log('ボタンが押されました')
}



const answers=[
'###userName###のいいところは声です。###userName###の特徴的な声は皆を惹きつけ、心に残ります。',
'###userName###のいいところはまなざしです。###userName###に見つめられた人は、気になって仕方がないでしょう。',
'###userName###のいいところは情熱です。###userName###の情熱に周りの人は感化されます。',
'###userName###のいいところは厳しさです。###userName###の厳しさがものごとをいつも成功に導きます。',
'###userName###のいいところは知識です。博識な###userName###を多くの人が頼りにしています。',
'###userName###のいいところはユニークさです。###userName###だけのその特徴が皆を楽しくさせます。',
'###userName###のいいところは用心深さです。###userName###の洞察に、多くの人が助けられます。',
'###userName###のいいところは見た目です。内側から溢れ出る###userName###の良さに皆が気を惹かれます。',
'###userName###のいいところは決断力です。###userName###がする決断にいつも助けられる人がいます。',
'###userName###のいいところは思いやりです。###userName###に気をかけてもらった多くの人が感謝しています。',
'###userName###のいいところは感受性です。###userName###が感じたことに皆が共感し、わかりあうことができます。',
'###userName###のいいところは節度です。強引すぎない###userName###の考えに皆が感謝しています。',
'###userName###のいいところは好奇心です。新しいことに向かっていく###userName###の心構えが多くの人に魅力的に映ります。',
'###userName###のいいところは気配りです。###userName###の配慮が多くの人を救っています。',
'###userName###のいいところはその全てです。ありのままの###userName###自身がいいところなのです。',
'###userName###のいいところは自制心です。やばいと思ったときにしっかりと衝動を抑えられる###userName###が皆から評価されています。',
'###userName###のいいところは優しさです。###userName###の優しい雰囲気や立ち振る舞いに多くの人が癒やされています。'
]


/**
 * @param{string} userName ユーザーの名前
 * @return{string} 診断結果
 */

// /** で自動で改行コメントを作ってくれる
// parameter param 引数

function assessment(userName){
  let sumOfCharCode=0;
  for(let i=0;i<userName.length;i++){
sumOfCharCode=sumOfCharCode+userName.charCodeAt(i);
  }
  // 全文字のコードを取得してそれを足し合わせる
const index=sumOfCharCode%answers.length;
let result=answers[index];

  //todo 診断結果を実装する
  result=result.replaceAll('###userName###',userName)
  return result;
}

console.assert(
 assessment('恭英')==='恭英のいいところはその全てです。ありのままの恭英自身がいいところなのです。',
 '診断結果の文言の特定の部分を書き換える処理が正しくありません'
);

// 入力した文字コードのすべての整数値を足していく
// 0から15までの診断結果を出力したい
// 15で割ったあまりを取ればよい
// 入力された値のcharcodeをとってそれを15でわるそしてその値に対応する診断結果を出力する

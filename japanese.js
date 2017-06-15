$("#submit").click(function(){
	$(".translatedText").html(`<div class="page-header text-center">
  <h1>Here is what you said in Japanese</h1>
  <br>
  <br>
  <h2 class="greyText">
ハッピーインターナショナルヨガデイ！
あなたの休暇はダムです。健康な一年を！
敬具  - 'Your Name'</h2>
</div>`);

});

var Translate = (function(oldTranslate)
{

	oldTranslate.japanese = {
		"hello" : "bonjour",
		"happy" : "ハッピー",
		"yoga" : "ヨガ",
		"international" : "国際",
		"your" : "きみの",
		"holiday" : "休日",
		"is" : "は",
		"dumb" : "ダム",
		"hope" : "希望",
		"you" : "君は",
		"have" : "持ってる",
		"a" : "〜",
		"healthy" : "健康",
		"very" : "非常に",
		"year" : "年",
		"ahead" : "前方に",
		"yours" : "あなたの",
		"truly" : "本当に",
		"sincerely" : "心から",
		"friend" : "友人",
		"love" : "愛"
	}

	return oldTranslate;
}(Translate))


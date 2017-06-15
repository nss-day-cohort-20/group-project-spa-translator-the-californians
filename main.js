var Translate = {};

let translateBtn = document.getElementById('translateBtn');

translateBtn.addEventListener("click", function()
{
	let msgInEnglish = document.getElementById('textarea').value;
		console.log(msgInEnglish)
	let selectedDropDown = document.getElementById('dropDown').value;
		console.log(selectedDropDown.value)
	msgArray = msgInEnglish.toLowerCase().split(" ");
		console.log(msgArray)

	msgArray.forEach(function(i)
	{
		console.log(i);
		console.log(Translate.french.i);
	})




	if(selectedDropDown == 'german')
		{
			Translate.german.hello;
			console.log(Translate.german.hello)
		} else if(selectedDropDown === 'french')
		{
			Translate.french.hello;
			console.log(Translate.french.hello);
		} else
		{
			Translate.japanese.hello;
			console.log(Translate.japanese.hello)
		}
})


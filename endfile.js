function whatIsSelected(selectedDropDown)
{
	if(selectedDropDown == 'german')
		{
			return 'german';
		} else if(selectedDropDown === 'french')
		{
			return 'french';
		} else
		{
			return 'japanese';
		}
}

let translateBtn = document.getElementById('translateBtn');

translateBtn.addEventListener("click", function()
{
	let div = document.getElementById('translatedText');
	let msgInEnglish = document.getElementById('textarea').value;
		console.log(msgInEnglish)
	let selectedDropDown = document.getElementById('dropDown').value;
		console.log(selectedDropDown.value)
	msgArray = msgInEnglish.toLowerCase().split(" ");
		console.log(msgArray)

	var	msg = `<div class="page-header text-center">
  								<h1>Here is what you said in ${selectedDropDown}</h1>
  								<br>
  								<br> <h2 class="greyText">` 
	msgArray.forEach(function(item)
	{
		var getSelected = whatIsSelected(selectedDropDown);
		if(getSelected === 'german')
		{
			var check = Translate.german[item] ? Translate.german[item] : item;
			msg += " "+ check;
		}
		else if(getSelected === 'french')
		{
			var check = Translate.french[item] ? Translate.french[item] : item;
			msg += " "+ check;
		}
		else if(getSelected === 'japanese')
		{
			var check = Translate.japanese[item] ? Translate.japanese[item] :  item;
			msg += " "+ check;
		}
		else
		{
			alert('Select a language, Please!');
		}
		div.innerHTML = msg + "</h2></div>";
	})
	
})
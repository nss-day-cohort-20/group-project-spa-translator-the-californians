function whatIsSelected(selectedDropDown)
{
	if(selectedDropDown == 'german')
		{
			return 'german';
		} 
		else if(selectedDropDown === 'french')
		{
			return 'french';
		} 
		else if(selectedDropDown === 'japanese')
		{
			return 'japanese';
		}
		else
		{
			return ' ';
		}
}

let translateBtn = document.getElementById('translateBtn');

translateBtn.addEventListener("click", function()
{
	let div = document.getElementById('translatedText');
	let msgInEnglish = document.getElementById('textarea').value;
	if(msgInEnglish === "")
	{
		console.log(document.getElementById('textarea').placeholder);
		alert('Please type in a message to translate');
	}
	let selectedDropDown = document.getElementById('dropDown').value;
	if(selectedDropDown === "")
		{
			alert('Select a language, Please!');
		}
	msgArray = msgInEnglish.toLowerCase().split(" ");

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
		else if(getSelected === 'japanese')
		{
			var check = Translate.japanese[item] ? Translate.japanese[item] :  item;
			msg += " "+ check;
		}
		else if(getSelected === 'french')
		{
			var check = Translate.french[item] ? Translate.french[item] : item;
			msg += " "+ check;
		}
		else
		{
			location.reload();
		}
		div.innerHTML = msg + "</h2></div>";
	})
	
})
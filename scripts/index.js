//Функция-обработчик onClick
		function prepare() { 
			// Выключатель выбора вида документа
			var species = {"keyOne":"Контракт", "keyTwo":"Договор"};//массив в котором ключ это заначение jkvalue           
      		var key = document.querySelector('input[name="contract"]:checked').value;/*Объявляю переменную, для ключа массива species. Она равна значению value, которое вернется после применения метода "document.querySelector" к селектору. Селектор input  с name соответствующим значением name чекнутого выключателя */	
      		//testtext0.innerHTML = species[key]; //меняю содержание элемента с id=testtext с помощю свойства innerHTML. Оно равно значению Value чекнутого выключателя.
      		localStorage.setItem('doc', species[key]) //Сохраняю в LS значение Value чекнутого выключателя
      		//текстовые поля
      		//Номер документа 
      		localStorage.setItem('number', document.getElementById('number').value);    
      		//Дата документа 
      		localStorage.setItem('data', document.getElementById('data').value);
      		//Поставщик
      		localStorage.setItem('nameseller', document.getElementById('nameseller').value);
      		//ИНН,КПП, ОГРН
      		localStorage.setItem('inn', document.getElementById('inn').value);
      		localStorage.setItem('kpp', document.getElementById('kpp').value);
      		localStorage.setItem('ogrn', document.getElementById('ogrn').value);
      		//Предмет закупки
      		localStorage.setItem('theme',document.getElementById('theme').value);
      		localStorage.setItem('OKPD2',document.getElementById('OKPD2').value);
      		localStorage.setItem('OKVED2',document.getElementById('OKVED2').value);
      		//Сумма закупки
      		localStorage.setItem('total',document.getElementById('total').value);
      		//Выключатели способа закупки
      		var method = {"goz":"goz", "kd":"kd", "min":"min"};          
      		var keys = document.querySelector('input[name="mode"]:checked').value;
      		localStorage.setItem('method', method[keys]);
      		//Выключатели отношения 1247
      		var governmentDecree = {"yes":"yes", "no":"no"};          
      		var keyz = document.querySelector('input[name="decree"]:checked').value;
      		localStorage.setItem('governmentDecree',governmentDecree[keyz]);
      		//Делаем видимым чекбоксы выбора документации
      		document.getElementById('doc').style.display="block";
		}
		//Функция для показа кнопок ссылок
		function prepareDoc() {
			var cheki = document.getElementsByClassName('documentations');
			var chekiAtr = [];
			for (var i=0; i < cheki.length; i++) {
				if (cheki[i].checked){
    				var a =cheki[i];
   			 		var IdText=a.value;
    				document.getElementById(IdText).style.display='block';
    			}
			}
		}
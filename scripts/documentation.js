function loading () {
	alert('Внимание! Перед печатью необходимо изменить настройки печати в браузере, а именно: 1)убрать поля; 2) убрать колонтитулы');
			theme.innerHTML = localStorage.getItem('theme');// берем из LS по ключу и ставим в ID span
			

			/* Вариант с циклом перебирающем ID span'ов не прошел, пофантазировать надо

			var docS = document.getElementsByClassName('contract');
			var docSAtr=[];
			for (var i = 0; i < docS.length; i++) {
				//alert(docS[i].id);
				var ap=docS[i];
				ap.id.innerHTML = localStorage.getItem('doc');
			}*/
			
			//Пока индивидуально к каждому по ID
			one.innerHTML = localStorage.getItem('doc');
			two.innerHTML = localStorage.getItem('doc');
			three.innerHTML = localStorage.getItem('doc');
			four.innerHTML = localStorage.getItem('doc');
			five.innerHTML = localStorage.getItem('doc');
			six.innerHTML = localStorage.getItem('doc');
			eight.innerHTML = localStorage.getItem('doc');
			seven.innerHTML = localStorage.getItem('doc');
			
			//ИНН,КПП,ОГРН,ОКВЭД,ОКДП
			
      		inn.innerHTML = localStorage.getItem('inn');
      		kpp.innerHTML = localStorage.getItem('kpp');
      		ogrn.innerHTML = localStorage.getItem('ogrn');
      		okpd2.innerHTML = localStorage.getItem('OKPD2');
      		okved2.innerHTML = localStorage.getItem('OKVED2');


			//Способ закупки. Много текста в коде :(

			if (localStorage.getItem('method')=='goz') {
				method.innerHTML ='Закупка у единственного поставщика в соответствии с подпунктом 8 пункта 6.6.2 подраздела 6.6 раздела 6 главы III «Заключается договор в целях выполнения государственного оборонного заказа» положения о закупке товаров, работ, услуг Государственной корпорации по космической деятельности «Роскосмос».';
				document.getElementById('table13').style="page-break-before: always; margin-top:5mm;"//разрыв страницы для печати
			}
			if (localStorage.getItem('method')=='min') {
				method.innerHTML ='Закупка у единственного поставщика в соответствии с подпунктом 37 пункта 6.6.2 подраздела 6.6 раздела 6 главы III «Заключается договор для приобретения одноименной продукции, НМЦ по которой не превышает 100000 рублей с НДС в год, а если выручка заказчика за предыдущий отчетный финансовый год составила более 5 млрд рублей- не превышает 500000 рублей с НДС в год, при условии, что совокупный годовой объем закупок заказчика по данному основанию не превышает 10 процентов (десяти процентов) от общего объема закупок, совершенных в течение предыдущего отчетного периода (календарного года) одноименность продукции устанавливается согласно перечню ОКПД2» Положения о закупке товаров, работ, услуг Государственной корпорации по космической деятельности «Роскосмос», как с единственным поставщиком.';
				document.getElementById('table10').style="page-break-before: always; margin-top:5mm;"
			}
			if (localStorage.getItem('method')=='kd') {
				method.innerHTML ='Закупка у единственного поставщика в соответствии с  11 подпунктом 6.6.2 пункта 6.6.2 подраздела 6.6 раздела 6 главы III «заключается договор с разработчиком (производителем) продукции, определенным в конструкторской документации» Положения о закупке товаров, работ, услуг Государственной корпорации по космической деятельности «Роскосмос».';
				document.getElementById('table12').style="page-break-before: always; margin-top:5mm;"
			}

			if (localStorage.getItem('governmentDecree')=='yes') {
				governmentDecree.innerHTML='Относится к распоряжению от 30.06.2015 г. № 1247-р';

			}
			if (localStorage.getItem('governmentDecree')=='no') {
				governmentDecree.innerHTML='Не относится к распоряжению от 30.06.2015 г. № 1247-р';
			}
			number.innerHTML = localStorage.getItem('number');
			data.innerHTML = localStorage.getItem('data');
			nameseller.innerHTML = localStorage.getItem('nameseller');
			

			//<span id="eight"> </span>№ <span id="number"> </span> от <span id="date"> </span> c <span id="nameseller"></span></td>
		

		}
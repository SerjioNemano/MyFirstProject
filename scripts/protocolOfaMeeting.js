function load () {
			alert('Внимание! Перед печатью необходимо изменить настройки печати в браузере, а именно: 1)убрать поля; 2) убрать колонтитулы');
			theme.innerHTML = localStorage.getItem('theme');
			if (localStorage.getItem('method')=='goz') {
				method.innerHTML ='Закупка у единственного поставщика в соответствии с подпунктом 8 пункта 6.6.2 подраздела 6.6 раздела 6 главы III «Заключается договор в целях выполнения государственного оборонного заказа» положения о закупке товаров, работ, услуг Государственной корпорации по космической деятельности «Роскосмос».';
			}
			if (localStorage.getItem('method')=='min') {
				method.innerHTML ='Закупка у единственного поставщика в соответствии с подпунктом 37 пункта 6.6.2 подраздела 6.6 раздела 6 главы III «Заключается договор для приобретения одноименной продукции, НМЦ по которой не превышает 100000 рублей с НДС в год, а если выручка заказчика за предыдущий отчетный финансовый год составила более 5 млрд рублей- не превышает 500000 рублей с НДС в год, при условии, что совокупный годовой объем закупок заказчика по данному основанию не превышает 10 процентов (десяти процентов) от общего объема закупок, совершенных в течение предыдущего отчетного периода (календарного года) одноименность продукции устанавливается согласно перечню ОКПД2» Положения о закупке товаров, работ, услуг Государственной корпорации по космической деятельности «Роскосмос», как с единственным поставщиком.';
			}
			if (localStorage.getItem('method')=='kd') {
				method.innerHTML ='Закупка у единственного поставщика в соответствии с  11 подпунктом 6.6.2 пункта 6.6.2 подраздела 6.6 раздела 6 главы III «заключается договор с разработчиком (производителем) продукции, определенным в конструкторской документации» Положения о закупке товаров, работ, услуг Государственной корпорации по космической деятельности «Роскосмос».';
			
			}
			total.innerHTML = localStorage.getItem('total')
			contract.innerHTML = localStorage.getItem('doc');
			contracttwo.innerHTML = localStorage.getItem('doc');
			contractthree.innerHTML = localStorage.getItem('doc');
			contractfour.innerHTML = localStorage.getItem('doc');
			contractfive.innerHTML = localStorage.getItem('doc');
			nameseller.innerHTML = localStorage.getItem('nameseller');
			namesellertwo.innerHTML = localStorage.getItem('nameseller');
			themetwo.innerHTML = localStorage.getItem('theme');
			totaltwo.innerHTML = localStorage.getItem('total');
			inn.innerHTML = localStorage.getItem('inn');
      		kpp.innerHTML = localStorage.getItem('kpp');
			};
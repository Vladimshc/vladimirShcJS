//метод "split"
	var string = '1, 20, 30, "Маня", "Пупкин"';
	var arr = [];
	arr = string.split(', ');
	var arrModify = [];
	
	for (var i=0; i < arr.length; i++) {
		 arrModify += (" " +  arr[i]);
		}
	document.getElementById('arraySplit').innerHTML = arrModify;
			
//метод "join"
	var arrJoin = arr.join(';');
	document.getElementById('arrayJoin').innerHTML = arrJoin;
			
//метод "delete"
	var arrAfterDelete = arr.slice(0, 5); //slice использовано для копирования масcива.
	delete arrAfterDelete[2];
	document.getElementById('arrayDelete').innerHTML = arrAfterDelete;
			
//метод slice
	var arrSlice = arr.slice(1, 4);
	document.getElementById('arraySlice').innerHTML = arrSlice;
			
//метод sort
	var arrSort = arr.slice(0, 5); //slice использовано для копирования масcива.
	arrSort.sort();
	document.getElementById('arraySort').innerHTML = arrSort;
			
//метод push
	var arrPush = arr.slice(0, 5); //slice использовано для копирования маcсива.
	arrPush.push("Васелиса");
	document.getElementById('arrPush').innerHTML = arrPush;
			
//метод pop
	var arrPop = arrPush.pop();
	document.getElementById('arrPop').innerHTML = arrPop;
			
//метод shift
	var arrForShift = arr.slice(0, 5); //slice использовано для копирования маcсива.
	var arrShift = arrForShift.shift();
	document.getElementById('arrShift').innerHTML = arrShift + " измененный маcсив - " + arrForShift ;

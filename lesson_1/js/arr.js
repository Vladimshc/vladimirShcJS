//����� "split"
	var string = '1, 20, 30, "����", "������"';
	var arr = [];
	arr = string.split(', ');
	var arrModify = [];
	
	for (var i=0; i < arr.length; i++) {
		 arrModify += (" " +  arr[i]);
		}
	document.getElementById('arraySplit').innerHTML = arrModify;
			
//����� "join"
	var arrJoin = arr.join(';');
	document.getElementById('arrayJoin').innerHTML = arrJoin;
			
//����� "delete"
	var arrAfterDelete = arr.slice(0, 5); //slice ������������ ��� ����������� ���c���.
	delete arrAfterDelete[2];
	document.getElementById('arrayDelete').innerHTML = arrAfterDelete;
			
//����� slice
	var arrSlice = arr.slice(1, 4);
	document.getElementById('arraySlice').innerHTML = arrSlice;
			
//����� sort
	var arrSort = arr.slice(0, 5); //slice ������������ ��� ����������� ���c���.
	arrSort.sort();
	document.getElementById('arraySort').innerHTML = arrSort;
			
//����� push
	var arrPush = arr.slice(0, 5); //slice ������������ ��� ����������� ��c����.
	arrPush.push("��������");
	document.getElementById('arrPush').innerHTML = arrPush;
			
//����� pop
	var arrPop = arrPush.pop();
	document.getElementById('arrPop').innerHTML = arrPop;
			
//����� shift
	var arrForShift = arr.slice(0, 5); //slice ������������ ��� ����������� ��c����.
	var arrShift = arrForShift.shift();
	document.getElementById('arrShift').innerHTML = arrShift + " ���������� ��c��� - " + arrForShift ;

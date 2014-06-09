var dayData = ['일.Sun', '월.Mon', '화.Tue', '수.Wed', '목.Thu', '금.Fri', '토.Sat'];
var MonthData = ['January', 'February', 'March', 'Aprill', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
var testObj;

var date = new Date();
var currentDate = new Date();

var jinCalendar = new Object();

jinCalendar.init = function() {
	setCalendar(date);
};



jinCalendar.getScheduleDate = function() {
	
	testObj = [
		{
			yyyymm : '201406',
			day : '2',
			type : '0',
			title : 'hello',
			text : 'content text'
		},
		{
			yyyymm : '201406',
			day : '15',
			type : '1',
			title : 'world',
			text : 'content text'
		},
		{
			yyyymm : '201406',
			day : '15',
			type : '3',
			title : 'title',
			text : 'content text'
		},
		{
			yyyymm : '201406',
			day : '24',
			type : '5',
			title : 'test schedule, hello world!',
			text : 'content text'
		},
		{
			yyyymm : '201406',
			day : '12',
			type : '2',
			title : 'test schedule, hello world!',
			text : 'content text'
		},
		{
			yyyymm : '201406',
			day : '12',
			type : '3',
			title : 'test schedule, hello world!',
			text : 'content text'
		},
		{
			yyyymm : '201406',
			day : '12',
			type : '4',
			title : 'test schedule, hello world!',
			text : 'content text'
		},
		{
			yyyymm : '201406',
			day : '12',
			type : '6',
			title : 'test schedule, hello world!',
			text : 'content text'
		}
	];

	jinCalendar.setSchedule();
};

$('#btn-prev').click(function() {
	date = new Date(date.getFullYear(), date.getMonth()-1, date.getDate());
	setCalendar(date);
	if(jinCalendar.prev != null) {
		jinCalendar.prev(date);	
	}
	
});

$('#btn-next').click(function() {
	date = new Date(date.getFullYear(), date.getMonth()+1, date.getDate());
	setCalendar(date);
	if(jinCalendar.next != null) {
		jinCalendar.next(date);
	}
});

function setCalendar(date) {

	var initHTML = '<table class="table table-bordered"><tr>';
	for(var i=0; i<7; i++) {
		initHTML += '<td>' + dayData[i] + '</td>';
	}
	initHTML += '</tr></table>'

	$('.div-init').html(initHTML);

	var lastDate = (new Date(date.getFullYear(), date.getMonth()+1, 0)).getDate();
	var beforeLastDate = (new Date(date.getFullYear(), date.getMonth(), 0)).getDate();

	$('.h4-month').text('Year ' + date.getFullYear() + '. ' + MonthData[date.getMonth()] + '/' + (date.getMonth()+1));

	var nDay = 0;
	var startDay = (new Date(date.getFullYear(), date.getMonth(), 1)).getDay();

	var weekData = '<tr>';

	// Before Days
	for(var i=0; i<startDay; i++) {
		weekData += '<td><font color=#c0c0c0><span>' + (beforeLastDate - (startDay-i)) +'</span></font></td>';
		if(i>6) {
			weekData += '</tr>';
			$('table>tbody').append(weekData);
			weekData = '<tr>';
			nDay = 0;
		}
		nDay++;
	}

	for(var i=1 ; i<=lastDate; i++) {

		var nDayNumber = '<font color={COLOR}>' + i + '</font>';

		if(nDay == 0) {
			nDayNumber = nDayNumber.replace('{COLOR}', '#ff3737');
		} else if(nDay == 6) {
			nDayNumber = nDayNumber.replace('{COLOR}', '#007cf7');
		} else {
			nDayNumber = nDayNumber.replace('{COLOR}', '#727272');
		}

		
		if(currentDate.getFullYear() == date.getFullYear() && currentDate.getMonth() == date.getMonth() && currentDate.getDate() == i) {
			weekData += '<td style="background-color: #ffe9ae""><div id="td-' + i + '"' + nDayNumber +'</div></td>';
		} else {
			weekData += '<td><div id="td-' + i + '"' + nDayNumber +'</div></td>';	
		}

		if(nDay >= 6) {
			weekData += '</tr>';
			$('table>tbody').append(weekData);
			weekData = '<tr>';
			nDay = 0;
		} else {
			nDay++;
		}
		
	}

	var n = 1;
	for(var i=nDay; i<7; i++) {
		weekData += '<td><font color=#c0c0c0>' + n++ +'</font></td>';
	}
	weekData += '</tr>';
	$('table>tbody').append(weekData);

	//jinCalendar.getScheduleDate(date.getFullYear() + FormatMe(date.getMonth() + 1) + '');
}

function FormatMe(n) {
	return (n < 10) ? '0' + n : n;
}

jinCalendar.setSchedule = function() {

	var obj = testObj;
	var sType = [ 'btn-default', 'btn-primary',
			'btn-success', 'btn-info', 'btn-warning', 'btn-danger' ];

	for ( var n in obj) {
		var item = obj[n];

		var html = '<button type="button" class="btn {TYPE} standard-description btn-xs" data-toggle="tooltip" data-placement="top" title="{TEXT}">{TITLE}</button>';

		html = html.replace('{TITLE}',
				item.title).replace('{TYPE}',
				sType[item.type])
				.replace('{TEXT}', item.text);

		var strDefault = $('#td-' + item.day).html();
		$('#td-' + item.day).html(strDefault + html);

	}

	$('.standard-description').click(function() {
		alert($(this).attr('title'));
	});

	$("td>div").css({
		'max-height' : '90px',
		'overflow-y' : 'auto'
	}).addClass('scrolltest');

};

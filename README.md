jin-calendar-javascript-bootstrap
=================================

jin-calendar is simeple source of html calendar


## how to use

1. import css&javascript to jquery, bootstrap and jin-calendar library

```
  <link rel="stylesheet" href="http://getbootstrap.com/dist/css/bootstrap.min.css" >
	<link rel="stylesheet" href="http://getbootstrap.com/assets/css/docs.min.css">
	<link rel="stylesheet" href="jin.calendar.style.css">
	
	<script src="http://code.jquery.com/jquery-1.11.0.min.js"></script>
	<script src="http://netdna.bootstrapcdn.com/bootstrap/3.1.1/js/bootstrap.min.js"></script>
	<script src="jin.calendar.js"></script>
```

2. Add html code

```
  <div class="div-month row">
		<div class="col-xs-3 text-right">
			<h4>
			<button id="btn-prev" type="button" class="btn btn-default">
				<span class="glyphicon glyphicon-circle-arrow-left"></span> Prev
			</button>
			</h4>
		</div>
		
		<div class="col-xs-6">
			<h4 class="h4-month text-center"></h4>
		</div>
		
		<div class="col-xs-3 text-left">
			<h4>
			<button id="btn-next" type="button" class="btn btn-default">
				Next <span class="glyphicon glyphicon-circle-arrow-right"></span>
			</button>
			</h4>
		</div>
	</div>

	<div class="div-main">
		<div class="div-calendar row">
			<div class="div-init col-sm-12"></div>
		</div>
	</div>
```

3. init with jinCalendar

```
  <script>
    $(document).ready(function() {
      jinCalendar.init();
    });
  </script>
```

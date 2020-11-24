const $ = elem => document.querySelector(elem);

const countdown = function(_config) {
	const tarDate = $(_config.target).getAttribute('data-date').split('-');
	const day = parseInt(tarDate[2]);
	const month = parseInt(tarDate[1]);
	const year = parseInt(tarDate[0]);
	let tarTime = $(_config.target).getAttribute('data-time');
	let tarhour, tarmin, tarsec;
	let tarMarginMin = $(_config.target).getAttribute('margen-min')*60000*-1;
	let flagGameover = 0;
	let flagAlertTimeOut = 0;	
	
	if (tarTime != null) {
	tarTime = tarTime.split(':');
	tarhour = parseInt(tarTime[0]);
	tarmin = parseInt(tarTime[1]);
	tarsec = parseInt(tarTime[2]);
	}
	
	let months = [31, new Date().getFullYear() % 4 == 0 ? 29 : 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
	let dateNow = new Date();
	let dayNow = dateNow.getDate();
	let monthNow = dateNow.getMonth() + 1;
	let yearNow = dateNow.getFullYear();
	let hourNow = dateNow.getHours();
	let minNow = dateNow.getMinutes();
	let secNow = dateNow.getSeconds();
	let count_day = 0, count_hour = 0, count_min = 0, count_sec = 0;
	let count_day_isSet = false;
	let isOver = false;
	
	// Set the date we're counting down to
	const countDownDate = new Date(year, month-1, day, tarhour, tarmin, tarsec, 0).getTime();
	
	//$(_config.target+' .day .word').innerHTML = _config.dayWord;
	//$(_config.target+' .hour .word').innerHTML = _config.hourWord;
	//$(_config.target+' .min .word').innerHTML = _config.minWord;
	//$(_config.target+' .sec .word').innerHTML = _config.secWord; 
	
	const updateTime = () => {
		// Get todays date and time
		const now = new Date().getTime();
		
		// Find the distance between now an the count down date
		const distance = countDownDate - now;
		
		// Time calculations for days, hours, minutes and seconds
		//const days = Math.floor(distance / (1000 * 60 * 60 * 24));
		const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
		const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
		const seconds = Math.floor((distance % (1000 * 60)) / 1000);
		
		requestAnimationFrame(updateTime);
		
		if (distance >= 0) {
		//$(_config.target+' .day .num').innerHTML = addZero(days);
		$(_config.target+' .hour .num').innerHTML = addZero(hours);
		$(_config.target+' .min .num').innerHTML = addZero(minutes);
		$(_config.target+' .sec .num').innerHTML = addZero(seconds);
		
		// If the count down is over, write some text
		}else{
			if (distance >= tarMarginMin) {
				if(flagAlertTimeOut == 0){
					alert("Time out");
					flagAlertTimeOut = 1;
				}
				//$(_config.target+' .day .num').innerHTML = addZero(days)+1;
				//$(_config.target+' .day .num').innerHTML = tarMarginMin;
				$(_config.target+' .hour .num').innerHTML = addZero(hours)+1;
				$(_config.target+' .min .num').innerHTML = addZero(minutes)+1;
				$(_config.target+' .sec .num').innerHTML = addZero(seconds)+1;
			}else{
				//$(_config.target+' .day .num').innerHTML = tarMarginMin;
				$(_config.target+' .hour .num').innerHTML = "NULL";
				$(_config.target+' .min .num').innerHTML = "NULL";
				$(_config.target+' .sec .num').innerHTML = "NULL";
				if(flagGameover==1){
					sleep(2000);
					window.top.location.href="gameover.php"
					sleep(2000);
				}
				flagGameover=1;
				//alert("Game Over");
		
			}
		}
	}
	
	updateTime();

}

const addZero = (x) => (x < 10 && x >= 0) ? "0"+x : x;



	  var ck;
		var now;
		var remaining;
		var minutes;
		var seconds;
		var d;
		var i;
		var left;
		var right;
		var line=[];
		var slice;
		var pauseTime;
		var pauseLength;
    var start;
		var length;
		var end;
		var x;

		$(document).ready(function (){
		    ck = 25;
        $('#display').html('25:00');});


		function display () {
                $('#display').empty().html(ck + ':00');
		}

		$('#more').on('click',function() {
		    ck = ck + 1 ;
		    display();
		});

        $('#less').on('click',function() {
            if (ck > 1) {
                ck = ck - 1;
                display();
            }
		});


        
        function a () {
            x = setInterval(function () {

                now = $.now();

                remaining = end - now;

                minutes = Math.floor((remaining % (1000 * 60 * 60)) / (1000 * 60));
                seconds = Math.round((remaining % (1000 * 60)) / 1000);


                if (seconds == 60) {
                    document.getElementById("display").innerHTML = "1:00";
                }

                else if (seconds < 10) {
                    document.getElementById("display").innerHTML = minutes + ":0" + seconds;
                }

                else document.getElementById("display").innerHTML = minutes + ":" + seconds;


                if (remaining < 0) {
                    clearInterval(x);
                    document.getElementById("display").innerHTML = "END";
                }

               
                slice = $('#timer').css({
                    'background-image': line.join(',')
                });

            }, 1000);

        }

	
        $('#go').on('click', function () {

	
            if (isNaN(pauseTime)) {
                start = $.now();
                length = ck * 60 * 1000;
                end = start + length;
                a();
            }


            else {
                start = $.now();
                end = start + pauseLength;
            	a();
            }

        });

       
        $('#pause').on('click', function () {
            pauseTime = $.now();
            pauseLength = end - pauseTime;
            clearInterval(x);

        });

      
        $('#reset').on('click',function() {
            clearInterval(x);
            slice = $('#timer').css({
                'background-image': 'linear-gradient(-90deg, #ffaed2 50%, transparent 50%)'
            });
            ck = 25;
            display();
			pauseTime = NaN;
        });
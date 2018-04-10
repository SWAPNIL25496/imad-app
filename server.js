var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));




var articles ={
    'article-one':{
    title :'stopwatch1',
    heading: ' Enter time then start the timer1'
},
    'article-two':{
    title :'stopwatch2',
    heading: ' Enter time then start the timer2'
},
    'article-three':{
    title :'stopwatch3',
    heading: ' Enter time then start the timer3'
}
};

function createTemplete (data){
    var title = data.title;
    var heading = data.heading;
 var htmlTemplete = `<!doctype html>
        <html >
        <head>
        	<meta charset="UTF-8">
        	<title${title}</title>
        	<meta name="viewport" content="width=device-width, initial-scale=1">
        	<link href="https://fonts.googleapis.com/css?family=Lobster" rel="stylesheet" type="text/css">
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
        <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>
        	<style >
        		body {
        			margin-left: 10%;
        			margin-right: 10%;
        			
        			background: url("http://sf.co.ua/12/09/wallpaper-2248076.jpg") no-repeat center center fixed; 
          -webkit-background-size: cover;
          -moz-background-size: cover;
          -o-background-size: cover;
          background-size: cover; 
        		}
        		
        		h2{
        			font-family: Arial;
        			text-align:center;
        			color: #C0C0C0;
        		}
        	</style>
        
        	<script>
        		
        function _timer(callback)
        {
            var time = 300;     //  The default time of the timer
            var mode = 1;     //    Mode: count up or count down
            var status = 0;    //    Status: timer is running or stoped
            var timer_id;    //    This is used by setInterval function
            var h=m=s=0;
            var starttime;
            // this will start the timer ex. start the timer with 1 second interval timer.start(1000) 
            this.start = function(interval)
            {
                interval = (typeof(interval) !== 'undefined') ? interval : 1000;
         
                if(status == 0)
                {
                    status = 1;
                    timer_id = setInterval(function()
                    {
                        switch(mode)
                        {
                            default:
                            if(time)
                            {
                                time--;
                                generateTime();
                                if(typeof(callback) === 'function') callback(time);
                            }
                            break;
                            
                            case 1:
                            if(time < 86400)
                            {
                                time++;
                                generateTime();
                                if(typeof(callback) === 'function') callback(time);
                            }
                            break;
                        }
                    }, interval);
                }
        	    }
            this.go =function(){
            		h=(document.getElementById("hours").value);
            		m=(document.getElementById("minutes").value);
               		s=(document.getElementById("seconds").value);
               				document.getElementById("on").hidden = false;
               		if(h==""){ h=00;}
               		if(m==""){ m=00;}
               		if(s==""){ s=0;}
               		h=parseFloat(h);
               		m=parseFloat(m);
               		s=parseFloat(s);
               		starttime= Math.floor(h*60*60 + m*60 + s);
               		if(starttime==0){
               			timer.reset(300);
               			timer.start(1000);
               		}
               		else {
               			timer.reset(starttime);
               			timer.start(1000);
               		}
            }
            //  Same as the name, this will stop or pause the timer ex. timer.stop()
            this.stop =  function()
            {
                if(status == 1)
                {
                    status = 0;
                    clearInterval(timer_id);
                }
            }
            
            // Reset the timer to zero or reset it to your own custom time ex. reset to zero second timer.reset(0)
            this.reset =  function(sec)
            {
                sec = (typeof(sec) !== 'undefined') ? sec : 0;
                time = sec;
                generateTime(time);
            }
            
            // Change the mode of the timer, count-up (1) or countdown (0)
            this.mode = function(tmode)
            {
                mode = tmode;
            }
            
            // This methode return the current value of the timer
            this.getTime = function()
            {
                return time;
            }
            
            // This methode return the current mode of the timer count-up (1) or countdown (0)
            this.getMode = function()
            {
                return mode;
            }
            
            // This methode return the status of the timer running (1) or stoped (1)
            this.getStatus
            {
                return status;
            }
            
            // This methode will render the time variable to hour:minute:second format
            function generateTime()
            {
                var second = time % 60;
                var minute = Math.floor(time / 60) % 60;
                var hour = Math.floor(time / 3600) % 60;
                
                second = (second < 10) ? '0'+second : second;
                minute = (minute < 10) ? '0'+minute : minute;
                hour = (hour < 10) ? '0'+hour : hour;
                
                $('div.timer span.second').html(second);
                $('div.timer span.minute').html(minute);
                $('div.timer span.hour').html(hour);
            }
        }
         
        // example use
        var timer;
         
        $(document).ready(function(e) 
        {
            timer = new _timer
            (
                function(time)
                {
                    if(time == 0)
                    {
                        timer.stop();
                        alert('time out');
                    }
                }
            );
            timer.reset(0);
            timer.mode(0);
        });	</script>
        </head>
        <body onload="show();">
            <div><a href="/">Home
            </a></div>
        	<script type="text/javascript" src="https://code.jquery.com/jquery-1.7.2.min.js"></script>
        	<h2 > ${heading} </h2>
        	<div class="row">
        		<div class="col-xs-4">
        			<input style="margin-top: 90px" class="form-control" id="hours">  <h3 style=" color: white" > hour </h3></div>
        		<div class="col-xs-4">
         			<input style="margin-top: 90px" class="form-control" id="minutes">  <h3 style=" color: white" > minutes </h3></div>
         		<div class="col-xs-4">
         			<input style="margin-top: 90px" class="form-control" id="seconds">  <h3 style=" color: white" > seconds </h3></div>
        <div style=" margin-top: 400px">
            <div  class="col-xs-offset-4 ">
        
                <div style=" font-align:middle; font-size: 100px; color: white" class="timer" id="on" hidden>
                    <span class="hour">00</span>:<span class="minute">00</span>:<span class="second">00</span>
                        </div></div>
        
                <div class="control">
        
                    <div class="col-xs-4"><button class="btn btn-primary btn-block" onClick="timer.go()">Start</button></div>	 
                    <div class="col-xs-4"><button class="btn btn-danger btn-block"  onClick="timer.stop()">Stop</button> </div>
                    <div class="col-xs-4"><button class="btn btn-info btn-block" onClick="timer.reset(0)">Reset</button> </div>
                </div>	
                </div>
                </div>
        </body></html>`;
        return htmlTemplete;
}

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
  
});


app.get('/:articleName', function (req, res) {
    var articleName= req.params.articleName;
  res.send(createTemplete(articles[articleName]));
});



app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});



app.get('/ui/main.js', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'main.js'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


// Do not change port, otherwise your app won't run on IMAD servers
// Use 8080 only for local development if you already have apache running on 80

var port = 80;
app.listen(port, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});

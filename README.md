[frequency.js](http://onloop.net/frequency)
============

XKCD-inspired frequency-based blinker http://xkcd.com/1331/

Usage
============

Download [frequency.js](https://raw.github.com/pranavrc/frequency/master/frequency.js "frequency.js").

Set up your script tags:

    <script src="http://code.jquery.com/jquery-1.11.0.min.js"><script>
    <script src="/path/to/frequency.js"><script>
  
Add the id frequency-&lt;time period in seconds&gt; to any element that you want to flash:

    <span id="frequency-2.71828">This will flash once in 2.71828 seconds.<span>
    <span id="frequency-10">This will flash once in 10 seconds.<span>
    
And we're done!

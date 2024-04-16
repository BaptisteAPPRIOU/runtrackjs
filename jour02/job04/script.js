document.addEventListener('keydown', function addletters(e) {
    keylogger = document.getElementById('keylogger')
    if (e.key.match(/^[a-z]$/) && document.activeElement !== keylogger){ 
        keylogger.value += e.key
        }
    else {
        keylogger.value += e.key              
        }
    }
);
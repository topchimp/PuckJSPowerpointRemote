var kb = require("ble_hid_keyboard");
NRF.setServices(undefined, { hid : kb.report });

function goBack(){
// Use the LEFT ARROW key to go to the next slide
  kb.tap(kb.KEY.LEFT, 0);  LED2.set();
  setTimeout("LED2.reset()",1000);
}

function goForward(){
// Use the RIGHT ARROW key to go to the next slide
  kb.tap(kb.KEY.RIGHT, 0);  LED2.set();
  setTimeout("LED2.reset()",1000);
}

// debounce set to 50 to prevent unintended mechanical "bounce" triggers
setWatch(function(e) {
  var isLongPress = (e.time-e.lastTime)>0.4;  
  if (isLongPress){
    goBack(); 
  }
  else {
    goForward(); 
  }
}, BTN, {edge:"falling", debounce:50, repeat:true});

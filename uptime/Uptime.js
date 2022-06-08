// Variables used by Scriptable.
// These must be at the very top of the file. Do not edit.
// icon-color: deep-green; icon-glyph: magic;

/*

  Uptime.js
  =========

  This script currently tells you if a website is up or down.

  TODO:
  - Add response time to the output.
  - Add uptime presentage

*/

// Config
CHECKED_URL = "https://google.co.ck"
TITLE       = "Google Cook Islands"

// -- END OF CONFIG // RECCOMMENDED NOT TO EDIT BELOW THIS LINE -- //

var isOn = false
var responseTime;
const version = [0, 1, 0] // for version checking in the future

onlineColor = new Color("#0ed40b", 0)
offlineColor= new Color("#ff4d4d", 0)

bigFont = new Font("San Fransisco", 30)

homeWidget = new ListWidget()

uriWidget=homeWidget.addStack()
uriWidget.addText(TITLE)

onlineStack = homeWidget.addStack()

checkAttempt = new Request(CHECKED_URL)
checkAttempt.loadString().then(r => {  
  console.log(r)
  onlText = onlineStack.addText("Online")
//   onlText.textColor = onlineColor
  isOn = true;
  console.log(isOn);
})
.catch(r => {
  isOn=false;
  onlText = onlineStack.addText("Offline")
//   onlText.textColor = offlineColor
  }
)
.then(r => {
  console.log(isOn)

  onlText.font = bigFont

  homeWidget.presentSmall()
  }
)


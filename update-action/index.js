var fs = require('fs');

// replace will all files
let files = ["../index.html", "../action.html"]

// the code for the featured action
let replaceContent = ` Help amplify new Time For $5 ads and remind Danaher to put #PeopleOverProfits, by sharing <a href="https://drive.google.com/drive/folders/1-3rQZiWv7d6d217P-pmsPf1RoTpZQL2G" target="_blank">photos of the ads</a> and <a href="https://www.youtube.com/watch?v=v19WQ9MzANM" target="_blank">John's video</a>. <a href="https://docs.google.com/document/d/e/2PACX-1vTh05tEoyCsh8oEWScWM9n41B1pcUeVNGFcUDqdlcILHvVUB2_LsK4voMTdKPdEQwmjMHRBaoalG259/pub" target="_blank">View social media templates</a>.`;

for (i in files) {
    let file = files[i]
    let content = fs.readFileSync(file, { encoding: 'utf8' })
    fs.writeFile(file, content.replaceAll(/<strong>FEATURED ACTION:<\/strong>.*$/gm, "<strong>FEATURED ACTION:</strong>" + replaceContent), () => { })
}

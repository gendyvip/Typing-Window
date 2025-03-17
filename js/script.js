var msg = document.getElementById("showMsg")
var str =`This text is being rendered by JS Engine
This window will be terminated after few seconds.`
var i = 0
msg.addEventListener("click", function () {
    i=0
    myWindow = window.open("", "", "width=600, height=200");
    myWindow.document.write("<pre>")
    var interval = setInterval(function(){
        if(i<str.length){
            myWindow.document.write(str[i])
            i++
        }
        else
        {
            clearInterval(interval)
            myWindow.document.write("</pre>")
            setTimeout(function(){
                myWindow.close()
            },2000)
        }
    },100)
})


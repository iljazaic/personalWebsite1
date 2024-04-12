var mobileMenuOut = false;
var headOut=false;
function openDropDown(){
    const list = document.getElementById("dropdown");
    const back = document.getElementById("background");


    if (mobileMenuOut){

        back.style.backdropFilter="brightness(100%) blur(0px)";
        back.style.zIndex="-100";
        list.style.top="-250px";
        list.style.position="relative";

    }else{    
        back.style.backdropFilter="brightness(100%) blur(5px)";
        list.style.top="250px";
        list.style.position="fixed";
        back.style.zIndex="55";
    }



    mobileMenuOut = !mobileMenuOut;

}


visualViewport.addEventListener("resize", ()=>{
    if(visualViewport.width>1050){
        document.getElementById("dropdown").style.top="0px";
    }
    else{
        mobileMenuOut=true;
        openDropDown();
    }
})

function openimg(){
    let mw = visualViewport.width;
    if (headOut){
        
        if(mw<600)
        {
            document.getElementById("headimg").style.maxWidth="40px";
        }else{
            document.getElementById("headimg").style.maxWidth="65px";
        }
        document.getElementById("headimg").style.position="relative";

    }else{
        document.getElementById("headimg").style.maxWidth=(mw/2).toString()+"px";

        document.getElementById("headimg").style.zIndex="1000";
        document.getElementById("headimg").style.position="absolute";
        document.getElementById("headimg").style.left="25%";
    }
headOut=!headOut;
}


document.getElementById("headimg").addEventListener('click', openimg)

document.getElementById("himg").addEventListener('click', openDropDown)

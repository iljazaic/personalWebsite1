var mobileMenuOut = false;
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




document.getElementById("himg").addEventListener('click', openDropDown)
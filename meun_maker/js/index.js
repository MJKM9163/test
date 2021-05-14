function meun_make_up() {
    document.querySelector("footer").style.bottom="-150px";
    document.getElementById("menu_make").style.transform="translateX(300%)";
    document.getElementById("price").style.opacity="0"
    document.getElementById("main3").style.opacity="0"

    function meun_make_ajax() {
        let xhttp;
        
        xhttp = new XMLHttpRequest();
        
        xhttp.onreadystatechange = function() {
            if (xhttp.readyState == 4 && xhttp.status == 200){
                document.getElementById('ajax_box').innerHTML = xhttp.responseText;
            }
        }
        xhttp.open('get','result.html', true);
        xhttp.send();

        let box= document.getElementById('script_box');
        let script= document.createElement('script');
        script.type= 'text/javascript';
        script.src= './js/result.js';
        box.appendChild(script);
    
        document.querySelector('header').innerText = '메뉴 만들기';
    };

    setTimeout(meun_make_ajax, 300);
}

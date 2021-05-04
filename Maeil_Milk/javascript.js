let original_mlik = document.getElementById('original_milk').style;
let low_fat2_milk = document.getElementById('low_fat2_milk').style;
let low_fat1_milk = document.getElementById('low_fat1_milk').style;
let fat_free_milk = document.getElementById('fat_free_milk').style;
let left_button = document.getElementById('left_button').style;
let right_button = document.getElementById('right_button').style;
let order_slide = document.getElementById('order_box').style;
let submit_button = document.getElementById('submit_box').style;
let loading_background = document.getElementById('loading_box').style;
let loading_image = document.getElementById('loading_animation').style;
let end_box = document.getElementById('end_box').style;
let out_click = document.getElementById('out_button').style;





let i = 0;
let u = 0;
function left_click() {

    if (i == 1) {
        original_mlik.left = '0%';
        original_mlik.width = '571px';
        original_mlik.opacity = '100%';
        low_fat2_milk.left = '80%';
        low_fat2_milk.width = '250px';
        low_fat2_milk.opacity = '0%';
        low_fat1_milk.left = '80%';
        low_fat1_milk.width = '250px';
        low_fat1_milk.opacity = '0%';
        fat_free_milk.left = '80%';
        fat_free_milk.width = '250px';
        fat_free_milk.opacity = '0%';

        document.getElementById('order_button').style.backgroundColor = '';
        submit_button.backgroundColor = '';
        left_button.display = 'none';
        i--;
    }
    else if (i == 2) {
        original_mlik.left = '-20%';
        original_mlik.width = '250px';
        original_mlik.opacity = '0%';
        low_fat2_milk.left = '0%';
        low_fat2_milk.width = '571px';
        low_fat2_milk.opacity = '100%';
        low_fat1_milk.left = '80%';
        low_fat1_milk.width = '250px';
        low_fat1_milk.opacity = '0%';
        fat_free_milk.left = '80%';
        fat_free_milk.width = '250px';
        fat_free_milk.opacity = '0%';

        document.getElementById('order_button').style.backgroundColor = '#fdb90d';
        submit_button.backgroundColor = '#fdb90d';
        i--;
    }
    else if (i == 3) {
        original_mlik.left = '-20%';
        original_mlik.width = '250px';
        original_mlik.opacity = '0%';
        low_fat2_milk.left = '-20%';
        low_fat2_milk.width = '250px';
        low_fat2_milk.opacity = '0%';
        low_fat1_milk.left = '0%';
        low_fat1_milk.width = '571px';
        low_fat1_milk.opacity = '100%';
        fat_free_milk.left = '80%';
        fat_free_milk.width = '250px';
        fat_free_milk.opacity = '0%';

        document.getElementById('order_button').style.backgroundColor = '#4cb64c';
        submit_button.backgroundColor = '#4cb64c';
        right_button.display = 'block';
        i--;
    }
}

function right_click() {
    
    if (i == 0) {
        original_mlik.left = '-20%';
        original_mlik.width = '250px';
        original_mlik.opacity = '0%';
        low_fat2_milk.left = '0%';
        low_fat2_milk.width = '571px';
        low_fat2_milk.opacity = '100%';
        low_fat1_milk.left = '80%';
        low_fat1_milk.width = '250px';
        low_fat1_milk.opacity = '0%';
        fat_free_milk.left = '80%';
        fat_free_milk.width = '250px';
        fat_free_milk.opacity = '0%';

        document.getElementById('order_button').style.backgroundColor = '#fdb90d';
        submit_button.backgroundColor = '#fdb90d';
        left_button.display = 'block';
        i++;
    }
    else if (i == 1) {
        original_mlik.left = '-20%';
        original_mlik.width = '250px';
        original_mlik.opacity = '0%';
        low_fat2_milk.left = '-20%';
        low_fat2_milk.width = '250px';
        low_fat2_milk.opacity = '0%';
        low_fat1_milk.left = '0%';
        low_fat1_milk.width = '571px';
        low_fat1_milk.opacity = '100%';
        fat_free_milk.left = '80%';
        fat_free_milk.width = '250px';
        fat_free_milk.opacity = '0%';

        document.getElementById('order_button').style.backgroundColor = '#4cb64c';
        submit_button.backgroundColor = '#4cb64c';
        i++;
    }
    else if (i == 2) {
        original_mlik.left = '-20%';
        original_mlik.width = '250px';
        original_mlik.opacity = '0%';
        low_fat2_milk.left = '-20%';
        low_fat2_milk.width = '250px';
        low_fat2_milk.opacity = '0%';
        low_fat1_milk.left = '-20%';
        low_fat1_milk.width = '250px';
        low_fat1_milk.opacity = '0%';
        fat_free_milk.left = '0%';
        fat_free_milk.width = '571px';
        fat_free_milk.opacity = '100%';

        document.getElementById('order_button').style.backgroundColor = '#e992bd';
        submit_button.backgroundColor = '#e992bd';
        right_button.display = 'none';
        i++; 
    }
}

function slide_button() {

    if (u == 0) {
        order_slide.top = '105%';
        document.getElementById('order_button').value = '닫기';
        u++;
    }
    else if (u == 1) {
        order_slide.top = '68%';
        document.getElementById('order_button').value = '주문하기';
        u--
    }
}

function loading_true() {
    
        loading_background.zIndex = '7';
        loading_image.display = 'none';
        loading_image.animationPlayState = 'paused';
        end_box.display = 'block';
        end_box.animationPlayState = 'running';
        end_box.zIndex = '8';
        out_click.display = 'block';
        out_click.animationPlayState = 'running';
        out_click.zIndex = '8';
        document.getElementById('end_box').innerText = '주문이 완료되었습니다!';
        document.getElementById('out_button').value = '확인';
}

function loading_false() {
    
    loading_background.zIndex = '7';
    loading_image.display = 'none';
    loading_image.animationPlayState = 'paused';
    end_box.display = 'block';
    end_box.animationPlayState = 'running';
    end_box.zIndex = '8';
    out_click.display = 'block';
    out_click.animationPlayState = 'running';
    out_click.zIndex = '8';
    document.getElementById('end_box').innerText = '잘못된 주소 형식입니다';
    document.getElementById('out_button').value = '돌아가기';
}

function loading() {
    let address_value = document.getElementById('address_box').value;
    console.log(address_value);
    let check = address_value.includes("시");  // --   value 값 가져오기부터 시작
    console.log(check);
    loading_background.backgroundColor = 'rgba(0, 0, 0, 0.493)';
    loading_background.zIndex = '7';
    loading_image.zIndex = '8';
    loading_image.display = 'block';
    loading_image.animationPlayState = 'running';

    if (check == true) {
        setTimeout('loading_true()', 2000);
    }
    else {
        setTimeout('loading_false()', 1500);
    }
}

function end_box_down() {
    loading_background.backgroundColor = 'white';
    loading_background.zIndex = '-5';
    end_box.display = 'none';
    end_box.zIndex = '-6';
    out_click.display = 'none';
    out_click.zIndex = '-6';
}

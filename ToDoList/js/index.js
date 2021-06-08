let i = 0; //리스트 값
let o = 0; //ul 존재 유무 1=있음, 0=없음
let z = 0; //삭제 버튼 값
let u = 0; //remove change 값
let delete_button = document.getElementById('delete_active');
let all_d_button = document.getElementById('all_delete');

function list_add() {
    let list = document.getElementById('list_box');
    let to_do = document.getElementById('to_do_value');
    let ul_make = document.createElement('ul');
    ul_make.id = 'flex_box';
    if( i === 0 && to_do.value !== ""){
        list.appendChild(ul_make);
    }
    let li_make = document.createElement('li');
    let add_target = document.getElementById('flex_box');
    let input_make = document.createElement('input');

    input_make.type = 'button';
    input_make.className = 'add_delete';
    input_make.id = o;
    input_make.value = '삭제';
    input_make.setAttribute('onClick', 'list_remove(this.id)');
    li_make.innerText = to_do.value;
    li_make.id = 'li_'+ i;
    if( to_do.value === ""){
        alert('내용이 없어요!')
    
    } else if( i === 0 ){
        delete_button.style.display = 'block';
        all_d_button.style.display = 'block';
        li_make.appendChild(input_make);
        add_target.appendChild(li_make);
        i++;
        o++;
        if ( u === 1 ){
            document.getElementById(z).style.display = 'block';
            console.log(z);
            z++;
        }
    } else if( i === 15 ){
        alert('더 이상 만들 수 없어요!')
    } else {
        li_make.appendChild(input_make);
        add_target.appendChild(li_make);
        if ( u === 1 ){
            document.getElementById(z).style.display = 'block';
            console.log(z);
            z++;
        }
        i++;
        o++;
    }
    to_do.value = "";
}

function key_down() {
    key = event.keyCode;
    switch(key){
        case 13: list_add(); break;
    }
};

function list_remove(id) {
    let ul_id = document.getElementById('flex_box');
    if( i > 0 ){
        let li_id = document.getElementById('li_'+ id);
        li_id.remove();
        if( i === 1 ){
            ul_id.remove();
            delete_button.style.display = 'none';
            all_d_button.style.display = 'none';
        }
        while( id < z - 1){
            id++;
            document.getElementById('li_'+id).id = 'li_'+(id - 1);
            document.getElementById(id).id = id - 1;
        }
        z--;
        i--;
        o--;
    } else if( i === 0 ){
        alert('삭제할 내용이 없어요!');
    }
};

function all_remove() {
    let ul = document.getElementById('flex_box');
    if ( i > 0 ){
        ul.remove();
        delete_button.style.display = 'none';
        all_d_button.style.display = 'none';
        z = 0;
        i = 0;
        o = 0;
    } else {
        alert('아무것도 없어요!');
    }
}



function remove_block() {
    let d_a = document.getElementById('delete_active');
    console.log(i);
    console.log(z);
        while ( i > z ){
            let delete_on = document.getElementById(z).style;
            d_a.value = '감추기';
            delete_on.display = 'block';
            z++;
        }
    d_a.setAttribute('onClick', 'remove_none()');
    u++;
}

function remove_none() {
    let d_a = document.getElementById('delete_active');
        while ( z > 0 ){
            z--;
            let delete_on = document.getElementById(z).style;
            d_a.value = '삭제하기';
            delete_on.display = 'none';
        }
    d_a.setAttribute('onClick', 'remove_block()');
    u--;
}

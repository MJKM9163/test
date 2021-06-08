
let i = 3;


function add_text_line() {
    let input_key_make = document.createElement('input');
    let input_value_make = document.createElement('input');
    let add_box = document.getElementById('flex_box');

    input_key_make.type = 'text';
    input_key_make.id = 'key_'+ (i + 1);
    input_key_make.placeholder = 'key를 입력해 주세요'
    input_value_make.type = 'text';
    input_value_make.id = 'value_'+ (i + 1);
    input_value_make.placeholder = 'value를 입력해 주세요'
    add_box.appendChild(input_key_make);
    add_box.appendChild(input_value_make);
    console.log(input_key_make.id);
    i++;

}

let json_object = new Object;
//json["aaa"]= "akak";
console.log(json_object);

function input_remove() {
    let key_id = document.getElementById('key_'+ i);
    let value_id = document.getElementById('value_'+ i);
    if( i > 0 ) {
        key_id.remove();
        value_id.remove();
        i--;
    } else {
        alert("삭제할 줄이 없어요!")
    }
}


function download() {
    
    
    for( let u = 0; u < i;) {
        let key_id = document.getElementById('key_'+(1 + u));
        let value_id = document.getElementById('value_'+(1 + u));
        json_object[key_id.value]= value_id.value;


        u++;

        console.log("u값 = "+ u);
        console.log(json_object);
        console.log("key 값 ----------------------:"+key_id.id);
    }
    console.log(json_object);
    json_download();
    function json_download() {
        let object_change = JSON.stringify(json_object);
        let blob = new Blob([object_change], { type: 'application/json' });
        let url = URL.createObjectURL(blob);
        let link = document.createElement('a');

        link.href = url;
        link.download = 'newJSON.json';
        link.click();

        console.log("실행");
    }
}


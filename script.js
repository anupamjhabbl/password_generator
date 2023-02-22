let alpha = "abcdefghijklmnopqrstuvwxyz";
let symbol = "!@#$%^&*()";

let generate_weak = () => {
    let result = "";
    let k = Math.floor(Math.random()*3);
    let t = Math.floor(Math.random()*5)+8;
    if (k==0){
        for (let i=0;i<t;i++){
            let m = Math.floor(Math.random()*10);
            result = result + `${m}`;
        }
    }
    else if(k==1){
        for (let i=0;i<t;i++){
            let m = alpha[Math.floor(Math.random()*10)];
            result = result + m;
        }
    }
    else{
        for (let i=0;i<t;i++){
            let m = symbol[Math.floor(Math.random()*10)];
            result = result + m;
        }
    }
    return result;
}

let generate_strong = () => {
    let result = "";
    let d = Math.floor(Math.random()*5)+5;
    for (let i=0;i<d;i++){
        let m = `${Math.floor(Math.random()*10)}`;
        result = result + m;
    }

    let n = Math.floor(Math.random()*5)+5;
    for (let i=0;i<n;i++){
        let m = alpha[Math.floor(Math.random()*26)];
        let t = Math.floor(Math.random()*2);
        if (t==0){
            m = m.toUpperCase();
        }
        result = result + m;
    }

    let sy = Math.floor(Math.random()*5)+5;
    for (let i=0;i<sy;i++){
        let m = symbol[Math.floor(Math.random()*10)] ;
        result = result+m;
    }
    return result;
}

let generate_super_strong = () => {
    let result = "";
    let k = Math.floor(Math.random()*3);

    let d = Math.floor(Math.random()*5)+5;
    let digit_part = "";
    for (let i=0;i<d;i++){
        let m = `${Math.floor(Math.random()*10)}`;
        digit_part = digit_part + m;
    }

    let n = Math.floor(Math.random()*5)+5;
    let alpha_part = "";
    for (let i=0;i<n;i++){
        let m = alpha[Math.floor(Math.random()*26)];
        let t = Math.floor(Math.random()*2);
        if (t==0){
            m = m.toUpperCase();
        }
        alpha_part = alpha_part + m;
    }

    let sy = Math.floor(Math.random()*5)+5;
    let symbol_part = "";
    for (let i=0;i<sy;i++){
        let m = symbol[Math.floor(Math.random()*10)] ;
        symbol_part = symbol_part+m;
    }

    if (k==0){
        result = digit_part + alpha_part + symbol_part;
    }
    else if(k==1){
        result = alpha_part + symbol_part + digit_part;
    }
    else{
        result = symbol_part + digit_part + alpha_part;
    }

    return result;
}


let generate = () => {

    let selected = document.querySelector('input[name="type_select"]:checked').value;

    let k;
    if (selected=="0"){
        k = generate_weak();
    }
    else if(selected=="1"){
        k = generate_strong();
    }
    else{
        k = generate_super_strong();
    }

    let input_box = document.getElementById('main_input');
    input_box.value = k;
}

let copy = (e) => {
    e.target.style.width='45px';
    e.target.style.height='auto';
    setTimeout(()=>{
        e.target.style.width='40px';
        e.target.style.height='auto';
    },500);
    let k = document.getElementById('main_input').value;
    if (k==""){
        alert('First Generate a password');
        return ;
    }
    let copying = async () => {
        try{
            await navigator.clipboard.writeText(k);
        }
        catch(err){
            alert("copy failed try again");
        }
    }
    copying();
}


let button = document.getElementById('button');
button.onclick = generate;

let copy_button = document.getElementById('copy_button');
copy_button.onclick = copy;
text_input_array=[];

function submit(){
    var text_input=document.getElementById("input_name").value;
    text_input_array.push(text_input);
    document.getElementById("name_span_list").innerHTML=text_input_array;
    console.log(text_input_array);
    document.getElementById("input_name").value="";
}

function show(){
    var text_input=document.getElementById("input_name").value;
    text_input_array.push(text_input);
    document.getElementById("name_div_list").innerHTML=text_input_array;
}

function sorting(){
    text_input_array.sort();
    console.log(text_input_array);
    var text_input=document.getElementById("input_name").value;
    text_input_array.push(text_input);
    document.getElementById("sorted_name_list").innerHTML=text_input_array;
}

function search(){
    var s=document.getElementById("input_name_2").value;
    var found=0;
    var j;
    for (j=0; j<text_input_array.length; j++){

            if (s==text_input_array[j]){
                found=found+1
            }
    }
    document.getElementById("name_found").innerHTML=("name found" +found+ "time/s");
    console.log("name found" +found+ "time/s");
}
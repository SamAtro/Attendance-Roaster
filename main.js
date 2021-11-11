var names_of_students=[];
function submit(){
    var name_1=document.getElementById("name1").value;
    var name_2=document.getElementById("name2").value;
    var name_3=document.getElementById("name3").value;
    var name_4=document.getElementById("name4").value;
    names_of_students.push(name_1);
    names_of_students.push(name_2);
    names_of_students.push(name_3);
    names_of_students.push(name_4);
    console.log(names_of_students);
    document.getElementById("display_name").innerHTML=names_of_students;
    document.getElementById("submit_button").style.display="none";
    document.getElementById("sort_button").style.display="inline-block";
}
function sorting(){
    names_of_students.sort();
    console.log(names_of_students);
    document.getElementById("display_name").innerHTML=names_of_students;
}
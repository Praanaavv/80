name_of_the_student_array=[];
display_names_arrey=[];
function submit()
{


   for (var j=1 ;j <= 4 ; j++) 
   {
   var name_of_the_student= document.getElementById("name_of_the_student_" +j).value;
   name_of_the_student_array.push(name_of_the_student);
}
console.log(name_of_the_student_array);

for(var k=0; k< name_of_the_student_array.length; k++)
{
    display_names_arrey.push("<h3>NAME - "+ name_of_the_student_array[k]);

    console.log(display_names_arrey);
    document.getElementById("display_name_with_commas").innerHTML=display_names_arrey;

    var removed_commas = display_names_arrey.join(" ");
    console.log(display_names_arrey);
    document.getElementById("display_name_without_commas").innerHTML=removed_commas;

    document.getElementById("submit_button").style.display="none";
    document.getElementById("sort_button").style.display="inline-block";

}
}
function sorting ()
{
    display_names_arrey.sort();
    var removed_commas = display_names_arrey.join(" ");
    console.log(display_names_arrey);
    document.getElementById("display_name_without_commas").innerHTML=removed_commas;

    
}
function update ()
{
    name_of_the_student_array.sort();
    document.getElementById("display_name_without_commas").innerHTML=name_of_the_student_array;

}
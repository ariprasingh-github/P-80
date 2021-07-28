Guest_list_array = [];
 function submit() { 
         var Guests = document.getElementById("Guestlist").value;
         console.log(Guests);
         Guest_list_array.push(Guests);
  
  console.log(Guest_list_array);
     var length_of_Guest_list_array = Guest_list_array.length;
     console.log(length_of_Guest_list_array)
     
     document.getElementById("display_with_commas").innerHTML = Guest_list_array;
     var remove_commas = Guest_list_array.join(" ");
     console.log(remove_commas);
     document.getElementById("display_without_commas").innerHTML = remove_commas;

     console.log(Guest_list_array);

  
 }

function sort(){
    Guest_list_array.sort();
    console.log(Guest_list_array);
    var Guest_list_array_sorting = [];
    var length_of_Guest_list_array = Guest_list_array.length;
    console.log(Guest_list_array);

    for (var a = 0;a<length_of_Guest_list_array;a++){
        Guest_list_array_sorting.push("<h4>Name = "+Guest_list_array[a]+ "</h4>");
        console.log(Guest_list_array_sorting); 
    
        var Guest_sorting = Guest_list_array_sorting.join(",");
        console.log(Guest_sorting);
        document.getElementById("sorted-list").innerHTML = Guest_sorting;
    }
    }
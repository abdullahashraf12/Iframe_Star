var data=""
  $("#child").empty()
  for(var i=0;i<5;i++){
    if(i==0){
    data+='<div style="float:left"> <div style="float:left"> <b> 7 Stars </b> </div><div style="float:left" id="child"><label for="file"></label><progress  id="file" value="100" max="100"> 32% </progress> </div><div style=" height: 55px; float:left;"  ><b> 100% </b> </div> </div><br> <br>'
  }
  else if(i==1){
    data+='<div style="float:left"> <div  style="float:left" > <b> 6 Stars </b> </div><div id="child"  style="float:left" ><label for="file"></label><progress  id="file" value="90" max="100"> 32% </progress> </div><div style=" height: 55px; float:left;"  ><b> 100% </b> </div> </div><br> <br>'

  }else if(i==2){
    data+='<div style="float:left"> <div  style="float:left" > <b> 5 Stars </b> </div><div id="child"  style="float:left" ><label for="file"></label><progress  id="file" value="80" max="100"> 32% </progress> </div><div style=" height: 55px; float:left;"  ><b> 100% </b> </div> </div><br> <br>'

}else if(i==3){
  data+='<div style="float:left"> <div  style="float:left" > <b> 4 Stars </b> </div><div id="child"  style="float:left" ><label for="file"></label><progress  id="file" value="70" max="100"> 32% </progress>   </div><div style=" height: 55px; float:left;"  ><b> 100% </b> </div> </div><br> <br>'

}else if(i==4){
  data+='<div style="float:left"> <div  style="float:left" > <b> 3 Stars </b> </div><div id="child"  style="float:left" ><label for="file"></label><progress  id="file" value="60" max="100"> 32% </progress>  </div><div style=" height: 55px; float:left;"  ><b> 100% </b> </div> </div><br> <br>'

}else if(i==5){
  data+='<div style="float:left"> <div  style="float:left" > <b> 2 Stars </b> </div><div id="child"  style="float:left" ><label for="file"></label><progress  id="file" value="50" max="100"> 32% </progress>  </div><div style=" height: 55px; float:left;"  ><b> 100% </b> </div> </div><br> <br>'

}
  }
  $("#child").html(data)




// $('#1,#2,#3,#4,#5,#6,#7').on('click', function(){
//     isChecked = $(this).is(':checked')
    
//     if(isChecked){ 
//         var get_radio_by_name_1=document.getElementById("1")

//         var get_radio_by_name_2=document.getElementById("2")

//         var get_radio_by_name_3=document.getElementById("3")

//         var get_radio_by_name_4=document.getElementById("4")

//         var get_radio_by_name_5=document.getElementById("5")

//         var get_radio_by_name_6=document.getElementById("6")

//         var get_radio_by_name_7=document.getElementById("7")


//         if(get_radio_by_name_1==this){
       
//         $(get_radio_by_name_1).prop("checked",true)
//         $(get_radio_by_name_2).prop('checked',false);
//         $(get_radio_by_name_3).prop('checked',false);
//         $(get_radio_by_name_4).prop('checked',false);
//         $(get_radio_by_name_5).prop('checked',false);
//         $(get_radio_by_name_6).prop('checked',false);
//         $(get_radio_by_name_7).prop('checked',false);

//         $("#div_1").attr("class","gold")
//         $("#div_2").attr("class","silver")
//         $("#div_3").attr("class","silver")
//         $("#div_4").attr("class","silver")
//         $("#div_5").attr("class","silver")
//         $("#div_6").attr("class","silver")
//         $("#div_7").attr("class","silver")







//     }
//         else if (get_radio_by_name_2==this){
//             $(get_radio_by_name_3).prop('checked',false);
//             $(get_radio_by_name_4).prop('checked',false);
//             $(get_radio_by_name_5).prop('checked',false);
//             $(get_radio_by_name_6).prop('checked',false);
//             $(get_radio_by_name_7).prop('checked',false);

//             $(get_radio_by_name_1).prop("checked",true)
//             $(get_radio_by_name_2).prop("checked",true)




//             $("#div_2").attr("class","gold")
//             $("#div_1").attr("class","gold")
//             $("#div_3").attr("class","silver")
//             $("#div_4").attr("class","silver")
//             $("#div_5").attr("class","silver")
//             $("#div_6").attr("class","silver")
//             $("#div_7").attr("class","silver")
    















//         // alert("checked")
//     }
//     else if (get_radio_by_name_3==this){
       
//             $(get_radio_by_name_4).prop('checked',false);
//             $(get_radio_by_name_5).prop('checked',false);
//             $(get_radio_by_name_6).prop('checked',false);
//             $(get_radio_by_name_7).prop('checked',false);

//         $(get_radio_by_name_1).prop("checked",true)
//         $(get_radio_by_name_2).prop("checked",true)
//         $(get_radio_by_name_3).prop("checked",true)


//         $("#div_3").attr("class","gold")
//         $("#div_2").attr("class","gold")
//         $("#div_1").attr("class","gold")
//         $("#div_4").attr("class","silver")
//         $("#div_5").attr("class","silver")
//         $("#div_6").attr("class","silver")
//         $("#div_7").attr("class","silver")








//         // alert("checked")
//     }
//     else if (get_radio_by_name_4==this){
//             $(get_radio_by_name_5).prop('checked',false);
//             $(get_radio_by_name_6).prop('checked',false);
//             $(get_radio_by_name_7).prop('checked',false);

//         $(get_radio_by_name_1).prop("checked",true)
//         $(get_radio_by_name_2).prop("checked",true)
//         $(get_radio_by_name_3).prop("checked",true)
//         $(get_radio_by_name_4).prop("checked",true)


//         $("#div_4").attr("class","gold")
//         $("#div_2").attr("class","gold")
//         $("#div_3").attr("class","gold")
//         $("#div_1").attr("class","gold")
//         $("#div_5").attr("class","silver")
//         $("#div_6").attr("class","silver")
//         $("#div_7").attr("class","silver")










//         // alert("checked")
//     }
//     else if (get_radio_by_name_5==this){
//         $(get_radio_by_name_6).prop('checked',false);
//         $(get_radio_by_name_7).prop('checked',false);
//         $(get_radio_by_name_1).prop("checked",true)
//         $(get_radio_by_name_2).prop("checked",true)
//         $(get_radio_by_name_3).prop("checked",true)
//         $(get_radio_by_name_4).prop("checked",true)
//         $(get_radio_by_name_5).prop("checked",true)



//         $("#div_5").attr("class","gold")
//         $("#div_2").attr("class","gold")
//         $("#div_3").attr("class","gold")
//         $("#div_4").attr("class","gold")
//         $("#div_1").attr("class","gold")
//         $("#div_6").attr("class","silver")
//         $("#div_7").attr("class","silver")

//         // alert("checked")
//     }
//     else if (get_radio_by_name_6==this){

//         $(get_radio_by_name_7).prop('checked',false);

//         $(get_radio_by_name_1).prop("checked",true)
//         $(get_radio_by_name_2).prop("checked",true)
//         $(get_radio_by_name_3).prop("checked",true)
//         $(get_radio_by_name_4).prop("checked",true)
//         $(get_radio_by_name_5).prop("checked",true)
        
//         $(get_radio_by_name_6).prop("checked",true)

//         $("#div_7").attr("class","silver")
//         $("#div_1").attr("class","gold")
//         $("#div_2").attr("class","gold")
//         $("#div_3").attr("class","gold")
//         $("#div_4").attr("class","gold")
//         $("#div_5").attr("class","gold")
//         $("#div_6").attr("class","gold")








//         // alert("checked")
//     }
//     else if (get_radio_by_name_7==this){


       
 
//         $(get_radio_by_name_1).prop("checked",true)
//         $(get_radio_by_name_2).prop("checked",true)
//         $(get_radio_by_name_3).prop("checked",true)
//         $(get_radio_by_name_4).prop("checked",true)
//         $(get_radio_by_name_5).prop("checked",true)
//         $(get_radio_by_name_6).prop("checked",true)
//         $(get_radio_by_name_7).prop("checked",true)



//         $("#div_7").attr("class","gold")
//         $("#div_2").attr("class","gold")
//         $("#div_3").attr("class","gold")
//         $("#div_4").attr("class","gold")
//         $("#div_5").attr("class","gold")
//         $("#div_6").attr("class","gold")
//         $("#div_1").attr("class","gold")

//         // alert("checked")
 
//     }
    
// }
// else{ 
//     console.log("Not cHECKED")
// }

   
// });
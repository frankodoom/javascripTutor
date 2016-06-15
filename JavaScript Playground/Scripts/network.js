
//simple network call
//all events
$(document).ajaxStart(function () {
   var mybtn= $('#load')
     mybtn.button('loading');
     //btn.button('loading');
});


//complete network call


function getData() {
    $.ajax({
        url: 'http://jsonplaceholder.typicode.com/posts',
        type: "GET",
        dataType: "json",
        success: function (data) {
            var bub = $("#load").button();
            bub.button('reset');
            $('#para').text(data);
            $.notify("Data Retrieved Successfully!")
        },
          complete:function(){
           
        }
    });
};


$(document).ajaxError(function () {
    $.notify("Something Went Wrong Bro!");
    bub.button('reset');
});


//Loading btn
$('#load').on('click', function () {
    getData();

});





//button




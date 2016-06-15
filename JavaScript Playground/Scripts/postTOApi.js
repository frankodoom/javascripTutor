
    function registerStudent(){
    var user = new Object();
    user.Name= $('#Name').val();
    user.Email=$('#Email').val();
    user.Password=$('#Password').val();
    user.phone = $('#phone').val();
        

    $.post("http://cloud911.azurewebsites.net/api/users", user, function (data) {

        alert(data);

    });

   /* $.ajax({
        url: "http://cloud911.azurewebsites.net/api/users",
        type: "POST",
        dataType: "json",
        data: user,
        success: function (data) {
            alert("New Student Created");
        },
        error: function () {
            alert("Something Went Wrong");
        }

    */

}
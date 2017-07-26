/**
 * Created by zhenglu on 26/07/2017.
 */

window.onload = function () {

}

//click function of submit button
function uploadFunction() {
    console.log("submitclick");
    console.log($('#uploadFile')[0].files[0]);

    //create formdata with file-input
    var formData = new FormData();
    formData.append('singleFile', $('#uploadFile')[0].files[0]);

    //send post request to server
    $.ajax({
        url: 'http://localhost:3000/upload',
        data: formData,
        cache: false,
        contentType: false,
        processData: false,
        type: 'POST',
        success: function(data){
            console.log(data);
            //show file info when receive it successfully
            appendFileList(data);
        },
        error: function (err) {
            console.log(err);
            return;
        }
    });
}

//add file info to the list
//@param 'data' is the information of the single uploaded file
function appendFileList(data) {
    var a = $("<a></a>").attr("href", data.path).text(data.path);
    var li = $("<li></li>").text("file:  " + data.fileName + "    path:" );
    li.append(a);
    $('#fileLists').append(li);
}
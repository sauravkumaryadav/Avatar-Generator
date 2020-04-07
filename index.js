$(document).ready(function () {
    $('button').click(function () {
        const name = $('#nameid').val();
        alert("you have typed " + name);
        $('.imgchange').attr('src', `https://joeschmoe.io/api/v1/${name}`);

    });
});
var itemCountList = $(".item-count");
var totalItems = 0;

$(".add-item").click(function() {
    var index = $(this).index('.add-item');
    var itemCount = $(itemCountList[index]).text();
    itemCount++;
    totalItems++;
    $(itemCountList[index]).text(String(itemCount));
    $("#total-items").text(String(totalItems));
});

$(".remove-item").click(function() {
    var index = $(this).index('.remove-item');
    var itemCount = $(itemCountList[index]).text();
    if(itemCount != 0) {
        itemCount--;
        totalItems--;
    }
    $(itemCountList[index]).text(String(itemCount));
    $("#total-items").text(String(totalItems));
});
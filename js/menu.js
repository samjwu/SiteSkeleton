var $select = $("<select></select>");

$("#main").append($select);

$("#main a").each(function() {
    var $option = $("<option></option>");
    $option.val($(this).attr("href"));
    $option.text($(this).text());

    if($(this).parent().hasClass("highlight")) {
        $option.prop("highlight", true);
    }

    $select.append($option);
});

$(window).on("shown.bs.modal", function() {
    AOS.init({disable:true});
});

$("#videoModal-a").on('hidden.bs.modal', function (e) {
    $("#videoModal-a iframe").attr("src", $("#videoModal-a iframe").attr("src"));
});

$("#videoModal-b").on('hidden.bs.modal', function (e) {
    $("#videoModal-b iframe").attr("src", $("#videoModal-b iframe").attr("src"));
});

$("#videoModal-c").on('hidden.bs.modal', function (e) {
    $("#videoModal-c iframe").attr("src", $("#videoModal-c iframe").attr("src"));
});

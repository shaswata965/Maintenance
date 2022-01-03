$(document).on("pagecontainertransition", function () {
    var url = window.location.href;
    var fileName = url.substring(url.lastIndexOf('/') + 1);
    var fileIndex = fileName.replace('.html', '');
    var leftFilePath = url.replace(fileName, (Number(fileIndex) + 1) + '.html');
    var rightFilePath = url.replace(fileName, (Number(fileIndex) - 1) + '.html');

    if ($('.swipeable').hasClass('arabic')) {
        $('.swipeable:not(.first)').on('swipeleft', function (e) {
            if (e.handled !== true) { // This will prevent event triggering more then once
                window.location.href = rightFilePath;
            }
        });
        $('.swipeable:not(.last)').on('swiperight', function (e) {
            if (e.handled !== true) { // This will prevent event triggering more then once
                window.location.href = leftFilePath;
            }
        });
    } else {
        $('.swipeable:not(.last)').on('swipeleft', function (e) {
            if (e.handled !== true) { // This will prevent event triggering more then once
                window.location.href = leftFilePath;
            }
        });
        $('.swipeable:not(.first)').on('swiperight', function (e) {
            if (e.handled !== true) { // This will prevent event triggering more then once
                window.location.href = rightFilePath;
            }
        });
    }
});

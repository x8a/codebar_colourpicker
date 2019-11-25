/* Exercise 2: Color picker */
var colors = ['A4A4A4', '088A29', '070719', 'FF0000', 'cc66ff'];
var randomColor = Math.floor(Math.random() * colors.length);

$(document).on('keyup', '#color', function () {
    setPreviewColor($('#color').val());
   });

$(document).on('click', '#add-to-favorite', function () {
    addBox($('#color').val());
    setPreviewColor('');
    $('#color').focus().val('');
});

$(document).on('keydown', '#color', function (e) {
    var key = e.which;
    if (key == 13) {
        addBox($('#color').val());
        setPreviewColor('');
        $('#color').focus().val('');
    }
   });
   
$(document).ready(function() {
    setPreviewColor(colors[randomColor]);
});

function setPreviewColor(color) {
    $('.preview').css('background-color', color);
    // not working --> $('.color-code').val($('.preview').css('background-color'));
}

function addBox(color) {
    $('#colors').prepend('<div class="item" style="background-color: ' + color + ';"></div>');
}
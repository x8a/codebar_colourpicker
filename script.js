/* Exercise 2: Color picker */
$(document).on('keyup', '#color', function () {
    setPreviewColor($('#color').val())
   })

$(document).on('click', '#add-to-favorite', function () {
    addBox($('#color').val());
    setPreviewColor('');
    $('#color').focus().val('');
})

function setPreviewColor(color) {
    //reading the rgb color code --> $('.preview').css('background-color');
    $('.preview').css('background-color', color);
}

function addBox(color) {
    $('#colors').prepend('<div class="item" style="background-color: ' + color + ';"></div>');
}
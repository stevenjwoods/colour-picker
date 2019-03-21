$(document).ready(function() {
    // Code that runs when the document is ready
    colors.forEach(function(color) {
        console.log(color);
        addBox(color);
    })
    colorIdx = Math.floor(Math.random() * colors.length);
    previewColor = colors[colorIdx];
    setPreviewColor(previewColor);
});

function setPreviewColor(color) {
    $('.preview').css('background-color', color);
    $('.color-code').text($('.preview').css('background-color'));
}

$(document).on('keyup', '#color', function() {
    setPreviewColor($('#color').val());
});

function addBox(color) {
    if ($('#colors .item').length >= 16) {
        $('#colors .item').last().remove();
    }
    $('#colors').prepend('<div class="item" style="background-color: ' + color + ';"></div>');
    previewColor = color;
}

$(document).on('click', '#add-to-favorite', function() {
    addBox($('#color').val());
    $('#color').val('');  // Reset the value of #color field (text box)
    $('#color').focus();  // Set focus back on text box
});

$(document).on('mouseenter', '.item', function() {
    setPreviewColor($(this).css('background-color'));
});

$(document).on('mouseleave', '.item', function() {
    setPreviewColor(previewColor);
});

$(document).on('click', '.item', function() {
    previewColor = $(this).css('background-color');
    setPreviewColor(previewColor);
});

var previewColor;
var colors = [ '770077', '008080' ];


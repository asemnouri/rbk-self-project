$('.hideme').hide()
$('.hideSave').hide()
var counter = 0
var counter2 = 0
$('.heart').on('click', function () {

    if (counter % 2 === 0) {
        $('.hideme').show()
        $('.showme').hide()
        $('.increaseNumber').text(Number($('.increaseNumber').text()) + 1)
        counter++
    } else {

        $('.increaseNumber').text(Number($('.increaseNumber').text()) - 1)

        $('.hideme').hide()
        $('.showme').show()
        counter++
    }

})

$('.save').on('click', function () {

    if (counter2 % 2 === 0) {
        $('.hideSave').show()
        $('.showSave').hide()
        counter2++
    } else {
        $('.hideSave').hide()
        $('.showSave').show()
        counter2++
    }

})

$('.postButton').on('click', function () {
    var firstSpan = $(`<span class="ml-3" style="font-weight: bold;">Asemnouri</span>`)
    var secondSpan = $(`<span class="ml-2"></span>`)
    var comment = $('.submitComment').val()
    var appendToMe = $('.appendToMe')
    secondSpan.text(comment)
    firstSpan.appendTo(appendToMe)
    secondSpan.appendTo(appendToMe)
    $('<br>').appendTo(appendToMe)
})

var counter3 = 0
$('.followBtn').on('click', function () {

    if (counter3 % 2 === 1) {
        $(this).text('Follow')
        counter3++
    } else {
        $(this).text('Unfollow')
        counter3++
    }
    if (counter % 2 === 0) {
        setTimeout(function () {
            $('.deleteMe').remove()

        }, 2000)
    }

})

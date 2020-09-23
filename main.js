$('.hideme').hide()
$('.hideSave').hide()
var counter = 0
var counter2=0
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

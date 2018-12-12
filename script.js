$(document).ready(initializeApp);

var cartoonCharacterArray = [];

function initializeApp() {
    addClickHandlersToElements();
}

function addClickHandlersToElements() {
    $('.cartoon-character-add-form').on('click', '.btn-success', handleAddClick);
    $('.cartoon-character-add-form').on('click', '.btn-default', handleCancelClick);
    $('.cartoon-character-add-form').on('click', '.btn-primary', handleDataClick);
}

function handleAddClick() {
    addCartoonCharacter();
}

function handleCancelClick() {
    clearAddCartoonCharacterFormInputs();
}

function handleDataClick() {
    $.ajax({
        dataType: 'JSON',
        url: 'http://localhost:8888/get_data.php',
        method: 'POST',
        success: function (response) {
            console.log(response.data);
            for (var index = 0; index < response.data.length; index++) {
                var newName = response.data[index].name;
                var newShow = response.data[index].show;
                var newType = response.data[index].type;
                var newCartoonCharacter = {
                    name: newName,
                    show: newShow,
                    type: newType
                };
                cartoonCharacterArray.push(newCartoonCharacter);
                updateCartoonCharacterList(cartoonCharacterArray);
            }

            return true;
        }
    });
}


function addCartoonCharacter() {
    var newName = $('#characterName').val();
    var newShow = $('#characterShow').val();
    var newType = $('#characterType').val();
    var newCartoonCharacter = {
        name: newName,
        show: newShow,
        type: newType
    };

    cartoonCharacterArray.push(newCartoonCharacter);
    clearAddCartoonCharacterFormInputs();
    updateCartoonCharacterList(cartoonCharacterArray);

}

function clearAddCartoonCharacterFormInputs() {
    $('#characterName').val("");
    $('#characterShow').val("");
    $('#characterType').val("");
}

function renderCartoonCharacterOnDom(cartoonCharacterObject) {
    var cartoonCharacter = cartoonCharacterObject;
    var newTr = $('<tr>');
    var newCartoonCharacterName = $('<td>', {
        text: cartoonCharacterObject.name,
        class: 'text-color'
    });
    var newCartoonCharacterShow = $('<td>', {
        text: cartoonCharacterObject.show,
        class: 'text-color'
    });
    var newCartoonCharacterType = $('<td>', {
        text: cartoonCharacterObject.type,
        class: 'text-color'
    });
    var deleteButton = $('<td>', {
        text: 'Delete',
        class: 'btn btn-danger',
        type: 'button'
    });

    removeCartoonCharacter(newTr, deleteButton, cartoonCharacter);
    newTr.append(newCartoonCharacterName, newCartoonCharacterShow, newCartoonCharacterType, deleteButton);
    $('tbody').append(newTr);
}

function updateCartoonCharacterList(cartoonCharacters) {
    renderCartoonCharacterOnDom(cartoonCharacters[cartoonCharacters.length - 1]);
}

function removeCartoonCharacter(tableRow, button, cartoonCharacter) {
    button.click(function () {
        tableRow.remove();
        var index = cartoonCharacterArray.indexOf(cartoonCharacter);
        cartoonCharacterArray.splice(index, 1);
    });
}
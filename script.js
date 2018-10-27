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
        text: cartoonCharacterObject.name
    });
    var newCartoonCharacterShow = $('<td>', {
        text: cartoonCharacterObject.show
    });
    var newCartoonCharacterType = $('<td>', {
        text: cartoonCharacterObject.type
    });
    var deleteButton = $('<td>', {
        text: 'Delete',
        class: 'btn btn-danger',
        type: 'button'
    });

    newTr.append(newCartoonCharacterName, newCartoonCharacterShow, newCartoonCharacterType, deleteButton);
    $('tbody').append(newTr);
}

function updateCartoonCharacterList(cartoonCharacters) {
    renderCartoonCharacterOnDom(cartoonCharacters[cartoonCharacters.length - 1]);
}

function removeCartoonCharacter() {
    
}
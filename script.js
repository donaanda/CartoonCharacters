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

}

function clearAddCartoonCharacterFormInputs() {
    $('#characterName').val("");
    $('#characterShow').val("");
    $('#characterType').val("");
}
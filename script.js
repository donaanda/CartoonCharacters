$(document).ready(initializeApp);

function initializeApp() {
    addClickHandlersToElements();
}

function addClickHandlersToElements() {
    $(".cartoon-character-add-form").on('click', '.btn-success', handleAddClick);
    $(".cartoon-character-add-form").on('click', '.btn-default', handleCancelClick);
    $(".cartoon-character-add-form").on('click', '.btn-primary', handleDataClick);
}

function handleAddClick() {

}

function handleCancelClick() {

}

function handleDataClick() {

}
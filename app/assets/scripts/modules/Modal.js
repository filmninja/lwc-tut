import $ from 'jquery'; 

class Modal {
	
	constructor() {
		this.openModalButton = $(".open-modal");
		this.modal = $(".modal");
		this.closeModalButton = $(".modal__close");
		this.events();
	}
	
	events() {
		// clicking open modal button
		this.openModalButton.click(this.openModal.bind(this));
		
		// clicking the X close modal button
		this.closeModalButton.click(this.closeModal.bind(this));
		
		// push any key
		$(document).keyup(this.keyPressHandler.bind(this));
	}
	
	openModal() {
		this.modal.addClass("modal__visible");
		return false;
	}
	
	closeModal() {
		this.modal.removeClass("modal__visible");
		return false;
	}
	
	keyPressHandler(e) {
		if (e.keyCode == 27) {
			this.closeModal();
		}
	}
	
}

export default Modal;
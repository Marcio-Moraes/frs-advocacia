function iniciaModal(modalID) {
    const modal = document.getElementById(modalID);
    if (modal) {
        modal.classList.add('addmodal');
        modal.addEventListener('click', (e) => {
            if (e.target.id == modalID || e.target.id == 'div_btn_fechar_modal_home') {
                modal.classList.remove('addmodal');
                localStorage.fechaModal = modalID;
            }
        });
    }
}

const abreModal = document.querySelector('#div_btn_plus_abre_modal');
abreModal.addEventListener('click', () => iniciaModal('modalhome'));




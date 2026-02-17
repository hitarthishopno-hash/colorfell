// ======================= Setting_Panel =======================
function SettingsPanel() {
    const settingsHTML = `
    <div class="setting-main">
        <a href="https://wa.me/9876543210" class="box-fix-setting">
            <img src="assets/image/svg/footer4.svg" alt="settings" class="setting" data-bs-toggle="offcanvas"
                data-bs-target="#offcanvasRight2">
        </a>
        <div class="box-fix-setting" stye="">
            <img src="assets/image/svg/scanner.png"
             alt="settings"
              class="setting scanner-btn" 
                data-bs-target="#offcanvasRight2">
        </div>
    </div>
    



<!-- Scanner Modal -->
<div class="modal fade" id="scannerModal" tabindex="-1">
    <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content scanner-modal">

            <button type="button"
                    class="btn-close scanner-close"
                    data-bs-dismiss="modal"></button>

            <div class="scanner-body">
                <img src="assets/image/svg/profilescanner.png"
                     alt="Scanner Preview"
                     class="scanner-preview">
            </div>

        </div>
    </div>
</div>


    `;
    const wrapper = document.createElement('div');
    wrapper.innerHTML = settingsHTML;
    document.body.appendChild(wrapper);


    document.addEventListener("click", function (e) {
        if (e.target.classList.contains("scanner-btn")) {
            const scannerModal = new bootstrap.Modal(
                document.getElementById("scannerModal")
            );
            scannerModal.show();
        }
    });

}

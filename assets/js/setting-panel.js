// ======================= Setting_Panel =======================
function SettingsPanel() {
    const settingsHTML = `
    <div class="setting-main">
        <div class="box-fix-setting">
            <img src="assets/image/svg/footer4.svg" alt="settings" class="setting" data-bs-toggle="offcanvas"
                data-bs-target="#offcanvasRight2">
        </div>
        <div class="box-fix-setting" stye="">
            <img src="assets/image/svg/scanner.png"
             alt="settings"
              class="setting scanner-btn" 
                data-bs-target="#offcanvasRight2">
        </div>
    </div>
    <!-- Offcanvas Details -->
    <div class="offcanvas offcanvas-end" id="offcanvasRight2">
        <div class="offcanvas-header">
            <p class="offcanvas-title"><img src="assets/image/svg/logo.svg" alt="logo"></p>
            <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
        </div>
        <div class="offcanvas-body">
            <a href="https://1.envato.market/all-in-one-handyman-repair-services-html-template-home-rakshak"
                class="demo-box" target="_blank">
                <img class="w-100" src="assets/image/setting-demo/Handyman.jpg" alt="Handyman">
                <p>Handyman Solution</p>
            </a>
            <a href="https://1.envato.market/all-in-one-plumbing-repair-services-html-template-home-rakshak"
                class="demo-box" target="_blank">
                <img class="w-100" src="assets/image/setting-demo/Plumbing.jpg" alt="Plumbing">
                <p>Plumbing Solution</p>
            </a>
            <a href="https://1.envato.market/website-portfolio" class="demo-box" target="_blank">
                <img class="w-100" src="assets/image/setting-demo/Roofing.jpg" alt="Roofing">
                <p>Roofing Solution</p>
            </a>
            <a href="https://1.envato.market/website-portfolio" class="demo-box" target="_blank">
                <img class="w-100" src="assets/image/setting-demo/Cleaning.jpg" alt="Cleaning">
                <p>Cleaning Solution</p>
            </a>
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

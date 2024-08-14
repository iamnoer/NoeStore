document.addEventListener('DOMContentLoaded', () => {
    const packages = document.querySelectorAll('.package');
    const paymentSection = document.getElementById('paymentSection');
    const resultSection = document.getElementById('resultSection');
    const resultMessage = document.getElementById('resultMessage');
    const confirmButton = document.getElementById('confirmButton');

    let selectedPackage = null;

    packages.forEach(pkg => {
        pkg.addEventListener('click', () => {
            packages.forEach(p => p.classList.remove('selected'));
            pkg.classList.add('selected');
            selectedPackage = pkg;
            paymentSection.style.display = 'block';
        });
    });

    confirmButton.addEventListener('click', () => {
        if (selectedPackage) {
            const amount = selectedPackage.getAttribute('data-amount');
            const price = selectedPackage.getAttribute('data-price');
            const paymentMethod = document.getElementById('paymentMethod').value;

            // Simulate payment processing
            setTimeout(() => {
                resultMessage.textContent = `Pembayaran berhasil! Anda telah membeli ${amount} koin dengan metode ${paymentMethod}. Total: $${price}.`;
                paymentSection.style.display = 'none';
                resultSection.style.display = 'block';
            }, 1000); // Simulate a delay for payment processing
        } else {
            alert('Silakan pilih paket terlebih dahulu.');
        }
    });
});

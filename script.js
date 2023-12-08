document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('multiStepForm');
    const steps = form.querySelectorAll('div[id^="step"]');
    const numSteps = steps.length;
    let currentStep = 0;

    function showStep(step) {
        steps[currentStep].style.display = 'none';
        steps[step].style.display = 'block';
        currentStep = step;
    }

    function nextStep() {
        if (currentStep < numSteps - 1) {
            showStep(currentStep + 1);
        }
    }

    function prevStep() {
        if (currentStep > 0) {
            showStep(currentStep - 1);
        }
    }

    form.addEventListener('submit', function (e) {
        e.preventDefault();
        const formData = new FormData(form);
        fetch('process_form.php', {
            method: 'POST',
            body: formData
        });
        alert('Formulário enviado com sucesso!');
    });

    const nextBtns = form.querySelectorAll('.next');
    const prevBtns = form.querySelectorAll('.prev');

    nextBtns.forEach(btn => {
        btn.addEventListener('click', nextStep);
    });

    prevBtns.forEach(btn => {
        btn.addEventListener('click', prevStep);
    });
});
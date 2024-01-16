document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('multiStepForm');
    const steps = form.querySelectorAll('div[id^="step"]');
    const numSteps = steps.length;
    let currentStep = 0;

    function showStep(step) {
        steps[currentStep].style.display = 'none';
        steps[step].style.display = 'block';
        currentStep = step;
        updateProgressBar();
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

    function updateProgressBar() {
        const indicators = document.querySelectorAll('.step-indicator');
        const lines = document.querySelectorAll('.step-line');
        indicators.forEach((indicator, index) => {
            if (index <= currentStep) {
                indicator.style.backgroundColor = '#007bff';
                indicator.style.color = '#fff';
            } else {
                indicator.style.backgroundColor = '#fff';
                indicator.style.color = '#007bff';
            }
        });

        lines.forEach((line, index) => {
            if (index < currentStep) {
                line.style.backgroundColor = '#007bff';
            } else {
                line.style.backgroundColor = 'rgb(0, 0, 0, 0.2)';
            }
        })
    }

    // Chama updateProgressBar ao carregar o DOM
    updateProgressBar();

    form.addEventListener('submit', function (e) {
        e.preventDefault();
        // Aqui você pode adicionar lógica para lidar com o envio do formulário completo
        // Por exemplo, coletar dados e enviar para um servidor
        // Ou exibir uma mensagem de confirmação
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
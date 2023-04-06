class FormHandler {
    constructor(formSelector) {
        this.form = document.querySelector(formSelector);
        this.form.addEventListener("submit", this.handleSubmit.bind(this));
    }

    async handleSubmit(event) {
        event.preventDefault();

        if (!this.validate()) {
            return;
        }

        const formData = new FormData(this.form);
        const response = await fetch("https://formcarry.com/s/{ReBoePpF2_}", {
            method: "POST",
            body: formData,
            headers: {
                "Accept": "application/json"
            }
        });

        if (!response.ok) {
            const error = await response.json();
            this.handleError(error);
            return;
        }

        const result = await response.json();
        this.handleSuccess(result);
    }

    validate() {
        // Реализуйте валидацию формы
        return true;
    }

    handleError(error) {
        // Реализуйте обработку ошибок
    }

    handleSuccess(result) {
        // Реализуйте обработку успешной отправки
    }
}

new FormHandler(".form");

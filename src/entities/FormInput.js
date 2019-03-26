export default class FormInput {
    constructor(settings) {
        this.type = settings.type || 'text';
        this.label = settings.label || '';
        this.name = settings.name || '';
        this.rules = settings.rules || '';
        this.rightIcon= settings.rightIcon || '';
        this.showSubmitErrorMsg = settings.showSubmitErrorMsg || false;
        this.submitErrorMsg = settings.submitErrorMsg || '';
        this.options = settings.options || [];
    }

    setErrorMsg() {
        this.showSubmitErrorMsg = true
    }

    resetErrorMsg() {
        this.showSubmitErrorMsg = false
    }
}
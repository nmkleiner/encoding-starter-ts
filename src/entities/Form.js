import FormInput from "./FormInput";

export default class Form {
    constructor(settings){
        this.inputs = {};
        this.buildInputs(settings.inputs);
    }

    buildInputs(inputs){
        inputs.forEach((inputSettings) => {
            this.inputs[inputSettings.name] = new FormInput(inputSettings);
        })
    }

    input(name){
        return this.inputs[name] || null;
    }

    inputs() {
        return this.inputs
    }
}
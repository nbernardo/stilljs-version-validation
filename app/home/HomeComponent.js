import { ViewComponent } from "../../@still/component/super/ViewComponent.js";

export class HomeComponent extends ViewComponent {

    isPublic = true;

    personData = [];
    anotherField = true;

    async stAfterInit(){
        this.personData = await this.getPerson()
    }

    async getPerson(){
        const result = await (await fetch('https://6890c5af944bf437b597478d.mockapi.io/person')).json();
        console.log(result);
        
        return result;
    }
    
    call(){
        console.log(`VALUES BEFORE: `,this.anotherField);
        
        this.anotherField = false;
        console.log(`VALUES AFTER: `,this.anotherField);
    }

    constructor() {
        super();
    }

}
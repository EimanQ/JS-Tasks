class Singer {
    constructor(name, surname) {
        this.name = name;
        this.surname = surname;
    }
    getAutogroph = () => {
        return `${this.name, this.surname}, с наилучшими пожеланиями `;
    }
}

const singerMan = new Singer(`Yanis`, `Khenilane`);
console.log(singerMan.getAutogroph());
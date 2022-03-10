class Die {
    constructor() {

        this.die = $('<div class="box"></div')
        $('.container').append(this.die)
        this.roll();
        $(this.die).click(() => {
            this.roll();
        })

        $(this.die).dblclick(() => {
            $(this.die).remove();
            let i = dice.indexOf(this);
            dice.splice(i, 1)
        })
    }

    roll() {
        this.number = Math.floor(Math.random() * 6) + 1;
        this.die.text(this.number)
    }
}

const dice = [];

$('.btn').click(() => {
    let diceCreated = new Die();
    dice.push(diceCreated)
})

$('.roll').click(() => {
    dice.forEach((die) => {
        die.roll();
    })
})

$('.sum').click(() => {
    let sum = 0;
    dice.forEach((die) => {
        sum += die.number
    })
    alert(sum)
})
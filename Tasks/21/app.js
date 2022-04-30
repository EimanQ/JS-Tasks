const valueA = +prompt();

if (isNaN(valueA)) {
    console.log(`error`);
} else {
    if (valueA > 36) {
        console.log(`error`)
    } else {
        if (valueA === 0) {
            console.log(`Green`)
        } else if (valueA >= 1 && valueA <= 10) {
            if (valueA % 2 === 0) {
                console.log(`Black`)
            } else console.log(`Red`)
        } else if (valueA >= 11 && valueA <= 18) {
            if (valueA % 2 === 0) {
                console.log(`Red`)
            } else console.log(`Black`)
        } else if (valueA >= 19 && valueA <= 28) {
            if (valueA % 2 === 0) {
                console.log(`Black`)
            } else console.log(`Red`)
        } else if (valueA >= 29 && valueA <= 36) {
            if (valueA % 2 === 0) {
                console.log(`Red`)
            } else console.log(`Black`)
        }
    }
}
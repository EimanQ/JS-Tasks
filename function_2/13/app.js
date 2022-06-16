const emptyObj = {};

const fillEmptyObj = (obj) => {
    for (let i = 0; i < 2; i++) {
        if (i === 0) obj[`a`] = 1;
        obj[`b`] = 2;
    }
    return obj;
}

const calculateAvrSumOfObj = (obj) => {
    const objWAvg = fillEmptyObj(obj);
    let averageSum = 0;
    for (let key in objWAvg) {
        averageSum += objWAvg[key];
    }
    objWAvg[`avg`] = averageSum;
    return objWAvg
}

console.log(calculateAvrSumOfObj(emptyObj));
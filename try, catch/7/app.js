const outRoute = '/home/user/dir/file.txt';

const checkARoute = (route) => {
    const arrForCheck = route.split(``);
    const sumOfSlash = arrForCheck.reduce((sum, currentValue) => (currentValue === `/`) ? sum + 1 : sum + 0, 0);
    if (sumOfSlash === 0) throw new Error(`You put incorrect route`);
    return arrForCheck;
}

const returnNameOfFile = (route) => {
    try {
        const routeForSearch = checkARoute(route);
        const fileNameArr = [];
        for (let i = routeForSearch.length - 1; i < routeForSearch.length; i--) {
            if (routeForSearch[i] === `/`) break
            fileNameArr.push(routeForSearch[i]);
        };
        return fileNameArr.reverse().join(``);
    } catch (e) {
        return e
    }
}

console.log(returnNameOfFile(outRoute));
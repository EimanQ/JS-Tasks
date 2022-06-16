const dataFromServer = [{
            "id": "javascript",
            "label": "JavaScript",
            "category": "programmingLanguages",
            "priority": 1
        },
        {
            "id": "typescript",
            "label": "TypeScript",
            "category": "programmingLanguages",
            "priority": 1
        },
        {
            "id": "sql",
            "label": "SQL",
            "category": "programmingLanguages",
            "priority": 2
        },
        {
            "id": "java",
            "label": "Java",
            "category": "programmingLanguages",
            "priority": 3
        },
        {
            "id": "go",
            "label": "GO",
            "category": "programmingLanguages",
            "priority": 3
        },
        {
            "id": "python",
            "label": "python",
            "category": "programmingLanguages",
            "priority": 3
        },
        {
            "id": "php",
            "label": "php",
            "category": "programmingLanguages",
            "priority": 3
        },
        {
            "id": "lotussrcipt",
            "label": "LotusScript",
            "category": "programmingLanguages",
            "priority": 3
        },
        {
            "id": "c",
            "label": "C",
            "category": "programmingLanguages",
            "priority": 4
        },
        {
            "id": "c#",
            "label": "C#",
            "category": "programmingLanguages",
            "priority": 4
        },
    ],
    dataToCreateId = [{
        "id": "c++",
        "label": "C++",
        "category": "programmingLanguages",
        "priority": 4
    }, ];
const checkItemOnData = (dataVariable) => {
    const tryFindItem = dataVariable.reduce((sum, currentValue, index) => (dataVariable[index].label === `C++`) ? sum + 1 : sum + 0, 0)
    if (tryFindItem === 1) throw new Error(`C++ has already in Data`);
    return dataVariable;
}

const createNewId = (dataVariable, dataToChange) => {
    try {
        let dataToReturn = checkItemOnData(dataVariable)
        const createId = dataToChange.map(key => {
            return {
                "id": `${key.label.toLowerCase()}`,
                "label": "C++",
                "category": "programmingLanguages",
                "priority": 4,
            }
        })
        return dataToReturn = [...dataToReturn, ...createId]
    } catch (e) {
        return e;
    }
}

console.log(createNewId(dataFromServer, dataToCreateId));
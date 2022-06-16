let dataFromServer = [{
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
        {
            "id": "c++",
            "label": "C++",
            "category": "programmingLanguages",
            "priority": 4
        },
    ],
    dataNew = [{
        "id": "c++",
        "label": "C++",
        "category": "programmingLanguages",
        "priority": 4
    }, ];

const findId = (data) => {
    const findVariableId = data.filter(key => key.id)
        .map(key => key.id)
        .toString();
    return findVariableId
}

const pushNewData = (data, pushingData) => {
    try {
        let dataToReturn = data;
        const idForSearching = findId(pushingData);
        for (let i = 0; i < data.length; i++) {
            if (data[i].id == idForSearching) {
                dataToReturn = dataToReturn.filter(key => key.id != idForSearching)
                    .map(key => key);
                dataToReturn = [...dataToReturn, ...pushingData];
                break
            }
        }
        return dataToReturn
    } catch (e) {
        return e;
    }
}
console.log(pushNewData(dataFromServer, dataNew));
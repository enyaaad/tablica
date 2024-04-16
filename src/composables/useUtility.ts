export function getAllArraysInObjects(obj: Record<string, any>) {
    let arrays: unknown[] = [];

    function checkArrays(object: Record<string, any>) {
        for (let key in object) {
            if (Array.isArray(object[key])) {
                arrays.push(object[key]);
                object[key].forEach((item: any) => {
                    if (typeof item === 'object') {
                        checkArrays(item);
                    }
                });
            } else if (typeof object[key] === 'object') {
                checkArrays(object[key]);
            }
        }
    }

    checkArrays(obj);
    return arrays;
}

export function deepSearch (object: Record<string, any>, key: string, predicate) {
    if (object.hasOwnProperty(key) && predicate(key, object[key]) === true) return object

    for (let i = 0; i < Object.keys(object).length; i++) {
        let value = object[Object.keys(object)[i]];
        if (typeof value === "object" && value != null) {
            let o = deepSearch(object[Object.keys(object)[i]], key, predicate)
            if (o != null) return o
        }
    }
    return null
}

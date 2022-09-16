

export function isHttpError(model: any): model is HttpErrorResponse {
    //return model instanceof HttpErrorResponse; // doesn't work because it's referenced from a separate npm library
    return model?.constructor?.name === 'HttpErrorResponse';
}

export function isObject(model: any): model is object {
    return getType(model) === 'object';
}

export function isFunction(model: any): model is Function {
    return getType(model) === 'function';
}

export function isError(model: any): model is Error {
    return getType(model) === 'error';
}

export function isString(model: any): model is string {
    return getType(model) === 'string';
}

export function isBoolean(model: any): model is string {
    return getType(model) === 'boolean';
}

export function isFile(model: any): model is File {
    return getType(model) === 'file';
}

export function isArray<T>(model: any): model is Array<T> {
    return getType(model) === 'array';
}

export function isNumber(model: any): model is number {
    return getType(model) === 'number';
}

export function isDate(model: any): model is Date {
    return getType(model) === 'date';
}

export function isUint8Array(model: any): model is Uint8Array {
    return getType(model) === 'uint8array';
}

export function isBlob(model: any): model is Blob {
    return getType(model) === 'blob';
}

export function isNullOrUndefined(value: any): boolean {
    return value === null || value === undefined;
}

export function isNullOrEmpty(value: string): boolean {
    return isNullOrUndefined(value) || value === '';
}

export function getType(model: any): string {
    const type = {}.toString.call(model);

    switch (type) {
        case '[object Number]':
            return 'number';
        case '[object Date]':
            return 'date';
        case '[object String]':
            return 'string';
        case '[object Null]':
            return 'null';
        case '[object Undefined]':
            return 'undefined';
        case '[object Object]':
            return 'object';
        case '[object Boolean]':
            return 'boolean';
        case '[object Array]':
            return 'array';
        case '[object File]':
            return 'file';
        case '[object Uint8Array]':
            return 'uint8array';
        case '[object Blob]':
            return 'blob';
        case '[object Error]':
            return 'error';
        case '[object MediaError]':
            return 'mediaerror';
        case '[object Function]':
            return 'function';
        default:
            return type;
    }
}

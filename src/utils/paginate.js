import _ from 'lodash';

export function paginate(items, pageNumber, pageSize) {
    const startIndex = (pageNumber - 1) * pageSize;
    //paginate data on the client side
    return  _(items)
        .slice(startIndex)
        .take(pageSize)
        .value();
}
import { get_, put_ } from "../lib/request";


export function get_store_details(jwt) {
    let data = get_('/shop/store_details_by_user', jwt);
    return data;
}

export function update_store(domain, jwt, params) {
    let data = put_(`/shop/store_details/${domain}`, jwt, params)
    return data;
}

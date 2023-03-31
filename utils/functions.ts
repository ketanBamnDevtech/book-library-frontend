import Cookies from 'js-cookie'

/*******************
   @purpose : Get Cookie
   @Parameter : {name}
   ******************/
export function get_cookie(name: string) {
    if (name) {
        return Cookies.get(name);
    }
    return "";
}
/*******************
   @purpose : Set Cookie
   @Parameter : {name, value}
   ******************/
export function set_cookie(name: string, value: string, days = 50000) {
    if (name) {
        Cookies.set(name, value, { expires: days });
    }
}
/*******************
   @purpose : Remove Cookie
   @Parameter : {name}
   ******************/
export function remove_cookie(name: string) {
    if (name) {
        Cookies.remove(name);
    }
}


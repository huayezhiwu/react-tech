const ll = window.localStorage;
const ss = window.sessionStorage;

export const Cookie = {
    get(key) {
        const coki = document.cookie.split(';');
        for (let i in coki) {
            const k = coki[i].trim().split('=');
            if (k[0] === key) {
                return k[1];
            }
        }
        return '';
    },
    set(key, value, time) {
        time = time ? time : new Date(+new Date() + 24 * 60 * 60 * 1000);
        if (Object.prototype.toString.call(key).slice(8, -1) === 'Array') {
            key.forEach((k, i) => {
                document.cookie = `${k}=${value[i]};expires=${time}`;
            });
        } else {
            document.cookie = `${key}=${value};expires=${time}`;
        }
    },
    clear(key) {
        if (Object.prototype.toString.call(key).slice(8, -1) === 'Array') {
            key.forEach(k => {
                this.set(k, 1, -1);
            });
        } else {
            this.set(key, 1, -1);
        }
    }
};

export const LocalStorage = {
    get(key) {
        return ll.getItem(key);
    },
    set(key, value) {
        if (Object.prototype.toString.call(key) === 'Array') {
            for (let i in key) {
                ll.setItem(i, JSON.stringify(value[i]));
            }
        } else {
            ll.setItem(key, JSON.stringify(value));
        }
    },
    clear(key) {
        ll.removeItem(key);
    },
    clearAll() {
        ll.clear();
    }
};

import { noop as noop$1, safe_not_equal, subscribe, run_all, is_function, get_store_value } from './svelte/internal.js';

const subscriber_queue = [];
/**
 * Creates a `Readable` store that allows reading by subscription.
 * @param value initial value
 * @param {StartStopNotifier}start start and stop notifications for subscriptions
 */
function readable(value, start) {
    return {
        subscribe: writable(value, start).subscribe,
    };
}
/**
 * Create a `Writable` store that allows both updating and reading by subscription.
 * @param {*=}value initial value
 * @param {StartStopNotifier=}start start and stop notifications for subscriptions
 */
function writable(value, start = noop$1) {
    let stop;
    const subscribers = [];
    function set(new_value) {
        if (safe_not_equal(value, new_value)) {
            value = new_value;
            if (stop) { // store is ready
                const run_queue = !subscriber_queue.length;
                for (let i = 0; i < subscribers.length; i += 1) {
                    const s = subscribers[i];
                    s[1]();
                    subscriber_queue.push(s, value);
                }
                if (run_queue) {
                    for (let i = 0; i < subscriber_queue.length; i += 2) {
                        subscriber_queue[i][0](subscriber_queue[i + 1]);
                    }
                    subscriber_queue.length = 0;
                }
            }
        }
    }
    function update(fn) {
        set(fn(value));
    }
    function subscribe(run, invalidate = noop$1) {
        const subscriber = [run, invalidate];
        subscribers.push(subscriber);
        if (subscribers.length === 1) {
            stop = start(set) || noop$1;
        }
        run(value);
        return () => {
            const index = subscribers.indexOf(subscriber);
            if (index !== -1) {
                subscribers.splice(index, 1);
            }
            if (subscribers.length === 0) {
                stop();
                stop = null;
            }
        };
    }
    return { set, update, subscribe };
}
function derived(stores, fn, initial_value) {
    const single = !Array.isArray(stores);
    const stores_array = single
        ? [stores]
        : stores;
    const auto = fn.length < 2;
    return readable(initial_value, (set) => {
        let inited = false;
        const values = [];
        let pending = 0;
        let cleanup = noop$1;
        const sync = () => {
            if (pending) {
                return;
            }
            cleanup();
            const result = fn(single ? values[0] : values, set);
            if (auto) {
                set(result);
            }
            else {
                cleanup = is_function(result) ? result : noop$1;
            }
        };
        const unsubscribers = stores_array.map((store, i) => subscribe(store, (value) => {
            values[i] = value;
            pending &= ~(1 << i);
            if (inited) {
                sync();
            }
        }, () => {
            pending |= (1 << i);
        }));
        inited = true;
        sync();
        return function stop() {
            run_all(unsubscribers);
            cleanup();
        };
    });
}

var __read = (undefined && undefined.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
var __values = (undefined && undefined.__values) || function(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
};
/**
 * Represents the Regular Expression to match patterns in route patterns, e.g. `/my/route/:parameter/:names`
 *
 * @internal
 */
var ROUTE_PARAMETER_EXPRESSION = /:[^\s/]+/g;
/**
 * Returns a pathname matching function, that returns the named parameters in
 * the given pathname if the route matched
 *
 * @internal
 *
 * @param route
 */
function compile_route(route) {
    // source: https://stackoverflow.com/a/40739605
    route = normalize_pathname(route);
    var parameters = [];
    var expression = new RegExp("^" + route.replace(ROUTE_PARAMETER_EXPRESSION, "([\\w-]+)") + "$");
    // We need to collect the parameters name from the route pattern in order,
    // so the matching function return the parsed pathnames as named keys
    var match;
    while ((match = ROUTE_PARAMETER_EXPRESSION.exec(route))) {
        parameters.push(match[0].slice(1));
    }
    return function (pathname) {
        pathname = normalize_pathname(pathname);
        var match = expression.exec(pathname);
        if (match) {
            var _parameters = {};
            for (var index in parameters) {
                // `RegExp.exec` returns the matched value as index `0`,
                // so we need to increment by `1`
                _parameters[parameters[index]] = match[parseInt(index) + 1];
            }
            return _parameters;
        }
        return null;
    };
}
/**
 * Returns the sorting for route patterns, sorting longer (more specific) patterns
 * higher than shorter (less specific) patterns
 *
 * @internal
 *
 * @param a
 * @param b
 */
function sort_routes(a, b) {
    return b[0].length - a[0].length;
}
/**
 * Returns a `URL` instance stringified via `.pathname` + `.search` + `.hash`
 *
 * > **NOTE**: Set `include_hash` to `false`, to disable including `.hash` as a postfix
 *
 * ```javascript
 * import {format_url} from "svelte-commons/lib/util/shared";
 *
 * const url = new URL("https://my.domain/path/to/application?x=2#header-id");
 *
 * // Here, we're formating it with all three URL components
 * const format_hash = format_url(url);
 * console.log(format_hash); // logs: `/path/to/application?x=2#header-id`
 *
 * // Optionally though. you can disable including the `.hash` component
 * const format_no_hash = format_url(url, false);
 * console.log(format_no_hash); // logs: `/path/to/application?x=2`
 * ```
 *
 * @param url
 * @param include_hash
 */
function format_url(url, include_hash) {
    if (include_hash === void 0) { include_hash = true; }
    var hash = url.hash, pathname = url.pathname, search = url.search;
    if (include_hash)
        return pathname + search + hash;
    return pathname + search;
}
/**
 * Returns if the `href` is an internal webpage link, e.g. `/path/to/page` or `this/is/a/path`
 *
 * > **RULES**:
 * > - URLs with a protocol, e.g. `https://my.domain/index.html`, are considered external
 * > - URLs that are protocol independent, e.g. `//cdn-provider.com/some_stylesheet.css` are considered external
 *
 * ```javascript
 * import {is_internal_href} from "svelte-commons/lib/util/shared";
 *
 * const href = "/path/to/application?x=1";
 * const url = "https://google.com";
 *
 * console.log(is_internal_href(href)); // logs: `true`
 * console.log(is_internal_href(url)); // logs: `false`
 * ```
 *
 * @param href
 */
function is_internal_href(href) {
    return !href.match(/^\w+:\/\//) && !href.startsWith("//");
}
/**
 * Returns the `a` and `b` URLs joined together naively
 *
 * > **RULES**:
 * > - Protocols, domains, ports are ignored for both URLs
 * > - Hash string, and query parameters are ignored for `a` URL
 * > - `b` URL's hash string and query parameters will be in the resulting URL
 * > - The resulting URL pathname are normalized after being joined
 *
 * ```javascript
 * import {join} from "svelte-commons/lib/util/shared";
 *
 * // We're going to join `a` and `b` together, however the protocol and domain will be
 * // dropped from `a`, along with the query parameters
 * const a = "https://my.domain/path/to/application?x=1";
 * const b = "/sub-page?x=2";
 *
 * const joined = join(a, b);
 *
 * console.log(joined); // logs: `/path/to/application/sub-page?x=2`
 * ```
 *
 * @param a
 * @param b
 */
function join(a, b) {
    var a_pathname = new URL(a, "http://localhost").pathname;
    var _a = new URL(b, "http://localhost"), hash = _a.hash, search = _a.search, b_pathname = _a.pathname;
    return normalize_pathname(a_pathname + "/" + b_pathname) + search + hash;
}
/**
 * Returns the normalized version of the `pathname` parameter
 *
 * > **RULES**:
 * > - Backward slashes `\` are converted to forward slashes `/`
 * > - Consecutive forward slashes `/` are reduced to a single slash
 * > - Forward slashes `/` are trimmed from the beginning and end of the string
 * > - Up directory directives `../` are evaluated, removing it and the parent directory if exists
 * >     - **NOTE**: Parent directories are currently matched to alphanumeric chatacters, periods, spaces, tildes, underscores and dashes
 * >     - **REGEX**: [\w_\.\-\s~]+
 *
 * ```javascript
 * import {normalize_pathname} from "svelte-commons/lib/util/shared";
 *
 * // Below we have a pathname with Windows separators `\`, consecutive separators `//`, and up directory directives `../`
 * const malformed_pathname = "\\path/to//application/src/../assets"; // NOTE: `\\` renders as `\`, since `\` normally escapes in strings
 *
 * const normalized = normalize_pathname(malformed_pathname);
 *
 * console.log(normalized); // logs: `/path/to/application/assets`
 * ```
 *
 * @param pathname
 */
function normalize_pathname(pathname) {
    return pathname
        .replace(/\\+/g, "/")
        .replace(/[\/\/]+/g, "/")
        .replace(/([\w_\.\-\s~]+\/)?(\.\.\/)/g, "")
        .replace(/^\/+/, "")
        .replace(/\/+$/, "");
}
/**
 * Returns a query string parsed into a key-value mapping
 *
 * ```javascript
 * import {parse_query} from "svelte-commons/lib/util/shared";
 *
 * const query_string = "?sorting=ASCENDING&remove-inactive";
 *
 * const mapping = parse_query(query_string);
 *
 * console.log(mapping); logs: `{"sorting": "ASCENDING", "remove-inactive": true}`
 * ```
 *
 * @param query
 */
function parse_query(query) {
    if (typeof query === "string")
        query = new URLSearchParams(query);
    else if (query instanceof URL)
        query = query.searchParams;
    var entries = Array.from(query.entries(), function (_a) {
        var _b = __read(_a, 2), key = _b[0], value = _b[1];
        // Since boolean query parameters, e.g. `?x=` / `?x`, have no value, we need to them to `true`
        if (value)
            return [key, value];
        return [key, true];
    });
    // NOTE: Just to increase supported Browsers, e.g. pre-Chromium Microsoft Edge, using a `.reduce` instead of `Object.fromEntries`
    return entries.reduce(function (accum, _a) {
        var _b = __read(_a, 2), key = _b[0], value = _b[1];
        accum[key] = value;
        return accum;
    }, {});
}
/**
 * Returns a function that matches parameterized routes, returning the assigned values and parsed parameters
 *
 * ```javascript
 * import {make_router} from "svelte-commons/lib/util/shared";
 *
 * import ComponentOne from "...";
 * import ComponentTwo from "...";
 *
 * // Below, we're defining our route mappings, along with their assigned Svelte Components
 * const routes = {
 *     "/": ComponentOne,
 *     "/items/:id": ComponentTwo
 * };
 *
 * // Now we feed our mappings into the factory function, which gives us a matcher function
 * const router = make_router(routes);
 *
 * // First, let's try matching our first route
 * console.log(router("/")); // logs: `[{}, ComponentOne]`
 *
 * // Next, let's try matching our second route
 * console.log(router("/items/blue-jeans")); // logs: `[{id: "blue-jeans"}, ComponentTwo]`
 *
 * // Finally, we can see that if we pass an invalid route, `null` is returned. Which should
 * // be treated the same as a "404"
 * console.log(router("/some/invalid/route")); // logs: `null`
 * ```
 *
 * @param routes
 * @param base
 */
function make_router(routes, base) {
    if (base === void 0) { base = ""; }
    // source: https://stackoverflow.com/a/40739605
    var route_entries = Object.entries(routes);
    route_entries = route_entries.sort(sort_routes);
    var compiled_routes = route_entries.map(function (_a) {
        var _b = __read(_a, 2), route = _b[0], Component = _b[1];
        // Add support for end-developers passing a base URL, e.g. `https://my.domain/path/to/application`
        if (base)
            route = join(base, route);
        var match = compile_route(route);
        return [route, match, Component];
    });
    return function (pathname) {
        var e_1, _a;
        try {
            for (var compiled_routes_1 = __values(compiled_routes), compiled_routes_1_1 = compiled_routes_1.next(); !compiled_routes_1_1.done; compiled_routes_1_1 = compiled_routes_1.next()) {
                var _b = __read(compiled_routes_1_1.value, 3), route = _b[0], match = _b[1], Component = _b[2];
                var parameters = match(pathname);
                if (parameters)
                    return [parameters, Component];
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (compiled_routes_1_1 && !compiled_routes_1_1.done && (_a = compiled_routes_1.return)) _a.call(compiled_routes_1);
            }
            finally { if (e_1) throw e_1.error; }
        }
        return null;
    };
}

/**
 * Returns the options passable into [[goto]], with standard defaults
 *
 * @internal
 *
 * @param options
 */
function GotoOptions(options) {
    if (options === void 0) { options = {}; }
    var _a = options.base_url, base_url = _a === void 0 ? "" : _a, _b = options.hash, hash = _b === void 0 ? false : _b, _c = options.replace, replace = _c === void 0 ? false : _c;
    return { base_url: base_url, hash: hash, replace: replace };
}
/**
 * Return a new `URL` instance, based off the current Browser `Location`
 *
 * > **NOTE**: Set `hash` to `true`, to parse the current `Location.hash` as the URL
 *
 * @internal
 *
 * @param hash
 */
function get_location_url(hash) {
    if (hash === void 0) { hash = false; }
    if (hash) {
        var href = location.hash.slice(1);
        return new URL(href, location.origin);
    }
    return new URL(location);
}
/**
 * Updates the current Browser `Location` with a given `URL` instance, using its `.hash`, `.pathname`, and `.search` components
 *
 * > **NOTE**: Set `hash` to `true`, to set `Location.hash` as the URL
 *
 * @internal
 *
 * @param url
 * @param hash
 * @param replace
 */
function update_location_url(url, hash, replace) {
    if (hash === void 0) { hash = false; }
    if (replace === void 0) { replace = false; }
    var href;
    if (hash)
        href = format_url(location, false) + "#" + format_url(url);
    else
        href = format_url(url);
    if (replace)
        history.replaceState(null, "", href);
    else
        history.pushState(null, "", href);
    // We need to trigger the `popstate` event, so any listener can update, e.g. `router` Store.
    var state = history.state;
    var event = new PopStateEvent("popstate", { state: state });
    window.dispatchEvent(event);
}
/**
 * Progammatically navigates the Browser to the given `href`, and pushes a new History state
 *
 * > **NOTE**: If your `<head>` element contains a [`<base>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/base) element, [[goto]] will read it as the base url
 *
 * As a simple example:
 *
 * ```javascript
 * import {goto} from "svelte-commons/lib/util/browser";
 *
 * // Navigate to a page decending from the current origin
 * goto("/shopping-cart/item-274");
 *
 * // Similar to above, by updates the Browser's hash string instead
 * goto("/shopping-cart/item-274", {hash: true});
 * ```
 *
 * You can also replace the current History state:
 *
 * ```javascript
 * import {goto} from "svelte-commons/lib/util/browser";
 *
 * // Same above, but replacing current History state
 * goto("/shopping-cart/item-274", {replace: true});
 * ```
 *
 * Finally, you can navigate to entirely different websites:
 *
 * ```javascript
 * import {goto} from "svelte-commons/lib/util/browser";
 *
 * // This will cause a full page reload while navigating
 * goto("https://google.com");
 * ```
 * @param href
 * @param options
 */
function goto(href, options) {
    if (!is_internal_href(href)) {
        var url_1 = new URL(href);
        // If the `href` doesn't have a matching origin, we can just do a full page navigation
        // to it, otherwise we just need to extract the exact everything after the origin
        if (url_1.origin !== location.origin)
            location.href = href;
        else
            href = format_url(url_1);
    }
    var _a = GotoOptions(options), base_url = _a.base_url, hash = _a.hash, replace = _a.replace;
    // We need to have the Browser process the URL, so properly URL directives are followed
    // e.g. `/absolute/path`, `./relative/path`, `../directory/up/path`, etc...
    var url = new URL(href, get_location_url(hash).href);
    // We need to support passable base urls overrides here
    if (base_url)
        url.pathname = join(base_url, url.pathname);
    else if (!hash) {
        // We can also support non-hash mode base urls via `<base href="XXX" />` in `<head>`
        if (location.href !== document.baseURI) {
            var pathname = new URL(document.baseURI).pathname;
            url.pathname = join(pathname, url.pathname);
        }
    }
    update_location_url(url, hash, replace);
}

var __assign = (undefined && undefined.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
/**
 * Returns a new `Writable` Svelte Store that has it's I/O overlaid with the `read` function for `.subscribe` / `.update` and `.write` function for `.set` / `.update`
 *
 * ```javascript
 * import {writable} from "svelte/store";
 *
 * import {overlay} from "svelte-commons/lib/stores/shared/overlay";
 *
 * // For the base Store, it's going to maintain the JSON-encoded view of data
 * // passed in. So we need to default it to an empty string
 * const raw_store = writable("");
 *
 * // Here, we're creating a `Writable` "overlay" Store, which will encode all
 * // inputs to JSON before writing to the base Store. And then parse all values
 * // from the base Store as JSON, for subscriptions and updater functions
 * const store = overlay(
 *     raw_store,
 *     (value) => JSON.parse(value),
 *     (value) => JSON.stringify(value)
 * );
 *
 * raw_store.subscribe(console.log); // logs: ``
 *
 * // As you can see when `.set` is ran, our base Store's logger
 * // shows the JSON-encoded data
 * store.set({hello: "world"}); // logs: `{"hello":"world"}`
 * ```
 *
 * @param store
 * @param read
 * @param write
 */
function overlay(store, read, write) {
    var set = store.set, subscribe = store.subscribe, update = store.update;
    return __assign(__assign({}, store), { set: function (value) {
            value = write(value);
            set(value);
        },
        subscribe: function (run, invalidate) {
            var _run = function (value) {
                value = read(value);
                run(value);
            };
            return subscribe(_run, invalidate);
        },
        update: function (updater) {
            update(function (value) {
                value = read(value);
                value = updater(value);
                return write(value);
            });
        } });
}

/**
 * Returns the options passable into the [[hash]], [[pathname]], or [[search]] Svelte Stores, with standard defaults
 *
 * @internal
 *
 * @param options
 */
function LocationOptions(options) {
    if (options === void 0) { options = {}; }
    var _a = options.hash, hash = _a === void 0 ? false : _a, _b = options.readonly, readonly = _b === void 0 ? false : _b, _c = options.replace, replace = _c === void 0 ? false : _c;
    return { hash: hash, readonly: readonly, replace: replace };
}
/**
 * Returns a factory function, for binding a [`Location`](https://developer.mozilla.org/en-US/docs/Web/API/Location) component into a `Writable` Svelte Store
 *
 * @internal
 *
 * @param component
 */
function make_location_store(component) {
    return function (options) {
        var _a = LocationOptions(options), hash = _a.hash, readonly = _a.readonly, replace = _a.replace;
        function get_value() {
            var url = get_location_url(hash);
            return url[component];
        }
        function on_start(set) {
            function on_popstate(event) {
                set(get_value());
            }
            set(get_value());
            window.addEventListener("popstate", on_popstate);
            return function () {
                window.removeEventListener("popstate", on_popstate);
            };
        }
        if (readonly)
            return readable(get_value(), on_start);
        function set_value(value) {
            var url = get_location_url(hash);
            url[component] = value;
            update_location_url(url, hash, replace);
        }
        var store = writable(get_value(), on_start);
        return overlay(store, function (value) { return value; }, function (value) {
            set_value(value);
            return value;
        });
    };
}
/**
 * Returns a `Writable` Svelte Store, which binds to the [`Location.hash`](https://developer.mozilla.org/en-US/docs/Web/API/Location/hash) component
 *
 * In normal mode, which parses the current Browser URL normally:
 *
 * ```html
 * <script>
 *     import {hash} from "svelte-commons/lib/stores/browser";
 *
 *     const store = hash();
 * </script>
 *
 * <!-- e.g. Browser URL of `https://my.domain/path/to/application#I-am-a-hash` is `#I-am-a-hash` -->
 * Current hash string is: <span style="color:red;">{$store}</span>!
 * ```
 *
 * In hash mode, which parses current Browser URL's hash string **AS** the URL:
 *
 * ```html
 * <script>
 *     import {hash} from "svelte-commons/lib/stores/browser";
 *
 *     const store = hash({hash: true});
 * </script>
 *
 * <!-- e.g. Browser URL of `https://my.domain/#/path/to/application#I-am-a-hash` is `#I-am-a-hash` -->
 * Current hash string is: <span style="color:red;">{$store}</span>!
 * ```
 *
 * You can also update the Store to change the hash, along with making it replace current History entry:
 *
 * ```html
 * <script>
 *     import {hash} from "svelte-commons/lib/stores/browser";
 *
 *     // By passing `ILocationOptions.replace`, changes wont create new History
 *     // entries, e.g. more entries for Back / Forward Button
 *     const store = hash({replace: true});
 * </script>
 *
 * <!-- e.g. Browser URL of `https://my.domain/path/to/application` will update to `https://my.domain/path/to/application#I-am-a-hash` -->
 * <a on:click|preventDefault={() => $store = "#I-am-a-hash"}>Click me</a> to change the hash string!
 * ```
 *
 * @param options
 */
var hash = make_location_store("hash");
/**
 * Returns a `Writable` Svelte Store, which binds to the [`Location.pathname`](https://developer.mozilla.org/en-US/docs/Web/API/Location/pathname) component
 *
 * In normal mode, which parses the current Browser URL normally:
 *
 * ```html
 * <script>
 *     import {pathname} from "svelte-commons/lib/stores/browser";
 *
 *     const store = pathname();
 * </script>
 *
 * <!-- e.g. Browser URL of `https://my.domain/path/to/application` is `/path/to/application` -->
 * Current pathname is: <span style="color:red;">{$store}</span>!
 * ```
 *
 * In hash mode, which parses current Browser URL's hash string **AS** the URL:
 *
 * ```html
 * <script>
 *     import {pathname} from "svelte-commons/lib/stores/browser";
 *
 *     const store = pathname({hash: true});
 * </script>
 *
 * <!-- e.g. Browser URL of `https://my.domain/#/path/to/application` is `/path/to/application` -->
 * Current pathname is: <span style="color:red;">{$store}</span>!
 * ```
 *
 * You can also update the Store to change the pathname, along with making it replace current History entry:
 *
 * ```html
 * <script>
 *     import {pathname} from "svelte-commons/lib/stores/browser";
 *
 *     // By passing `ILocationOptions.replace`, changes wont create new History
 *     // entries, e.g. more entries for Back / Forward Button
 *     const store = pathname({replace: true});
 * </script>
 *
 * <!-- e.g. Browser URL of `https://my.domain/path/to/application` will update to `https://my.domain/path/to/other-application` -->
 * <a on:click|preventDefault={() => $store = "/path/to/other-application"}>Click me</a> to change the pathname!
 * ```
 *
 * @param options
 */
var pathname = make_location_store("pathname");
/**
 * Returns a `Writable` Svelte Store, which binds to the [`Location.search`](https://developer.mozilla.org/en-US/docs/Web/API/Location/search) component
 *
 * In normal mode, which parses the current Browser URL normally:
 *
 * ```html
 * <script>
 *     import {search} from "svelte-commons/lib/stores/browser";
 *
 *     const store = search();
 * </script>
 *
 * <!-- e.g. Browser URL of `https://my.domain/path/to/application?x=1` is `?x=1` -->
 * Current query string is: <span style="color:red;">{$store}</span>!
 * ```
 *
 * In hash mode, which parses current Browser URL's hash string **AS** the URL:
 *
 * ```html
 * <script>
 *     import {search} from "svelte-commons/lib/stores/browser";
 *
 *     const store = search({hash: true});
 * </script>
 *
 * <!-- e.g. Browser URL of `https://my.domain/#/path/to/application?x=1` is `?x=1` -->
 * Current query string is: <span style="color:red;">{$store}</span>!
 * ```
 *
 * You can also update the Store to change the query string, along with making it replace current History entry:
 *
 * ```html
 * <script>
 *     import {search} from "svelte-commons/lib/stores/browser";
 *
 *     // By passing `ILocationOptions.replace`, changes wont create new History
 *     // entries, e.g. more entries for Back / Forward Button
 *     const store = search({replace: true});
 * </script>
 *
 * <!-- e.g. Browser URL of `https://my.domain/path/to/application` will update to `https://my.domain/path/to/application?x=1` -->
 * <a on:click|preventDefault={() => $store = "?x=1"}>Click me</a> to change the query string!
 * ```
 *
 * @param options
 */
var search = make_location_store("search");

/**
 * Returns the options passable into the [[query_param]] Svelte Store, with standard defaults
 *
 * @internal
 *
 * @param options
 */
function QueryParamOptions(options) {
    if (options === void 0) { options = {}; }
    var _a = options.hash, hash = _a === void 0 ? false : _a, _b = options.replace, replace = _b === void 0 ? false : _b;
    return { hash: hash, replace: replace };
}
/**
 * Returns a `Writable` Svelte Store, which binds to a specific query string parameter
 *
 * ```javascript
 * <script context="module">
 *     const SORTING_MODES = {
 *         ascending: "ASCENDING",
 *         decending: "DECENDING"
 *     };
 * </script>
 *
 * <script>
 *     import {query_param} from "svelte-commons/lib/stores/browser";
 *
 *     // By providing `SORTING_MODES.ascending` as the default, that means whenever `?sorting=` is missing,
 *     // then the Store will output `ASCENDING`
 *     const store = query_param("sorting", SORTING_MODES.ascending);
 *
 *     const movie_titles = ["Golden Eye", "Blade Runner", "Star Wars: Episode I - The Phantom Menace"];
 *
 *     let sorted;
 *     $: {
 *         sorted = [...movie_titles];
 *         sorted.sort();
 *
 *         if ($store === SORTING_MODES.decending) sorted.reverse();
 *     }
 * </script>
 *
 * <!-- Below will erase `?sorting=` from the URL, since `SORTING_MODES.ascending` is our default -->
 * Change to: <a on:click|preventDefault={() => $store = SORTING_MODES.ascending}>ASCENDING</a><br />
 *
 * <!-- Below will add `?sorting=DECENDING` to the URL -->
 * Change to: <a on:click|preventDefault={() => $store = SORTING_MODES.decending}>DECENDING</a><br />
 *
 * <h2>Movie Titles:</h2>
 *
 * <ul>
 *     {#each sorted as title}
 *         <li>{title}</li>
 *     {/each}
 * </ul>
 * ```
 *
 * @param key
 * @param default_value
 * @param options
 */
function query_param(key, default_value, options) {
    if (options === void 0) { options = {}; }
    var _a = QueryParamOptions(options), hash = _a.hash, replace = _a.replace;
    var store = search({ hash: hash, replace: replace });
    return overlay(store, 
    // @ts-ignore
    function (value) {
        var params = new URLSearchParams(value);
        // If the end-developer specified that the query parameter was a boolean, only the existance of the key should be returned
        if (typeof default_value === "boolean")
            return params.has(key);
        // If the query parameter is a string, and it is not set, return the default
        if (params.has(key))
            return params.get(key);
        return default_value;
    }, function (value) {
        var url = get_location_url(hash);
        var params = url.searchParams;
        if (typeof default_value === "boolean") {
            // If the end-developer specified that the query parameter was a boolean, then we need to set if truthy
            if (value)
                params.set(key, "");
            else
                params.delete(key);
        }
        else {
            // If the query parameter is a string, then we set it, if the string is not empty or doesn't equal default
            if (!value || value === default_value)
                params.delete(key);
            else
                params.set(key, value);
        }
        // HACK: When boolean query parameters are set via `URLSearchParams.set`, they render as `?my_key=`, but we expect
        // rendering as `?my_key`. So we need to fix that
        return params
            .toString()
            .replace(/=&/g, "&")
            .replace(/=$/g, "");
    });
}

var __assign$1 = (undefined && undefined.__assign) || function () {
    __assign$1 = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign$1.apply(this, arguments);
};
/**
 * Returns the standardized defaults for options passed into `storage` Store
 *
 * @internal
 *
 * @param options
 */
function StorageOptions(options) {
    if (options === void 0) { options = {}; }
    return __assign$1({ event: undefined, event_source: undefined, prefix: "svelte-commons." }, options);
}
/**
 * Returns a `Readable` (Server) / `Writable` (Browser) Svelte Store with a reactive binding to a given `Storage` adapter
 *
 * > **NOTE**: Only **JSON-compatible** values are supported
 *
 * As a semi-complete example:
 *
 * ```javascript
 * import {get} from "svelte/store";
 *
 * import {storage} from "svelte-commons/lib/stores/browser";
 *
 * // Below, creating a factory function wrapper around the `localStorage` Web Storage API
 * const local_storage = storage(window.localStorage, {
 *     // Both `event` and `event_source` tells the Store what event string to
 *     // listen to and what `EventTarget` to listen from for tab-sync
 *     event: "storage",
 *     event_source: window,
 *
 *     // `.prefix` tells the Store to prefix all storage keys with a specific string (defaults to `svelte-commons.`)
 *     prefix: "my_key_prefix."
 * });
 *
 * // Now we can use our new `local_storage` factory to make a reactive Store binding
 * // to a specific `localStorage` key.
 * const store = local_storage("my_string_key", "I am default");
 *
 * // Using `get`, we can see the Store is already at its default
 * console.log(get(store)); // logs: `I am default`
 *
 * // Since there is nothing set yet, the actual localStorage key is empty
 * console.log(window.localStorage.getItem("my_key_prefix.my_string_key")) // logs: `null`
 *
 * // After setting a value, both the Store and `localStorage` have the same value
 * store.set("But, this is not default");
 * console.log(
 *     get(store),
 *     window.localStorage.getItem("my_key_prefix.my_string_key")
 * ); // logs: `But, this is not default`, `"But, this is not default"`
 *
 * // By setting the Store to the default value OR `undefined`, the
 * // `localStorage` item is removed
 * store.set("I am default");
 *
 * console.log(
 *     get(store),
 *     window.localStorage.getItem("my_key_prefix.my_string_key")
 * ); // logs: `I am default`, `null`
 * ```
 *
 * @param adapter
 * @param options
 */
function storage(adapter, options) {
    if (options === void 0) { options = {}; }
    var _a = StorageOptions(options), event = _a.event, event_source = _a.event_source, prefix = _a.prefix;
    return function (key, default_value) {
        if (prefix)
            key = prefix + key;
        var stored_value = adapter.getItem(key);
        var parsed_value = stored_value ? JSON.parse(stored_value) : default_value;
        var store = writable(parsed_value, function (set) {
            var _a;
            function on_change(event) {
                 StorageEvent = event.detail ? event.detail : event;
                if (event.storageArea !== adapter || event.key !== key)
                    return;
                if (event.newValue)
                    set(JSON.parse(event.newValue));
                else
                    set(default_value);
            }
            if (event) {
                (_a = event_source) === null || _a === void 0 ? void 0 : _a.addEventListener(event, on_change);
                return function () { var _a; return (_a = event_source) === null || _a === void 0 ? void 0 : _a.removeEventListener(event, on_change); };
            }
        });
        return overlay(store, function (value) { return value; }, function (value) {
            if (typeof value === "undefined")
                value = default_value;
            if (value === default_value)
                adapter.removeItem(key);
            else
                adapter.setItem(key, JSON.stringify(value));
            return value;
        });
    };
}

/**
 * Represents the current global object, Window (Browser) / Global (Server)
 */
var global$1 = typeof window !== "undefined" ? window : undefined;
/**
 * Returns a `storage` Svelte Store with a reactive binding to `window.localStorage`
 *
 * NOTE: Only **JSON-compatible** values are supported
 *
 * As a minimal example:
 *
 * ```javascript
 * import {local_storage} from "svelte-commons/lib/stores/browser";
 *
 * const store = local_storage("my_string_key", "some default string");
 *
 * store.subscribe((value) => {
 *     console.log(value);
 * }); // Will log any changes to the Store
 *
 * store.set("a non-default string"); // logs: `a non-default string`
 *
 * console.log(
 *     window.localStorage.getItem("svelte-commons.my_string_key")
 * ); // logs: `"a non-default string"`
 * ```
 */
var local_storage = global$1.localStorage
    ? storage(global$1.localStorage, {
        event: "storage",
        event_source: global$1
    })
    : null;
/**
 * Returns a `storage` Svelte Store with a reactive binding to `window.sessionStorage`
 *
 * NOTE: Only **JSON-compatible** values are supported
 *
 * As a minimal example:
 *
 * ```javascript
 * import {session_storage} from "svelte-commons/lib/stores/browser";
 *
 * const store = session_storage("my_string_key", "some default string");
 *
 * store.subscribe((value) => {
 *     console.log(value);
 * }); // Will log any changes to the Store
 *
 * store.set("a non-default string"); // logs: `a non-default string`
 *
 * console.log(
 *     window.sessionStorage.getItem("svelte-commons.my_string_key")
 * ); // logs: `"a non-default string"`
 * ```
 */
var session_storage = global$1.sessionStorage
    ? storage(global$1.sessionStorage, {
        event: "storage",
        event_source: global$1
    })
    : null;

var __assign$2 = (undefined && undefined.__assign) || function () {
    __assign$2 = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign$2.apply(this, arguments);
};
var __read$1 = (undefined && undefined.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
var __spread = (undefined && undefined.__spread) || function () {
    for (var ar = [], i = 0; i < arguments.length; i++) ar = ar.concat(__read$1(arguments[i]));
    return ar;
};
var __values$1 = (undefined && undefined.__values) || function(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
};
/**
 * Represents a sorting comparator for sorting between the keys in a `Object.entries` Array output
 *
 * @internal
 *
 * @param entry_a
 * @param entry_b
 */
function comparator_entries(_a, _b) {
    var _c = __read$1(_a, 1), key_a = _c[0];
    var _d = __read$1(_b, 1), key_b = _d[0];
    key_a = key_a.toLowerCase();
    key_b = key_b.toLowerCase();
    if (key_a >= key_b)
        return 1;
    else if (key_b >= key_a)
        return -1;
    return 0;
}
/**
 * Returns the number of non-identity `!==` hits between the key-values of each object
 *
 * @internal
 *
 * @param object_a
 * @param object_b
 */
function diff_count(object_a, object_b) {
    var e_1, _a;
    var updates = 0;
    var keys = new Set(__spread(Object.keys(object_a), Object.keys(object_b)));
    try {
        for (var keys_1 = __values$1(keys), keys_1_1 = keys_1.next(); !keys_1_1.done; keys_1_1 = keys_1.next()) {
            var key = keys_1_1.value;
            if (object_a[key] !== object_b[key])
                updates += 1;
        }
    }
    catch (e_1_1) { e_1 = { error: e_1_1 }; }
    finally {
        try {
            if (keys_1_1 && !keys_1_1.done && (_a = keys_1.return)) _a.call(keys_1);
        }
        finally { if (e_1) throw e_1.error; }
    }
    return updates;
}
/**
 * Returns the filtered `array` element, that naively matches the `predicate`
 *
 * @internal
 *
 * @param array
 * @param predicate
 */
function filter_collection(array, predicate) {
    if (typeof predicate === "function") {
        return array.filter(function (item, index) {
            return predicate(item, index);
        });
    }
    else if (typeof predicate === "number") {
        return array.filter(function (item, index) {
            return index === predicate;
        });
    }
    else if (predicate !== null && typeof predicate !== "undefined") {
        return array.filter(function (item, index) {
            return match_predicate(item, predicate);
        });
    }
    // If the `predicate` did not match any of our accepted
    // types, just default to noop
    return array;
}
/**
 * Returns the first `array` element that, naively matches the `predicate`
 *
 * @internal
 *
 * @param array
 * @param predicate
 */
function find_collection(array, predicate) {
    if (typeof predicate === "function") {
        return array.find(function (item, index) {
            return predicate(item, index);
        });
    }
    else if (typeof predicate === "number") {
        return array[predicate];
    }
    else if (predicate !== null && typeof predicate !== "undefined") {
        return array.find(function (item) { return match_predicate(item, predicate); });
    }
    return array[0];
}
/**
 * Returns true if the passed in `value` is `undefined`, `null`, `""`, or `false`
 *
 * @internal
 *
 * @param value
 */
function is_falsy(value) {
    return typeof value === "undefined" || value === false || value === null || value === "";
}
/**
 * Returns the a new Array of elements from `array`, with using `mapper` to remap each element
 *
 * @internal
 *
 * @param {*} array
 * @param {*} mapper
 */
function map_collection(array, mapper) {
    if (typeof mapper === "function") {
        return array.map(function (item, index) {
            return mapper(item, index);
        });
    }
    return array.map(function (item) {
        return __assign$2(__assign$2({}, item), mapper);
    });
}
/**
 * Returns true if the key-values in `predicate` match that of `item`
 *
 * @internal
 *
 * @param item
 * @param predicate
 */
function match_predicate(item, predicate) {
    for (var key in predicate) {
        if (item[key] !== predicate[key])
            return false;
    }
    return true;
}
/**
 * Returns nothing and takes no arguments, used for dummy function placeholders
 */
function noop() { }
/**
 * Returns the filtered `array` element, that naively DOES NOT match the `predicate`
 *
 * @internal
 *
 * @param array
 * @param predicate
 */
function reject_collection(array, predicate) {
    if (typeof predicate === "function") {
        return array.filter(function (item, index) {
            return !predicate(item, index);
        });
    }
    else if (typeof predicate === "number") {
        return array.filter(function (item, index) {
            return index !== predicate;
        });
    }
    else if (predicate !== null && typeof predicate !== "undefined") {
        return array.filter(function (item, index) {
            return !match_predicate(item, predicate);
        });
    }
    // If the `predicate` did not match any of our accepted
    // types, just default to noop
    return array;
}
/**
 * Returns the updated `item`, with using `updater` to remap the any values
 *
 * @internal
 *
 * @param {*} item
 * @param {*} updater
 */
function update_object(item, updater) {
    var _item;
    if (typeof updater === "object") {
        _item = __assign$2(__assign$2({}, item), updater);
    }
    else {
        _item = __assign$2(__assign$2({}, item), updater(item));
    }
    var updates = diff_count(item, _item);
    return [updates, _item];
}

var __assign$3 = (undefined && undefined.__assign) || function () {
    __assign$3 = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign$3.apply(this, arguments);
};
var __read$2 = (undefined && undefined.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
/**
 * Returns a `Writable` Svelte Store that implements [[ICollectionStore]] for interacting with an `Array` of `Object`s
 * @param store
 * @param start
 */
function collection(store, start) {
    if (store === void 0) { store = []; }
    // Need to support end-developers passing in both initial arrays and stores
    if (Array.isArray(store))
        store = writable(store, start);
    var update = store.update, set = store.set, subscribe = store.subscribe;
    var filter = function (predicate, mutate) {
        if (mutate === void 0) { mutate = false; }
        var array = get_store_value(store);
        array = filter_collection(array, predicate);
        if (mutate)
            set(array);
        return array;
    };
    var find = function (predicate) {
        var array = get_store_value(store);
        var item = find_collection(array, predicate);
        return item;
    };
    var _get = function () { return get_store_value(store); };
    var map = function (mapper, mutate) {
        if (mutate === void 0) { mutate = false; }
        var array = get_store_value(store);
        array = map_collection(array, mapper);
        if (mutate)
            set(array);
        return array;
    };
    var push = function (item) {
        var array = get_store_value(store);
        var index = array.push(item);
        set(array);
        return index;
    };
    var reject = function (predicate, mutate) {
        if (mutate === void 0) { mutate = false; }
        var array = get_store_value(store);
        array = reject_collection(array, predicate);
        if (mutate)
            set(array);
        return array;
    };
    var remove = function (index) {
        var array = get_store_value(store);
        if (typeof array[index] === "undefined") {
            throw new ReferenceError("bad dispatch to 'collection.remove_item' (no item at index '" + index + "')");
        }
        var _a = __read$2(array.splice(index, 1), 1), item = _a[0];
        set(array);
        return __assign$3({}, item);
    };
    var set_item = function (predicate, updater) {
        var array = get_store_value(store);
        var item = find_collection(array, predicate);
        if (!item) {
            throw new ReferenceError("bad dispatch to 'collection.set_item' (no items match predicate)");
        }
        // If there were no updates performed on the target
        // item, then we can skip and return the copy
        var _a = __read$2(update_object(item, updater), 2), updates = _a[0], _item = _a[1];
        if (updates < 1)
            return _item;
        var index = 0;
        for (var _index in array) {
            if (array[_index] === item) {
                index = parseInt(_index);
                break;
            }
        }
        array[index] = _item;
        set(array);
        return __assign$3({}, _item);
    };
    return {
        update: update,
        set: set,
        subscribe: subscribe,
        filter: filter,
        find: find,
        map: map,
        push: push,
        reject: reject,
        remove: remove,
        set_item: set_item,
        get: _get
    };
}

/**
 * Returns if the `value` matches a `Readable` Svelte Store implementation
 *
 * As a minimal example:
 *
 * ```javascript
 * import {readable, writable} from "svelte/store";
 *
 * import {is_readable} from "svelte-commons/lib/util/shared";
 *
 * const readable_store = readable("some value");
 * const writable_store = writable("some value");
 *
 * console.log(
 *     is_readable(readable_store),
 *     is_readable(writable_store)
 * ); // logs: `true`, `true`
 * ```
 */
function is_readable(value) {
    // @ts-ignore
    return typeof value === "object" && typeof value.subscribe === "function";
}
/**
 * Returns if the `value` matches a `Writable` Svelte Store implementation
 *
 * As a minimal example:
 *
 * ```javascript
 * import {readable, writable} from "svelte/store";
 *
 * import {is_writable} from "svelte-commons/lib/util/shared";
 *
 * const readable_store = readable("some value");
 * const writable_store = writable("some value");
 *
 * console.log(
 *     is_writable(readable_store),
 *     is_writable(writable_store)
 * ); // logs: `false`, `true`
 * ```
 *
 * @param value
 */
function is_writable(value) {
    return (
    // @ts-ignore
    typeof value === "object" &&
        // @ts-ignore
        typeof value.set === "function" &&
        // @ts-ignore
        typeof value.subscribe === "function" &&
        // @ts-ignore
        typeof value.update === "function");
}

var __assign$4 = (undefined && undefined.__assign) || function () {
    __assign$4 = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign$4.apply(this, arguments);
};
var __read$3 = (undefined && undefined.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
var __spread$1 = (undefined && undefined.__spread) || function () {
    for (var ar = [], i = 0; i < arguments.length; i++) ar = ar.concat(__read$3(arguments[i]));
    return ar;
};
/**
 * Returns a shallow clone of the `value` object
 *
 * **NOTE**: Only `object` or `Array` types are supported
 *
 * @param value
 */
function clone_value(value) {
    if (Array.isArray(value))
        return __spread$1(value);
    return __assign$4({}, value);
}
/**
 * Returns a `Readable` / `Writable` Svelte Store, that clones the stored value before every I/O operation, to prevent untracked data mutations
 *
 * **NOTE**: If a non-Store value is passed as `store`, then it will be wrapped in a `Writable` Store
 *
 * **NOTE**: By default, `immutable` can **ONLY** shallow clone `Object`s and `Array`s. If deep or specific cloning is needed, pass a `clone` function
 *
 * For a simple example, in making a `Readable` Store immutable:
 *
 * ```javascript
 * import {readable} from "svelte/store";
 * import {immutable} from "svelte-commons/lib/stores/shared";
 *
 * const initial_value = {key: "value"};
 *
 * const readable_store = readable(initial_value);
 *
 * const store = immutable(readable_store);
 *
 * store.subscribe((value) => {
 *     console.log({initial_value, value});
 *     console.log(value === initial_value);
 * }); // logs: `false`
 * ```
 *
 * Another simple example, but this time making a `Writable` Store immutable:
 *
 * ```javascript
 * import {derived, writable} from "svelte/store";
 * import {immutable} from "svelte-commons/lib/stores/shared";
 *
 * const initial_value = {key: "value"};
 *
 * const writable_store = writable(initial_value);
 *
 * const store = immutable(writable_store);
 *
 * // NOTE: A `derived` Store is used here for simpler looking code
 * const derived_store = derived([writable_store, store], ([$writable, $store]) => {
 *     console.log({$writable, $store});
 *     console.log($writable === $store);
 * });
 *
 * // NOTE: This subscription is just so the `derived` callback starts running
 * derived_store.subscribe(() => {}); // logs: `false`
 *
 * store.set({key: "not a value!"}); // logs: `false`
 * ```
 *
 * @param store
 * @param clone
 * @param start
 */
function immutable(store, clone, start) {
    if (clone === void 0) { clone = clone_value; }
    // Need to support raw non-Store values being passed, so
    // we wrap them in a `Writable` Store
    if (!is_readable(store))
        store = writable(store, start);
    if (is_writable(store))
        return overlay(store, clone, clone);
    return derived(store, clone);
}

var __assign$5 = (undefined && undefined.__assign) || function () {
    __assign$5 = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign$5.apply(this, arguments);
};
/**
 * Returns the two objects merged with each other
 * @param previous_object
 * @param new_object
 */
function merge(previous_object, new_object) {
    return __assign$5(__assign$5({}, previous_object), new_object);
}
/**
 * Represents a `Writable` Svelte Store for a Store that performs shallow delta updates to the current object
 *
 * **Without Custom "Merger"**
 *
 * ```javascript
 * import {merged} from "svelte-commons/lib/stores/shared";
 *
 * // The Store is initialized with an empty base object, which is immutable by default
 * const store = merged({});
 *
 * // Will log every change to the Store
 * store.subscribe(console.log);
 *
 * store.set({first_name: "John", last_name: "Smith"}); // logs: `{first_name: "John", last_name: "Smith"}`
 * store.set({first_name: "Jane"}); // logs: `{first_name: "Jane", last_name: "Smith"}`
 * ```
 *
 * **With Custom "Merger"**
 *
 * ```javascript
 * import {merged} from "svelte-commons/lib/stores/shared";
 *
 * const initial_data = {
 *     name: "James Bond",
 *     job: {
 *         title: "Spy",
 *         agency: "MI6",
 *         country: "England"
 *     }
 * };
 *
 * function merger(a, b) {
 *     // By default, the default "Merger" only merges the top-level object keys, and spreads
 *     // all of them. For more performance, and to target nested keys, we can use a custom function
 *     const { name: a_name, job: a_job = {} } = a;
 *     const { name: b_name, job: b_job = {} } = b;
 *
 *     return {
 *         name: b_name || a_name,
 *         job: {
 *             title: b_job.title || a_job.title,
 *             agency: b_job.agency || a_job.agency,
 *             country: b_job.country || a_job.country
 *         }
 *     };
 * }
 *
 * // The Store is initialized with an empty base object, which is immutable by default
 * const store = merged(initial_data, merger);
 *
 * // Will log every change to the Store
 * store.subscribe(console.log); // logs: `{name:"James Bond",job:{title:"Spy",agency:"MI6",country:"England"}}`
 *
 * store.set({job: {agency: "FBI", country: "USA"}}); // logs: `{name:"James Bond",job:{title:"Spy",agency:"FBI",country:"USA"}}`
 * ```
 *
 * @param {*} value
 * @param {*} start
 */
function merged(value, merger, start) {
    if (merger === void 0) { merger = merge; }
    var _a = writable(value, start), set = _a.set, subscribe = _a.subscribe, update = _a.update;
    return {
        subscribe: subscribe,
        set: function (new_value) {
            value = merger(value, new_value);
            set(value);
        },
        update: function (func) {
            update(function (value) {
                return merger(value, func(value));
            });
        }
    };
}

/**
 * Returns the text with delimiters (_, ., [A-Z], spaces) replaced with dashes `-`, also deduplicates consecutive delimiters
 *
 * ```typescript
 * import {format_dash_key} from "svelte-commons/lib/util/shared";
 *
 * const text = "This is a KeyYep";
 * const key = format_dash_key(text);
 *
 * console.log(key); // logs: `this-is-a-key-yep`
 * ```
 *
 * @param {*} text
 */
function format_dash_key(text) {
    text = text
        .replace(/_/g, "-")
        .replace(/\./g, "-")
        .replace(/\s/g, "-")
        .replace(/[A-Z]/g, function (letter, index) {
        if (index > 0)
            return "-" + letter.toLowerCase();
        return letter.toLowerCase();
    });
    while (true) {
        var replaced = text.replace(/\-\-/g, "-");
        if (replaced === text)
            break;
        text = replaced;
    }
    return text;
}
/**
 * Returns the pattern with the token delimiter `%s` replaced, with the spread arguments `tokens`
 *
 * ```typescript
 * import {format_tokens} from "svelte-commons/lib/util/shared";
 *
 * const pattern = "My name is %s! How are you, %s?";
 * const formatted = format_tokens(pattern, "Jeff", "Karen");
 *
 * console.log(formatted); // logs: `My name is Jeff! How are you, Karen?`
 * ```
 *
 * @param pattern
 * @param tokens
 */
function format_tokens(pattern) {
    var tokens = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        tokens[_i - 1] = arguments[_i];
    }
    var index = 0;
    return pattern.replace(/%s/g, function () {
        var token = tokens[index];
        token = token.toString();
        index += 1;
        return token;
    });
}

var __read$4 = (undefined && undefined.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
/**
 * Represents if the current context is in-Browser
 */
var IS_BROWSER = typeof window !== "undefined";
/**
 * Returns the `key` and `value` stringified to a CSS Property Declaration, e.g. `color:red`
 *
 * ```typescript
 * import {format_css_declaration} from "svelte-commons/lib/util/shared";
 *
 * const key = "color";
 * const value = "red";
 *
 * const declaration = format_css_declaration(key, value);
 *
 * console.log(declaration); // logs: `color:red`
 * ```
 *
 * @param key
 * @param value
 */
function format_css_declaration(key, value) {
    key = format_dash_key(key);
    value = value.toString();
    return key + ":" + value;
}
/**
 * Returns the `key` stringified into a CSS Variable reference, e.g. `var(--primary-color)`
 *
 * ```typescript
 * import {format_css_reference} from "svelte-commons/lib/util/shared";
 *
 * const key = "primary-color";
 * const default_value = "blue";
 *
 * const reference = format_css_reference(key, default_value);
 *
 * console.log(reference); // logs: `var(--primary-color, blue)`
 * ```
 *
 * @param key
 * @param default_value
 * @param func
 */
function format_css_reference(key, default_value, func) {
    if (default_value === void 0) { default_value = null; }
    if (func === void 0) { func = "var"; }
    key = format_dash_key(key);
    if (default_value) {
        default_value = default_value.toString();
        return func + "(--" + key + ", " + default_value + ")";
    }
    return func + "(--" + key + ")";
}
/**
 * Returns the `key` and `value` stringified into a CSS Variable Declaration, e.g. `--primary-color:red`
 *
 * ```typescript
 * import {format_css_variable} from "svelte-commons/lib/util/shared";
 *
 * const key = "primary-color";
 * const value = "red";
 *
 * const variable = format_css_variable(key, value);
 *
 * console.log(variable); // logs: `--primary-color:red`
 * ```
 *
 * @param key
 * @param value
 */
function format_css_variable(key, value) {
    key = format_dash_key(key);
    value = value.toString();
    return "--" + key + ":" + value;
}
/**
 * Represents an in-memory reimplementation of a [Web Storage API](https://developer.mozilla.org/en-US/docs/Web/API/Storage)
 *
 * ```javascript
 * import {make_memory_storage} from "svelte-commons/lib/util/shared";
 *
 * const storage = make_memory_storage();
 *
 * // Save data to Storage
 * storage.setItem("key", "value");
 *
 * // Get saved data from Storage
 * let data = storage.getItem("key");
 *
 * // Remove saved data from Storage
 * storage.removeItem("key");
 *
 * // Remove all saved data from Storage
 * storage.clear();
 * ```
 *
 * @param default_value
 */
function make_memory_storage(default_value) {
    var storage;
    if (default_value) {
        var entries = Object.entries(default_value);
        storage = new Map(entries);
    }
    else
        storage = new Map();
    return {
        length: storage.size,
        clear: function () {
            storage.clear();
        },
        getItem: function (key) {
            if (storage.has(key))
                return storage.get(key);
            return null;
        },
        key: function (index) {
            var keys = Array.from(storage.keys());
            return keys[index];
        },
        removeItem: function (key) {
            storage.delete(key);
            // @ts-ignore
            this.length = storage.size;
        },
        setItem: function (key, value) {
            value = value.toString();
            storage.set(key, value);
            // @ts-ignore
            this.length = storage.size;
        }
    };
}
/**
 * Returns a key-value mapping of CSS Classes transformed into a single spaced ` ` string, e.g. `btn btn-primary`
 *
 * ```typescript
 * import {map_classes} from "svelte-commons/lib/util/shared";
 *
 * const data = {
 *     btn: "true",
 *     "btn-%s": "primary",
 *     btn_outline: false
 * };
 *
 * const classes = map_classes(data);
 *
 * console.log(classes); // logs: `btn btn-primary`
 * ```
 *
 * @param mapping
 * @param delimiter
 */
function map_classes(mapping, delimiter) {
    if (delimiter === void 0) { delimiter = " "; }
    var entries = Object.entries(mapping);
    // Classes are NOT sorted, due to CSS specificity. But falsy
    // values still need to be removed, (excluding stuff like zeroes)
    entries = entries.filter(function (_a) {
        var _b = __read$4(_a, 2), key = _b[0], value = _b[1];
        return !is_falsy(value);
    });
    var classes = entries.map(function (_a) {
        var _b = __read$4(_a, 2), key = _b[0], value = _b[1];
        if (key.includes("%s")) {
            key = format_tokens(key, value);
        }
        return key;
    });
    return classes.join(delimiter);
}
/**
 * Returns a key-value mapping of CSS Properties transformed into a single semi-colon `;` string, e.g. `background-color:black;color:white;`
 *
 * ```typescript
 * import {map_style} from "svelte-commons/lib/util/shared";
 *
 * const data = {
 *     background_color: "white",
 *     color: "black"
 * };
 *
 * const style = map_style(data);
 *
 * console.log(style); // logs: `background-color:white;color:black;`
 * ```
 *
 * @param mapping
 * @param delimiter
 */
function map_style(mapping, delimiter) {
    if (delimiter === void 0) { delimiter = ";"; }
    var entries = Object.entries(mapping);
    // Need to sort entries by key for reproducibility, then remove
    // falsy values, (excluding stuff like zeroes)
    entries.sort(comparator_entries);
    entries = entries.filter(function (_a) {
        var _b = __read$4(_a, 2), key = _b[0], value = _b[1];
        return !is_falsy(value);
    });
    var properties = entries.map(function (_a) {
        var _b = __read$4(_a, 2), key = _b[0], value = _b[1];
        var declaraton = format_css_declaration(key, value);
        return declaraton + delimiter;
    });
    return properties.join("");
}
/**
 * Returns a key-value mapping of CSS Variables transformed into a single semi-colon `;` string, e.g. `--background:black;--foreground:white;`
 *
 * ```typescript
 * import {map_variables} from "svelte-commons/lib/util/shared";
 *
 * const data = {
 *     theme_background: "white",
 *     theme_foreground: "black"
 * };
 *
 * const variables = map_variables(data);
 *
 * console.log(variables); // logs: `--theme-background:white;--theme-foreground:black;`
 * ```
 *
 * @param mapping
 * @param delimiter
 */
function map_variables(mapping, delimiter) {
    if (delimiter === void 0) { delimiter = ";"; }
    var entries = Object.entries(mapping);
    // Need to sort entries by key for reproducibility, then remove
    // falsy values, (excluding stuff like zeroes)
    entries.sort(comparator_entries);
    entries = entries.filter(function (_a) {
        var _b = __read$4(_a, 2), key = _b[0], value = _b[1];
        return !is_falsy(value);
    });
    var variables = entries.map(function (_a) {
        var _b = __read$4(_a, 2), key = _b[0], value = _b[1];
        var variable = format_css_variable(key, value);
        return variable + delimiter;
    });
    return variables.join("");
}

var __assign$6 = (undefined && undefined.__assign) || function () {
    __assign$6 = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign$6.apply(this, arguments);
};
/**
 * Returns the options passable into the [[router]] Svelte Store, with standard defaults
 *
 * @internal
 *
 * @param options
 */
function RouterOptions(options) {
    if (options === void 0) { options = {}; }
    var _a = options.base_url, base_url = _a === void 0 ? "" : _a, _b = options.hash, hash = _b === void 0 ? false : _b, _c = options.href, href = _c === void 0 ? "" : _c;
    if (IS_BROWSER) {
        // So the end-developer does not have to specifiy, we can fill in the `.href` on Browser context if needed
        if (!href)
            href = location.href;
        // In the same-vein, and we can also support `<base href="XXX" />` elements as a source for the base URL
        if (!base_url && location.href !== document.baseURI) {
            base_url = new URL(document.baseURI).pathname;
        }
    }
    return { base_url: base_url, hash: hash, href: href };
}
/**
 * Returns a `Readable` (Browser) / `Writable` (Server) Store that outputs the current full href
 *
 * > **NOTE**: On Browsers, the href will be pulled from [`Location.href`](https://developer.mozilla.org/en-US/docs/Web/API/Location/href)
 * > **NOTE**: On Servers, a middleware should be responsible for updating the Store
 *
 * @internal
 *
 * @param href
 * @param hash
 */
function make_href_store(href, hash) {
    if (href === void 0) { href = ""; }
    if (hash === void 0) { hash = false; }
    // If we're running on Server, usually some kind of middleware will be
    // handling this Store and updating it
    if (!IS_BROWSER)
        return writable(href);
    return readable(get_location_url(hash).href, function (set) {
        function on_popstate(event) {
            set(get_location_url(hash).href);
        }
        set(get_location_url(hash).href);
        window.addEventListener("popstate", on_popstate);
        return function () {
            window.removeEventListener("popstate", on_popstate);
        };
    });
}
/**
 * Returns a wrapper `Readable` from a Store that outputs entire URL hrefs, outputting the returning result of an [[IRouter]] instance
 *
 * @internal
 *
 * @param router
 * @param href
 */
function make_router_store(router, href) {
    return derived(href, function (value) {
        var url = new URL(value);
        return router(url.pathname);
    });
}
/**
 * Returns a new [[IRouterReturn]] object, which contains Stores and utility functions for getting details about the current router state, and navigation
 *
 * For your basic Web Application that has a Web Server configured to route all traffic to `/index.html`:
 *
 * ```html
 * <script>
 *     import {router} from "svelte-commons/lib/stores/shared";
 *
 *     import Error404 from "./routes/_404.svelte";
 *
 *     import Home from "./routes/Index.svelte";
 *     import About from "./routes/About.svelte";
 *
 *     import Blog from "./routes/blog/Index.svelte";
 *     import BlogPost from "./routes/blog/posts/Index.svelte";
 *
 *     // Below declares our `Route -> Svelte Component` mapping, which uses the common
 *     // `/path/to/view/:parameter` pattern format
 *     const routes = {
 *         "/": Home,
 *         "/about": About
 *
 *         "/blog": Blog,
 *         "/blog/:id": BlogPost
 *     };
 *
 *     // The `router` Store returns us an `IRouteReturn` instance, which has our current router state
 *     // and functions. It vaguely resembles the API of Sapper, with some extra goodies
 *     const {component, goto, page} = router(routes);
 *     const {params, query} = page;
 *
 *     function on_click(event) {
 *         goto(event.target.href);
 *     }
 * </script>
 *
 * <nav>
 *     <!--
 *         We need to hijack our link anchors to pass through the returned `goto`
 *         function, that way we can avoid full page navigations
 *     -->
 *     <a href="/" on:click|preventDefault={on_click}>Home</a>
 *     <a href="/about" on:click|preventDefault={on_click}>About</a>
 *     <a href="/blog" on:click|preventDefault={on_click}>Blog</a>
 * </nav>
 *
 * <main>
 *     <!-- The `component` Store returns Svelte Component that matches the current route -->
 *     {#if $component}
 *         <!-- Using the `svelte:component` Component Directive, we render the route and pass in the available URL parameters and query params  -->
 *         <svelte:component this={$component} params={$params} query={$query} />
 *     {:else}
 *         <!-- If no matching route was matched, treat as a 404 -->
 *         <Error404 />
 *     {/if}
 * </main>
 * ```
 *
 * Alternatively, if SSR (Server-Side Rendering) or other Server-oriented interactions are not in your scope, you can enable [[IRouterOptions.hash]] for hash mode:
 *
 * ```html
 * <script>
 *     import {router} from "svelte-commons/lib/stores/shared";
 *
 *     import Error404 from "./routes/_404.svelte";
 *
 *     import Home from "./routes/Index.svelte";
 *     import About from "./routes/About.svelte";
 *
 *     import Blog from "./routes/blog/Index.svelte";
 *     import BlogPost from "./routes/blog/posts/Index.svelte";
 *
 *     const routes = {
 *         "/": Home,
 *         "/about": About
 *
 *         "/blog": Blog,
 *         "/blog/:id": BlogPost
 *     };
 *
 *     // Passing in `IRouterReturn.hash` enables hash mode
 *     const {component, page} = router(routes, {hash: true});
 *     const {params, query} = page;
 * </script>
 *
 * <nav>
 *     <!--
 *         Below, we don't need to hijack click events anymore. Since hash
 *         links don't make the Browser do full-page navigations
 *     -->
 *     <a href="#/">Home</a>
 *     <a href="#/about">About</a>
 *     <a href="#/blog">Blog</a>
 * </nav>
 *
 * <main>
 *     <!-- The rest of the layout template is exactly the same as our non-hash mode version -->
 *     {#if $component}
 *         <svelte:component this={$component} params={$params} query={$query} />
 *     {:else}
 *         <Error404 />
 *     {/if}
 * </main>
 * ```
 *
 * And for SSR implementors, just pass in the current Server URL to [[IRouterOptions.href]] for the `router` Store to work:
 *
 * ```html
 * <script>
 *     import {router} from "svelte-commons/lib/stores/shared";
 *
 *     // We'll expose the current URL href to the rest of our SSR framework, so it can just do:
 *     // `const ret = App.render({href: "https://my.domain/blog/javascript-frameworks-the-good-and-bad"})`
 *     export let href = "";
 *
 *     // Using the same `router` API as before, we just need to pass in `IRouterOptions.href`
 *     const ret = router(..., {href});
 * </script>
 * ```
 *
 * @param routes
 * @param options
 */
function router(routes, options) {
    var _a = RouterOptions(options), base_url = _a.base_url, hash = _a.hash, href = _a.href;
    var router = make_router(routes, base_url);
    function _goto(href, options) {
        if (options === void 0) { options = {}; }
        return goto(href, __assign$6(__assign$6({}, options), { base_url: base_url, hash: hash }));
    }
    var href_store = make_href_store(href, hash);
    var router_store = make_router_store(router, href_store);
    var url_store = derived(href_store, function (value) { return new URL(value); });
    return {
        component: derived(router_store, function (value) { return (value ? value[1] : null); }),
        href: href_store,
        goto: _goto,
        url: url_store,
        page: {
            host: derived(url_store, function (value) { return value.host; }),
            path: derived(url_store, function (value) { return value.pathname; }),
            params: derived(router_store, function (value) { return (value ? value[0] : {}); }),
            query: derived(url_store, function (value) { return parse_query(value); })
        }
    };
}

var commonjsGlobal = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

function createCommonjsModule(fn, module) {
	return module = { exports: {} }, fn(module, module.exports), module.exports;
}

var tv4 = createCommonjsModule(function (module) {
/*
Author: Geraint Luff and others
Year: 2013

This code is released into the "public domain" by its author(s).  Anybody may use, alter and distribute the code without restriction.  The author makes no guarantees, and takes no liability of any kind for use of this code.

If you find a bug or make an improvement, it would be courteous to let the author know, but it is not compulsory.
*/
(function (global, factory) {
  if ( module.exports){
    // CommonJS. Define export.
    module.exports = factory();
  } else {
    // Browser globals
    global.tv4 = factory();
  }
}(commonjsGlobal, function () {

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/keys?redirectlocale=en-US&redirectslug=JavaScript%2FReference%2FGlobal_Objects%2FObject%2Fkeys
if (!Object.keys) {
	Object.keys = (function () {
		var hasOwnProperty = Object.prototype.hasOwnProperty,
			hasDontEnumBug = !({toString: null}).propertyIsEnumerable('toString'),
			dontEnums = [
				'toString',
				'toLocaleString',
				'valueOf',
				'hasOwnProperty',
				'isPrototypeOf',
				'propertyIsEnumerable',
				'constructor'
			],
			dontEnumsLength = dontEnums.length;

		return function (obj) {
			if (typeof obj !== 'object' && typeof obj !== 'function' || obj === null) {
				throw new TypeError('Object.keys called on non-object');
			}

			var result = [];

			for (var prop in obj) {
				if (hasOwnProperty.call(obj, prop)) {
					result.push(prop);
				}
			}

			if (hasDontEnumBug) {
				for (var i=0; i < dontEnumsLength; i++) {
					if (hasOwnProperty.call(obj, dontEnums[i])) {
						result.push(dontEnums[i]);
					}
				}
			}
			return result;
		};
	})();
}
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/create
if (!Object.create) {
	Object.create = (function(){
		function F(){}

		return function(o){
			if (arguments.length !== 1) {
				throw new Error('Object.create implementation only accepts one parameter.');
			}
			F.prototype = o;
			return new F();
		};
	})();
}
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/isArray?redirectlocale=en-US&redirectslug=JavaScript%2FReference%2FGlobal_Objects%2FArray%2FisArray
if(!Array.isArray) {
	Array.isArray = function (vArg) {
		return Object.prototype.toString.call(vArg) === "[object Array]";
	};
}
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf?redirectlocale=en-US&redirectslug=JavaScript%2FReference%2FGlobal_Objects%2FArray%2FindexOf
if (!Array.prototype.indexOf) {
	Array.prototype.indexOf = function (searchElement /*, fromIndex */ ) {
		if (this === null) {
			throw new TypeError();
		}
		var t = Object(this);
		var len = t.length >>> 0;

		if (len === 0) {
			return -1;
		}
		var n = 0;
		if (arguments.length > 1) {
			n = Number(arguments[1]);
			if (n !== n) { // shortcut for verifying if it's NaN
				n = 0;
			} else if (n !== 0 && n !== Infinity && n !== -Infinity) {
				n = (n > 0 || -1) * Math.floor(Math.abs(n));
			}
		}
		if (n >= len) {
			return -1;
		}
		var k = n >= 0 ? n : Math.max(len - Math.abs(n), 0);
		for (; k < len; k++) {
			if (k in t && t[k] === searchElement) {
				return k;
			}
		}
		return -1;
	};
}

// Grungey Object.isFrozen hack
if (!Object.isFrozen) {
	Object.isFrozen = function (obj) {
		var key = "tv4_test_frozen_key";
		while (obj.hasOwnProperty(key)) {
			key += Math.random();
		}
		try {
			obj[key] = true;
			delete obj[key];
			return false;
		} catch (e) {
			return true;
		}
	};
}
// Based on: https://github.com/geraintluff/uri-templates, but with all the de-substitution stuff removed

var uriTemplateGlobalModifiers = {
	"+": true,
	"#": true,
	".": true,
	"/": true,
	";": true,
	"?": true,
	"&": true
};
var uriTemplateSuffices = {
	"*": true
};

function notReallyPercentEncode(string) {
	return encodeURI(string).replace(/%25[0-9][0-9]/g, function (doubleEncoded) {
		return "%" + doubleEncoded.substring(3);
	});
}

function uriTemplateSubstitution(spec) {
	var modifier = "";
	if (uriTemplateGlobalModifiers[spec.charAt(0)]) {
		modifier = spec.charAt(0);
		spec = spec.substring(1);
	}
	var separator = "";
	var prefix = "";
	var shouldEscape = true;
	var showVariables = false;
	var trimEmptyString = false;
	if (modifier === '+') {
		shouldEscape = false;
	} else if (modifier === ".") {
		prefix = ".";
		separator = ".";
	} else if (modifier === "/") {
		prefix = "/";
		separator = "/";
	} else if (modifier === '#') {
		prefix = "#";
		shouldEscape = false;
	} else if (modifier === ';') {
		prefix = ";";
		separator = ";";
		showVariables = true;
		trimEmptyString = true;
	} else if (modifier === '?') {
		prefix = "?";
		separator = "&";
		showVariables = true;
	} else if (modifier === '&') {
		prefix = "&";
		separator = "&";
		showVariables = true;
	}

	var varNames = [];
	var varList = spec.split(",");
	var varSpecs = [];
	for (var i = 0; i < varList.length; i++) {
		var varName = varList[i];
		var truncate = null;
		if (varName.indexOf(":") !== -1) {
			var parts = varName.split(":");
			varName = parts[0];
			truncate = parseInt(parts[1], 10);
		}
		var suffices = {};
		while (uriTemplateSuffices[varName.charAt(varName.length - 1)]) {
			suffices[varName.charAt(varName.length - 1)] = true;
			varName = varName.substring(0, varName.length - 1);
		}
		var varSpec = {
			truncate: truncate,
			name: varName,
			suffices: suffices
		};
		varSpecs.push(varSpec);
		varNames.push(varName);
	}
	var subFunction = function (valueFunction) {
		var result = "";
		var startIndex = 0;
		for (var i = 0; i < varSpecs.length; i++) {
			var varSpec = varSpecs[i];
			var value = valueFunction(varSpec.name);
			if (value === null || value === undefined || (Array.isArray(value) && value.length === 0) || (typeof value === 'object' && Object.keys(value).length === 0)) {
				startIndex++;
				continue;
			}
			if (i === startIndex) {
				result += prefix;
			} else {
				result += (separator || ",");
			}
			if (Array.isArray(value)) {
				if (showVariables) {
					result += varSpec.name + "=";
				}
				for (var j = 0; j < value.length; j++) {
					if (j > 0) {
						result += varSpec.suffices['*'] ? (separator || ",") : ",";
						if (varSpec.suffices['*'] && showVariables) {
							result += varSpec.name + "=";
						}
					}
					result += shouldEscape ? encodeURIComponent(value[j]).replace(/!/g, "%21") : notReallyPercentEncode(value[j]);
				}
			} else if (typeof value === "object") {
				if (showVariables && !varSpec.suffices['*']) {
					result += varSpec.name + "=";
				}
				var first = true;
				for (var key in value) {
					if (!first) {
						result += varSpec.suffices['*'] ? (separator || ",") : ",";
					}
					first = false;
					result += shouldEscape ? encodeURIComponent(key).replace(/!/g, "%21") : notReallyPercentEncode(key);
					result += varSpec.suffices['*'] ? '=' : ",";
					result += shouldEscape ? encodeURIComponent(value[key]).replace(/!/g, "%21") : notReallyPercentEncode(value[key]);
				}
			} else {
				if (showVariables) {
					result += varSpec.name;
					if (!trimEmptyString || value !== "") {
						result += "=";
					}
				}
				if (varSpec.truncate != null) {
					value = value.substring(0, varSpec.truncate);
				}
				result += shouldEscape ? encodeURIComponent(value).replace(/!/g, "%21"): notReallyPercentEncode(value);
			}
		}
		return result;
	};
	subFunction.varNames = varNames;
	return {
		prefix: prefix,
		substitution: subFunction
	};
}

function UriTemplate(template) {
	if (!(this instanceof UriTemplate)) {
		return new UriTemplate(template);
	}
	var parts = template.split("{");
	var textParts = [parts.shift()];
	var prefixes = [];
	var substitutions = [];
	var varNames = [];
	while (parts.length > 0) {
		var part = parts.shift();
		var spec = part.split("}")[0];
		var remainder = part.substring(spec.length + 1);
		var funcs = uriTemplateSubstitution(spec);
		substitutions.push(funcs.substitution);
		prefixes.push(funcs.prefix);
		textParts.push(remainder);
		varNames = varNames.concat(funcs.substitution.varNames);
	}
	this.fill = function (valueFunction) {
		var result = textParts[0];
		for (var i = 0; i < substitutions.length; i++) {
			var substitution = substitutions[i];
			result += substitution(valueFunction);
			result += textParts[i + 1];
		}
		return result;
	};
	this.varNames = varNames;
	this.template = template;
}
UriTemplate.prototype = {
	toString: function () {
		return this.template;
	},
	fillFromObject: function (obj) {
		return this.fill(function (varName) {
			return obj[varName];
		});
	}
};
var ValidatorContext = function ValidatorContext(parent, collectMultiple, errorReporter, checkRecursive, trackUnknownProperties) {
	this.missing = [];
	this.missingMap = {};
	this.formatValidators = parent ? Object.create(parent.formatValidators) : {};
	this.schemas = parent ? Object.create(parent.schemas) : {};
	this.collectMultiple = collectMultiple;
	this.errors = [];
	this.handleError = collectMultiple ? this.collectError : this.returnError;
	if (checkRecursive) {
		this.checkRecursive = true;
		this.scanned = [];
		this.scannedFrozen = [];
		this.scannedFrozenSchemas = [];
		this.scannedFrozenValidationErrors = [];
		this.validatedSchemasKey = 'tv4_validation_id';
		this.validationErrorsKey = 'tv4_validation_errors_id';
	}
	if (trackUnknownProperties) {
		this.trackUnknownProperties = true;
		this.knownPropertyPaths = {};
		this.unknownPropertyPaths = {};
	}
	this.errorReporter = errorReporter || defaultErrorReporter('en');
	if (typeof this.errorReporter === 'string') {
		throw new Error('debug');
	}
	this.definedKeywords = {};
	if (parent) {
		for (var key in parent.definedKeywords) {
			this.definedKeywords[key] = parent.definedKeywords[key].slice(0);
		}
	}
};
ValidatorContext.prototype.defineKeyword = function (keyword, keywordFunction) {
	this.definedKeywords[keyword] = this.definedKeywords[keyword] || [];
	this.definedKeywords[keyword].push(keywordFunction);
};
ValidatorContext.prototype.createError = function (code, messageParams, dataPath, schemaPath, subErrors, data, schema) {
	var error = new ValidationError(code, messageParams, dataPath, schemaPath, subErrors);
	error.message = this.errorReporter(error, data, schema);
	return error;
};
ValidatorContext.prototype.returnError = function (error) {
	return error;
};
ValidatorContext.prototype.collectError = function (error) {
	if (error) {
		this.errors.push(error);
	}
	return null;
};
ValidatorContext.prototype.prefixErrors = function (startIndex, dataPath, schemaPath) {
	for (var i = startIndex; i < this.errors.length; i++) {
		this.errors[i] = this.errors[i].prefixWith(dataPath, schemaPath);
	}
	return this;
};
ValidatorContext.prototype.banUnknownProperties = function (data, schema) {
	for (var unknownPath in this.unknownPropertyPaths) {
		var error = this.createError(ErrorCodes.UNKNOWN_PROPERTY, {path: unknownPath}, unknownPath, "", null, data, schema);
		var result = this.handleError(error);
		if (result) {
			return result;
		}
	}
	return null;
};

ValidatorContext.prototype.addFormat = function (format, validator) {
	if (typeof format === 'object') {
		for (var key in format) {
			this.addFormat(key, format[key]);
		}
		return this;
	}
	this.formatValidators[format] = validator;
};
ValidatorContext.prototype.resolveRefs = function (schema, urlHistory) {
	if (schema['$ref'] !== undefined) {
		urlHistory = urlHistory || {};
		if (urlHistory[schema['$ref']]) {
			return this.createError(ErrorCodes.CIRCULAR_REFERENCE, {urls: Object.keys(urlHistory).join(', ')}, '', '', null, undefined, schema);
		}
		urlHistory[schema['$ref']] = true;
		schema = this.getSchema(schema['$ref'], urlHistory);
	}
	return schema;
};
ValidatorContext.prototype.getSchema = function (url, urlHistory) {
	var schema;
	if (this.schemas[url] !== undefined) {
		schema = this.schemas[url];
		return this.resolveRefs(schema, urlHistory);
	}
	var baseUrl = url;
	var fragment = "";
	if (url.indexOf('#') !== -1) {
		fragment = url.substring(url.indexOf("#") + 1);
		baseUrl = url.substring(0, url.indexOf("#"));
	}
	if (typeof this.schemas[baseUrl] === 'object') {
		schema = this.schemas[baseUrl];
		var pointerPath = decodeURIComponent(fragment);
		if (pointerPath === "") {
			return this.resolveRefs(schema, urlHistory);
		} else if (pointerPath.charAt(0) !== "/") {
			return undefined;
		}
		var parts = pointerPath.split("/").slice(1);
		for (var i = 0; i < parts.length; i++) {
			var component = parts[i].replace(/~1/g, "/").replace(/~0/g, "~");
			if (schema[component] === undefined) {
				schema = undefined;
				break;
			}
			schema = schema[component];
		}
		if (schema !== undefined) {
			return this.resolveRefs(schema, urlHistory);
		}
	}
	if (this.missing[baseUrl] === undefined) {
		this.missing.push(baseUrl);
		this.missing[baseUrl] = baseUrl;
		this.missingMap[baseUrl] = baseUrl;
	}
};
ValidatorContext.prototype.searchSchemas = function (schema, url) {
	if (Array.isArray(schema)) {
		for (var i = 0; i < schema.length; i++) {
			this.searchSchemas(schema[i], url);
		}
	} else if (schema && typeof schema === "object") {
		if (typeof schema.id === "string") {
			if (isTrustedUrl(url, schema.id)) {
				if (this.schemas[schema.id] === undefined) {
					this.schemas[schema.id] = schema;
				}
			}
		}
		for (var key in schema) {
			if (key !== "enum") {
				if (typeof schema[key] === "object") {
					this.searchSchemas(schema[key], url);
				} else if (key === "$ref") {
					var uri = getDocumentUri(schema[key]);
					if (uri && this.schemas[uri] === undefined && this.missingMap[uri] === undefined) {
						this.missingMap[uri] = uri;
					}
				}
			}
		}
	}
};
ValidatorContext.prototype.addSchema = function (url, schema) {
	//overload
	if (typeof url !== 'string' || typeof schema === 'undefined') {
		if (typeof url === 'object' && typeof url.id === 'string') {
			schema = url;
			url = schema.id;
		}
		else {
			return;
		}
	}
	if (url === getDocumentUri(url) + "#") {
		// Remove empty fragment
		url = getDocumentUri(url);
	}
	this.schemas[url] = schema;
	delete this.missingMap[url];
	normSchema(schema, url);
	this.searchSchemas(schema, url);
};

ValidatorContext.prototype.getSchemaMap = function () {
	var map = {};
	for (var key in this.schemas) {
		map[key] = this.schemas[key];
	}
	return map;
};

ValidatorContext.prototype.getSchemaUris = function (filterRegExp) {
	var list = [];
	for (var key in this.schemas) {
		if (!filterRegExp || filterRegExp.test(key)) {
			list.push(key);
		}
	}
	return list;
};

ValidatorContext.prototype.getMissingUris = function (filterRegExp) {
	var list = [];
	for (var key in this.missingMap) {
		if (!filterRegExp || filterRegExp.test(key)) {
			list.push(key);
		}
	}
	return list;
};

ValidatorContext.prototype.dropSchemas = function () {
	this.schemas = {};
	this.reset();
};
ValidatorContext.prototype.reset = function () {
	this.missing = [];
	this.missingMap = {};
	this.errors = [];
};

ValidatorContext.prototype.validateAll = function (data, schema, dataPathParts, schemaPathParts, dataPointerPath) {
	var topLevel;
	schema = this.resolveRefs(schema);
	if (!schema) {
		return null;
	} else if (schema instanceof ValidationError) {
		this.errors.push(schema);
		return schema;
	}

	var startErrorCount = this.errors.length;
	var frozenIndex, scannedFrozenSchemaIndex = null, scannedSchemasIndex = null;
	if (this.checkRecursive && data && typeof data === 'object') {
		topLevel = !this.scanned.length;
		if (data[this.validatedSchemasKey]) {
			var schemaIndex = data[this.validatedSchemasKey].indexOf(schema);
			if (schemaIndex !== -1) {
				this.errors = this.errors.concat(data[this.validationErrorsKey][schemaIndex]);
				return null;
			}
		}
		if (Object.isFrozen(data)) {
			frozenIndex = this.scannedFrozen.indexOf(data);
			if (frozenIndex !== -1) {
				var frozenSchemaIndex = this.scannedFrozenSchemas[frozenIndex].indexOf(schema);
				if (frozenSchemaIndex !== -1) {
					this.errors = this.errors.concat(this.scannedFrozenValidationErrors[frozenIndex][frozenSchemaIndex]);
					return null;
				}
			}
		}
		this.scanned.push(data);
		if (Object.isFrozen(data)) {
			if (frozenIndex === -1) {
				frozenIndex = this.scannedFrozen.length;
				this.scannedFrozen.push(data);
				this.scannedFrozenSchemas.push([]);
			}
			scannedFrozenSchemaIndex = this.scannedFrozenSchemas[frozenIndex].length;
			this.scannedFrozenSchemas[frozenIndex][scannedFrozenSchemaIndex] = schema;
			this.scannedFrozenValidationErrors[frozenIndex][scannedFrozenSchemaIndex] = [];
		} else {
			if (!data[this.validatedSchemasKey]) {
				try {
					Object.defineProperty(data, this.validatedSchemasKey, {
						value: [],
						configurable: true
					});
					Object.defineProperty(data, this.validationErrorsKey, {
						value: [],
						configurable: true
					});
				} catch (e) {
					//IE 7/8 workaround
					data[this.validatedSchemasKey] = [];
					data[this.validationErrorsKey] = [];
				}
			}
			scannedSchemasIndex = data[this.validatedSchemasKey].length;
			data[this.validatedSchemasKey][scannedSchemasIndex] = schema;
			data[this.validationErrorsKey][scannedSchemasIndex] = [];
		}
	}

	var errorCount = this.errors.length;
	var error = this.validateBasic(data, schema, dataPointerPath)
		|| this.validateNumeric(data, schema, dataPointerPath)
		|| this.validateString(data, schema, dataPointerPath)
		|| this.validateArray(data, schema, dataPointerPath)
		|| this.validateObject(data, schema, dataPointerPath)
		|| this.validateCombinations(data, schema, dataPointerPath)
		|| this.validateHypermedia(data, schema, dataPointerPath)
		|| this.validateFormat(data, schema, dataPointerPath)
		|| this.validateDefinedKeywords(data, schema, dataPointerPath)
		|| null;

	if (topLevel) {
		while (this.scanned.length) {
			var item = this.scanned.pop();
			delete item[this.validatedSchemasKey];
		}
		this.scannedFrozen = [];
		this.scannedFrozenSchemas = [];
	}

	if (error || errorCount !== this.errors.length) {
		while ((dataPathParts && dataPathParts.length) || (schemaPathParts && schemaPathParts.length)) {
			var dataPart = (dataPathParts && dataPathParts.length) ? "" + dataPathParts.pop() : null;
			var schemaPart = (schemaPathParts && schemaPathParts.length) ? "" + schemaPathParts.pop() : null;
			if (error) {
				error = error.prefixWith(dataPart, schemaPart);
			}
			this.prefixErrors(errorCount, dataPart, schemaPart);
		}
	}

	if (scannedFrozenSchemaIndex !== null) {
		this.scannedFrozenValidationErrors[frozenIndex][scannedFrozenSchemaIndex] = this.errors.slice(startErrorCount);
	} else if (scannedSchemasIndex !== null) {
		data[this.validationErrorsKey][scannedSchemasIndex] = this.errors.slice(startErrorCount);
	}

	return this.handleError(error);
};
ValidatorContext.prototype.validateFormat = function (data, schema) {
	if (typeof schema.format !== 'string' || !this.formatValidators[schema.format]) {
		return null;
	}
	var errorMessage = this.formatValidators[schema.format].call(null, data, schema);
	if (typeof errorMessage === 'string' || typeof errorMessage === 'number') {
		return this.createError(ErrorCodes.FORMAT_CUSTOM, {message: errorMessage}, '', '/format', null, data, schema);
	} else if (errorMessage && typeof errorMessage === 'object') {
		return this.createError(ErrorCodes.FORMAT_CUSTOM, {message: errorMessage.message || "?"}, errorMessage.dataPath || '', errorMessage.schemaPath || "/format", null, data, schema);
	}
	return null;
};
ValidatorContext.prototype.validateDefinedKeywords = function (data, schema, dataPointerPath) {
	for (var key in this.definedKeywords) {
		if (typeof schema[key] === 'undefined') {
			continue;
		}
		var validationFunctions = this.definedKeywords[key];
		for (var i = 0; i < validationFunctions.length; i++) {
			var func = validationFunctions[i];
			var result = func(data, schema[key], schema, dataPointerPath);
			if (typeof result === 'string' || typeof result === 'number') {
				return this.createError(ErrorCodes.KEYWORD_CUSTOM, {key: key, message: result}, '', '', null, data, schema).prefixWith(null, key);
			} else if (result && typeof result === 'object') {
				var code = result.code;
				if (typeof code === 'string') {
					if (!ErrorCodes[code]) {
						throw new Error('Undefined error code (use defineError): ' + code);
					}
					code = ErrorCodes[code];
				} else if (typeof code !== 'number') {
					code = ErrorCodes.KEYWORD_CUSTOM;
				}
				var messageParams = (typeof result.message === 'object') ? result.message : {key: key, message: result.message || "?"};
				var schemaPath = result.schemaPath || ("/" + key.replace(/~/g, '~0').replace(/\//g, '~1'));
				return this.createError(code, messageParams, result.dataPath || null, schemaPath, null, data, schema);
			}
		}
	}
	return null;
};

function recursiveCompare(A, B) {
	if (A === B) {
		return true;
	}
	if (A && B && typeof A === "object" && typeof B === "object") {
		if (Array.isArray(A) !== Array.isArray(B)) {
			return false;
		} else if (Array.isArray(A)) {
			if (A.length !== B.length) {
				return false;
			}
			for (var i = 0; i < A.length; i++) {
				if (!recursiveCompare(A[i], B[i])) {
					return false;
				}
			}
		} else {
			var key;
			for (key in A) {
				if (B[key] === undefined && A[key] !== undefined) {
					return false;
				}
			}
			for (key in B) {
				if (A[key] === undefined && B[key] !== undefined) {
					return false;
				}
			}
			for (key in A) {
				if (!recursiveCompare(A[key], B[key])) {
					return false;
				}
			}
		}
		return true;
	}
	return false;
}

ValidatorContext.prototype.validateBasic = function validateBasic(data, schema, dataPointerPath) {
	var error;
	if (error = this.validateType(data, schema, dataPointerPath)) {
		return error.prefixWith(null, "type");
	}
	if (error = this.validateEnum(data, schema, dataPointerPath)) {
		return error.prefixWith(null, "type");
	}
	return null;
};

ValidatorContext.prototype.validateType = function validateType(data, schema) {
	if (schema.type === undefined) {
		return null;
	}
	var dataType = typeof data;
	if (data === null) {
		dataType = "null";
	} else if (Array.isArray(data)) {
		dataType = "array";
	}
	var allowedTypes = schema.type;
	if (!Array.isArray(allowedTypes)) {
		allowedTypes = [allowedTypes];
	}

	for (var i = 0; i < allowedTypes.length; i++) {
		var type = allowedTypes[i];
		if (type === dataType || (type === "integer" && dataType === "number" && (data % 1 === 0))) {
			return null;
		}
	}
	return this.createError(ErrorCodes.INVALID_TYPE, {type: dataType, expected: allowedTypes.join("/")}, '', '', null, data, schema);
};

ValidatorContext.prototype.validateEnum = function validateEnum(data, schema) {
	if (schema["enum"] === undefined) {
		return null;
	}
	for (var i = 0; i < schema["enum"].length; i++) {
		var enumVal = schema["enum"][i];
		if (recursiveCompare(data, enumVal)) {
			return null;
		}
	}
	return this.createError(ErrorCodes.ENUM_MISMATCH, {value: (typeof JSON !== 'undefined') ? JSON.stringify(data) : data}, '', '', null, data, schema);
};

ValidatorContext.prototype.validateNumeric = function validateNumeric(data, schema, dataPointerPath) {
	return this.validateMultipleOf(data, schema, dataPointerPath)
		|| this.validateMinMax(data, schema, dataPointerPath)
		|| this.validateNaN(data, schema, dataPointerPath)
		|| null;
};

var CLOSE_ENOUGH_LOW = Math.pow(2, -51);
var CLOSE_ENOUGH_HIGH = 1 - CLOSE_ENOUGH_LOW;
ValidatorContext.prototype.validateMultipleOf = function validateMultipleOf(data, schema) {
	var multipleOf = schema.multipleOf || schema.divisibleBy;
	if (multipleOf === undefined) {
		return null;
	}
	if (typeof data === "number") {
		var remainder = (data/multipleOf)%1;
		if (remainder >= CLOSE_ENOUGH_LOW && remainder < CLOSE_ENOUGH_HIGH) {
			return this.createError(ErrorCodes.NUMBER_MULTIPLE_OF, {value: data, multipleOf: multipleOf}, '', '', null, data, schema);
		}
	}
	return null;
};

ValidatorContext.prototype.validateMinMax = function validateMinMax(data, schema) {
	if (typeof data !== "number") {
		return null;
	}
	if (schema.minimum !== undefined) {
		if (data < schema.minimum) {
			return this.createError(ErrorCodes.NUMBER_MINIMUM, {value: data, minimum: schema.minimum}, '', '/minimum', null, data, schema);
		}
		if (schema.exclusiveMinimum && data === schema.minimum) {
			return this.createError(ErrorCodes.NUMBER_MINIMUM_EXCLUSIVE, {value: data, minimum: schema.minimum}, '', '/exclusiveMinimum', null, data, schema);
		}
	}
	if (schema.maximum !== undefined) {
		if (data > schema.maximum) {
			return this.createError(ErrorCodes.NUMBER_MAXIMUM, {value: data, maximum: schema.maximum}, '', '/maximum', null, data, schema);
		}
		if (schema.exclusiveMaximum && data === schema.maximum) {
			return this.createError(ErrorCodes.NUMBER_MAXIMUM_EXCLUSIVE, {value: data, maximum: schema.maximum}, '', '/exclusiveMaximum', null, data, schema);
		}
	}
	return null;
};

ValidatorContext.prototype.validateNaN = function validateNaN(data, schema) {
	if (typeof data !== "number") {
		return null;
	}
	if (isNaN(data) === true || data === Infinity || data === -Infinity) {
		return this.createError(ErrorCodes.NUMBER_NOT_A_NUMBER, {value: data}, '', '/type', null, data, schema);
	}
	return null;
};

ValidatorContext.prototype.validateString = function validateString(data, schema, dataPointerPath) {
	return this.validateStringLength(data, schema, dataPointerPath)
		|| this.validateStringPattern(data, schema, dataPointerPath)
		|| null;
};

ValidatorContext.prototype.validateStringLength = function validateStringLength(data, schema) {
	if (typeof data !== "string") {
		return null;
	}
	if (schema.minLength !== undefined) {
		if (data.length < schema.minLength) {
			return this.createError(ErrorCodes.STRING_LENGTH_SHORT, {length: data.length, minimum: schema.minLength}, '', '/minLength', null, data, schema);
		}
	}
	if (schema.maxLength !== undefined) {
		if (data.length > schema.maxLength) {
			return this.createError(ErrorCodes.STRING_LENGTH_LONG, {length: data.length, maximum: schema.maxLength}, '', '/maxLength', null, data, schema);
		}
	}
	return null;
};

ValidatorContext.prototype.validateStringPattern = function validateStringPattern(data, schema) {
	if (typeof data !== "string" || (typeof schema.pattern !== "string" && !(schema.pattern instanceof RegExp))) {
		return null;
	}
	var regexp;
	if (schema.pattern instanceof RegExp) {
	  regexp = schema.pattern;
	}
	else {
	  var body, flags = '';
	  // Check for regular expression literals
	  // @see http://www.ecma-international.org/ecma-262/5.1/#sec-7.8.5
	  var literal = schema.pattern.match(/^\/(.+)\/([img]*)$/);
	  if (literal) {
	    body = literal[1];
	    flags = literal[2];
	  }
	  else {
	    body = schema.pattern;
	  }
	  regexp = new RegExp(body, flags);
	}
	if (!regexp.test(data)) {
		return this.createError(ErrorCodes.STRING_PATTERN, {pattern: schema.pattern}, '', '/pattern', null, data, schema);
	}
	return null;
};

ValidatorContext.prototype.validateArray = function validateArray(data, schema, dataPointerPath) {
	if (!Array.isArray(data)) {
		return null;
	}
	return this.validateArrayLength(data, schema, dataPointerPath)
		|| this.validateArrayUniqueItems(data, schema, dataPointerPath)
		|| this.validateArrayItems(data, schema, dataPointerPath)
		|| null;
};

ValidatorContext.prototype.validateArrayLength = function validateArrayLength(data, schema) {
	var error;
	if (schema.minItems !== undefined) {
		if (data.length < schema.minItems) {
			error = this.createError(ErrorCodes.ARRAY_LENGTH_SHORT, {length: data.length, minimum: schema.minItems}, '', '/minItems', null, data, schema);
			if (this.handleError(error)) {
				return error;
			}
		}
	}
	if (schema.maxItems !== undefined) {
		if (data.length > schema.maxItems) {
			error = this.createError(ErrorCodes.ARRAY_LENGTH_LONG, {length: data.length, maximum: schema.maxItems}, '', '/maxItems', null, data, schema);
			if (this.handleError(error)) {
				return error;
			}
		}
	}
	return null;
};

ValidatorContext.prototype.validateArrayUniqueItems = function validateArrayUniqueItems(data, schema) {
	if (schema.uniqueItems) {
		for (var i = 0; i < data.length; i++) {
			for (var j = i + 1; j < data.length; j++) {
				if (recursiveCompare(data[i], data[j])) {
					var error = this.createError(ErrorCodes.ARRAY_UNIQUE, {match1: i, match2: j}, '', '/uniqueItems', null, data, schema);
					if (this.handleError(error)) {
						return error;
					}
				}
			}
		}
	}
	return null;
};

ValidatorContext.prototype.validateArrayItems = function validateArrayItems(data, schema, dataPointerPath) {
	if (schema.items === undefined) {
		return null;
	}
	var error, i;
	if (Array.isArray(schema.items)) {
		for (i = 0; i < data.length; i++) {
			if (i < schema.items.length) {
				if (error = this.validateAll(data[i], schema.items[i], [i], ["items", i], dataPointerPath + "/" + i)) {
					return error;
				}
			} else if (schema.additionalItems !== undefined) {
				if (typeof schema.additionalItems === "boolean") {
					if (!schema.additionalItems) {
						error = (this.createError(ErrorCodes.ARRAY_ADDITIONAL_ITEMS, {}, '/' + i, '/additionalItems', null, data, schema));
						if (this.handleError(error)) {
							return error;
						}
					}
				} else if (error = this.validateAll(data[i], schema.additionalItems, [i], ["additionalItems"], dataPointerPath + "/" + i)) {
					return error;
				}
			}
		}
	} else {
		for (i = 0; i < data.length; i++) {
			if (error = this.validateAll(data[i], schema.items, [i], ["items"], dataPointerPath + "/" + i)) {
				return error;
			}
		}
	}
	return null;
};

ValidatorContext.prototype.validateObject = function validateObject(data, schema, dataPointerPath) {
	if (typeof data !== "object" || data === null || Array.isArray(data)) {
		return null;
	}
	return this.validateObjectMinMaxProperties(data, schema, dataPointerPath)
		|| this.validateObjectRequiredProperties(data, schema, dataPointerPath)
		|| this.validateObjectProperties(data, schema, dataPointerPath)
		|| this.validateObjectDependencies(data, schema, dataPointerPath)
		|| null;
};

ValidatorContext.prototype.validateObjectMinMaxProperties = function validateObjectMinMaxProperties(data, schema) {
	var keys = Object.keys(data);
	var error;
	if (schema.minProperties !== undefined) {
		if (keys.length < schema.minProperties) {
			error = this.createError(ErrorCodes.OBJECT_PROPERTIES_MINIMUM, {propertyCount: keys.length, minimum: schema.minProperties}, '', '/minProperties', null, data, schema);
			if (this.handleError(error)) {
				return error;
			}
		}
	}
	if (schema.maxProperties !== undefined) {
		if (keys.length > schema.maxProperties) {
			error = this.createError(ErrorCodes.OBJECT_PROPERTIES_MAXIMUM, {propertyCount: keys.length, maximum: schema.maxProperties}, '', '/maxProperties', null, data, schema);
			if (this.handleError(error)) {
				return error;
			}
		}
	}
	return null;
};

ValidatorContext.prototype.validateObjectRequiredProperties = function validateObjectRequiredProperties(data, schema) {
	if (schema.required !== undefined) {
		for (var i = 0; i < schema.required.length; i++) {
			var key = schema.required[i];
			if (data[key] === undefined) {
				var error = this.createError(ErrorCodes.OBJECT_REQUIRED, {key: key}, '', '/required/' + i, null, data, schema);
				if (this.handleError(error)) {
					return error;
				}
			}
		}
	}
	return null;
};

ValidatorContext.prototype.validateObjectProperties = function validateObjectProperties(data, schema, dataPointerPath) {
	var error;
	for (var key in data) {
		var keyPointerPath = dataPointerPath + "/" + key.replace(/~/g, '~0').replace(/\//g, '~1');
		var foundMatch = false;
		if (schema.properties !== undefined && schema.properties[key] !== undefined) {
			foundMatch = true;
			if (error = this.validateAll(data[key], schema.properties[key], [key], ["properties", key], keyPointerPath)) {
				return error;
			}
		}
		if (schema.patternProperties !== undefined) {
			for (var patternKey in schema.patternProperties) {
				var regexp = new RegExp(patternKey);
				if (regexp.test(key)) {
					foundMatch = true;
					if (error = this.validateAll(data[key], schema.patternProperties[patternKey], [key], ["patternProperties", patternKey], keyPointerPath)) {
						return error;
					}
				}
			}
		}
		if (!foundMatch) {
			if (schema.additionalProperties !== undefined) {
				if (this.trackUnknownProperties) {
					this.knownPropertyPaths[keyPointerPath] = true;
					delete this.unknownPropertyPaths[keyPointerPath];
				}
				if (typeof schema.additionalProperties === "boolean") {
					if (!schema.additionalProperties) {
						error = this.createError(ErrorCodes.OBJECT_ADDITIONAL_PROPERTIES, {key: key}, '', '/additionalProperties', null, data, schema).prefixWith(key, null);
						if (this.handleError(error)) {
							return error;
						}
					}
				} else {
					if (error = this.validateAll(data[key], schema.additionalProperties, [key], ["additionalProperties"], keyPointerPath)) {
						return error;
					}
				}
			} else if (this.trackUnknownProperties && !this.knownPropertyPaths[keyPointerPath]) {
				this.unknownPropertyPaths[keyPointerPath] = true;
			}
		} else if (this.trackUnknownProperties) {
			this.knownPropertyPaths[keyPointerPath] = true;
			delete this.unknownPropertyPaths[keyPointerPath];
		}
	}
	return null;
};

ValidatorContext.prototype.validateObjectDependencies = function validateObjectDependencies(data, schema, dataPointerPath) {
	var error;
	if (schema.dependencies !== undefined) {
		for (var depKey in schema.dependencies) {
			if (data[depKey] !== undefined) {
				var dep = schema.dependencies[depKey];
				if (typeof dep === "string") {
					if (data[dep] === undefined) {
						error = this.createError(ErrorCodes.OBJECT_DEPENDENCY_KEY, {key: depKey, missing: dep}, '', '', null, data, schema).prefixWith(null, depKey).prefixWith(null, "dependencies");
						if (this.handleError(error)) {
							return error;
						}
					}
				} else if (Array.isArray(dep)) {
					for (var i = 0; i < dep.length; i++) {
						var requiredKey = dep[i];
						if (data[requiredKey] === undefined) {
							error = this.createError(ErrorCodes.OBJECT_DEPENDENCY_KEY, {key: depKey, missing: requiredKey}, '', '/' + i, null, data, schema).prefixWith(null, depKey).prefixWith(null, "dependencies");
							if (this.handleError(error)) {
								return error;
							}
						}
					}
				} else {
					if (error = this.validateAll(data, dep, [], ["dependencies", depKey], dataPointerPath)) {
						return error;
					}
				}
			}
		}
	}
	return null;
};

ValidatorContext.prototype.validateCombinations = function validateCombinations(data, schema, dataPointerPath) {
	return this.validateAllOf(data, schema, dataPointerPath)
		|| this.validateAnyOf(data, schema, dataPointerPath)
		|| this.validateOneOf(data, schema, dataPointerPath)
		|| this.validateNot(data, schema, dataPointerPath)
		|| null;
};

ValidatorContext.prototype.validateAllOf = function validateAllOf(data, schema, dataPointerPath) {
	if (schema.allOf === undefined) {
		return null;
	}
	var error;
	for (var i = 0; i < schema.allOf.length; i++) {
		var subSchema = schema.allOf[i];
		if (error = this.validateAll(data, subSchema, [], ["allOf", i], dataPointerPath)) {
			return error;
		}
	}
	return null;
};

ValidatorContext.prototype.validateAnyOf = function validateAnyOf(data, schema, dataPointerPath) {
	if (schema.anyOf === undefined) {
		return null;
	}
	var errors = [];
	var startErrorCount = this.errors.length;
	var oldUnknownPropertyPaths, oldKnownPropertyPaths;
	if (this.trackUnknownProperties) {
		oldUnknownPropertyPaths = this.unknownPropertyPaths;
		oldKnownPropertyPaths = this.knownPropertyPaths;
	}
	var errorAtEnd = true;
	for (var i = 0; i < schema.anyOf.length; i++) {
		if (this.trackUnknownProperties) {
			this.unknownPropertyPaths = {};
			this.knownPropertyPaths = {};
		}
		var subSchema = schema.anyOf[i];

		var errorCount = this.errors.length;
		var error = this.validateAll(data, subSchema, [], ["anyOf", i], dataPointerPath);

		if (error === null && errorCount === this.errors.length) {
			this.errors = this.errors.slice(0, startErrorCount);

			if (this.trackUnknownProperties) {
				for (var knownKey in this.knownPropertyPaths) {
					oldKnownPropertyPaths[knownKey] = true;
					delete oldUnknownPropertyPaths[knownKey];
				}
				for (var unknownKey in this.unknownPropertyPaths) {
					if (!oldKnownPropertyPaths[unknownKey]) {
						oldUnknownPropertyPaths[unknownKey] = true;
					}
				}
				// We need to continue looping so we catch all the property definitions, but we don't want to return an error
				errorAtEnd = false;
				continue;
			}

			return null;
		}
		if (error) {
			errors.push(error.prefixWith(null, "" + i).prefixWith(null, "anyOf"));
		}
	}
	if (this.trackUnknownProperties) {
		this.unknownPropertyPaths = oldUnknownPropertyPaths;
		this.knownPropertyPaths = oldKnownPropertyPaths;
	}
	if (errorAtEnd) {
		errors = errors.concat(this.errors.slice(startErrorCount));
		this.errors = this.errors.slice(0, startErrorCount);
		return this.createError(ErrorCodes.ANY_OF_MISSING, {}, "", "/anyOf", errors, data, schema);
	}
};

ValidatorContext.prototype.validateOneOf = function validateOneOf(data, schema, dataPointerPath) {
	if (schema.oneOf === undefined) {
		return null;
	}
	var validIndex = null;
	var errors = [];
	var startErrorCount = this.errors.length;
	var oldUnknownPropertyPaths, oldKnownPropertyPaths;
	if (this.trackUnknownProperties) {
		oldUnknownPropertyPaths = this.unknownPropertyPaths;
		oldKnownPropertyPaths = this.knownPropertyPaths;
	}
	for (var i = 0; i < schema.oneOf.length; i++) {
		if (this.trackUnknownProperties) {
			this.unknownPropertyPaths = {};
			this.knownPropertyPaths = {};
		}
		var subSchema = schema.oneOf[i];

		var errorCount = this.errors.length;
		var error = this.validateAll(data, subSchema, [], ["oneOf", i], dataPointerPath);

		if (error === null && errorCount === this.errors.length) {
			if (validIndex === null) {
				validIndex = i;
			} else {
				this.errors = this.errors.slice(0, startErrorCount);
				return this.createError(ErrorCodes.ONE_OF_MULTIPLE, {index1: validIndex, index2: i}, "", "/oneOf", null, data, schema);
			}
			if (this.trackUnknownProperties) {
				for (var knownKey in this.knownPropertyPaths) {
					oldKnownPropertyPaths[knownKey] = true;
					delete oldUnknownPropertyPaths[knownKey];
				}
				for (var unknownKey in this.unknownPropertyPaths) {
					if (!oldKnownPropertyPaths[unknownKey]) {
						oldUnknownPropertyPaths[unknownKey] = true;
					}
				}
			}
		} else if (error) {
			errors.push(error);
		}
	}
	if (this.trackUnknownProperties) {
		this.unknownPropertyPaths = oldUnknownPropertyPaths;
		this.knownPropertyPaths = oldKnownPropertyPaths;
	}
	if (validIndex === null) {
		errors = errors.concat(this.errors.slice(startErrorCount));
		this.errors = this.errors.slice(0, startErrorCount);
		return this.createError(ErrorCodes.ONE_OF_MISSING, {}, "", "/oneOf", errors, data, schema);
	} else {
		this.errors = this.errors.slice(0, startErrorCount);
	}
	return null;
};

ValidatorContext.prototype.validateNot = function validateNot(data, schema, dataPointerPath) {
	if (schema.not === undefined) {
		return null;
	}
	var oldErrorCount = this.errors.length;
	var oldUnknownPropertyPaths, oldKnownPropertyPaths;
	if (this.trackUnknownProperties) {
		oldUnknownPropertyPaths = this.unknownPropertyPaths;
		oldKnownPropertyPaths = this.knownPropertyPaths;
		this.unknownPropertyPaths = {};
		this.knownPropertyPaths = {};
	}
	var error = this.validateAll(data, schema.not, null, null, dataPointerPath);
	var notErrors = this.errors.slice(oldErrorCount);
	this.errors = this.errors.slice(0, oldErrorCount);
	if (this.trackUnknownProperties) {
		this.unknownPropertyPaths = oldUnknownPropertyPaths;
		this.knownPropertyPaths = oldKnownPropertyPaths;
	}
	if (error === null && notErrors.length === 0) {
		return this.createError(ErrorCodes.NOT_PASSED, {}, "", "/not", null, data, schema);
	}
	return null;
};

ValidatorContext.prototype.validateHypermedia = function validateCombinations(data, schema, dataPointerPath) {
	if (!schema.links) {
		return null;
	}
	var error;
	for (var i = 0; i < schema.links.length; i++) {
		var ldo = schema.links[i];
		if (ldo.rel === "describedby") {
			var template = new UriTemplate(ldo.href);
			var allPresent = true;
			for (var j = 0; j < template.varNames.length; j++) {
				if (!(template.varNames[j] in data)) {
					allPresent = false;
					break;
				}
			}
			if (allPresent) {
				var schemaUrl = template.fillFromObject(data);
				var subSchema = {"$ref": schemaUrl};
				if (error = this.validateAll(data, subSchema, [], ["links", i], dataPointerPath)) {
					return error;
				}
			}
		}
	}
};

// parseURI() and resolveUrl() are from https://gist.github.com/1088850
//   -  released as public domain by author ("Yaffle") - see comments on gist

function parseURI(url) {
	var m = String(url).replace(/^\s+|\s+$/g, '').match(/^([^:\/?#]+:)?(\/\/(?:[^:@]*(?::[^:@]*)?@)?(([^:\/?#]*)(?::(\d*))?))?([^?#]*)(\?[^#]*)?(#[\s\S]*)?/);
	// authority = '//' + user + ':' + pass '@' + hostname + ':' port
	return (m ? {
		href     : m[0] || '',
		protocol : m[1] || '',
		authority: m[2] || '',
		host     : m[3] || '',
		hostname : m[4] || '',
		port     : m[5] || '',
		pathname : m[6] || '',
		search   : m[7] || '',
		hash     : m[8] || ''
	} : null);
}

function resolveUrl(base, href) {// RFC 3986

	function removeDotSegments(input) {
		var output = [];
		input.replace(/^(\.\.?(\/|$))+/, '')
			.replace(/\/(\.(\/|$))+/g, '/')
			.replace(/\/\.\.$/, '/../')
			.replace(/\/?[^\/]*/g, function (p) {
				if (p === '/..') {
					output.pop();
				} else {
					output.push(p);
				}
		});
		return output.join('').replace(/^\//, input.charAt(0) === '/' ? '/' : '');
	}

	href = parseURI(href || '');
	base = parseURI(base || '');

	return !href || !base ? null : (href.protocol || base.protocol) +
		(href.protocol || href.authority ? href.authority : base.authority) +
		removeDotSegments(href.protocol || href.authority || href.pathname.charAt(0) === '/' ? href.pathname : (href.pathname ? ((base.authority && !base.pathname ? '/' : '') + base.pathname.slice(0, base.pathname.lastIndexOf('/') + 1) + href.pathname) : base.pathname)) +
		(href.protocol || href.authority || href.pathname ? href.search : (href.search || base.search)) +
		href.hash;
}

function getDocumentUri(uri) {
	return uri.split('#')[0];
}
function normSchema(schema, baseUri) {
	if (schema && typeof schema === "object") {
		if (baseUri === undefined) {
			baseUri = schema.id;
		} else if (typeof schema.id === "string") {
			baseUri = resolveUrl(baseUri, schema.id);
			schema.id = baseUri;
		}
		if (Array.isArray(schema)) {
			for (var i = 0; i < schema.length; i++) {
				normSchema(schema[i], baseUri);
			}
		} else {
			if (typeof schema['$ref'] === "string") {
				schema['$ref'] = resolveUrl(baseUri, schema['$ref']);
			}
			for (var key in schema) {
				if (key !== "enum") {
					normSchema(schema[key], baseUri);
				}
			}
		}
	}
}

function defaultErrorReporter(language) {
	language = language || 'en';

	var errorMessages = languages[language];

	return function (error) {
		var messageTemplate = errorMessages[error.code] || ErrorMessagesDefault[error.code];
		if (typeof messageTemplate !== 'string') {
			return "Unknown error code " + error.code + ": " + JSON.stringify(error.messageParams);
		}
		var messageParams = error.params;
		// Adapted from Crockford's supplant()
		return messageTemplate.replace(/\{([^{}]*)\}/g, function (whole, varName) {
			var subValue = messageParams[varName];
			return typeof subValue === 'string' || typeof subValue === 'number' ? subValue : whole;
		});
	};
}

var ErrorCodes = {
	INVALID_TYPE: 0,
	ENUM_MISMATCH: 1,
	ANY_OF_MISSING: 10,
	ONE_OF_MISSING: 11,
	ONE_OF_MULTIPLE: 12,
	NOT_PASSED: 13,
	// Numeric errors
	NUMBER_MULTIPLE_OF: 100,
	NUMBER_MINIMUM: 101,
	NUMBER_MINIMUM_EXCLUSIVE: 102,
	NUMBER_MAXIMUM: 103,
	NUMBER_MAXIMUM_EXCLUSIVE: 104,
	NUMBER_NOT_A_NUMBER: 105,
	// String errors
	STRING_LENGTH_SHORT: 200,
	STRING_LENGTH_LONG: 201,
	STRING_PATTERN: 202,
	// Object errors
	OBJECT_PROPERTIES_MINIMUM: 300,
	OBJECT_PROPERTIES_MAXIMUM: 301,
	OBJECT_REQUIRED: 302,
	OBJECT_ADDITIONAL_PROPERTIES: 303,
	OBJECT_DEPENDENCY_KEY: 304,
	// Array errors
	ARRAY_LENGTH_SHORT: 400,
	ARRAY_LENGTH_LONG: 401,
	ARRAY_UNIQUE: 402,
	ARRAY_ADDITIONAL_ITEMS: 403,
	// Custom/user-defined errors
	FORMAT_CUSTOM: 500,
	KEYWORD_CUSTOM: 501,
	// Schema structure
	CIRCULAR_REFERENCE: 600,
	// Non-standard validation options
	UNKNOWN_PROPERTY: 1000
};
var ErrorCodeLookup = {};
for (var key in ErrorCodes) {
	ErrorCodeLookup[ErrorCodes[key]] = key;
}
var ErrorMessagesDefault = {
	INVALID_TYPE: "Invalid type: {type} (expected {expected})",
	ENUM_MISMATCH: "No enum match for: {value}",
	ANY_OF_MISSING: "Data does not match any schemas from \"anyOf\"",
	ONE_OF_MISSING: "Data does not match any schemas from \"oneOf\"",
	ONE_OF_MULTIPLE: "Data is valid against more than one schema from \"oneOf\": indices {index1} and {index2}",
	NOT_PASSED: "Data matches schema from \"not\"",
	// Numeric errors
	NUMBER_MULTIPLE_OF: "Value {value} is not a multiple of {multipleOf}",
	NUMBER_MINIMUM: "Value {value} is less than minimum {minimum}",
	NUMBER_MINIMUM_EXCLUSIVE: "Value {value} is equal to exclusive minimum {minimum}",
	NUMBER_MAXIMUM: "Value {value} is greater than maximum {maximum}",
	NUMBER_MAXIMUM_EXCLUSIVE: "Value {value} is equal to exclusive maximum {maximum}",
	NUMBER_NOT_A_NUMBER: "Value {value} is not a valid number",
	// String errors
	STRING_LENGTH_SHORT: "String is too short ({length} chars), minimum {minimum}",
	STRING_LENGTH_LONG: "String is too long ({length} chars), maximum {maximum}",
	STRING_PATTERN: "String does not match pattern: {pattern}",
	// Object errors
	OBJECT_PROPERTIES_MINIMUM: "Too few properties defined ({propertyCount}), minimum {minimum}",
	OBJECT_PROPERTIES_MAXIMUM: "Too many properties defined ({propertyCount}), maximum {maximum}",
	OBJECT_REQUIRED: "Missing required property: {key}",
	OBJECT_ADDITIONAL_PROPERTIES: "Additional properties not allowed",
	OBJECT_DEPENDENCY_KEY: "Dependency failed - key must exist: {missing} (due to key: {key})",
	// Array errors
	ARRAY_LENGTH_SHORT: "Array is too short ({length}), minimum {minimum}",
	ARRAY_LENGTH_LONG: "Array is too long ({length}), maximum {maximum}",
	ARRAY_UNIQUE: "Array items are not unique (indices {match1} and {match2})",
	ARRAY_ADDITIONAL_ITEMS: "Additional items not allowed",
	// Format errors
	FORMAT_CUSTOM: "Format validation failed ({message})",
	KEYWORD_CUSTOM: "Keyword failed: {key} ({message})",
	// Schema structure
	CIRCULAR_REFERENCE: "Circular $refs: {urls}",
	// Non-standard validation options
	UNKNOWN_PROPERTY: "Unknown property (not in schema)"
};

function ValidationError(code, params, dataPath, schemaPath, subErrors) {
	Error.call(this);
	if (code === undefined) {
		throw new Error ("No error code supplied: " + schemaPath);
	}
	this.message = '';
	this.params = params;
	this.code = code;
	this.dataPath = dataPath || "";
	this.schemaPath = schemaPath || "";
	this.subErrors = subErrors || null;

	var err = new Error(this.message);
	this.stack = err.stack || err.stacktrace;
	if (!this.stack) {
		try {
			throw err;
		}
		catch(err) {
			this.stack = err.stack || err.stacktrace;
		}
	}
}
ValidationError.prototype = Object.create(Error.prototype);
ValidationError.prototype.constructor = ValidationError;
ValidationError.prototype.name = 'ValidationError';

ValidationError.prototype.prefixWith = function (dataPrefix, schemaPrefix) {
	if (dataPrefix !== null) {
		dataPrefix = dataPrefix.replace(/~/g, "~0").replace(/\//g, "~1");
		this.dataPath = "/" + dataPrefix + this.dataPath;
	}
	if (schemaPrefix !== null) {
		schemaPrefix = schemaPrefix.replace(/~/g, "~0").replace(/\//g, "~1");
		this.schemaPath = "/" + schemaPrefix + this.schemaPath;
	}
	if (this.subErrors !== null) {
		for (var i = 0; i < this.subErrors.length; i++) {
			this.subErrors[i].prefixWith(dataPrefix, schemaPrefix);
		}
	}
	return this;
};

function isTrustedUrl(baseUrl, testUrl) {
	if(testUrl.substring(0, baseUrl.length) === baseUrl){
		var remainder = testUrl.substring(baseUrl.length);
		if ((testUrl.length > 0 && testUrl.charAt(baseUrl.length - 1) === "/")
			|| remainder.charAt(0) === "#"
			|| remainder.charAt(0) === "?") {
			return true;
		}
	}
	return false;
}

var languages = {};
function createApi(language) {
	var globalContext = new ValidatorContext();
	var currentLanguage;
	var customErrorReporter;
	var api = {
		setErrorReporter: function (reporter) {
			if (typeof reporter === 'string') {
				return this.language(reporter);
			}
			customErrorReporter = reporter;
			return true;
		},
		addFormat: function () {
			globalContext.addFormat.apply(globalContext, arguments);
		},
		language: function (code) {
			if (!code) {
				return currentLanguage;
			}
			if (!languages[code]) {
				code = code.split('-')[0]; // fall back to base language
			}
			if (languages[code]) {
				currentLanguage = code;
				return code; // so you can tell if fall-back has happened
			}
			return false;
		},
		addLanguage: function (code, messageMap) {
			var key;
			for (key in ErrorCodes) {
				if (messageMap[key] && !messageMap[ErrorCodes[key]]) {
					messageMap[ErrorCodes[key]] = messageMap[key];
				}
			}
			var rootCode = code.split('-')[0];
			if (!languages[rootCode]) { // use for base language if not yet defined
				languages[code] = messageMap;
				languages[rootCode] = messageMap;
			} else {
				languages[code] = Object.create(languages[rootCode]);
				for (key in messageMap) {
					if (typeof languages[rootCode][key] === 'undefined') {
						languages[rootCode][key] = messageMap[key];
					}
					languages[code][key] = messageMap[key];
				}
			}
			return this;
		},
		freshApi: function (language) {
			var result = createApi();
			if (language) {
				result.language(language);
			}
			return result;
		},
		validate: function (data, schema, checkRecursive, banUnknownProperties) {
			var def = defaultErrorReporter(currentLanguage);
			var errorReporter = customErrorReporter ? function (error, data, schema) {
				return customErrorReporter(error, data, schema) || def(error, data, schema);
			} : def;
			var context = new ValidatorContext(globalContext, false, errorReporter, checkRecursive, banUnknownProperties);
			if (typeof schema === "string") {
				schema = {"$ref": schema};
			}
			context.addSchema("", schema);
			var error = context.validateAll(data, schema, null, null, "");
			if (!error && banUnknownProperties) {
				error = context.banUnknownProperties(data, schema);
			}
			this.error = error;
			this.missing = context.missing;
			this.valid = (error === null);
			return this.valid;
		},
		validateResult: function () {
			var result = {toString: function () {
				return this.valid ? 'valid' : this.error.message;
			}};
			this.validate.apply(result, arguments);
			return result;
		},
		validateMultiple: function (data, schema, checkRecursive, banUnknownProperties) {
			var def = defaultErrorReporter(currentLanguage);
			var errorReporter = customErrorReporter ? function (error, data, schema) {
				return customErrorReporter(error, data, schema) || def(error, data, schema);
			} : def;
			var context = new ValidatorContext(globalContext, true, errorReporter, checkRecursive, banUnknownProperties);
			if (typeof schema === "string") {
				schema = {"$ref": schema};
			}
			context.addSchema("", schema);
			context.validateAll(data, schema, null, null, "");
			if (banUnknownProperties) {
				context.banUnknownProperties(data, schema);
			}
			var result = {toString: function () {
				return this.valid ? 'valid' : this.error.message;
			}};
			result.errors = context.errors;
			result.missing = context.missing;
			result.valid = (result.errors.length === 0);
			return result;
		},
		addSchema: function () {
			return globalContext.addSchema.apply(globalContext, arguments);
		},
		getSchema: function () {
			return globalContext.getSchema.apply(globalContext, arguments);
		},
		getSchemaMap: function () {
			return globalContext.getSchemaMap.apply(globalContext, arguments);
		},
		getSchemaUris: function () {
			return globalContext.getSchemaUris.apply(globalContext, arguments);
		},
		getMissingUris: function () {
			return globalContext.getMissingUris.apply(globalContext, arguments);
		},
		dropSchemas: function () {
			globalContext.dropSchemas.apply(globalContext, arguments);
		},
		defineKeyword: function () {
			globalContext.defineKeyword.apply(globalContext, arguments);
		},
		defineError: function (codeName, codeNumber, defaultMessage) {
			if (typeof codeName !== 'string' || !/^[A-Z]+(_[A-Z]+)*$/.test(codeName)) {
				throw new Error('Code name must be a string in UPPER_CASE_WITH_UNDERSCORES');
			}
			if (typeof codeNumber !== 'number' || codeNumber%1 !== 0 || codeNumber < 10000) {
				throw new Error('Code number must be an integer > 10000');
			}
			if (typeof ErrorCodes[codeName] !== 'undefined') {
				throw new Error('Error already defined: ' + codeName + ' as ' + ErrorCodes[codeName]);
			}
			if (typeof ErrorCodeLookup[codeNumber] !== 'undefined') {
				throw new Error('Error code already used: ' + ErrorCodeLookup[codeNumber] + ' as ' + codeNumber);
			}
			ErrorCodes[codeName] = codeNumber;
			ErrorCodeLookup[codeNumber] = codeName;
			ErrorMessagesDefault[codeName] = ErrorMessagesDefault[codeNumber] = defaultMessage;
			for (var langCode in languages) {
				var language = languages[langCode];
				if (language[codeName]) {
					language[codeNumber] = language[codeNumber] || language[codeName];
				}
			}
		},
		reset: function () {
			globalContext.reset();
			this.error = null;
			this.missing = [];
			this.valid = true;
		},
		missing: [],
		error: null,
		valid: true,
		normSchema: normSchema,
		resolveUrl: resolveUrl,
		getDocumentUri: getDocumentUri,
		errorCodes: ErrorCodes
	};
	api.language(language || 'en');
	return api;
}

var tv4 = createApi();
tv4.addLanguage('en-gb', ErrorMessagesDefault);

//legacy property
tv4.tv4 = tv4;

return tv4; // used by _header.js to globalise.

}));
});

/**
 * Returns a `Readable` / `Writable` Svelte Store, that validates values set to the Store, and retrieved via subscriptions, against a JSON Schema
 *
 * **NOTE**: If a non-Store value is passed as `store`, then it will be wrapped in a `Writable` Store
 *
 * ```javascript
 * import {schema} from "svelte-commons/lib/stores/shared";
 *
 * // Here, we're defining our JSONSchema that will validate our I/O
 * //
 * // Check out for more information: https://json-schema.org/
 * const person_schema = {
 *     $id: "https://example.com/person.schema.json",
 *     $schema: "http://json-schema.org/draft-07/schema#",
 *     title: "Person",
 *     type: "object",
 *     properties: {
 *         firstName: {
 *             type: "string",
 *             description: "The person's first name."
 *         },
 *
 *         lastName: {
 *             type: "string",
 *             description: "The person's last name."
 *         },
 *
 *         age: {
 *             description: "Age in years which must be equal to or greater than zero.",
 *             type: "integer",
 *             minimum: 0
 *         }
 *     }
 * };
 *
 * // We need to seed our with an initial value, so here's a sample person
 * const initial_person = {
 *     firstName: "John",
 *     lastName: "Smith",
 *     age: 32
 * };
 *
 * // Now we just pass our initial data and our JSON Schema in
 * const store = schema(initial_person, person_schema);
 *
 * // To demonstrate changes, we need to log each change
 * store.subscribe(console.log); // logs: `{firstName: "John", lastName: "Smith", age: 32}`
 *
 * // Here, we're copying our initial "Person", then updating its age to `21`
 * store.set({...initial_person, age: 21}); // logs: `{firstName: "John", lastName: "Smith", age: 21}`
 *
 * // Same as above, but using a negative `.age` to have an exception thrown
 * store.set({...initial_person, age: -60}); // throws exception: `Uncaught TypeError: bad change 'Person/age' to Schema Store (Value -60 is less than minimum 0)`
 * ```
 *
 * @param store
 * @param schema
 * @param start
 */
function schema(store, json_schema, start) {
    // Need to support raw non-Store values being passed, so
    // we wrap them in a `Writable` Store
    if (!is_readable(store))
        store = writable(store, start);
    function _validate(value) {
        if (tv4.validate(value, json_schema))
            return value;
        var _a = json_schema.title, title = _a === void 0 ? "UntitledSchema" : _a;
        var _b = tv4.error, dataPath = _b.dataPath, message = _b.message;
        throw new TypeError("bad change '" + title + dataPath + "' to Schema Store (" + message + ")");
    }
    if (is_writable(store))
        return overlay(store, _validate, _validate);
    return derived(store, _validate);
}

var __read$5 = (undefined && undefined.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
/**
 * Returns a new [[IEvent]] instance, for handling event publishing in non-DOM related contexts
 * @param start
 */
function event(start) {
    var subscribers = [];
    var stop;
    var dispatch = function (details) {
        if (subscribers.length > 0) {
            for (var index = 0; index < subscribers.length; index++) {
                var _a = __read$5(subscribers[index], 1), run = _a[0];
                run(details);
            }
        }
    };
    var subscribe = function (run) {
        var subscriber = [run];
        subscribers.push(subscriber);
        if (start && subscribers.length === 1)
            stop = start(dispatch);
        return function () {
            var index = subscribers.indexOf(subscriber);
            if (index > 0) {
                subscribers.splice(index, 1);
                if (stop && subscribers.length == 0) {
                    stop();
                    stop = null;
                }
            }
        };
    };
    return { dispatch: dispatch, subscribe: subscribe };
}

export { IS_BROWSER, collection, comparator_entries, diff_count, event, filter_collection, find_collection, format_css_declaration, format_css_reference, format_css_variable, format_dash_key, format_tokens, format_url, get_location_url, goto, hash, immutable, is_falsy, is_internal_href, is_readable, is_writable, join, local_storage, make_memory_storage, make_router, map_classes, map_collection, map_style, map_variables, match_predicate, merged, noop, normalize_pathname, overlay, parse_query, pathname, query_param, reject_collection, router, schema, search, session_storage, storage, update_location_url, update_object };

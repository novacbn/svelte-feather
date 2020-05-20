function format_class_name(value) {
    return value
        .replace(/^\D/, (value) => {
            return value.toUpperCase();
        })
        .replace(/[-_]([a-z0-9])/g, (value) => {
            return value.substr(1, 1).toUpperCase();
        });
}

function format_display_name(value) {
    return value
        .replace(/^\D/, (value) => {
            return value.toUpperCase();
        })
        .replace(/[-_]([a-z0-9])/g, (value) => {
            return " " + value.substr(1, 1).toUpperCase();
        });
}

module.exports = {
    format_class_name,
    format_display_name
};

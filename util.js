/**
 * Represents the standard size values end-developers can use as icon sizes
 */
export const ICON_SIZES = {
    default: "default",

    tiny: "tiny",
    small: "small",

    medium: "medium",

    large: "large",
    huge: "huge"
};

/**
 * Represents the standard size tiers icons can be
 */
export const ICON_SIZE_UNITS = {
    [ICON_SIZES.default]: "1em",

    [ICON_SIZES.tiny]: "12px",
    [ICON_SIZES.small]: "16px",

    [ICON_SIZES.medium]: "24px",

    [ICON_SIZES.large]: "32px",
    [ICON_SIZES.huge]: "48px"
};

/**
 * Returns if the value is a CSS sizing unit primitive
 * @param {string} value
 */
export function is_size_primitive(value) {
    return (
        value.endsWith("%") || value.endsWith("px") || value.endsWith("em") || value.endsWith("rem")
    );
}

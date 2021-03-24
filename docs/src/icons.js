import {Icons} from "svelte-feather/components";

export const ICON_DEFAULTS = {
    color: "currentColor",
    fill: "none",
    linecap: "round",
    linejoin: "round",
    size: feather.ICON_SIZES.default,
    width: "2px"
};

export const ICON_MAP = Icons;

export const ICON_MANIFEST = [
    {
        component: feather.Activity,
        class_name: "Activity",
        display_name: "Activity",
        name: "activity",
        tags: ["pulse","health","action","motion"]
    },

    {
        component: feather.Airplay,
        class_name: "Airplay",
        display_name: "Airplay",
        name: "airplay",
        tags: ["stream","cast","mirroring"]
    },

    {
        component: feather.AlertCircle,
        class_name: "AlertCircle",
        display_name: "Alert Circle",
        name: "alert-circle",
        tags: ["warning","alert","danger"]
    },

    {
        component: feather.AlertOctagon,
        class_name: "AlertOctagon",
        display_name: "Alert Octagon",
        name: "alert-octagon",
        tags: ["warning","alert","danger"]
    },

    {
        component: feather.AlertTriangle,
        class_name: "AlertTriangle",
        display_name: "Alert Triangle",
        name: "alert-triangle",
        tags: ["warning","alert","danger"]
    },

    {
        component: feather.AlignCenter,
        class_name: "AlignCenter",
        display_name: "Align Center",
        name: "align-center",
        tags: ["text alignment","center"]
    },

    {
        component: feather.AlignJustify,
        class_name: "AlignJustify",
        display_name: "Align Justify",
        name: "align-justify",
        tags: ["text alignment","justified"]
    },

    {
        component: feather.AlignLeft,
        class_name: "AlignLeft",
        display_name: "Align Left",
        name: "align-left",
        tags: ["text alignment","left"]
    },

    {
        component: feather.AlignRight,
        class_name: "AlignRight",
        display_name: "Align Right",
        name: "align-right",
        tags: ["text alignment","right"]
    },

    {
        component: feather.Anchor,
        class_name: "Anchor",
        display_name: "Anchor",
        name: "anchor",
        tags: []
    },

    {
        component: feather.Aperture,
        class_name: "Aperture",
        display_name: "Aperture",
        name: "aperture",
        tags: ["camera","photo"]
    },

    {
        component: feather.Archive,
        class_name: "Archive",
        display_name: "Archive",
        name: "archive",
        tags: ["index","box"]
    },

    {
        component: feather.ArrowDownCircle,
        class_name: "ArrowDownCircle",
        display_name: "Arrow Down Circle",
        name: "arrow-down-circle",
        tags: []
    },

    {
        component: feather.ArrowDownLeft,
        class_name: "ArrowDownLeft",
        display_name: "Arrow Down Left",
        name: "arrow-down-left",
        tags: []
    },

    {
        component: feather.ArrowDownRight,
        class_name: "ArrowDownRight",
        display_name: "Arrow Down Right",
        name: "arrow-down-right",
        tags: []
    },

    {
        component: feather.ArrowDown,
        class_name: "ArrowDown",
        display_name: "Arrow Down",
        name: "arrow-down",
        tags: []
    },

    {
        component: feather.ArrowLeftCircle,
        class_name: "ArrowLeftCircle",
        display_name: "Arrow Left Circle",
        name: "arrow-left-circle",
        tags: []
    },

    {
        component: feather.ArrowLeft,
        class_name: "ArrowLeft",
        display_name: "Arrow Left",
        name: "arrow-left",
        tags: []
    },

    {
        component: feather.ArrowRightCircle,
        class_name: "ArrowRightCircle",
        display_name: "Arrow Right Circle",
        name: "arrow-right-circle",
        tags: []
    },

    {
        component: feather.ArrowRight,
        class_name: "ArrowRight",
        display_name: "Arrow Right",
        name: "arrow-right",
        tags: []
    },

    {
        component: feather.ArrowUpCircle,
        class_name: "ArrowUpCircle",
        display_name: "Arrow Up Circle",
        name: "arrow-up-circle",
        tags: []
    },

    {
        component: feather.ArrowUpLeft,
        class_name: "ArrowUpLeft",
        display_name: "Arrow Up Left",
        name: "arrow-up-left",
        tags: []
    },

    {
        component: feather.ArrowUpRight,
        class_name: "ArrowUpRight",
        display_name: "Arrow Up Right",
        name: "arrow-up-right",
        tags: []
    },

    {
        component: feather.ArrowUp,
        class_name: "ArrowUp",
        display_name: "Arrow Up",
        name: "arrow-up",
        tags: []
    },

    {
        component: feather.AtSign,
        class_name: "AtSign",
        display_name: "At Sign",
        name: "at-sign",
        tags: ["mention","at","email","message"]
    },

    {
        component: feather.Award,
        class_name: "Award",
        display_name: "Award",
        name: "award",
        tags: ["achievement","badge"]
    },

    {
        component: feather.BarChart2,
        class_name: "BarChart2",
        display_name: "Bar Chart 2",
        name: "bar-chart-2",
        tags: ["statistics","diagram","graph"]
    },

    {
        component: feather.BarChart,
        class_name: "BarChart",
        display_name: "Bar Chart",
        name: "bar-chart",
        tags: ["statistics","diagram","graph"]
    },

    {
        component: feather.BatteryCharging,
        class_name: "BatteryCharging",
        display_name: "Battery Charging",
        name: "battery-charging",
        tags: ["power","electricity"]
    },

    {
        component: feather.Battery,
        class_name: "Battery",
        display_name: "Battery",
        name: "battery",
        tags: ["power","electricity"]
    },

    {
        component: feather.BellOff,
        class_name: "BellOff",
        display_name: "Bell Off",
        name: "bell-off",
        tags: ["alarm","notification","silent"]
    },

    {
        component: feather.Bell,
        class_name: "Bell",
        display_name: "Bell",
        name: "bell",
        tags: ["alarm","notification","sound"]
    },

    {
        component: feather.Bluetooth,
        class_name: "Bluetooth",
        display_name: "Bluetooth",
        name: "bluetooth",
        tags: ["wireless"]
    },

    {
        component: feather.Bold,
        class_name: "Bold",
        display_name: "Bold",
        name: "bold",
        tags: []
    },

    {
        component: feather.BookOpen,
        class_name: "BookOpen",
        display_name: "Book Open",
        name: "book-open",
        tags: ["read","library"]
    },

    {
        component: feather.Book,
        class_name: "Book",
        display_name: "Book",
        name: "book",
        tags: ["read","dictionary","booklet","magazine","library"]
    },

    {
        component: feather.Bookmark,
        class_name: "Bookmark",
        display_name: "Bookmark",
        name: "bookmark",
        tags: ["read","clip","marker","tag"]
    },

    {
        component: feather.Box,
        class_name: "Box",
        display_name: "Box",
        name: "box",
        tags: ["cube"]
    },

    {
        component: feather.Briefcase,
        class_name: "Briefcase",
        display_name: "Briefcase",
        name: "briefcase",
        tags: ["work","bag","baggage","folder"]
    },

    {
        component: feather.Calendar,
        class_name: "Calendar",
        display_name: "Calendar",
        name: "calendar",
        tags: ["date"]
    },

    {
        component: feather.CameraOff,
        class_name: "CameraOff",
        display_name: "Camera Off",
        name: "camera-off",
        tags: []
    },

    {
        component: feather.Camera,
        class_name: "Camera",
        display_name: "Camera",
        name: "camera",
        tags: ["photo"]
    },

    {
        component: feather.Cast,
        class_name: "Cast",
        display_name: "Cast",
        name: "cast",
        tags: ["chromecast","airplay"]
    },

    {
        component: feather.CheckCircle,
        class_name: "CheckCircle",
        display_name: "Check Circle",
        name: "check-circle",
        tags: []
    },

    {
        component: feather.CheckSquare,
        class_name: "CheckSquare",
        display_name: "Check Square",
        name: "check-square",
        tags: []
    },

    {
        component: feather.Check,
        class_name: "Check",
        display_name: "Check",
        name: "check",
        tags: []
    },

    {
        component: feather.ChevronDown,
        class_name: "ChevronDown",
        display_name: "Chevron Down",
        name: "chevron-down",
        tags: []
    },

    {
        component: feather.ChevronLeft,
        class_name: "ChevronLeft",
        display_name: "Chevron Left",
        name: "chevron-left",
        tags: []
    },

    {
        component: feather.ChevronRight,
        class_name: "ChevronRight",
        display_name: "Chevron Right",
        name: "chevron-right",
        tags: []
    },

    {
        component: feather.ChevronUp,
        class_name: "ChevronUp",
        display_name: "Chevron Up",
        name: "chevron-up",
        tags: []
    },

    {
        component: feather.ChevronsDown,
        class_name: "ChevronsDown",
        display_name: "Chevrons Down",
        name: "chevrons-down",
        tags: []
    },

    {
        component: feather.ChevronsLeft,
        class_name: "ChevronsLeft",
        display_name: "Chevrons Left",
        name: "chevrons-left",
        tags: []
    },

    {
        component: feather.ChevronsRight,
        class_name: "ChevronsRight",
        display_name: "Chevrons Right",
        name: "chevrons-right",
        tags: []
    },

    {
        component: feather.ChevronsUp,
        class_name: "ChevronsUp",
        display_name: "Chevrons Up",
        name: "chevrons-up",
        tags: []
    },

    {
        component: feather.Chrome,
        class_name: "Chrome",
        display_name: "Chrome",
        name: "chrome",
        tags: []
    },

    {
        component: feather.Circle,
        class_name: "Circle",
        display_name: "Circle",
        name: "circle",
        tags: ["off","zero","record"]
    },

    {
        component: feather.Clipboard,
        class_name: "Clipboard",
        display_name: "Clipboard",
        name: "clipboard",
        tags: ["copy"]
    },

    {
        component: feather.Clock,
        class_name: "Clock",
        display_name: "Clock",
        name: "clock",
        tags: ["time","watch","alarm"]
    },

    {
        component: feather.CloudDrizzle,
        class_name: "CloudDrizzle",
        display_name: "Cloud Drizzle",
        name: "cloud-drizzle",
        tags: ["weather","shower"]
    },

    {
        component: feather.CloudLightning,
        class_name: "CloudLightning",
        display_name: "Cloud Lightning",
        name: "cloud-lightning",
        tags: ["weather","bolt"]
    },

    {
        component: feather.CloudOff,
        class_name: "CloudOff",
        display_name: "Cloud Off",
        name: "cloud-off",
        tags: []
    },

    {
        component: feather.CloudRain,
        class_name: "CloudRain",
        display_name: "Cloud Rain",
        name: "cloud-rain",
        tags: ["weather"]
    },

    {
        component: feather.CloudSnow,
        class_name: "CloudSnow",
        display_name: "Cloud Snow",
        name: "cloud-snow",
        tags: ["weather","blizzard"]
    },

    {
        component: feather.Cloud,
        class_name: "Cloud",
        display_name: "Cloud",
        name: "cloud",
        tags: ["weather"]
    },

    {
        component: feather.Code,
        class_name: "Code",
        display_name: "Code",
        name: "code",
        tags: ["source","programming"]
    },

    {
        component: feather.Codepen,
        class_name: "Codepen",
        display_name: "Codepen",
        name: "codepen",
        tags: ["logo"]
    },

    {
        component: feather.Codesandbox,
        class_name: "Codesandbox",
        display_name: "Codesandbox",
        name: "codesandbox",
        tags: ["logo"]
    },

    {
        component: feather.Coffee,
        class_name: "Coffee",
        display_name: "Coffee",
        name: "coffee",
        tags: ["drink","cup","mug","tea","cafe","hot","beverage"]
    },

    {
        component: feather.Columns,
        class_name: "Columns",
        display_name: "Columns",
        name: "columns",
        tags: ["layout"]
    },

    {
        component: feather.Command,
        class_name: "Command",
        display_name: "Command",
        name: "command",
        tags: ["keyboard","cmd","terminal","prompt"]
    },

    {
        component: feather.Compass,
        class_name: "Compass",
        display_name: "Compass",
        name: "compass",
        tags: ["navigation","safari","travel","direction"]
    },

    {
        component: feather.Copy,
        class_name: "Copy",
        display_name: "Copy",
        name: "copy",
        tags: ["clone","duplicate"]
    },

    {
        component: feather.CornerDownLeft,
        class_name: "CornerDownLeft",
        display_name: "Corner Down Left",
        name: "corner-down-left",
        tags: ["arrow","return"]
    },

    {
        component: feather.CornerDownRight,
        class_name: "CornerDownRight",
        display_name: "Corner Down Right",
        name: "corner-down-right",
        tags: ["arrow"]
    },

    {
        component: feather.CornerLeftDown,
        class_name: "CornerLeftDown",
        display_name: "Corner Left Down",
        name: "corner-left-down",
        tags: ["arrow"]
    },

    {
        component: feather.CornerLeftUp,
        class_name: "CornerLeftUp",
        display_name: "Corner Left Up",
        name: "corner-left-up",
        tags: ["arrow"]
    },

    {
        component: feather.CornerRightDown,
        class_name: "CornerRightDown",
        display_name: "Corner Right Down",
        name: "corner-right-down",
        tags: ["arrow"]
    },

    {
        component: feather.CornerRightUp,
        class_name: "CornerRightUp",
        display_name: "Corner Right Up",
        name: "corner-right-up",
        tags: ["arrow"]
    },

    {
        component: feather.CornerUpLeft,
        class_name: "CornerUpLeft",
        display_name: "Corner Up Left",
        name: "corner-up-left",
        tags: ["arrow"]
    },

    {
        component: feather.CornerUpRight,
        class_name: "CornerUpRight",
        display_name: "Corner Up Right",
        name: "corner-up-right",
        tags: ["arrow"]
    },

    {
        component: feather.Cpu,
        class_name: "Cpu",
        display_name: "Cpu",
        name: "cpu",
        tags: ["processor","technology"]
    },

    {
        component: feather.CreditCard,
        class_name: "CreditCard",
        display_name: "Credit Card",
        name: "credit-card",
        tags: ["purchase","payment","cc"]
    },

    {
        component: feather.Crop,
        class_name: "Crop",
        display_name: "Crop",
        name: "crop",
        tags: ["photo","image"]
    },

    {
        component: feather.Crosshair,
        class_name: "Crosshair",
        display_name: "Crosshair",
        name: "crosshair",
        tags: ["aim","target"]
    },

    {
        component: feather.Database,
        class_name: "Database",
        display_name: "Database",
        name: "database",
        tags: ["storage","memory"]
    },

    {
        component: feather.Delete,
        class_name: "Delete",
        display_name: "Delete",
        name: "delete",
        tags: ["remove"]
    },

    {
        component: feather.Disc,
        class_name: "Disc",
        display_name: "Disc",
        name: "disc",
        tags: ["album","cd","dvd","music"]
    },

    {
        component: feather.DivideCircle,
        class_name: "DivideCircle",
        display_name: "Divide Circle",
        name: "divide-circle",
        tags: []
    },

    {
        component: feather.DivideSquare,
        class_name: "DivideSquare",
        display_name: "Divide Square",
        name: "divide-square",
        tags: []
    },

    {
        component: feather.Divide,
        class_name: "Divide",
        display_name: "Divide",
        name: "divide",
        tags: []
    },

    {
        component: feather.DollarSign,
        class_name: "DollarSign",
        display_name: "Dollar Sign",
        name: "dollar-sign",
        tags: ["currency","money","payment"]
    },

    {
        component: feather.DownloadCloud,
        class_name: "DownloadCloud",
        display_name: "Download Cloud",
        name: "download-cloud",
        tags: []
    },

    {
        component: feather.Download,
        class_name: "Download",
        display_name: "Download",
        name: "download",
        tags: []
    },

    {
        component: feather.Dribbble,
        class_name: "Dribbble",
        display_name: "Dribbble",
        name: "dribbble",
        tags: []
    },

    {
        component: feather.Droplet,
        class_name: "Droplet",
        display_name: "Droplet",
        name: "droplet",
        tags: ["water"]
    },

    {
        component: feather.Edit2,
        class_name: "Edit2",
        display_name: "Edit 2",
        name: "edit-2",
        tags: ["pencil","change"]
    },

    {
        component: feather.Edit3,
        class_name: "Edit3",
        display_name: "Edit 3",
        name: "edit-3",
        tags: ["pencil","change"]
    },

    {
        component: feather.Edit,
        class_name: "Edit",
        display_name: "Edit",
        name: "edit",
        tags: ["pencil","change"]
    },

    {
        component: feather.ExternalLink,
        class_name: "ExternalLink",
        display_name: "External Link",
        name: "external-link",
        tags: ["outbound"]
    },

    {
        component: feather.EyeOff,
        class_name: "EyeOff",
        display_name: "Eye Off",
        name: "eye-off",
        tags: ["view","watch","hide","hidden"]
    },

    {
        component: feather.Eye,
        class_name: "Eye",
        display_name: "Eye",
        name: "eye",
        tags: ["view","watch"]
    },

    {
        component: feather.Facebook,
        class_name: "Facebook",
        display_name: "Facebook",
        name: "facebook",
        tags: ["logo","social"]
    },

    {
        component: feather.FastForward,
        class_name: "FastForward",
        display_name: "Fast Forward",
        name: "fast-forward",
        tags: ["music"]
    },

    {
        component: feather.Feather,
        class_name: "Feather",
        display_name: "Feather",
        name: "feather",
        tags: []
    },

    {
        component: feather.Figma,
        class_name: "Figma",
        display_name: "Figma",
        name: "figma",
        tags: ["logo","design","tool"]
    },

    {
        component: feather.FileMinus,
        class_name: "FileMinus",
        display_name: "File Minus",
        name: "file-minus",
        tags: ["delete","remove","erase"]
    },

    {
        component: feather.FilePlus,
        class_name: "FilePlus",
        display_name: "File Plus",
        name: "file-plus",
        tags: ["add","create","new"]
    },

    {
        component: feather.FileText,
        class_name: "FileText",
        display_name: "File Text",
        name: "file-text",
        tags: ["data","txt","pdf"]
    },

    {
        component: feather.File,
        class_name: "File",
        display_name: "File",
        name: "file",
        tags: []
    },

    {
        component: feather.Film,
        class_name: "Film",
        display_name: "Film",
        name: "film",
        tags: ["movie","video"]
    },

    {
        component: feather.Filter,
        class_name: "Filter",
        display_name: "Filter",
        name: "filter",
        tags: ["funnel","hopper"]
    },

    {
        component: feather.Flag,
        class_name: "Flag",
        display_name: "Flag",
        name: "flag",
        tags: ["report"]
    },

    {
        component: feather.FolderMinus,
        class_name: "FolderMinus",
        display_name: "Folder Minus",
        name: "folder-minus",
        tags: ["directory"]
    },

    {
        component: feather.FolderPlus,
        class_name: "FolderPlus",
        display_name: "Folder Plus",
        name: "folder-plus",
        tags: ["directory"]
    },

    {
        component: feather.Folder,
        class_name: "Folder",
        display_name: "Folder",
        name: "folder",
        tags: ["directory"]
    },

    {
        component: feather.Framer,
        class_name: "Framer",
        display_name: "Framer",
        name: "framer",
        tags: ["logo","design","tool"]
    },

    {
        component: feather.Frown,
        class_name: "Frown",
        display_name: "Frown",
        name: "frown",
        tags: ["emoji","face","bad","sad","emotion"]
    },

    {
        component: feather.Gift,
        class_name: "Gift",
        display_name: "Gift",
        name: "gift",
        tags: ["present","box","birthday","party"]
    },

    {
        component: feather.GitBranch,
        class_name: "GitBranch",
        display_name: "Git Branch",
        name: "git-branch",
        tags: ["code","version control"]
    },

    {
        component: feather.GitCommit,
        class_name: "GitCommit",
        display_name: "Git Commit",
        name: "git-commit",
        tags: ["code","version control"]
    },

    {
        component: feather.GitMerge,
        class_name: "GitMerge",
        display_name: "Git Merge",
        name: "git-merge",
        tags: ["code","version control"]
    },

    {
        component: feather.GitPullRequest,
        class_name: "GitPullRequest",
        display_name: "Git Pull Request",
        name: "git-pull-request",
        tags: ["code","version control"]
    },

    {
        component: feather.Github,
        class_name: "Github",
        display_name: "Github",
        name: "github",
        tags: ["logo","version control"]
    },

    {
        component: feather.Gitlab,
        class_name: "Gitlab",
        display_name: "Gitlab",
        name: "gitlab",
        tags: ["logo","version control"]
    },

    {
        component: feather.Globe,
        class_name: "Globe",
        display_name: "Globe",
        name: "globe",
        tags: ["world","browser","language","translate"]
    },

    {
        component: feather.Grid,
        class_name: "Grid",
        display_name: "Grid",
        name: "grid",
        tags: []
    },

    {
        component: feather.HardDrive,
        class_name: "HardDrive",
        display_name: "Hard Drive",
        name: "hard-drive",
        tags: ["computer","server","memory","data"]
    },

    {
        component: feather.Hash,
        class_name: "Hash",
        display_name: "Hash",
        name: "hash",
        tags: ["hashtag","number","pound"]
    },

    {
        component: feather.Headphones,
        class_name: "Headphones",
        display_name: "Headphones",
        name: "headphones",
        tags: ["music","audio","sound"]
    },

    {
        component: feather.Heart,
        class_name: "Heart",
        display_name: "Heart",
        name: "heart",
        tags: ["like","love","emotion"]
    },

    {
        component: feather.HelpCircle,
        class_name: "HelpCircle",
        display_name: "Help Circle",
        name: "help-circle",
        tags: ["question mark"]
    },

    {
        component: feather.Hexagon,
        class_name: "Hexagon",
        display_name: "Hexagon",
        name: "hexagon",
        tags: ["shape","node.js","logo"]
    },

    {
        component: feather.Home,
        class_name: "Home",
        display_name: "Home",
        name: "home",
        tags: ["house","living"]
    },

    {
        component: feather.Image,
        class_name: "Image",
        display_name: "Image",
        name: "image",
        tags: ["picture"]
    },

    {
        component: feather.Inbox,
        class_name: "Inbox",
        display_name: "Inbox",
        name: "inbox",
        tags: ["email"]
    },

    {
        component: feather.Info,
        class_name: "Info",
        display_name: "Info",
        name: "info",
        tags: []
    },

    {
        component: feather.Instagram,
        class_name: "Instagram",
        display_name: "Instagram",
        name: "instagram",
        tags: ["logo","camera"]
    },

    {
        component: feather.Italic,
        class_name: "Italic",
        display_name: "Italic",
        name: "italic",
        tags: []
    },

    {
        component: feather.Key,
        class_name: "Key",
        display_name: "Key",
        name: "key",
        tags: ["password","login","authentication","secure"]
    },

    {
        component: feather.Layers,
        class_name: "Layers",
        display_name: "Layers",
        name: "layers",
        tags: ["stack"]
    },

    {
        component: feather.Layout,
        class_name: "Layout",
        display_name: "Layout",
        name: "layout",
        tags: ["window","webpage"]
    },

    {
        component: feather.LifeBuoy,
        class_name: "LifeBuoy",
        display_name: "Life Buoy",
        name: "life-buoy",
        tags: []
    },

    {
        component: feather.Link2,
        class_name: "Link2",
        display_name: "Link 2",
        name: "link-2",
        tags: ["chain","url"]
    },

    {
        component: feather.Link,
        class_name: "Link",
        display_name: "Link",
        name: "link",
        tags: ["chain","url"]
    },

    {
        component: feather.Linkedin,
        class_name: "Linkedin",
        display_name: "Linkedin",
        name: "linkedin",
        tags: ["logo","social media"]
    },

    {
        component: feather.List,
        class_name: "List",
        display_name: "List",
        name: "list",
        tags: ["options"]
    },

    {
        component: feather.Loader,
        class_name: "Loader",
        display_name: "Loader",
        name: "loader",
        tags: []
    },

    {
        component: feather.Lock,
        class_name: "Lock",
        display_name: "Lock",
        name: "lock",
        tags: ["security","password","secure"]
    },

    {
        component: feather.LogIn,
        class_name: "LogIn",
        display_name: "Log In",
        name: "log-in",
        tags: ["sign in","arrow","enter"]
    },

    {
        component: feather.LogOut,
        class_name: "LogOut",
        display_name: "Log Out",
        name: "log-out",
        tags: ["sign out","arrow","exit"]
    },

    {
        component: feather.Mail,
        class_name: "Mail",
        display_name: "Mail",
        name: "mail",
        tags: ["email","message"]
    },

    {
        component: feather.MapPin,
        class_name: "MapPin",
        display_name: "Map Pin",
        name: "map-pin",
        tags: ["location","navigation","travel","marker"]
    },

    {
        component: feather.Map,
        class_name: "Map",
        display_name: "Map",
        name: "map",
        tags: ["location","navigation","travel"]
    },

    {
        component: feather.Maximize2,
        class_name: "Maximize2",
        display_name: "Maximize 2",
        name: "maximize-2",
        tags: ["fullscreen","arrows","expand"]
    },

    {
        component: feather.Maximize,
        class_name: "Maximize",
        display_name: "Maximize",
        name: "maximize",
        tags: ["fullscreen"]
    },

    {
        component: feather.Meh,
        class_name: "Meh",
        display_name: "Meh",
        name: "meh",
        tags: ["emoji","face","neutral","emotion"]
    },

    {
        component: feather.Menu,
        class_name: "Menu",
        display_name: "Menu",
        name: "menu",
        tags: ["bars","navigation","hamburger"]
    },

    {
        component: feather.MessageCircle,
        class_name: "MessageCircle",
        display_name: "Message Circle",
        name: "message-circle",
        tags: ["comment","chat"]
    },

    {
        component: feather.MessageSquare,
        class_name: "MessageSquare",
        display_name: "Message Square",
        name: "message-square",
        tags: ["comment","chat"]
    },

    {
        component: feather.MicOff,
        class_name: "MicOff",
        display_name: "Mic Off",
        name: "mic-off",
        tags: ["record","sound","mute"]
    },

    {
        component: feather.Mic,
        class_name: "Mic",
        display_name: "Mic",
        name: "mic",
        tags: ["record","sound","listen"]
    },

    {
        component: feather.Minimize2,
        class_name: "Minimize2",
        display_name: "Minimize 2",
        name: "minimize-2",
        tags: ["exit fullscreen","arrows","close"]
    },

    {
        component: feather.Minimize,
        class_name: "Minimize",
        display_name: "Minimize",
        name: "minimize",
        tags: ["exit fullscreen","close"]
    },

    {
        component: feather.MinusCircle,
        class_name: "MinusCircle",
        display_name: "Minus Circle",
        name: "minus-circle",
        tags: []
    },

    {
        component: feather.MinusSquare,
        class_name: "MinusSquare",
        display_name: "Minus Square",
        name: "minus-square",
        tags: []
    },

    {
        component: feather.Minus,
        class_name: "Minus",
        display_name: "Minus",
        name: "minus",
        tags: ["subtract"]
    },

    {
        component: feather.Monitor,
        class_name: "Monitor",
        display_name: "Monitor",
        name: "monitor",
        tags: ["tv","screen","display"]
    },

    {
        component: feather.Moon,
        class_name: "Moon",
        display_name: "Moon",
        name: "moon",
        tags: ["dark","night"]
    },

    {
        component: feather.MoreHorizontal,
        class_name: "MoreHorizontal",
        display_name: "More Horizontal",
        name: "more-horizontal",
        tags: ["ellipsis"]
    },

    {
        component: feather.MoreVertical,
        class_name: "MoreVertical",
        display_name: "More Vertical",
        name: "more-vertical",
        tags: ["ellipsis"]
    },

    {
        component: feather.MousePointer,
        class_name: "MousePointer",
        display_name: "Mouse Pointer",
        name: "mouse-pointer",
        tags: ["arrow","cursor"]
    },

    {
        component: feather.Move,
        class_name: "Move",
        display_name: "Move",
        name: "move",
        tags: ["arrows"]
    },

    {
        component: feather.Music,
        class_name: "Music",
        display_name: "Music",
        name: "music",
        tags: ["note"]
    },

    {
        component: feather.Navigation2,
        class_name: "Navigation2",
        display_name: "Navigation 2",
        name: "navigation-2",
        tags: ["location","travel"]
    },

    {
        component: feather.Navigation,
        class_name: "Navigation",
        display_name: "Navigation",
        name: "navigation",
        tags: ["location","travel"]
    },

    {
        component: feather.Octagon,
        class_name: "Octagon",
        display_name: "Octagon",
        name: "octagon",
        tags: ["stop"]
    },

    {
        component: feather.Package,
        class_name: "Package",
        display_name: "Package",
        name: "package",
        tags: ["box","container"]
    },

    {
        component: feather.Paperclip,
        class_name: "Paperclip",
        display_name: "Paperclip",
        name: "paperclip",
        tags: ["attachment"]
    },

    {
        component: feather.PauseCircle,
        class_name: "PauseCircle",
        display_name: "Pause Circle",
        name: "pause-circle",
        tags: ["music","audio","stop"]
    },

    {
        component: feather.Pause,
        class_name: "Pause",
        display_name: "Pause",
        name: "pause",
        tags: ["music","stop"]
    },

    {
        component: feather.PenTool,
        class_name: "PenTool",
        display_name: "Pen Tool",
        name: "pen-tool",
        tags: ["vector","drawing"]
    },

    {
        component: feather.Percent,
        class_name: "Percent",
        display_name: "Percent",
        name: "percent",
        tags: ["discount"]
    },

    {
        component: feather.PhoneCall,
        class_name: "PhoneCall",
        display_name: "Phone Call",
        name: "phone-call",
        tags: ["ring"]
    },

    {
        component: feather.PhoneForwarded,
        class_name: "PhoneForwarded",
        display_name: "Phone Forwarded",
        name: "phone-forwarded",
        tags: ["call"]
    },

    {
        component: feather.PhoneIncoming,
        class_name: "PhoneIncoming",
        display_name: "Phone Incoming",
        name: "phone-incoming",
        tags: ["call"]
    },

    {
        component: feather.PhoneMissed,
        class_name: "PhoneMissed",
        display_name: "Phone Missed",
        name: "phone-missed",
        tags: ["call"]
    },

    {
        component: feather.PhoneOff,
        class_name: "PhoneOff",
        display_name: "Phone Off",
        name: "phone-off",
        tags: ["call","mute"]
    },

    {
        component: feather.PhoneOutgoing,
        class_name: "PhoneOutgoing",
        display_name: "Phone Outgoing",
        name: "phone-outgoing",
        tags: ["call"]
    },

    {
        component: feather.Phone,
        class_name: "Phone",
        display_name: "Phone",
        name: "phone",
        tags: ["call"]
    },

    {
        component: feather.PieChart,
        class_name: "PieChart",
        display_name: "Pie Chart",
        name: "pie-chart",
        tags: ["statistics","diagram"]
    },

    {
        component: feather.PlayCircle,
        class_name: "PlayCircle",
        display_name: "Play Circle",
        name: "play-circle",
        tags: ["music","start"]
    },

    {
        component: feather.Play,
        class_name: "Play",
        display_name: "Play",
        name: "play",
        tags: ["music","start"]
    },

    {
        component: feather.PlusCircle,
        class_name: "PlusCircle",
        display_name: "Plus Circle",
        name: "plus-circle",
        tags: ["add","new"]
    },

    {
        component: feather.PlusSquare,
        class_name: "PlusSquare",
        display_name: "Plus Square",
        name: "plus-square",
        tags: ["add","new"]
    },

    {
        component: feather.Plus,
        class_name: "Plus",
        display_name: "Plus",
        name: "plus",
        tags: ["add","new"]
    },

    {
        component: feather.Pocket,
        class_name: "Pocket",
        display_name: "Pocket",
        name: "pocket",
        tags: ["logo","save"]
    },

    {
        component: feather.Power,
        class_name: "Power",
        display_name: "Power",
        name: "power",
        tags: ["on","off"]
    },

    {
        component: feather.Printer,
        class_name: "Printer",
        display_name: "Printer",
        name: "printer",
        tags: ["fax","office","device"]
    },

    {
        component: feather.Radio,
        class_name: "Radio",
        display_name: "Radio",
        name: "radio",
        tags: ["signal"]
    },

    {
        component: feather.RefreshCcw,
        class_name: "RefreshCcw",
        display_name: "Refresh Ccw",
        name: "refresh-ccw",
        tags: ["arrows"]
    },

    {
        component: feather.RefreshCw,
        class_name: "RefreshCw",
        display_name: "Refresh Cw",
        name: "refresh-cw",
        tags: ["synchronise","arrows"]
    },

    {
        component: feather.Repeat,
        class_name: "Repeat",
        display_name: "Repeat",
        name: "repeat",
        tags: ["loop","arrows"]
    },

    {
        component: feather.Rewind,
        class_name: "Rewind",
        display_name: "Rewind",
        name: "rewind",
        tags: ["music"]
    },

    {
        component: feather.RotateCcw,
        class_name: "RotateCcw",
        display_name: "Rotate Ccw",
        name: "rotate-ccw",
        tags: ["arrow"]
    },

    {
        component: feather.RotateCw,
        class_name: "RotateCw",
        display_name: "Rotate Cw",
        name: "rotate-cw",
        tags: ["arrow"]
    },

    {
        component: feather.Rss,
        class_name: "Rss",
        display_name: "Rss",
        name: "rss",
        tags: ["feed","subscribe"]
    },

    {
        component: feather.Save,
        class_name: "Save",
        display_name: "Save",
        name: "save",
        tags: ["floppy disk"]
    },

    {
        component: feather.Scissors,
        class_name: "Scissors",
        display_name: "Scissors",
        name: "scissors",
        tags: ["cut"]
    },

    {
        component: feather.Search,
        class_name: "Search",
        display_name: "Search",
        name: "search",
        tags: ["find","magnifier","magnifying glass"]
    },

    {
        component: feather.Send,
        class_name: "Send",
        display_name: "Send",
        name: "send",
        tags: ["message","mail","email","paper airplane","paper aeroplane"]
    },

    {
        component: feather.Server,
        class_name: "Server",
        display_name: "Server",
        name: "server",
        tags: []
    },

    {
        component: feather.Settings,
        class_name: "Settings",
        display_name: "Settings",
        name: "settings",
        tags: ["cog","edit","gear","preferences"]
    },

    {
        component: feather.Share2,
        class_name: "Share2",
        display_name: "Share 2",
        name: "share-2",
        tags: ["network","connections"]
    },

    {
        component: feather.Share,
        class_name: "Share",
        display_name: "Share",
        name: "share",
        tags: []
    },

    {
        component: feather.ShieldOff,
        class_name: "ShieldOff",
        display_name: "Shield Off",
        name: "shield-off",
        tags: ["security","insecure"]
    },

    {
        component: feather.Shield,
        class_name: "Shield",
        display_name: "Shield",
        name: "shield",
        tags: ["security","secure"]
    },

    {
        component: feather.ShoppingBag,
        class_name: "ShoppingBag",
        display_name: "Shopping Bag",
        name: "shopping-bag",
        tags: ["ecommerce","cart","purchase","store"]
    },

    {
        component: feather.ShoppingCart,
        class_name: "ShoppingCart",
        display_name: "Shopping Cart",
        name: "shopping-cart",
        tags: ["ecommerce","cart","purchase","store"]
    },

    {
        component: feather.Shuffle,
        class_name: "Shuffle",
        display_name: "Shuffle",
        name: "shuffle",
        tags: ["music"]
    },

    {
        component: feather.Sidebar,
        class_name: "Sidebar",
        display_name: "Sidebar",
        name: "sidebar",
        tags: []
    },

    {
        component: feather.SkipBack,
        class_name: "SkipBack",
        display_name: "Skip Back",
        name: "skip-back",
        tags: ["music"]
    },

    {
        component: feather.SkipForward,
        class_name: "SkipForward",
        display_name: "Skip Forward",
        name: "skip-forward",
        tags: ["music"]
    },

    {
        component: feather.Slack,
        class_name: "Slack",
        display_name: "Slack",
        name: "slack",
        tags: ["logo"]
    },

    {
        component: feather.Slash,
        class_name: "Slash",
        display_name: "Slash",
        name: "slash",
        tags: ["ban","no"]
    },

    {
        component: feather.Sliders,
        class_name: "Sliders",
        display_name: "Sliders",
        name: "sliders",
        tags: ["settings","controls"]
    },

    {
        component: feather.Smartphone,
        class_name: "Smartphone",
        display_name: "Smartphone",
        name: "smartphone",
        tags: ["cellphone","device"]
    },

    {
        component: feather.Smile,
        class_name: "Smile",
        display_name: "Smile",
        name: "smile",
        tags: ["emoji","face","happy","good","emotion"]
    },

    {
        component: feather.Speaker,
        class_name: "Speaker",
        display_name: "Speaker",
        name: "speaker",
        tags: ["audio","music"]
    },

    {
        component: feather.Square,
        class_name: "Square",
        display_name: "Square",
        name: "square",
        tags: []
    },

    {
        component: feather.Star,
        class_name: "Star",
        display_name: "Star",
        name: "star",
        tags: ["bookmark","favorite","like"]
    },

    {
        component: feather.StopCircle,
        class_name: "StopCircle",
        display_name: "Stop Circle",
        name: "stop-circle",
        tags: ["media","music"]
    },

    {
        component: feather.Sun,
        class_name: "Sun",
        display_name: "Sun",
        name: "sun",
        tags: ["brightness","weather","light"]
    },

    {
        component: feather.Sunrise,
        class_name: "Sunrise",
        display_name: "Sunrise",
        name: "sunrise",
        tags: ["weather","time","morning","day"]
    },

    {
        component: feather.Sunset,
        class_name: "Sunset",
        display_name: "Sunset",
        name: "sunset",
        tags: ["weather","time","evening","night"]
    },

    {
        component: feather.Tablet,
        class_name: "Tablet",
        display_name: "Tablet",
        name: "tablet",
        tags: ["device"]
    },

    {
        component: feather.Tag,
        class_name: "Tag",
        display_name: "Tag",
        name: "tag",
        tags: ["label"]
    },

    {
        component: feather.Target,
        class_name: "Target",
        display_name: "Target",
        name: "target",
        tags: ["logo","bullseye"]
    },

    {
        component: feather.Terminal,
        class_name: "Terminal",
        display_name: "Terminal",
        name: "terminal",
        tags: ["code","command line","prompt"]
    },

    {
        component: feather.Thermometer,
        class_name: "Thermometer",
        display_name: "Thermometer",
        name: "thermometer",
        tags: ["temperature","celsius","fahrenheit","weather"]
    },

    {
        component: feather.ThumbsDown,
        class_name: "ThumbsDown",
        display_name: "Thumbs Down",
        name: "thumbs-down",
        tags: ["dislike","bad","emotion"]
    },

    {
        component: feather.ThumbsUp,
        class_name: "ThumbsUp",
        display_name: "Thumbs Up",
        name: "thumbs-up",
        tags: ["like","good","emotion"]
    },

    {
        component: feather.ToggleLeft,
        class_name: "ToggleLeft",
        display_name: "Toggle Left",
        name: "toggle-left",
        tags: ["on","off","switch"]
    },

    {
        component: feather.ToggleRight,
        class_name: "ToggleRight",
        display_name: "Toggle Right",
        name: "toggle-right",
        tags: ["on","off","switch"]
    },

    {
        component: feather.Tool,
        class_name: "Tool",
        display_name: "Tool",
        name: "tool",
        tags: ["settings","spanner"]
    },

    {
        component: feather.Trash2,
        class_name: "Trash2",
        display_name: "Trash 2",
        name: "trash-2",
        tags: ["garbage","delete","remove","bin"]
    },

    {
        component: feather.Trash,
        class_name: "Trash",
        display_name: "Trash",
        name: "trash",
        tags: ["garbage","delete","remove","bin"]
    },

    {
        component: feather.Trello,
        class_name: "Trello",
        display_name: "Trello",
        name: "trello",
        tags: []
    },

    {
        component: feather.TrendingDown,
        class_name: "TrendingDown",
        display_name: "Trending Down",
        name: "trending-down",
        tags: []
    },

    {
        component: feather.TrendingUp,
        class_name: "TrendingUp",
        display_name: "Trending Up",
        name: "trending-up",
        tags: []
    },

    {
        component: feather.Triangle,
        class_name: "Triangle",
        display_name: "Triangle",
        name: "triangle",
        tags: ["delta"]
    },

    {
        component: feather.Truck,
        class_name: "Truck",
        display_name: "Truck",
        name: "truck",
        tags: ["delivery","van","shipping","transport","lorry"]
    },

    {
        component: feather.Tv,
        class_name: "Tv",
        display_name: "Tv",
        name: "tv",
        tags: ["television","stream"]
    },

    {
        component: feather.Twitch,
        class_name: "Twitch",
        display_name: "Twitch",
        name: "twitch",
        tags: ["logo"]
    },

    {
        component: feather.Twitter,
        class_name: "Twitter",
        display_name: "Twitter",
        name: "twitter",
        tags: ["logo","social"]
    },

    {
        component: feather.Type,
        class_name: "Type",
        display_name: "Type",
        name: "type",
        tags: ["text"]
    },

    {
        component: feather.Umbrella,
        class_name: "Umbrella",
        display_name: "Umbrella",
        name: "umbrella",
        tags: ["rain","weather"]
    },

    {
        component: feather.Underline,
        class_name: "Underline",
        display_name: "Underline",
        name: "underline",
        tags: []
    },

    {
        component: feather.Unlock,
        class_name: "Unlock",
        display_name: "Unlock",
        name: "unlock",
        tags: ["security"]
    },

    {
        component: feather.UploadCloud,
        class_name: "UploadCloud",
        display_name: "Upload Cloud",
        name: "upload-cloud",
        tags: []
    },

    {
        component: feather.Upload,
        class_name: "Upload",
        display_name: "Upload",
        name: "upload",
        tags: []
    },

    {
        component: feather.UserCheck,
        class_name: "UserCheck",
        display_name: "User Check",
        name: "user-check",
        tags: ["followed","subscribed"]
    },

    {
        component: feather.UserMinus,
        class_name: "UserMinus",
        display_name: "User Minus",
        name: "user-minus",
        tags: ["delete","remove","unfollow","unsubscribe"]
    },

    {
        component: feather.UserPlus,
        class_name: "UserPlus",
        display_name: "User Plus",
        name: "user-plus",
        tags: ["new","add","create","follow","subscribe"]
    },

    {
        component: feather.UserX,
        class_name: "UserX",
        display_name: "User X",
        name: "user-x",
        tags: ["delete","remove","unfollow","unsubscribe","unavailable"]
    },

    {
        component: feather.User,
        class_name: "User",
        display_name: "User",
        name: "user",
        tags: ["person","account"]
    },

    {
        component: feather.Users,
        class_name: "Users",
        display_name: "Users",
        name: "users",
        tags: ["group"]
    },

    {
        component: feather.VideoOff,
        class_name: "VideoOff",
        display_name: "Video Off",
        name: "video-off",
        tags: ["camera","movie","film"]
    },

    {
        component: feather.Video,
        class_name: "Video",
        display_name: "Video",
        name: "video",
        tags: ["camera","movie","film"]
    },

    {
        component: feather.Voicemail,
        class_name: "Voicemail",
        display_name: "Voicemail",
        name: "voicemail",
        tags: ["phone"]
    },

    {
        component: feather.Volume1,
        class_name: "Volume1",
        display_name: "Volume 1",
        name: "volume-1",
        tags: ["music","sound"]
    },

    {
        component: feather.Volume2,
        class_name: "Volume2",
        display_name: "Volume 2",
        name: "volume-2",
        tags: ["music","sound"]
    },

    {
        component: feather.VolumeX,
        class_name: "VolumeX",
        display_name: "Volume X",
        name: "volume-x",
        tags: ["music","sound","mute"]
    },

    {
        component: feather.Volume,
        class_name: "Volume",
        display_name: "Volume",
        name: "volume",
        tags: ["music","sound","mute"]
    },

    {
        component: feather.Watch,
        class_name: "Watch",
        display_name: "Watch",
        name: "watch",
        tags: ["clock","time"]
    },

    {
        component: feather.WifiOff,
        class_name: "WifiOff",
        display_name: "Wifi Off",
        name: "wifi-off",
        tags: ["disabled"]
    },

    {
        component: feather.Wifi,
        class_name: "Wifi",
        display_name: "Wifi",
        name: "wifi",
        tags: ["connection","signal","wireless"]
    },

    {
        component: feather.Wind,
        class_name: "Wind",
        display_name: "Wind",
        name: "wind",
        tags: ["weather","air"]
    },

    {
        component: feather.XCircle,
        class_name: "XCircle",
        display_name: "X Circle",
        name: "x-circle",
        tags: ["cancel","close","delete","remove","times","clear"]
    },

    {
        component: feather.XOctagon,
        class_name: "XOctagon",
        display_name: "X Octagon",
        name: "x-octagon",
        tags: ["delete","stop","alert","warning","times","clear"]
    },

    {
        component: feather.XSquare,
        class_name: "XSquare",
        display_name: "X Square",
        name: "x-square",
        tags: ["cancel","close","delete","remove","times","clear"]
    },

    {
        component: feather.X,
        class_name: "X",
        display_name: "X",
        name: "x",
        tags: ["cancel","close","delete","remove","times","clear"]
    },

    {
        component: feather.Youtube,
        class_name: "Youtube",
        display_name: "Youtube",
        name: "youtube",
        tags: ["logo","video","play"]
    },

    {
        component: feather.ZapOff,
        class_name: "ZapOff",
        display_name: "Zap Off",
        name: "zap-off",
        tags: ["flash","camera","lightning"]
    },

    {
        component: feather.Zap,
        class_name: "Zap",
        display_name: "Zap",
        name: "zap",
        tags: ["flash","camera","lightning"]
    },

    {
        component: feather.ZoomIn,
        class_name: "ZoomIn",
        display_name: "Zoom In",
        name: "zoom-in",
        tags: ["magnifying glass"]
    },

    {
        component: feather.ZoomOut,
        class_name: "ZoomOut",
        display_name: "Zoom Out",
        name: "zoom-out",
        tags: ["magnifying glass"]
    }
];

export const ICON_TAGS = [
    "account",
    "achievement",
    "action",
    "add",
    "aim",
    "air",
    "airplay",
    "alarm",
    "album",
    "alert",
    "arrow",
    "arrows",
    "at",
    "attachment",
    "audio",
    "authentication",
    "bad",
    "badge",
    "bag",
    "baggage",
    "ban",
    "bars",
    "beverage",
    "bin",
    "birthday",
    "blizzard",
    "bolt",
    "booklet",
    "bookmark",
    "box",
    "brightness",
    "browser",
    "bullseye",
    "cafe",
    "call",
    "camera",
    "cancel",
    "cart",
    "cast",
    "cc",
    "cd",
    "cellphone",
    "celsius",
    "center",
    "chain",
    "change",
    "chat",
    "chromecast",
    "clear",
    "clip",
    "clock",
    "clone",
    "close",
    "cmd",
    "code",
    "cog",
    "command line",
    "comment",
    "computer",
    "connection",
    "connections",
    "container",
    "controls",
    "copy",
    "create",
    "cube",
    "cup",
    "currency",
    "cursor",
    "cut",
    "danger",
    "dark",
    "data",
    "date",
    "day",
    "delete",
    "delivery",
    "delta",
    "design",
    "device",
    "diagram",
    "dictionary",
    "direction",
    "directory",
    "disabled",
    "discount",
    "dislike",
    "display",
    "drawing",
    "drink",
    "duplicate",
    "dvd",
    "ecommerce",
    "edit",
    "electricity",
    "ellipsis",
    "email",
    "emoji",
    "emotion",
    "enter",
    "erase",
    "evening",
    "exit",
    "exit fullscreen",
    "expand",
    "face",
    "fahrenheit",
    "favorite",
    "fax",
    "feed",
    "film",
    "find",
    "flash",
    "floppy disk",
    "folder",
    "follow",
    "followed",
    "fullscreen",
    "funnel",
    "garbage",
    "gear",
    "good",
    "graph",
    "group",
    "hamburger",
    "happy",
    "hashtag",
    "health",
    "hidden",
    "hide",
    "hopper",
    "hot",
    "house",
    "image",
    "index",
    "insecure",
    "justified",
    "keyboard",
    "label",
    "language",
    "layout",
    "left",
    "library",
    "light",
    "lightning",
    "like",
    "listen",
    "living",
    "location",
    "login",
    "logo",
    "loop",
    "lorry",
    "love",
    "magazine",
    "magnifier",
    "magnifying glass",
    "mail",
    "marker",
    "media",
    "memory",
    "mention",
    "message",
    "mirroring",
    "money",
    "morning",
    "motion",
    "movie",
    "mug",
    "music",
    "mute",
    "navigation",
    "network",
    "neutral",
    "new",
    "night",
    "no",
    "node.js",
    "note",
    "notification",
    "number",
    "off",
    "office",
    "on",
    "options",
    "outbound",
    "paper aeroplane",
    "paper airplane",
    "party",
    "password",
    "payment",
    "pdf",
    "pencil",
    "person",
    "phone",
    "photo",
    "picture",
    "play",
    "pound",
    "power",
    "preferences",
    "present",
    "processor",
    "programming",
    "prompt",
    "pulse",
    "purchase",
    "question mark",
    "rain",
    "read",
    "record",
    "remove",
    "report",
    "return",
    "right",
    "ring",
    "sad",
    "safari",
    "save",
    "screen",
    "secure",
    "security",
    "server",
    "settings",
    "shape",
    "shipping",
    "shower",
    "sign in",
    "sign out",
    "signal",
    "silent",
    "social",
    "social media",
    "sound",
    "source",
    "spanner",
    "stack",
    "start",
    "statistics",
    "stop",
    "storage",
    "store",
    "stream",
    "subscribe",
    "subscribed",
    "subtract",
    "switch",
    "synchronise",
    "tag",
    "target",
    "tea",
    "technology",
    "television",
    "temperature",
    "terminal",
    "text",
    "text alignment",
    "time",
    "times",
    "tool",
    "translate",
    "transport",
    "travel",
    "tv",
    "txt",
    "unavailable",
    "unfollow",
    "unsubscribe",
    "url",
    "van",
    "vector",
    "version control",
    "video",
    "view",
    "warning",
    "watch",
    "water",
    "weather",
    "webpage",
    "window",
    "wireless",
    "work",
    "world",
    "zero"
];
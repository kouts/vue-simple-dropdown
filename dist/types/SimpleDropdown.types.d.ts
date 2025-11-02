export declare const Props: {
    readonly itemSelector: {
        readonly type: StringConstructor;
        readonly default: "li > a:not(.disabled):not(:disabled)";
    };
    readonly enableArrowNavigation: {
        readonly type: BooleanConstructor;
        readonly default: true;
    };
};
export type PopperContentRef = {
    $el: HTMLElement;
};
export type PopperRef = {
    $_targetNodes: HTMLElement[];
};
export type BaseDropdownRef = {
    show: () => void;
    hide: () => void;
    $el: HTMLElement;
    $refs: {
        popperContent: PopperContentRef;
        popper: PopperRef;
    };
};

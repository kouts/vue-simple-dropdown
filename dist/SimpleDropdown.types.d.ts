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
export declare type PopperContentRef = {
    $el: HTMLElement;
};
export declare type PopperRef = {
    $_targetNodes: HTMLElement[];
};
export declare type BaseDropdownRef = {
    show: () => void;
    hide: () => void;
    $el: HTMLElement;
    $refs: {
        popperContent: PopperContentRef;
        popper: PopperRef;
    };
};

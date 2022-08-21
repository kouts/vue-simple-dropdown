declare const _sfc_main: import("vue").DefineComponent<{
    readonly itemSelector: {
        readonly type: StringConstructor;
        readonly default: "li > a:not(.disabled):not(:disabled)";
    };
    readonly enableArrowNavigation: {
        readonly type: BooleanConstructor;
        readonly default: true;
    };
}, {
    props: Readonly<import("@vue/shared").LooseRequired<Readonly<import("vue").ExtractPropTypes<{
        readonly itemSelector: {
            readonly type: StringConstructor;
            readonly default: "li > a:not(.disabled):not(:disabled)";
        };
        readonly enableArrowNavigation: {
            readonly type: BooleanConstructor;
            readonly default: true;
        };
    }>> & {
        [x: string & `on${string}`]: ((...args: any[]) => any) | ((...args: unknown[]) => any) | undefined;
    }>>;
    ARROW_UP_KEY: string;
    ARROW_DOWN_KEY: string;
    ESCAPE_KEY: string;
    ENTER_KEY: string;
    SPACE_KEY: string;
    baseDropdownRef: import("vue").Ref<{
        show: () => void;
        hide: () => void;
        $el: HTMLElement;
        $refs: {
            popperContent: {
                $el: HTMLElement;
            };
            popper: {
                $_targetNodes: HTMLElement[];
            };
        };
    } | null>;
    popoverKeydown: (e: KeyboardEvent) => void;
    show: () => void;
    hide: () => void;
    Dropdown: any;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    readonly itemSelector: {
        readonly type: StringConstructor;
        readonly default: "li > a:not(.disabled):not(:disabled)";
    };
    readonly enableArrowNavigation: {
        readonly type: BooleanConstructor;
        readonly default: true;
    };
}>>, {
    readonly itemSelector: string;
    readonly enableArrowNavigation: boolean;
}>;
export default _sfc_main;

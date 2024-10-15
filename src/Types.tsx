import { FunctionComponent } from "react";

export type DeepReadonly<T> = { readonly [K in keyof T]: DeepReadonly<T[K]> };

export const readonly = <P extends object>(
    Component: FunctionComponent<DeepReadonly<P>>
): FunctionComponent<DeepReadonly<P>> => {
    const ReadOnlyComponent: FunctionComponent<DeepReadonly<P>> = (props) => (
        <Component {...props} />
    );

    ReadOnlyComponent.displayName = `ReadOnly(${Component.displayName || Component.name || 'Component'})`;

    return ReadOnlyComponent;
};


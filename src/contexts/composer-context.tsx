import React, { PropsWithChildren } from "react";

interface ContextProviderProps {
    contexts: React.FC<PropsWithChildren>[];
    children: JSX.Element;
}

export const ContextProvider: React.FC<ContextProviderProps> = ({
    contexts,
    children,
}) =>
    contexts.reduceRight(
        (AccumulatedContexts, CurrentContext) => (
            <CurrentContext>{AccumulatedContexts}</CurrentContext>
        ),
        children
    );

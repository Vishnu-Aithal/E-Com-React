import React, { PropsWithChildren } from "react";

interface ContextProviderProps {
    contexts: React.FC<PropsWithChildren>[];
    children: React.ReactNode;
}
type Composer = (props: ContextProviderProps) => React.ReactNode;
export const ContextProvider: Composer = ({ contexts, children }) =>
    contexts.reduceRight(
        (AccumulatedContexts, CurrentContext) => (
            <CurrentContext>{AccumulatedContexts}</CurrentContext>
        ),
        children
    );

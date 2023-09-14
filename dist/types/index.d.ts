import { ReactChild } from 'react';
export declare type ObjectOf<T> = {
    [key: string]: T;
};
export declare type ObjectInKeys<T extends Object, U> = {
    [key in keyof T]: U;
};
export declare type ObjectInUnion<T extends string, U> = {
    [key in T]: U;
};
export declare type AnyObject = ObjectOf<any>;
export declare type Optional<O extends {}> = {
    [K in keyof O]?: O[K] extends {} ? Optional<O[K]> : O[K];
};
export declare type OptionLess<O extends {}> = {
    [K in keyof O]-?: O[K] extends {} ? OptionLess<O[K]> : O[K];
};
export declare type OptionalShallow<O extends {}> = {
    [K in keyof O]?: O[K];
};
export declare type OptionLessShallow<O extends {}> = {
    [K in keyof O]-?: O[K];
};
export declare type JsxElement = null | string | ReactChild;
export declare type JsxElements = JsxElement | JsxElement[] | (JsxElement | JsxElement[])[];
export declare type JsxComponent<P extends AnyObject = {}> = (props: P) => JsxElements;
export declare type Nullable<T> = T | null;
export declare type IsEqual<T, U> = (<G>() => G extends T ? 1 : 2) extends <G>() => G extends U ? 1 : 2 ? true : false;
export declare type Func = () => void;
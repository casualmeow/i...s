export type ConvertEnumToType<T extends Record<string, string | number>> = keyof T;

export type EnumValues<T extends Record<string, string | number>> = T[keyof T];

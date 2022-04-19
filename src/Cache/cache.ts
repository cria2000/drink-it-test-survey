import { makeVar } from "@apollo/client";

export enum ELangauge {
    KOREAN,
    ENGLISH
}

export const languageVar = makeVar<ELangauge>(ELangauge.KOREAN)
export const predictVar = makeVar<number | undefined>(undefined)
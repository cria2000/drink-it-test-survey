import { makeVar } from "@apollo/client";

export enum ELangauge {
    KOREAN,
    ENGLISH
}

export const languageVar = makeVar<ELangauge>(ELangauge.KOREAN)
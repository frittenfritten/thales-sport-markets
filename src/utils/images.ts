import { TAGS_LIST } from '../constants/tags';

export const getTeamImageSource = (team: string, leagueTag: number) =>
    leagueTag == 9010 ||
    leagueTag == 9012 ||
    leagueTag == 9015 ||
    leagueTag == 9014 ||
    leagueTag == 9007 ||
    leagueTag == 9016
        ? `/logos/${TAGS_LIST.find((t) => t.id == leagueTag)?.label}/${team
              .trim()
              .replaceAll(' ', '-')
              .toLowerCase()}.png`
        : `/logos/${TAGS_LIST.find((t) => t.id == leagueTag)?.label}/${team
              .trim()
              .replaceAll(' ', '-')
              .toLowerCase()}.svg`;

export const getOnImageError = (setSrc: (src: string) => void, leagueTag: number | string) => () => {
    setSrc(TAGS_LIST.find((t) => t.id === Number(leagueTag))?.logo || OVERTIME_LOGO);
};

export const OVERTIME_LOGO = '/logos/overtime-logo.png';

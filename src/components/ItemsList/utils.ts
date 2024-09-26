import { SpotifyTimeRange as SpotifyTimeRangeEnum } from 'enums';
import { SpotifyTimeRange } from 'types';

const labelToTimeRange = {
  [SpotifyTimeRangeEnum.shortTerm]: 'last 4 weeks',
  [SpotifyTimeRangeEnum.mediumTerm]: 'last 6 months',
  [SpotifyTimeRangeEnum.longTerm]: 'last 12 months',
};

export const getLabelFromTimeRange = (timeRange: SpotifyTimeRange) =>
  labelToTimeRange[timeRange];

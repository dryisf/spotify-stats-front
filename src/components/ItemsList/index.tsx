import { SpotifyTimeRange as SpotifyTimeRangeEnum } from 'enums';
import { Item, SpotifyTimeRange } from 'types';
import { getLabelFromTimeRange } from './utils';
import { FC, ReactNode } from 'react';

type ComponentProps = {
  items?: Item[];
  loading: boolean;
  title: string;
  timeRange: SpotifyTimeRange;
  setTimeRange: (timeRange: SpotifyTimeRange) => void;
  children?: ReactNode;
};

const ItemsList: FC<ComponentProps> = ({
  items,
  loading,
  title,
  timeRange,
  setTimeRange,
  children,
}) => {
  return (
    <div className="flex h-full w-full flex-col items-center justify-center gap-8">
      <div className="flex justify-center">
        {`${title} (${getLabelFromTimeRange(timeRange)})`}
      </div>
      <div className="flex items-center justify-center gap-8">
        {Object.values(SpotifyTimeRangeEnum).map((timeRange) => (
          <button key={timeRange} onClick={() => setTimeRange(timeRange)}>
            {getLabelFromTimeRange(timeRange)}
          </button>
        ))}
      </div>
      {loading && <div>Loading...</div>}
      {items?.length ? (
        <div className="flex flex-wrap items-center justify-center gap-6">
          {items.map((item: Item) => (
            <div key={item.id} className="flex flex-col gap-1">
              <img className="h-96 w-auto" src={item.images[0].url}></img>
              <p>{item.name}</p>
            </div>
          ))}
        </div>
      ) : (
        children
      )}
    </div>
  );
};

export default ItemsList;

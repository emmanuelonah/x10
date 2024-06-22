import { TextEngineView } from '__text-engine__/view';
import { ImageEngineView } from '__image-engine__/view';
import { VideoEngineView } from '__video-engine__/view';

export const config = {
  textSearch: {
    page: TextEngineView,
  },
  imageSearch: {
    page: ImageEngineView,
  },
  videoSearch: {
    page: VideoEngineView,
  },
};

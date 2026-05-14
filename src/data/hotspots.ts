export type HotspotAction =
  | 'zoom-laptop'
  | 'panel-books'
  | 'panel-spotify'
  | 'panel-photos'
  | 'panel-contact'
  | 'panel-miniatures'
  | 'easter-egg'
  | 'none'

export interface HotspotDef {
  id: string
  label: string
  left: string
  top: string
  width: string
  height: string
  action: HotspotAction
}

export const hotspots: HotspotDef[] = [
  // --- Main interactions ---
  {
    id: 'laptop',
    label: 'Projects & CV',
    left: '50.2%', top: '55.9%',
    width: '15%', height: '19%',
    action: 'zoom-laptop',
  },
  {
    id: 'books',
    label: 'What I\'m reading',
    left: '66%', top: '9.0%',
    width: '6.5%', height: '15%',
    action: 'panel-books',
  },
  {
    id: 'headphones',
    label: 'My playlist',
    left: '73%', top: '55%',
    width: '6%', height: '13%',
    action: 'panel-spotify',
  },
  {
    id: 'camera',
    label: 'Photos',
    left: '74.3%', top: '74.5%',
    width: '7%', height: '8%',
    action: 'panel-photos',
  },
  {
    id: 'pegboard',
    label: 'About me',
    left: '35.0%', top: '34.6%',
    width: '10%', height: '21%',
    action: 'panel-contact',
  },
  {
    id: 'paintbrushes',
    label: 'Miniatures',
    left: '64%', top: '59.0%',
    width: '4.7%', height: '20%',
    action: 'panel-miniatures',
  },

  // --- Easter eggs ---
  {
    id: 'cat-grey',
    label: '',
    left: '41.8%', top: '93.7%',
    width: '10%', height: '9%',
    action: 'easter-egg',
  },
  {
    id: 'cat-calico',
    label: '',
    left: '53.2%', top: '94.7%',
    width: '9%', height: '9%',
    action: 'easter-egg',
  },
  {
    id: 'gandalf',
    label: '',
    left: '78%', top: '9.1%',
    width: '5%', height: '15.2%',
    action: 'easter-egg',
  },
  {
    id: 'dragon',
    label: '',
    left: '65.5%', top: '27.0%',
    width: '6.5%', height: '15%',
    action: 'easter-egg',
  },
  {
    id: 'd20',
    label: '',
    left: '80.0%', top: '31.5%',
    width: '3.2%', height: '7%',
    action: 'easter-egg',
  },
]

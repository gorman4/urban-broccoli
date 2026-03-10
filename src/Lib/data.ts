

export type CaptionProps = {
  title: string;
};

export type NumberHeaderProps = {
  desc: string;
  num: string;
};

export type TrackComponentProps = {
  ismodalOpen: React.Dispatch<React.SetStateAction<boolean>>;
  setTrackingData: React.Dispatch<React.SetStateAction<any>>;
};

export type TrackingModalProps = {
  ismodalOpen: React.Dispatch<React.SetStateAction<boolean>>;
  trackingData: any;
};

export type MapProps ={
   lat: number;
  lng: number;
}
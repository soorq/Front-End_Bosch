type TypeUnionData<T> = {
  data: T[];
};
export type PropsAnalytic = {
  ids: string;
};
export type TypeCard = {
  avatar?: string;
  name: string;
  role: string;
  desc: string;
};
type TypeMenu = {
  url: string | '/';
  title: string;
};
export type TypeCardFeature = {
  id?: string;
  icon: string;
  title: string;
  desc: string;
};
export type TypePropsHighlight = {
  className?: string;
  language?: string;
  children?: React.ReactNode;
};
export type TypeTitleAbout = {
  icon?: string;
  text?: string;
  sizeIcon?: number;
};

export type TypeCardNewsProps = {
  img: string;
  title: string;
  desc: string;
  date: string;
  url: string;
};

export type TypePropsSlideCard = TypeUnionData<TypeCard>;
export type TypePropsFeatures = TypeUnionData<TypeCardFeature>;
export type TypeHeaderProps = TypeUnionData<TypeMenu>;
export type TypeAboutProps = TypeUnionData<TypeTitleAbout>;
export type TypeNewsProps = TypeUnionData<TypeCardNewsProps>;

export interface Quote {
  content: string;
  author?: string;
  authorSlug?: string;
  dateAdded?: Date;
  dateModified?: Date;
  length?: number;

  avatar?: string;
  views?: number;
  liked?: boolean;

}

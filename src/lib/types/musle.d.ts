declare type Muscle = {
  _id: string;
  name: string;
  image: string;
  description?: string;
} & DatabaseFields;
